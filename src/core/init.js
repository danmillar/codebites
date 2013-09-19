/*
 *  Codebites.js - Core / Init
 *  Codebites may be freely distributed under the MIT license.
 */

    Codebites.fn = Codebites.prototype = {
        // The current version of Codebites being used
        codebites: version,

        constructor: Codebites,

        init: function(selector, context, root) {
            // TODO: Check if context is an instance of Codebites
            
            // TODO: Check if selector is a function
            
            // If Codebites() is called the selector is #Document

            return Codebites.fn;
        }
    };

    // Give the init function the Codebites prototype for later instantiation
    Codebites.fn.init.prototype = Codebites.fn;

    // All Codebites objects should point back to these
    root = Codebites(document);

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
