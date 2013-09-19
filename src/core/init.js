/*
 *  Codebites.js - Core / Init
 *  Codebites may be freely distributed under the MIT license.
 */

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
 