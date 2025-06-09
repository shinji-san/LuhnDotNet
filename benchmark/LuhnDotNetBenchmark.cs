namespace LuhnDotNetBenchmark;

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;
using LuhnDotNet.Extensions;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

[ExcludeFromCodeCoverage]
[MemoryDiagnoser]
[GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
[CategoriesColumn]
public class LuhnDotNetBenchmark
{
    private const string ComputeLuhnNumberCategory = "Compute Luhn number";
    private const string ComputeLuhnCheckDigitCategory = "Compute Luhn check digit";
    private const string IsValidLuhnNumberCategory = "Validate Luhn number";
    private const string IsValidLuhnCheckDigitCategory = "Validate Luhn check digit";
    private const string AlphaNumericToNumericCategory = "AlphaNumeric to Numeric";
    private const string RemoveSeparatorCategory = "Remove separators";
    private const string ValidationChainCategory = "Validation chain";
    private const string ComputeChainCategory = "Compute chain";

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

    [Benchmark(Baseline = true), BenchmarkCategory(ComputeLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeLuhnNumberBasedOnString(string number)
    {
        number.ComputeLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(ComputeLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeLuhnCheckDigitBasedOnString(string number)
    {
        number.ComputeLuhnCheckDigit();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(IsValidLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidLuhnNumberBasedOnString(string number)
    {
        number.IsValidLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(IsValidLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidLuhnCheckDigitBasedOnString(string number)
    {
        char.MinValue.IsValidLuhnCheckDigit(number);
    }

    [Benchmark, BenchmarkCategory(ComputeLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeLuhnNumberBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(ComputeLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void ComputeLuhnCheckDigitBasedOnSpan(string number)
    {
        number.AsSpan().ComputeLuhnCheckDigit();
    }

    [Benchmark, BenchmarkCategory(IsValidLuhnNumberCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidLuhnNumberBasedOnSpan(string number)
    {
        number.AsSpan().IsValidLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(IsValidLuhnCheckDigitCategory)]
    [ArgumentsSource(nameof(NumericNumbersAsString))]
    public void IsValidLuhnCheckDigitBasedOnSpan(string number)
    {
        char.MinValue.IsValidLuhnCheckDigit(number.AsSpan());
    }

    [Benchmark(Baseline = true), BenchmarkCategory(AlphaNumericToNumericCategory)]
    [ArgumentsSource(nameof(AlphaNumericNumbersAsString))]
    public void AlphaNumericToNumericBasedOnString(string number)
    {
        number.AlphaNumericToNumeric();
    }

    [Benchmark, BenchmarkCategory(AlphaNumericToNumericCategory)]
    [ArgumentsSource(nameof(AlphaNumericNumbersAsString))]
    public void AlphaNumericToNumericBasedOnSpan(string number)
    {
        number.AsSpan().AlphaNumericToNumeric();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(RemoveSeparatorCategory)]
    [ArgumentsSource(nameof(SeparatedNumbersAsString))]
    public void RemoveSeparatorBasedOnString(string number)
    {
        number.RemoveSeparators();
    }

    [Benchmark, BenchmarkCategory(RemoveSeparatorCategory)]
    [ArgumentsSource(nameof(SeparatedNumbersAsString))]
    public void RemoveSeparatorBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().ComputeLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(ComputeChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ComputeChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().ComputeLuhnNumber();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnString(string number)
    {
        number.RemoveSeparators().AlphaNumericToNumeric().IsValidLuhnNumber();
    }

    [Benchmark, BenchmarkCategory(ValidationChainCategory)]
    [ArgumentsSource(nameof(SeparatedAlphaNumericNumbersAsString))]
    public void ValidationChainBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators().AlphaNumericToNumeric().IsValidLuhnNumber();
    }
}
