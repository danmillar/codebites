/*
 *  Codebites.js - Core / Events
 *  Codebites may be freely distributed under the MIT license.
 */

    // Cross browser event handling
    Codebites.events = {
        add: function(obj, type, fn) {
            if (obj.attachEvent) {
                obj['e'+type+fn] = fn;

                obj[type+fn] = function() {
                    obj['e'+type+fn](window.event);
                }
                
                obj.attachEvent('on'+type, obj[type+fn]);
            } else
                obj.addEventListener(type, fn, false);
        },

        remove: function(obj, type, fn) {
            if (obj.detachEvent) {
                obj.detachEvent('on'+type, obj[type+fn]);
                
                obj[type+fn] = null;
            } else
                obj.removeEventListener(type, fn, false);
        }
    };

    Codebites.fn.on = function() {


    };

    Codebites.fn.off = function() {


    };
