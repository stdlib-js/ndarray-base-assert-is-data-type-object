// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype-ctor@esm/index.mjs";function i(i){return i instanceof r||"object"==typeof i&&null!==i&&t(i.alignment)&&t(i.byteLength)&&s(i.byteOrder)&&s(i.char)&&t(i.enum)&&e(i,"value")}export{i as default};
//# sourceMappingURL=index.mjs.map
