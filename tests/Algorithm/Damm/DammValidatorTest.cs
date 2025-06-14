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
     public void IsValidDammCheckDigit_WithNonDigitCheckDigit_ThrowsInvalidCharacterException(string number, char invalidCheckDigit)
     {
         Assert.Throws<InvalidCharacterException>(() => invalidCheckDigit.IsValidDammCheckDigit(number));
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => invalidCheckDigit.IsValidDammCheckDigit(number.AsSpan()));
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
     public void IsValidDammNumber_WithCustomQuasiGroup_ReturnsExpectedResult(string dammNumber, bool expected)
     {
         Assert.Equal(expected, dammNumber.IsValidDammNumber(CustomQuasiGroup));
#if NET8_0_OR_GREATER
         Assert.Equal(expected, dammNumber.AsSpan().IsValidDammNumber(CustomQuasiGroup));
#endif
     }

     [Theory]
     [InlineData(null)]
     [InlineData("")]
     [InlineData("abc")]
     [InlineData("12a3")]
     [InlineData("12 3")]
     [InlineData("12.3")]
     public void IsValidDammNumber_WithCustomQuasiGroup_WithNonNumericCharacters_ThrowsInvalidCharacterException(string invalidNumber)
     {
         Assert.Throws<InvalidCharacterException>(() => invalidNumber.IsValidDammNumber(CustomQuasiGroup));
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => invalidNumber.AsSpan().IsValidDammNumber(CustomQuasiGroup));
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
     public void IsValidDammCheckDigit_WithCustomQuasiGroup_ReturnsExpectedResult(string number, char checkDigit, bool expected)
     {
         Assert.Equal(expected, checkDigit.IsValidDammCheckDigit(number, CustomQuasiGroup));
#if NET8_0_OR_GREATER
         Assert.Equal(expected, checkDigit.IsValidDammCheckDigit(number.AsSpan(), CustomQuasiGroup));
#endif
     }

     [Theory]
     [InlineData("572", 'a')]
     [InlineData("0000", 'X')]
     public void IsValidDammCheckDigit_WithCustomQuasiGroup_WithNonDigitCheckDigit_ThrowsInvalidCharacterException(string number, char invalidCheckDigit)
     {
         Assert.Throws<InvalidCharacterException>(() => invalidCheckDigit.IsValidDammCheckDigit(number, CustomQuasiGroup));
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => invalidCheckDigit.IsValidDammCheckDigit(number.AsSpan(), CustomQuasiGroup));
#endif
     }

     [Theory]
     [InlineData("57a", '4')]
     [InlineData(null, '4')]
     public void IsValidDammCheckDigit_WithCustomQuasiGroup_WithNonNumericNumber_ThrowsInvalidCharacterException(string invalidNumber, char checkDigit)
     {
         Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidDammCheckDigit(invalidNumber, CustomQuasiGroup));
#if NET8_0_OR_GREATER
         Assert.Throws<InvalidCharacterException>(() => checkDigit.IsValidDammCheckDigit(invalidNumber.AsSpan(), CustomQuasiGroup));
#endif
     }

     private static AntisymmetricQuasiGroup CustomQuasiGroup
     {
         get
         {
             uint[,] dammTable =
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

             return dammTable;
         }
     }
}