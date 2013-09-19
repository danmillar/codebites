/*
 *  Codebites.js - Core / Register
 *  Codebites may be freely distributed under the MIT license.
 */

    if (typeof module === "object" && module && typeof module.exports === "object") {
        // Expose Codebites in loaders that implement the Node module pattern.
        module.exports = Codebites;
    } else {
        // Register as a named AMD module, since Codebites can be concatenated with other
        // files that may use define, but not via a proper concatenation script that
        // understands anonymous AMD modules.
        if ( typeof define === "function" && define.amd ) {
            define( "codebites", [], function () { return Codebites; } );
        }
    }

    // If there is a window object, that at least has a document property,
    // define Codebites and cb identifiers
    if ( typeof window === "object" && typeof window.document === "object" ) {
        window.Codebites = window.cb = Codebites;
    }    
