# LuhnDotNet
An C# implementation of the Luhn algorithm.

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
          <td rowspan=10><a href ="https://github.com/shinji-san/LuhnDotNet/actions?query=workflow%3A%22LuhnDotNet+%28All+supported+TFM%29%22" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/workflows/LuhnDotNet%20(All%20supported%20TFM)/badge.svg" alt="Build status"/></a></td>
          <td rowspan=10><code>LuhnDotNet.sln</code></td>
          <td rowspan=10>Core</td>
          <td>Core 3.1 (LTS)</td>
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
      <tr>
          <td>.NET 6</td>
      </tr>
      <tr>
          <td>.NET 7</td>
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
          <td rowspan=10><a href="https://github.com/shinji-san/LuhnDotNet/actions?query=workflow%3A%22LuhnDotNet+NuGet%22" target="_blank"><img src="https://github.com/shinji-san/LuhnDotNet/workflows/LuhnDotNet%20NuGet/badge.svg?branch=v0.1.0" alt="LuhnDotNet NuGet"/></a></td>
          <td rowspan=10><a href="https://badge.fury.io/nu/LuhnDotNet" target="_blank"><img src="https://badge.fury.io/nu/LuhnDotNet.svg" alt="NuGet Version 0.1.0"/></a></td>
          <td rowspan=10><a href="https://github.com/shinji-san/LuhnDotNet/tree/v0.1.0" target="_blank"><img src="https://img.shields.io/badge/LuhnDotNet-0.1.0-green.svg?logo=github&logoColor=959da5&color=2ebb4e&labelColor=2b3137" alt="Tag"/></a></td>
          <td>Core 3.1 (LTS)</td>
      </tr>
      <tr>
          <td>.NET 6</td>
      </tr>
      <tr>
          <td>.NET 7</td>
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

2. Use the following command to install version 0.1.0 of the LuhnDotNet package:

    ```dotnetcli
    dotnet add package LuhnDotNet -v 0.1.0 -f <FRAMEWORK>
    ```

3. After the completition of the command, look at the project file to make sure that the package is successfuly installed.

   You can open the `.csproj` file to see the added package reference:

    ```xml
    <ItemGroup>
      <PackageReference Include="LuhnDotNet" Version="0.1.0" />
    </ItemGroup>
    ```
## Remove LuhnDotNet package

1. Open a console and switch to the directory, containing your project file.

2. Use the following command to remove the LuhnDotNet package:

    ```dotnetcli
    dotnet remove package LuhnDotNet
    ```

3. After the completition of the command, look at the project file to make sure that the package is successfuly removed.

   You can open the `.csproj` file to check the deleted package reference.

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
      var checkDigit = Luhn.ComputeLuhnCheckDigit("37828224631000");
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
      var luhnNumber = Luhn.ComputeLuhnNumber("37828224631000");
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
      var isValid = Luhn.IsValid("378282246310005");
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
      var isValid = Luhn.IsValid("37828224631000", 5);
      //// Must be 'true'
      Console.WriteLine(isValid);
    }
  }
}
```

# CLI building instructions
For the following instructions, please make sure that you are connected to the internet. If necessary, NuGet will try to restore the [xUnit](https://xunit.net/) packages.
## Using dotnet to build for .NET6, .NET Core and .NET FX 4.x
Use one of the following solutions with `dotnet` to build [LuhnDotNet](#luhndotnet):
* `LuhnDotNet.sln` (all, [see table](#build--test-status-of-default-branch))


The syntax is:
```dotnetcli
dotnet {build|test} -c {Debug|Release} LuhnDotNet.sln
```

The instructions below are examples, which operate on the `LuhnDotNet.sln`.
### Build Debug configuration

```dotnetcli
dotnet build -c Debug LuhnDotNet.sln
```

### Build Release configuration

```dotnetcli
dotnet build -c Release LuhnDotNet.sln
```

### Test Debug configuration

```dotnetcli
dotnet test -c Debug LuhnDotNet.sln
```

### Test Release configuration

```dotnetcli
dotnet test -c Release LuhnDotNet.sln
```
