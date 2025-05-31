namespace LuhnDotNetTest.Algorithm.Mod11AscendingWeights;

using LuhnDotNet.Algorithm.Mod11AscendingWeights;
using System;
using Xunit;

public class Mod11AscendingWeightsCalculatorTest
{

    [Theory]
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

    [Theory]
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
        Assert.Equal(expectedMod11Number,  (string)number.ComputeMod11Number());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedMod11Number,  (string)number.AsSpan().ComputeMod11Number());
#endif
    }

    [Theory]
    [InlineData("0678957", '2')]
    [InlineData("0385558", '7')]
    public void ComputePZNCheckDigit_ReturnsExpectedDigit(string number, char expectedCheckDigit)
    {
            Assert.Equal(expectedCheckDigit, number.ComputeMod11CheckDigit());
#if NET8_0_OR_GREATER
            Assert.Equal(expectedCheckDigit, number.AsSpan().ComputeMod11CheckDigit());
#endif
    }
}