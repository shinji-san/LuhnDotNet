// ----------------------------------------------------------------------------
// <copyright file="ReadOnlySpanExtensions.cs" company="Private">
// Copyright (c) 2022 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>11/13/2022 08:48:55 PM</date>
// ----------------------------------------------------------------------------

#if NET8_0_OR_GREATER
namespace LuhnDotNet;

using System;
using System.Collections.Generic;
using System.Globalization;

/// <summary>
/// Provides extension methods for working with <see cref="ReadOnlySpan{T}"/> objects,
/// specifically for alphanumeric-to-numeric conversions and validation.
/// </summary>
public static class ReadOnlySpanExtensions
{
    /// <summary>
    /// Converts an alphanumeric string into its numeric representation.
    /// </summary>
    /// <param name="alphaNumeric">The alphanumeric span to be converted.</param>
    /// <returns>A numeric representation of the input span.</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="alphaNumeric"/> contains characters that are not letters or digits.</exception>
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
    /// Checks whether or not the <paramref name="number"/> contains only digits
    /// </summary>
    /// <param name="number">An identification number</param>
    /// <returns><see langword="true" /> if the <paramref name="number"/> contains only digits; otherwise
    /// <see langword="false"/></returns>
    private static bool IsDigits(this ReadOnlySpan<char> number)
    {
        foreach (char character in number)
        {
            if (!char.IsDigit(character))
            {
                return false;
            }
        }

        return true;
    }
}

#endif