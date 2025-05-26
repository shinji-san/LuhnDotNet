// ----------------------------------------------------------------------------
// <copyright file="Mod11Calculator.cs" company="Private">
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
using System.Globalization;

/// <summary>
/// Provides methods to compute and return a Modulus 11 (Mod11) check digit.
/// </summary>
public static class Mod11Calculator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the Modulus 11 (Mod11) number by appending the calculated check digit to the given number.
    /// </summary>
    /// <param name="number">The input numeric sequence for which the Mod11 number is to be calculated.</param>
    /// <returns>The original numeric sequence with the appended Mod11 check digit as a string.</returns>
    /// <exception cref="InvalidCharacterException">Thrown if the <paramref name="number"/> contains invalid characters or is not properly formatted.</exception>
    public static string ComputeMod11Number(this ReadOnlySpan<char> number)
    {
        var checkDigit = number.ComputeMod11CheckDigit();
        return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
    }
#endif

    /// <summary>
    /// Computes the Modulus 11 (Mod11) number by appending the calculated check digit to the given number.
    /// </summary>
    /// <param name="number">The input numeric sequence for which the Mod11 number is to be calculated.</param>
    /// <returns>The original numeric sequence with the appended Mod11 check digit as a string.</returns>
    /// <exception cref="InvalidCharacterException">Thrown if the <paramref name="number"/> contains invalid characters or is not properly formatted.</exception>
    public static string ComputeMod11Number(this string number)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ComputeMod11Number();
#else
        var checkDigit = number.ComputeMod11CheckDigit();
        return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
#endif
    }

#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the Modulus 11 (Mod11) check digit for a given number.
    /// </summary>
    /// <param name="number">The input numeric sequence for which the check digit is to be calculated.</param>
    /// <returns>The computed check digit represented as a single character. The character 'X' is returned if the check digit equals 10.</returns>
    /// <exception cref="InvalidCharacterException">Thrown if the <paramref name="number"/> contains invalid characters or is not properly formatted.</exception>
    public static char ComputeMod11CheckDigit(this ReadOnlySpan<char> number)
    {
        return number.ValidateAndTrimNumber().ComputeCheckDigit().FormatCheckDigit();
    }
#endif

    /// <summary>
    /// Computes the Modulus 11 (Mod11) check digit for a given numeric sequence.
    /// </summary>
    /// <param name="number">The input numeric sequence for which the check digit is to be computed.</param>
    /// <returns>The computed check digit represented as a single character. Returns 'X' if the check digit is 10.</returns>
    /// <exception cref="InvalidCharacterException">Thrown if the <paramref name="number"/> contains invalid characters or is not properly formatted.</exception>
    public static char ComputeMod11CheckDigit(this string number)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ComputeMod11CheckDigit();
#else
        return number.ValidateAndTrimNumber().ComputeCheckDigit().FormatCheckDigit();
#endif
    }

    private static char FormatCheckDigit(this uint checkDigit) => checkDigit == 10 ? 'X' : checkDigit.ToCharDigit();
}