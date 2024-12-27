# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2024-12-27
### Added
- Add project icon
- Add project social preview image
- Add `Luhn.IsValidNumber`
- Add `Luhn.IsValidCheckDigit`

### Deprecated
- `Luhn.IsValid` methods are deprecated. Use `Luhn.IsValidNumber` or `Luhn.IsValidCheckDigit` instead.

## [1.2.0] - 2024-12-26
### Added
- Add [API documentation](https://sebastian-walther.de/LuhnDotNet/api/LuhnDotNet.html)
- Add .NET 9 support

### Removed
- Removed .NET 7 support
- Removed .NET 6 support
- Removed `Luhn.Compute()` method

## [1.1.0] - 2024-03-30
### Added
- Add `ConvertAlphaNumericToNumeric` method to convert a string containing alphanumeric characters to a string containing only numeric characters (use case: converting an ISIN to a numeric string for Luhn validation).

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

[1.3.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.2.0..v1.3.0
[1.2.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.1.0..v1.2.0
[1.1.0]: https://github.com/shinji-san/LuhnDotNet/compare/v1.0.1..v1.1.0
[1.0.1]: https://github.com/shinji-san/LuhnDotNet/compare/v1.0.0..v1.0.1
[1.0.0]: https://github.com/shinji-san/LuhnDotNet/compare/v0.2.0..v1.0.0
[0.2.0]: https://github.com/shinji-san/LuhnDotNet/compare/v0.1.0..v0.2.0
[0.1.0]: https://github.com/shinji-san/LuhnDotNet/releases/tag/v0.1.0
