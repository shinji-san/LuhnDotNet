// ----------------------------------------------------------------------------
// <copyright file="LuhnCalculator.cs" company="Private">
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

using System;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
#if !NET8_0_OR_GREATER
    using System.Text.RegularExpressions;
#endif

/// <summary>
/// Provides methods for performing the Luhn algorithm, including computation of check digits and Luhn numbers.
/// </summary>
public static class LuhnCalculator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the Luhn check digit
    /// </summary>
    /// <param name="number">An identification number w/o check digit.</param>
    /// <returns>The calculated Luhn check digit.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains none-numeric characters.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static byte ComputeLuhnCheckDigit(this ReadOnlySpan<char> number) =>
        (byte)((LuhnAlgorithm.Modulus - number.ValidateAndTrimNumber().DoubleEverySecondDigit(false)) % LuhnAlgorithm.Modulus);
#endif

    /// <summary>
    /// Computes the Luhn check digit.
    /// </summary>
    /// <param name="number">An identification number w/o check digit.</param>
    /// <returns>The calculated Luhn check digit as a byte.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains none-numeric characters.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static byte ComputeLuhnCheckDigit(this string number) =>
#if NET8_0_OR_GREATER
        number.AsSpan().ComputeLuhnCheckDigit();
#else
        (byte)((LuhnAlgorithm.Modulus - number.ValidateAndTrimNumber().DoubleEverySecondDigit(false)) % LuhnAlgorithm.Modulus);
#endif

#if NET8_0_OR_GREATER
    /// <summary>
    /// Computes the Luhn number, which is a combination of the given number and the calculated check digit.
    /// </summary>
    /// <param name="number">An identification number w/o check digit.</param>
    /// <returns>The calculated Luhn number.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
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
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains none-numeric characters.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static string ComputeLuhnNumber(this string number)
    {
#if NET8_0_OR_GREATER
        return number.AsSpan().ComputeLuhnNumber();
#else
        byte checkDigit = number.ComputeLuhnCheckDigit();
        return string.Concat(number.Trim(), checkDigit.ToString(CultureInfo.InvariantCulture));
#endif
    }
}