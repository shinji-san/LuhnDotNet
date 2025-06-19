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
public class HelperBenchmark
{
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

    [Benchmark(Baseline = true), BenchmarkCategory(Category.AlphaNumericToNumericCategory)]
    [ArgumentsSource(nameof(AlphaNumericNumbersAsString))]
    public void AlphaNumericToNumericBasedOnString(string number)
    {
        number.AlphaNumericToNumeric();
    }

    [Benchmark, BenchmarkCategory(Category.AlphaNumericToNumericCategory)]
    [ArgumentsSource(nameof(AlphaNumericNumbersAsString))]
    public void AlphaNumericToNumericBasedOnSpan(string number)
    {
        number.AsSpan().AlphaNumericToNumeric();
    }

    [Benchmark(Baseline = true), BenchmarkCategory(Category.RemoveSeparatorCategory)]
    [ArgumentsSource(nameof(SeparatedNumbersAsString))]
    public void RemoveSeparatorBasedOnString(string number)
    {
        number.RemoveSeparators();
    }

    [Benchmark, BenchmarkCategory(Category.RemoveSeparatorCategory)]
    [ArgumentsSource(nameof(SeparatedNumbersAsString))]
    public void RemoveSeparatorBasedOnSpan(string number)
    {
        number.AsSpan().RemoveSeparators();
    }
}
