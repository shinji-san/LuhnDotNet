window.BENCHMARK_DATA = {
  "lastUpdate": 1750296814501,
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
      }
    ]
  }
}