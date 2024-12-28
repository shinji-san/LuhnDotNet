window.BENCHMARK_DATA = {
  "lastUpdate": 1735344441966,
  "repoUrl": "https://github.com/shinji-san/LuhnDotNet",
  "entries": {
    "Analyze Benchmark.Net results": [
      {
        "commit": {
          "author": {
            "email": "github.dev@sebastian-walther.de",
            "name": "Sebastian Walther",
            "username": "shinji-san"
          },
          "committer": {
            "email": "github.dev@sebastian-walther.de",
            "name": "Sebastian Walther",
            "username": "shinji-san"
          },
          "distinct": true,
          "id": "5200bb92c07b039c173d54d0b8c933abab790179",
          "message": "Add benchmarks for LuhnDotNet with BenchmarkDotNet integration\n\nIntroduce a new benchmark project to measure Luhn algorithm performance using BenchmarkDotNet.\nIntegrated the benchmarking setup into the solution, added GitHub Actions workflow for automated runs, and updated `.gitignore` to include BenchmarkDotNet artifacts.\n\nResolves: No entry",
          "timestamp": "2024-12-28T00:55:56+01:00",
          "tree_id": "eeaa2f4a3f5b95ecbd34777e00d53ac01fc5092a",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/5200bb92c07b039c173d54d0b8c933abab790179"
        },
        "date": 1735344441678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 117.83606553929192,
            "unit": "ns",
            "range": "± 1.1172808573307367"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 121.62156103452047,
            "unit": "ns",
            "range": "± 2.2070885508454987"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 115.20714650551479,
            "unit": "ns",
            "range": "± 0.31096893529437425"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 118.22072623326228,
            "unit": "ns",
            "range": "± 0.5244020353474491"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 693.1763587679181,
            "unit": "ns",
            "range": "± 4.424286660504127"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 706.6035095214844,
            "unit": "ns",
            "range": "± 4.3753377924137995"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 690.6115277608236,
            "unit": "ns",
            "range": "± 5.789404199432718"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 697.0665056364877,
            "unit": "ns",
            "range": "± 4.1709181759727825"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 140.95405825546808,
            "unit": "ns",
            "range": "± 0.8638884957870326"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 140.15010741551717,
            "unit": "ns",
            "range": "± 0.8333387949592129"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 137.57472097873688,
            "unit": "ns",
            "range": "± 0.8162823400501021"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 134.17653351170677,
            "unit": "ns",
            "range": "± 0.982724012111421"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 723.1136137888982,
            "unit": "ns",
            "range": "± 4.355106168069676"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 767.8102434158325,
            "unit": "ns",
            "range": "± 3.544675035209177"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 718.1145280429295,
            "unit": "ns",
            "range": "± 4.744862526013035"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 726.9553212483723,
            "unit": "ns",
            "range": "± 7.18627228289714"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 143.37083962758382,
            "unit": "ns",
            "range": "± 1.3550298641066074"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 141.33197115262348,
            "unit": "ns",
            "range": "± 1.8859698669147362"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 142.10379867553712,
            "unit": "ns",
            "range": "± 1.3688951078479694"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 138.9441841840744,
            "unit": "ns",
            "range": "± 2.9907596700744365"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 726.2395055770874,
            "unit": "ns",
            "range": "± 6.642343948024151"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 708.0418086369832,
            "unit": "ns",
            "range": "± 5.3358573406788485"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 638.4402987616403,
            "unit": "ns",
            "range": "± 5.78776691717957"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 642.1415866851806,
            "unit": "ns",
            "range": "± 6.363354680404561"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 120.61831064224243,
            "unit": "ns",
            "range": "± 1.4836636920225983"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 113.84100999434789,
            "unit": "ns",
            "range": "± 0.42993108281177067"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 110.8041738986969,
            "unit": "ns",
            "range": "± 1.188964789285641"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 109.60064936535699,
            "unit": "ns",
            "range": "± 0.30623148541465733"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 642.0856150786082,
            "unit": "ns",
            "range": "± 1.1236886820870784"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 648.1066680635724,
            "unit": "ns",
            "range": "± 2.466839118179975"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 634.1645634969076,
            "unit": "ns",
            "range": "± 2.0467877964081858"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 619.26649250303,
            "unit": "ns",
            "range": "± 5.437191411869543"
          }
        ]
      }
    ]
  }
}