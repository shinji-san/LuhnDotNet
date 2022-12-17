# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/shinji-san/LuhnDotNet/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/shinji-san/LuhnDotNet/releases/tag/v0.1.0
