window.BENCHMARK_DATA = {
  "lastUpdate": 1750619169048,
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
      },
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
          "id": "4163d33a3c43b1cb3786a7d70f28b3cffd2a9004",
          "message": "Merge pull request #104 from shinji-san/hotfix-DocGenBenchmarkResults\n\nHotfix Documentation Generation - Copy benchmark results\n\nResolves: #104",
          "timestamp": "2025-06-21T16:16:53+02:00",
          "tree_id": "335d1ae3731b0a78a6116dc3fa4d3a39d773fa29",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/4163d33a3c43b1cb3786a7d70f28b3cffd2a9004"
        },
        "date": 1750518006156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 463.9824319226401,
            "unit": "ns",
            "range": "± 1.1452485219315138"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 424.5913769177028,
            "unit": "ns",
            "range": "± 1.383319616086569"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 437.51164170673917,
            "unit": "ns",
            "range": "± 0.8599578519909037"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 398.0962869937603,
            "unit": "ns",
            "range": "± 1.0281978876622024"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 440.2462412760808,
            "unit": "ns",
            "range": "± 0.9518633239960462"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 445.76655544553483,
            "unit": "ns",
            "range": "± 1.2033594578231865"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 422.9460390635899,
            "unit": "ns",
            "range": "± 2.42997129144499"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 397.83529340303863,
            "unit": "ns",
            "range": "± 0.8168695010741598"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.375134619077045,
            "unit": "ns",
            "range": "± 0.15997612917046267"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 52.374122031529744,
            "unit": "ns",
            "range": "± 0.12064980224937331"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.56464440056256,
            "unit": "ns",
            "range": "± 0.08930775559567462"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 49.87147937076433,
            "unit": "ns",
            "range": "± 0.0837091137771255"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 393.0567092259725,
            "unit": "ns",
            "range": "± 0.6612166880607427"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 432.7031014515803,
            "unit": "ns",
            "range": "± 0.7298643606203966"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 334.4009256998698,
            "unit": "ns",
            "range": "± 0.9275240857978646"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 359.04498895009357,
            "unit": "ns",
            "range": "± 0.6031586233930595"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 79.62856660570417,
            "unit": "ns",
            "range": "± 0.37998987094281655"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 81.54979394032405,
            "unit": "ns",
            "range": "± 0.3381357026199993"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 77.05209932156971,
            "unit": "ns",
            "range": "± 0.6850333168175636"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 77.51384678284327,
            "unit": "ns",
            "range": "± 0.48767482179941896"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 482.5543148177011,
            "unit": "ns",
            "range": "± 3.5793119198224206"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 506.9930941036769,
            "unit": "ns",
            "range": "± 2.8207495389006496"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 440.82658975464955,
            "unit": "ns",
            "range": "± 2.2135677727966967"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 440.6252091612135,
            "unit": "ns",
            "range": "± 3.122214980079083"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 59.850459361076354,
            "unit": "ns",
            "range": "± 0.2772266137111592"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 60.056355347236,
            "unit": "ns",
            "range": "± 0.3260345518437878"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.0689922173818,
            "unit": "ns",
            "range": "± 0.11767685912277694"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 53.7245450432484,
            "unit": "ns",
            "range": "± 0.09741014991731756"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 394.8055910746256,
            "unit": "ns",
            "range": "± 2.0396055465248653"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 393.3311982154846,
            "unit": "ns",
            "range": "± 0.8843540320244156"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 342.13682107925416,
            "unit": "ns",
            "range": "± 0.9057205433006075"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 341.8540805407933,
            "unit": "ns",
            "range": "± 0.7066186121223114"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 49.99043517112732,
            "unit": "ns",
            "range": "± 0.07129387407051858"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 47.70682978171568,
            "unit": "ns",
            "range": "± 0.09580631480468439"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 45.27373819266047,
            "unit": "ns",
            "range": "± 0.1302138038574173"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.77062245974174,
            "unit": "ns",
            "range": "± 0.06198760065950711"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 350.9761044428899,
            "unit": "ns",
            "range": "± 0.2899571688644779"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 351.3223134358724,
            "unit": "ns",
            "range": "± 0.9202471470135247"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 346.12118339538574,
            "unit": "ns",
            "range": "± 2.014379729553495"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 308.4755738462721,
            "unit": "ns",
            "range": "± 3.82458097163274"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 474.4743309361594,
            "unit": "ns",
            "range": "± 4.471825571470678"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 376.42494957263654,
            "unit": "ns",
            "range": "± 0.860410099655934"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 384.80265833781317,
            "unit": "ns",
            "range": "± 0.8236984826193521"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 368.84103805678234,
            "unit": "ns",
            "range": "± 4.913457521053248"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 407.5905533858708,
            "unit": "ns",
            "range": "± 5.927458435873847"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 375.7878213564555,
            "unit": "ns",
            "range": "± 3.1123853360819114"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 375.95929963772113,
            "unit": "ns",
            "range": "± 1.3304113423102362"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 349.4175198237101,
            "unit": "ns",
            "range": "± 1.1007618595205662"
          }
        ]
      },
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
          "id": "9e461035d949aeb072a8ec16b8e3d4ab292638c3",
          "message": "Merge pull request #105 from shinji-san/hotfix-DocGenBenchmarkResults2\n\nRefine workflows to include individual benchmark result checkouts\n\nResolves: #105",
          "timestamp": "2025-06-21T17:13:33+02:00",
          "tree_id": "baaadf009eee7b2e77d7644bccba329647612cde",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/9e461035d949aeb072a8ec16b8e3d4ab292638c3"
        },
        "date": 1750521359902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 488.54184014456615,
            "unit": "ns",
            "range": "± 3.2800446332516873"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 436.16927061080935,
            "unit": "ns",
            "range": "± 2.5292576989496256"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 456.0969531059265,
            "unit": "ns",
            "range": "± 2.786088176222575"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 428.15723950068156,
            "unit": "ns",
            "range": "± 2.3271792778307603"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 477.15147345406666,
            "unit": "ns",
            "range": "± 3.474773800052014"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 424.9433966000875,
            "unit": "ns",
            "range": "± 3.0374935192374504"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 443.98083953857423,
            "unit": "ns",
            "range": "± 2.91283285083329"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 416.8828038215637,
            "unit": "ns",
            "range": "± 2.414208453395695"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 51.05393146673838,
            "unit": "ns",
            "range": "± 0.10452534737520798"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 50.18277420742171,
            "unit": "ns",
            "range": "± 0.11128857911283367"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.785077742735545,
            "unit": "ns",
            "range": "± 0.135591988188016"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 49.773213514259886,
            "unit": "ns",
            "range": "± 0.1064878924082537"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 380.0395255088806,
            "unit": "ns",
            "range": "± 0.7425369965453584"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 406.97823508580524,
            "unit": "ns",
            "range": "± 0.9288293384712553"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.81056950887046,
            "unit": "ns",
            "range": "± 0.8940042363625802"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 373.6895527499063,
            "unit": "ns",
            "range": "± 0.49809254064065617"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 84.48889017105103,
            "unit": "ns",
            "range": "± 0.29139023966407135"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 82.8633827822549,
            "unit": "ns",
            "range": "± 0.360463378212484"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 76.77728070531573,
            "unit": "ns",
            "range": "± 0.2850514195291832"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 76.47675819396973,
            "unit": "ns",
            "range": "± 0.31998296000493"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 511.61285400390625,
            "unit": "ns",
            "range": "± 2.536415079042057"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 483.74392678187445,
            "unit": "ns",
            "range": "± 1.703651571955914"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 472.06765256609236,
            "unit": "ns",
            "range": "± 3.1193044882935124"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 446.97276776631674,
            "unit": "ns",
            "range": "± 3.1027047719647425"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 60.013163789113364,
            "unit": "ns",
            "range": "± 0.34792666331827987"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 59.912255783875786,
            "unit": "ns",
            "range": "± 0.23890487106182764"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.05848099078451,
            "unit": "ns",
            "range": "± 0.13186698783319525"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 53.816742062568665,
            "unit": "ns",
            "range": "± 0.023299667600151484"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 387.3927492073604,
            "unit": "ns",
            "range": "± 0.9769532726627259"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 387.04913663864136,
            "unit": "ns",
            "range": "± 0.7169666821989351"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.6666754313878,
            "unit": "ns",
            "range": "± 0.7673302214987539"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.6109736987523,
            "unit": "ns",
            "range": "± 0.8496811698098298"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 47.77942085464795,
            "unit": "ns",
            "range": "± 0.1505468083023834"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 47.69470241864522,
            "unit": "ns",
            "range": "± 0.09224248009079604"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 45.38918859759966,
            "unit": "ns",
            "range": "± 0.12230133662878724"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.66567113995552,
            "unit": "ns",
            "range": "± 0.1064670729853865"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 379.8224875450134,
            "unit": "ns",
            "range": "± 0.8563624867121895"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 378.0022660096486,
            "unit": "ns",
            "range": "± 0.09521269543808353"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 346.52391586303713,
            "unit": "ns",
            "range": "± 2.100772499378188"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 310.91313047409056,
            "unit": "ns",
            "range": "± 1.9303003017003182"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 420.0007209777832,
            "unit": "ns",
            "range": "± 2.7122523175910493"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 391.86363611221316,
            "unit": "ns",
            "range": "± 1.6808220893813879"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 402.7630620956421,
            "unit": "ns",
            "range": "± 3.606319984108487"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 377.03845268885294,
            "unit": "ns",
            "range": "± 2.7167344589534763"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 423.38054398127963,
            "unit": "ns",
            "range": "± 2.9594379961573853"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 379.85434500376385,
            "unit": "ns",
            "range": "± 3.072073033531224"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 391.1619215965271,
            "unit": "ns",
            "range": "± 4.323432335424144"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 356.52171325683594,
            "unit": "ns",
            "range": "± 1.618659972997127"
          }
        ]
      },
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
          "id": "b83c27c4fc34f6af93f9f767d4b1cbfa17dbff3d",
          "message": "Merge pull request #106 from shinji-san/hotfix-DocGenBenchmarkResults2\n\nFix indentation in rsync commands in `docfx-build-and-publish.yml`\n\nResolves: #106",
          "timestamp": "2025-06-21T17:22:31+02:00",
          "tree_id": "5bbd29b6977cb08782d690c3a57139a33e0e65d0",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/b83c27c4fc34f6af93f9f767d4b1cbfa17dbff3d"
        },
        "date": 1750521936254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 499.81721863379846,
            "unit": "ns",
            "range": "± 1.3130065185829058"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 455.7324089050293,
            "unit": "ns",
            "range": "± 8.217454349513083"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 459.2058478135329,
            "unit": "ns",
            "range": "± 2.0704909322530476"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 434.5733413060506,
            "unit": "ns",
            "range": "± 7.526303304691478"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 456.45466664859225,
            "unit": "ns",
            "range": "± 6.335807117048702"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 433.97964218684604,
            "unit": "ns",
            "range": "± 1.810804832806026"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 454.1113717976738,
            "unit": "ns",
            "range": "± 8.878572026681285"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 428.37549311319987,
            "unit": "ns",
            "range": "± 3.759827584969044"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 50.93038358432906,
            "unit": "ns",
            "range": "± 0.13420154459563624"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 50.23005669031824,
            "unit": "ns",
            "range": "± 0.11930855075108952"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.66585961480936,
            "unit": "ns",
            "range": "± 0.038718273390417494"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 49.44692379694719,
            "unit": "ns",
            "range": "± 0.08783457926847267"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 380.52520440419516,
            "unit": "ns",
            "range": "± 0.7892156354982284"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 367.16076345443724,
            "unit": "ns",
            "range": "± 0.696673301801127"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.9176823616028,
            "unit": "ns",
            "range": "± 0.637231469786401"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 360.32679210390364,
            "unit": "ns",
            "range": "± 0.8932882190885206"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 82.81954630783626,
            "unit": "ns",
            "range": "± 0.313697235507152"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 83.4479501417705,
            "unit": "ns",
            "range": "± 0.3098939304926389"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 76.73299160173961,
            "unit": "ns",
            "range": "± 0.6294564751302574"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 77.3563702305158,
            "unit": "ns",
            "range": "± 0.26668418671981303"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 486.3824724469866,
            "unit": "ns",
            "range": "± 2.5388045892098012"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 486.8484206880842,
            "unit": "ns",
            "range": "± 2.310506305348747"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 473.16816829045615,
            "unit": "ns",
            "range": "± 3.388401371520265"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 447.11093044281006,
            "unit": "ns",
            "range": "± 1.6314447865948716"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 59.78132426738739,
            "unit": "ns",
            "range": "± 0.2664695984391436"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 59.89277608394623,
            "unit": "ns",
            "range": "± 0.38846737276274756"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 54.026743443806964,
            "unit": "ns",
            "range": "± 0.09187979190058436"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 53.671339120183674,
            "unit": "ns",
            "range": "± 0.1073835653172022"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 387.4492460250855,
            "unit": "ns",
            "range": "± 1.3893545979115345"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 387.6469405614413,
            "unit": "ns",
            "range": "± 2.041256672312153"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 341.8737382521996,
            "unit": "ns",
            "range": "± 0.16246129751997757"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 342.6561308224996,
            "unit": "ns",
            "range": "± 1.0768874400931154"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 47.31968755905445,
            "unit": "ns",
            "range": "± 0.016836646904862886"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 49.90843712886174,
            "unit": "ns",
            "range": "± 0.12394614675572205"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 45.34483475770269,
            "unit": "ns",
            "range": "± 0.09459625992895636"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.863276664416,
            "unit": "ns",
            "range": "± 0.11116082008161463"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 379.6573714188167,
            "unit": "ns",
            "range": "± 0.7265200926441829"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 405.63842422621593,
            "unit": "ns",
            "range": "± 0.8341027025147786"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 347.27939561435153,
            "unit": "ns",
            "range": "± 1.763900509730879"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 308.7291823387146,
            "unit": "ns",
            "range": "± 2.577293553208134"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 428.2908081054687,
            "unit": "ns",
            "range": "± 7.246129072258142"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 396.815698657717,
            "unit": "ns",
            "range": "± 1.312075078353307"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 402.29587443669635,
            "unit": "ns",
            "range": "± 4.721632304086614"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 386.81456584196826,
            "unit": "ns",
            "range": "± 1.2586060919819588"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 411.24253206986646,
            "unit": "ns",
            "range": "± 5.255827937882254"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 391.43436884880066,
            "unit": "ns",
            "range": "± 2.1478151067646003"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 411.33841574192047,
            "unit": "ns",
            "range": "± 7.672691159503879"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 498.5040717124939,
            "unit": "ns",
            "range": "± 4.442734851814265"
          }
        ]
      },
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
          "id": "cb0daf6e7104ecaf3367d31f5bc23271c36ab42d",
          "message": "Merge pull request #109 from shinji-san/release-v2.0.1\n\nRelease v2.0.1\n\nCloses: #109",
          "timestamp": "2025-06-22T20:24:59+02:00",
          "tree_id": "2bb5d0d34d9a5c3ac083b8cf5f7ef89f71c79ed8",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/cb0daf6e7104ecaf3367d31f5bc23271c36ab42d"
        },
        "date": 1750619168263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 448.2955464216379,
            "unit": "ns",
            "range": "± 1.003812217001438"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 410.42210507392883,
            "unit": "ns",
            "range": "± 1.5537568210128374"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 446.83971625107984,
            "unit": "ns",
            "range": "± 1.5730146583926226"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 470.90483980912427,
            "unit": "ns",
            "range": "± 1.8538629627443564"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 442.49588894844055,
            "unit": "ns",
            "range": "± 1.5400276064145335"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 397.2534834861755,
            "unit": "ns",
            "range": "± 1.5309122764002385"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 418.784991639001,
            "unit": "ns",
            "range": "± 1.5303934707533435"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 391.09845457758223,
            "unit": "ns",
            "range": "± 3.4734756264532707"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.85622027974863,
            "unit": "ns",
            "range": "± 0.13548722406877708"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 45.73048947866146,
            "unit": "ns",
            "range": "± 0.015416739471386795"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 45.81314477750233,
            "unit": "ns",
            "range": "± 0.11031241333279215"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 46.62013041547367,
            "unit": "ns",
            "range": "± 0.09646984103231747"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 346.50745933396473,
            "unit": "ns",
            "range": "± 0.44876901151299703"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 333.85207649639676,
            "unit": "ns",
            "range": "± 0.5177613249889578"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 296.2818965911865,
            "unit": "ns",
            "range": "± 0.745869195036885"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 319.8797546533438,
            "unit": "ns",
            "range": "± 0.5237376989715703"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 69.55632034173378,
            "unit": "ns",
            "range": "± 0.1297018847453174"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 69.4637046456337,
            "unit": "ns",
            "range": "± 0.06184677701057424"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 67.89198472408148,
            "unit": "ns",
            "range": "± 0.17862711470821585"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 67.79601540932289,
            "unit": "ns",
            "range": "± 0.14898197825948553"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 359.5612208843231,
            "unit": "ns",
            "range": "± 1.343110477916201"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 373.4251010758536,
            "unit": "ns",
            "range": "± 1.4531086029400353"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 335.68272201831525,
            "unit": "ns",
            "range": "± 0.8117415968584553"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 359.7334752449623,
            "unit": "ns",
            "range": "± 0.2978595383087933"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 53.430878074963886,
            "unit": "ns",
            "range": "± 0.1196614189306845"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 53.426765535275145,
            "unit": "ns",
            "range": "± 0.1781114731893313"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 48.55846058328947,
            "unit": "ns",
            "range": "± 0.09338573478239018"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 48.177606663533616,
            "unit": "ns",
            "range": "± 0.06982748572497077"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 301.27323716027394,
            "unit": "ns",
            "range": "± 0.399311530202719"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 305.7413012981415,
            "unit": "ns",
            "range": "± 3.6308035638911056"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 280.8255869150162,
            "unit": "ns",
            "range": "± 0.22204803355348463"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 281.39719332967485,
            "unit": "ns",
            "range": "± 0.7395421779218139"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 44.927272451775416,
            "unit": "ns",
            "range": "± 0.08395484511054066"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 47.803991721226616,
            "unit": "ns",
            "range": "± 0.01718450389453939"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 40.28623447815577,
            "unit": "ns",
            "range": "± 0.122969222576165"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 39.818196241060896,
            "unit": "ns",
            "range": "± 0.08697449738281297"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 348.8311940431595,
            "unit": "ns",
            "range": "± 0.3054208428420072"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 316.6406198501587,
            "unit": "ns",
            "range": "± 2.021178843174451"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 289.75783521788463,
            "unit": "ns",
            "range": "± 0.8091903285509364"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 266.31843171800887,
            "unit": "ns",
            "range": "± 0.5736905143799885"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 424.2812747955322,
            "unit": "ns",
            "range": "± 2.5475407775502217"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 390.6605312143053,
            "unit": "ns",
            "range": "± 2.2134972296621016"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 386.193553337684,
            "unit": "ns",
            "range": "± 0.9034831687005394"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 371.1899663720812,
            "unit": "ns",
            "range": "± 1.3043438658815314"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 422.89963271067694,
            "unit": "ns",
            "range": "± 0.5820564653474146"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 372.89792570701013,
            "unit": "ns",
            "range": "± 1.8927104660639886"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 386.3388267297011,
            "unit": "ns",
            "range": "± 0.711226932094387"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 362.6310561253474,
            "unit": "ns",
            "range": "± 1.2238989843760568"
          }
        ]
      }
    ]
  }
}