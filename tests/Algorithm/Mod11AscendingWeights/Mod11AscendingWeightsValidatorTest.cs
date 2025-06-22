namespace LuhnDotNetTest.Algorithm.Mod11AscendingWeights;

using LuhnDotNet.Algorithm.Mod11AscendingWeights;
using LuhnDotNet.Extensions;
using System;
using Xunit;

public class Mod11AscendingWeightsValidatorTest
{
    [Theory(DisplayName = "Validates Mod11 numbers")]
    [InlineData("06319429")]
    [InlineData("04908802")]
    [InlineData("06789572")]
    [InlineData("03855587")]
    [InlineData("3125171547")]
    [InlineData("3680087837")]
    [InlineData("0306406152")]
    [InlineData("8090273416")]
    [InlineData("097522980X")]
    [InlineData("0714105449")]
    [InlineData("0441005608")]
    [InlineData("1568656521")]
    [InlineData("378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987122")]
    public void IsValidMod11Number_ReturnsTrueForValidNumber(string number)
    {
        Assert.True( number.IsValidMod11Number());
#if NET8_0_OR_GREATER
        Assert.True( number.AsSpan().IsValidMod11Number());
#endif
    }

    [Theory(DisplayName = "Validates numbers with separate Mod11 check digits")]
    [InlineData("0631942", '9')]
    [InlineData("0490880", '2')]
    [InlineData("0678957", '2')]
    [InlineData("0385558", '7')]
    [InlineData("312517154", '7')]
    [InlineData("368008783", '7')]
    [InlineData("030640615", '2')]
    [InlineData("809027341", '6')]
    [InlineData("097522980", 'X')]
    [InlineData("071410544",'9')]
    [InlineData("044100560",'8')]
    [InlineData("156865652",'1')]
    [InlineData("37828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398713782822463100063709500000000035301113333007992739871000799273987137828224631000637095000000000353011133330079927398710007992739871378282246310006370950000000003530111333300799273987100079927398712",'2')]
    public void IsValidMod11CheckDigit_ReturnsTrueForValidCheckDigit(string number, char checkDigit)
    {
        Assert.True(checkDigit.IsValidMod11CheckDigit(number));
#if NET8_0_OR_GREATER
        Assert.True(checkDigit.IsValidMod11CheckDigit(number.AsSpan()));
#endif
    }
    
    [Theory(DisplayName = "Validates ISBN-10 numbers")]
    [InlineData("99921-58-10-7", true)]
    [InlineData("9971-5-0210-0", true)]
    [InlineData("960-425-059-0", true)]
    [InlineData("80-902734-1-6", true)]
    [InlineData("85-359-0277-5", true)]
    [InlineData("1-84356-028-3", true)]
    [InlineData("0-684-84328-5", true)]
    [InlineData("0-8044-2957-X", true)]
    [InlineData("0-85131-041-9", true)]
    [InlineData("93-86954-21-4", true)]
    [InlineData("0-943396-04-2", true)]
    [InlineData("0-9752298-0-X", true)]
    [InlineData("99991-58-10-7", false)]
    [InlineData("9971-5-0210-1", false)]
    [InlineData("970-425-059-0", false)]
    [InlineData("70-902734-1-6", false)]
    [InlineData("85-359-7702-5", false)]
    [InlineData("1-48356-028-3", false)]
    [InlineData("0-684-84328-4", false)]
    [InlineData("0-8044-3957-X", false)]
    [InlineData("0-85311-041-9", false)]
    [InlineData("94-86953-21-4", false)]
    [InlineData("0-943396-40-2", false)]
    [InlineData("0-9752298-0-0", false)]
    [InlineData("0317-8471", false)]
    [InlineData("1050-124X", false)]
    [InlineData("978-92-95055-12-4", true)]
    public void IsValidISBN_ReturnsExpectedResult(string number, bool isValid)
    {
        Assert.Equal(isValid, number.RemoveSeparators().IsValidMod11Number());
#if NET8_0_OR_GREATER
        Assert.Equal(isValid, number.AsSpan().RemoveSeparators().IsValidMod11Number());
#endif
    }

    [Theory(DisplayName = "Validates PZN numbers")]
    [InlineData("06789572", true)]
    [InlineData("08497862", true)]
    [InlineData("10835964", true)]
    [InlineData("0" + "3855587", true)]
    [InlineData("0" + "3911794", true)]
    [InlineData("0" + "0497874", true)]
    [InlineData("0" + "3500909", true)]
    [InlineData("0" + "4208217", true)]
    public void IsValidPZN_ReturnsExpectedResult(string number, bool isValid)
    {
            Assert.Equal(isValid, number.RemoveSeparators().IsValidMod11Number());
#if NET8_0_OR_GREATER
            Assert.Equal(isValid, number.AsSpan().RemoveSeparators().IsValidMod11Number());
#endif
    }
}