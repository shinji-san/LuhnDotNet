// ----------------------------------------------------------------------------
// <copyright file="DammCalculator.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>05/30/2025 21:31:52 PM</date>
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

namespace LuhnDotNet.Algorithm.Damm;

using Extensions;

#if NET8_0_OR_GREATER
using System;
#else
using System.Globalization;
#endif

/// <summary>
/// Provides methods for calculating check digits using the Damm algorithm.
/// </summary>
public static class DammCalculator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes a numeric string with an appended Damm algorithm check digit for the provided numeric input.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the check digit is to be computed and appended.</param>
    /// <returns>A string containing the input number with the computed Damm check digit appended.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    public static string ComputeDammNumber(this ReadOnlySpan<char> number)
    {
        return number.ValidateAndTrimNumber().ComputeNumberWithCheckDigit(ComputeDammCheckDigit);
    }
#endif

    /// <summary>
    /// Computes a numeric string with an appended Damm algorithm check digit for the provided numeric input.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the check digit is to be computed and appended.</param>
    /// <returns>A string containing the input number with the computed Damm check digit appended.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    public static string ComputeDammNumber(this string number)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ComputeDammNumber();
#else
        var checkDigit = number.ComputeDammCheckDigit();
        return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
#endif
    }

#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes a numeric string with an appended Damm algorithm check digit for the provided numeric input using a custom antisymmetric quasigroup.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the check digit is to be computed and appended.</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns>A string containing the input number with the computed Damm check digit appended.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    /// <exception cref="ArgumentException">The antisymmetric quasigroup must be a 10x10 matrix.</exception>
    public static string ComputeDammNumber(this ReadOnlySpan<char> number, uint[,] antisymmetricQuasiGroup)
    {
        return number.ValidateAndTrimNumber().ComputeNumberWithCheckDigit(n => ComputeDammCheckDigit(n, antisymmetricQuasiGroup));
    }
#endif

    /// <summary>
    /// Computes a numeric string with an appended Damm algorithm check digit for the provided numeric input using a custom antisymmetric quasigroup.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the check digit is to be computed and appended.</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns>A string containing the input number with the computed Damm check digit appended.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    /// <exception cref="ArgumentException">The antisymmetric quasigroup must be a 10x10 matrix.</exception>
    public static string ComputeDammNumber(this string number, uint[,] antisymmetricQuasiGroup)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ComputeDammNumber(antisymmetricQuasiGroup);
#else
        var checkDigit = number.ComputeDammCheckDigit(antisymmetricQuasiGroup);
        return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
#endif
    }

    /// <summary>
    /// Computes the Damm algorithm check digit for the provided numeric input string.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the Damm check digit is to be computed.</param>
    /// <returns>The computed Damm algorithm check digit as a <see cref="char"/>.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    public static char ComputeDammCheckDigit(this string number)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ValidateAndTrimNumber().ComputeCheckDigit();
#else
        return number.ValidateAndTrimNumber().ComputeCheckDigit().ToCharDigit();
#endif
    }    

#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the check digit for a given numeric input using the Damm algorithm.
    /// </summary>
    /// <param name="number">The numeric input as a <see cref="ReadOnlySpan{char}"/> representing the digits to compute the check digit for.</param>
    /// <returns>The check digit calculated using the Damm algorithm as a <see cref="char"/>.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> contains non-digit characters or is empty.</exception>
    public static char ComputeDammCheckDigit(this ReadOnlySpan<char> number)
    {
        return number.ValidateAndTrimNumber().ComputeCheckDigit();
    }
#endif

    /// <summary>
    /// Computes the Damm algorithm check digit for the provided numeric input string using a custom antisymmetric quasigroup.
    /// </summary>
    /// <param name="number">The numeric input as a string for which the Damm check digit is to be computed.</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns>The computed Damm algorithm check digit as a <see cref="char"/>.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    /// <exception cref="ArgumentException">The antisymmetric quasigroup must be a 10x10 matrix.</exception>
    public static char ComputeDammCheckDigit(this string number, uint[,] antisymmetricQuasiGroup)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ValidateAndTrimNumber().ComputeCheckDigit(antisymmetricQuasiGroup);
#else
        return number.ValidateAndTrimNumber().ComputeCheckDigit(antisymmetricQuasiGroup).ToCharDigit();
#endif
    }

#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the check digit for a given numeric input using the Damm algorithm with a custom antisymmetric quasigroup.
    /// </summary>
    /// <param name="number">The numeric input as a <see cref="ReadOnlySpan{char}"/> representing the digits to compute the check digit for.</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns>The check digit calculated using the Damm algorithm as a <see cref="char"/>.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> contains non-digit characters or is empty.</exception>
    /// <exception cref="ArgumentException">The antisymmetric quasigroup must be a 10x10 matrix.</exception>
    public static char ComputeDammCheckDigit(this ReadOnlySpan<char> number, uint[,] antisymmetricQuasiGroup)
    {
        return number.ValidateAndTrimNumber().ComputeCheckDigit(antisymmetricQuasiGroup);
    }
#endif
}