// ----------------------------------------------------------------------------
// <copyright file="StringExtension.cs" company="Private">
// Copyright (c) 2022 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>11/13/2022 08:48:55 PM</date>
// ----------------------------------------------------------------------------

namespace LuhnDotNet.Extensions;

using System;
using System.Collections.Generic;
using System.Text;

#if !NET8_0_OR_GREATER
using System.Linq;
#else
using System.Buffers;
#endif

/// <summary>
/// Provides extension methods for string processing.
/// </summary>
public static class StringExtension
{
    /// <summary>
    /// Converts an alphanumeric string to a numeric string.
    /// </summary>
    /// <param name="alphaNumeric">The alphanumeric string to convert.</param>
    /// <returns>A numeric string where each letter in the input string is replaced by its decimal ASCII value
    /// minus 55.</returns>
    /// <exception cref="InvalidCharacterException">The <paramref name="alphaNumeric"/> contains a character
    /// that is neither a letter nor a digit.</exception>
    /// <remarks>
    /// This method iterates over each character in the input string. If the character is a letter, it is replaced
    /// by its decimal ASCII value minus 55. If the character is a digit, it is left unchanged.
    /// </remarks>
    public static string AlphaNumericToNumeric(this string alphaNumeric)
#if NET8_0_OR_GREATER
    {
        if (string.IsNullOrWhiteSpace(alphaNumeric))
        {
            throw new ArgumentNullException(nameof(alphaNumeric), "The number cannot be empty.");
        }

        char[]? rentedFromPool = null;
        var length = alphaNumeric.Length * 2;
        try
        {
            var buffer = length > LuhnDotNetCore.MaxStackLimit
                ? (rentedFromPool = ArrayPool<char>.Shared.Rent(length))
                : stackalloc char[length];
            var result = buffer[..length];
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
                    throw new InvalidCharacterException($"The character '{c}' is not a letter or a digit!",
                        nameof(alphaNumeric));
                }
            }

            return result[..index].ToString();
        }
        finally
        {
            if (rentedFromPool is not null)
            {
                ArrayPool<char>.Shared.Return(rentedFromPool, clearArray: false);
            }
        }
    }
#else
    {
        if (string.IsNullOrWhiteSpace(alphaNumeric))
        {
            throw new ArgumentNullException(nameof(alphaNumeric), "The number cannot be empty.");
        }

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
                throw new InvalidCharacterException($"The character '{c}' is not a letter or a digit!",
                    nameof(alphaNumeric));
            }
        }

        return result.ToString();
    }
#endif

    /// <summary>
    /// Removes all separators from the input identifier string.
    /// </summary>
    /// <param name="identifier">The input identifier string with separators.</param>
    /// <returns>The identifier string without separators.</returns>
    /// <exception cref="ArgumentNullException">Thrown when the input identifier is null or empty.</exception>
    public static string RemoveSeparators(this string identifier)
    {
        if (string.IsNullOrWhiteSpace(identifier))
        {
            throw new ArgumentNullException(nameof(identifier), "The identifier cannot be null or empty.");
        }

        // Define valid separators as a HashSet for O(1) lookup
        var separators = new HashSet<char> { '/', '\\', '-', '_', '|', ',', ' ', '.' };
        var result = new StringBuilder();

        foreach (char c in identifier)
        {
            if (!separators.Contains(c))
            {
                result.Append(c);
            }
        }

        return result.ToString();
    }

#if !NET8_0_OR_GREATER
    /// <summary>
    /// Checks whether the number is valid
    /// </summary>
    /// <param name="number">An identification number</param>
    /// <returns>The trimmed identification number if valid</returns>
    /// <exception cref="InvalidCharacterException"><paramref name="number"/> is not a valid number</exception>
    internal static string ValidateAndTrimNumber(this string? number)
    {
        var trimmedNumber = number?.Trim();
        if (string.IsNullOrWhiteSpace(trimmedNumber) || trimmedNumber.Any(c => !char.IsDigit(c)))
        {
            throw new InvalidCharacterException($"The string '{number}' is not a number!", nameof(number));
        }

        return trimmedNumber;
    }
#endif
}
