namespace LuhnDotNetBenchmark;

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using LuhnDotNet.Algorithm.Luhn;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

[ExcludeFromCodeCoverage]
[MemoryDiagnoser]
[GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
[CategoriesColumn]
public class LuhnBenchmark : ISingleCheckDigitBenchmark
{
    public static IEnumerable<string> NumericNumbersAsString()
    {
        yield return "79927398713";
        yield return "79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432";
    }

    public static IEnumerable<string> AlphaNumericNumbersAsString()
    {
        yield return "US79927398713";
        yield return "79927398713DE";
        yield return "ABCDEF";
        yield return "DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432";
    }

    public static IEnumerable<string> SeparatedNumbersAsString()
    {
        yield return "7992-7398-7134";
        yield return "79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432";
    }
    
    public static IEnumerable<string> SeparatedAlphaNumericNumbersAsString()
    {
        yield return "US-7992-7398-7134";
        yield return "A7992-B7398-C7134";
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ComputeNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeNumberBasedOnString(string number)
    {
        number.ComputeLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ComputeCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeCheckDigitBasedOnString(string number)
    {
        number.ComputeLuhnCheckDigit();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.IsValidNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidNumberBasedOnString(string number)
    {
        number.IsValidLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.IsValidCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidCheckDigitBasedOnString(string number)
    {
        '1'.IsValidLuhnCheckDigit(number);
    }

    [Benchmark, BenchmarkCategory(Category.ComputeNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeNumberBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(Category.ComputeCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeCheckDigitBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnCheckDigit();
    }

    [Benchmark, BenchmarkCategory(Category.IsValidNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidNumberBasedOnSpan(string number)
    {
        number.AsSpan().IsValidLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(Category.IsValidCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidCheckDigitBasedOnSpan(string number)
    {
        '1'.IsValidLuhnCheckDigit(number.AsSpan());
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().ComputeLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(Category.ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().ComputeLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().IsValidLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(Category.ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().IsValidLuhnNumber();
    }
}
