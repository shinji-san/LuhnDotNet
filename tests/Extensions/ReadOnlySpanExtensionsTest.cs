#if NET8_0_OR_GREATER
namespace LuhnDotNetTest.Extensions;

using LuhnDotNet;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using Xunit;

public class ReadOnlySpanExtensionsTest
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
    /// <param name="input">Input ReadOnlySpan{char}</param>
    /// <param name="expected">Expected output</param>
    [Theory(DisplayName = "Converts an alphanumeric ReadOnlySpan<char> to a numeric ReadOnlySpan<char>")]
    [MemberData(nameof(AlphaNumericToNumericData), MemberType = typeof(ReadOnlySpanExtensionsTest))]
    public void AlphaNumericToNumeric_ValidInput_ShouldReturnExpectedResult(string input, string expected)
    {
        Assert.Equal(expected.AsSpan(), input.AsSpan().AlphaNumericToNumeric());
    }

    /// <summary>
    /// Tests the AlphaNumericToNumeric method with invalid input.
    /// </summary>
    /// <remarks>
    /// This test checks if the AlphaNumericToNumeric method throws an InvalidCharacterException when it is given an
    /// invalid input string that contains non-alphanumeric characters. The test uses the Assert. Throws method from
    /// xUnit to check if the expected exception is thrown.
    /// </remarks>
    [Fact(DisplayName = "Converts an invalid alphanumeric ReadOnlySpan<char> to a numeric ReadOnlySpan<char> to throw an exception")]
    public void AlphaNumericToNumeric_InvalidInput_ThrowsInvalidCharacterException()
    {
        Assert.Throws<InvalidCharacterException>(()=> "!@#$%^&*()".AsSpan().AlphaNumericToNumeric());
    }

    /// <summary>
    /// Tests that lower case letters are converted like their upper case counterparts.
    /// </summary>
    /// <param name="input">Input ReadOnlySpan{char}</param>
    /// <param name="expected">Expected output</param>
    [Theory(DisplayName = "Converts lower case letters of a ReadOnlySpan<char> like upper case letters")]
    [InlineData("a1b2c3", "101112123")]
    [InlineData("z9y8x7", "359348337")]
    [InlineData("ie00b4bnmy34", "1814001141123223434")]
    [InlineData("IE00B4BNMY34", "1814001141123223434")]
    public void AlphaNumericToNumeric_LowerCaseInput_ShouldReturnExpectedResult(string input, string expected)
    {
        Assert.Equal(expected, input.AsSpan().AlphaNumericToNumeric().ToString());
    }

    /// <summary>
    /// Tests that the string and the ReadOnlySpan{char} variant of the AlphaNumericToNumeric method agree,
    /// whatever the current culture is.
    /// </summary>
    /// <param name="cultureName">Name of the culture to run the conversion with</param>
    [Theory(DisplayName = "Converts an alphanumeric ReadOnlySpan<char> independently of the current culture")]
    [InlineData("tr-TR")]
    [InlineData("az-Latn-AZ")]
    [InlineData("en-US")]
    [InlineData("")]
    public void AlphaNumericToNumeric_AnyCulture_ShouldReturnSameResultAsStringVariant(string cultureName)
    {
        var previousCulture = System.Globalization.CultureInfo.CurrentCulture;
        try
        {
            System.Globalization.CultureInfo.CurrentCulture = new System.Globalization.CultureInfo(cultureName);
            const string isin = "ie00b4bnmy34";
            Assert.Equal("1814001141123223434", isin.AsSpan().AlphaNumericToNumeric().ToString());
            Assert.Equal(isin.AlphaNumericToNumeric(), isin.AsSpan().AlphaNumericToNumeric().ToString());
        }
        finally
        {
            System.Globalization.CultureInfo.CurrentCulture = previousCulture;
        }
    }

    /// <summary>
    /// Tests that letters and digits outside the ASCII range are rejected instead of being converted.
    /// </summary>
    /// <param name="input">Input ReadOnlySpan{char}</param>
    [Theory(DisplayName = "Converts a ReadOnlySpan<char> with non-ASCII letters or digits to throw an exception")]
    [InlineData("Ä")] // Latin capital letter A with diaeresis
    [InlineData("ß")] // Latin small letter sharp s
    [InlineData("İ")] // Latin capital letter I with dot above
    [InlineData("ı")] // Latin small letter dotless i
    [InlineData("Ж")] // Cyrillic capital letter Zhe
    [InlineData("٣")] // Arabic-Indic digit three
    [InlineData("３")] // Fullwidth digit three
    [InlineData("DEÄ0006069008")]
    public void AlphaNumericToNumeric_NonAsciiInput_ThrowsInvalidCharacterException(string input)
    {
        var exception = Assert.Throws<InvalidCharacterException>(() => input.AsSpan().AlphaNumericToNumeric());
        Assert.Equal("alphaNumeric", exception.ParamName);
    }

    /// <summary>
    /// Tests that the AlphaNumericToNumeric method throws an ArgumentNullException when the input is empty or null.
    /// </summary>
    [Fact(DisplayName = "Converts an empty alphanumeric ReadOnlySpan<char> to a numeric ReadOnlySpan<char> to throw an exception")]
    public void AlphaNumericToNumeric_EmptyInput_ThrowsArgumentNullException()
    {
        Assert.Throws<ArgumentNullException>(() => "".AsSpan().AlphaNumericToNumeric());
        Assert.Throws<ArgumentNullException>(() => ((string)null)!.AsSpan().AlphaNumericToNumeric());
    }

    /// <summary>
    /// Tests that the RemoveSeparators method processes input correctly by removing separators.
    /// </summary>
    /// <param name="input">The input ReadOnlySpan{char} containing separators.</param>
    /// <param name="expected">The expected ReadOnlySpan{char} after separators are removed.</param>
    [Theory]
    [InlineData("4444 5555 6666 8888", "4444555566668888")]
    [InlineData("6666/5555/7777/9123", "6666555577779123")]
    [InlineData(@"6666\5555\7777\9123", "6666555577779123")]
    [InlineData("4321-5678-9012-3456", "4321567890123456")]
    [InlineData("0987654321", "0987654321")]
    public void RemoveSeparators_ValidInput_ReturnsExpectedResult(string input, string expected)
    {
        Assert.Equal(expected.AsSpan(), input.AsSpan().RemoveSeparators());
    }

    /// <summary>
    /// Tests the RemoveSeparators method to ensure it throws an ArgumentNullException when provided with an empty or null input.
    /// </summary>
    [Fact(DisplayName = "Remove separators from an empty ReadOnlySpan<char> to throw an exception")]
    public void RemoveSeparators_EmptyInput_ThrowsArgumentNullException()
    {
        Assert.Throws<ArgumentNullException>(() => "".AsSpan().RemoveSeparators());
        Assert.Throws<ArgumentNullException>(() => ((string)null)!.AsSpan().RemoveSeparators());
    }
}
#endif
