// ----------------------------------------------------------------------------
// <copyright file="LuhnValidator.cs" company="Private">
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

using Extensions;
using System;
using System.Diagnostics.CodeAnalysis;

/// <summary>
/// Provides functionality to validate numbers using the Luhn algorithm.
/// </summary>
public static class LuhnValidator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Checks whether the Luhn Number is valid
    /// </summary>
    /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
    /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="luhnNumber"/> is not valid.
    /// It contains none-numeric characters.</exception>
    /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
    /// (on the right side).</remarks>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidLuhnNumber(this ReadOnlySpan<char> luhnNumber) =>
        luhnNumber.ValidateAndTrimNumber().DoubleEverySecondDigit(true) == 0;
#endif

    /// <summary>
    /// Checks whether the Luhn Number is valid
    /// </summary>
    /// <param name="luhnNumber">An identification number w/ check digit (Luhn Number).</param>
    /// <returns><see langword="true" /> if the <paramref name="luhnNumber"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="luhnNumber"/> is not valid.
    /// It contains none-numeric characters.</exception>
    /// <remarks>The check digit must be at the end of the <paramref name="luhnNumber"/>
    /// (on the right side).</remarks>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidLuhnNumber(this string luhnNumber) =>
#if NET8_0_OR_GREATER
        luhnNumber.AsSpan().IsValidLuhnNumber();
#else
        luhnNumber.ValidateAndTrimNumber().DoubleEverySecondDigit(true) == 0;
#endif

#if NET8_0_OR_GREATER
    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Luhn check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Luhn check digit</param>
    /// <param name="number">Identification number w/o Luhn check digit</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains none-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidLuhnCheckDigit(this char checkDigit, ReadOnlySpan<char> number)
    {
        checkDigit.ThrowIfNotDigit();

        var trimmedNumber = number.ValidateAndTrimNumber();
        Span<char> luhnNumber = stackalloc char[trimmedNumber.Length + 1];
        trimmedNumber.CopyTo(luhnNumber[..^1]);
        luhnNumber[^1] = checkDigit;
        ReadOnlySpan<char> readOnlyLuhnNumber = luhnNumber;
        return readOnlyLuhnNumber.DoubleEverySecondDigit(true) == 0;
    }
#endif

    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Luhn check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Luhn check digit</param>
    /// <param name="number">Identification number w/o Luhn check digit</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains none-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidLuhnCheckDigit(this char checkDigit, string number)
    {
#if NET8_0_OR_GREATER
        return checkDigit.IsValidLuhnCheckDigit(number.AsSpan());
#else
        checkDigit.ThrowIfNotDigit(nameof(checkDigit));
        return string.Concat(number.Trim(), checkDigit)
            .ValidateAndTrimNumber()
            .DoubleEverySecondDigit(true) == 0;
#endif
    }
}