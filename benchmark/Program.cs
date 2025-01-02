namespace LuhnDotNetBenchmark;

using BenchmarkDotNet.Running;
using System.Diagnostics.CodeAnalysis;

[ExcludeFromCodeCoverage]
public static class Program
{
    public static void Main(string[] args) => BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
}