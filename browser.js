// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,w,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,y,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):p.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,S=isNaN,T=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,s,p,l,f;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",p=1,l=0;l<r.length;l++)if(u(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,S(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",p+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t,n;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,I=Object.prototype,$=I.toString,R=I.__defineGetter__,B=I.__defineSetter__,G=I.__lookupGetter__,L=I.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var W=C;function Z(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return U&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",q=M()?function(r){var e,t,n;if(null==r)return N.call(r);t=r[D],e=K(r,D);try{r[D]=void 0}catch(e){return N.call(r)}return n=N.call(r),e?r[D]=t:delete r[D],n}:function(r){return N.call(r)},H=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function J(r){return null!==r&&"object"==typeof r}function Q(r){return"string"==typeof r}Z(J,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(J));var Y=String.prototype.valueOf,rr=M();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function tr(r){return Q(r)||er(r)}Z(tr,"isPrimitive",Q),Z(tr,"isObject",er);var nr=/./;function or(r){return"boolean"==typeof r}var ir=Boolean,ar=Boolean.prototype.toString,cr=M();function ur(r){return"object"==typeof r&&(r instanceof ir||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function sr(r){return or(r)||ur(r)}function pr(){return new Function("return this;")()}Z(sr,"isPrimitive",or),Z(sr,"isObject",ur);var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,gr="object"==typeof globalThis?globalThis:null,yr=function(r){if(arguments.length){if(!or(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pr()}if(gr)return gr;if(lr)return lr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=yr.document&&yr.document.childNodes,hr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var wr=/^\s*function\s*([^(]*)/i;function vr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(br,"REGEXP",wr);var mr="function"==typeof nr||"object"==typeof hr||"function"==typeof dr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?vr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var Er,_r=Object,Sr=Object.getPrototypeOf;Er=jr(Object.getPrototypeOf)?Sr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Er,Or=Object.prototype;function kr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Tr(r))}(r),!e||!K(r,"constructor")&&K(e,"constructor")&&jr(e.constructor)&&"[object Function]"===q(e.constructor)&&K(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!K(r,e))return!1;return!0}(r)))}function xr(r,e){return kr(e)?K(e,"sep")&&(r.sep=e.sep,!Q(r.sep))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Vr(r,e){var t,n=e.length,o=r;for(t=0;t<n;t++){if(!J(o)||!K(o,e[t]))return;o=o[e[t]]}return o}function Ar(r,e){var t,n,o,i;if(!(t=Q(r))&&!H(r))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(o={sep:"."},arguments.length>1&&(i=xr(o,e)))throw i;return n=t?r.split(o.sep):r,a;function a(r){if(J(r))return Vr(r,n)}}function Pr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Fr(r,e){return kr(e)?K(e,"copy")&&(r.copy=e.copy,!or(r.copy))?new TypeError(Pr("1ST2o,GE","copy",r.copy)):K(e,"sep")&&(r.sep=e.sep,!Q(r.sep))?new TypeError(Pr("1ST2W,Gh","sep",r.sep)):null:new TypeError(Pr("1ST2V,FD",e))}return Z((function(r,e,t){var n,o,i;if(J(r)){if(!(n=Q(e))&&!H(e))throw new TypeError(F("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(o={sep:"."},arguments.length>2&&(i=xr(o,t)))throw i;return Vr(r,n?e.split(o.sep):e)}}),"factory",Ar),function(r,e,t){var n,o,i,a,c;if(!H(r))throw new TypeError(Pr("1ST51,Of",r));if(o={copy:!0,sep:"."},arguments.length>2&&(a=Fr(o,t)))throw a;for(i=o.copy?new Array(r.length):r,n=Ar(e,{sep:o.sep}),c=0;c<r.length;c++)i[c]=n(r[c]);return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).deepPluck=e();
//# sourceMappingURL=browser.js.map
