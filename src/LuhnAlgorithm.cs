// ----------------------------------------------------------------------------
// <copyright file="LuhnAlgorithm.cs" company="Private">
// Copyright (c) 2022 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>11/13/2022 08:48:55 PM</date>
// ----------------------------------------------------------------------------

#region License

// ----------------------------------------------------------------------------
// Copyright 2022 Sebastian Walther
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

namespace LuhnDotNet;

#if NET8_0_OR_GREATER
    using System;
#endif

/// <summary>
/// A C# implementation of the Luhn algorithm.
/// </summary>
internal static class LuhnAlgorithm
{
    /// <summary>
    /// Modulus 10
    /// </summary>
    internal const int Modulus = 10;

    /// <summary>
    /// Represents the ASCII code for the character '0'.
    /// </summary>
    private const int AsciiCodeForZero = 48;

    /// <summary>
    /// Doubles every second digit in the given sequence based on the context of validation or computation.
    /// </summary>
    /// <param name="number">A sequence of characters representing the numeric input.</param>
    /// <param name="forValidation">
    /// A boolean value indicating if the operation is for validation (<see langword="true"/>)
    /// or computation (<see langword="false"/>).
    /// </param>
    /// <returns>
    /// A <see cref="System.UInt32"/> value representing the processed result modulo 10.
    /// </returns>
#if NET8_0_OR_GREATER
    internal static uint DoubleEverySecondDigit(this ReadOnlySpan<char> number, bool forValidation)
#else
    internal static uint DoubleEverySecondDigit(this string number, bool forValidation)
#endif
    {
        uint sum = 0;
        for (int index = 0; index < number.Length; index++)
        {
            uint digit = number[number.Length - index - 1].ToDigit();
            uint doubleDigit = digit << 1;
            if (forValidation)
            {
                doubleDigit = doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
                sum += index.IsEven() ? digit : doubleDigit;
            }
            else
            {
                doubleDigit = doubleDigit / Modulus + doubleDigit % Modulus;
                sum += !index.IsEven() ? digit : doubleDigit;
            }
        }

        return sum % Modulus;
    }

    /// <summary>
    /// Checks whether the <paramref name="value"/> is even.
    /// </summary>
    /// <param name="value">A numeric value of type <see cref="System.Int32"/></param>
    /// <returns><see langword="true" /> if the <paramref name="value"/> is even; otherwise
    /// <see langword="false"/></returns>
    private static bool IsEven(this int value) => value % 2 == 0;

    /// <summary>
    /// Converts a character representing a numeric digit to its integer value.
    /// </summary>
    /// <param name="character">The character to convert. Must represent a numeric digit.</param>
    /// <returns>The numeric value of the character as an unsigned integer.</returns>
    private static uint ToDigit(this char character) => (uint)character - AsciiCodeForZero;
}