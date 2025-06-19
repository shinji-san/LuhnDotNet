namespace LuhnDotNetBenchmark;

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

[ExcludeFromCodeCoverage]
[MemoryDiagnoser]
[GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
[CategoriesColumn]
public class Mod11AscendingWeightBenchmark : ISingleCheckDigitBenchmark
{
    public static IEnumerable<string> NumericNumbersAsString()
    {
        yield return "0631942";
        yield return "312517154312517154312517154312517154312517154312517154";
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
        number.ComputeMod11Number();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ComputeCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeCheckDigitBasedOnString(string number)
    {
        number.ComputeMod11CheckDigit();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.IsValidNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidNumberBasedOnString(string number)
    {
        number.IsValidMod11Number();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.IsValidCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidCheckDigitBasedOnString(string number)
    {
        '1'.IsValidMod11CheckDigit(number);
    }

    [Benchmark, BenchmarkCategory(Category.ComputeNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeNumberBasedOnSpan(string number)
    {
        number.AsSpan().ComputeMod11Number();
    }

    [Benchmark, BenchmarkCategory(Category.ComputeCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeCheckDigitBasedOnSpan(string number)
    {
        number.AsSpan().ComputeMod11CheckDigit();
    }

    [Benchmark, BenchmarkCategory(Category.IsValidNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidNumberBasedOnSpan(string number)
    {
        number.AsSpan().IsValidMod11Number();
    }

    [Benchmark, BenchmarkCategory(Category.IsValidCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidCheckDigitBasedOnSpan(string number)
    {
        '1'.IsValidMod11CheckDigit(number.AsSpan());
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().ComputeMod11Number();
    }

    [Benchmark, BenchmarkCategory(Category.ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().ComputeMod11Number();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().IsValidMod11Number();
    }

    [Benchmark, BenchmarkCategory(Category.ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().IsValidMod11Number();
    }
}
