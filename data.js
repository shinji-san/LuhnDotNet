window.BENCHMARK_DATA = {
  "lastUpdate": 1750518008643,
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
        "date": 1750518008337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 509.72773606436596,
            "unit": "ns",
            "range": "± 6.275761206367551"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 468.2540213721139,
            "unit": "ns",
            "range": "± 5.113801119493596"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 463.57821767470415,
            "unit": "ns",
            "range": "± 9.036494368587887"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 421.2749619166056,
            "unit": "ns",
            "range": "± 1.7268051379055245"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 500.56891730626427,
            "unit": "ns",
            "range": "± 4.856735856408932"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 449.5919235774449,
            "unit": "ns",
            "range": "± 3.60957165112062"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 453.7640202204386,
            "unit": "ns",
            "range": "± 5.457542774178114"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 418.77818806966144,
            "unit": "ns",
            "range": "± 1.7507631173453697"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 44.85455598036448,
            "unit": "ns",
            "range": "± 0.29399144876150524"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 43.98992149318968,
            "unit": "ns",
            "range": "± 0.17998688992924847"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 44.60929171442986,
            "unit": "ns",
            "range": "± 0.5019692167961712"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 44.98960454549108,
            "unit": "ns",
            "range": "± 0.5204168279553033"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 350.060365041097,
            "unit": "ns",
            "range": "± 1.8530704022108733"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 355.1084002714891,
            "unit": "ns",
            "range": "± 0.3469983272864533"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 344.0002226095933,
            "unit": "ns",
            "range": "± 0.878867722234365"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 336.42074823379517,
            "unit": "ns",
            "range": "± 0.4559205312914538"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 91.84568863255637,
            "unit": "ns",
            "range": "± 0.2747577499372906"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 90.45552146434784,
            "unit": "ns",
            "range": "± 0.7860010238202749"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398713\")",
            "value": 84.99749292532603,
            "unit": "ns",
            "range": "± 0.47757287151280464"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398713\")",
            "value": 173.8565951506297,
            "unit": "ns",
            "range": "± 1.859420984835272"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 507.4433493614197,
            "unit": "ns",
            "range": "± 3.010502913028545"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 508.40245874722797,
            "unit": "ns",
            "range": "± 0.8732508627027301"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 474.3633040746053,
            "unit": "ns",
            "range": "± 3.986637403468686"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ComputeNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 474.07756699048554,
            "unit": "ns",
            "range": "± 2.030615997551137"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 70.15256229468754,
            "unit": "ns",
            "range": "± 0.4291322333776755"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 72.11654871702194,
            "unit": "ns",
            "range": "± 0.6105565809158106"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 69.33732619285584,
            "unit": "ns",
            "range": "± 0.5312060086857959"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 69.57146861155827,
            "unit": "ns",
            "range": "± 0.20010136451567587"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 427.0434207575662,
            "unit": "ns",
            "range": "± 1.4553277202823607"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 428.148289510182,
            "unit": "ns",
            "range": "± 0.8167560730956006"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 390.1153005453256,
            "unit": "ns",
            "range": "± 0.7010002377612782"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 395.07747850418093,
            "unit": "ns",
            "range": "± 1.6888707499421942"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 49.68285302221775,
            "unit": "ns",
            "range": "± 1.1371026226742385"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 44.11600106358528,
            "unit": "ns",
            "range": "± 0.372062586074347"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398713\")",
            "value": 42.57933666024889,
            "unit": "ns",
            "range": "± 0.18910774834173502"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398713\")",
            "value": 42.727201847235364,
            "unit": "ns",
            "range": "± 0.2183692608091507"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 349.00191290037975,
            "unit": "ns",
            "range": "± 0.6244733217741568"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 349.52914421898976,
            "unit": "ns",
            "range": "± 0.536154662816687"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 347.8482628504435,
            "unit": "ns",
            "range": "± 2.6130362854690805"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.IsValidNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 343.19403045518055,
            "unit": "ns",
            "range": "± 0.8167352147870058"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 414.27435636520386,
            "unit": "ns",
            "range": "± 1.5092259348218517"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 377.5633440384498,
            "unit": "ns",
            "range": "± 0.7313303702189754"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 396.75132549726044,
            "unit": "ns",
            "range": "± 0.9007707321464694"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 368.2243444736187,
            "unit": "ns",
            "range": "± 0.7451139456568313"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 405.3348173459371,
            "unit": "ns",
            "range": "± 3.753185102377794"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 398.68933351223285,
            "unit": "ns",
            "range": "± 0.42191533916477"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 390.951338665826,
            "unit": "ns",
            "range": "± 0.8967127094242519"
          },
          {
            "name": "LuhnDotNetBenchmark.DammBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 351.771251474108,
            "unit": "ns",
            "range": "± 1.2228245993357802"
          }
        ]
      }
    ]
  }
}