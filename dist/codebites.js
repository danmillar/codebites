//  Codebites.js 0.0.1
//  http://codebites.co.uk
//  (c) 2013 Dan Millar
//  Codebites may be freely distributed under the MIT license.

;(function() {

	"use strict";

    var root = this;

    // Create a safe reference to the Codebites object for use below.
    var cb = function(Codebites) {
        if (Codebites instanceof cb) return Codebites;
        if (!(this instanceof cb)) return new cb(Codebites);
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `cb` as a global object via a string identifier,
    // for Closure Compiler "advanced" mode.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = cb;
        }
        exports.cb = cb;
    } else {
        root.cb = cb;
    }

    // Current version.
    cb.VERSION = "0.0.1";

	cb.modal = function() {
        
    };

}).call(this);