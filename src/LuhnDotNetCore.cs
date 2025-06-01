namespace LuhnDotNet;

using System;

/// <summary>
/// A static utility class supporting functionality related to the Luhn, Modulo 11, Damm, and other algorithms.
/// </summary>
internal static class LuhnDotNetCore
{
    /// <summary>
    /// Represents the ASCII code for the character '0'.
    /// </summary>
    private const int AsciiCodeForZero = 48;
    
    /// <summary>
    /// Converts a character representing a numeric digit to its unsigned integer value.
    /// </summary>
    /// <param name="character">The character to convert. Must represent a numeric digit.</param>
    /// <returns>The numeric value of the character as an unsigned integer.</returns>
    internal static uint ToUnsignedIntegerDigit(this char character)
    {
        if (!char.IsDigit(character))
        {
            throw new ArgumentOutOfRangeException(nameof(character), $"The character '{character}' is not a valid digit.  Character must be between '0' and '9'." );
        }

        return (uint)character - AsciiCodeForZero;
    }
    
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