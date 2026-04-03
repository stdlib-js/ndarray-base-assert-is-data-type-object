/** @license Apache-2.0 */

'use strict';

/**
* Test whether an input value is an ndarray data type object.
*
* @module @stdlib/ndarray-base-assert-is-data-type-object
*
* @example
* var DataType = require( '@stdlib/ndarray-dtype-ctor' );
* var isDataTypeObject = require( '@stdlib/ndarray-base-assert-is-data-type-object' );
*
* var bool = isDataTypeObject( new DataType( 'float64' ) );
* // returns true
*
* bool = isDataTypeObject( 'float64' );
* // returns false
*
* bool = isDataTypeObject( {} );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
