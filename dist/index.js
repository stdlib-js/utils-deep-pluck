"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(k,p){
function g(){return{copy:!0,sep:"."}}p.exports=g
});var f=n(function(B,l){
var q=require('@stdlib/assert-is-boolean/dist').isPrimitive,w=require('@stdlib/assert-is-string/dist').isPrimitive,b=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-has-own-property/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return b(r)?c(r,"copy")&&(e.copy=r.copy,!q(e.copy))?new TypeError(s('1ST2o',"copy",e.copy)):c(r,"sep")&&(e.sep=r.sep,!w(e.sep))?new TypeError(s('1ST2W',"sep",e.sep)):null:new TypeError(s('1ST2V',r));}l.exports=h
});var m=n(function(F,y){
var O=require('@stdlib/utils-deep-get/dist').factory,x=require('@stdlib/assert-is-array/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),P=v(),T=f();function j(e,r,d){var o,t,a,u,i;if(!x(e))throw new TypeError(E('1ST51',e));if(t=P(),arguments.length>2&&(u=T(t,d),u))throw u;for(t.copy?a=new Array(e.length):a=e,o=O(r,{sep:t.sep}),i=0;i<e.length;i++)a[i]=o(e[i]);return a}y.exports=j
});var A=m();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
