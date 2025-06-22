// ----------------------------------------------------------------------------
// <copyright file="CharExtensions.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>06/22/2025 06:10:07 PM</date>
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
    public static void ThrowIfNotDigit(this char c, [CallerArgumentExpression(nameof(c))] string? paramName = null)
#else
    /// <summary>
    /// Verifies if the specified character is a numeric digit (between '0' and '9').
    /// Throws an exception if the character is not a valid digit.
    /// </summary>
    /// <param name="c">The character to check.</param>
    /// <param name="paramName">The name of the parameter being validated., used for exception messages.</param>
    /// <exception cref="InvalidCharacterException">Thrown if the specified character is not a numeric digit.</exception>
    public static void ThrowIfNotDigit(this char c, string? paramName)
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
        
        return character - LuhnDotNetCore.AsciiCodeForZero;
    }
}