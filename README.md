# LuhnDotNet
![LuhnDotNet Logo](images/social-media-preview.png)

A C# implementation of the Luhn algorithm and other check digit algorithms, which can be used to validate identification numbers like credit card numbers, International Securities Identification Numbers (ISINs), ISBN, PZN and more.

The Luhn algorithm is a checksum formula used to validate identification numbers like credit card numbers. It works by doubling every second digit from the right, summing all the digits, and checking if the total is a multiple of 10. It's widely used and is specified in ISO/IEC 7812-1.

The Modulo 11 algorithm with ascending weights is another checksum formula used to validate identification numbers like PZN (Pharmazentralnummer) and ISBN-10. It works by multiplying each digit by a weight, summing the results, and calculating the check digit based on the modulo 11 of the sum.

# Build & Test Status Of Default Branch
<table>
  <thead>
    <tr>
        <th>Status</th>
        <th>Solution</th>
        <th>Project Format</th>
        <th>.NET Version</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td rowspan=9><a href ="https://github.com/shinji-san/LuhnDotNet/actions/workflows/dotnetall.yml" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/actions/workflows/dotnetall.yml/badge.svg?branch=main" alt="Build status"/></a></td>
          <td rowspan=9><code>LuhnDotNet.sln</code></td>
          <td rowspan=9>SDK</td>
          <td>Standard 2.0</td>
      </tr>
      <tr>
          <td>Standard 2.1</td>
      </tr>
      <tr>
          <td>FX 4.6.2</td>
      </tr>
      <tr>
          <td>FX 4.7</td>
      </tr>
      <tr>
          <td>FX 4.7.1</td>
      </tr>
      <tr>
          <td>FX 4.7.2</td>
      </tr>
      <tr>
          <td>FX 4.8</td>
      </tr>
      <tr>
          <td>.NET 8</td>
      </tr>
      <tr>
          <td>.NET 9</td>
      </tr>
  </tbody>
</table>

# NuGet
## Supported Target Frameworks
<table>
  <thead>
    <tr>
        <th>Build And Test Status</th>
        <th>NuGet Version</th>
        <th>Git Tag</th>
        <th>Target Frameworks</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td rowspan=9><a href="https://github.com/shinji-san/LuhnDotNet/actions/workflows/publishing.yml" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/actions/workflows/publishing.yml/badge.svg" alt="LuhnDotNet - NuGet Publishing"/></a></td>
          <td rowspan=9><a href="https://badge.fury.io/nu/LuhnDotNet" target="_blank"><img src="https://badge.fury.io/nu/LuhnDotNet.svg" alt="NuGet Version 2.0.1"/></a></td>
          <td rowspan=9><a href="https://github.com/shinji-san/LuhnDotNet/tree/v2.0.1" target="_blank"><img src="https://img.shields.io/badge/LuhnDotNet-2.0.1-green.svg?logo=github&logoColor=959da5&color=2ebb4e&labelColor=2b3137" alt="Tag"/></a></td>
          <td>.NET 8</td>
      </tr>
      <tr>
          <td>.NET 9</td>
      </tr>
      <tr>
          <td>Standard 2.0</td>
      </tr>
      <tr>
          <td>Standard 2.1</td>
      </tr>
      <tr>
          <td>FX 4.6.2</td>
      </tr>
      <tr>
          <td>FX 4.7</td>
      </tr>
      <tr>
          <td>FX 4.7.1</td>
      </tr>
      <tr>
          <td>FX 4.7.2</td>
      </tr>
      <tr>
          <td>FX 4.8</td>
      </tr>
  </tbody>
</table>

## Install LuhnDotNet package

1. Open a console and switch to the directory, containing your project file.

2. Use the following command to install version 2.0.1 of the LuhnDotNet package:

    ```dotnetcli
    dotnet add package LuhnDotNet -v 2.0.1 -f <FRAMEWORK>
    ```

3. After the completion of the command, look at the project file to make sure that the package is successfully installed.

   You can open the `.csproj` file to see the added package reference:

    ```xml
    <ItemGroup>
      <PackageReference Include="LuhnDotNet" Version="2.0.1" />
    </ItemGroup>
    ```
## Remove LuhnDotNet package

1. Open a console and switch to the directory, containing your project file.

2. Use the following command to remove the LuhnDotNet package:

    ```dotnetcli
    dotnet remove package LuhnDotNet
    ```

3. After the completion of the command, look at the project file to make sure that the package is successfuly removed.

   You can open the `.csproj` file to check the deleted package reference.

