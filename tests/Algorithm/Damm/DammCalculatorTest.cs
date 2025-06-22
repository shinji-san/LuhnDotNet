using LuhnDotNet.Algorithm.Damm;

namespace LuhnDotNetTest.Algorithm.Damm;

using LuhnDotNet;
using System;
using Xunit;

public class DammCalculatorTest
{
    [Theory(DisplayName = "Computes Damm check digit for numbers")]
    [InlineData("572", '4')]
    [InlineData("1234567", '1')]
    [InlineData("37828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398712", '4')]
    [InlineData("11294", '6')]
    [InlineData("0", '0')]
    [InlineData("9", '2')]
    [InlineData("00000", '0')]
    [InlineData("99999", '9')]
    [InlineData("   572   ", '4')]
    [InlineData("   1234567   ", '1')]
    public void ComputeDammCheckDigit_ReturnsExpectedCheckDigit(string number, char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit, number.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeDammCheckDigit());    
#endif
    }

    [Theory(DisplayName = "Computes Damm number for numbers")]
    [InlineData("572", "5724")]
    [InlineData("1234567", "12345671")]
    [InlineData("37828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398712", "378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987124")]
    [InlineData("11294", "112946")]
    [InlineData("   572   ", "5724")]
    [InlineData("   1234567   ", "12345671")]
    public void ComputeDammNumber_ReturnsExpectedDammNumber(string number, string expectedDammNumber)
    {
        Assert.Equal(expectedDammNumber, number.ComputeDammNumber());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedDammNumber, number.AsSpan().ComputeDammNumber());
#endif
    }

    [Theory(DisplayName = "Compute Damm check digit for invalid numbers throws InvalidCharacterException")]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    [InlineData("12 3")]
    [InlineData("12.3")]
    public void ComputeDammCheckDigit_WithInvalidNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammCheckDigit());
#endif
    }

    [Theory(DisplayName = "Compute Damm number for invalid numbers throws InvalidCharacterException")]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    [InlineData("12 3")]
    [InlineData("12.3")]
    public void ComputeDammNumber_WithInvalidNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(invalidNumber.ComputeDammNumber);
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammNumber());
#endif
    }

    [Theory(DisplayName = "Validates Damm check digit for numbers with custom quasigroup")]
    [InlineData("572", '4')]
    [InlineData("1234567", '1')]
    [InlineData("11294", '6')]
    [InlineData("0", '0')]
    [InlineData("9", '2')]
    [InlineData("00000", '0')]
    [InlineData("99999", '9')]
    public void ComputeDammCheckDigit_WithCustomQuasigroup_ReturnsExpectedCheckDigit(string number,
        char expectedCheckDigit)
    {
        uint[,] antisymmetricQuasigroup =
        {
            { 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 },
            { 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 },
            { 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 },
            { 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 },
            { 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 },
            { 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 },
            { 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 },
            { 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 },
            { 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 },
            { 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 }
        };

        Assert.Equal(expectedCheckDigit, number.ComputeDammCheckDigit(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeDammCheckDigit(antisymmetricQuasigroup));
#endif
    }

    [Theory(DisplayName = "Computes Damm number for numbers with custom quasigroup")]
    [InlineData("572", "5724")]
    [InlineData("1234567", "12345671")]
    [InlineData("11294", "112946")]
    public void ComputeDammNumber_WithCustomQuasigroup_ReturnsExpectedDammNumber(string number,
        string expectedDammNumber)
    {
        uint[,] antisymmetricQuasigroup =
        {
            { 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 },
            { 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 },
            { 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 },
            { 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 },
            { 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 },
            { 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 },
            { 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 },
            { 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 },
            { 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 },
            { 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 }
        };

        Assert.Equal(expectedDammNumber, number.ComputeDammNumber(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Equal(expectedDammNumber, number.AsSpan().ComputeDammNumber(antisymmetricQuasigroup));
#endif
    }

    [Fact(DisplayName = "Compute Damm check digit with  invalid quasigroup size throws ArgumentException")]
    public void ComputeDammCheckDigit_WithInvalidQuasigroupSize_ThrowsArgumentException()
    {
        uint[,] invalidQuasigroup = new uint[5, 5];

        Assert.Throws<ArgumentException>(() => "123".ComputeDammCheckDigit(invalidQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<ArgumentException>(() => "123".AsSpan().ComputeDammCheckDigit(invalidQuasigroup));
#endif
    }

    [Fact(DisplayName = "Compute Damm number with invalid quasigroup size throws ArgumentException")]
    public void ComputeDammNumber_WithInvalidQuasigroupSize_ThrowsArgumentException()
    {
        uint[,] invalidQuasigroup = new uint[10, 5];

        Assert.Throws<ArgumentException>(() => "123".ComputeDammNumber(invalidQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<ArgumentException>(() => "123".AsSpan().ComputeDammNumber(invalidQuasigroup));
#endif
    }

    [Theory(DisplayName = "Compute Damm check digit with custom quasigroup for invalid numbers throws InvalidCharacterException")]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    public void ComputeDammCheckDigit_WithCustomQuasigroup_InvalidNumber_ThrowsInvalidCharacterException(
        string invalidNumber)
    {
        uint[,] antisymmetricQuasigroup = new uint[10, 10];

        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammCheckDigit(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammCheckDigit(antisymmetricQuasigroup));
#endif
    }

    [Theory(DisplayName = "Compute Damm number with custom quasigroup for invalid numbers throws InvalidCharacterException")]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    public void ComputeDammNumber_WithCustomQuasigroup_InvalidNumber_ThrowsInvalidCharacterException(
        string invalidNumber)
    {
        uint[,] antisymmetricQuasigroup = new uint[10, 10];

        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammNumber(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammNumber(antisymmetricQuasigroup));
#endif
    }
}