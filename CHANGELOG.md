# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-06-29
### Added
- Added internal `LuhnAlgorithm` class to encapsulate Luhn algorithm related methods.
- Added public `LuhnCalculator` class to encapsulate Luhn calculation methods.
- Added public `LuhnValidator` class to encapsulate Luhn validation methods.
- Added `StringExtensions` and `ReadOnlySpanExtensions` classes to encapsulate string and ReadOnlySpan related methods.
- Added `LuhnAlgorithm.ComputeLuhnCheckDigit` method to compute the Luhn check digit.
- Added `LuhnAlgorithm.ComputeLuhnNumber` method to compute the Luhn number.
- Added `LuhnValidator.IsValidLuhnCheckDigit` method to validate a check digit with Luhn algorithm.
- Added `LuhnValidator.IsValidLuhnNumber` method to validate a number with Luhn algorithm.
- Added overloads of `LuhnValidator.IsValidLuhnCheckDigit` and `LuhnValidator.IsValidLuhnNumber` methods to accept a `ReadOnlySpan<char>` as input.
- Added internal `Mod11AscendingWeightsAlgorithm` class to encapsulate Mod11 algorithm related methods.
- Added public `Mod11AscendingWeightsCalculator` class to encapsulate Mod11 calculation methods.
- Added public `Mod11AscendingWeightsValidator` class to encapsulate Mod11 validation methods.
- Added `Mod11AscendingWeightsCalculator.ComputeMod11CheckDigit` method to compute the Mod11 check digit.
- Added `Mod11AscendingWeightsCalculator.ComputeMod11Number` method to compute the Mod11 number.
- Added overloads of `Mod11AscendingWeightsCalculator.ComputeMod11CheckDigit` and `Mod11AscendingWeightsCalculator.ComputeMod11Number` methods to accept a `ReadOnlySpan<char>` as input.
- Added `Mod11AscendingWeightsValidator.IsValidMod11CheckDigit` method to validate a check digit with Mod11 algorithm.
- Added `Mod11AscendingWeightsValidator.IsValidMod11Number` method to validate a number with Mod11 algorithm.
- Added overloads of `Mod11AscendingWeightsValidator.IsValidMod11CheckDigit` and `Mod11AscendingWeightsValidator.IsValidMod11Number` methods to accept a `ReadOnlySpan<char>` as input.
- Added `StringExtensions.RemoveSeparators` method to remove all separators from a string.
- Added `ReadOnlySpanExtensions.RemoveSeparators` method to remove all separators from a ReadOnlySpan.
- Added `InvalidCharacterException` to throw an exception if the input string contains invalid characters.
- Added `RemoveSeparators` methods to remove all separators from a string or ReadOnlySpan. Use it, for example, with credit card numbers.
- Added internal `LuhnDotNetCore` class to encapsulate functionality related to the Luhn, Modulus 11, and other algorithms.
- Added Damm algorithm implementation with `DammAlgorithm`, `DammCalculator`, and `DammValidator` classes.
- Added `CharExtensions` class with `ThrowIfNotDigit` to throw an exception if a character is not a digit.

### Changed
- Changed return type of `LuhnAlgorithm.ComputeLuhnCheckDigit` to `char` instead of `byte`.
- Moved Luhn algorithm related methods from the `Luhn` class to the new `LuhnAlgorithm`, `LuhnCalculator`, and `LuhnValidator` classes.
- Changed namespace for Luhn algorithm-related classes from `LuhnDotNet` to `LuhnDotNet.Algorithm.Luhn`.
- Changed `Luhn.IsValid` methods to `LuhnValidator.IsValidLuhnCheckDigit` and `LuhnValidator.IsValidLuhnNumber`.
- Renamed `ConvertAlphaNumericToNumeric` to `AlphaNumericToNumeric`
- Moved `AlphaNumericToNumeric` method to the `StringExtensions` and its overloaded version to `ReadOnlySpanExtensions` class.
- Moved `ComputeCheckDigit` and `ComputeLuhnNumber` methods to the `LuhnCalculator` class.
- Moved `IsValidNumber` and `IsValidCheckDigit` methods to the `LuhnValidator` class.
- Renamed `Luhn` class to `LuhnAlgorithm`.

### Removed
- Removed `Luhn.IsValid` methods

## [1.3.0] - 2024-12-27
### Added
- Added project icon
- Added project social preview image
- Added `Luhn.IsValidNumber`
- Added `Luhn.IsValidCheckDigit`

### Deprecated
- `Luhn.IsValid` methods are deprecated. Use `Luhn.IsValidNumber` or `Luhn.IsValidCheckDigit` instead.

## [1.2.0] - 2024-12-26
### Added
- Added [API documentation](https://sebastian-walther.de/LuhnDotNet/api/LuhnDotNet.html)
- Added .NET 9 support

### Removed
- Removed .NET 7 support
- Removed .NET 6 support
- Removed `Luhn.Compute()` method

## [1.1.0] - 2024-03-30
### Added
- Added `ConvertAlphaNumericToNumeric` method to convert a string containing alphanumeric characters to a string containing only numeric characters (use case: converting an ISIN to a numeric string for Luhn validation).

## [1.0.1] - 2024-03-19
### Fixed
- Fixed a bug in `Luhn.ComputeLuhnNumber` and `Luhn.ComputeLuhnCheckDigit` methods that sometimes returned an incorrect result.

## [1.0.0] - 2024-02-19
### Added
- Added .NET 8 support
- Added support for SourceLink (GitHub)
- Enable deterministic builds

### Changed
- Changed parameter type of `Luhn.IsValid`, `Luhn.ComputeLuhnNumber` and `Luhn.ComputeCheckDigit` methods from `string` to `ReadOnlySpan<char>`.

### Deprecated
- `Luhn.Compute()` method is EOL and will be deleted in the next version. Use `Luhn.ComputeCheckDigit()` or `Luhn.ComputeLuhanNumber()` instead.

## [0.2.0] - 2022-12-18
### Added
- Added .NET 7 support
- Added feature to remove all leading and trailing white-space characters from the String object representing a number w/ and w/o Luhn check digit.
- Added an overload of the `Luhn.IsValid` method to accept a String object representing a number w/o Luhn check digit. The check digit is separated from the number as single byte parameter.
- Added `Luhn.ComputeCheckDigit` method to compute the Luhn check digit.
- Added `Luhn.ComputeLuhnNumber` method to compute the Luhn number.

### Changed
- Updated Microsoft.NETFramework.ReferenceAssemblies to v1.0.3

### Deprecated
- `Luhn.Compute()` method is deprecated. Use `Luhn.ComputeCheckDigit()` or `Luhn.ComputeLuhanNumber() instead`.

### Removed
- Removed LINQ dependency
- Removed .NET Core 3.1 support

## [0.1.0] - 2022-06-05
### Added
- Added initial version of LuhnDotNet

[2.0.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.3.0..v2.0.0
[1.3.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.2.0..v1.3.0
[1.2.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.1.0..v1.2.0
[1.1.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.0.1..v1.1.0
[1.0.1]: https://github.com/shinji-san/LuhnDotNet/compare/v1.0.0..v1.0.1
[1.0.0]: https://github.com/shinji-san/LuhnDotNet/compare/v0.2.0..v1.0.0
[0.2.0]: https://github.com/shinji-san/LuhnDotNet/compare/v0.1.0..v0.2.0
[0.1.0]: https://github.com/shinji-san/LuhnDotNet/releases/tag/v0.1.0
