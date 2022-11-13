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
        /// Test numbers without check digit.
        /// </summary>
        public static IEnumerable<object[]> RawNumbers =>
            new List<object[]>
            {
                new object[] { 3, "7992739871" },
                new object[] { 2, "110494" },
                new object[] { 5, "37828224631000" },
                new object[] { 5, "637095000000000" },
                new object[] { 3, "89999912345678901" },
            };

        /// <summary>
        /// Test numbers with check digit.
        /// </summary>
        public static IEnumerable<object[]> LuhnNumbers =>
            new List<object[]>
            {
                new object[] { true, "79927398713" },
                new object[] { true, "1104942" },
                new object[] { true, "378282246310005" },
                new object[] { true, "6370950000000005" },
                new object[] { true, "899999123456789013" },
                new object[] { false, "79927398717" },
                new object[] { false, "1104945" },
                new object[] { false, "378282246310001" },
                new object[] { false, "6370950000000007" },
                new object[] { false, "899999123456789019" },
            };

        /// <summary>
        /// Invalid numbers.
        /// </summary>
        public static IEnumerable<object[]> InvalidNumbers =>
            new List<object[]>
            {
                new object[] { null },
                new object[] { string.Empty },
                new object[] { "ABC" },
                new object[] { "?11243345" },
            };

        /// <summary>
        /// 
        /// </summary>
        /// <param name="expectedCheckDigit">Expected check digit</param>
        /// <param name="rawNumber">Test number exclusive check digit</param>
        [Theory(DisplayName = "Calculate the check digit for a valid number")]
        [MemberData(nameof(RawNumbers), MemberType = typeof(LuhnTest))]
        public void LuhnComputeTest(byte expectedCheckDigit, string rawNumber) =>
            Assert.Equal(expectedCheckDigit, Compute(rawNumber));

        /// <summary>
        /// 
        /// </summary>
        /// <param name="expectedResult">Expected validation result</param>
        /// <param name="luhnNumber">Test number inclusive check digit</param>
        [Theory(DisplayName = "Validate a number containing a check digit")]
        [MemberData(nameof(LuhnNumbers), MemberType = typeof(LuhnTest))]
        public void LuhnValidationTest(bool expectedResult, string luhnNumber) =>
            Assert.Equal(expectedResult, IsValid(luhnNumber));

        /// <summary>
        /// 
        /// </summary>
        [Theory(DisplayName = "Calculate the check digit for an invalid number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ComputeExceptionTest(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => Compute(invalidNumber));
        }

        /// <summary>
        /// 
        /// </summary>
        [Theory(DisplayName = "Validate an invalid number to throw an exception")]
        [MemberData(nameof(InvalidNumbers), MemberType = typeof(LuhnTest))]
        public void ValidationExceptionTest(string invalidNumber)
        {
            Assert.Throws<ArgumentException>(() => IsValid(invalidNumber));
        }
    }
}