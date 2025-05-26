// ----------------------------------------------------------------------------
// <copyright file="Mod11Validator.cs" company="Private">
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

namespace LuhnDotNet.Algorithm.Mod11;

#if NET8_0_OR_GREATER
using System;
#endif

public static class Mod11Validator
{
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
#if NET8_0_OR_GREATER
    public static bool IsValidMod11Number(ReadOnlySpan<char> numberWithCheckDigit)
    {
        var validateAndTrimNumber = numberWithCheckDigit.ValidateAndTrimNumber();
        if (validateAndTrimNumber.Length == 10)
        {
            return validateAndTrimNumber.IsValidMod11NumberFast();
        }

        var computeCheckDigit = validateAndTrimNumber[..^1].ComputeCheckDigit();
        return computeCheckDigit == validateAndTrimNumber[^1].ToUnsignedIntegerDigit();
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
    public static bool IsValidMod11Number(string numberWithCheckDigit)
    {
#if NET8_0_OR_GREATER
        return IsValidMod11Number(numberWithCheckDigit.AsSpan());
#else
        var validateAndTrimNumber = numberWithCheckDigit.ValidateAndTrimNumber();
        if (validateAndTrimNumber.Length == 10)
        {
            return validateAndTrimNumber.IsValidMod11NumberFast();
        }

        var computeCheckDigit = validateAndTrimNumber.Substring(0, numberWithCheckDigit.Length - 1).ComputeCheckDigit();
        return computeCheckDigit == validateAndTrimNumber[numberWithCheckDigit.Length - 1].ToUnsignedIntegerDigit();
#endif
    }


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
            t += numberWithCheckDigit[i].ToUnsignedIntegerDigit();
            s += t;
        }
        return s % Mod11Algorithm.Modulus == 0;
    }
}