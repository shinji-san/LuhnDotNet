// ----------------------------------------------------------------------------
// <copyright file="InvalidCharacterException.cs" company="Private">
// Copyright (c) 2025 All Rights Reserved
// </copyright>
// <author>Sebastian Walther</author>
// <date>01/01/2025 09:00:26 PM</date>
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

using System;
using System.Runtime.Serialization;

namespace LuhnDotNet
{
    /// <summary>
    /// The exception that is thrown when an invalid character is encountered within an argument.
    /// </summary>
    [Serializable]
    public class InvalidCharacterException : ArgumentException
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidCharacterException"/> class.
        /// </summary>
        public InvalidCharacterException() : base("Invalid character encountered in argument.")
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidCharacterException"/> class with a specified error message.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        public InvalidCharacterException(string message) : base(message)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidCharacterException"/> class with a specified error message
        /// and the name of the parameter that caused this exception.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.</param>
        /// <param name="paramName">The name of the parameter that caused the current exception.</param>
        public InvalidCharacterException(string message, string? paramName) : base(message, paramName)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidCharacterException"/> class with a specified error message,
        /// the parameter name, and a reference to the inner exception that is the cause of this exception.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.</param>
        /// <param name="paramName">The name of the parameter that caused the current exception.</param>
        /// <param name="innerException">The exception that is the cause of the current exception
        /// or a null reference if no inner exception is specified.</param>
        public InvalidCharacterException(string message, string? paramName, Exception innerException) : base(message, paramName, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidCharacterException"/> class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/> that holds the serialized object data about the exception being thrown.</param>
        /// <param name="context">The <see cref="StreamingContext"/> that contains contextual information about the source or destination.</param>
        [Obsolete(
            "This constructor is obsolete and will be removed in a future version. Use InvalidCharacterException(string message, string paramName, Exception innerException) instead.",
            false)]
        protected InvalidCharacterException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
