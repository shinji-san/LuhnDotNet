namespace LuhnDotNetTest
{
    using System;
    using System.Collections.Generic;
    using Xunit;
    using static LuhnDotNet.Luhn;

    /// <summary>
    /// Unit tests for the C# implementation of the Luhn algorithm.
    /// </summary>
    public class LuhnTest
    {
        /// <summary>
        /// Valid raw test numbers without check digit.
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
        /// <param name="expectedCheckDigit">Expected check digit</param>
        /// <param name="rawNumber">Test number exclusive check digit</param>
        [Theory(DisplayName = "Calculates the check digit for a valid raw number")]
        [MemberData(nameof(LuhnCheckDigitComputeSet), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnCheckDigitTest(byte expectedCheckDigit, string rawNumber)
        {
            Assert.Equal(expectedCheckDigit, ComputeLuhnCheckDigit(rawNumber));
        }

        /// <summary>
        /// Tests the Luhn number calculation.
        /// </summary>
        /// <param name="expectedLuhnNumber">Expected check digit</param>
        /// <param name="rawNumber">Test number exclusive check digit</param>
        [Theory(DisplayName = "Calculates the Luhn number for a valid raw number")]
        [MemberData(nameof(LuhnNumberComputeSet), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnNumberTest(string expectedLuhnNumber, string rawNumber) => 
            Assert.Equal(expectedLuhnNumber, ComputeLuhnNumber(rawNumber));

        /// <summary>
        /// Tests Luhn number validation.
        /// </summary>
        /// <param name="expectedResult">Expected validation result</param>
        /// <param name="luhnNumber">Test number inclusive check digit</param>
        [Theory(DisplayName = "Validates a number containing a check digit")]
        [MemberData(nameof(LuhnNumberValidationSet), MemberType = typeof(LuhnTest))]
        public void LuhnNumberValidationTest(bool expectedResult, string luhnNumber) =>
            Assert.Equal(expectedResult, IsValid(luhnNumber));

        /// <summary>
        /// Tests number validation with separate check digit.
        /// </summary>
        /// <param name="expectedResult">Expected validation result</param>
        /// <param name="number">Test number exclusive check digit</param>
        /// <param name="checkDigit">Test Luhn check digit</param>
        [Theory(DisplayName = "Validates a number with separate check digit between 0 and 9")]
        [MemberData(nameof(LuhnCheckDigitValidationSet), MemberType = typeof(LuhnTest))]
        public void LuhnCheckDigitValidationTest(bool expectedResult, string number, byte checkDigit) =>
            Assert.Equal(expectedResult, IsValid(number, checkDigit));

        /// <summary>
        /// Tests whether or not a exception is thrown when an invalid raw number is passed to the Luhn check
        /// digit algorithm. 
        /// </summary>
        [Theory(DisplayName = "Calculates the check digit for an invalid raw number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ComputeCheckDigitExceptionTest(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => ComputeLuhnCheckDigit(invalidNumber));
        }

        /// <summary>
        /// Tests whether or not a exception is thrown when an invalid raw number is passed to the Luhn
        /// number algorithm. 
        /// </summary>
        [Theory(DisplayName = "Calculates the Luhn number for an invalid raw number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ComputeLuhnNumberExceptionTest(string invalidNumber) => 
            Assert.Throws<ArgumentException>(() => ComputeLuhnNumber(invalidNumber));

        /// <summary>
        /// Tests whether or not a exception is thrown when an invalid Luhn number is passed to the Luhn
        /// validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates an invalid Luhn number (e.g. none-numeric characters) to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void LuhnNumberValidationExceptionTest(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => IsValid(invalidNumber));
        }

        /// <summary>
        /// Tests whether or not a exception is thrown when an invalid number and check digit between 0 and 9
        /// is passed to the Luhn validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates an invalid number with any check digit between 0 and 9 to throw an exception")]
        [MemberData(nameof(InvalidNumbersAndCheckDigits), MemberType = typeof(LuhnTest))]
        public void NumberValidationExceptionTest(string invalidNumber, byte checkDigit)
        {
            Assert.Throws<ArgumentException>(() => IsValid(invalidNumber, checkDigit));
        }

        /// <summary>
        /// Tests whether or not a exception is thrown when an invalid check digit (greater tah 9) is passed to the
        /// Luhn validation algorithm.
        /// </summary>
        [Theory(DisplayName = "Validates a number with separate check digit greater than 9 to throw an exception")]
        [MemberData(nameof(NumbersWithInvalidCheckDigits), MemberType = typeof(LuhnTest))]
        public void LuhnCheckDigitValidationExceptionTest(string invalidNumber, byte checkDigit)
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => IsValid(invalidNumber, checkDigit));
        }
    }
}