# API Documentation
You can find the API documentation [here](https://sebastian-walther.de/LuhnDotNet/api/LuhnDotNet.html).

# Usage
| Identification Number                                   | Check Digit Algorithm            |
|---------------------------------------------------------|----------------------------------|
| Credit Card Number                                      | Luhn                             |
| International Securities Identification Number (ISIN)   | Luhn                             |
| Deutsche Bahn AG (DB) locomotive number                 | Luhn                             |
| UIC identification marking for tractive stock           | Luhn                             |
| New Format for Singapore IP Application Numbers at IPOS | Damm                             |
| German Pharmazentralnummer (PZN)                        | Modulo 11 with ascending weights |
| Austrian Pharmazentralnummer (PZN)                      | Modulo 11 with ascending weights |
| ISBN-10                                                 | Modulo 11 with ascending weights |

## Luhn Algorithm
### Compute the Luhn check digit
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var checkDigit = "37828224631000".ComputeLuhnCheckDigit();
            //// Must be 5
            Console.WriteLine(checkDigit);
        }
    }
}
```

### Compute the Luhn number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var luhnNumber = "37828224631000".ComputeLuhnNumber();
            //// Must be 378282246310005
            Console.WriteLine(luhnNumber);
        }
    }
}
```

### Validate Luhn number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var isValid = "378282246310005".IsValidLuhnNumber();
            //// Must be 'true'
            Console.WriteLine(isValid);
        }
    }
}
```

### Validate number and corresponding Luhn check digit
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example4
{
    public class Program
    {
        public static void Main(string[] args)
        {
            char checkDigit = '5';
            var isValid = checkDigit.IsValidLuhnCheckDigit("37828224631000");
            //// Must be 'true'
            Console.WriteLine(isValid);
        }
    }
}
```

### Validate ISIN with LuhnDotNet and AlphaNumericToNumeric

The `LuhnDotNet` library can be used in combination with the `AlphaNumericToNumeric` method to validate an International Securities Identification Number (ISIN). An ISIN uniquely identifies a security, such as stocks, bonds or derivatives. It is a 12-character alphanumeric code.

The `AlphaNumericToNumeric` method is used to convert the alphanumeric ISIN to a numeric string, where each letter in the input string is replaced by its decimal ASCII value minus 55. This numeric string can then be validated using the `Luhn.IsValid` method.

Here is an example of how to use these methods to validate an ISIN:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example5
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isin = "US0378331005";
            bool isValid = isin.AlphaNumericToNumeric().IsValidLuhnNumber();
            Console.WriteLine($"The ISIN {isin} is valid: {isValid}");
        }
    }
}
```
### Compute ISIN Check Digit with LuhnDotNet and AlphaNumericToNumeric

The `LuhnDotNet` library provides the `ComputeLuhnCheckDigit` method which can be used to compute the check digit of a numeric string according to the Luhn algorithm. When dealing with an International Securities Identification Number (ISIN), which is a 12-character alphanumeric code, we first need to convert the alphanumeric ISIN to a numeric string. This can be achieved using the `AlphaNumericToNumeric` method.

Here is an example of how to compute the check digit of an ISIN:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example6
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isinWithoutCheckDigit = "US037833100";
            char checkDigit = isinWithoutCheckDigit.AlphaNumericToNumeric().ComputeLuhnCheckDigit();
            Console.WriteLine($"The check digit for ISIN {isinWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```

