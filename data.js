window.BENCHMARK_DATA = {
  "lastUpdate": 1735412197114,
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
          "id": "5cb9019aeffe8ab9c62185908d3cbfa22c92e81a",
          "message": "Add benchmarks for LuhnDotNet with BenchmarkDotNet integration\n\nIntroduce a new benchmark project to measure Luhn algorithm performance using BenchmarkDotNet.\nIntegrated the benchmarking setup into the solution, added GitHub Actions workflow for automated runs, and updated `.gitignore` to include BenchmarkDotNet artifacts.\n\nResolves: No entry",
          "timestamp": "2024-12-28T18:49:54+01:00",
          "tree_id": "1db4a203e105d9e19b6e06f55ef43bc9f4a819cb",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/5cb9019aeffe8ab9c62185908d3cbfa22c92e81a"
        },
        "date": 1735408907752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 117.00903061261543,
            "unit": "ns",
            "range": "± 0.4278295761389791"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 118.66259370531354,
            "unit": "ns",
            "range": "± 0.6691567277731348"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 115.56577518781026,
            "unit": "ns",
            "range": "± 0.6407767183609681"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 115.69451333795276,
            "unit": "ns",
            "range": "± 0.4599748468655749"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 685.6532841409955,
            "unit": "ns",
            "range": "± 3.7962949043623753"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 673.7279434937698,
            "unit": "ns",
            "range": "± 2.438341565812986"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 668.1218668864324,
            "unit": "ns",
            "range": "± 1.6659465284761235"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 687.009672164917,
            "unit": "ns",
            "range": "± 2.1410662252610755"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 136.64025807380676,
            "unit": "ns",
            "range": "± 0.8011304074107878"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 135.80877191679818,
            "unit": "ns",
            "range": "± 0.7996325199329783"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 134.27847299575805,
            "unit": "ns",
            "range": "± 0.8359661190547023"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 132.8887219979213,
            "unit": "ns",
            "range": "± 0.50495935932728"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 719.2119419733683,
            "unit": "ns",
            "range": "± 4.470748869530447"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 708.2505872433002,
            "unit": "ns",
            "range": "± 2.8393732524757156"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 711.856229464213,
            "unit": "ns",
            "range": "± 4.99549367568551"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 712.3585038503011,
            "unit": "ns",
            "range": "± 4.239175844944796"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 135.90761443773906,
            "unit": "ns",
            "range": "± 1.0356697186560684"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 136.71018537453241,
            "unit": "ns",
            "range": "± 0.8996826368257137"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 136.2481276512146,
            "unit": "ns",
            "range": "± 1.0565130896932242"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 132.17244393030802,
            "unit": "ns",
            "range": "± 0.7573671027015346"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 682.6372555324009,
            "unit": "ns",
            "range": "± 3.130823182062638"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 680.0010393778483,
            "unit": "ns",
            "range": "± 2.993913714469898"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 639.6709710439046,
            "unit": "ns",
            "range": "± 5.527794228259732"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 617.5233254114787,
            "unit": "ns",
            "range": "± 4.816583298216422"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 113.62385136286417,
            "unit": "ns",
            "range": "± 0.4152396401320214"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 109.94182353360313,
            "unit": "ns",
            "range": "± 0.35121725414162797"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 108.19981729525786,
            "unit": "ns",
            "range": "± 0.5086617662730346"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 108.31566731135051,
            "unit": "ns",
            "range": "± 0.25844588672723995"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 643.3698245366414,
            "unit": "ns",
            "range": "± 4.220365842817648"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 646.2605229695638,
            "unit": "ns",
            "range": "± 4.976001330972381"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 631.3541118621827,
            "unit": "ns",
            "range": "± 3.3258397801829402"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 615.6598134722028,
            "unit": "ns",
            "range": "± 2.313756710125849"
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
          "id": "99d151e2ac59da3245f163b58d04daa709da7145",
          "message": "Add benchmarks for LuhnDotNet with BenchmarkDotNet integration\n\nIntroduce a new benchmark project to measure Luhn algorithm performance using BenchmarkDotNet.\nIntegrated the benchmarking setup into the solution, added GitHub Actions workflow for automated runs, and updated `.gitignore` to include BenchmarkDotNet artifacts.\n\nResolves: No entry",
          "timestamp": "2024-12-28T19:08:40+01:00",
          "tree_id": "f59d340ab1898826ea37907b343c610408bf530c",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/99d151e2ac59da3245f163b58d04daa709da7145"
        },
        "date": 1735410000820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 119.92137250900268,
            "unit": "ns",
            "range": "± 2.0048801304403296"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 120.29604968002864,
            "unit": "ns",
            "range": "± 0.9036450385974035"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 115.88411949078242,
            "unit": "ns",
            "range": "± 0.40416821771778294"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 116.67418942543176,
            "unit": "ns",
            "range": "± 0.46481801514819127"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 687.6469603856405,
            "unit": "ns",
            "range": "± 3.316820160020573"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 678.650644506727,
            "unit": "ns",
            "range": "± 3.619095330284645"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 671.7889509836833,
            "unit": "ns",
            "range": "± 6.037834262736326"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 673.4516477584839,
            "unit": "ns",
            "range": "± 6.735066031198393"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 139.8540859903608,
            "unit": "ns",
            "range": "± 0.8498566998215084"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 135.00124619801838,
            "unit": "ns",
            "range": "± 0.4386118014006194"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 139.1657841205597,
            "unit": "ns",
            "range": "± 0.6332580177776579"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 130.47991027150834,
            "unit": "ns",
            "range": "± 0.9137849856797154"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 710.6317299524943,
            "unit": "ns",
            "range": "± 4.494908565778098"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 710.1838357789176,
            "unit": "ns",
            "range": "± 4.588290174238551"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 699.845797920227,
            "unit": "ns",
            "range": "± 3.0918527179345725"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 709.444710667928,
            "unit": "ns",
            "range": "± 3.0721594361325275"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 140.75804047584535,
            "unit": "ns",
            "range": "± 0.9936900123832424"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 141.06276019414267,
            "unit": "ns",
            "range": "± 1.9887089950349022"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 144.0469263235728,
            "unit": "ns",
            "range": "± 2.59065526387559"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 135.84491585195065,
            "unit": "ns",
            "range": "± 2.63765137597312"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 688.3073616663615,
            "unit": "ns",
            "range": "± 7.716143999902636"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 728.8504436356681,
            "unit": "ns",
            "range": "± 4.173534815267215"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 617.7472037535447,
            "unit": "ns",
            "range": "± 3.1329938493572107"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 623.456856282552,
            "unit": "ns",
            "range": "± 7.258621903144266"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 113.3256835767201,
            "unit": "ns",
            "range": "± 0.5161262132041621"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 111.51044276555379,
            "unit": "ns",
            "range": "± 1.2320762224566189"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 107.20725970665613,
            "unit": "ns",
            "range": "± 0.7810569868652986"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 107.88121504443032,
            "unit": "ns",
            "range": "± 0.8776785110265605"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 631.4495169094631,
            "unit": "ns",
            "range": "± 4.384942931792345"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 645.1557688395183,
            "unit": "ns",
            "range": "± 2.34982395686865"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 634.2189192090716,
            "unit": "ns",
            "range": "± 1.3832898989959561"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 611.2318610463824,
            "unit": "ns",
            "range": "± 2.5139087463760705"
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
          "id": "488d7cfa7dc893d757cb39675a04aeec795424b1",
          "message": "Merge pull request #79 from shinji-san/hotfix-cicdDocAndBenchmark\n\nHotfix - CICD-Pipeline for  documentation and benchmark results\n\nResolves: #79",
          "timestamp": "2024-12-28T19:45:24+01:00",
          "tree_id": "27dc11be527bfa7ff11627a7879a997f2ca6d510",
          "url": "https://github.com/shinji-san/LuhnDotNet/commit/488d7cfa7dc893d757cb39675a04aeec795424b1"
        },
        "date": 1735412196285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 117.83492174318859,
            "unit": "ns",
            "range": "± 1.776560061515761"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 120.61982094446817,
            "unit": "ns",
            "range": "± 1.1360430434185107"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 116.29250333706538,
            "unit": "ns",
            "range": "± 0.607883760135498"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 116.34086285034816,
            "unit": "ns",
            "range": "± 0.6854150690317907"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 687.02254708608,
            "unit": "ns",
            "range": "± 2.5947425785337925"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 690.4497951507568,
            "unit": "ns",
            "range": "± 3.6809890876286238"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 680.4036414282663,
            "unit": "ns",
            "range": "± 6.217372396133326"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 690.3999400456746,
            "unit": "ns",
            "range": "± 4.438261674511557"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 138.94573394457498,
            "unit": "ns",
            "range": "± 1.312205166709976"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 136.9067867120107,
            "unit": "ns",
            "range": "± 0.8352361115820922"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 134.81295202328607,
            "unit": "ns",
            "range": "± 0.6163783803064233"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 130.40878218870895,
            "unit": "ns",
            "range": "± 0.5902267276013111"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 712.4498096466065,
            "unit": "ns",
            "range": "± 4.173228762821761"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 771.5439160891941,
            "unit": "ns",
            "range": "± 3.8893751319500565"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 714.8619352340698,
            "unit": "ns",
            "range": "± 4.804765251727426"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.ComputeLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 715.6125079563686,
            "unit": "ns",
            "range": "± 4.575889404064557"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 136.08185652097066,
            "unit": "ns",
            "range": "± 1.2359797000525223"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 136.80141736779893,
            "unit": "ns",
            "range": "± 0.6363269235694928"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398713\")",
            "value": 133.86950456301372,
            "unit": "ns",
            "range": "± 0.9111942702503979"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398713\")",
            "value": 134.57602858543396,
            "unit": "ns",
            "range": "± 1.2151518665147274"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 685.8146253994533,
            "unit": "ns",
            "range": "± 3.5185526822856845"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 691.1042680104573,
            "unit": "ns",
            "range": "± 5.633071703374362"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 621.843057568868,
            "unit": "ns",
            "range": "± 5.431661665582485"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnCheckDigitBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 619.3388103485107,
            "unit": "ns",
            "range": "± 6.337613625852254"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 110.81939379068521,
            "unit": "ns",
            "range": "± 0.46759806546679344"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 110.52947797094073,
            "unit": "ns",
            "range": "± 0.610072794091111"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398713\")",
            "value": 108.2112722822598,
            "unit": "ns",
            "range": "± 0.6758513907757592"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398713\")",
            "value": 108.47535361562457,
            "unit": "ns",
            "range": "± 0.3735820232073279"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 641.4769605000814,
            "unit": "ns",
            "range": "± 5.430645201769068"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 644.0598495483398,
            "unit": "ns",
            "range": "± 3.79184898239249"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnString(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 631.4007896276621,
            "unit": "ns",
            "range": "± 1.60457883145846"
          },
          {
            "name": "LuhnDotNetBenchmark.LuhnDotNetBenchmark.IsValidLuhnNumberBasedOnSpan(number: \"79927398718234234134645645645624563445654634343462545462546546245624356245625624565265432\")",
            "value": 613.1567932537624,
            "unit": "ns",
            "range": "± 2.378568505981155"
          }
        ]
      }
    ]
  }
}