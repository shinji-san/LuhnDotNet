using LuhnDotNet.Algorithm.Damm;
using LuhnDotNet;
using System;

namespace LuhnDotNetTest.Algorithm.Damm;

using Xunit;

public class DammValidatorTest
{
    [Theory]
    [InlineData("5724", true)]
    [InlineData("  5724  ", true)]
    [InlineData("5725", false)]
    [InlineData("572", false)]
    [InlineData("123456", false)]
    [InlineData("00000", true)]
    [InlineData("999999", true)]
    [InlineData("0", true)]
    [InlineData("1", false)]
    public void IsValidDammNumber_ReturnsExpectedResult(string dammNumber, bool expected)
    {
        Assert.Equal(expected, dammNumber.IsValidDammNumber());
#if NET8_0_OR_GREATER
        Assert.Equal(expected, dammNumber.AsSpan().IsValidDammNumber());
#endif
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("abc")]
    [InlineData("12a3")]
    [InlineData("12 3")]
    [InlineData("12.3")]
     public void IsValidDammNumber_WithNonNumericCharacters_ThrowsInvalidCharacterException(string invalidNumber)
     {
         Assert.Throws<InvalidCharacterException>(() =>  invalidNumber.IsValidDammNumber());
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().IsValidDammNumber());
#endif
     }

     [Theory]
     [InlineData("572", '4', true)]
     [InlineData("  572  ", '4', true)]
     [InlineData("572", '5', false)]
     [InlineData("57", '2', false)]
     [InlineData("12345", '6', false)]
     [InlineData("0000",'0', true)]
     [InlineData("99999",'9', true)]
     [InlineData("0",'0', true)]
     [InlineData("1",'0', false)]
     public void IsValidDammCheckDigit_ReturnsExpectedResult(string number, char checkDigit, bool expected)
     {
         Assert.Equal(expected, checkDigit.IsValidDammCheckDigit(number));
#if NET8_0_OR_GREATER
         Assert.Equal(expected, checkDigit.IsValidDammCheckDigit(number.AsSpan()));
#endif
     }

     [Theory]
     [InlineData("572", 'a')]
     [InlineData("0000", 'X')]
     public void IsValidDammCheckDigit_WithNonDigitCheckDigit_ThrowsArgumentOutOfRangeException(string number, char invalidCheckDigit)
     {
         Assert.Throws<ArgumentOutOfRangeException>(() => invalidCheckDigit.IsValidDammCheckDigit(number));
#if NET8_0_OR_GREATER
         Assert.Throws<ArgumentOutOfRangeException>(() => invalidCheckDigit.IsValidDammCheckDigit(number.AsSpan()));
#endif
     }

     [Theory]
     [InlineData("57a", '4')]
     [InlineData(null, '4')]
     public void IsValidDammCheckDigit_WithNonNumericNumber_ThrowsInvalidCharacterException(string invalidNumber, char checkDigit)
     {
         Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidDammCheckDigit(invalidNumber));
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidDammCheckDigit(invalidNumber.AsSpan()));
#endif
     }
}