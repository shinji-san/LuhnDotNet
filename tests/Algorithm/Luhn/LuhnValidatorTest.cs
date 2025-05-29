namespace LuhnDotNetTest.Algorithm.Luhn;

using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;
using System;
using System.Collections.Generic;
using Xunit;

/// <summary>
/// A test class that provides unit tests for validating Luhn numbers and related scenarios.
/// </summary>
public class LuhnValidatorTest
{
    /// <summary>
    /// Test numbers with w/ and w/o a valid check digit (Luhn numbers).
    /// </summary>
    public static IEnumerable<object[]> LuhnNumberValidationSet =>
        new List<object[]>
        {
            new object[] { true, "17893729974" },
            new object[] { true, "3530111333300000" },
            new object[] { true, "79927398713" },
            new object[] { true, "0079927398713" },
            new object[] { true, "079927398713" },
            new object[] { true, "1104942" },
            new object[] { true, "18937" },
            new object[] { true, "01104942" },
            new object[] { true, "378282246310005" },
            new object[] { true, "6370950000000005" },
            new object[] { true, " 6370950000000005" },
            new object[] { true, "6370950000000005 " },
            new object[] { true, " 6370950000000005 " },
            new object[] { true, "899999123456789013" },
            new object[] { true, "   899999123456789013" },
            new object[] { false, "79927398717" },
            new object[] { false, "1104945" },
            new object[] { false, "378282246310001" },
            new object[] { false, "6370950000000007" },
            new object[] { false, "899999123456789019" },
        };

    /// <summary>
    /// Test numbers with separate valid and invalid check digits.
    /// </summary>
    public static IEnumerable<object[]> LuhnCheckDigitValidationSet =>
        new List<object[]>
        {
            new object[] { true, "1789372997", '4' },
            new object[] { true, "353011133330000", '0' },
            new object[] { true, "7992739871", '3' },
            new object[] { true, "07992739871", '3' },
            new object[] { true, "007992739871", '3' },
            new object[] { true, "0007992739871", '3' },
            new object[] { true, "110494", '2' },
            new object[] { true, "1893", '7' },
            new object[] { true, "37828224631000", '5' },
            new object[] { true, "637095000000000", '5' },
            new object[] { true, " 637095000000000", '5' },
            new object[] { true, "637095000000000 ", '5' },
            new object[] { true, " 637095000000000 ", '5' },
            new object[] { true, "89999912345678901", '3' },
            new object[] { true, "   89999912345678901", '3' },
            new object[] { false, "7992739871", '7' },
            new object[] { false, "110494", '5' },
            new object[] { false, "37828224631000", '1' },
            new object[] { false, "637095000000000", '7' },
            new object[] { false, "89999912345678901", '9' },
        };

    /// <summary>
    /// Invalid test numbers.
    /// </summary>
    public static IEnumerable<object[]> InvalidNumbers =>
        new List<object[]>
        {
            new object[] { null },
            new object[] { string.Empty },
            new object[] { "ABC" },
            new object[] { "?11243345" },
            new object[] { "_-%&" },
        };

    /// <summary>
    /// Invalid numbers and check digits.
    /// </summary>
    public static IEnumerable<object[]> InvalidNumbersAndCheckDigits =>
        new List<object[]>
        {
            new object[] { "%&/", '1' },
            new object[] { "_-:,", '2' },
            new object[] { "ABC", '3' },
            new object[] { "?11243345", '4' },
        };

    /// <summary>
    /// Test numbers and invalid separate check digits.
    /// </summary>
    public static IEnumerable<object[]> NumbersWithInvalidCheckDigits =>
        new List<object[]>
        {
            new object[] { "637095000000000", '/' },
            new object[] { "110494", ':' },
            new object[] { "7992739871", 'A' },
            new object[] { "?89999912345678901", '<' },
        };

    /// <summary>
    /// Test data for the IsValidLuhnNumber method in combination with AlphaNumericToNumeric.
    /// </summary>
    public static IEnumerable<object[]> IsValidWithConvertData =>
        new List<object[]>
        {
            new object[] { "DE0006069008", true },
            new object[] { "DE0006069007", false },
            new object[] { "DE000BAY0017", true },
            new object[] { "DE000BAY0018", false },
            new object[] { "AU0000XVGZA3", true },
            new object[] { "US0378331005", true },
        };

