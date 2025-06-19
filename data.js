window.BENCHMARK_DATA = {
  "lastUpdate": 1750296813225,
  "repoUrl": "https://github.com/shinji-san/LuhnDotNet",
  "entries": {
    "Analyze Luhn benchmark results": [
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
        "date": 1750296812811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 458.5561319078718,
            "unit": "ns",
            "range": "± 1.6422779204997016"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 420.76929994729846,
            "unit": "ns",
            "range": "± 0.9970830041396782"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 445.69078420003257,
            "unit": "ns",
            "range": "± 1.5899798042390967"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 412.83511286515454,
            "unit": "ns",
            "range": "± 0.4243159323027109"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 447.8553639480046,
            "unit": "ns",
            "range": "± 1.1505213006392196"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 410.68405393191745,
            "unit": "ns",
            "range": "± 0.89525324306286"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 427.92168736457825,
            "unit": "ns",
            "range": "± 0.705218126989718"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 398.3056079057547,
            "unit": "ns",
            "range": "± 1.0510840530061947"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.31484681367874,
            "unit": "ns",
            "range": "± 0.1426040015089607"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 55.49284234872231,
            "unit": "ns",
            "range": "± 0.13295600084583026"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.705818323294324,
            "unit": "ns",
            "range": "± 0.08656393559471706"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 49.83724232656615,
            "unit": "ns",
            "range": "± 0.14418369752148869"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 365.44052158083235,
            "unit": "ns",
            "range": "± 0.684100872925795"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 406.4496780395508,
            "unit": "ns",
            "range": "± 0.9302232960140642"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.6178396088736,
            "unit": "ns",
            "range": "± 0.17265335600516116"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 373.7497397202712,
            "unit": "ns",
            "range": "± 1.034152404381766"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 78.4755977153778,
            "unit": "ns",
            "range": "± 0.3607277754410215"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 79.48487609624863,
            "unit": "ns",
            "range": "± 0.37542883107946845"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 76.73369945012607,
            "unit": "ns",
            "range": "± 0.16591668470649773"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 74.98518405969327,
            "unit": "ns",
            "range": "± 0.2715607115437908"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 503.25511558850604,
            "unit": "ns",
            "range": "± 0.30011756307987136"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 477.6488426072257,
            "unit": "ns",
            "range": "± 2.4166602957924073"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 437.4297085908743,
            "unit": "ns",
            "range": "± 1.2469800501633166"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 437.24581486838207,
            "unit": "ns",
            "range": "± 1.2462916343025883"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 59.77432792527335,
            "unit": "ns",
            "range": "± 0.3132286548218615"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 59.73393055995305,
            "unit": "ns",
            "range": "± 0.235758246862707"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.000974826018016,
            "unit": "ns",
            "range": "± 0.09028736889345847"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 53.98897447983424,
            "unit": "ns",
            "range": "± 0.07566822617216087"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 393.82208280563356,
            "unit": "ns",
            "range": "± 0.7333141412555189"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 393.1922351763799,
            "unit": "ns",
            "range": "± 0.3572131469900534"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 341.9419775742751,
            "unit": "ns",
            "range": "± 0.5151326007007911"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 341.01810230527605,
            "unit": "ns",
            "range": "± 0.45293872712309424"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 47.61982421364103,
            "unit": "ns",
            "range": "± 0.01630879484373567"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 47.587786970535916,
            "unit": "ns",
            "range": "± 0.10543328352042138"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 45.34720521477553,
            "unit": "ns",
            "range": "± 0.09687119013906773"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.760024641241344,
            "unit": "ns",
            "range": "± 0.06148895963482327"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 351.3454064956078,
            "unit": "ns",
            "range": "± 0.6590695446503281"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 433.4662168184916,
            "unit": "ns",
            "range": "± 0.8799388721296522"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 346.8250408490499,
            "unit": "ns",
            "range": "± 2.242284488706782"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 308.3521678288778,
            "unit": "ns",
            "range": "± 2.367295158666465"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 422.123893397195,
            "unit": "ns",
            "range": "± 1.41334417453899"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 380.73311548966626,
            "unit": "ns",
            "range": "± 0.6933536324559141"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 389.7037838186537,
            "unit": "ns",
            "range": "± 1.1847270594700396"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 362.7964680194855,
            "unit": "ns",
            "range": "± 1.017343736034877"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 397.7282744187575,
            "unit": "ns",
            "range": "± 1.1752478928788932"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 364.7998626232147,
            "unit": "ns",
            "range": "± 1.1113481206097868"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 376.65582124392193,
            "unit": "ns",
            "range": "± 0.6381219601545769"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 348.4476357239943,
            "unit": "ns",
            "range": "± 1.519996064389264"
          }
        ]
      }
    ]
  }
}