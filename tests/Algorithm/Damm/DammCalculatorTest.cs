using LuhnDotNet.Algorithm.Damm;

namespace LuhnDotNetTest.Algorithm.Damm;

using LuhnDotNet;
using System;
using Xunit;

public class DammCalculatorTest
{

    [Theory]
    [InlineData("572", '4')]
    [InlineData("1234567", '1')]
    [InlineData("11294", '6')]
    public void ComputeDammCheckDigit_ReturnsExpectedCheckDigit(string number, char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit, number.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeDammCheckDigit());    
#endif
    }

    [Theory]
    [InlineData("572", "5724")]
    [InlineData("1234567", "12345671")]
    [InlineData("11294", "112946")]
    public void ComputeDammNumber_ReturnsExpectedDammNumber(string number, string expectedDammNumber)
    {
        Assert.Equal(expectedDammNumber, number.ComputeDammNumber());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedDammNumber, number.AsSpan().ComputeDammNumber());
#endif
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    [InlineData("12 3")]
    [InlineData("12.3")]
    public void ComputeDammCheckDigit_InvalidInput_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammCheckDigit());
#endif
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    [InlineData("12 3")]
    [InlineData("12.3")]
    public void ComputeDammNumber_InvalidInput_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(invalidNumber.ComputeDammNumber);
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeDammNumber());
#endif
    }

    [Theory]
    [InlineData("572", '4')]
    [InlineData("1234567", '1')]
    [InlineData("11294", '6')]
    public void ComputeDammCheckDigit_WithCustomQuasigroup_ReturnsExpectedCheckDigit(string number,
        char expectedCheckDigit)
    {
        // Standard antisymmetric quasigroup table
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

    [Theory]
    [InlineData("572", "5724")]
    [InlineData("1234567", "12345671")]
    [InlineData("11294", "112946")]
    public void ComputeDammNumber_WithCustomQuasigroup_ReturnsExpectedDammNumber(string number,
        string expectedDammNumber)
    {
        // Standard antisymmetric quasigroup table
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

    [Fact]
    public void ComputeDammCheckDigit_InvalidQuasigroupSize_ThrowsArgumentException()
    {
        // 5x5 matrix instead of 10x10
        uint[,] invalidQuasigroup = new uint[5, 5];

        Assert.Throws<ArgumentException>(() => "123".ComputeDammCheckDigit(invalidQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<ArgumentException>(() => "123".AsSpan().ComputeDammCheckDigit(invalidQuasigroup));
#endif
    }

    [Fact]
    public void ComputeDammNumber_InvalidQuasigroupSize_ThrowsArgumentException()
    {
        // 10x5 matrix instead of 10x10
        uint[,] invalidQuasigroup = new uint[10, 5];

        Assert.Throws<ArgumentException>(() => "123".ComputeDammNumber(invalidQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<ArgumentException>(() => "123".AsSpan().ComputeDammNumber(invalidQuasigroup));
#endif
    }

    [Theory]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    public void ComputeDammCheckDigit_WithCustomQuasigroup_InvalidInput_ThrowsInvalidCharacterException(
        string invalidNumber)
    {
        uint[,] antisymmetricQuasigroup = new uint[10, 10];

        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammCheckDigit(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() =>
            invalidNumber.AsSpan().ComputeDammCheckDigit(antisymmetricQuasigroup));
#endif
    }

    [Theory]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    public void ComputeDammNumber_WithCustomQuasigroup_InvalidInput_ThrowsInvalidCharacterException(
        string invalidNumber)
    {
        uint[,] antisymmetricQuasigroup = new uint[10, 10];

        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeDammNumber(antisymmetricQuasigroup));
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() =>
            invalidNumber.AsSpan().ComputeDammNumber(antisymmetricQuasigroup));
#endif
    }

    [Theory]
    [InlineData("0", '0')]
    [InlineData("9", '2')]
    [InlineData("00000", '0')]
    [InlineData("99999", '9')]
    public void ComputeDammCheckDigit_EdgeCases_ReturnsExpectedCheckDigit(string number, char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit, number.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeDammCheckDigit());
#endif
    }

    [Theory]
    [InlineData("   572   ", '4')]
    [InlineData("   1234567   ", '1')]
    public void ComputeDammCheckDigit_WithWhitespace_TrimsAndReturnsExpectedCheckDigit(string number,
        char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit, number.ComputeDammCheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeDammCheckDigit());
#endif
    }
}