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
#if !NET8_0_OR_GREATER
    using System.Text;
    using System.Text.RegularExpressions;
#endif

    /// <summary>
    /// A C# implementation of the Luhn algorithm.
    /// </summary>
    public static class Luhn
    {
        /// <summary>
        /// Modulus 10
        /// </summary>
        private const int Modulus = 10;

#if NET8_0_OR_GREATER
        /// <summary>
        /// Computes the Luhn check digit
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn check digit.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static byte ComputeLuhnCheckDigit(this ReadOnlySpan<char> number) =>
            (byte)((Modulus - number.IsNumber().GetDigits().DoubleEverySecondDigit(false).SumDigits()) % Modulus);
#endif

        /// <summary>
        /// Computes the Luhn check digit.
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn check digit as a byte.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static byte ComputeLuhnCheckDigit(this string number) =>
#if NET8_0_OR_GREATER
            number.AsSpan().ComputeLuhnCheckDigit();
#else
            (byte)((Modulus - number.IsNumber().GetDigits().DoubleEverySecondDigit(false).SumDigits()) % Modulus);
#endif

#if NET8_0_OR_GREATER
        /// <summary>
        /// Computes the Luhn number, which is a combination of the given number and the calculated check digit.
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn number.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static string ComputeLuhnNumber(this ReadOnlySpan<char> number)
        {
            byte checkDigit = number.ComputeLuhnCheckDigit();
            return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
        }
#endif

        /// <summary>
        /// Computes the Luhn number, which is a combination of the given number and the calculated check digit.
        /// </summary>
        /// <param name="number">An identification number w/o check digit.</param>
        /// <returns>The calculated Luhn number.</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static string ComputeLuhnNumber(this string number)
        {
#if NET8_0_OR_GREATER
            return number.AsSpan().ComputeLuhnNumber();
#else
            byte checkDigit = number.ComputeLuhnCheckDigit();
            return string.Format(
                CultureInfo.InvariantCulture,
                "{0}{1}",
                number.Trim(),
                checkDigit.ToString(CultureInfo.InvariantCulture));
#endif
        }

#if NET8_0_OR_GREATER
        /// <summary>
        /// Checks whether the Luhn Number is valid
        /// </summary>
        /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
        /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="luhnNumber"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
        /// (on the right side).</remarks>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        [Obsolete("Use the IsValidLuhnNumber method instead.", false)]
        public static bool IsValid(this ReadOnlySpan<char> luhnNumber) => luhnNumber.IsValidLuhnNumber();

        /// <summary>
        /// Checks whether the Luhn Number is valid
        /// </summary>
        /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
        /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="luhnNumber"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
        /// (on the right side).</remarks>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValidLuhnNumber(this ReadOnlySpan<char> luhnNumber) =>
            luhnNumber.IsNumber().GetDigits().DoubleEverySecondDigit(true).SumDigits() == 0;
#endif

        /// <summary>
        /// Checks whether the Luhn Number is valid
        /// </summary>
        /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
        /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="luhnNumber"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
        /// (on the right side).</remarks>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        [Obsolete("Use the IsValidLuhnNumber method instead.", false)]
        public static bool IsValid(this string luhnNumber) => luhnNumber.IsValidLuhnNumber();

        /// <summary>
        /// Checks whether the Luhn Number is valid
        /// </summary>
        /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
        /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="luhnNumber"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
        /// (on the right side).</remarks>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValidLuhnNumber(this string luhnNumber) =>
#if NET8_0_OR_GREATER
            luhnNumber.AsSpan().IsValidLuhnNumber();
#else
            luhnNumber.IsNumber().GetDigits().DoubleEverySecondDigit(true).SumDigits() == 0;
#endif

#if NET8_0_OR_GREATER
        /// <summary>
        /// Checks whether the concatenation of number and corresponding Luhn check digit is valid
        /// </summary>
        /// <param name="number">Identification number w/o Luhn check digit</param>
        /// <param name="checkDigit">The Luhn check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
        /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        [Obsolete("Use the IsValidLuhnCheckDigit method instead.", false)]
        public static bool IsValid(this ReadOnlySpan<char> number, byte checkDigit) =>
            checkDigit.IsValidLuhnCheckDigit(number);

        /// <summary>
        /// Checks whether the concatenation of number and corresponding Luhn check digit is valid
        /// </summary>
        /// <param name="checkDigit">The Luhn check digit</param>
        /// <param name="number">Identification number w/o Luhn check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
        /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValidLuhnCheckDigit(this byte checkDigit, ReadOnlySpan<char> number)
        {
            if (checkDigit > 9)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(checkDigit),
                    checkDigit,
                    "The check digit must be between 0 and 9");
            }

            return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture))
                .AsSpan()
                .IsNumber()
                .GetDigits()
                .DoubleEverySecondDigit(true)
                .SumDigits() == 0;
        }
