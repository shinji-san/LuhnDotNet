window.BENCHMARK_DATA = {
  "lastUpdate": 1750296811935,
  "repoUrl": "https://github.com/shinji-san/LuhnDotNet",
  "entries": {
    "Analyze helper benchmark results": [
      {
        "commit": {
          "author": {
            "email": "52977680+shinji-san@users.noreply.github.com",
            "name": "Sebastian Walther",
            "username": "shinji-san"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4fa9e2a3add59ae1eedbc07d450a308f162294b",
          "message": "Merge pull request #102 from shinji-san/release-v2.0.0\n\nThis release (v2.0.0) includes significant additions and changes to the library's algorithm handling.\n\n**Additions:**\n\n*   New classes were added for Luhn and Mod11 algorithms, including calculator and validator classes for each.  These classes encapsulate related methods.\n*   `StringExtensions` and `ReadOnlySpanExtensions` classes were added for string and ReadOnlySpan manipulation.  These include methods to remove separators.\n*   Specific methods were added to compute and validate check digits and numbers for both Luhn and Mod11 algorithms.  Overloads accepting ReadOnlySpan inputs were also added.\n*   An `InvalidCharacterException` was added to handle invalid input characters.\n*   A Damm algorithm implementation was added, including `DammAlgorithm`, `DammCalculator`, and `DammValidator` classes.\n*   A `CharExtensions` class with `ThrowIfNotDigit` was added for input validation.\n*   A `LuhnDotNetCore` class was added to encapsulate functionality related to Luhn, Mod11 and other algorithms.\n\n**Changes:**\n\n*   The return type of `LuhnAlgorithm.ComputeLuhnCheckDigit` was changed to `char`.\n*   Luhn algorithm methods were moved to the new `LuhnAlgorithm`, `LuhnCalculator`, and `LuhnValidator` classes.\n*   Namespaces for Luhn algorithm-related classes were changed.\n*   `Luhn.IsValid` methods were renamed and moved to `LuhnValidator`.\n*   `ConvertAlphaNumericToNumeric` was renamed and moved to `StringExtensions` and `ReadOnlySpanExtensions`.\n*   `ComputeCheckDigit` and `ComputeLuhnNumber` methods were moved to `LuhnCalculator`.\n*   `IsValidNumber` and `IsValidCheckDigit` methods were moved to `LuhnValidator`.\n*   The `Luhn` class was renamed to `LuhnAlgorithm`.\n\n**Removals:**\n\n*   The `Luhn.IsValid` methods were removed. \n\nCloses:  #102",
          "timestamp": "2025-06-19T02:50:50+02:00",
          "tree_id": "07a897b3f27eb1d727cc98cd4faf0c3a759fed71",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/a4fa9e2a3add59ae1eedbc07d450a308f162294b"
        },
        "date": 1750296811523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 57.183973857334685,
            "unit": "ns",
            "range": "± 0.3535929403669699"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 50.93891520225085,
            "unit": "ns",
            "range": "± 0.0914143149116802"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 52.78682947846559,
            "unit": "ns",
            "range": "± 0.21575589603323117"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 53.889292538166046,
            "unit": "ns",
            "range": "± 0.29601379131517236"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 53.237736239035925,
            "unit": "ns",
            "range": "± 0.24039545020660266"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 36.19581891099612,
            "unit": "ns",
            "range": "± 0.320434304085888"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 48.83706558176449,
            "unit": "ns",
            "range": "± 0.2253053915434004"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 34.351514976758224,
            "unit": "ns",
            "range": "± 0.15978766154931062"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 249.72919237613678,
            "unit": "ns",
            "range": "± 0.7304758605646379"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 262.40040452663715,
            "unit": "ns",
            "range": "± 0.6360553569406876"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 218.09235491752625,
            "unit": "ns",
            "range": "± 0.9423451658345611"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 314.2932923757113,
            "unit": "ns",
            "range": "± 0.8556637094443521"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 57.754349674497334,
            "unit": "ns",
            "range": "± 0.48656936935761286"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 49.97656120856603,
            "unit": "ns",
            "range": "± 0.20453311091762894"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 52.57558353741964,
            "unit": "ns",
            "range": "± 0.220259107725474"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 54.53762623667717,
            "unit": "ns",
            "range": "± 0.02986480281424189"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 244.7311296096215,
            "unit": "ns",
            "range": "± 0.8922241965094455"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 229.23966965308557,
            "unit": "ns",
            "range": "± 0.43649278092684257"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 235.65578096253532,
            "unit": "ns",
            "range": "± 1.017062059259245"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 220.2888865641185,
            "unit": "ns",
            "range": "± 0.6150279587099993"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 661.7924220011785,
            "unit": "ns",
            "range": "± 1.0854537140419998"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 583.3692080633981,
            "unit": "ns",
            "range": "± 2.7245553104040887"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 625.669139793941,
            "unit": "ns",
            "range": "± 3.8356778759430346"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 553.7477125021128,
            "unit": "ns",
            "range": "± 1.639768846833427"
          }
        ]
      }
    ]
  }
}