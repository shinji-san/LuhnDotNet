namespace LuhnDotNet;

using Extensions;
using System;

/// <summary>
/// A static utility class supporting functionality related to the Luhn, Modulo 11, Damm, and other algorithms.
/// </summary>
internal static class LuhnDotNetCore
{
    /// <summary>
    /// Specifies the maximum limit for a stack size, used to constrain operations or prevent excessive resource usage.
    /// </summary>
    internal const int MaxStackLimit = 512;

    /// <summary>
    /// Represents the ASCII code for the character '0'.
    /// </summary>
    internal const int AsciiCodeForZero = 48;

    /// <summary>
    /// Converts an unsigned integer representing a single digit into its corresponding character.
    /// </summary>
    /// <param name="digit">The unsigned integer to convert. Must be between 0 and 9 inclusive.</param>
    /// <returns>The character representation of the specified numeric digit.</returns>
    /// <exception cref="ArgumentOutOfRangeException">Thrown if the input digit is greater than 9.</exception>
    internal static char ToCharDigit(this uint digit)
    {
        if (digit > 9)
        {
            throw new ArgumentOutOfRangeException(nameof(digit), $"The digit '{digit}' is not a valid single digit. Digit must be between 0 and 9.");
        }

        return (char)(digit + AsciiCodeForZero);
    }
}