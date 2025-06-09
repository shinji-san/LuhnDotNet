// ----------------------------------------------------------------------------
// <copyright file="Mod11AscendingWeightsValidator.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>05/26/2025 21:44:24 PM</date>
// ----------------------------------------------------------------------------

#region License

// ----------------------------------------------------------------------------
// Copyright 2025 Sebastian Walther
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

#endregion

namespace LuhnDotNet.Algorithm.Mod11AscendingWeights;

using Extensions;
using System;
#if !NET8_0_OR_GREATER
using System.Linq;
#endif

/// <summary>
/// Provides static methods for validating numbers with Mod-11 check digits,
/// using ascending weights in the calculation process.
/// </summary>
public static class Mod11AscendingWeightsValidator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Validates whether a given number with a Mod-11 check digit is valid.
    /// </summary>
    /// <param name="numberWithCheckDigit">
    /// The sequence of numeric characters including the Mod-11 check digit to validate.
    /// </param>
    /// <returns>
    /// <see langword="true" /> if the number with the check digit is valid, according to the Mod-11 algorithm;
    /// otherwise, <see langword="false" />.
    /// </returns>
    public static bool IsValidMod11Number(this ReadOnlySpan<char> numberWithCheckDigit)
    {
        var validateAndTrimNumber = numberWithCheckDigit.ValidateAndTrimMod11Number();
        if (validateAndTrimNumber.Length == 10)
        {
            return validateAndTrimNumber.IsValidMod11NumberFast();
        }

        var computeCheckDigit = validateAndTrimNumber[..^1].ComputeCheckDigit();
        return computeCheckDigit == validateAndTrimNumber[^1].ToUnsignedDigitOrSpecialValue();
    }
#endif

    /// <summary>
    /// Validates whether a given number with a Mod-11 check digit is valid.
    /// </summary>
    /// <param name="numberWithCheckDigit">
    /// The sequence of numeric characters including the Mod-11 check digit to validate.
    /// </param>
    /// <returns>
    /// <see langword="true" /> if the number with the check digit is valid, according to the Mod-11 algorithm;
    /// otherwise, <see langword="false" />.
    /// </returns>
    public static bool IsValidMod11Number(this string numberWithCheckDigit)
    {
#if NET8_0_OR_GREATER
        return IsValidMod11Number(numberWithCheckDigit.AsSpan());
#else
        var validateAndTrimNumber = numberWithCheckDigit.ValidateAndTrimMod11Number();
        if (validateAndTrimNumber.Length == 10)
        {
            return validateAndTrimNumber.IsValidMod11NumberFast();
        }

        var computeCheckDigit = validateAndTrimNumber.Substring(0, validateAndTrimNumber.Length - 1).ComputeCheckDigit();
        return computeCheckDigit == validateAndTrimNumber[validateAndTrimNumber.Length - 1].ToUnsignedIntegerDigit();
#endif
    }

#if NET8_0_OR_GREATER
    /// <summary>
    /// Validates whether the provided check digit is valid for a given sequence of numeric characters based on the Mod-11 algorithm.
    /// </summary>
    /// <param name="checkDigit">The character representing the check digit to validate.</param>
    /// <param name="number">
    /// The sequence of numeric characters (excluding the check digit) that the check digit will be validated against.
    /// </param>
    /// <returns>
    /// <see langword="true" /> if the provided check digit is valid for the given sequence of numeric characters according to the Mod-11 algorithm;
    /// otherwise, <see langword="false" />.
    /// </returns>
    public static bool IsValidMod11CheckDigit(this char checkDigit, ReadOnlySpan<char> number)
    {
        if (!char.IsDigit(checkDigit) && checkDigit != Mod11AscendingWeightsAlgorithm.SpecialCheckDigitCharacter)
        {
            throw new ArgumentOutOfRangeException(nameof(checkDigit), checkDigit, "The check digit must be a digit (0-9) or 'X'.");
        }

        Span<char> mod11Number = stackalloc char[number.Length + 1];
        number.CopyTo(mod11Number[..^1]);
        mod11Number[^1] = checkDigit;
        ReadOnlySpan<char> readOnlyMod11Number = mod11Number;
        return IsValidMod11Number(readOnlyMod11Number);
    }
