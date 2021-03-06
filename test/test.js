/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable object-curly-spacing, object-curly-newline, key-spacing */

'use strict';

// MODULES //

var tape = require( 'tape' );
var copy = require( '@stdlib/utils-copy' );
var deepPluck = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof deepPluck, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			deepPluck( value, 'a.b.c' );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( badOption, TypeError, 'throws an error' );
	t.end();

	function badOption() {
		deepPluck( [], 'a.b.c', {
			'copy': null
		});
	}
});

tape( 'the function returns an empty array if provided an empty array', function test( t ) {
	var out;

	out = deepPluck( [], 'a.b.c' );
	t.deepEqual( out, [], 'returns an empty array' );

	out = deepPluck( [], ['a', 'b', 'c'], {
		'copy': false
	});
	t.deepEqual( out, [], 'returns an empty array (mutate)' );

	t.end();
});

tape( 'the function deep plucks a nested property value from each array element', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		{'a':{'b':{'c':2}}}
	];
	expected = [ 1, 2 ];

	actual = deepPluck( arr, 'a.b.c' );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'by default, the function returns a new array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		{'a':{'b':{'c':2}}}
	];
	expected = copy( arr );

	actual = deepPluck( arr, 'a.b.c' );

	t.notEqual( actual, arr, 'returns a new array reference' );
	t.deepEqual( arr, expected, 'input array is not mutated' );
	t.end();
});

tape( 'the function supports mutating an input array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		{'a':{'b':{'c':2}}}
	];
	expected = [ 1, 2 ];

	actual = deepPluck( arr, ['a', 'b', 'c'], {
		'copy': false
	});

	t.equal( actual, arr, 'returns same array reference' );
	t.deepEqual( arr, expected, 'input array is mutated' );
	t.end();
});

tape( 'if a key path does not exist, the function sets the deep plucked value as `undefined` (copy)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		null,
		void 0,
		{'a':{'b':{'c':2}}}
	];

	expected = [ 1, void 0, void 0, 2 ];

	actual = deepPluck( arr, 'a.b.c' );

	t.deepEqual( actual, expected, 'sets non-existent key path deep plucked values to undefined' );
	t.end();
});

tape( 'if a key path does not exist, the function sets the deep plucked value as `undefined` (mutate)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		null,
		void 0,
		{'a':{'b':{'c':2}}}
	];

	expected = [ 1, void 0, void 0, 2 ];

	actual = deepPluck( arr, ['a', 'b', 'c'], {
		'copy': false
	});

	t.deepEqual( actual, expected, 'sets non-existent key path deep plucked values to undefined' );
	t.end();
});

tape( 'the function supports providing a key path as an array, which may include non-numeric values', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a': [0, 1, 2]},
		{'a': [3, 4, 5]}
	];
	expected = [ 1, 4 ];

	actual = deepPluck( arr, ['a', 1] );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function does not deep copy deep plucked values', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':2}}},
		{'a':{'b':{'c':3}}}
	];
	expected = [
		{'c': 2},
		{'c': 3}
	];

	actual = deepPluck( arr, 'a.b' );

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( actual[0], arr[0].a.b, 'deep plucked values are not deep copied' );

	t.end();
});

tape( 'the function supports specifying a custom key path separator', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		{'a':{'b':{'c':1}}},
		{'a':{'b':{'c':2}}}
	];
	expected = [ 1, 2 ];

	actual = deepPluck( arr, 'a|b|c', {
		'sep': '|'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});
