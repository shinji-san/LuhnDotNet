using LuhnDotNet.Algorithm.Mod11;

namespace LuhnDotNetTest.Algorithm.Mod11;

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
    public void ValidateCheckDigit_ReturnsTrueForValidNumber(string number)
    {
        bool isValid = Mod11Validator.IsValidMod11Number(number);
        Assert.True(isValid);
    }
}