### Compute credit card number with LuhnDotNet
The `LuhnDotNet` library can be used to compute the check digit of a credit card number. The check digit is the last digit of the credit card number, which is used to validate the number according to the Luhn algorithm.

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example7
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string creditCardNumberWithoutCheckDigit = "4417 1234 5678 911".RemoveSeparators();
            char checkDigit = creditCardNumberWithoutCheckDigit.ComputeLuhnCheckDigit();
            Console.WriteLine($"The check digit for credit card number {creditCardNumberWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```

### Validate credit card number with LuhnDotNet
The `LuhnDotNet` library can be used to validate a credit card number according to the Luhn algorithm. The `IsValid` method returns `true` if the credit card number is valid, and `false` otherwise.

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Luhn;

namespace Example8
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string creditCardNumber = "4417 1234 5678 9113".RemoveSeparators();
            bool isValid = creditCardNumber.IsValidLuhnNumber();
            Console.WriteLine($"The credit card number {creditCardNumber} is valid: {isValid}");
        }
    }
}
```
## Modulo 11 Algorithm with ascending weights
This implementation uses sum modulo 11 as a direct remainder and can't be used for ISSN.
### Compute the Modulo 11 check digit
```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example9
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var checkDigit = "809027341".ComputeMod11CheckDigit();
            //// Must be 6
            Console.WriteLine(checkDigit);
        }
    }
}
```

### Compute the Modulo 11 number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example10
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var mod11Number = "809027341".ComputeMod11Number();
            //// Must be 8090273416
            Console.WriteLine(mod11Number);
        }
    }
}
```
### Validate Modulo 11 number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example11
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var isValid = "8090273416".IsValidMod11Number();
            //// Must be 'true'
            Console.WriteLine(isValid);
        }
    }
}
```
### Validate number and corresponding Modulo 11 check digit
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example12
{
    public class Program
    {
        public static void Main(string[] args)
        {
            char checkDigit = '6';
            var isValid = checkDigit.IsValidMod11CheckDigit("809027341");
            //// Must be 'true'
            Console.WriteLine(isValid);
        }
    }
}
```
### Validate PZN with Modulo 11
The `LuhnDotNet` library can also be used to validate a Pharmazentralnummer (PZN), which is a unique identifier for pharmaceuticals in Germany. The PZN is a 8-digit number, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to validate a PZN using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example13
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string pzn = "06789572";
            bool isValid = pzn.IsValidMod11Number();
            Console.WriteLine($"The German PZN {pzn} is valid: {isValid}");
        }
    }
}
```
The `LuhnDotNet` library can also be used to validate an Austrian Pharmazentralnummer (PZN), which is a unique identifier for pharmaceuticals in Austria. The PZN is a 7-digit number, with the last digit being a check digit calculated using the Modulo 11 algorithm.
Add a leading zero to the PZN to make it an 8-digit number, as the Mod11 algorithm expects an 8-digit input. The last digit is the check digit, which is calculated using the Modulo 11 algorithm.
Here is an example of how to validate an Austrian PZN using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;
    
namespace Example14
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string pzn = "0" + "3855587";
            bool isValid = pzn.IsValidMod11Number();
            Console.WriteLine($"The Austrian PZN {pzn} is valid: {isValid}");
        }
    }
}
```
### Compute PZN Check Digit with Modulo 11
The `LuhnDotNet` library can be used to compute the check digit of a Pharmazentralnummer (PZN) using the Modulo 11 algorithm. The PZN is a unique identifier for pharmaceuticals in Germany and Austria, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to compute the check digit of a PZN using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example15
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string pznWithoutCheckDigit = "0678957";
            char checkDigit = pznWithoutCheckDigit.ComputeMod11CheckDigit();
            //// Must be 2
            Console.WriteLine($"The check digit for PZN {pznWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```
### Compute PZN Number with Modulo 11
The `LuhnDotNet` library can be used to compute the complete Pharmazentralnummer (PZN) using the Modulo 11 algorithm. The PZN is a unique identifier for pharmaceuticals in Germany and Austria, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to compute the complete PZN using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example16
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string pznWithoutCheckDigit = "0678957";
            string pznWithCheckDigit = pznWithoutCheckDigit.ComputeMod11Number();
            //// Must be 06789572
            Console.WriteLine($"The complete PZN for {pznWithoutCheckDigit} is: {pznWithCheckDigit}");
        }
    }
}
```
### ISBN-10 Check Digit Calculation with Modulo 11
The `LuhnDotNet` library can be used to compute the check digit of an ISBN-10 number using the Modulo 11 algorithm. The ISBN-10 is a 10-digit number, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to compute the check digit of an ISBN-10 number using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example17
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isbnWithoutCheckDigit = "3-598-21508";
            char checkDigit = isbnWithoutCheckDigit.RemoveSeparators().ComputeMod11CheckDigit();
            //// Must be 8
            Console.WriteLine($"The check digit for ISBN-10 {isbnWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```
### ISBN-10 Number Calculation with Modulo 11
The `LuhnDotNet` library can be used to compute the complete ISBN-10 number using the Modulo 11 algorithm. The ISBN-10 is a 10-digit number, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to compute the complete ISBN-10 number using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example18
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isbnWithoutCheckDigit = "3-598-21508";
            string isbnWithCheckDigit = isbnWithoutCheckDigit.RemoveSeparators().ComputeMod11Number();
            //// Must be 3598215088
            Console.WriteLine($"The complete ISBN-10 for {isbnWithoutCheckDigit} is: {isbnWithCheckDigit}");
        }
    }
}
```

### ISBN-10 Validation with Modulo 11
The `LuhnDotNet` library can be used to validate an ISBN-10 number using the Modulo 11 algorithm. The ISBN-10 is a 10-digit number, and the last digit is a check digit calculated using the Modulo 11 algorithm.
Here is an example of how to validate an ISBN-10 number using the `LuhnDotNet` library:

```csharp
using System;
using LuhnDotNet;
using LuhnDotNet.Algorithm.Mod11AscendingWeights;

namespace Example19
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isbn = "3-598-21508-8";
            bool isValid = isbn.RemoveSeparators().IsValidMod11Number();
            Console.WriteLine($"The ISBN-10 {isbn} is valid: {isValid}");
        }
    }
}
```

# CLI building instructions
For the following instructions, please make sure that you are connected to the internet. If necessary, NuGet will try to restore the [xUnit](https://xunit.net/) packages.
## Using dotnet to build for .NET 8, .NET 9 and .NET FX 4.x
Use one of the following solutions with `dotnet` to build [LuhnDotNet](#luhndotnet):
* `LuhnDotNet.sln` (all, [see table](#build--test-status-of-default-branch))


The syntax is:
```dotnetcli
dotnet {restore|build|test} -c {Debug|Release} LuhnDotNet.sln
```

### Restore NuGet packages

```dotnetcli
dotnet restore LuhnDotNet.sln
```

The instructions below are examples, which operate on the `LuhnDotNet.sln`.
### Build Debug configuration

```dotnetcli
dotnet build -c Debug --no-restore LuhnDotNet.sln
```

### Build Release configuration

```dotnetcli
dotnet build -c Release --no-restore LuhnDotNet.sln
```

### Test Debug configuration

```dotnetcli
dotnet test -c Debug --no-restore --no-build LuhnDotNet.sln
```

### Test Release configuration

```dotnetcli
dotnet test -c Release --no-restore --no-build LuhnDotNet.sln
```
