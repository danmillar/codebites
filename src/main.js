/*
 *  Codebites.js @VERSION
 *  http://codebites.co.uk
 *  (c) 2013 Dan Millar, Decode
 *  Codebites may be freely distributed under the MIT license.
 */

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

        version = "<%= pkg.version %>";