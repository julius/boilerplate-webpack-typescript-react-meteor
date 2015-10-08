// Type definitions for webpack ts-loader 0.5.5
// Project: https://github.com/TypeStrong/ts-loader
// Definitions by: Julius Eckert <https://github.com/julius>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
 * We need this declaration to make loading of resources like CSS possible (webpack feature).
 * Documentation: https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
 */
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
