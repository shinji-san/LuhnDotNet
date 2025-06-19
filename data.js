window.BENCHMARK_DATA = {
  "lastUpdate": 1750296815693,
  "repoUrl": "https://github.com/shinji-san/LuhnDotNet",
  "entries": {
    "Analyze Damm benchmark results": [
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
        "date": 1750296815270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 478.4537473042806,
            "unit": "ns",
            "range": "± 6.8314172919209195"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 440.49924920399985,
            "unit": "ns",
            "range": "± 2.534438802656728"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 433.16432402684137,
            "unit": "ns",
            "range": "± 0.546360574010627"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 411.93116576855,
            "unit": "ns",
            "range": "± 1.4435035091990436"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 452.81732807159426,
            "unit": "ns",
            "range": "± 2.5950396457409672"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 416.4948539733887,
            "unit": "ns",
            "range": "± 1.3522920347638014"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 526.7722176038302,
            "unit": "ns",
            "range": "± 1.2217881168545532"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 393.21900401796614,
            "unit": "ns",
            "range": "± 1.3002395606476842"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 44.66561587793486,
            "unit": "ns",
            "range": "± 0.2400511756680167"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 43.63444879421821,
            "unit": "ns",
            "range": "± 0.09736739449248875"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 42.537443108283554,
            "unit": "ns",
            "range": "± 0.0807967534106438"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 42.79596203336349,
            "unit": "ns",
            "range": "± 0.07300754861202802"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 350.36322743552074,
            "unit": "ns",
            "range": "± 0.6827882869506603"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 351.35742099468524,
            "unit": "ns",
            "range": "± 0.3321441125105498"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 342.7447155438937,
            "unit": "ns",
            "range": "± 0.6672972387031757"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 335.5880582149212,
            "unit": "ns",
            "range": "± 0.3818159645907751"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 86.51528352896372,
            "unit": "ns",
            "range": "± 0.46258308319861924"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 92.67965922753017,
            "unit": "ns",
            "range": "± 1.0003403492904976"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 85.13602509668895,
            "unit": "ns",
            "range": "± 0.38092095748030974"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 83.21703549793789,
            "unit": "ns",
            "range": "± 0.35771930574813643"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 532.4182156835284,
            "unit": "ns",
            "range": "± 2.664939720504788"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 504.3131310389592,
            "unit": "ns",
            "range": "± 1.7844662633723325"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 470.70233437220253,
            "unit": "ns",
            "range": "± 3.3005576694329863"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 464.8324217455728,
            "unit": "ns",
            "range": "± 1.4830406494454729"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 68.61075667693065,
            "unit": "ns",
            "range": "± 0.0868335540254213"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 70.0142948123125,
            "unit": "ns",
            "range": "± 0.3171963221980759"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 65.35921900471051,
            "unit": "ns",
            "range": "± 0.04616876676794592"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 65.70496772016797,
            "unit": "ns",
            "range": "± 0.322775349013525"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 429.05453872680664,
            "unit": "ns",
            "range": "± 0.9341361502170169"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 427.80500240325927,
            "unit": "ns",
            "range": "± 1.6319477821466482"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 389.9196525982448,
            "unit": "ns",
            "range": "± 0.4875666899813136"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 390.2621611867632,
            "unit": "ns",
            "range": "± 0.6315645913918579"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 43.94412105817061,
            "unit": "ns",
            "range": "± 0.09630947965235073"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 45.10176858731678,
            "unit": "ns",
            "range": "± 0.19907029971211038"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 42.659106803791865,
            "unit": "ns",
            "range": "± 0.17360761148127646"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.740709924697875,
            "unit": "ns",
            "range": "± 0.18825591939095082"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 348.9423562799181,
            "unit": "ns",
            "range": "± 0.5396548069847001"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 350.26579904556274,
            "unit": "ns",
            "range": "± 0.6889723350519743"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 342.9593957020686,
            "unit": "ns",
            "range": "± 0.42047320782319053"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 348.6439071801993,
            "unit": "ns",
            "range": "± 0.8849208103706464"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 418.9036498410361,
            "unit": "ns",
            "range": "± 1.8185664790979965"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 380.2461599936852,
            "unit": "ns",
            "range": "± 0.7179433296058387"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 397.56274502093976,
            "unit": "ns",
            "range": "± 1.2465441864824123"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 469.01508215495517,
            "unit": "ns",
            "range": "± 2.2541134966153122"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 404.50563713220447,
            "unit": "ns",
            "range": "± 0.917566228475847"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 372.26754846572874,
            "unit": "ns",
            "range": "± 1.7269099818616593"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 420.49850511550903,
            "unit": "ns",
            "range": "± 1.1941199401508484"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 352.014244556427,
            "unit": "ns",
            "range": "± 0.5936196639936507"
          }
        ]
      }
    ]
  }
}