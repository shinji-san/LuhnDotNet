// ----------------------------------------------------------------------------
// <copyright file="UintExtension.cs" company="Private">
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

using System;

/// <summary>
/// Provides extension methods for unsigned integer types.
/// </summary>
public static class UintExtension
{
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
            throw new ArgumentOutOfRangeException(
                nameof(digit),
                $"The digit '{digit}' is not a valid single digit. Digit must be between 0 and 9.");
        }

        return (char)(digit + LuhnDotNetCore.AsciiCodeForZero);
    }       
}