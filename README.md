<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Deep Pluck

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Extract a nested property value from each element of an object array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-deep-pluck
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var deepPluck = require( '@stdlib/utils-deep-pluck' );
```

#### deepPluck( arr, path\[, options] )

Extracts a nested property value from each element of an object `array` based on a key `path`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a.b.c' );
// returns [ 1, 2 ]
```

A key `path` may be specified as either a `string` or as an `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ 0, 1, 2 ] },
    { 'a': [ 3, 4, 5 ] }
];

var out = deepPluck( arr, [ 'a', 1 ] );
// returns [ 1, 4 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to return a new data structure. Default: `true`.
-   **sep**: key path [separator][@stdlib/utils/deep-get]. Default: `'.'`.

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a.b.c', { 'copy': false } );
// returns [ 1, 2 ]

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns true
```

The default key `path` separator is `.`. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': { 'b': { 'c': 1 } } },
    { 'a': { 'b': { 'c': 2 } } }
];

var out = deepPluck( arr, 'a|b|c', { 'sep': '|' } );
// returns [ 1, 2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

-   If a key path does **not** exist, the function sets the plucked value as `undefined`.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': { 'c': 1 } } },
        null,
        void 0,
        { 'a': { 'b': { 'c': 2 } } }
    ];

    var out = deepPluck( arr, 'a.b.c' );
    // returns [ 1, undefined, undefined, 2 ]
    ```

-   Extracted values are **not** cloned.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': { 'c': 2 } } },
        { 'a': { 'b': { 'c': 3 } } }
    ];

    var out = deepPluck( arr, 'a.b' );
    // returns [ { 'c': 2 }, { 'c': 3 } ]

    var bool = ( arr[ 0 ].a.b === out[ 0 ] );
    // returns true
    ```

    To prevent subsequent unintended mutation, use [copy][@stdlib/utils/copy].

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var copy = require( '@stdlib/utils-copy' );

    var arr = [
        { 'a': { 'b': { 'c': 2 } } },
        { 'a': { 'b': { 'c': 3 } } }
    ];

    var out = deepPluck( arr, 'a.b' );
    // returns [ { 'c': 2 }, { 'c': 3 } ]

    // Perform a deep copy:
    out = copy( out );

    var bool = ( arr[ 0 ].a.b === out[ 0 ] );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var deepPluck = require( '@stdlib/utils-deep-pluck' );

var arr;
var out;
var tmp;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    tmp = {
        'a': {
            'b': {
                'c': {
                    'd': null
                }
            }
        }
    };
    tmp.a.b.c.d = round( randu()*100.0 );
    arr[ i ] = tmp;
}

// Pluck the deeply nested values:
out = deepPluck( arr, 'a.b.c.d' );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-deep-get`][@stdlib/utils/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="package-name">[`@stdlib/utils-deep-set`][@stdlib/utils/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-deep-pluck.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-deep-pluck

[test-image]: https://github.com/stdlib-js/utils-deep-pluck/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-deep-pluck/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-deep-pluck/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-deep-pluck?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-deep-pluck.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-deep-pluck/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-deep-pluck/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-deep-pluck/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-deep-pluck/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-deep-pluck/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-deep-pluck/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-deep-pluck/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-deep-pluck/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-deep-pluck/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy

<!-- <related-links> -->

[@stdlib/utils/deep-get]: https://github.com/stdlib-js/utils-deep-get

[@stdlib/utils/deep-set]: https://github.com/stdlib-js/utils-deep-set

<!-- </related-links> -->

</section>

<!-- /.links -->
