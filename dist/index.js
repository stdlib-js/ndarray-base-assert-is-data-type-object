"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=a(function(y,n){
var i=require('@stdlib/assert-is-integer/dist').isPrimitive,t=require('@stdlib/assert-is-string/dist').isPrimitive,c=require('@stdlib/assert-has-property/dist'),o=require('@stdlib/ndarray-dtype-ctor/dist');function p(r){return r instanceof o||typeof r=="object"&&r!==null&&i(r.alignment)&&i(r.byteLength)&&t(r.byteOrder)&&t(r.char)&&i(r.enum)&&c(r,"value")}n.exports=p
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
