namespace LuhnDotNetBenchmark;

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using LuhnDotNet;
using System;
using System.Collections.Generic;

[MemoryDiagnoser]
[GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
[CategoriesColumn]
public class LuhnDotNetBenchmark
{
    private const string ComputeLuhnNumberCategory = "Compute Luhn number";
    private const string ComputeLuhnCheckDigitCategory = "Compute Luhn check digit";
    private const string IsValidLuhnNumberCategory = "Validate Luhn number";
    private const string IsValidLuhnCheckDigitCategory = "Validate Luhn check digit";

    public static IEnumerable<string> NumbersAsString()
    {
        yield return "79927398713";
        yield return "79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432";
    }

    [Benchmark(Baseline = true), BenchmarkCategory(ComputeLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void ComputeLuhnNumberBasedOnString(string number)
    {
        number.ComputeLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(ComputeLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void ComputeLuhnCheckDigitBasedOnString(string number)
    {
        number.ComputeLuhnCheckDigit();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(IsValidLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void IsValidLuhnNumberBasedOnString(string number)
    {
        number.IsValidLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(IsValidLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void IsValidLuhnCheckDigitBasedOnString(string number)
    {
        byte.MinValue.IsValidLuhnCheckDigit(number);
    }

    [Benchmark, BenchmarkCategory(ComputeLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void ComputeLuhnNumberBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(ComputeLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void ComputeLuhnCheckDigitBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnCheckDigit();
    }

    [Benchmark, BenchmarkCategory(IsValidLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void IsValidLuhnNumberBasedOnSpan(string number)
    {
        number.AsSpan().IsValidLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(IsValidLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumbersAsString))]
    public void IsValidLuhnCheckDigitBasedOnSpan(string number)
    {
        byte.MinValue.IsValidLuhnCheckDigit(number.AsSpan());
    }
}