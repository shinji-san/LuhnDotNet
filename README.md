# LuhnDotNet
![LuhnDotNet Logo](images/social-media-preview.png)

A C# implementation of the Luhn algorithm.

The Luhn algorithm is a checksum formula used to validate identification numbers like credit card numbers. It works by doubling every second digit from the right, summing all the digits, and checking if the total is a multiple of 10. It's widely used and is specified in ISO/IEC 7812-1.

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
          <td rowspan=9><a href ="https://github.com/shinji-san/LuhnDotNet/actions?query=workflow%3A%22LuhnDotNet+%28All+supported+TFM%29%22" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/workflows/LuhnDotNet%20(All%20supported%20TFM)/badge.svg" alt="Build status"/></a></td>
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
          <td rowspan=9><a href="https://github.com/shinji-san/LuhnDotNet/actions?query=workflow%3A%22LuhnDotNet+NuGet%22" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/workflows/LuhnDotNet%20NuGet/badge.svg?branch=v1.2.0" alt="LuhnDotNet NuGet"/></a></td>
          <td rowspan=9><a href="https://badge.fury.io/nu/LuhnDotNet" target="_blank"><img src="https://badge.fury.io/nu/LuhnDotNet.svg" alt="NuGet Version 1.2.0"/></a></td>
          <td rowspan=9><a href="https://github.com/shinji-san/LuhnDotNet/tree/v1.2.0" target="_blank"><img src="https://img.shields.io/badge/LuhnDotNet-1.2.0-green.svg?logo=github&logoColor=959da5&color=2ebb4e&labelColor=2b3137" alt="Tag"/></a></td>
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

2. Use the following command to install version 1.2.0 of the LuhnDotNet package:

    ```dotnetcli
    dotnet add package LuhnDotNet -v 1.2.0 -f <FRAMEWORK>
    ```

3. After the completion of the command, look at the project file to make sure that the package is successfully installed.

   You can open the `.csproj` file to see the added package reference:

    ```xml
    <ItemGroup>
      <PackageReference Include="LuhnDotNet" Version="1.2.0" />
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
## Compute the Luhn check digit
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;

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

## Compute the Luhn number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;

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

## Validate Luhn number
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;

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

## Validate number and corresponding Luhn check digit
```csharp
using System;
using System.Collections.Generic;
using LuhnDotNet;

namespace Example4
{
    public class Program
    {
        public static void Main(string[] args)
        {
            byte checkDigit = 5;
            var isValid = checkDigit.IsValidLuhnCheckDigit("37828224631000");
            //// Must be 'true'
            Console.WriteLine(isValid);
        }
    }
}
```

## Validate ISIN with LuhnDotNet and ConvertAlphaNumericToNumeric

The `LuhnDotNet` library can be used in combination with the `ConvertAlphaNumericToNumeric` method to validate an International Securities Identification Number (ISIN). An ISIN uniquely identifies a security, such as stocks, bonds or derivatives. It is a 12-character alphanumeric code.

The `ConvertAlphaNumericToNumeric` method is used to convert the alphanumeric ISIN to a numeric string, where each letter in the input string is replaced by its decimal ASCII value minus 55. This numeric string can then be validated using the `Luhn.IsValid` method.

Here is an example of how to use these methods to validate an ISIN:

```csharp
using System;
using LuhnDotNet;

namespace Example5
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isin = "US0378331005";
            bool isValid = isin.ConvertAlphaNumericToNumeric().IsValidLuhnNumber();
            Console.WriteLine($"The ISIN {isin} is valid: {isValid}");
        }
    }
}
```
## Compute ISIN Check Digit with LuhnDotNet and ConvertAlphaNumericToNumeric

The `LuhnDotNet` library provides the `ComputeLuhnCheckDigit` method which can be used to compute the check digit of a numeric string according to the Luhn algorithm. When dealing with an International Securities Identification Number (ISIN), which is a 12-character alphanumeric code, we first need to convert the alphanumeric ISIN to a numeric string. This can be achieved using the `ConvertAlphaNumericToNumeric` method.

Here is an example of how to compute the check digit of an ISIN:

```csharp
using System;
using LuhnDotNet;

namespace Example6
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string isinWithoutCheckDigit = "US037833100";
            byte checkDigit = isinWithoutCheckDigit.ConvertAlphaNumericToNumeric().ComputeLuhnCheckDigit();
            Console.WriteLine($"The check digit for ISIN {isinWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```

## Compute credit card number with LuhnDotNet
The `LuhnDotNet` library can be used to compute the check digit of a credit card number. The check digit is the last digit of the credit card number, which is used to validate the number according to the Luhn algorithm.

```csharp
using System;
using LuhnDotNet;

namespace Example7
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string creditCardNumberWithoutCheckDigit = "4417 1234 5678 911".Replace(" ", "");
            byte checkDigit = creditCardNumberWithoutCheckDigit.ComputeLuhnCheckDigit();
            Console.WriteLine($"The check digit for credit card number {creditCardNumberWithoutCheckDigit} is: {checkDigit}");
        }
    }
}
```

## Validate credit card number with LuhnDotNet
The `LuhnDotNet` library can be used to validate a credit card number according to the Luhn algorithm. The `IsValid` method returns `true` if the credit card number is valid, and `false` otherwise.

```csharp
using System;
using LuhnDotNet;

namespace Example8
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string creditCardNumber = "4417 1234 5678 9113".Replace(" ", "");
            bool isValid = creditCardNumber.IsValidLuhnNumber();
            Console.WriteLine($"The credit card number {creditCardNumber} is valid: {isValid}");
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
