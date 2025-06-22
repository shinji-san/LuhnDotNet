// ----------------------------------------------------------------------------
// <copyright file="DammValidator.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>06/07/2025 19:44:57 PM</date>
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
using System;
using System.Diagnostics.CodeAnalysis;

/// <summary>
/// Provides functionality to validate numbers using the Damm algorithm.
/// </summary>
public static class DammValidator
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Checks whether the Damm Number is valid
    /// </summary>
    /// <param name="dammNumber">An identification number w/ check digit (Damm Number).</param>
    /// <returns><see langword="true" /> if the <paramref name="dammNumber"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="dammNumber"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <remarks>The check digit must be at the end of the <paramref name="dammNumber"/>
    /// (on the right side).</remarks>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammNumber(this ReadOnlySpan<char> dammNumber) =>
        dammNumber.ValidateAndTrimNumber().ComputeCheckDigit() == '0';

    /// <summary>
    /// Validates whether the provided Damm Number is correct using the Damm algorithm.
    /// </summary>
    /// <param name="dammNumber">The identification number including the check digit.</param>
    /// <param name="antisymmetricQuasiGroup">The anti-symmetric quasi-group used by the Damm algorithm for validation.</param>
    /// <returns><see langword="true"/> if the <paramref name="dammNumber"/> is valid according to the Damm algorithm;
    /// otherwise, <see langword="false"/>.</returns>
    /// <exception cref="ArgumentNullException"><paramref name="antisymmetricQuasiGroup"/> is <see langword="null"/>.</exception>
    /// <remarks>The last digit of the <paramref name="dammNumber"/> is treated as the check digit during validation.</remarks>
    public static bool IsValidDammNumber(this ReadOnlySpan<char> dammNumber,
        AntisymmetricQuasiGroup antisymmetricQuasiGroup) =>
        dammNumber.ValidateAndTrimNumber().ComputeCheckDigit(antisymmetricQuasiGroup) == '0';
#endif

    /// <summary>
    /// Checks whether the Damm Number is valid
    /// </summary>
    /// <param name="dammNumber">An identification number w/ check digit (Damm Number).</param>
    /// <returns><see langword="true" /> if the <paramref name="dammNumber"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="dammNumber"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <remarks>The check digit must be at the end of the <paramref name="dammNumber"/>
    /// (on the right side).</remarks>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammNumber(this string dammNumber) =>
#if NET8_0_OR_GREATER
        dammNumber.AsSpan().IsValidDammNumber();
#else
        dammNumber.ValidateAndTrimNumber().ComputeCheckDigit() == '0';
#endif

    /// <summary>
    /// Checks whether the provided Damm Number is valid using the Damm algorithm.
    /// </summary>
    /// <param name="dammNumber">The Damm Number, which is an identification number that includes a check digit.</param>
    /// <param name="antisymmetricQuasiGroup">The anti-symmetric quasi-group used by the Damm algorithm for validation.</param>
    /// <returns><see langword="true" /> if the <paramref name="dammNumber"/> is valid;
    /// otherwise <see langword="false" />.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="dammNumber"/> contains non-numeric characters.</exception>
    /// <remarks>The check digit must be placed at the end of the <paramref name="dammNumber"/> (on the right side).</remarks>
    public static bool IsValidDammNumber(this string dammNumber, AntisymmetricQuasiGroup antisymmetricQuasiGroup) =>
#if NET8_0_OR_GREATER
        dammNumber.AsSpan().IsValidDammNumber(antisymmetricQuasiGroup);
#else
        dammNumber.ValidateAndTrimNumber().ComputeCheckDigit(antisymmetricQuasiGroup) == '0';
#endif
    
#if NET8_0_OR_GREATER
    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Damm check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Damm check digit</param>
    /// <param name="number">Identification number w/o Damm check digit</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammCheckDigit(this char checkDigit, ReadOnlySpan<char> number)
    {
        checkDigit.ThrowIfNotDigit();
        var trimmedNumber = number.ValidateAndTrimNumber();
        return trimmedNumber.CreateNumberWithCheckDigitAndValidate(
            checkDigit,
            n => n.IsValidDammNumber());
    }
    
    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Damm check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Damm check digit</param>
    /// <param name="number">Identification number w/o Damm check digit</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammCheckDigit(this char checkDigit, ReadOnlySpan<char> number, AntisymmetricQuasiGroup antisymmetricQuasiGroup)
    {
        checkDigit.ThrowIfNotDigit();
        var trimmedNumber = number.ValidateAndTrimNumber();
        return trimmedNumber.CreateNumberWithCheckDigitAndValidate(
            checkDigit,
            n => n.IsValidDammNumber(antisymmetricQuasiGroup));
    }
#endif

    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Damm check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Damm check digit</param>
    /// <param name="number">Identification number w/o Damm check digit</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammCheckDigit(this char checkDigit, string number)
    {
#if NET8_0_OR_GREATER
        return checkDigit.IsValidDammCheckDigit(number.AsSpan());
#else
        checkDigit.ThrowIfNotDigit(nameof(checkDigit));
        return string.Concat(number.Trim(), checkDigit)
            .ValidateAndTrimNumber()
            .IsValidDammNumber();
#endif
    }

    /// <summary>
    /// Checks whether the concatenation of the number and the corresponding Damm check digit is valid
    /// </summary>
    /// <param name="checkDigit">The Damm check digit</param>
    /// <param name="number">Identification number w/o Damm check digit</param>
    /// <param name="antisymmetricQuasiGroup">A ten-by-ten antisymmetric quasigroup table.</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> is valid;
    /// otherwise <see langword="false" /></returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not valid.
    /// It contains non-numeric characters.</exception>
    /// <exception cref="ArgumentOutOfRangeException">The <paramref name="checkDigit"/> value is greater than 9.
    /// The <paramref name="checkDigit"/> value must be between 0 and 9.</exception>
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    [SuppressMessage("ReSharper", "HeapView.ObjectAllocation")]
    public static bool IsValidDammCheckDigit(this char checkDigit, string number,
        AntisymmetricQuasiGroup antisymmetricQuasiGroup)
    {
#if NET8_0_OR_GREATER
        return checkDigit.IsValidDammCheckDigit(number.AsSpan(), antisymmetricQuasiGroup);
#else
        checkDigit.ThrowIfNotDigit(nameof(checkDigit));
        return string.Concat(number.Trim(), checkDigit)
            .ValidateAndTrimNumber()
            .IsValidDammNumber(antisymmetricQuasiGroup);
#endif
    }
}