// ----------------------------------------------------------------------------
// <copyright file="Mod11AscendingWeightsAlgorithm.cs" company="Private">
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

#if NET8_0_OR_GREATER
using System;
#endif

/// <summary>
/// Provides an implementation of the Modulus 11 algorithm with ascending weights.
/// The algorithm is used to compute and validate check digits for sequences of numeric characters.
/// </summary>
internal static class Mod11AscendingWeightsAlgorithm
{
    /// <summary>
    /// Modulus 11
    /// </summary>
    internal const int Modulus = 11;

    /// <summary>
    /// Represents the special character 'X' used as a check digit in the Modulus 11 algorithm when the computed check digit is 10.
    /// </summary>
    internal const char SpecialCheckDigitCharacter = 'X';

    /// <summary>
    /// Represents the numeric value 10 used in place of the special check digit character ('X') in the Modulus 11 algorithm.
    /// </summary>
    internal const uint SpecialCheckDigitValue = 10u;

    /// <summary>
    /// Computes the check digit for a given numeric input using the Modulus 11 algorithm.
    /// </summary>
    /// <param name="number">The input sequence of numeric characters for which the check digit is to be computed.</param>
    /// <returns>The computed check digit as an unsigned integer.</returns>
#if NET8_0_OR_GREATER
    internal static uint ComputeCheckDigit(this ReadOnlySpan<char> number)
#else
    internal static uint ComputeCheckDigit(this string number)    
#endif
    {
        uint sum = 0;
        uint weight = 1;

        foreach (char digit in number)
        {
            sum += digit.ToUnsignedIntegerDigit() * weight;
            weight++;
        }

        return sum % Modulus;
    }
}