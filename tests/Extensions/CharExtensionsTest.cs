using LuhnDotNet.Extensions;

namespace LuhnDotNetTest.Extensions
{
    using LuhnDotNet;
    using Xunit;

    public class CharExtensionsTest
    {
        [Theory(DisplayName = "Does not throw for valid digit characters")]
        [InlineData('0')]
        [InlineData('1')]
        [InlineData('2')]
        [InlineData('3')]
        [InlineData('4')]
        [InlineData('5')]
        [InlineData('6')]
        [InlineData('7')]
        [InlineData('8')]
        [InlineData('9')]
        public void ThrowIfNotDigit_ValidDigits_DoesNotThrow(char digit)
        {
            // Act
            var exception = Record.Exception(() => digit.ThrowIfNotDigit(nameof(digit)));

            // Assert
            Assert.False(exception is InvalidCharacterException);
        }

        [Theory(DisplayName = "Throws InvalidCharacterException for characters that are not digits")]
        [InlineData('a')]
        [InlineData('z')]
        [InlineData('A')]
        [InlineData('Z')]
        [InlineData('!')]
        [InlineData('@')]
        [InlineData('#')]
        [InlineData('$')]
        [InlineData('%')]
        [InlineData('^')]
        [InlineData('&')]
        [InlineData('*')]
        [InlineData('(')]
        [InlineData(')')]
        [InlineData('-')]
        [InlineData('_')]
        [InlineData('=')]
        [InlineData('+')]
        [InlineData(' ')]
        [InlineData('\t')]
        [InlineData('\n')]
        [InlineData('\r')]
        public void ThrowIfNotDigit_InvalidCharacters_ThrowsInvalidCharacterException(char invalidChar)
        {
            // Act & Assert
            var exception = Assert.Throws<InvalidCharacterException>(() =>
                invalidChar.ThrowIfNotDigit(nameof(invalidChar)));
            Assert.Contains($"The character '{invalidChar}' is not a valid digit", exception.Message);
            Assert.Contains("The character must be between '0' and '9'", exception.Message);
            Assert.Equal(nameof(invalidChar), exception.ParamName);
        }

        [Fact(DisplayName = "Throws InvalidCharacterException for characters that are not digits with custom parameter name")]
        public void ThrowIfNotDigit_WithCustomParameterName_IncludesParameterNameInException()
        {
            // Arrange
            const char invalidChar = 'x';
            const string customParamName = "testParameter";

            // Act & Assert
            var exception = Assert.Throws<InvalidCharacterException>(() => invalidChar.ThrowIfNotDigit(customParamName));
            
            Assert.Contains($"The character '{invalidChar}' is not a valid digit", exception.Message);
            Assert.Contains("The character must be between '0' and '9'", exception.Message);
            Assert.Equal(customParamName, exception.ParamName);
        }

        [Fact(DisplayName = "Throws InvalidCharacterException for characters that are not digits with null custom parameter name")]
        public void ThrowIfNotDigit_WithNullParameterName_HandlesGracefully()
        {
            // Arrange
            char invalidChar = 'x';

            // Act & Assert
            var exception = Assert.Throws<InvalidCharacterException>(() => invalidChar.ThrowIfNotDigit(null));
            
            Assert.Contains($"The character '{invalidChar}' is not a valid digit", exception.Message);
            Assert.Null(exception.ParamName);
        }

        [Fact(DisplayName = "Throws InvalidCharacterException for characters that are not digits with empty custom parameter name")]
        public void ThrowIfNotDigit_WithEmptyParameterName_HandlesGracefully()
        {
            // Arrange
            char invalidChar = 'y';
            string emptyParamName = string.Empty;

            // Act & Assert
            var exception = Assert.Throws<InvalidCharacterException>(() => invalidChar.ThrowIfNotDigit(emptyParamName));
            
            Assert.Contains($"The character '{invalidChar}' is not a valid digit", exception.Message);
            Assert.Equal(emptyParamName, exception.ParamName);
        }

        [Theory(DisplayName = "Throws InvalidCharacterException for boundary characters around digit range")]
        [InlineData('0'-1)] // Character just before '0'
        [InlineData('9'+1)] // Character just after '9'
        public void ThrowIfNotDigit_BoundaryCharacters_ThrowsException(char characterBeforeOrAfterDigitRange)
        {
            // Act & Assert
            var exception = Assert.Throws<InvalidCharacterException>(() =>
                characterBeforeOrAfterDigitRange.ThrowIfNotDigit(nameof(characterBeforeOrAfterDigitRange)));
            Assert.Contains($"The character '{characterBeforeOrAfterDigitRange}' is not a valid digit", exception.Message);
        }
    }
}