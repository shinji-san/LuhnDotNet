window.BENCHMARK_DATA = {
  "lastUpdate": 1750521937594,
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
        "date": 1750521361130,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 447.5038631439209,
            "unit": "ns",
            "range": "± 8.246240130125353"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 380.2808810869853,
            "unit": "ns",
            "range": "± 2.5657200059972847"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 407.65783999760947,
            "unit": "ns",
            "range": "± 6.294574079162051"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 359.51982803344725,
            "unit": "ns",
            "range": "± 1.972497577051533"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 403.8688212462834,
            "unit": "ns",
            "range": "± 0.9481258856742869"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 366.8241057395935,
            "unit": "ns",
            "range": "± 1.1363290004627082"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 381.289557831628,
            "unit": "ns",
            "range": "± 1.3117079994146437"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 362.0797083718436,
            "unit": "ns",
            "range": "± 0.9904205260149791"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 20.85134643316269,
            "unit": "ns",
            "range": "± 0.006920922115608838"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 20.85157195230325,
            "unit": "ns",
            "range": "± 0.010018215855764338"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 18.073559733231864,
            "unit": "ns",
            "range": "± 0.03794835676971426"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 17.76046324968338,
            "unit": "ns",
            "range": "± 0.043999116990271835"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 130.92950105667114,
            "unit": "ns",
            "range": "± 0.4636740754843044"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 99.61793543533845,
            "unit": "ns",
            "range": "± 2.4215101649859307"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.94312379910396,
            "unit": "ns",
            "range": "± 0.08003121100918376"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.91519794066747,
            "unit": "ns",
            "range": "± 0.25690120373547476"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 44.80310968841825,
            "unit": "ns",
            "range": "± 0.17040763911401444"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 44.89102095365524,
            "unit": "ns",
            "range": "± 0.12352892082247223"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 42.97237566964967,
            "unit": "ns",
            "range": "± 0.4356350390127084"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 43.30500308076541,
            "unit": "ns",
            "range": "± 0.5693276611453766"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 167.97521618207296,
            "unit": "ns",
            "range": "± 1.7124012219763547"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 167.99659678141276,
            "unit": "ns",
            "range": "± 2.819272544934844"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 138.89529026471652,
            "unit": "ns",
            "range": "± 0.39948474877328444"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 150.1039775780269,
            "unit": "ns",
            "range": "± 0.7433294559665724"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 27.133891147375106,
            "unit": "ns",
            "range": "± 0.05093834161877979"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 27.157114245494206,
            "unit": "ns",
            "range": "± 0.054307004796944156"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 24.644140485922495,
            "unit": "ns",
            "range": "± 0.07965332488782303"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 24.644399267435073,
            "unit": "ns",
            "range": "± 0.06764926053116867"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.64456295569738,
            "unit": "ns",
            "range": "± 0.5514289252547863"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.32458628926959,
            "unit": "ns",
            "range": "± 0.41339908359711786"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.91304181303296,
            "unit": "ns",
            "range": "± 0.2249167112027074"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.90778268178305,
            "unit": "ns",
            "range": "± 0.3101388553976637"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 18.718451070785523,
            "unit": "ns",
            "range": "± 0.054669052364291565"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 18.725718569755553,
            "unit": "ns",
            "range": "± 0.06565965984871093"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 19.2452248526471,
            "unit": "ns",
            "range": "± 0.03448775960399204"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 19.24870648185412,
            "unit": "ns",
            "range": "± 0.04180942116580432"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.03600251674652,
            "unit": "ns",
            "range": "± 0.47361244915725426"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.23669698146674,
            "unit": "ns",
            "range": "± 0.41182809737914533"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 82.70917981465658,
            "unit": "ns",
            "range": "± 0.4965115731724452"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 90.76686956485112,
            "unit": "ns",
            "range": "± 0.29298673957254673"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 377.10982973234997,
            "unit": "ns",
            "range": "± 3.901258902544941"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 358.10997567858016,
            "unit": "ns",
            "range": "± 3.754197153311764"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 371.6206573486328,
            "unit": "ns",
            "range": "± 4.046519555775186"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 322.66640583674115,
            "unit": "ns",
            "range": "± 0.4739462850827769"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 373.6185437951769,
            "unit": "ns",
            "range": "± 1.485487817828714"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 332.02572180430093,
            "unit": "ns",
            "range": "± 1.5934144818683864"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 345.65552646773205,
            "unit": "ns",
            "range": "± 1.1203996547924224"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 316.927910217872,
            "unit": "ns",
            "range": "± 0.8344017701480685"
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
        "date": 1750521937257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 445.08863204717636,
            "unit": "ns",
            "range": "± 8.076260159462063"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 407.67783540089926,
            "unit": "ns",
            "range": "± 4.985756879261101"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 411.9946718851725,
            "unit": "ns",
            "range": "± 6.794366127997111"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 389.0207696914673,
            "unit": "ns",
            "range": "± 5.800696367999756"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 424.54656062807356,
            "unit": "ns",
            "range": "± 2.5232076883643972"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 397.316691160202,
            "unit": "ns",
            "range": "± 5.410100987103739"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 412.73185720443723,
            "unit": "ns",
            "range": "± 3.8117115714155463"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 363.75065484046934,
            "unit": "ns",
            "range": "± 6.7470501268492695"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 20.89316282272339,
            "unit": "ns",
            "range": "± 0.05591463273917775"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 20.89655572573344,
            "unit": "ns",
            "range": "± 0.06373397920156718"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"0631942\")",
            "value": 18.08226660490036,
            "unit": "ns",
            "range": "± 0.04246470809557293"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 17.754762690800888,
            "unit": "ns",
            "range": "± 0.037688533221926154"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 114.11814603635243,
            "unit": "ns",
            "range": "± 1.074316914790129"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 113.51318095525106,
            "unit": "ns",
            "range": "± 1.9659353285346153"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 84.14250859419505,
            "unit": "ns",
            "range": "± 0.2923893746141139"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 83.65833418709892,
            "unit": "ns",
            "range": "± 0.058486726215101044"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 47.820538823093685,
            "unit": "ns",
            "range": "± 0.11023986197840514"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 46.87884927647455,
            "unit": "ns",
            "range": "± 0.20734350192976883"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"0631942\")",
            "value": 43.695825187365216,
            "unit": "ns",
            "range": "± 0.40595944864328853"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"0631942\")",
            "value": 43.41392792463303,
            "unit": "ns",
            "range": "± 0.4221196820552565"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 169.03654631546564,
            "unit": "ns",
            "range": "± 2.751203033135359"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 183.86293511390687,
            "unit": "ns",
            "range": "± 2.5413464664791428"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 142.72360748904092,
            "unit": "ns",
            "range": "± 1.3915922294795886"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ComputeNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 156.96926393508912,
            "unit": "ns",
            "range": "± 1.1610699648655003"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 27.13623846428735,
            "unit": "ns",
            "range": "± 0.06948952055863818"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 27.139355254173278,
            "unit": "ns",
            "range": "± 0.06686928325736338"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"0631942\")",
            "value": 24.624140415872848,
            "unit": "ns",
            "range": "± 0.0485912435152571"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"0631942\")",
            "value": 24.62331566427435,
            "unit": "ns",
            "range": "± 0.04188907226208274"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.04732034603755,
            "unit": "ns",
            "range": "± 0.29173282311260307"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.3758536418279,
            "unit": "ns",
            "range": "± 0.5591077907450027"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.68910967111587,
            "unit": "ns",
            "range": "± 0.2385727120121743"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidCheckDigitBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 107.87001630434624,
            "unit": "ns",
            "range": "± 0.25385696458236034"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 18.72677342693011,
            "unit": "ns",
            "range": "± 0.06494811353876925"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 18.72843641468457,
            "unit": "ns",
            "range": "± 0.078874651332705"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"0631942\")",
            "value": 17.163973021507264,
            "unit": "ns",
            "range": "± 0.06518958014893006"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"0631942\")",
            "value": 17.119427583614986,
            "unit": "ns",
            "range": "± 0.02375704634081887"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 103.15657700300217,
            "unit": "ns",
            "range": "± 1.8399551195789434"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 116.06213526328405,
            "unit": "ns",
            "range": "± 2.166367425786486"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnString(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 89.14713673932212,
            "unit": "ns",
            "range": "± 0.2259994887290689"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.IsValidNumberBasedOnSpan(number: \"312517154312517154312517154312517154312517154312517154\")",
            "value": 90.78609211444855,
            "unit": "ns",
            "range": "± 0.2854852088840786"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 390.82520110790546,
            "unit": "ns",
            "range": "± 1.0092707395080962"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 373.270129607274,
            "unit": "ns",
            "range": "± 1.5742755682722982"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"A7992-B7398-C7134\")",
            "value": 505.59321689605713,
            "unit": "ns",
            "range": "± 2.7685918410808776"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"A7992-B7398-C7134\")",
            "value": 353.3553805215018,
            "unit": "ns",
            "range": "± 11.444270834441872"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 387.4461081504822,
            "unit": "ns",
            "range": "± 5.416496161198946"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 359.2250048955282,
            "unit": "ns",
            "range": "± 5.552469680924418"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnString(number: \"US-7992-7398-7134\")",
            "value": 381.4323533376058,
            "unit": "ns",
            "range": "± 3.210707402235778"
          },
          {
            "name": "LuhnDotNetBenchmark.Mod11AscendingWeightBenchmark.ValidationChainBasedOnSpan(number: \"US-7992-7398-7134\")",
            "value": 363.3470588684082,
            "unit": "ns",
            "range": "± 3.282316459219564"
          }
        ]
      }
    ]
  }
}