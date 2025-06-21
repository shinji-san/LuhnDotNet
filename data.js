window.BENCHMARK_DATA = {
  "lastUpdate": 1750518007579,
  "repoUrl": "https://github.com/shinji-san/LuhnDotNet",
  "entries": {
    "Analyze Mod11AscendingWeights benchmark results": [
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
        "date": 1750296814053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 414.26511375720685,
            "unit": "ns",
            "range": "± 0.7649336213820125"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 378.77929728371754,
            "unit": "ns",
            "range": "± 1.1301730982521883"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 384.03461371149336,
            "unit": "ns",
            "range": "± 1.318173612857465"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 361.6946925383348,
            "unit": "ns",
            "range": "± 0.9712444516231507"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 405.1757800919669,
            "unit": "ns",
            "range": "± 1.9104904056144387"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 371.95324288881744,
            "unit": "ns",
            "range": "± 0.6293121258823436"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 379.23269752355725,
            "unit": "ns",
            "range": "± 0.9647278503003204"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 359.37925122334406,
            "unit": "ns",
            "range": "± 0.8126824132837689"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 20.873198491334914,
            "unit": "ns",
            "range": "± 0.03834870378793693"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 20.875310345490774,
            "unit": "ns",
            "range": "± 0.038765295500935014"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 18.067452132701874,
            "unit": "ns",
            "range": "± 0.04087419684334627"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 17.773070659240087,
            "unit": "ns",
            "range": "± 0.05886511245309127"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.04954107318606,
            "unit": "ns",
            "range": "± 1.5378272004851636"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.09895799954732,
            "unit": "ns",
            "range": "± 0.21118330762756798"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.94440733469449,
            "unit": "ns",
            "range": "± 0.15696093266094846"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.71496641635895,
            "unit": "ns",
            "range": "± 0.1249428431790288"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 46.41822731920651,
            "unit": "ns",
            "range": "± 0.1759838934989906"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 47.0375050008297,
            "unit": "ns",
            "range": "± 0.20314427440146182"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 42.22724555929502,
            "unit": "ns",
            "range": "± 0.05550463813164163"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 42.30049829299633,
            "unit": "ns",
            "range": "± 0.08725302352567249"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 179.15691123689925,
            "unit": "ns",
            "range": "± 1.746766916099752"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 163.75217485427856,
            "unit": "ns",
            "range": "± 0.46752442660570814"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 139.05732424259185,
            "unit": "ns",
            "range": "± 0.849215984430946"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 149.7842392371251,
            "unit": "ns",
            "range": "± 0.31745286427347996"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 27.12892134487629,
            "unit": "ns",
            "range": "± 0.054427967783250104"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 27.156730143229165,
            "unit": "ns",
            "range": "± 0.0542868094759257"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 24.601851917230167,
            "unit": "ns",
            "range": "± 0.0344740992955837"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 24.64417659640312,
            "unit": "ns",
            "range": "± 0.04888268887454289"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.46624989509583,
            "unit": "ns",
            "range": "± 0.23822315600852517"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 132.11810124715169,
            "unit": "ns",
            "range": "± 0.45797247202300007"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.84833958546321,
            "unit": "ns",
            "range": "± 0.25528010563753223"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.7187659910747,
            "unit": "ns",
            "range": "± 0.17542747893276708"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 18.69732914964358,
            "unit": "ns",
            "range": "± 0.03701890168032465"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 18.699492025375367,
            "unit": "ns",
            "range": "± 0.044058135081513655"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 17.112018163387592,
            "unit": "ns",
            "range": "± 0.003543065234545712"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 17.13899106638772,
            "unit": "ns",
            "range": "± 0.04003769398746263"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.22877432902654,
            "unit": "ns",
            "range": "± 0.7189311892574972"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.38313782215118,
            "unit": "ns",
            "range": "± 2.00094157075751"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 82.45013939482826,
            "unit": "ns",
            "range": "± 0.24611066579032304"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 82.62185251315435,
            "unit": "ns",
            "range": "± 0.43231932689207486"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 366.6767670924847,
            "unit": "ns",
            "range": "± 0.8811476956675748"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 524.2015971403855,
            "unit": "ns",
            "range": "± 1.210187320895215"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 354.39428721941437,
            "unit": "ns",
            "range": "± 0.7541320631969579"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 326.44618288675946,
            "unit": "ns",
            "range": "± 0.2105027112546667"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 367.4306389944894,
            "unit": "ns",
            "range": "± 1.1681754783914569"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 330.52068192618236,
            "unit": "ns",
            "range": "± 1.4585905506908543"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 346.2996676885165,
            "unit": "ns",
            "range": "± 1.016981451229946"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 328.5088916191688,
            "unit": "ns",
            "range": "± 0.6216524242717959"
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
        "date": 1750518007263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 420.5891157899584,
            "unit": "ns",
            "range": "± 1.2618649610952537"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 375.07766114748443,
            "unit": "ns",
            "range": "± 0.3718911362629902"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 402.05842535836354,
            "unit": "ns",
            "range": "± 1.8798228788229778"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 364.24181480407714,
            "unit": "ns",
            "range": "± 1.5644824013006156"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 459.0297924555265,
            "unit": "ns",
            "range": "± 1.0728794935894386"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 372.74495990459735,
            "unit": "ns",
            "range": "± 1.0899509752761298"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 376.9588458878653,
            "unit": "ns",
            "range": "± 0.7862720512579072"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 361.28276777267456,
            "unit": "ns",
            "range": "± 1.124815230264691"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 20.875033642848333,
            "unit": "ns",
            "range": "± 0.04813813285030625"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 20.87730676929156,
            "unit": "ns",
            "range": "± 0.06281920507946741"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 18.04464950909217,
            "unit": "ns",
            "range": "± 0.00606887634100373"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 17.73108795285225,
            "unit": "ns",
            "range": "± 0.01827881850880701"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.20444630781809,
            "unit": "ns",
            "range": "± 1.1488165738393004"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 113.65740715605872,
            "unit": "ns",
            "range": "± 1.210382944578122"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.94352197188597,
            "unit": "ns",
            "range": "± 0.09769061696830036"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.70909095605215,
            "unit": "ns",
            "range": "± 0.20708741405864645"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 47.05627245988165,
            "unit": "ns",
            "range": "± 0.2573496281980328"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 45.85563529531161,
            "unit": "ns",
            "range": "± 0.35885522142048076"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 42.98152430699422,
            "unit": "ns",
            "range": "± 0.2964515997882839"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 43.93781001766523,
            "unit": "ns",
            "range": "± 0.534584213558773"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 172.34693015416462,
            "unit": "ns",
            "range": "± 1.8904102755558494"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 167.0755349477132,
            "unit": "ns",
            "range": "± 2.9182337784458725"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 139.82469100952147,
            "unit": "ns",
            "range": "± 0.9602207544407861"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 149.71823400717514,
            "unit": "ns",
            "range": "± 0.49514102416613204"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 27.089640357664653,
            "unit": "ns",
            "range": "± 0.03504570272860975"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 27.22467100818952,
            "unit": "ns",
            "range": "± 0.06214026809873659"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 24.60245642463366,
            "unit": "ns",
            "range": "± 0.04012616011240735"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 24.639637525876363,
            "unit": "ns",
            "range": "± 0.058349152684835884"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 132.22415784200032,
            "unit": "ns",
            "range": "± 0.4141725062690658"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.2395982827459,
            "unit": "ns",
            "range": "± 0.2231805394281353"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.79736519257227,
            "unit": "ns",
            "range": "± 0.2075453198271795"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.93235701322556,
            "unit": "ns",
            "range": "± 0.20315254479698092"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 18.659724175930023,
            "unit": "ns",
            "range": "± 0.03838611608146831"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 18.719735214343437,
            "unit": "ns",
            "range": "± 0.09345674326558728"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 19.221149393490382,
            "unit": "ns",
            "range": "± 0.03352762373371519"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 19.2427128692468,
            "unit": "ns",
            "range": "± 0.03411951618096747"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.59010230700174,
            "unit": "ns",
            "range": "± 1.6259442540118347"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 117.24836667776108,
            "unit": "ns",
            "range": "± 0.7243738387718023"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 89.45389493022647,
            "unit": "ns",
            "range": "± 0.7209510203989977"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 82.57909773985544,
            "unit": "ns",
            "range": "± 0.3984501876233354"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 389.2706271489461,
            "unit": "ns",
            "range": "± 4.328955936515919"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 342.5702662150065,
            "unit": "ns",
            "range": "± 3.3072725355347625"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 356.259510244642,
            "unit": "ns",
            "range": "± 2.2172139166251914"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 322.45367471988385,
            "unit": "ns",
            "range": "± 0.8470077772014074"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 368.90421893046454,
            "unit": "ns",
            "range": "± 0.5513106278634994"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 336.7027447564261,
            "unit": "ns",
            "range": "± 1.3910780261263593"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 341.8897277025076,
            "unit": "ns",
            "range": "± 0.7404083679387813"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 327.93470775164093,
            "unit": "ns",
            "range": "± 0.8686782430966773"
          }
        ]
      }
    ]
  }
}