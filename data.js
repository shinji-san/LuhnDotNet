window.BENCHMARK_DATA = {
  "lastUpdate": 1750521935518,
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
        "date": 1750518004951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 57.608409179108484,
            "unit": "ns",
            "range": "± 0.5002107560633966"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 48.797601866722104,
            "unit": "ns",
            "range": "± 0.23807958607576812"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 52.67961873610815,
            "unit": "ns",
            "range": "± 0.3144451465231901"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 53.64890574950438,
            "unit": "ns",
            "range": "± 0.21249986541926233"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 52.7969670845912,
            "unit": "ns",
            "range": "± 0.329734099294832"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 38.23980750028904,
            "unit": "ns",
            "range": "± 0.24464116480154455"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 49.054030656814575,
            "unit": "ns",
            "range": "± 0.2821588515070822"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 36.66052288015683,
            "unit": "ns",
            "range": "± 0.27652009563060254"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 253.1198251430805,
            "unit": "ns",
            "range": "± 2.1443228423315923"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 317.54015232721963,
            "unit": "ns",
            "range": "± 2.591397390601514"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 218.80639476435525,
            "unit": "ns",
            "range": "± 1.9693752782614673"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 315.4467949526651,
            "unit": "ns",
            "range": "± 1.5352624197117908"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 57.63368024275853,
            "unit": "ns",
            "range": "± 0.21258485061644367"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 49.66645437479019,
            "unit": "ns",
            "range": "± 0.16336932575315485"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 52.50193294286728,
            "unit": "ns",
            "range": "± 0.2372504262027851"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 55.20987535317739,
            "unit": "ns",
            "range": "± 0.49567495657059757"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 244.20017890930177,
            "unit": "ns",
            "range": "± 1.3629914289987148"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 227.75354571525867,
            "unit": "ns",
            "range": "± 0.946830284222714"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 235.73666290442148,
            "unit": "ns",
            "range": "± 0.3406928935457096"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 221.74042963981628,
            "unit": "ns",
            "range": "± 0.7333034257124055"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 670.7157907485962,
            "unit": "ns",
            "range": "± 1.3150791442139347"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 589.2623425263625,
            "unit": "ns",
            "range": "± 1.222119566761235"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 627.2613370077951,
            "unit": "ns",
            "range": "± 2.5275524918731667"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 553.8405133760892,
            "unit": "ns",
            "range": "± 2.2701373469446615"
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
        "date": 1750521358815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 58.39317006331224,
            "unit": "ns",
            "range": "± 0.34294063235739514"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 50.33956069151561,
            "unit": "ns",
            "range": "± 0.49334459563121436"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 53.97466532786687,
            "unit": "ns",
            "range": "± 0.2245930352718544"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 56.5615860303243,
            "unit": "ns",
            "range": "± 0.299939731956868"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 52.297425136963525,
            "unit": "ns",
            "range": "± 0.24107782438287"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 37.625266414880755,
            "unit": "ns",
            "range": "± 0.3355315883439324"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 50.057722919262375,
            "unit": "ns",
            "range": "± 0.20361906615750833"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 35.277515854154316,
            "unit": "ns",
            "range": "± 0.26581032610341376"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 258.8073633398329,
            "unit": "ns",
            "range": "± 1.7659729256994758"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 271.966250928243,
            "unit": "ns",
            "range": "± 1.5882203187746435"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 222.7712583144506,
            "unit": "ns",
            "range": "± 0.5274357879494738"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 324.48119366963704,
            "unit": "ns",
            "range": "± 1.9416262905775952"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 59.26655378511974,
            "unit": "ns",
            "range": "± 0.3613473437118096"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 51.35182868157114,
            "unit": "ns",
            "range": "± 0.274949372496008"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 53.86280900835991,
            "unit": "ns",
            "range": "± 0.2963881428904838"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 56.490350025892255,
            "unit": "ns",
            "range": "± 0.2864592690562101"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 255.3712883313497,
            "unit": "ns",
            "range": "± 2.8527952912268293"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 240.37556654612223,
            "unit": "ns",
            "range": "± 2.2994347089838736"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 248.90446550505501,
            "unit": "ns",
            "range": "± 2.267337321202849"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 230.24174539248148,
            "unit": "ns",
            "range": "± 1.678647155201717"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 693.9789250055949,
            "unit": "ns",
            "range": "± 3.648017836296178"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 605.0619601522174,
            "unit": "ns",
            "range": "± 3.179225235285547"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 689.8996058191572,
            "unit": "ns",
            "range": "± 4.526630946975984"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 570.569378716605,
            "unit": "ns",
            "range": "± 3.8944411974302686"
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
        "date": 1750521935185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 57.96122883898871,
            "unit": "ns",
            "range": "± 0.43266266219319144"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 49.72562904999806,
            "unit": "ns",
            "range": "± 0.3515822572908097"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"79927398713DE\")",
            "value": 56.87073000868161,
            "unit": "ns",
            "range": "± 0.4076216343684224"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"79927398713DE\")",
            "value": 57.50815652425472,
            "unit": "ns",
            "range": "± 0.16339973335113372"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 53.765017475400654,
            "unit": "ns",
            "range": "± 0.4766564487494705"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 40.38095228586878,
            "unit": "ns",
            "range": "± 0.23886038028329024"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"ABCDEF\")",
            "value": 51.0266383758613,
            "unit": "ns",
            "range": "± 0.2134496154189226"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"ABCDEF\")",
            "value": 50.42074731588364,
            "unit": "ns",
            "range": "± 0.6289763737778847"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 257.6435955933162,
            "unit": "ns",
            "range": "± 1.2295902614114105"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 278.0374758084615,
            "unit": "ns",
            "range": "± 2.3182181708851"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 224.0010622058596,
            "unit": "ns",
            "range": "± 1.1779645246196366"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"DE79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 329.25412238438923,
            "unit": "ns",
            "range": "± 2.459574537260411"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 59.73867943882942,
            "unit": "ns",
            "range": "± 0.13156339241064546"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 52.817120156117845,
            "unit": "ns",
            "range": "± 0.3526836968801709"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnString(number: \"US79927398713\")",
            "value": 54.36183107325009,
            "unit": "ns",
            "range": "± 0.37912956446099466"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.AlphaNumericToNumericBasedOnSpan(number: \"US79927398713\")",
            "value": 57.340265955243794,
            "unit": "ns",
            "range": "± 0.3555427015426501"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 264.65904334613253,
            "unit": "ns",
            "range": "± 2.1553734009744727"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 246.00404325398532,
            "unit": "ns",
            "range": "± 6.0263408143644055"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"7992-7398-7134\")",
            "value": 258.9999738080161,
            "unit": "ns",
            "range": "± 3.8488681845263684"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"7992-7398-7134\")",
            "value": 243.190931892395,
            "unit": "ns",
            "range": "± 2.7860401548590157"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 716.0945355097452,
            "unit": "ns",
            "range": "± 3.8555440311063887"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 616.3696983973185,
            "unit": "ns",
            "range": "± 11.550661913753688"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnString(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 679.1251178105672,
            "unit": "ns",
            "range": "± 5.242531198586231"
          },
          {
            "name": "LuhnDotNetBenchmark.HelperBenchmark.RemoveSeparatorBasedOnSpan(number: \"79927398/71823423413464564564562456344565463434346254546254654/6245624356245625624565265432\")",
            "value": 586.8113189697266,
            "unit": "ns",
            "range": "± 3.318510330788079"
          }
        ]
      }
    ]
  }
}