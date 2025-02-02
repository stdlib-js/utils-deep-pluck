// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).deepPluck=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,b,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,u,s,l,p,f,g,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-f.length)<0?f:f=y?f+m(d):m(d)+f)),u+=n.arg||"",s+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var A,P=Object.prototype,F=P.toString,C=P.__defineGetter__,I=P.__defineSetter__,$=P.__lookupGetter__,R=P.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var B=A;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&U.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,K="function"==typeof X?X.toStringTag:"";var z=W()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[K],e=M(r,K);try{r[K]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[K]=t:delete r[K],n}:function(r){return Z.call(r)};var N=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function q(r){return null!==r&&"object"==typeof r}function D(r){return"string"==typeof r}L(q,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!N(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(q));var H=String.prototype.valueOf;var J=W();function Q(r){return"object"==typeof r&&(r instanceof String||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function Y(r){return D(r)||Q(r)}L(Y,"isPrimitive",D),L(Y,"isObject",Q);var rr=/./;function er(r){return"boolean"==typeof r}var tr=Boolean,nr=Boolean.prototype.toString;var or=W();function ir(r){return"object"==typeof r&&(r instanceof tr||(or?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function ar(r){return er(r)||ir(r)}L(ar,"isPrimitive",er),L(ar,"isObject",ir);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,sr="object"==typeof global?global:null,lr="object"==typeof globalThis?globalThis:null;var pr=function(r){if(arguments.length){if(!er(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(lr)return lr;if(cr)return cr;if(ur)return ur;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=pr.document&&pr.document.childNodes,gr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;function hr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(yr,"REGEXP",dr);var br="function"==typeof rr||"object"==typeof gr||"function"==typeof fr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function vr(r){return"function"===br(r)}var wr,mr=Object,jr=Object.getPrototypeOf;wr=vr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr;var Er=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!N(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!M(r,"constructor")&&M(e,"constructor")&&vr(e.constructor)&&"[object Function]"===z(e.constructor)&&M(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!M(r,e))return!1;return!0}(r)))}function Tr(r,e){return Sr(e)?M(e,"sep")&&(r.sep=e.sep,!D(r.sep))?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Or(r,e){var t,n=e.length,o=r;for(t=0;t<n;t++){if(!q(o)||!M(o,e[t]))return;o=o[e[t]]}return o}function kr(r,e){var t,n,o,i;if(!(t=D(r))&&!N(r))throw new TypeError(V("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(o={sep:"."},arguments.length>1&&(i=Tr(o,e)))throw i;return n=t?r.split(o.sep):r,function(r){if(q(r))return Or(r,n)}}function xr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return L((function(r,e,t){var n,o,i;if(q(r)){if(!(n=D(e))&&!N(e))throw new TypeError(V("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(o={sep:"."},arguments.length>2&&(i=Tr(o,t)))throw i;return Or(r,n?e.split(o.sep):e)}}),"factory",kr),function(r,e,t){var n,o,i,a,c;if(!N(r))throw new TypeError(xr("1ST51",r));if(o={copy:!0,sep:"."},arguments.length>2&&(a=function(r,e){return Sr(e)?M(e,"copy")&&(r.copy=e.copy,!er(r.copy))?new TypeError(xr("1ST2o","copy",r.copy)):M(e,"sep")&&(r.sep=e.sep,!D(r.sep))?new TypeError(xr("1ST2W","sep",r.sep)):null:new TypeError(xr("1ST2V",e))}(o,t)))throw a;for(i=o.copy?new Array(r.length):r,n=kr(e,{sep:o.sep}),c=0;c<r.length;c++)i[c]=n(r[c]);return i}}));
//# sourceMappingURL=index.js.map
