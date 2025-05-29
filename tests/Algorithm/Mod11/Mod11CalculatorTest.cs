namespace LuhnDotNetTest.Algorithm.Mod11;

using LuhnDotNet.Algorithm.Mod11;
using System;
using Xunit;

public class Mod11CalculatorTest
{

    [Theory]
    [InlineData("0631942", '9')] // PZN with leading zero
    [InlineData("0490880", '2')] // PZN with leading zero
    [InlineData("0678957", '2')] // PZN with leading zero
    [InlineData("0385558", '7')] // PZN with leading zero
    [InlineData("312517154", '7')] // ISBN-10
    [InlineData("368008783", '7')] // ISBN-10
    [InlineData("030640615", '2')] // ISBN-10
    [InlineData("809027341", '6')] // ISBN-10
    [InlineData("097522980", 'X')] // ISBN-10
    public void ComputeMod11CheckDigit_ReturnsExpectedDigit(string number, char expectedCheckDigit)
    {
        Assert.Equal(expectedCheckDigit,  number.ComputeMod11CheckDigit());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedCheckDigit,  number.AsSpan().ComputeMod11CheckDigit());
#endif
    }

    [Theory]
    [InlineData("0631942", "06319429")] // PZN with leading zero
    [InlineData("0490880", "04908802")] // PZN with leading zero
    [InlineData("0678957", "06789572")] // PZN with leading zero
    [InlineData("0385558", "03855587")] // PZN with leading zero
    [InlineData("312517154", "3125171547")] // ISBN-10
    [InlineData("368008783", "3680087837")] // ISBN-10
    [InlineData("030640615", "0306406152")] // ISBN-10
    [InlineData("809027341", "8090273416")] // ISBN-10
    [InlineData("097522980", "097522980X")] // ISBN-10
    public void ComputeMod11Number_ReturnsExpectedDigit(string number, string expectedMod11Number)
    {
        Assert.Equal(expectedMod11Number,  number.ComputeMod11Number());
#if NET8_0_OR_GREATER
        Assert.Equal(expectedMod11Number,  number.AsSpan().ComputeMod11Number());
#endif
    }
}