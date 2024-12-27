namespace LuhnDotNetTest
{
    using LuhnDotNet;
    using System;
    using System.Collections.Generic;
    using Xunit;

    /// <summary>
    /// Unit tests for the C# implementation of the Luhn algorithm.
    /// </summary>
    public class LuhnTest
    {
        /// <summary>
        /// Valid raw test numbers without the check digit.
        /// </summary>
        public static IEnumerable<object[]> LuhnCheckDigitComputeSet =>
            new List<object[]>
            {
                new object[] { 4, "1789372997" },
                new object[] { 0, "353011133330000" },
                new object[] { 3, "7992739871" },
                new object[] { 3, "07992739871" },
                new object[] { 3, "007992739871" },
                new object[] { 2, "110494" },
                new object[] { 7, "1893" },
                new object[] { 5, "37828224631000" },
                new object[] { 5, "637095000000000" },
                new object[] { 5, " 637095000000000" },
                new object[] { 5, "637095000000000 " },
                new object[] { 5, " 637095000000000 " },
                new object[] { 3, "89999912345678901" },
                new object[] { 3, "  89999912345678901" },
            };

        /// <summary>
        /// Valid raw test numbers without check digit.
        /// </summary>
        public static IEnumerable<object[]> LuhnNumberComputeSet =>
            new List<object[]>
            {
                new object[] { "17893729974", "1789372997" },
                new object[] { "3530111333300000", "353011133330000" },
                new object[] { "79927398713", "7992739871" },
                new object[] { "079927398713", "07992739871" },
                new object[] { "0079927398713", "007992739871" },
                new object[] { "1104942", "110494" },
                new object[] { "18937", "1893" },
                new object[] { "378282246310005", "37828224631000" },
                new object[] { "6370950000000005", "637095000000000" },
                new object[] { "6370950000000005", " 637095000000000" },
                new object[] { "6370950000000005", "637095000000000 " },
                new object[] { "6370950000000005", " 637095000000000 " },
                new object[] { "899999123456789013", "89999912345678901" },
                new object[] { "899999123456789013", "  89999912345678901" },
            };

        /// <summary>
        /// Test numbers with w/ and w/o valid check digit (Luhn numbers).
        /// </summary>
        public static IEnumerable<object[]> LuhnNumberValidationSet =>
            new List<object[]>
            {
                new object[] { true, "17893729974" },
                new object[] { true, "3530111333300000" },
                new object[] { true, "79927398713" },
                new object[] { true, "0079927398713" },
                new object[] { true, "079927398713" },
                new object[] { true, "1104942" },
                new object[] { true, "18937" },
                new object[] { true, "01104942" },
                new object[] { true, "378282246310005" },
                new object[] { true, "6370950000000005" },
                new object[] { true, " 6370950000000005" },
                new object[] { true, "6370950000000005 " },
                new object[] { true, " 6370950000000005 " },
                new object[] { true, "899999123456789013" },
                new object[] { true, "   899999123456789013" },
                new object[] { false, "79927398717" },
                new object[] { false, "1104945" },
                new object[] { false, "378282246310001" },
                new object[] { false, "6370950000000007" },
                new object[] { false, "899999123456789019" },
            };

        /// <summary>
        /// Test numbers with separate valid and invalid check digits.
        /// </summary>
        public static IEnumerable<object[]> LuhnCheckDigitValidationSet =>
            new List<object[]>
            {
                new object[] { true, "1789372997", 4 },
                new object[] { true, "353011133330000", 0 },
                new object[] { true, "7992739871", 3 },
                new object[] { true, "07992739871", 3 },
                new object[] { true, "007992739871", 3 },
                new object[] { true, "0007992739871", 3 },
                new object[] { true, "110494", 2 },
                new object[] { true, "1893", 7 },
                new object[] { true, "37828224631000", 5 },
                new object[] { true, "637095000000000", 5 },
                new object[] { true, " 637095000000000", 5 },
                new object[] { true, "637095000000000 ", 5 },
                new object[] { true, " 637095000000000 ", 5 },
                new object[] { true, "89999912345678901", 3 },
                new object[] { true, "   89999912345678901", 3 },
                new object[] { false, "7992739871", 7 },
                new object[] { false, "110494", 5 },
                new object[] { false, "37828224631000", 1 },
                new object[] { false, "637095000000000", 7 },
                new object[] { false, "89999912345678901", 9 },
            };

        
        /// <summary>
        /// Invalid test numbers.
        /// </summary>
        public static IEnumerable<object[]> InvalidNumbers =>
            new List<object[]>
            {
                new object[] { null },
                new object[] { string.Empty },
                new object[] { "ABC" },
                new object[] { "?11243345" },
                new object[] { "_-%&" },
            };
        
        /// <summary>
        /// Invalid numbers and check digits.
        /// </summary>
        public static IEnumerable<object[]> InvalidNumbersAndCheckDigits =>
            new List<object[]>
            {
                new object[] { "%&/" , 1},
                new object[] { "_-:,", 2 },
                new object[] { "ABC", 3},
                new object[] { "?11243345", 4 },
            };
        
        /// <summary>
        /// Test numbers and invalid separate check digits.
        /// </summary>
        public static IEnumerable<object[]> NumbersWithInvalidCheckDigits =>
            new List<object[]>
            {
                new object[] { "637095000000000" , 10},
                new object[] { "110494", 11 },
                new object[] { "7992739871", 12},
                new object[] { "?89999912345678901", 13 },
            };

        /// <summary>
        /// Tests the Luhn check digit calculation.
        /// </summary>
        /// <param name="expectedCheckDigit">The expected check digit</param>
        /// <param name="rawNumber">Test number exclusive check digit</param>
        [Theory(DisplayName = "Calculates the check digit for a valid raw number")]
        [MemberData(nameof(LuhnCheckDigitComputeSet), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnCheckDigit_ValidRawNumber_ReturnsExpectedCheckDigit(
            byte expectedCheckDigit,
            string rawNumber)
        {
            Assert.Equal(expectedCheckDigit, rawNumber.ComputeLuhnCheckDigit());
            Assert.Equal(expectedCheckDigit, rawNumber.AsSpan().ComputeLuhnCheckDigit());
        }

        /// <summary>
        /// Tests the Luhn number calculation.
        /// </summary>
        /// <param name="expectedLuhnNumber">The expected check digit</param>
        /// <param name="rawNumber">Test number exclusive check digit</param>
        [Theory(DisplayName = "Calculates the Luhn number for a valid raw number")]
        [MemberData(nameof(LuhnNumberComputeSet), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnNumber_ValidRawNumber_ReturnsExpectedLuhnNumber(
            string expectedLuhnNumber,
            string rawNumber)
        {
            Assert.Equal(expectedLuhnNumber, rawNumber.ComputeLuhnNumber());
            Assert.Equal(expectedLuhnNumber, rawNumber.AsSpan().ComputeLuhnNumber());
        }

        /// <summary>
        /// Tests Luhn number validation.
        /// </summary>
        /// <param name="expectedResult">The expected validation result</param>
        /// <param name="luhnNumber">Test number inclusive check digit</param>
        [Theory(DisplayName = "Validates a number containing a check digit")]
        [MemberData(nameof(LuhnNumberValidationSet), MemberType = typeof(LuhnTest))]
        public void LuhnNumberValidationTest(bool expectedResult, string luhnNumber)
        {
            Assert.Equal(expectedResult, luhnNumber.IsValid());
            Assert.Equal(expectedResult, luhnNumber.IsValidLuhnNumber());
            Assert.Equal(expectedResult, luhnNumber.AsSpan().IsValid());
            Assert.Equal(expectedResult, luhnNumber.AsSpan().IsValidLuhnNumber());
        }

        /// <summary>
        /// Tests number validation with a separate check digit.
        /// </summary>
        /// <param name="expectedResult">Expected validation result</param>
        /// <param name="number">Test number exclusive check digit</param>
        /// <param name="checkDigit">Test Luhn check digit</param>
        [Theory(DisplayName = "Validates a number with separate check digit between 0 and 9")]
        [MemberData(nameof(LuhnCheckDigitValidationSet), MemberType = typeof(LuhnTest))]
        public void LuhnCheckDigitValidationTest(bool expectedResult, string number, byte checkDigit)
        {
            Assert.Equal(expectedResult, number.IsValid(checkDigit));
            Assert.Equal(expectedResult, checkDigit.IsValidLuhnCheckDigit(number));
            Assert.Equal(expectedResult, number.AsSpan().IsValid(checkDigit));
            Assert.Equal(expectedResult, checkDigit.IsValidLuhnCheckDigit(number.AsSpan()));
        }

        /// <summary>
        /// Tests whether an exception is thrown when an invalid raw number is passed to the Luhn check
        /// digit algorithm. 
        /// </summary>
        /// <param name="invalidNumber">Invalid raw number</param>
        [Theory(DisplayName = "Calculates the check digit for an invalid raw number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnCheckDigit_InvalidRawNumber_ThrowsArgumentException(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => invalidNumber.ComputeLuhnCheckDigit());
            Assert.Throws<ArgumentException>(() => invalidNumber.AsSpan().ComputeLuhnCheckDigit());
        }

        /// <summary>
        /// Tests whether an exception is thrown when an invalid raw number is passed to the Luhn
        /// number calculation algorithm. 
        /// </summary>
        /// <param name="invalidNumber">Invalid raw number</param>
        [Theory(DisplayName = "Calculates the Luhn number for an invalid raw number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnNumber_InvalidRawNumber_ThrowsArgumentException(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(invalidNumber.ComputeLuhnNumber);
            Assert.Throws<ArgumentException>(() => invalidNumber.AsSpan().ComputeLuhnNumber());
        }

        /// <summary>
        /// Tests whether an exception is thrown when an invalid Luhn number is passed to the Luhn
        /// number validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates an invalid Luhn number (e.g. none-numeric characters) to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void LuhnNumberValidationExceptionTest(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => invalidNumber.IsValid());
            Assert.Throws<ArgumentException>(() => invalidNumber.IsValidLuhnNumber());
            Assert.Throws<ArgumentException>(() => invalidNumber.AsSpan().IsValid());
            Assert.Throws<ArgumentException>(() => invalidNumber.AsSpan().IsValidLuhnNumber());
        }

        /// <summary>
        /// Tests whether an exception is thrown when an invalid number and a valid check digit between 0 and 9
        /// is passed to the Luhn validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates an invalid number with any check digit between 0 and 9 to throw an exception")]
        [MemberData(nameof(InvalidNumbersAndCheckDigits), MemberType = typeof(LuhnTest))]
        public void NumberValidationExceptionTest(string invalidNumber, byte checkDigit)
        {
            Assert.Throws<ArgumentException>(() => invalidNumber.IsValid(checkDigit));
            Assert.Throws<ArgumentException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber));
            Assert.Throws<ArgumentException>(() => invalidNumber.AsSpan().IsValid(checkDigit));
            Assert.Throws<ArgumentException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber.AsSpan()));
        }

        /// <summary>
        /// Tests whether an exception is thrown when an invalid check digit (greater than 9) is passed to the
        /// Luhn validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates a number with separate check digit greater than 9 to throw an exception")]
        [MemberData(nameof(NumbersWithInvalidCheckDigits), MemberType = typeof(LuhnTest))]
        public void LuhnCheckDigitValidationExceptionTest(string invalidNumber, byte checkDigit)
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => invalidNumber.IsValid(checkDigit));
            Assert.Throws<ArgumentOutOfRangeException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber));
            Assert.Throws<ArgumentOutOfRangeException>(() => invalidNumber.AsSpan().IsValid(checkDigit));
            Assert.Throws<ArgumentOutOfRangeException>(() => checkDigit.IsValidLuhnCheckDigit(invalidNumber.AsSpan()));
        }

        /// <summary>
        /// Test data for ConvertAlphaNumericToNumeric method.
        /// </summary>
        public static IEnumerable<object[]> ConvertAlphaNumericToNumericData =>
            new List<object[]>
            {
                new object[] { "A1B2C3", "101112123" },
                new object[] { "Z9Y8X7", "359348337" },
                new object[] { "123", "123" },
                new object[] { "DE0006069008", "13140006069008" },
                new object[] { "ABC", "101112" },
                new object[] { "", "" },
            };

        /// <summary>
        /// Tests the ConvertAlphaNumericToNumeric method.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <param name="expected">Expected output</param>
        [Theory(DisplayName = "Converts an alphanumeric string to a numeric string")]
        [MemberData(nameof(ConvertAlphaNumericToNumericData), MemberType = typeof(LuhnTest))]
        public void ConvertAlphaNumericToNumeric_ShouldReturnExpectedResult(string input, string expected)
        {
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric());
        }

        /// <summary>
        /// Tests the ConvertAlphaNumericToNumeric method with invalid input.
        /// </summary>
        /// <remarks>
        /// This test checks if the ConvertAlphaNumericToNumeric method throws an ArgumentException when it is given an
        /// invalid input string that contains non-alphanumeric characters. The test uses the Assert. Throws method from
        /// xUnit to check if the expected exception is thrown.
        /// </remarks>
        [Fact(DisplayName = "Converts an invalid alphanumeric string to a numeric string to throw an exception")]
        public void ConvertAlphaNumericToNumeric_InvalidInput_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(()=> "!@#$%^&*()".ConvertAlphaNumericToNumeric());
        }

        /// <summary>
        /// Test data for IsValid method in combination with ConvertAlphaNumericToNumeric.
        /// </summary>
        public static IEnumerable<object[]> IsValidWithConvertData =>
            new List<object[]>
            {
                new object[] { "DE0006069008", true },
                new object[] { "DE0006069007", false },
                new object[] { "DE000BAY0017", true },
                new object[] { "DE000BAY0018", false },
                new object[] { "AU0000XVGZA3", true },
                new object[] { "US0378331005", true },
            };

        /// <summary>
        /// Tests the IsValid method in combination with ConvertAlphaNumericToNumeric.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <param name="expected">Expected output</param>
        [Theory(DisplayName = "Validates a numeric string converted from an alphanumeric string")]
        [MemberData(nameof(IsValidWithConvertData), MemberType = typeof(LuhnTest))]
        public void IsValidWithConvertTest(string input, bool expected)
        {
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().IsValid());
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().IsValidLuhnNumber());
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().AsSpan().IsValid());
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().AsSpan().IsValidLuhnNumber());
        }

        /// <summary>
        /// Provides test data for the ComputeLuhnCheckDigit method in combination with ConvertAlphaNumericToNumeric.
        /// </summary>
        /// <remarks>
        /// This method returns a collection of object arrays, where each array contains an input string and the
        /// expected output for the ComputeLuhnCheckDigit method. The input string is an alphanumeric string that
        /// represents a part of an ISIN without the check digit. The expected output is the check digit that makes the
        /// entire ISIN valid, according to the Luhn algorithm.
        /// </remarks>
        public static IEnumerable<object[]> ComputeLuhnCheckDigitWithConvertData =>
            new List<object[]>
            {
                new object[] { "DE000606900", 8 },
                new object[] { "DE000BAY001", 7 },
                new object[] { "AU0000XVGZA", 3 },
                new object[] { "US037833100", 5 },
            };

        /// <summary>
        /// Tests the ComputeLuhnCheckDigit method in combination with ConvertAlphaNumericToNumeric.
        /// </summary>
        /// <param name="input">Input string</param>
        /// <param name="expected">Expected output</param>
        /// <remarks>
        /// This test checks if the ComputeLuhnCheckDigit method returns the expected check digit when it is given an
        /// alphanumeric string that represents a part of an ISIN without the check digit. The input string is first
        /// converted to a numeric string using the ConvertAlphaNumericToNumeric method, and then the
        /// ComputeLuhnCheckDigit method is called with this numeric string. The test uses the Assert. Equal method from
        /// xUnit to check if the actual check digit matches the expected check digit.
        /// </remarks>
        [Theory(DisplayName = "Calculates the check digit for a valid alphanumeric string")]
        [MemberData(nameof(ComputeLuhnCheckDigitWithConvertData), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnCheckDigit_WithConvertAlphaNumericToNumeric_ReturnsExpectedCheckDigit(
            string input,
            byte expected)
        {
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().ComputeLuhnCheckDigit());
            Assert.Equal(expected, input.ConvertAlphaNumericToNumeric().AsSpan().ComputeLuhnCheckDigit());
        }
    }
}
