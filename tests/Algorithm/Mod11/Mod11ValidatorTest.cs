using LuhnDotNet.Algorithm.Mod11;

namespace LuhnDotNetTest.Algorithm.Mod11;

using System;
using Xunit;

public class Mod11ValidatorTest
{
    [Theory]
    [InlineData("06319429")]
    [InlineData("04908802")]
    [InlineData("06789572")]
    [InlineData("03855587")]
    [InlineData("3125171547")] // ISBN-10
    [InlineData("3680087837")] // ISBN-10
    [InlineData("0306406152")] // ISBN-10
    [InlineData("8090273416")] // ISBN-10
    [InlineData("097522980X")] // ISBN-10
    public void ValidateCheckDigit_ReturnsTrueForValidNumber(string number)
    {
        Assert.True( number.IsValidMod11Number());
#if NET8_0_OR_GREATER
        Assert.True( number.AsSpan().IsValidMod11Number());
#endif
    }

    [Theory]
    [InlineData("0631942", '9')]
    [InlineData("0490880", '2')]
    [InlineData("0678957", '2')]
    [InlineData("0385558", '7')]
    [InlineData("312517154", '7')] // ISBN-10
    [InlineData("368008783", '7')] // ISBN-10
    [InlineData("030640615", '2')] // ISBN-10
    [InlineData("809027341", '6')] // ISBN-10
    [InlineData("097522980", 'X')] // ISBN-10
    public void IsValidMod11CheckDigit_ReturnsTrueForValidCheckDigit(string number, char checkDigit)
    {
        Assert.True(checkDigit.IsValidMod11CheckDigit(number));
#if NET8_0_OR_GREATER
        Assert.True(checkDigit.IsValidMod11CheckDigit(number.AsSpan()));
#endif
    }
}