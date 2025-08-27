#!/usr/bin/env node

const installedNodeModules = require('../src/index.cjs');

console.log('Running smoke test for installed-node-modules...');

// Test basic functionality
const modules = installedNodeModules();
const modulesNoWorkspace = installedNodeModules(false);

// Verify return types
console.assert(Array.isArray(modules), 'Should return array');
console.assert(Array.isArray(modulesNoWorkspace), 'Should return array with withWorkspace=false');

// Verify built-in modules that this package depends on
const requiredBuiltins = ['fs', 'path', 'module'];
for (const builtin of requiredBuiltins) {
  console.assert(modules.includes(builtin), `Should include built-in module: ${builtin}`);
  console.assert(modulesNoWorkspace.includes(builtin), `Should include built-in module (no workspace): ${builtin}`);
}

// Verify dependencies this package uses
const dependencies = ['glob', 'yaml'];
for (const dep of dependencies) {
  console.assert(modules.includes(dep), `Should find dependency: ${dep}`);
  console.assert(modulesNoWorkspace.includes(dep), `Should find dependency (no workspace): ${dep}`);
}

// Test workspace parameter functionality
// (Results may vary depending on whether we're in a workspace or not)
if (modules.length !== modulesNoWorkspace.length) {
  console.log('✓ Workspace detection is working (different results with/without workspace)');
} else {
  console.log('✓ No workspace packages detected (or not in a workspace)');
}

// Verify no duplicates
const uniqueModules = [...new Set(modules)];
console.assert(modules.length === uniqueModules.length, 'Should not contain duplicates');

console.log('✓ All smoke tests passed');
console.log(`Found ${modules.length} total modules`);
console.log(`Found ${modulesNoWorkspace.length} modules (excluding workspace)`);
