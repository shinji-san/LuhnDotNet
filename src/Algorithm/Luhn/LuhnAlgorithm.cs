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

namespace LuhnDotNet.Algorithm.Luhn;

using System;

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
    /// Represents a delegate used for processing digits within the Luhn algorithm context.
    /// </summary>
    /// <param name="digit">The original value of the digit before doubling.</param>
    /// <param name="doubleDigit">The value of the digit after being doubled.</param>
    /// <param name="index">The index of the digit in the sequence, starting from the rightmost end.</param>
    /// <returns>
    /// A <see cref="System.UInt32"/> representing the processed result for the current digit.
    /// </returns>
    private delegate uint DigitProcessor(uint digit, uint doubleDigit, int index);

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
        DigitProcessor digitProcessor = forValidation ? ProcessDigitForValidation : ProcessDigitForComputation;
        for (int index = 0; index < number.Length; index++)
        {
            uint digit = number[number.Length - index - 1].ToUnsignedIntegerDigit();
            uint doubleDigit = digit << 1;
            sum += digitProcessor(digit, doubleDigit, index);
        }

        return sum % Modulus;
    }

    /// <summary>
    /// Processes a digit during the computation phase of the Luhn algorithm.
    /// Depending on the index, either the doubled digit's sum of digits or the original digit is returned.
    /// </summary>
    /// <param name="digit">The current digit being processed from the numeric input.</param>
    /// <param name="doubleDigit">The value of the current digit multiplied by 2.</param>
    /// <param name="index">The position of the digit in the sequence, considering rightmost digit as index 0.</param>
    /// <returns>
    /// A <see cref="System.UInt32"/> value representing the transformed digit based on its position.
    /// </returns>
    private static uint ProcessDigitForComputation(uint digit, uint doubleDigit, int index)
    {
        return !index.IsEven() ? digit : doubleDigit / Modulus + doubleDigit % Modulus;
    }

    /// <summary>
    /// Processes a digit for validation based on the rules defined within the Luhn algorithm.
    /// </summary>
    /// <param name="digit">The numeric value of the digit being processed.</param>
    /// <param name="doubleDigit">The value of the digit multiplied by two.</param>
    /// <param name="index">The position index of the digit in the sequence, starting from zero.</param>
    /// <returns>
    /// A <see cref="System.UInt32"/> value representing the result of the processing based on the digit's index.
    /// </returns>
    private static uint ProcessDigitForValidation(uint digit, uint doubleDigit, int index)
    {
        doubleDigit = doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
        return index.IsEven() ? digit : doubleDigit;
    }

    /// <summary>
    /// Checks whether the <paramref name="value"/> is even.
    /// </summary>
    /// <param name="value">A numeric value of type <see cref="System.Int32"/></param>
    /// <returns><see langword="true" /> if the <paramref name="value"/> is even; otherwise
    /// <see langword="false"/></returns>
    private static bool IsEven(this int value) => value % 2 == 0;
}
