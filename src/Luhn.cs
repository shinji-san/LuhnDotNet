// ----------------------------------------------------------------------------
// <copyright file="Luhn.cs" company="Private">
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

namespace LuhnDotNet
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.Globalization;
    using System.Text.RegularExpressions;

    /// <summary>
    /// C# implementation of the Luhn algorithm
    /// </summary>
    public static class Luhn
    {
        /// <summary>
        /// Modulus 10
        /// </summary>
        private const int Modulus = 10;

        /// <summary>
        /// Computes the Luhn check digit
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn check digit.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid luhnNumber</exception>
        [Obsolete("Use Luhn.CalculateCheckDigit instead", false)]
        public static byte Compute(string number) => ComputeLuhnCheckDigit(number);

        /// <summary>
        /// Computes the Luhn check digit
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn check digit.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid luhnNumber</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static byte ComputeLuhnCheckDigit(string number) =>
            (byte)(Modulus - number.IsNumber().GetDigits().DoubleEverySecondDigit(false).SumDigits());

        /// <summary>
        /// Computes the Luhn number which is a combination of the given number and the calculated check digit.
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn number.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid luhnNumber</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static string ComputeLuhnNumber(string number)
        {
            byte checkDigit = (byte)(Modulus - number.IsNumber().GetDigits().DoubleEverySecondDigit(false).SumDigits());
            return string.Format(
                CultureInfo.InvariantCulture,
                "{0}{1}",
                number.Trim(),
                checkDigit.ToString(CultureInfo.InvariantCulture));
        }

        /// <summary>
        /// Checks whether or not the Luhn Number is valid
        /// </summary>
        /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
        /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="luhnNumber"/> is not a valid number.
        /// The <paramref name="luhnNumber"/> contains none-numeric characters.</exception>
        /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
        /// (on the right side).</remarks>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValid(string luhnNumber) =>
            luhnNumber.IsNumber().GetDigits().DoubleEverySecondDigit(true).SumDigits() == 0;

        /// <summary>
        /// Checks whether or not the concatenation of number and corresponding Luhn check digit is valid
        /// </summary>
        /// <param name="number">Identification number w/o check digit</param>
        /// <param name="checkDigit">The Luhn check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid.
        /// The <paramref name="number"/> contains none-numeric characters.</exception>
        /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
        /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValid(string number, byte checkDigit)
        {
            if (checkDigit > 9)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(checkDigit),
                    checkDigit,
                    "The check digit must be between 0 and 9");
            }

            return string.Format(
                    CultureInfo.InvariantCulture,
                    "{0}{1}",
                    number.Trim(),
                    checkDigit.ToString(CultureInfo.InvariantCulture))
                .IsNumber()
                .GetDigits()
                .DoubleEverySecondDigit(true)
                .SumDigits() == 0;
        }

        /// <summary>
        /// Doubling of every second digit.
        /// </summary>
        /// <param name="digits">The digits represent a number w/ or w/o check digit.</param>
        /// <param name="forValidation"><see langword="true"/> if the <paramref name="digits"/> represent
        /// a luhnNumber including check digit; otherwise <see langword="false"/></param>
        /// <returns></returns>
        private static IEnumerable<uint> DoubleEverySecondDigit(this IEnumerable<uint> digits, bool forValidation)
        {
            int index = 0;
            foreach (uint digit in digits)
            {
                uint doubleDigit = digit << 1;
                if (forValidation)
                {
                    doubleDigit = doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
                    yield return index.IsEven() ? digit : doubleDigit;
                }
                else
                {
                    doubleDigit = doubleDigit / Modulus + doubleDigit % Modulus;
                    yield return !index.IsEven() ? digit : doubleDigit;
                }

                index++;
            }
        }

        /// <summary>
        /// Checks whether or not the <paramref name="value"/> is even.
        /// </summary>
        /// <param name="value">A numeric value of type <see cref="System.Int32"/></param>
        /// <returns><see langword="true" /> if the <paramref name="value"/> is even; otherwise
        /// <see langword="false"/></returns>
        private static bool IsEven(this int value) => value % 2 == 0;

        /// <summary>
        /// Checks whether or not the the number is valid
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns>The trimmed identification number if valid</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid luhnNumber</exception>
        private static string IsNumber(this string number)
        {
            string trimmedNumber = number?.Trim();
            if (string.IsNullOrWhiteSpace(trimmedNumber) || !Regex.IsMatch(trimmedNumber, @"^\d+$"))
            {
                throw new ArgumentException($"The string '{number}' is not a number!", nameof(number));
            }

            return trimmedNumber;
        }

        /// <summary>
        /// Get all digits of the <paramref name="number"/> in reverse order
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns>Enumeration of digits</returns>
        private static IEnumerable<uint> GetDigits(this string number)
        {
            for (int i = number.Length - 1; i >= 0; i--)
            {
                yield return (uint)number[i] - 48;
            }
        }

        /// <summary>
        /// Computes the sum of all digits
        /// </summary>
        /// <param name="digits">Enumeration of digits</param>
        /// <returns>A check digit.</returns>
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation.Possible")]
        private static uint SumDigits(this IEnumerable<uint> digits)
        {
            uint sum = 0;
            foreach (uint digit in digits)
            {
                sum += digit;
            }

            return sum % Modulus;
        }
    }
}