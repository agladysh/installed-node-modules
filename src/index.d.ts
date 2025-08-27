declare module 'installed-node-modules';

/**
 * Discover all importable Node.js modules including built-ins, installed packages, and workspace packages.
 *
 * @param withWorkspace - Whether to include workspace packages in the result (default: true)
 * @returns Array of module names that can be used with require() or import
 *
 * @example
 * // Get all available modules (including workspace packages)
 * const modules = installedNodeModules();
 * console.log(modules); // ['fs', 'http', 'lodash', '@babel/core', '@or-q/plugin-core', ...]
 *
 * @example
 * // Get modules excluding workspace packages
 * const modulesNoWorkspace = installedNodeModules(false);
 * console.log(modulesNoWorkspace); // ['fs', 'http', 'lodash', '@babel/core', ...]
 */
declare function installedNodeModules(withWorkspace?: boolean): string[];

export = installedNodeModules;
