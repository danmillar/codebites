//  Codebites.js 0.0.1
//  http://codebites.co.uk
//  (c) 2013 Dan Millar
//  Codebites may be freely distributed under the MIT license.

;(function() {

	var root,
    
        // Map over Codebites in case of overwrite
        _Codebites = window.Codebites,

        // Map over cb in case of overwrite
        _cb = window.cb,

        // Define a local copy of Codebites
        Codebites = function(selector, context) {
            // The Codebites object is actually just the init constructor 'enhanced'
            return new Codebites.fn.init(selector, context, root);
        },

        version = "0.0.1";
	Codebites.fn = Codebites.prototype = {
        // The current version of Codebites being used
        codebites: version,

        constructor: Codebites,
        selector: "",

        init: function(selector, context, root) {
            if(!selector) {
                return this;
            }

            // TODO: Check if context is an instance of Codebites
            // TODO: Check if selector is a function
            // If Codebites() is called the selector is #document

            Codebites.fn.selector = selector;

            return Codebites.fn;
        }
    };

    // Give the init function the Codebites prototype for later instantiation
    Codebites.fn.init.prototype = Codebites.fn;

    // All Codebites objects should point back to these
    root = Codebites(window.document);

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

	Codebites.fn.modal = function() {
        console.log('Modals baby');
    };

}).call(window);