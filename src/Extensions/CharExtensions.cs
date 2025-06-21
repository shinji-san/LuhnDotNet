namespace LuhnDotNet.Extensions;

#if NET8_0_OR_GREATER
using System.Runtime.CompilerServices;
#else
using System.Runtime.CompilerServices;
#endif

/// <summary>
/// Provides extension methods for character-related functionality.
/// </summary>
public static class CharExtensions
{
#if NET8_0_OR_GREATER
    /// <summary>
    /// Throws an <see cref="InvalidCharacterException"/> if the specified character is not a digit.
    /// </summary>
    /// <param name="c">The character to validate as a digit.</param>
    /// <param name="paramName">The name of the parameter being validated. Automatically set using caller information if not specified.</param>
    /// <exception cref="InvalidCharacterException">
    /// Thrown when the character is not a digit (between '0' and '9').
    /// </exception>
    public static void ThrowIfNotDigit(this char c, [CallerArgumentExpression(nameof(c))] string paramName = null)
#else
    /// <summary>
    /// Verifies if the specified character is a numeric digit (between '0' and '9').
    /// Throws an exception if the character is not a valid digit.
    /// </summary>
    /// <param name="c">The character to check.</param>
    /// <param name="paramName">The name of the parameter being validated., used for exception messages.</param>
    /// <exception cref="InvalidCharacterException">Thrown if the specified character is not a numeric digit.</exception>
    internal static void ThrowIfNotDigit(this char c, string paramName)
#endif
    {
        if (char.IsDigit(c))
        {
            return;
        }

        throw new InvalidCharacterException($"The character '{c}' is not a valid digit. The character must be between '0' and '9'.", paramName);
    }

    /// <summary>
    /// Converts a character representing a numeric digit to its unsigned integer value.
    /// </summary>
    /// <param name="character">The character to convert. Must represent a numeric digit.</param>
    /// <returns>The numeric value of the character as an unsigned integer.</returns>
    internal static uint ToUnsignedIntegerDigit(this char character)
    {
#if NET8_0_OR_GREATER
        character.ThrowIfNotDigit();
#else
        character.ThrowIfNotDigit(nameof(character));
#endif
        
        return (uint)character - LuhnDotNetCore.AsciiCodeForZero;
    }
}