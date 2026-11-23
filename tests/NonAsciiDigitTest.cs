namespace LuhnDotNetTest;

using LuhnDotNet;
using LuhnDotNet.Algorithm.Damm;
using LuhnDotNet.Algorithm.Luhn;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

/// <summary>
/// Tests that only the ASCII digits '0' to '9' are accepted as digits.
/// </summary>
/// <remarks>
/// <see cref="char.IsDigit(char)"/> also accepts the decimal digits of other scripts, for example Arabic-Indic or
/// fullwidth digits. Subtracting the code point of '0' from such a character doesn't yield its value. Accepting
/// them made validation return <see langword="true"/> for numbers that aren't valid, silently computed wrong
/// check digits or ended in an <see cref="IndexOutOfRangeException"/>, depending on the method and the
/// target framework.
/// </remarks>
public class NonAsciiDigitTest
{
    /// <summary>
    /// A digit string that is a valid payload for every algorithm under test.
    /// </summary>
    private const string Payload = "7992739871";

    /// <summary>
    /// Every character outside the ASCII range that <see cref="char.IsDigit(char)"/> accepts on the current runtime.
    /// </summary>
    private static readonly char[] NonAsciiDigits = Enumerable
        .Range(char.MinValue, char.MaxValue + 1)
        .Select(codePoint => (char)codePoint)
        .Where(character => character > '\u007F' && char.IsDigit(character))
        .ToArray();

    /// <summary>
    /// The operations that take a number as <see cref="string"/>.
    /// </summary>
    private static readonly Dictionary<string, Func<string, object>> NumberOperations = new()
    {
        ["Luhn.IsValidLuhnNumber"] = number => number.IsValidLuhnNumber(),
        ["Luhn.ComputeLuhnCheckDigit"] = number => number.ComputeLuhnCheckDigit(),
        ["Luhn.ComputeLuhnNumber"] = number => number.ComputeLuhnNumber(),
        ["Damm.IsValidDammNumber"] = number => number.IsValidDammNumber(),
        ["Damm.ComputeDammCheckDigit"] = number => number.ComputeDammCheckDigit(),
        ["Damm.ComputeDammNumber"] = number => number.ComputeDammNumber(),
        ["Mod11.IsValidMod11Number"] = number => number.IsValidMod11Number(),
        ["Mod11.ComputeMod11CheckDigit"] = number => number.ComputeMod11CheckDigit(),
        ["Mod11.ComputeMod11Number"] = number => number.ComputeMod11Number(),
#if NET8_0_OR_GREATER
        ["Luhn.IsValidLuhnNumber(span)"] = number => number.AsSpan().IsValidLuhnNumber(),
        ["Luhn.ComputeLuhnCheckDigit(span)"] = number => number.AsSpan().ComputeLuhnCheckDigit(),
        ["Luhn.ComputeLuhnNumber(span)"] = number => number.AsSpan().ComputeLuhnNumber(),
        ["Damm.IsValidDammNumber(span)"] = number => number.AsSpan().IsValidDammNumber(),
        ["Damm.ComputeDammCheckDigit(span)"] = number => number.AsSpan().ComputeDammCheckDigit(),
        ["Damm.ComputeDammNumber(span)"] = number => number.AsSpan().ComputeDammNumber(),
        ["Mod11.IsValidMod11Number(span)"] = number => number.AsSpan().IsValidMod11Number(),
        ["Mod11.ComputeMod11CheckDigit(span)"] = number => number.AsSpan().ComputeMod11CheckDigit(),
        ["Mod11.ComputeMod11Number(span)"] = number => number.AsSpan().ComputeMod11Number(),
#endif
    };

    /// <summary>
    /// The operations that take a check digit and the number it belongs to.
    /// </summary>
    private static readonly Dictionary<string, Func<char, string, object>> CheckDigitOperations = new()
    {
        ["Luhn.IsValidLuhnCheckDigit"] = (checkDigit, number) => checkDigit.IsValidLuhnCheckDigit(number),
        ["Damm.IsValidDammCheckDigit"] = (checkDigit, number) => checkDigit.IsValidDammCheckDigit(number),
        ["Mod11.IsValidMod11CheckDigit"] = (checkDigit, number) => checkDigit.IsValidMod11CheckDigit(number),
#if NET8_0_OR_GREATER
        ["Luhn.IsValidLuhnCheckDigit(span)"] = (checkDigit, number) => checkDigit.IsValidLuhnCheckDigit(number.AsSpan()),
        ["Damm.IsValidDammCheckDigit(span)"] = (checkDigit, number) => checkDigit.IsValidDammCheckDigit(number.AsSpan()),
        ["Mod11.IsValidMod11CheckDigit(span)"] = (checkDigit, number) => checkDigit.IsValidMod11CheckDigit(number.AsSpan()),
#endif
    };

    /// <summary>
    /// Names of the operations in <see cref="NumberOperations"/>.
    /// </summary>
    public static IEnumerable<object[]> NumberOperationNames =>
        NumberOperations.Keys.Select(name => new object[] { name });

    /// <summary>
    /// Names of the operations in <see cref="CheckDigitOperations"/>.
    /// </summary>
    public static IEnumerable<object[]> CheckDigitOperationNames =>
        CheckDigitOperations.Keys.Select(name => new object[] { name });

