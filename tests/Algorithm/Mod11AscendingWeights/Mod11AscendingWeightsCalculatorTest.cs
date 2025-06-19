namespace LuhnDotNetTest.Algorithm.Mod11AscendingWeights;

using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;
using System;
using Xunit;

public class Mod11AscendingWeightsCalculatorTest
{

    [Theory(DisplayName = "Computes Mod11 check digit for numbers")]
    [InlineData("0631942", '9')]
    [InlineData("0490880", '2')]
    [InlineData("0678957", '2')]
    [InlineData("0385558", '7')]
    [InlineData("312517154", '7')]
    [InlineData("368008783", '7')]
    [InlineData("030640615", '2')]
    [InlineData("809027341", '6')]
    [InlineData("097522980", 'X')]
    public void ComputeMod11CheckDigit_ReturnsExpectedDigit(string number, char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit,  number.ComputeMod11CheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit,  number.AsSpan().ComputeMod11CheckDigit());
#endif
    }

    [Theory(DisplayName = "Computes Mod11 number with check digit for numbers")]
    [InlineData("0631942", "06319429")]
    [InlineData("0490880", "04908802")]
    [InlineData("0678957", "06789572")]
    [InlineData("0385558", "03855587")]
    [InlineData("312517154", "3125171547")]
    [InlineData("368008783", "3680087837")]
    [InlineData("030640615", "0306406152")]
    [InlineData("809027341", "8090273416")]
    [InlineData("097522980", "097522980X")]
    public void ComputeMod11Number_ReturnsExpectedDigit(string number, string expectedMod11Number)
    {
        Assert.Equal(expectedMod11Number, number.ComputeMod11Number());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedMod11Number, number.AsSpan().ComputeMod11Number());
#endif
    }

    [Theory(DisplayName = "Computes Mod11 check digit for Pharmazentralnummern")]
    [InlineData("0678957", '2')]
    [InlineData("0385558", '7')]
    public void ComputePZNCheckDigit_ReturnsExpectedDigit(string number, char expectedCheckDigit)
    {
            Assert.Equal(expectedCheckDigit, number.ComputeMod11CheckDigit());
#if NET8_0_OR_GREATER
            Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeMod11CheckDigit());
#endif
    }

    [Theory(DisplayName = "Compute Mod11 check digit for invalid numbers throws InvalidCharacterException")]
    [InlineData("")]
    [InlineData("   ")]
    [InlineData("12a34")]
    [InlineData("abc")]
    [InlineData("123-456")]
    [InlineData("12.34")]
    [InlineData("12 34")]
    public void ComputeMod11CheckDigit_WithInvalidNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.ComputeMod11CheckDigit());
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeMod11CheckDigit());
#endif
    }

    [Theory(DisplayName = "Compute Mod11 number for invalid numbers throws InvalidCharacterException")]
    [InlineData("")]
    [InlineData("   ")]
    [InlineData("12a34")]
    [InlineData("abc")]
    [InlineData("123-456")]
    [InlineData("12.34")]
    [InlineData("12 34")]
    public void ComputeMod11Number_WithInvalidNumber_ThrowsInvalidCharacterException(string invalidNumber)
    {
        Assert.Throws<InvalidCharacterException>(invalidNumber.ComputeMod11Number);
#if NET8_0_OR_GREATER
        Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().ComputeMod11Number());
#endif
    }

    [Fact(DisplayName = "Compute Mod11 check digit with null input throws InvalidCharacterException")]
    public void ComputeMod11CheckDigit_WithNullInput_ThrowsInvalidCharacterException()
    {
        Assert.Throws<InvalidCharacterException>(() => (null as string).ComputeMod11CheckDigit());
    }

    [Fact(DisplayName = "Compute Mod11 number with null input throws InvalidCharacterException")]
    public void ComputeMod11Number_WithNullInput_ThrowsInvalidCharacterExceptionException()
    {
        Assert.Throws<InvalidCharacterException>(() => (null as string).ComputeMod11Number());
    }
}