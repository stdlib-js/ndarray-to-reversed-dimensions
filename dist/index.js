"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(p,t){
var v=require('@stdlib/assert-is-integer-array/dist').primitives,o=require('@stdlib/assert-is-ndarray-like/dist'),m=require('@stdlib/ndarray-base-ndarraylike2ndarray/dist'),y=require('@stdlib/ndarray-base-reverse-dimensions/dist'),q=require('@stdlib/ndarray-empty-like/dist'),g=require('@stdlib/ndarray-base-assign/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e,r){var a,i;if(!o(e))throw new TypeError(n('2o54f',e));if(!v(r))throw new TypeError(n('2o5GZ',r));return i=m(e),i=y(i,r,!1),a=q(i),g([i,a]),a}t.exports=d
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
