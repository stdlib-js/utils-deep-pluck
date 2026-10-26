"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var c=s(function(k,v){
function g(){return{copy:!0,sep:"."}}v.exports=g
});var y=s(function(B,f){
var q=require('@stdlib/assert-is-boolean/dist').isPrimitive,w=require('@stdlib/assert-is-string/dist').isPrimitive,b=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return b(r)?l(r,"copy")&&(e.copy=r.copy,!q(e.copy))?new TypeError(o('1ST2o',"copy",e.copy)):l(r,"sep")&&(e.sep=r.sep,!w(e.sep))?new TypeError(o('1ST2W',"sep",e.sep)):null:new TypeError(o('1ST2V',r));}f.exports=h
});var d=s(function(F,m){
var O=require('@stdlib/object-deep-get/dist').factory,x=require('@stdlib/assert-is-array/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),P=c(),T=y();function j(e,r,u){var p,t,a,n,i;if(!x(e))throw new TypeError(E('1ST51',e));if(t=P(),arguments.length>2&&(n=T(t,u),n))throw n;for(t.copy?a=new Array(e.length):a=e,p=O(r,{sep:t.sep}),i=0;i<e.length;i++)a[i]=p(e[i]);return a}m.exports=j
});var A=d();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