#endif

    /// <summary>
    /// Validates whether the provided check digit is valid for a given sequence of numeric characters based on the Mod-11 algorithm.
    /// </summary>
    /// <param name="checkDigit">The check digit to validate.</param>
    /// <param name="number">
    /// The sequence of numeric characters (excluding the check digit) that the check digit will be validated against.
    /// </param>
    /// <returns>
    /// <see langword="true" /> if the provided check digit is valid for the given sequence of numeric characters according to the Mod-11 algorithm;
    /// otherwise, <see langword="false" />.
    /// </returns>
    public static bool IsValidMod11CheckDigit(this char checkDigit, string number)
    {
#if NET8_0_OR_GREATER
        return checkDigit.IsValidMod11CheckDigit(number.AsSpan());
#else
        if (!char.IsDigit(checkDigit) && checkDigit != Mod11AscendingWeightsAlgorithm.SpecialCheckDigitCharacter)
        {
            throw new ArgumentOutOfRangeException(nameof(checkDigit), checkDigit, "The check digit must be a digit (0-9) or 'X'.");
        }

        var mod11Number = $"{number}{checkDigit}";
        return mod11Number.IsValidMod11Number();
#endif
    }

    /// <summary>
    /// Converts the specified character to its unsigned digit or a special numeric value,
    /// depending on whether it matches the special check digit character defined in the Modulus 11 algorithm.
    /// </summary>
    /// <param name="character">
    /// The character to be evaluated and converted either to its integer value or the corresponding special value.
    /// </param>
    /// <returns>
    /// The unsigned numeric value of the character if it is a digit (0-9), or the numeric value 10 if the character matches
    /// the special check digit character ('X') in the Modulus 11 algorithm.
    /// </returns>
    private static uint ToUnsignedDigitOrSpecialValue(this char character)
    {
        return character == Mod11AscendingWeightsAlgorithm.SpecialCheckDigitCharacter ? Mod11AscendingWeightsAlgorithm.SpecialCheckDigitValue : character.ToUnsignedIntegerDigit();
    }

    /// <summary>
    /// Trims whitespace from the provided number and validates whether it is a valid Mod-11 number, including the check digit.
    /// </summary>
    /// <param name="number">
    /// The sequence of numeric characters (including the check digit) to validate.
    /// </param>
    /// <returns>
    /// The trimmed sequence of numeric characters including the Mod-11 check digit, if the input is valid.
    /// </returns>
    /// <exception cref="InvalidCharacterException">
    /// Thrown if the input contains invalid characters or doesn't end with a valid Mod-11 check digit.
    /// </exception>
#if NET8_0_OR_GREATER
    private static ReadOnlySpan<char> ValidateAndTrimMod11Number(this ReadOnlySpan<char> number)
    {
        var trimmedNumber = number.Trim();
        var numberWithoutCheckDigit = trimmedNumber[..^1];
        if (trimmedNumber.IsEmpty || !numberWithoutCheckDigit.IsDigits())
        {
            throw new InvalidCharacterException($"The string '{number}' is not a number!", nameof(number));
        }

        if (trimmedNumber[^1] != Mod11AscendingWeightsAlgorithm.SpecialCheckDigitCharacter && !char.IsDigit(trimmedNumber[^1]))
        {
            throw new InvalidCharacterException($"The string '{number}' ends not with a valid Mod-11 check digit!", nameof(number));
        }

        return trimmedNumber;
    }
#else
    private static string ValidateAndTrimMod11Number(this string number)
    {
        var trimmedNumber = number.Trim();
        var numberWithoutCheckDigit = trimmedNumber.Substring(0, trimmedNumber.Length - 1);
        if (string.IsNullOrWhiteSpace(trimmedNumber) || !numberWithoutCheckDigit.All(char.IsDigit))
        {
            throw new InvalidCharacterException($"The string '{number}' is not a number!", nameof(number));
        }

        char checkDigit = trimmedNumber[trimmedNumber.Length - 1];
        if (checkDigit != Mod11AscendingWeightsAlgorithm.SpecialCheckDigitCharacter && !char.IsDigit(checkDigit))
        {
            throw new InvalidCharacterException($"The string '{number}' ends not with a valid Mod-11 check digit!", nameof(number));
        }

        return trimmedNumber;
    }
#endif

    /// <summary>
    /// Validates whether a given number with a Mod-11 check digit is valid using a faster computation method.
    /// </summary>
    /// <param name="numberWithCheckDigit">
    /// The sequence of numeric characters including the Mod-11 check digit to validate.
    /// </param>
    /// <returns>
    /// <see langword="true" /> if the number with the check digit is valid, according to the Mod-11 algorithm;
    /// otherwise, <see langword="false" />.
    /// </returns>
    /// <remarks>Source: https://en.wikipedia.org/wiki/ISBN#ISBN-10_check_digit_calculation</remarks>
#if NET8_0_OR_GREATER
    private static bool IsValidMod11NumberFast(this ReadOnlySpan<char> numberWithCheckDigit)
#else
    private static bool IsValidMod11NumberFast(this string numberWithCheckDigit)
#endif
    {
        var s = 0u;
        var t = 0u;

        for (int i = 0; i < 10; i++) {
            t += numberWithCheckDigit[i].ToUnsignedDigitOrSpecialValue();
            s += t;
        }
        return s % Mod11AscendingWeightsAlgorithm.Modulus == 0;
    }
}