    /// <summary>
    /// Tests that a number is rejected if it contains a non-ASCII digit, wherever the digit is placed.
    /// </summary>
    /// <param name="operationName">Name of the operation in <see cref="NumberOperations"/></param>
    [Theory(DisplayName = "Number with a non-ASCII digit throws an InvalidCharacterException")]
    [MemberData(nameof(NumberOperationNames))]
    public void NumberOperation_NonAsciiDigit_ThrowsInvalidCharacterException(string operationName)
    {
        var operation = NumberOperations[operationName];

        AssertEveryNonAsciiDigitIsRejected(digit => operation(digit.ToString()));
        AssertEveryNonAsciiDigitIsRejected(digit => operation(digit + Payload));
        AssertEveryNonAsciiDigitIsRejected(digit => operation("79927" + digit + "39871"));
        AssertEveryNonAsciiDigitIsRejected(digit => operation(Payload + digit));
    }

    /// <summary>
    /// Tests that a number is rejected if it consists of a digit outside the Basic Multilingual Plane.
    /// </summary>
    /// <param name="operationName">Name of the operation in <see cref="NumberOperations"/></param>
    [Theory(DisplayName = "Number with a supplementary plane digit throws an InvalidCharacterException")]
    [MemberData(nameof(NumberOperationNames))]
    public void NumberOperation_SupplementaryPlaneDigit_ThrowsInvalidCharacterException(string operationName)
    {
        const string mathematicalBoldDigitZero = "𝟎";
        var operation = NumberOperations[operationName];

        Assert.Throws<InvalidCharacterException>(() => operation(mathematicalBoldDigitZero));
        Assert.Throws<InvalidCharacterException>(() => operation(Payload + mathematicalBoldDigitZero));
    }

    /// <summary>
    /// Tests that a non-ASCII digit is rejected as check digit.
    /// </summary>
    /// <param name="operationName">Name of the operation in <see cref="CheckDigitOperations"/></param>
    [Theory(DisplayName = "Non-ASCII digit as check digit throws an InvalidCharacterException")]
    [MemberData(nameof(CheckDigitOperationNames))]
    public void CheckDigitOperation_NonAsciiCheckDigit_ThrowsInvalidCharacterException(string operationName)
    {
        var operation = CheckDigitOperations[operationName];

        AssertEveryNonAsciiDigitIsRejected(digit => operation(digit, Payload));
    }

    /// <summary>
    /// Tests that a number with a non-ASCII digit is rejected if it is passed together with an ASCII check digit.
    /// </summary>
    /// <param name="operationName">Name of the operation in <see cref="CheckDigitOperations"/></param>
    [Theory(DisplayName = "Number with a non-ASCII digit and an ASCII check digit throws an InvalidCharacterException")]
    [MemberData(nameof(CheckDigitOperationNames))]
    public void CheckDigitOperation_NonAsciiDigitInNumber_ThrowsInvalidCharacterException(string operationName)
    {
        var operation = CheckDigitOperations[operationName];

        AssertEveryNonAsciiDigitIsRejected(digit => operation('3', digit + Payload));
        AssertEveryNonAsciiDigitIsRejected(digit => operation('3', "79927" + digit + "39871"));
        AssertEveryNonAsciiDigitIsRejected(digit => operation('3', Payload + digit));
    }

    /// <summary>
    /// Tests the inputs for which validation returned <see langword="true"/> although the number isn't valid.
    /// </summary>
    /// <remarks>
    /// The code point of the Arabic-Indic digit minus the code point of '0' is congruent to the correct check
    /// digit: U+0669 acts like '3' modulo 10 and U+0662 like '2' modulo 11.
    /// </remarks>
    [Fact(DisplayName = "Non-ASCII digit that is congruent to the correct check digit isn't accepted")]
    public void Validation_NonAsciiDigitCongruentToCheckDigit_ThrowsInvalidCharacterException()
    {
        Assert.True('3'.IsValidLuhnCheckDigit("7992739871"));
        Assert.Throws<InvalidCharacterException>(() => '٩'.IsValidLuhnCheckDigit("7992739871"));

        Assert.True("0306406152".IsValidMod11Number());
        Assert.Throws<InvalidCharacterException>(() => "030640615٢".IsValidMod11Number());

        Assert.True('2'.IsValidMod11CheckDigit("030640615"));
        Assert.Throws<InvalidCharacterException>(() => '٢'.IsValidMod11CheckDigit("030640615"));
    }

    /// <summary>
    /// Tests that <see cref="CharExtensions.ThrowIfNotDigit"/> rejects every non-ASCII digit.
    /// </summary>
    [Fact(DisplayName = "ThrowIfNotDigit throws an InvalidCharacterException for non-ASCII digits")]
    public void ThrowIfNotDigit_NonAsciiDigit_ThrowsInvalidCharacterException()
    {
        AssertEveryNonAsciiDigitIsRejected(digit =>
        {
            digit.ThrowIfNotDigit(nameof(digit));
            return "nothing";
        });
    }

    /// <summary>
    /// Runs <paramref name="operation"/> for every non-ASCII digit and asserts that each call throws an
    /// <see cref="InvalidCharacterException"/>.
    /// </summary>
    /// <param name="operation">The operation under test. Its result is only used for the failure message.</param>
    private static void AssertEveryNonAsciiDigitIsRejected(Func<char, object> operation)
    {
        // Guards against a vacuous test, should a runtime ever report no such digit.
        Assert.NotEmpty(NonAsciiDigits);

        var failures = new List<string>();
        foreach (char digit in NonAsciiDigits)
        {
            try
            {
                object result = operation(digit);
                failures.Add($"U+{(int)digit:X4} returned {result}");
            }
            catch (InvalidCharacterException)
            {
                // Expected.
            }
            catch (Exception exception)
            {
                failures.Add($"U+{(int)digit:X4} threw {exception.GetType().Name}");
            }
        }

        Assert.Empty(failures);
    }
}
