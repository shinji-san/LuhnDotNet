window.BENCHMARK_DATA = {
  "lastUpdate": 1735407647661,
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
          "id": "001c4d6e237203b432af1f134cb23a49ff7de880",
          "message": "Add benchmarks for LuhnDotNet with BenchmarkDotNet integration\n\nIntroduce a new benchmark project to measure Luhn algorithm performance using BenchmarkDotNet.\nIntegrated the benchmarking setup into the solution, added GitHub Actions workflow for automated runs, and updated `.gitignore` to include BenchmarkDotNet artifacts.\n\nResolves: No entry",
          "timestamp": "2024-12-28T16:12:03+01:00",
          "tree_id": "a1b37ace1a7d962b396bbf024474341671b90fcc",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/001c4d6e237203b432af1f134cb23a49ff7de880"
        },
        "date": 1735399394253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 117.15191047986349,
            "unit": "ns",
            "range": "± 1.5365814437483107"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 119.7825234413147,
            "unit": "ns",
            "range": "± 1.7853989255024136"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 116.00732507705689,
            "unit": "ns",
            "range": "± 0.8575508658174115"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 115.24147166197116,
            "unit": "ns",
            "range": "± 0.43252574670256216"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 685.6481501897176,
            "unit": "ns",
            "range": "± 3.710628225361492"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 686.2159081141155,
            "unit": "ns",
            "range": "± 3.2558466546085127"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 673.5304337819417,
            "unit": "ns",
            "range": "± 4.6106562696176585"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 694.9347094217936,
            "unit": "ns",
            "range": "± 7.58496836747363"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 136.37988917644208,
            "unit": "ns",
            "range": "± 0.3478598547624088"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 134.60298100539617,
            "unit": "ns",
            "range": "± 0.5197196972723012"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 139.14626242433275,
            "unit": "ns",
            "range": "± 0.9187759392907271"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 129.27675515810648,
            "unit": "ns",
            "range": "± 0.6833715469802115"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 699.0445175170898,
            "unit": "ns",
            "range": "± 3.3228100787141686"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 711.0661772319248,
            "unit": "ns",
            "range": "± 3.7359671155981116"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 709.7175887652805,
            "unit": "ns",
            "range": "± 3.610194273520097"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 699.8943989617484,
            "unit": "ns",
            "range": "± 3.5310699029942962"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 133.88796059290567,
            "unit": "ns",
            "range": "± 0.7459146531959088"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 134.39500526281503,
            "unit": "ns",
            "range": "± 0.5688430722767643"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 138.79808077812194,
            "unit": "ns",
            "range": "± 2.2323873229173574"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 140.0631388425827,
            "unit": "ns",
            "range": "± 0.8670713215358407"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 682.4402353922526,
            "unit": "ns",
            "range": "± 3.5102436778844477"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 672.463939666748,
            "unit": "ns",
            "range": "± 2.1081315962673632"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 616.5225029672895,
            "unit": "ns",
            "range": "± 3.9813758406397537"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 635.884490331014,
            "unit": "ns",
            "range": "± 3.305123962887331"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 113.24613520077297,
            "unit": "ns",
            "range": "± 0.5372298556966766"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 109.64391924784734,
            "unit": "ns",
            "range": "± 0.27656304931668824"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 107.54936901160649,
            "unit": "ns",
            "range": "± 0.47268773291960015"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 108.29084060873303,
            "unit": "ns",
            "range": "± 0.5349473082033569"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 630.9139972686768,
            "unit": "ns",
            "range": "± 4.392720074391237"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 638.8512887954712,
            "unit": "ns",
            "range": "± 4.2455762675010975"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 628.4977132357084,
            "unit": "ns",
            "range": "± 1.3518109290679956"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 615.2527753194173,
            "unit": "ns",
            "range": "± 5.26641873516785"
          }
        ]
      },
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
          "id": "d7b363511cbfa609b6adcba48168e2d28c57209b",
          "message": "Add benchmarks for LuhnDotNet with BenchmarkDotNet integration\n\nIntroduce a new benchmark project to measure Luhn algorithm performance using BenchmarkDotNet.\nIntegrated the benchmarking setup into the solution, added GitHub Actions workflow for automated runs, and updated `.gitignore` to include BenchmarkDotNet artifacts.\n\nResolves: No entry",
          "timestamp": "2024-12-28T18:29:00+01:00",
          "tree_id": "ba4d6e47b300efa9e5885d6982ea17086756ce7c",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/d7b363511cbfa609b6adcba48168e2d28c57209b"
        },
        "date": 1735407647179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 122.03504633903503,
            "unit": "ns",
            "range": "± 0.9782077097183747"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 119.75184197085244,
            "unit": "ns",
            "range": "± 0.8248494914532861"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 116.5693154056867,
            "unit": "ns",
            "range": "± 0.5167780624561543"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 117.33934319019318,
            "unit": "ns",
            "range": "± 0.6480022126697457"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 721.2629650556124,
            "unit": "ns",
            "range": "± 1.7864061464433962"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 679.219229443868,
            "unit": "ns",
            "range": "± 7.076846839655966"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 675.7690085002354,
            "unit": "ns",
            "range": "± 3.5284105305915374"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 690.8866490681966,
            "unit": "ns",
            "range": "± 2.133058590479982"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 140.48438433011373,
            "unit": "ns",
            "range": "± 2.429551701515943"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 133.83717659314473,
            "unit": "ns",
            "range": "± 1.5523628063217025"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 141.48739301363628,
            "unit": "ns",
            "range": "± 1.0658474464999552"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 131.80486815770468,
            "unit": "ns",
            "range": "± 1.2528049171343671"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 740.7553138051715,
            "unit": "ns",
            "range": "± 2.4994818904055163"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 762.8191186359951,
            "unit": "ns",
            "range": "± 6.18347735248703"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 718.7912867863973,
            "unit": "ns",
            "range": "± 4.444557298565546"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 699.7477026666913,
            "unit": "ns",
            "range": "± 3.364770932057242"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 136.70068749359675,
            "unit": "ns",
            "range": "± 1.0351770249477255"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 138.11876458781106,
            "unit": "ns",
            "range": "± 0.9702079062980397"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 133.3119226137797,
            "unit": "ns",
            "range": "± 0.7387651012604837"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 134.82006386121114,
            "unit": "ns",
            "range": "± 0.6278252576459498"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 677.1449628829956,
            "unit": "ns",
            "range": "± 3.211171681026679"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 683.9064007486616,
            "unit": "ns",
            "range": "± 3.3019711580317814"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 619.9090018639198,
            "unit": "ns",
            "range": "± 2.555425965409965"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 629.7194753011067,
            "unit": "ns",
            "range": "± 4.3673234210529355"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 112.9590363184611,
            "unit": "ns",
            "range": "± 0.4525688267519581"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 113.06759072939555,
            "unit": "ns",
            "range": "± 1.6017495919637836"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 112.25508190393448,
            "unit": "ns",
            "range": "± 0.3706446438567533"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 109.66579556465149,
            "unit": "ns",
            "range": "± 0.3399100571358646"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 670.2801370620728,
            "unit": "ns",
            "range": "± 1.5889832908125423"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 647.1912995974222,
            "unit": "ns",
            "range": "± 1.4352519718649568"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 634.6520481745403,
            "unit": "ns",
            "range": "± 3.1733585400189566"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 614.2129300435384,
            "unit": "ns",
            "range": "± 2.61710567584991"
          }
        ]
      }
    ]
  }
}