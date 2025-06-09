namespace LuhnDotNetTest.Extension;

using LuhnDotNet;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using Xunit;

/// <summary>
/// Unit tests for the C# implementation of the Luhn algorithm.
/// </summary>
public class StringExtensionTest
{
    /// <summary>
    /// Test data for AlphaNumericToNumeric method.
    /// </summary>
    public static IEnumerable<object[]> AlphaNumericToNumericData =>
        new List<object[]>
        {
            new object[] { "A1B2C3", "101112123" },
            new object[] { "Z9Y8X7", "359348337" },
            new object[] { "123", "123" },
            new object[] { "DE0006069008", "13140006069008" },
            new object[] { "ABC", "101112" },
        };

    /// <summary>
    /// Tests the AlphaNumericToNumeric method.
    /// </summary>
    /// <param name="input">Input string</param>
    /// <param name="expected">Expected output</param>
    [Theory(DisplayName = "Converts an alphanumeric string to a numeric string")]
    [MemberData(nameof(AlphaNumericToNumericData), MemberType = typeof(StringExtensionTest))]
    public void AlphaNumericToNumeric_ValidInput_ShouldReturnExpectedResult(string input, string expected)
    {
        Assert.Equal(expected, input.AlphaNumericToNumeric());
    }

    /// <summary>
    /// Tests the AlphaNumericToNumeric method with invalid input.
    /// </summary>
    /// <remarks>
    /// This test checks if the AlphaNumericToNumeric method throws an InvalidCharacterException when it is given an
    /// invalid input string that contains non-alphanumeric characters. The test uses the Assert. Throws method from
    /// xUnit to check if the expected exception is thrown.
    /// </remarks>
    [Fact(DisplayName = "Converts an invalid alphanumeric string to a numeric string to throw an exception")]
    public void AlphaNumericToNumeric_InvalidInput_ThrowsInvalidCharacterException()
    {
        Assert.Throws<InvalidCharacterException>(()=> "!@#$%^&*()".AlphaNumericToNumeric());
    }

    /// <summary>
    /// Validates that the AlphaNumericToNumeric method throws an ArgumentNullException
    /// when passed an empty or null string input.
    /// </summary>
    [Fact(DisplayName = "Converts an empty alphanumeric string to a numeric string to throw an exception")]
    public void AlphaNumericToNumeric_EmptyInput_ThrowsArgumentNullException()
    {
        Assert.Throws<ArgumentNullException>(() => "".AlphaNumericToNumeric());
        Assert.Throws<ArgumentNullException>(() => ((string)null)!.AlphaNumericToNumeric());
    }

    /// <summary>
    /// Tests that the RemoveSeparators method processes input correctly by removing separators.
    /// </summary>
    /// <param name="input">The input string containing separators.</param>
    /// <param name="expected">The expected string after separators are removed.</param>
    [Theory]
    [InlineData("4444 5555 6666 8888", "4444555566668888")]
    [InlineData("6666/5555/7777/9123", "6666555577779123")]
    [InlineData(@"6666\5555\7777\9123", "6666555577779123")]
    [InlineData("4321-5678-9012-3456", "4321567890123456")]
    [InlineData("0987654321", "0987654321")]
    public void RemoveSeparators_ValidInput_ReturnsExpectedResult(string input, string expected)
    {
        Assert.Equal(expected, input.RemoveSeparators());
    }

    /// <summary>
    /// Tests the RemoveSeparators method to ensure it throws an ArgumentNullException
    /// when the input string is null or empty.
    /// </summary>
    [Fact(DisplayName = "Remove separators from an invalid string to throw an exception")]
    public void RemoveSeparators_EmptyInput_ThrowsArgumentNullException()
    {
        Assert.Throws<ArgumentNullException>(() => "".RemoveSeparators());
        Assert.Throws<ArgumentNullException>(() => ((string)null)!.RemoveSeparators());
    }
}