#endif

        /// <summary>
        /// Checks whether the concatenation of number and corresponding Luhn check digit is valid
        /// </summary>
        /// <param name="number">Identification number w/o Luhn check digit</param>
        /// <param name="checkDigit">The Luhn check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
        /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        [Obsolete("Use the IsValidLuhnCheckDigit method instead.", false)]
        public static bool IsValid(this string number, byte checkDigit) => checkDigit.IsValidLuhnCheckDigit(number);

        /// <summary>
        /// Checks whether the concatenation of number and corresponding Luhn check digit is valid
        /// </summary>
        /// <param name="checkDigit">The Luhn check digit</param>
        /// <param name="number">Identification number w/o Luhn check digit</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
        /// otherwise <see langword="false" /></returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not valid.
        /// It contains none-numeric characters.</exception>
        /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
        /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
        [SuppressMessage("ReSharper", "UnusedMember.Global")]
        [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
        public static bool IsValidLuhnCheckDigit(this byte checkDigit, string number)
        {
#if NET8_0_OR_GREATER
            return checkDigit.IsValidLuhnCheckDigit(number.AsSpan());
#else
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
#endif
        }

        /// <summary>
        /// Converts an alphanumeric string to a numeric string.
        /// </summary>
        /// <param name="alphaNumeric">The alphanumeric string to convert.</param>
        /// <returns>A numeric string where each letter in the input string is replaced by its decimal ASCII value
        /// minus 55.</returns>
        /// <exception cref="ArgumentException">The <paramref name="alphaNumeric"/> contains a character
        /// that is neither a letter nor a digit.</exception>
        /// <remarks>
        /// This method iterates over each character in the input string. If the character is a letter, it is replaced
        /// by its decimal ASCII value minus 55. If the character is a digit, it is left unchanged.
        /// </remarks>
        public static string ConvertAlphaNumericToNumeric(this string alphaNumeric)
#if NET8_0_OR_GREATER
        {
            Span<char> result = stackalloc char[alphaNumeric.Length * 2];
            int index = 0;

            foreach (char c in alphaNumeric.ToUpper())
            {
                if (char.IsLetter(c))
                {
                    string numericValue = (c - 55).ToString();
                    foreach (char numChar in numericValue)
                    {
                        result[index++] = numChar;
                    }
                }
                else if (char.IsDigit(c))
                {
                    result[index++] = c;
                }
                else
                {
                    throw new ArgumentException($"The character '{c}' is not a letter or a digit!", nameof(alphaNumeric));
                }
            }

            return result[..index].ToString();
        }
#else
        {
            var result = new StringBuilder();

            foreach (char c in alphaNumeric.ToUpper())
            {
                if (char.IsLetter(c))
                {
                    result.Append(c - 55);
                }
                else if (char.IsDigit(c))
                {
                    result.Append(c);
                }
                else
                {
                    throw new ArgumentException($"The character '{c}' is not a letter or a digit!", nameof(alphaNumeric));
                }
            }

            return result.ToString();
        }
#endif

        /// <summary>
        /// Doubling of every second digit.
        /// </summary>
        /// <param name="digits">The digits represent a number w/ or w/o check digit.</param>
        /// <param name="forValidation"><see langword="true"/> if the <paramref name="digits"/> represent
        /// a Luhn number including a check digit; otherwise <see langword="false"/></param>
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
        /// Checks whether the <paramref name="value"/> is even.
        /// </summary>
        /// <param name="value">A numeric value of type <see cref="System.Int32"/></param>
        /// <returns><see langword="true" /> if the <paramref name="value"/> is even; otherwise
        /// <see langword="false"/></returns>
        private static bool IsEven(this int value) => value % 2 == 0;

#if !NET8_0_OR_GREATER
        /// <summary>
        /// Checks whether the number is valid
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns>The trimmed identification number if valid</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid number</exception>
        private static string IsNumber(this string number)
        {
            string trimmedNumber = number?.Trim();
            if (string.IsNullOrWhiteSpace(trimmedNumber) || !Regex.IsMatch(trimmedNumber, @"^\d+$"))
            {
                throw new ArgumentException($"The string '{number}' is not a number!", nameof(number));
            }

            return trimmedNumber;
        }
#endif

#if NET8_0_OR_GREATER
        /// <summary>
        /// Checks whether or not the number is valid
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns>The trimmed identification number if valid</returns>
        /// <exception cref="ArgumentException"><paramref name="number"/> is not a valid number</exception>
        private static ReadOnlySpan<char> IsNumber(this ReadOnlySpan<char> number)
        {
            var trimmedNumber = number.Trim();
            if (trimmedNumber.Length == 0 || !trimmedNumber.IsDigits())
            {
                throw new ArgumentException($"The string '{number}' is not a number!", nameof(number));
            }

            return trimmedNumber;
        }

        /// <summary>
        /// Checks whether or not the <paramref name="number"/> contains only digits
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns><see langword="true" /> if the <paramref name="number"/> contains only digits; otherwise
        /// <see langword="false"/></returns>
        private static bool IsDigits(this ReadOnlySpan<char> number)
        {
            for (int i = 0; i < number.Length; i++)
            {
                if (!char.IsDigit(number[i]))
                {
                    return false;
                }
            }

            return true;
        }
#endif

        /// <summary>
        /// Get all digits of the <paramref name="number"/> in reverse order
        /// </summary>
        /// <param name="number">An identification number</param>
        /// <returns>Enumeration of digits</returns>
#if NET8_0_OR_GREATER
        private static IEnumerable<uint> GetDigits(this ReadOnlySpan<char> number)
        {
            uint[] digits = new uint[number.Length];
            for (int i = 0; i < number.Length; i++)
            {
                digits[number.Length - i - 1] = (uint)number[i] - 48;
            }

            return digits;
        }
#else
        private static IEnumerable<uint> GetDigits(this string number)
        {
            for (int i = number.Length - 1; i >= 0; i--)
            {
                yield return (uint)number[i] - 48;
            }
        }
#endif

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
