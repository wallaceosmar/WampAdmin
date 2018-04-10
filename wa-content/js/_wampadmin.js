/*! 
 * WampAdmin
 * 
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    
    "use strict"
    
    var isFunction = function isFunction( obj ) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
    
    var
        version = "1.0.0",
        /**
         * Define a local copy of WampAdmin
         * 
         * @param {type} options
         * 
         * @returns {wampadminL#5.WampAdmin.fn.init}
         */
	WampAdmin = function( options ) {
            return new WampAdmin.fn.init( options );
        }
    ;
    
    WampAdmin.fn = WampAdmin.prototype = {
        /**
         * 
         */
        wampadmin: version,
        
        /**
         * 
         */
        constructor: WampAdmin,
        
        /**
         * 
         * @param {type} options
         * @returns {Array}
         */
        init: function ( options ) {
            this.options = options;
            
            // This
            return this;
        }
        
    }
    
    WampAdmin.extend = WampAdmin.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( copyIsArray = Array.isArray( copy ) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];
                        }
                        // Never move original objects, clone them
                        target[ name ] = WampAdmin.extend( deep, clone, copy );
                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
	}
	// Return the modified object
	return target;
    }
    
    
    WampAdmin.extend({
        
    });
    
    
    var
        /**
         * 
         * @type Window.WampAdmin
         */
        _WampAdmin = window.WampAdmin,
        
        /**
         * 
         * @type Window.wa
         */
        _wa = window.wa
        
    ;
    
    if ( !noGlobal ) {
	window.WampAdmin = window.wa = WampAdmin;
    }
    
    return WampAdmin;
});