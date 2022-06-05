


namespace LuhnDotNetTest
{
    using System;
    using System.Collections.Generic;
    using Xunit;
    using static LuhnDotNet.Luhn;
    
    /// <summary>
    /// 
    /// </summary>
    public class LuhnTest
    {
        /// <summary>
        /// 
        /// </summary>
        public static IEnumerable<object[]> RawNumber =>
            new List<object[]>
            {
                new object[] { 3, "7992739871" },
                new object[] { 2, "110494" },
                new object[] { 5, "37828224631000" },
                new object[] { 5, "637095000000000" },
                new object[] { 3, "89999912345678901" },
            };

        /// <summary>
        /// 
        /// </summary>
        public static IEnumerable<object[]> LuhnNumber =>
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
        /// 
        /// </summary>
        /// <param name="expectedCheckDigit"></param>
        /// <param name="rawNumber"></param>
        [Theory]
        [MemberData(nameof(RawNumber), MemberType = typeof(LuhnTest))]
        public void LuhnComputeTest(uint expectedCheckDigit, string rawNumber) =>
            Assert.Equal(expectedCheckDigit, Compute(rawNumber));

        /// <summary>
        /// 
        /// </summary>
        /// <param name="expectedResult"></param>
        /// <param name="luhnNumber"></param>
        [Theory]
        [MemberData(nameof(LuhnNumber), MemberType = typeof(LuhnTest))]
        public void LuhnValidationTest(bool expectedResult, string luhnNumber) =>
            Assert.Equal(expectedResult, IsValid(luhnNumber));

        /// <summary>
        /// 
        /// </summary>
        [Fact]
        public void ComputeExceptionTest()
        {
            Assert.Throws<ArgumentException>(() => Compute(null));
            Assert.Throws<ArgumentException>(() => Compute(string.Empty));
        }

        /// <summary>
        /// 
        /// </summary>
        [Fact]
        public void ValidationExceptionTest()
        {
            Assert.Throws<ArgumentException>(() => IsValid(null));
            Assert.Throws<ArgumentException>(() => IsValid(string.Empty));
        }
    }
}