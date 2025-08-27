# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-08-27

### Fixed
- Add `types` field to `exports` in package.json for proper TypeScript resolution
- Fix TS7016 error when importing from TypeScript projects

## [1.0.0] - 2025-08-27

### Added
- Initial release
- Discover all importable Node.js modules including built-ins, installed packages, and workspace packages
- Support for optional workspace package inclusion
- TypeScript definitions