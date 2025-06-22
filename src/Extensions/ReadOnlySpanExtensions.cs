// ----------------------------------------------------------------------------
// <copyright file="ReadOnlySpanExtensions.cs" company="Private">
// Copyright (c) 2022 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>11/13/2022 08:48:55 PM</date>
// ----------------------------------------------------------------------------

#if NET8_0_OR_GREATER
namespace LuhnDotNet.Extensions;

using System;
using System.Buffers;
using System.Collections.Generic;
using System.Globalization;

/// <summary>
/// Provides extension methods for working with <see cref="ReadOnlySpan{T}"/> objects,
/// specifically for alphanumeric-to-numeric conversions and validation.
/// </summary>
public static class ReadOnlySpanExtensions
{
    private static readonly SearchValues<char> Digits = SearchValues.Create("0123456789");

    /// <summary>
    /// Represents a delegate used to calculate a check digit for a numeric span of characters.
    /// </summary>
    /// <param name="number">The numeric span for which the check digit is to be calculated.</param>
    /// <returns>A <see cref="char"/> value representing the computed check digit.</returns>
    internal delegate char CheckDigitCalculator(ReadOnlySpan<char> number);

    /// <summary>
    /// Represents a delegate that defines a method to validate a numeric sequence
    /// contained within a <see cref="ReadOnlySpan{T}"/> of characters.
    /// Returns a boolean indicating whether the sequence passes the validation criteria.
    /// </summary>
    /// <param name="span">The read-only span of characters representing the numeric sequence to be validated.</param>
    /// <returns><see langword="true"/> if the span represents a valid numeric sequence,
    /// otherwise <see langword="false"/>.</returns>
    internal delegate bool IsValidNumber(ReadOnlySpan<char> span);

    /// <summary>
    /// Converts an alphanumeric string into its numeric representation.
    /// </summary>
    /// <param name="alphaNumeric">The alphanumeric span to be converted.</param>
    /// <returns>A numeric representation of the input span.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="alphaNumeric"/> contains characters that
    /// aren't letters or digits.</exception>
    public static ReadOnlySpan<char> AlphaNumericToNumeric(this ReadOnlySpan<char> alphaNumeric)
    {
        if (alphaNumeric.IsEmpty)
        {
            throw new ArgumentNullException(nameof(alphaNumeric), "The number cannot be empty.");
        }

        Span<char> result = new char[alphaNumeric.Length * 2];

        int index = 0;
        foreach (char c in alphaNumeric)
        {
            char character = char.ToUpper(c, CultureInfo.InvariantCulture);
            if (char.IsLetter(character))
            {
                string numericValue = (character - 55).ToString();
                foreach (char numChar in numericValue)
                {
                    result[index++] = numChar;
                }
            }
            else if (char.IsDigit(character))
            {
                result[index++] = character;
            }
            else
            {
                throw new InvalidCharacterException($"The character '{c}' is not a letter or a digit!",
                    nameof(alphaNumeric));
            }
        }

        return result[..index];
    }

    /// <summary>
    /// Removes separator characters from the given alphanumeric span.
    /// </summary>
    /// <param name="identifier">The alphanumeric span from which separators are to be removed.</param>
    /// <returns>A span containing the input without separator characters.</returns>
    /// <exception cref="ArgumentNullException"><paramref name="identifier"/> is null or empty.</exception>
    public static ReadOnlySpan<char> RemoveSeparators(this ReadOnlySpan<char> identifier)
    {
        if (identifier.IsEmpty)
        {
            throw new ArgumentNullException(nameof(identifier), "The identifier cannot be empty.");
        }

        Span<char> result = new char[identifier.Length];

        // Define valid separators as a HashSet for O(1) lookup
        var separators = new HashSet<char> { '/', '\\', '-', '_', '|', ',', ' ', '.' };
        int index = 0;
        foreach (char c in identifier)
        {
            if (!separators.Contains(c))
            {
                result[index++] = c;
            }
        }

        return result[..index];
    }

