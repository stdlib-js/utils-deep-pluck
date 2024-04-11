// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,b,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,f,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,d,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,u,s,p,l,f,g,y,d;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,p=0;p<e.length;p++)if("string"==typeof(n=e[p]))u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-f.length)<0?f:f=y?f+m(d):m(d)+f)),u+=n.arg||"",s+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,o;for(t=[],o=0,n=O.exec(e);n;)(r=e.slice(o,O.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=O.lastIndex,n=O.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var A,P=Object.prototype,F=P.toString,C=P.__defineGetter__,I=P.__defineSetter__,$=P.__lookupGetter__,R=P.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(e,r,t.get),a&&I&&I.call(e,r,t.set),e};var B=A;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function M(e,r){return null!=e&&U.call(e,r)}var N="function"==typeof Symbol?Symbol:void 0,X="function"==typeof N?N.toStringTag:"",K=W()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[X],r=M(e,X);try{e[X]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[X]=t:delete e[X],n}:function(e){return Z.call(e)},z=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function q(e){return null!==e&&"object"==typeof e}function D(e){return"string"==typeof e}L(q,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!z(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(q));var H=String.prototype.valueOf,J=W();function Q(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function Y(e){return D(e)||Q(e)}L(Y,"isPrimitive",D),L(Y,"isObject",Q);var ee=/./;function re(e){return"boolean"==typeof e}var te=Boolean,ne=Boolean.prototype.toString,oe=W();function ie(e){return"object"==typeof e&&(e instanceof te||(oe?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ae(e){return re(e)||ie(e)}L(ae,"isPrimitive",re),L(ae,"isObject",ie);var ce="object"==typeof self?self:null,ue="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,pe=function(e){if(arguments.length){if(!re(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(se)return se;if(ce)return ce;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),le=pe.document&&pe.document.childNodes,fe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;function de(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return q(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(ge,"REGEXP",ye);var he="function"==typeof ee||"object"==typeof fe||"function"==typeof le?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?de(e).toLowerCase():r};function be(e){return"function"===he(e)}var we,ve=Object,me=Object.getPrototypeOf;we=be(Object.getPrototypeOf)?me:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var je=we,_e=Object.prototype;function Ee(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!z(e)}(e)&&(r=function(e){return null==e?null:(e=ve(e),je(e))}(e),!r||!M(e,"constructor")&&M(r,"constructor")&&be(r.constructor)&&"[object Function]"===K(r.constructor)&&M(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===_e||function(e){var r;for(r in e)if(!M(e,r))return!1;return!0}(e)))}function Se(e,r){return Ee(r)?M(r,"sep")&&(e.sep=r.sep,!D(e.sep))?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","sep",e.sep)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Te(e,r){var t,n=r.length,o=e;for(t=0;t<n;t++){if(!q(o)||!M(o,r[t]))return;o=o[r[t]]}return o}function Oe(e,r){var t,n,o,i;if(!(t=D(e))&&!z(e))throw new TypeError(V("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(o={sep:"."},arguments.length>1&&(i=Se(o,r)))throw i;return n=t?e.split(o.sep):e,function(e){if(q(e))return Te(e,n)}}function ke(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return L((function(e,r,t){var n,o,i;if(q(e)){if(!(n=D(r))&&!z(r))throw new TypeError(V("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(o={sep:"."},arguments.length>2&&(i=Se(o,t)))throw i;return Te(e,n?r.split(o.sep):r)}}),"factory",Oe),function(e,r,t){var n,o,i,a,c;if(!z(e))throw new TypeError(ke("1ST51",e));if(o={copy:!0,sep:"."},arguments.length>2&&(a=function(e,r){return Ee(r)?M(r,"copy")&&(e.copy=r.copy,!re(e.copy))?new TypeError(ke("1ST2o","copy",e.copy)):M(r,"sep")&&(e.sep=r.sep,!D(e.sep))?new TypeError(ke("1ST2W","sep",e.sep)):null:new TypeError(ke("1ST2V",r))}(o,t)))throw a;for(i=o.copy?new Array(e.length):e,n=Oe(r,{sep:o.sep}),c=0;c<e.length;c++)i[c]=n(e[c]);return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).deepPluck=r();
//# sourceMappingURL=browser.js.map