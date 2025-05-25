namespace LuhnDotNetTest;

using LuhnDotNet;
using System;
using System.Collections.Generic;
using Xunit;

/// <summary>
/// A test class that validates the functionality of Luhn algorithm computation methods.
/// It includes tests for computing check digits and complete Luhn numbers for both
/// valid and invalid inputs, and ensures that exceptions are thrown appropriately
/// for invalid cases.
/// </summary>
public class LuhnCalculatorTest
{
    /// <summary>
    /// Valid raw test numbers without the check digit.
    /// </summary>
    public static IEnumerable<object[]> LuhnCheckDigitComputeSet =>
        new List<object[]>
        {
            new object[] { 4, "1789372997" },
            new object[] { 0, "353011133330000" },
            new object[] { 3, "7992739871" },
            new object[] { 3, "07992739871" },
            new object[] { 3, "007992739871" },
            new object[] { 2, "110494" },
            new object[] { 7, "1893" },
            new object[] { 5, "37828224631000" },
            new object[] { 5, "637095000000000" },
            new object[] { 5, " 637095000000000" },
            new object[] { 5, "637095000000000 " },
            new object[] { 5, " 637095000000000 " },
            new object[] { 3, "89999912345678901" },
            new object[] { 3, "  89999912345678901" },
        };

    /// <summary>
    /// Valid raw test numbers without a check digit.
    /// </summary>
    public static IEnumerable<object[]> LuhnNumberComputeSet =>
        new List<object[]>
        {
            new object[] { "17893729974", "1789372997" },
            new object[] { "3530111333300000", "353011133330000" },
            new object[] { "79927398713", "7992739871" },
            new object[] { "079927398713", "07992739871" },
            new object[] { "0079927398713", "007992739871" },
            new object[] { "1104942", "110494" },
            new object[] { "18937", "1893" },
            new object[] { "378282246310005", "37828224631000" },
            new object[] { "6370950000000005", "637095000000000" },
            new object[] { "6370950000000005", " 637095000000000" },
            new object[] { "6370950000000005", "637095000000000 " },
            new object[] { "6370950000000005", " 637095000000000 " },
            new object[] { "899999123456789013", "89999912345678901" },
            new object[] { "899999123456789013", "  89999912345678901" },
        };

    /// <summary>
    /// Invalid test numbers.
    /// </summary>
    public static IEnumerable<object[]> InvalidNumbers =>
        new List<object[]>
        {
            new object[] { null },
            new object[] { string.Empty },
            new object[] { "ABC" },
            new object[] { "?11243345" },
            new object[] { "_-%&" },
        };

    /// <summary>
    /// Provides test data for the ComputeLuhnCheckDigit method in combination with AlphaNumericToNumeric.
    /// </summary>
    /// <remarks>
    /// This method returns a collection of object arrays, where each array contains an input string and the
    /// expected output for the ComputeLuhnCheckDigit method. The input string is an alphanumeric string that
    /// represents a part of an ISIN without the check digit. The expected output is the check digit that makes the
    /// entire ISIN valid, according to the Luhn algorithm.
    /// </remarks>
    public static IEnumerable<object[]> ComputeLuhnCheckDigitWithConvertData =>
        new List<object[]>
        {
            new object[] { "DE000606900", 8 },
            new object[] { "DE000BAY001", 7 },
            new object[] { "AU0000XVGZA", 3 },
            new object[] { "US037833100", 5 },
        };

    /// <summary>
    /// Tests the Luhn check digit calculation.
    /// </summary>
    /// <param name="expectedCheckDigit">The expected check digit</param>
    /// <param name="rawNumber">Test number exclusive check digit</param>
    [Theory(DisplayName = "Calculates the check digit for a valid raw number")]
    [MemberData(nameof(LuhnCheckDigitComputeSet), MemberType = typeof(LuhnCalculatorTest))]
    public void ComputeLuhnCheckDigit_ValidRawNumber_ReturnsExpectedCheckDigit(
        byte expectedCheckDigit,
        string rawNumber)
    {
        Assert.Equal(expectedCheckDigit, rawNumber.ComputeLuhnCheckDigit());
        Assert.Equal(expectedCheckDigit, rawNumber.AsSpan().ComputeLuhnCheckDigit());
    }

    /// <summary>
    /// Tests the Luhn number calculation.
    /// </summary>
    /// <param name="expectedLuhnNumber">The expected check digit</param>
    /// <param name="rawNumber">Test number exclusive check digit</param>
    [Theory(DisplayName = "Calculates the Luhn number for a valid raw number")]
    [MemberData(nameof(LuhnNumberComputeSet), MemberType = typeof(LuhnCalculatorTest))]
    public void ComputeLuhnNumber_ValidRawNumber_ReturnsExpectedLuhnNumber(
        string expectedLuhnNumber,
        string rawNumber)
    {
        Assert.Equal(expectedLuhnNumber, rawNumber.ComputeLuhnNumber());
        Assert.Equal(expectedLuhnNumber, rawNumber.AsSpan().ComputeLuhnNumber());
    }

    /// <summary>
    /// Tests whether an exception is thrown when an invalid raw number is passed to the Luhn check
    /// digit algorithm. 
    /// </summary>
    /// <param name="invalidNumber">Invalid raw number</param>
    [Theory(DisplayName = "Calculates the check digit for an invalid raw number to throw an exception")]
    [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnCalculatorTest))]
    public void ComputeLuhnCheckDigit_InvalidRawNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeLuhnCheckDigit());
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeLuhnCheckDigit());
    }

    /// <summary>
    /// Tests whether an exception is thrown when an invalid raw number is passed to the Luhn
    /// number calculation algorithm. 
    /// </summary>
    /// <param name="invalidNumber">Invalid raw number</param>
    [Theory(DisplayName = "Calculates the Luhn number for an invalid raw number to throw an exception")]
    [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnCalculatorTest))]
    public void ComputeLuhnNumber_InvalidRawNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(invalidNumber.ComputeLuhnNumber);
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeLuhnNumber());
    }

    /// <summary>
    /// Tests the ComputeLuhnCheckDigit method in combination with AlphaNumericToNumeric.
    /// </summary>
    /// <param name="input">Input string</param>
    /// <param name="expected">Expected output</param>
    /// <remarks>
    /// This test checks if the ComputeLuhnCheckDigit method returns the expected check digit when it is given an
    /// alphanumeric string that represents a part of an ISIN without the check digit. The input string is first
    /// converted to a numeric string using the AlphaNumericToNumeric method, and then the
    /// ComputeLuhnCheckDigit method is called with this numeric string. The test uses the Assert. Equal method from
    /// xUnit to check if the actual check digit matches the expected check digit.
    /// </remarks>
    [Theory(DisplayName = "Calculates the check digit for a valid alphanumeric string")]
    [MemberData(nameof(ComputeLuhnCheckDigitWithConvertData), MemberType = typeof(LuhnCalculatorTest))]
    public void ComputeLuhnCheckDigit_WithAlphaNumericToNumeric_ReturnsExpectedCheckDigit(
        string input,
        byte expected)
    {
        Assert.Equal(expected, input.AlphaNumericToNumeric().ComputeLuhnCheckDigit());
        Assert.Equal(expected, input.AsSpan().AlphaNumericToNumeric().ComputeLuhnCheckDigit());
    }
}