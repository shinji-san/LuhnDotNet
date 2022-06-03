// ----------------------------------------------------------------------------
// <copyright file="Luhn.cs" company="Private">
// Copyright (c) 2022 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>06/05/2022 13:34:54 PM</date>
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
    using System.Linq;

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
        ///  
        /// </summary>
        private static readonly Func<char, uint> DigitSelector = digit => (uint)digit - 48;

        /// <summary>
        /// 
        /// </summary>
        private static readonly Func<uint, uint, uint> Accumulator = (current, k) => current + k;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        private static IEnumerable<uint> GetDigits(this string number) => number.Select(DigitSelector).Reverse();

        /// <summary>
        /// Computes Luhn sum
        /// </summary>
        /// <param name="digits"></param>
        /// <returns></returns>
        private static uint Sum(this IEnumerable<uint> digits) =>
            digits.Aggregate<uint, uint>(0, Accumulator) % Modulus;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        private static bool IsDigit(this string value) => !string.IsNullOrWhiteSpace(value) && value.All(char.IsDigit);

        /// <summary>
        /// Computes the check digit
        /// </summary>
        /// <param name="number">identification number w/o check digit</param>
        /// <returns>The Luhn check digit</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid number</exception>
        public static byte Compute(string number)
        {
            var _ = number.IsDigit() ? true : throw new ArgumentException("String is not a number!", nameof(number));
            return (byte)(Modulus - number.GetDigits()
                .Select((digit, index) => index % 2 != 0 ? digit : (digit *= 2) / Modulus + digit % Modulus)
                .Sum());
        }

        /// <summary>
        /// Checks whether or not the number is valid
        /// </summary>
        /// <param name="number">identification number w/ check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid number</exception>
        public static bool IsValid(string number)
        {
            var _ = number.IsDigit() ? true : throw new ArgumentException("String is not a number!", nameof(number));
            return number.GetDigits()
                .Select((digit, index) => index % 2 == 0 ? digit : (digit *= 2) > 9 ? digit - 9 : digit)
                .Sum() == 0;
        }
    }
}