    /// <summary>
    /// Checks whether or not the number is valid
    /// </summary>
    /// <param name="number">An identification number</param>
    /// <returns>The trimmed identification number if valid</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not a valid number</exception>
    internal static ReadOnlySpan<char> ValidateAndTrimNumber(this ReadOnlySpan<char> number)
    {
        var trimmedNumber = number.Trim();
        if (trimmedNumber.IsEmpty || !trimmedNumber.IsDigits())
        {
            throw new InvalidCharacterException($"The string '{number}' is not a number!", nameof(number));
        }

        return trimmedNumber;
    }

    /// <summary>
    /// Computes a numeric string with an appended check digit based on the provided number and check digit calculator function.
    /// </summary>
    /// <param name="number">The numeric span for which the check digit is to be computed and appended.</param>
    /// <param name="computeCheckDigit">A delegate representing the function used to calculate the check digit.</param>
    /// <returns>A string containing the input number with the computed check digit appended.</returns>
    /// <exception cref="ArgumentException"><paramref name="number"/> is empty or contains non-digit characters.</exception>
    internal static string ComputeNumberWithCheckDigit(
        this ReadOnlySpan<char> number,
        CheckDigitCalculator computeCheckDigit)
    {
        var trimmedNumber = number.ValidateAndTrimNumber();
        int bufferLength = trimmedNumber.Length + 1;
        char[]? rentedFromPool = null;
        try
        {
            var buffer = bufferLength > LuhnDotNetCore.MaxStackLimit
                ? (rentedFromPool = ArrayPool<char>.Shared.Rent(bufferLength))
                : stackalloc char[bufferLength];
            var numberWithCheckDigit = buffer[..bufferLength];
            trimmedNumber.CopyTo(numberWithCheckDigit[..^1]);
            numberWithCheckDigit[^1] = computeCheckDigit(trimmedNumber);
            return numberWithCheckDigit.ToString();
        }
        finally
        {
            if (rentedFromPool is not null)
            {
                ArrayPool<char>.Shared.Return(rentedFromPool, clearArray: false);
            }
        }
    }

    /// <summary>
    /// Checks whether or not the <paramref name="number"/> contains only digits
    /// </summary>
    /// <param name="number">An identification number</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> contains only digits; otherwise
    /// <see langword="false"/></returns>
    internal static bool IsDigits(this ReadOnlySpan<char> number)
    {
        return !number.IsEmpty && number.IndexOfAnyExcept(Digits) == -1;
    }

    /// <summary>
    /// Creates a number with the specified check digit appended and validates it using the provided validation delegate.
    /// </summary>
    /// <param name="number">The base number to which the check digit will be appended.</param>
    /// <param name="checkDigit">The check digit to append to the base number.</param>
    /// <param name="isValid">A delegate function to validate the constructed number with the
    /// appended check digit.</param>
    /// <returns><see langword="true"/> if the constructed number with the appended check digit is valid,
    /// otherwise <see langword="false"/>.</returns>
    internal static bool CreateNumberWithCheckDigitAndValidate(
        this ReadOnlySpan<char> number,
        char checkDigit,
        IsValidNumber isValid)
    {
        int bufferLength = number.Length + 1;
        char[]? rentedFromPool = null;
        try
        {
            var buffer = bufferLength > LuhnDotNetCore.MaxStackLimit
                ? (rentedFromPool = ArrayPool<char>.Shared.Rent(bufferLength))
                : stackalloc char[bufferLength];
            var numberWithCheckDigit = buffer[..bufferLength];
            number.CopyTo(numberWithCheckDigit[..^1]);
            numberWithCheckDigit[^1] = checkDigit;
            return isValid(numberWithCheckDigit);
        }
        finally
        {
            if (rentedFromPool is not null)
            {
                ArrayPool<char>.Shared.Return(rentedFromPool, clearArray: false);
            }
        }
    }
}

#endif