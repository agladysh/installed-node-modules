# installed-node-modules

Discover all importable Node.js modules including built-ins, installed packages, and workspace packages.

## Installation

```bash
npm install installed-node-modules
```

## Usage

```javascript
const installedNodeModules = require('installed-node-modules');

// Get all available modules (including workspace packages)
const modules = installedNodeModules();
console.log(modules);
// ['fs', 'http', 'lodash', '@babel/core', '@or-q/plugin-core', ...]

// Get modules excluding workspace packages
const modulesNoWorkspace = installedNodeModules(false);
console.log(modulesNoWorkspace);
// ['fs', 'http', 'lodash', '@babel/core', ...]
```

## What it discovers

This package finds all modules that can be imported in your Node.js environment:

1. **Built-in modules** - Core Node.js modules like `fs`, `http`, `path`, etc.
2. **Installed packages** - All packages found in `node_modules` directories that Node's resolver would find
3. **Workspace packages** - Local packages in pnpm/npm/yarn workspaces (optional, enabled by default)

## API

### `installedNodeModules(withWorkspace = true)`

Discover all importable Node.js modules including built-ins, installed packages, and workspace packages.

Returns an array of all importable module names.

**Parameters:**

- `withWorkspace` (boolean, default: `true`) - Whether to include workspace packages in the result

**Returns:**

- `string[]` - Array of module names that can be used with `require()` or `import`

## How it works

The package uses the same resolution logic as Node.js itself:

- **Built-ins**: Uses `require('module').builtinModules`
- **Installed packages**: Searches all directories in `require.resolve.paths()` and `require('module').globalPaths`
- **Workspace packages**: Detects workspace roots by looking for `pnpm-workspace.yaml` or `package.json` with
  `workspaces` field, then resolves glob patterns to find package names

## Use cases

- **Plugin systems** - Dynamically discover available plugins
- **Development tools** - Auto-complete for import statements
- **Module introspection** - Analyze what's available in your environment
- **Testing** - Verify expected modules are installed

## License

MIT
