"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(p,t){
var v=require('@stdlib/assert-is-integer-array/dist').primitives,o=require('@stdlib/assert-is-ndarray-like/dist'),m=require('@stdlib/ndarray-base-ndarraylike2ndarray/dist'),y=require('@stdlib/ndarray-base-reverse-dimensions/dist'),q=require('@stdlib/ndarray-empty-like/dist'),g=require('@stdlib/ndarray-base-assign/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e,r){var i,a;if(!o(e))throw new TypeError(n('null4f',e));if(!v(r))throw new TypeError(n('nullGZ',r));return a=m(e),a=y(a,r,!1),i=q(a),g([a,i]),i}t.exports=d
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
