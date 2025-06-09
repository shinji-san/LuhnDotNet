// ----------------------------------------------------------------------------
// <copyright file="DammAlgorithm.cs" company="Private">
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

using System;

/// <summary>
/// Provides methods for calculating and validating check digits
/// using the Damm algorithm, a positional numeral system-based
/// error detection algorithm designed to detect all single-digit
/// and most adjacent transposition errors in numerical sequences.
/// </summary>
/// <remarks>
/// The Damm algorithm uses a ten-by-ten quasigroup table to detect
/// errors. It is computationally efficient and doesn't require
/// appending a check digit during calculation.
/// </remarks>
internal static class DammAlgorithm
{
    /// <summary>
    /// Represents the ten-by-ten antisymmetric quasigroup table used in the Damm checksum algorithm to calculate
    /// and validate check digits. The table defines the specific transformations for digit
    /// positions and their associated operations, enabling error detection in numerical sequences.
    /// </summary>
    /// <remarks>Source: https://en.wikipedia.org/wiki/Damm_algorithm#cite_note-fenwick2014-1
    /// and https://archiv.ub.uni-marburg.de/diss/z2004/0516/pdf/dhmd.pdf</remarks>
    private static readonly uint[,] DefaultAntisymmetricQuasigroup =
    {
        { 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 },
        { 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 },
        { 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 },
        { 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 },
        { 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 },
        { 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 },
        { 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 },
        { 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 },
        { 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 },
        { 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 }
    };

    /// <summary>
    /// Calculates the check digit for a given numeric input using the Damm algorithm.
    /// </summary>
    /// <param name="number">The numeric input provided as a <see cref="ReadOnlySpan{char}"/> representing the digits to process.</param>
    /// <returns>The calculated check digit as a <see cref="char"/>.</returns>
#if NET8_0_OR_GREATER
    internal static char ComputeCheckDigit(this ReadOnlySpan<char> number)
#else
    internal static uint ComputeCheckDigit(this string number)
#endif
    {
        return number.ComputeCheckDigit(DefaultAntisymmetricQuasigroup);
    }

    /// <summary>
    /// Calculates the check digit for a given numeric input using the Damm algorithm.
    /// </summary>
    /// <param name="number">The numeric input provided as a <see cref="ReadOnlySpan{char}"/> representing the digits to process.</param>
    /// <param name="antisymmetricQuasigroup">A ten-by-ten antisymmetric quasigroup table </param>
    /// <returns>The calculated check digit as a <see cref="char"/>.</returns>
#if NET8_0_OR_GREATER
    internal static char ComputeCheckDigit(this ReadOnlySpan<char> number, AntisymmetricQuasiGroup antisymmetricQuasigroup)
#else
    internal static uint ComputeCheckDigit(this string number, AntisymmetricQuasiGroup antisymmetricQuasigroup)
#endif
    {
        var interimDigit = 0u;
        foreach (var digit in number)
        {
            interimDigit = antisymmetricQuasigroup[interimDigit, digit.ToUnsignedIntegerDigit()];
        }

        return interimDigit.ToCharDigit();
    }
}