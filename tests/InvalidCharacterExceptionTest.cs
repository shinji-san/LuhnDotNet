namespace LuhnDotNetTest;

using LuhnDotNet;
using System;
using Xunit;

public class InvalidCharacterExceptionTest
{
    [Fact]
    public void Constructor_ShouldSetMessage()
    {
        // Arrange
        var exceptionMassage = "Invalid character encountered.";

        // Act
        var exception = new InvalidCharacterException(exceptionMassage);

        // Assert
        Assert.Equal(exceptionMassage, exception.Message);
    }

    [Fact]
    public void Constructor_WithParamName_ShouldSetMessageAndParamName()
    {
        // Arrange
        var paramName = "paramName";
        var exceptionMassage = "Invalid character encountered.";
        var expectedMessage = $"{exceptionMassage} (Parameter '{paramName}')";

        // Act
        var exception = new InvalidCharacterException(exceptionMassage, paramName);

        // Assert
        Assert.Equal(expectedMessage, exception.Message);
        Assert.Equal(paramName, exception.ParamName);
    }

    [Fact]
    public void Constructor_WithInnerException_ShouldSetMessageAndInnerException()
    {
        // Arrange
        var paramName = "paramName";
        var exceptionMassage = "Invalid character encountered.";
        var expectedMessage = $"{exceptionMassage} (Parameter '{paramName}')";
        var innerException = new Exception("Inner exception message.");

        // Act
        var exception = new InvalidCharacterException(exceptionMassage, paramName, innerException);

        // Assert
        Assert.Equal(expectedMessage, exception.Message);
        Assert.Equal(paramName, exception.ParamName);
        Assert.Equal(innerException, exception.InnerException);
    }
}