    /// <summary>
    /// Tests Luhn number validation.
    /// </summary>
    /// <param name="expectedResult">The expected validation result</param>
    /// <param name="luhnNumber">Test number, inclusive check digit</param>
    [Theory(DisplayName = "Validates a valid Luhn number")]
    [MemberData(nameof(LuhnNumberValidationSet), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnNumber_ValidLuhnNumber_ReturnsExpectedResult(bool expectedResult, string luhnNumber)
    {
        Assert.Equal(expectedResult, luhnNumber.IsValidLuhnNumber());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedResult, luhnNumber.AsSpan().IsValidLuhnNumber());
#endif
    }

    /// <summary>
    /// Tests number validation with a separate check digit.
    /// </summary>
    /// <param name="expectedResult">Expected validation result</param>
    /// <param name="number">Test number exclusive check digit</param>
    /// <param name="checkDigit">Test Luhn check digit</param>
    [Theory(DisplayName = "Validates a valid number with separate, valid check digit between 0 and 9")]
    [MemberData(nameof(LuhnCheckDigitValidationSet), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnCheckDigit_ValidNumberAndCheckDigit_ReturnsExpectedResult(
        bool expectedResult,
        string number,
        char checkDigit)
    {
        Assert.Equal(expectedResult, checkDigit.IsValidLuhnCheckDigit(number));
#if NET8_0_OR_GREATER
        Assert.Equal(expectedResult, checkDigit.IsValidLuhnCheckDigit(number.AsSpan()));
#endif
    }

    /// <summary>
    /// Tests whether an exception is thrown when an invalid Luhn number is passed to the Luhn
    /// number validation algorithm.
    /// </summary>
    [Theory(DisplayName = "Validates an invalid Luhn number (e.g. none-numeric characters) to throw an exception")]
    [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnNumber_InvalidInput_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.IsValidLuhnNumber());
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().IsValidLuhnNumber());
#endif
    }

    /// <summary>
    /// Tests whether an exception is thrown when an invalid number is passed to the Luhn validation algorithm.
    /// </summary>
    [Theory(DisplayName = "Validates an invalid number with any check digit between 0 and 9 to throw an exception")]
    [MemberData(nameof(InvalidNumbersAndCheckDigits), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnCheckDigit_InvalidInput_ThrowsInvalidCharacterException(
        string invalidNumber,
        char checkDigit)
    {
        Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber));
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber.AsSpan()));
#endif
    }

    /// <summary>
    /// Tests whether an exception is thrown when an invalid check digit (greater than 9) is passed to the
    /// Luhn validation algorithm.
    /// </summary>
    [Theory(DisplayName = "Validates a number with separate check digit greater than 9 to throw an exception")]
    [MemberData(nameof(NumbersWithInvalidCheckDigits), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnCheckDigit_InvalidInput_ThrowsArgumentOutOfRangeException(
        string invalidNumber,
        char checkDigit)
    {
        Assert.Throws<ArgumentOutOfRangeException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber));
#if NET8_0_OR_GREATER
        Assert.Throws<ArgumentOutOfRangeException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber.AsSpan()));
#endif
    }

    /// <summary>
    /// Tests the IsValid method in combination with AlphaNumericToNumeric.
    /// </summary>
    /// <param name="input">Input string</param>
    /// <param name="expected">Expected output</param>
    [Theory(DisplayName = "Validates a numeric string converted from an alphanumeric string")]
    [MemberData(nameof(IsValidWithConvertData), MemberType = typeof(LuhnValidatorTest))]
    public void IsValidLuhnNumber_WithAlphaNumericToNumeric_ReturnsExpectedCheckDigit(string input, bool expected)
    {
        Assert.Equal(expected, input.AlphaNumericToNumeric().IsValidLuhnNumber());
#if NET8_0_OR_GREATER
        Assert.Equal(expected, input.AsSpan().AlphaNumericToNumeric().IsValidLuhnNumber());
#endif
    }
}