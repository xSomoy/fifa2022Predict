/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
(function() {
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  Math.uuid = function (len, radix) {
    var chars = CHARS, uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

  // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
  // by minimizing calls to random()
  Math.uuidFast = function() {
    var chars = CHARS, uuid = new Array(36), rnd=0, r;
    for (var i = 0; i < 36; i++) {
      if (i==8 || i==13 ||  i==18 || i==23) {
        uuid[i] = '-';
      } else if (i==14) {
        uuid[i] = '4';
      } else {
        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
    return uuid.join('');
  };

  // A more compact, but less performant, RFC4122v4 solution:
  Math.uuidCompact = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };
})();

+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

(function(window, document, exportName) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
	return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
	if (Array.isArray(arg)) {
		each(arg, context[fn], context);
		return true;
	}
	return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
	var i, len;

	if (!obj) {
		return;
	}

	if (obj.forEach) {
		obj.forEach(iterator, context);
	} else if (obj.length !== undefined) {
		for (i = 0, len = obj.length; i < len; i++) {
			iterator.call(context, obj[i], i, obj);
		}
	} else {
		for (i in obj) {
			obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
		}
	}
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
	var keys = Object.keys(src);
	for (var i = 0, len = keys.length; i < len; i++) {
		if (!merge || (merge && dest[keys[i]] === undefined)) {
			dest[keys[i]] = src[keys[i]];
		}
	}
	return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
	return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
	var baseP = base.prototype,
		childP;

	childP = child.prototype = Object.create(baseP);
	childP.constructor = child;
	childP._super = baseP;

	if (properties) {
		extend(childP, properties);
	}
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
	return function boundFn() {
		return fn.apply(context, arguments);
	};
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
	if (typeof val == TYPE_FUNCTION) {
		return val.apply(args ? args[0] || undefined : undefined, args);
	}
	return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
	return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {HTMLElement} element
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(element, types, handler) {
	each(splitStr(types), function(type) {
		element.addEventListener(type, handler, false);
	});
}

/**
 * removeEventListener with multiple events at once
 * @param {HTMLElement} element
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(element, types, handler) {
	each(splitStr(types), function(type) {
		element.removeEventListener(type, handler, false);
	});
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
	while (node) {
		if (node == parent) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
	return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
	return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
	if (src.indexOf && !findByKey) {
		return src.indexOf(find);
	} else {
		for (var i = 0, len = src.length; i < len; i++) {
			if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
				return i;
			}
		}
		return -1;
	}
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
	return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
	var results = [];
	var values = [];
	for (var i = 0, len = src.length; i < len; i++) {
		var val = key ? src[i][key] : src[i];
		if (inArray(values, val) < 0) {
			results.push(src[i]);
		}
		values[i] = val;
	}

	if (sort) {
		if (!key) {
			results = results.sort();
		} else {
			results = results.sort(function sortUniqueArray(a, b) {
				return a[key] > b[key];
			});
		}
	}

	return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
	var prefix, prop;
	var camelProp = property[0].toUpperCase() + property.slice(1);

	for (var i = 0, len = VENDOR_PREFIXES.length; i < len; i++) {
		prefix = VENDOR_PREFIXES[i];
		prop = (prefix) ? prefix + camelProp : property;

		if (prop in obj) {
			return prop;
		}
	}
	return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
	return _uniqueId++;
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
	var self = this;
	this.manager = manager;
	this.callback = callback;
	this.element = manager.element;
	this.target = manager.options.inputTarget;

	// smaller wrapper around the handler, for the scope and the enabled state of the manager,
	// so when disabled the input events are completely bypassed.
	this.domHandler = function(ev) {
		if (boolOrFn(manager.options.enable, [manager])) {
			self.handler(ev);
		}
	};

	this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	this.evWin && addEventListeners(window, this.evWin, this.domHandler);
}

Input.prototype = {
	/**
	 * should handle the inputEvent data and trigger the callback
	 * @virtual
	 */
	handler: function() { },

	/**
	 * unbind the events
	 */
	destroy: function() {
		this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
		this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
		this.evWin && removeEventListeners(window, this.evWin, this.domHandler);
	}
};

/**
 * create new input type manager
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
	var Type;
	if (SUPPORT_POINTER_EVENTS) {
		Type = PointerEventInput;
	} else if (SUPPORT_ONLY_TOUCH) {
		Type = TouchInput;
	} else if (!SUPPORT_TOUCH) {
		Type = MouseInput;
	} else {
		Type = TouchMouseInput;
	}
	return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
	var pointersLen = input.pointers.length;
	var changedPointersLen = input.changedPointers.length;
	var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	input.isFirst = !!isFirst;
	input.isFinal = !!isFinal;

	if (isFirst) {
		manager.session = {};
	}

	// source event is the normalized value of the domEvents
	// like 'touchstart, mouseup, pointerdown'
	input.eventType = eventType;

	// compute scale, rotation etc
	computeInputData(manager, input);

	// emit secret event
	manager.emit('hammer.input', input);

	manager.recognize(input);
	manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
	var session = manager.session;
	var pointers = input.pointers;
	var pointersLength = pointers.length;

	// store the first input to calculate the distance and direction
	if (!session.firstInput) {
		session.firstInput = simpleCloneInputData(input);
	}

	// to compute scale and rotation we need to store the multiple touches
	if (pointersLength > 1 && !session.firstMultiple) {
		session.firstMultiple = simpleCloneInputData(input);
	} else if (pointersLength === 1) {
		session.firstMultiple = false;
	}

	var firstInput = session.firstInput;
	var firstMultiple = session.firstMultiple;
	var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	var center = input.center = getCenter(pointers);
	input.timeStamp = now();
	input.deltaTime = input.timeStamp - firstInput.timeStamp;

	input.angle = getAngle(offsetCenter, center);
	input.distance = getDistance(offsetCenter, center);

	computeDeltaXY(session, input);
	input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	computeIntervalInputData(session, input);

	// find the correct target
	var target = manager.element;
	if (hasParent(input.srcEvent.target, target)) {
		target = input.srcEvent.target;
	}
	input.target = target;
}

function computeDeltaXY(session, input) {
	var center = input.center;
	var offset = session.offsetDelta || {};
	var prevDelta = session.prevDelta || {};
	var prevInput = session.prevInput || {};

	if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
		prevDelta = session.prevDelta = {
			x: prevInput.deltaX || 0,
			y: prevInput.deltaY || 0
		};

		offset = session.offsetDelta = {
			x: center.x,
			y: center.y
		};
	}

	input.deltaX = prevDelta.x + (center.x - offset.x);
	input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
	var last = session.lastInterval || input,
		deltaTime = input.timeStamp - last.timeStamp,
		velocity, velocityX, velocityY, direction;

	if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
		var deltaX = last.deltaX - input.deltaX;
		var deltaY = last.deltaY - input.deltaY;

		var v = getVelocity(deltaTime, deltaX, deltaY);
		velocityX = v.x;
		velocityY = v.y;
		velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
		direction = getDirection(deltaX, deltaY);

		session.lastInterval = input;
	} else {
		// use latest velocity info if it doesn't overtake a minimum period
		velocity = last.velocity;
		velocityX = last.velocityX;
		velocityY = last.velocityY;
		direction = last.direction;
	}

	input.velocity = velocity;
	input.velocityX = velocityX;
	input.velocityY = velocityY;
	input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
	// make a simple copy of the pointers because we will get a reference if we don't
	// we only need clientXY for the calculations
	var pointers = [];
	for (var i = 0; i < input.pointers.length; i++) {
		pointers[i] = {
			clientX: round(input.pointers[i].clientX),
			clientY: round(input.pointers[i].clientY)
		};
	}

	return {
		timeStamp: now(),
		pointers: pointers,
		center: getCenter(pointers),
		deltaX: input.deltaX,
		deltaY: input.deltaY
	};
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
	var pointersLength = pointers.length;

	// no need to loop when only one touch
	if (pointersLength === 1) {
		return {
			x: round(pointers[0].clientX),
			y: round(pointers[0].clientY)
		};
	}

	var x = 0, y = 0;
	for (var i = 0; i < pointersLength; i++) {
		x += pointers[i].clientX;
		y += pointers[i].clientY;
	}

	return {
		x: round(x / pointersLength),
		y: round(y / pointersLength)
	};
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
	return {
		x: x / deltaTime || 0,
		y: y / deltaTime || 0
	};
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
	if (x === y) {
		return DIRECTION_NONE;
	}

	if (abs(x) >= abs(y)) {
		return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	}
	return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
	if (!props) {
		props = PROPS_XY;
	}
	var x = p2[props[0]] - p1[props[0]],
		y = p2[props[1]] - p1[props[1]];

	return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
	if (!props) {
		props = PROPS_XY;
	}
	var x = p2[props[0]] - p1[props[0]],
		y = p2[props[1]] - p1[props[1]];
	return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
	return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
	return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
	mousedown: INPUT_START,
	mousemove: INPUT_MOVE,
	mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
	this.evEl = MOUSE_ELEMENT_EVENTS;
	this.evWin = MOUSE_WINDOW_EVENTS;

	this.allow = true; // used by Input.TouchMouse to disable mouse events
	this.pressed = false; // mousedown state

	Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
	/**
	 * handle mouse events
	 * @param {Object} ev
	 */
	handler: function MEhandler(ev) {
		var eventType = MOUSE_INPUT_MAP[ev.type];

		// on start we want to have the left mouse button down
		if (eventType & INPUT_START && ev.button === 0) {
			this.pressed = true;
		}

		if (eventType & INPUT_MOVE && ev.which !== 1) {
			eventType = INPUT_END;
		}

		// mouse must be down, and mouse events are allowed (see the TouchMouse input)
		if (!this.pressed || !this.allow) {
			return;
		}

		if (eventType & INPUT_END) {
			this.pressed = false;
		}

		this.callback(this.manager, eventType, {
			pointers: [ev],
			changedPointers: [ev],
			pointerType: INPUT_TYPE_MOUSE,
			srcEvent: ev
		});
	},
});

var POINTER_INPUT_MAP = {
	pointerdown: INPUT_START,
	pointermove: INPUT_MOVE,
	pointerup: INPUT_END,
	pointercancel: INPUT_CANCEL,
	pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
	2: INPUT_TYPE_TOUCH,
	3: INPUT_TYPE_PEN,
	4: INPUT_TYPE_MOUSE,
	5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
	POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
	this.evEl = POINTER_ELEMENT_EVENTS;
	this.evWin = POINTER_WINDOW_EVENTS;

	Input.apply(this, arguments);

	this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
	/**
	 * handle mouse events
	 * @param {Object} ev
	 */
	handler: function PEhandler(ev) {
		var store = this.store;
		var removePointer = false;

		var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
		var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
		var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

		var isTouch = (pointerType == INPUT_TYPE_TOUCH);

		// start and mouse must be down
		if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
			store.push(ev);
		} else if (eventType & (INPUT_END | INPUT_CANCEL)) {
			removePointer = true;
		}

		// get index of the event in the store
		// it not found, so the pointer hasn't been down (so it's probably a hover)
		var storeIndex = inArray(store, ev.pointerId, 'pointerId');
		if (storeIndex < 0) {
			return;
		}

		// update the event in the store
		store[storeIndex] = ev;

		this.callback(this.manager, eventType, {
			pointers: store,
			changedPointers: [ev],
			pointerType: pointerType,
			srcEvent: ev
		});

		if (removePointer) {
			// remove from the store
			store.splice(storeIndex, 1);
		}
	}
});

var TOUCH_INPUT_MAP = {
	touchstart: INPUT_START,
	touchmove: INPUT_MOVE,
	touchend: INPUT_END,
	touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
	this.evTarget = TOUCH_TARGET_EVENTS;
	this.targetIds = {};

	Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
	/**
	 * handle touch events
	 * @param {Object} ev
	 */
	handler: function TEhandler(ev) {
		var type = TOUCH_INPUT_MAP[ev.type];
		var touches = getTouches.call(this, ev, type);
		if (!touches) {
			return;
		}

		this.callback(this.manager, type, {
			pointers: touches[0],
			changedPointers: touches[1],
			pointerType: INPUT_TYPE_TOUCH,
			srcEvent: ev
		});
	}
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
	var allTouches = toArray(ev.touches);
	var targetIds = this.targetIds;

	// when there is only one touch, the process can be simplified
	if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
		targetIds[allTouches[0].identifier] = true;
		return [allTouches, allTouches];
	}

	var i, len;
	var targetTouches = toArray(ev.targetTouches);
	var changedTouches = toArray(ev.changedTouches);
	var changedTargetTouches = [];

	// collect touches
	if (type === INPUT_START) {
		for (i = 0, len = targetTouches.length; i < len; i++) {
			targetIds[targetTouches[i].identifier] = true;
		}
	}

	// filter changed touches to only contain touches that exist in the collected target ids
	for (i = 0, len = changedTouches.length; i < len; i++) {
		if (targetIds[changedTouches[i].identifier]) {
			changedTargetTouches.push(changedTouches[i]);
		}

		// cleanup removed touches
		if (type & (INPUT_END | INPUT_CANCEL)) {
			delete targetIds[changedTouches[i].identifier];
		}
	}

	if (!changedTargetTouches.length) {
		return;
	}

	return [
		// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
		uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
		changedTargetTouches
	];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
	Input.apply(this, arguments);

	var handler = bindFn(this.handler, this);
	this.touch = new TouchInput(this.manager, handler);
	this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
	/**
	 * handle mouse and touch events
	 * @param {Hammer} manager
	 * @param {String} inputEvent
	 * @param {Object} inputData
	 */
	handler: function TMEhandler(manager, inputEvent, inputData) {
		var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
			isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

		// when we're in a touch event, so  block all upcoming mouse events
		// most mobile browser also emit mouseevents, right after touchstart
		if (isTouch) {
			this.mouse.allow = false;
		} else if (isMouse && !this.mouse.allow) {
			return;
		}

		// reset the allowMouse when we're done
		if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
			this.mouse.allow = true;
		}

		this.callback(manager, inputEvent, inputData);
	},

	/**
	 * remove the event listeners
	 */
	destroy: function destroy() {
		this.touch.destroy();
		this.mouse.destroy();
	}
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
	this.manager = manager;
	this.set(value);
}

TouchAction.prototype = {
	/**
	 * set the touchAction value on the element or enable the polyfill
	 * @param {String} value
	 */
	set: function(value) {
		// find out the touch-action by the event handlers
		if (value == TOUCH_ACTION_COMPUTE) {
			value = this.compute();
		}

		if (NATIVE_TOUCH_ACTION) {
			this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
		}
		this.actions = value.toLowerCase().trim();
	},

	/**
	 * just re-set the touchAction value
	 */
	update: function() {
		this.set(this.manager.options.touchAction);
	},

	/**
	 * compute the value for the touchAction property based on the recognizer's settings
	 * @returns {String} value
	 */
	compute: function() {
		var actions = [];
		each(this.manager.recognizers, function(recognizer) {
			if (boolOrFn(recognizer.options.enable, [recognizer])) {
				actions = actions.concat(recognizer.getTouchAction());
			}
		});
		return cleanTouchActions(actions.join(' '));
	},

	/**
	 * this method is called on each input cycle and provides the preventing of the browser behavior
	 * @param {Object} input
	 */
	preventDefaults: function(input) {
		// not needed with native support for the touchAction property
		if (NATIVE_TOUCH_ACTION) {
			return;
		}

		var srcEvent = input.srcEvent;
		var direction = input.offsetDirection;

		// if the touch action did prevented once this session
		if (this.manager.session.prevented) {
			srcEvent.preventDefault();
			return;
		}

		var actions = this.actions;
		var hasNone = inStr(actions, TOUCH_ACTION_NONE);
		var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
		var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

		if (hasNone || (hasPanY && hasPanX) ||
			(hasPanY && direction & DIRECTION_HORIZONTAL) ||
			(hasPanX && direction & DIRECTION_VERTICAL)) {
			return this.preventSrc(srcEvent);
		}
	},

	/**
	 * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	 * @param {Object} srcEvent
	 */
	preventSrc: function(srcEvent) {
		this.manager.session.prevented = true;
		srcEvent.preventDefault();
	}
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
	// none
	if (inStr(actions, TOUCH_ACTION_NONE)) {
		return TOUCH_ACTION_NONE;
	}

	var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	// pan-x and pan-y can be combined
	if (hasPanX && hasPanY) {
		return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
	}

	// pan-x OR pan-y
	if (hasPanX || hasPanY) {
		return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	}

	// manipulation
	if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
		return TOUCH_ACTION_MANIPULATION;
	}

	return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
	this.id = uniqueId();

	this.manager = null;
	this.options = merge(options || {}, this.defaults);

	// default is enable true
	this.options.enable = ifUndefined(this.options.enable, true);

	this.state = STATE_POSSIBLE;

	this.simultaneous = {};
	this.requireFail = [];
}

Recognizer.prototype = {
	/**
	 * @virtual
	 * @type {Object}
	 */
	defaults: {},

	/**
	 * set options
	 * @param {Object} options
	 * @return {Recognizer}
	 */
	set: function(options) {
		extend(this.options, options);

		// also update the touchAction, in case something changed about the directions/enabled state
		this.manager && this.manager.touchAction.update();
		return this;
	},

	/**
	 * recognize simultaneous with an other recognizer.
	 * @param {Recognizer} otherRecognizer
	 * @returns {Recognizer} this
	 */
	recognizeWith: function(otherRecognizer) {
		if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
			return this;
		}

		var simultaneous = this.simultaneous;
		otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		if (!simultaneous[otherRecognizer.id]) {
			simultaneous[otherRecognizer.id] = otherRecognizer;
			otherRecognizer.recognizeWith(this);
		}
		return this;
	},

	/**
	 * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	 * @param {Recognizer} otherRecognizer
	 * @returns {Recognizer} this
	 */
	dropRecognizeWith: function(otherRecognizer) {
		if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
			return this;
		}

		otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		delete this.simultaneous[otherRecognizer.id];
		return this;
	},

	/**
	 * recognizer can only run when an other is failing
	 * @param {Recognizer} otherRecognizer
	 * @returns {Recognizer} this
	 */
	requireFailure: function(otherRecognizer) {
		if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
			return this;
		}

		var requireFail = this.requireFail;
		otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		if (inArray(requireFail, otherRecognizer) === -1) {
			requireFail.push(otherRecognizer);
			otherRecognizer.requireFailure(this);
		}
		return this;
	},

	/**
	 * drop the requireFailure link. it does not remove the link on the other recognizer.
	 * @param {Recognizer} otherRecognizer
	 * @returns {Recognizer} this
	 */
	dropRequireFailure: function(otherRecognizer) {
		if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
			return this;
		}

		otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		var index = inArray(this.requireFail, otherRecognizer);
		if (index > -1) {
			this.requireFail.splice(index, 1);
		}
		return this;
	},

	/**
	 * has require failures boolean
	 * @returns {boolean}
	 */
	hasRequireFailures: function() {
		return this.requireFail.length > 0;
	},

	/**
	 * if the recognizer can recognize simultaneous with an other recognizer
	 * @param {Recognizer} otherRecognizer
	 * @returns {Boolean}
	 */
	canRecognizeWith: function(otherRecognizer) {
		return !!this.simultaneous[otherRecognizer.id];
	},

	/**
	 * You should use `tryEmit` instead of `emit` directly to check
	 * that all the needed recognizers has failed before emitting.
	 * @param {Object} input
	 */
	emit: function(input) {
		var self = this;
		var state = this.state;

		function emit(withState) {
			self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
		}

		// 'panstart' and 'panmove'
		if (state < STATE_ENDED) {
			emit(true);
		}

		emit(); // simple 'eventName' events

		// panend and pancancel
		if (state >= STATE_ENDED) {
			emit(true);
		}
	},

	/**
	 * Check that all the require failure recognizers has failed,
	 * if true, it emits a gesture event,
	 * otherwise, setup the state to FAILED.
	 * @param {Object} input
	 */
	tryEmit: function(input) {
		if (this.canEmit()) {
			return this.emit(input);
		}
		// it's failing anyway
		this.state = STATE_FAILED;
	},

	/**
	 * can we emit?
	 * @returns {boolean}
	 */
	canEmit: function() {
		for (var i = 0; i < this.requireFail.length; i++) {
			if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
				return false;
			}
		}
		return true;
	},

	/**
	 * update the recognizer
	 * @param {Object} inputData
	 */
	recognize: function(inputData) {
		// make a new copy of the inputData
		// so we can change the inputData without messing up the other recognizers
		var inputDataClone = extend({}, inputData);

		// is is enabled and allow recognizing?
		if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
			this.reset();
			this.state = STATE_FAILED;
			return;
		}

		// reset when we've reached the end
		if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
			this.state = STATE_POSSIBLE;
		}

		this.state = this.process(inputDataClone);

		// the recognizer has recognized a gesture
		// so trigger an event
		if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
			this.tryEmit(inputDataClone);
		}
	},

	/**
	 * return the state of the recognizer
	 * the actual recognizing happens in this method
	 * @virtual
	 * @param {Object} inputData
	 * @returns {Const} STATE
	 */
	process: function(inputData) { }, // jshint ignore:line

	/**
	 * return the preferred touch-action
	 * @virtual
	 * @returns {Array}
	 */
	getTouchAction: function() { },

	/**
	 * called when the gesture isn't allowed to recognize
	 * like when another is being recognized or it is disabled
	 * @virtual
	 */
	reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
	if (state & STATE_CANCELLED) {
		return 'cancel';
	} else if (state & STATE_ENDED) {
		return 'end';
	} else if (state & STATE_CHANGED) {
		return 'move';
	} else if (state & STATE_BEGAN) {
		return 'start';
	}
	return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
	if (direction == DIRECTION_DOWN) {
		return 'down';
	} else if (direction == DIRECTION_UP) {
		return 'up';
	} else if (direction == DIRECTION_LEFT) {
		return 'left';
	} else if (direction == DIRECTION_RIGHT) {
		return 'right';
	}
	return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	var manager = recognizer.manager;
	if (manager) {
		return manager.get(otherRecognizer);
	}
	return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
	Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
	/**
	 * @namespace
	 * @memberof AttrRecognizer
	 */
	defaults: {
		/**
		 * @type {Number}
		 * @default 1
		 */
		pointers: 1
	},

	/**
	 * Used to check if it the recognizer receives valid input, like input.distance > 10.
	 * @memberof AttrRecognizer
	 * @param {Object} input
	 * @returns {Boolean} recognized
	 */
	attrTest: function(input) {
		var optionPointers = this.options.pointers;
		return optionPointers === 0 || input.pointers.length === optionPointers;
	},

	/**
	 * Process the input and return the state for the recognizer
	 * @memberof AttrRecognizer
	 * @param {Object} input
	 * @returns {*} State
	 */
	process: function(input) {
		var state = this.state;
		var eventType = input.eventType;

		var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
		var isValid = this.attrTest(input);

		// on cancel input and we've recognized before, return STATE_CANCELLED
		if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
			return state | STATE_CANCELLED;
		} else if (isRecognized || isValid) {
			if (eventType & INPUT_END) {
				return state | STATE_ENDED;
			} else if (!(state & STATE_BEGAN)) {
				return STATE_BEGAN;
			}
			return state | STATE_CHANGED;
		}
		return STATE_FAILED;
	}
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
	AttrRecognizer.apply(this, arguments);

	this.pX = null;
	this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
	/**
	 * @namespace
	 * @memberof PanRecognizer
	 */
	defaults: {
		event: 'pan',
		threshold: 10,
		pointers: 1,
		direction: DIRECTION_ALL
	},

	getTouchAction: function() {
		var direction = this.options.direction;

		if (direction === DIRECTION_ALL) {
			return [TOUCH_ACTION_NONE];
		}

		var actions = [];
		if (direction & DIRECTION_HORIZONTAL) {
			actions.push(TOUCH_ACTION_PAN_Y);
		}
		if (direction & DIRECTION_VERTICAL) {
			actions.push(TOUCH_ACTION_PAN_X);
		}
		return actions;
	},

	directionTest: function(input) {
		var options = this.options;
		var hasMoved = true;
		var distance = input.distance;
		var direction = input.direction;
		var x = input.deltaX;
		var y = input.deltaY;

		// lock to axis?
		if (!(direction & options.direction)) {
			if (options.direction & DIRECTION_HORIZONTAL) {
				direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
				hasMoved = x != this.pX;
				distance = Math.abs(input.deltaX);
			} else {
				direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
				hasMoved = y != this.pY;
				distance = Math.abs(input.deltaY);
			}
		}
		input.direction = direction;
		return hasMoved && distance > options.threshold && direction & options.direction;
	},

	attrTest: function(input) {
		return AttrRecognizer.prototype.attrTest.call(this, input) &&
			(this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	},

	emit: function(input) {
		this.pX = input.deltaX;
		this.pY = input.deltaY;

		var direction = directionStr(input.direction);
		if (direction) {
			this.manager.emit(this.options.event + direction, input);
		}

		this._super.emit.call(this, input);
	}
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
	AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
	/**
	 * @namespace
	 * @memberof PinchRecognizer
	 */
	defaults: {
		event: 'pinch',
		threshold: 0,
		pointers: 2
	},

	getTouchAction: function() {
		return [TOUCH_ACTION_NONE];
	},

	attrTest: function(input) {
		return this._super.attrTest.call(this, input) &&
			(Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	},

	emit: function(input) {
		this._super.emit.call(this, input);
		if (input.scale !== 1) {
			var inOut = input.scale < 1 ? 'in' : 'out';
			this.manager.emit(this.options.event + inOut, input);
		}
	}
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
	Recognizer.apply(this, arguments);

	this._timer = null;
	this._input = null;
}

inherit(PressRecognizer, Recognizer, {
	/**
	 * @namespace
	 * @memberof PressRecognizer
	 */
	defaults: {
		event: 'press',
		pointers: 1,
		time: 500, // minimal time of the pointer to be pressed
		threshold: 5 // a minimal movement is ok, but keep it low
	},

	getTouchAction: function() {
		return [TOUCH_ACTION_AUTO];
	},

	process: function(input) {
		var options = this.options;
		var validPointers = input.pointers.length === options.pointers;
		var validMovement = input.distance < options.threshold;
		var validTime = input.deltaTime > options.time;

		this._input = input;

		// we only allow little movement
		// and we've reached an end event, so a tap is possible
		if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
			this.reset();
		} else if (input.eventType & INPUT_START) {
			this.reset();
			this._timer = setTimeoutContext(function() {
				this.state = STATE_RECOGNIZED;
				this.tryEmit();
			}, options.time, this);
		} else if (input.eventType & INPUT_END) {
			return STATE_RECOGNIZED;
		}
		return STATE_FAILED;
	},

	reset: function() {
		clearTimeout(this._timer);
	},

	emit: function(input) {
		if (this.state !== STATE_RECOGNIZED) {
			return;
		}

		if (input && (input.eventType & INPUT_END)) {
			this.manager.emit(this.options.event + 'up', input);
		} else {
			this._input.timeStamp = now();
			this.manager.emit(this.options.event, this._input);
		}
	}
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
	AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
	/**
	 * @namespace
	 * @memberof RotateRecognizer
	 */
	defaults: {
		event: 'rotate',
		threshold: 0,
		pointers: 2
	},

	getTouchAction: function() {
		return [TOUCH_ACTION_NONE];
	},

	attrTest: function(input) {
		return this._super.attrTest.call(this, input) &&
			(Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	}
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
	AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
	/**
	 * @namespace
	 * @memberof SwipeRecognizer
	 */
	defaults: {
		event: 'swipe',
		threshold: 10,
		velocity: 0.65,
		direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
		pointers: 1
	},

	getTouchAction: function() {
		return PanRecognizer.prototype.getTouchAction.call(this);
	},

	attrTest: function(input) {
		var direction = this.options.direction;
		var velocity;

		if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
			velocity = input.velocity;
		} else if (direction & DIRECTION_HORIZONTAL) {
			velocity = input.velocityX;
		} else if (direction & DIRECTION_VERTICAL) {
			velocity = input.velocityY;
		}

		return this._super.attrTest.call(this, input) &&
			direction & input.direction &&
			abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	},

	emit: function(input) {
		var direction = directionStr(input.direction);
		if (direction) {
			this.manager.emit(this.options.event + direction, input);
		}

		this.manager.emit(this.options.event, input);
	}
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
	Recognizer.apply(this, arguments);

	// previous time and center,
	// used for tap counting
	this.pTime = false;
	this.pCenter = false;

	this._timer = null;
	this._input = null;
	this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
	/**
	 * @namespace
	 * @memberof PinchRecognizer
	 */
	defaults: {
		event: 'tap',
		pointers: 1,
		taps: 1,
		interval: 300, // max time between the multi-tap taps
		time: 250, // max time of the pointer to be down (like finger on the screen)
		threshold: 2, // a minimal movement is ok, but keep it low
		posThreshold: 10 // a multi-tap can be a bit off the initial position
	},

	getTouchAction: function() {
		return [TOUCH_ACTION_MANIPULATION];
	},

	process: function(input) {
		var options = this.options;

		var validPointers = input.pointers.length === options.pointers;
		var validMovement = input.distance < options.threshold;
		var validTouchTime = input.deltaTime < options.time;

		this.reset();

		if ((input.eventType & INPUT_START) && (this.count === 0)) {
			return this.failTimeout();
		}

		// we only allow little movement
		// and we've reached an end event, so a tap is possible
		if (validMovement && validTouchTime && validPointers) {
			if (input.eventType != INPUT_END) {
				return this.failTimeout();
			}

			var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
			var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

			this.pTime = input.timeStamp;
			this.pCenter = input.center;

			if (!validMultiTap || !validInterval) {
				this.count = 1;
			} else {
				this.count += 1;
			}

			this._input = input;

			// if tap count matches we have recognized it,
			// else it has began recognizing...
			var tapCount = this.count % options.taps;
			if (tapCount === 0) {
				// no failing requirements, immediately trigger the tap event
				// or wait as long as the multitap interval to trigger
				if (!this.hasRequireFailures()) {
					return STATE_RECOGNIZED;
				} else {
					this._timer = setTimeoutContext(function() {
						this.state = STATE_RECOGNIZED;
						this.tryEmit();
					}, options.interval, this);
					return STATE_BEGAN;
				}
			}
		}
		return STATE_FAILED;
	},

	failTimeout: function() {
		this._timer = setTimeoutContext(function() {
			this.state = STATE_FAILED;
		}, this.options.interval, this);
		return STATE_FAILED;
	},

	reset: function() {
		clearTimeout(this._timer);
	},

	emit: function() {
		if (this.state == STATE_RECOGNIZED ) {
			this._input.tapCount = this.count;
			this.manager.emit(this.options.event, this._input);
		}
	}
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
	options = options || {};
	options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.2';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
	/**
	 * set if DOM events are being triggered.
	 * But this is slower and unused by simple implementations, so disabled by default.
	 * @type {Boolean}
	 * @default false
	 */
	domEvents: false,

	/**
	 * The value for the touchAction property/fallback.
	 * When set to `compute` it will magically set the correct value based on the added recognizers.
	 * @type {String}
	 * @default compute
	 */
	touchAction: TOUCH_ACTION_COMPUTE,

	/**
	 * EXPERIMENTAL FEATURE
	 * Change the parent input target element.
	 * If Null, then it is being set the to main element.
	 * @type {Null|EventTarget}
	 * @default null
	 */
	inputTarget: null,

	/**
	 * @type {Boolean}
	 * @default true
	 */
	enable: true,

	/**
	 * Default recognizer setup when calling `Hammer()`
	 * When creating a new Manager these will be skipped.
	 * @type {Array}
	 */
	preset: [
		// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
		[RotateRecognizer, { enable: false }],
		[PinchRecognizer, { enable: false }, ['rotate']],
		[SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
		[PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
		[TapRecognizer],
		[TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
		[PressRecognizer]
	],

	/**
	 * Some CSS properties can be used to improve the working of Hammer.
	 * Add them to this method and they will be set when creating a new Manager.
	 * @namespace
	 */
	cssProps: {
		/**
		 * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
		 * @type {String}
		 * @default 'none'
		 */
		userSelect: 'none',

		/**
		 * Disable the Windows Phone grippers when pressing an element.
		 * @type {String}
		 * @default 'none'
		 */
		touchSelect: 'none',

		/**
		 * Disables the default callout shown when you touch and hold a touch target.
		 * On iOS, when you touch and hold a touch target such as a link, Safari displays
		 * a callout containing information about the link. This property allows you to disable that callout.
		 * @type {String}
		 * @default 'none'
		 */
		touchCallout: 'none',

		/**
		 * Specifies whether zooming is enabled. Used by IE10>
		 * @type {String}
		 * @default 'none'
		 */
		contentZooming: 'none',

		/**
		 * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
		 * @type {String}
		 * @default 'none'
		 */
		userDrag: 'none',

		/**
		 * Overrides the highlight color shown when the user taps a link or a JavaScript
		 * clickable element in iOS. This property obeys the alpha value, if specified.
		 * @type {String}
		 * @default 'rgba(0,0,0,0)'
		 */
		tapHighlightColor: 'rgba(0,0,0,0)'
	}
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
	options = options || {};

	this.options = merge(options, Hammer.defaults);
	this.options.inputTarget = this.options.inputTarget || element;

	this.handlers = {};
	this.session = {};
	this.recognizers = [];

	this.element = element;
	this.input = createInputInstance(this);
	this.touchAction = new TouchAction(this, this.options.touchAction);

	toggleCssProps(this, true);

	each(options.recognizers, function(item) {
		var recognizer = this.add(new (item[0])(item[1]));
		item[2] && recognizer.recognizeWith(item[2]);
		item[3] && recognizer.requireFailure(item[2]);
	}, this);
}

Manager.prototype = {
	/**
	 * set options
	 * @param {Object} options
	 * @returns {Manager}
	 */
	set: function(options) {
		extend(this.options, options);
		return this;
	},

	/**
	 * stop recognizing for this session.
	 * This session will be discarded, when a new [input]start event is fired.
	 * When forced, the recognizer cycle is stopped immediately.
	 * @param {Boolean} [force]
	 */
	stop: function(force) {
		this.session.stopped = force ? FORCED_STOP : STOP;
	},

	/**
	 * run the recognizers!
	 * called by the inputHandler function on every movement of the pointers (touches)
	 * it walks through all the recognizers and tries to detect the gesture that is being made
	 * @param {Object} inputData
	 */
	recognize: function(inputData) {
		var session = this.session;
		if (session.stopped) {
			return;
		}

		// run the touch-action polyfill
		this.touchAction.preventDefaults(inputData);

		var recognizer;
		var recognizers = this.recognizers;

		// this holds the recognizer that is being recognized.
		// so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
		// if no recognizer is detecting a thing, it is set to `null`
		var curRecognizer = session.curRecognizer;

		// reset when the last recognizer is recognized
		// or when we're in a new session
		if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
			curRecognizer = session.curRecognizer = null;
		}

		for (var i = 0, len = recognizers.length; i < len; i++) {
			recognizer = recognizers[i];

			// find out if we are allowed try to recognize the input for this one.
			// 1.   allow if the session is NOT forced stopped (see the .stop() method)
			// 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
			//      that is being recognized.
			// 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
			//      this can be setup with the `recognizeWith()` method on the recognizer.
			if (session.stopped !== FORCED_STOP && ( // 1
					!curRecognizer || recognizer == curRecognizer || // 2
					recognizer.canRecognizeWith(curRecognizer))) { // 3
				recognizer.recognize(inputData);
			} else {
				recognizer.reset();
			}

			// if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
			// current active recognizer. but only if we don't already have an active recognizer
			if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
				curRecognizer = session.curRecognizer = recognizer;
			}
		}
	},

	/**
	 * get a recognizer by its event name.
	 * @param {Recognizer|String} recognizer
	 * @returns {Recognizer|Null}
	 */
	get: function(recognizer) {
		if (recognizer instanceof Recognizer) {
			return recognizer;
		}

		var recognizers = this.recognizers;
		for (var i = 0; i < recognizers.length; i++) {
			if (recognizers[i].options.event == recognizer) {
				return recognizers[i];
			}
		}
		return null;
	},

	/**
	 * add a recognizer to the manager
	 * existing recognizers with the same event name will be removed
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer|Manager}
	 */
	add: function(recognizer) {
		if (invokeArrayArg(recognizer, 'add', this)) {
			return this;
		}

		// remove existing
		var existing = this.get(recognizer.options.event);
		if (existing) {
			this.remove(existing);
		}

		this.recognizers.push(recognizer);
		recognizer.manager = this;

		this.touchAction.update();
		return recognizer;
	},

	/**
	 * remove a recognizer by name or instance
	 * @param {Recognizer|String} recognizer
	 * @returns {Manager}
	 */
	remove: function(recognizer) {
		if (invokeArrayArg(recognizer, 'remove', this)) {
			return this;
		}

		var recognizers = this.recognizers;
		recognizer = this.get(recognizer);
		recognizers.splice(inArray(recognizers, recognizer), 1);

		this.touchAction.update();
		return this;
	},

	/**
	 * bind event
	 * @param {String} events
	 * @param {Function} handler
	 * @returns {EventEmitter} this
	 */
	on: function(events, handler) {
		var handlers = this.handlers;
		each(splitStr(events), function(event) {
			handlers[event] = handlers[event] || [];
			handlers[event].push(handler);
		});
		return this;
	},

	/**
	 * unbind event, leave emit blank to remove all handlers
	 * @param {String} events
	 * @param {Function} [handler]
	 * @returns {EventEmitter} this
	 */
	off: function(events, handler) {
		var handlers = this.handlers;
		each(splitStr(events), function(event) {
			if (!handler) {
				delete handlers[event];
			} else {
				handlers[event].splice(inArray(handlers[event], handler), 1);
			}
		});
		return this;
	},

	/**
	 * emit event to the listeners
	 * @param {String} event
	 * @param {Object} data
	 */
	emit: function(event, data) {
		// we also want to trigger dom events
		if (this.options.domEvents) {
			triggerDomEvent(event, data);
		}

		// no handlers, so skip it all
		var handlers = this.handlers[event] && this.handlers[event].slice();
		if (!handlers || !handlers.length) {
			return;
		}

		data.type = event;
		data.preventDefault = function() {
			data.srcEvent.preventDefault();
		};

		for (var i = 0, len = handlers.length; i < len; i++) {
			handlers[i](data);
		}
	},

	/**
	 * destroy the manager and unbinds all events
	 * it doesn't unbind dom events, that is the user own responsibility
	 */
	destroy: function() {
		this.element && toggleCssProps(this, false);

		this.handlers = {};
		this.session = {};
		this.input.destroy();
		this.element = null;
	}
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
	var element = manager.element;
	each(manager.options.cssProps, function(value, name) {
		element.style[prefixed(element.style, name)] = add ? value : '';
	});
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
	var gestureEvent = document.createEvent('Event');
	gestureEvent.initEvent(event, true, true);
	gestureEvent.gesture = data;
	data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
	INPUT_START: INPUT_START,
	INPUT_MOVE: INPUT_MOVE,
	INPUT_END: INPUT_END,
	INPUT_CANCEL: INPUT_CANCEL,

	STATE_POSSIBLE: STATE_POSSIBLE,
	STATE_BEGAN: STATE_BEGAN,
	STATE_CHANGED: STATE_CHANGED,
	STATE_ENDED: STATE_ENDED,
	STATE_RECOGNIZED: STATE_RECOGNIZED,
	STATE_CANCELLED: STATE_CANCELLED,
	STATE_FAILED: STATE_FAILED,

	DIRECTION_NONE: DIRECTION_NONE,
	DIRECTION_LEFT: DIRECTION_LEFT,
	DIRECTION_RIGHT: DIRECTION_RIGHT,
	DIRECTION_UP: DIRECTION_UP,
	DIRECTION_DOWN: DIRECTION_DOWN,
	DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	DIRECTION_ALL: DIRECTION_ALL,

	Manager: Manager,
	Input: Input,
	TouchAction: TouchAction,

	Recognizer: Recognizer,
	AttrRecognizer: AttrRecognizer,
	Tap: TapRecognizer,
	Pan: PanRecognizer,
	Swipe: SwipeRecognizer,
	Pinch: PinchRecognizer,
	Rotate: RotateRecognizer,
	Press: PressRecognizer,

	on: addEventListeners,
	off: removeEventListeners,
	each: each,
	merge: merge,
	extend: extend,
	inherit: inherit,
	bindFn: bindFn,
	prefixed: prefixed
});

if (typeof define == TYPE_FUNCTION && define.amd) {
	define(function() {
		return Hammer;
	});
} else if (typeof module != 'undefined' && module.exports) {
	module.exports = Hammer;
} else {
	window[exportName] = Hammer;
}

})(window, document, 'Hammer');

// https://github.com/hammerjs/jquery.hammer.js

;( function($, Hammer, dataAttr) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data(dataAttr)) {
            $el.data(dataAttr, new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })( Hammer.Manager.prototype.emit );
})( jQuery, Hammer, "hammer" );

/* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.6, License: MIT License (MIT) */
!function(e,t,a){!function(t){var o="function"==typeof define&&define.amd,n="https:"==a.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E")),t()}(function(){var o="mCustomScrollbar",n="mCS",i=".mCustomScrollbar",r={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},l=0,s={},c=t.attachEvent&&!t.addEventListener?1:0,d=!1,u=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],f={init:function(t){var t=e.extend(!0,{},r,t),a=h.call(this);if(t.live){var o=t.liveSelector||this.selector||i,c=e(o);if("off"===t.live)return void p(o);s[o]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&p(o)},500)}else p(o);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":g(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=v(t.scrollButtons.scrollType),m(t),e(a).each(function(){var a=e(this);if(!a.data(n)){a.data(n,{idx:++l,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:a.css("direction"),cbOffsets:null,trigger:null});var o=a.data(n),i=o.opt,r=a.data("mcs-axis"),s=a.data("mcs-scrollbar-position"),c=a.data("mcs-theme");r&&(i.axis=r),s&&(i.scrollbarPosition=s),c&&(i.theme=c,m(i)),x.call(this),e("#mCSB_"+o.idx+"_container img:not(."+u[2]+")").addClass(u[2]),f.update.call(null,a)}})},update:function(t,a){var o=t||h.call(this);return e(o).each(function(){var t=e(this);if(t.data(n)){var o=t.data(n),i=o.opt,r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(!r.length)return;o.tweenRunning&&V(t),t.hasClass(u[3])&&t.removeClass(u[3]),t.hasClass(u[4])&&t.removeClass(u[4]),b.call(this),S.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",_(r.children())),o.overflowed=T.call(this),I.call(this),i.autoDraggerLength&&C.call(this),y.call(this),M.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(o.overflowed[0]?l[0].height()>l[0].parent().height()?k.call(this):(Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(k.call(this),"y"===i.axis?O.call(this):"yx"===i.axis&&o.overflowed[1]&&Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(o.overflowed[1]?l[1].width()>l[1].parent().width()?k.call(this):(Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(k.call(this),"x"===i.axis?O.call(this):"yx"===i.axis&&o.overflowed[0]&&Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),a&&o&&(2===a&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===a&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,a){if("undefined"!=typeof t&&null!=t){var o=h.call(this);return e(o).each(function(){var o=e(this);if(o.data(n)){var i=o.data(n),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,a),c=j.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=Y.call(this,c[0],"y"),c[1]=Y.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(o,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(o,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=h.call(this);return e(t).each(function(){var t=e(this);t.data(n)&&V(t)})},disable:function(t){var a=h.call(this);return e(a).each(function(){var a=e(this);if(a.data(n)){{a.data(n)}X.call(this,"remove"),O.call(this),t&&k.call(this),I.call(this,!0),a.addClass(u[3])}})},destroy:function(){var t=h.call(this);return e(t).each(function(){var a=e(this);if(a.data(n)){var i=a.data(n),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&p(r.liveSelector||e(t).selector),X.call(this,"remove"),O.call(this),k.call(this),a.removeData(n),Z(this,"mcs"),c.remove(),s.find("img."+u[2]).removeClass(u[2]),l.replaceWith(s.contents()),a.removeClass(o+" _"+n+"_"+i.idx+" "+u[6]+" "+u[7]+" "+u[5]+" "+u[3]).addClass(u[4])}})}},h=function(){return"object"!=typeof e(this)||e(this).length<1?i:this},m=function(t){var a=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],o=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,a)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,o)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},p=function(e){s[e]&&(clearTimeout(s[e]),Z(s,e))},g=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},v=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},x=function(){var t=e(this),a=t.data(n),i=a.opt,r=i.autoExpandScrollbar?" "+u[1]+"_expand":"",l=["<div id='mCSB_"+a.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+u[12]+"'><div id='mCSB_"+a.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+a.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+u[12]+"'><div id='mCSB_"+a.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],d="yx"===i.axis?"<div id='mCSB_"+a.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+u[6]:"",h="x"!==i.axis&&"rtl"===a.langDir?" "+u[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===a.langDir?"989999px":i.setLeft,t.addClass(o+" _"+n+"_"+a.idx+f+h).wrapInner("<div id='mCSB_"+a.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+a.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+a.langDir+" /></div>");var m=e("#mCSB_"+a.idx),p=e("#mCSB_"+a.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",_(p.children())),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(d)),w.call(this);var g=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},_=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},S=function(){var t=e(this),a=t.data(n),o=a.opt,i=e("#mCSB_"+a.idx+"_container");o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis&&i.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),position:"relative"}).unwrap()},w=function(){var t=e(this),a=t.data(n),o=a.opt,i=e(".mCSB_"+a.idx+"_scrollbar:first"),r=tt(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+u[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+u[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+u[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+u[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===o.axis?l[2]:l[0],"x"===o.axis?l[3]:l[1],l[2],l[3]];o.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},b=function(){var t=e(this),a=t.data(n),o=e("#mCSB_"+a.idx),i=t.css("max-height")||"none",r=-1!==i.indexOf("%"),l=t.css("box-sizing");if("none"!==i){var s=r?t.parent().height()*parseInt(i)/100:parseInt(i);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),o.css("max-height",Math.round(s))}},C=function(){var t=e(this),a=t.data(n),o=e("#mCSB_"+a.idx),i=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[o.height()/i.outerHeight(!1),o.width()/i.outerWidth(!1)],s=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=c&&s[1]<s[0]?s[0]:s[1],u=c&&s[3]<s[2]?s[2]:s[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":s[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},y=function(){var t=e(this),a=t.data(n),o=e("#mCSB_"+a.idx),i=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-o.height(),i.outerWidth(!1)-o.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];a.scrollRatio={y:s[0],x:s[1]}},B=function(e,t,a){var o=a?u[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(u[0]+" "+o),n.toggleClass(u[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(u[0]),n.removeClass(u[1])):(e.addClass(u[0]),n.addClass(u[1])))},T=function(){var t=e(this),a=t.data(n),o=e("#mCSB_"+a.idx),i=e("#mCSB_"+a.idx+"_container"),r=null==a.overflowed?i.height():i.outerHeight(!1),l=null==a.overflowed?i.width():i.outerWidth(!1);return[r>o.height(),l>o.width()]},k=function(){var t=e(this),a=t.data(n),o=a.opt,i=e("#mCSB_"+a.idx),r=e("#mCSB_"+a.idx+"_container"),l=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];if(V(t),("x"!==o.axis&&!a.overflowed[0]||"y"===o.axis&&a.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==o.axis&&!a.overflowed[1]||"x"===o.axis&&a.overflowed[1]){var s=dx=0;"rtl"===a.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/a.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},M=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(a[0])):t()},100)}var a=e(this),o=a.data(n),i=o.opt;if(!o.bindEvents){if(E.call(this),i.contentTouchScroll&&D.call(this),L.call(this),i.mouseWheel.enable){var r;t()}P.call(this),H.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&U.call(this),i.keyboard.enable&&F.call(this),o.bindEvents=!0}},O=function(){var t=e(this),o=t.data(n),i=o.opt,r=n+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+l+" ."+u[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+l+">a"),c=e("#mCSB_"+o.idx+"_container");i.advanced.releaseDraggableSelectors&&s.add(e(i.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(a).unbind("."+r),s.each(function(){e(this).unbind("."+r)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(c[0].onCompleteTimeout),Z(c[0],"onCompleteTimeout"),o.bindEvents=!1)},I=function(t){var a=e(this),o=a.data(n),i=o.opt,r=e("#mCSB_"+o.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+o.idx+"_container"),s=[e("#mCSB_"+o.idx+"_scrollbar_vertical"),e("#mCSB_"+o.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(o.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(u[8]+" "+u[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].add(s[0].children("a")).css("display","none"),l.removeClass(u[10])):(s[0].css("display","none"),l.addClass(u[10])),l.addClass(u[8]))),"y"!==i.axis&&(o.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(u[9]+" "+u[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].add(s[1].children("a")).css("display","none"),l.removeClass(u[11])):(s[1].css("display","none"),l.addClass(u[11])),l.addClass(u[9]))),o.overflowed[0]||o.overflowed[1]?a.removeClass(u[5]):a.addClass(u[5])},R=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],o=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return[a.pageY,a.pageX,o>1];default:return[e.pageY,e.pageX,!1]}},E=function(){function t(e){var t=p.find("iframe");if(t.length){var a=e?"auto":"none";t.css("pointer-events",a)}}function o(e,t,a,o){if(p[0].idleTimer=f.scrollInertia<233?250:0,i.attr("id")===m[1])var n="x",r=(i[0].offsetLeft-t+o)*u.scrollRatio.x;else var n="y",r=(i[0].offsetTop-e+a)*u.scrollRatio.y;Q(s,r.toString(),{dir:n,drag:!0})}var i,r,l,s=e(this),u=s.data(n),f=u.opt,h=n+"_"+u.idx,m=["mCSB_"+u.idx+"_dragger_vertical","mCSB_"+u.idx+"_dragger_horizontal"],p=e("#mCSB_"+u.idx+"_container"),g=e("#"+m[0]+",#"+m[1]),v=f.advanced.releaseDraggableSelectors?g.add(e(f.advanced.releaseDraggableSelectors)):g;g.bind("mousedown."+h+" touchstart."+h+" pointerdown."+h+" MSPointerDown."+h,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),$(o)){d=!0,c&&(a.onselectstart=function(){return!1}),t(!1),V(s),i=e(this);var n=i.offset(),u=R(o)[0]-n.top,h=R(o)[1]-n.left,m=i.height()+n.top,p=i.width()+n.left;m>u&&u>0&&p>h&&h>0&&(r=u,l=h),B(i,"active",f.autoExpandScrollbar)}}).bind("touchmove."+h,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=i.offset(),a=R(e)[0]-t.top,n=R(e)[1]-t.left;o(r,l,a,n)}),e(a).bind("mousemove."+h+" pointermove."+h+" MSPointerMove."+h,function(e){if(i){var t=i.offset(),a=R(e)[0]-t.top,n=R(e)[1]-t.left;if(r===a)return;o(r,l,a,n)}}).add(v).bind("mouseup."+h+" touchend."+h+" pointerup."+h+" MSPointerUp."+h,function(){i&&(B(i,"active",f.autoExpandScrollbar),i=null),d=!1,c&&(a.onselectstart=null),t(!0)})},D=function(){function t(e,t){var a=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?a[0]:a[3]:e>60?t>3?a[3]:a[2]:e>30?t>8?a[1]:t>6?a[0]:t>4?t:a[2]:t>8?t:a[3]}function a(e,t,a,o,n,i){e&&Q(g,e.toString(),{dur:t,scrollEasing:a,dir:o,overwrite:n,drag:i})}var o,i,r,l,s,c,u,f,h,m,p,g=e(this),v=g.data(n),x=v.opt,_=n+"_"+v.idx,S=e("#mCSB_"+v.idx),w=e("#mCSB_"+v.idx+"_container"),b=[e("#mCSB_"+v.idx+"_dragger_vertical"),e("#mCSB_"+v.idx+"_dragger_horizontal")],C=[],y=[],B=0,T="yx"===x.axis?"none":"all",k=[];w.bind("touchstart."+_+" pointerdown."+_+" MSPointerDown."+_,function(e){if(et(e)&&!d&&!R(e)[2]){var t=w.offset();o=R(e)[0]-t.top,i=R(e)[1]-t.left,k=[R(e)[0],R(e)[1]]}}).bind("touchmove."+_+" pointermove."+_+" MSPointerMove."+_,function(e){if(et(e)&&!d&&!R(e)[2]){e.stopImmediatePropagation(),c=J();var t=S.offset(),n=R(e)[0]-t.top,r=R(e)[1]-t.left,l="mcsLinearOut";if(C.push(n),y.push(r),k[2]=Math.abs(R(e)[0]-k[0]),k[3]=Math.abs(R(e)[1]-k[1]),v.overflowed[0])var s=b[0].parent().height()-b[0].height(),u=o-n>0&&n-o>-(s*v.scrollRatio.y)&&(2*k[3]<k[2]||"yx"===x.axis);if(v.overflowed[1])var f=b[1].parent().width()-b[1].width(),h=i-r>0&&r-i>-(f*v.scrollRatio.x)&&(2*k[2]<k[3]||"yx"===x.axis);(u||h)&&e.preventDefault(),m="yx"===x.axis?[o-n,i-r]:"x"===x.axis?[null,i-r]:[o-n,null],w[0].idleTimer=250,v.overflowed[0]&&a(m[0],B,l,"y","all",!0),v.overflowed[1]&&a(m[1],B,l,"x",T,!0)}}),S.bind("touchstart."+_+" pointerdown."+_+" MSPointerDown."+_,function(e){if(et(e)&&!d&&!R(e)[2]){e.stopImmediatePropagation(),V(g),s=J();var t=S.offset();r=R(e)[0]-t.top,l=R(e)[1]-t.left,C=[],y=[]}}).bind("touchend."+_+" pointerup."+_+" MSPointerUp."+_,function(e){if(et(e)&&!d&&!R(e)[2]){e.stopImmediatePropagation(),u=J();var o=S.offset(),n=R(e)[0]-o.top,i=R(e)[1]-o.left;if(!(u-c>30)){h=1e3/(u-s);var g="mcsEaseOut",_=2.5>h,b=_?[C[C.length-2],y[y.length-2]]:[0,0];f=_?[n-b[0],i-b[1]]:[n-r,i-l];var B=[Math.abs(f[0]),Math.abs(f[1])];h=_?[Math.abs(f[0]/4),Math.abs(f[1]/4)]:[h,h];var k=[Math.abs(w[0].offsetTop)-f[0]*t(B[0]/h[0],h[0]),Math.abs(w[0].offsetLeft)-f[1]*t(B[1]/h[1],h[1])];m="yx"===x.axis?[k[0],k[1]]:"x"===x.axis?[null,k[1]]:[k[0],null],p=[4*B[0]+x.scrollInertia,4*B[1]+x.scrollInertia];var M=parseInt(x.contentTouchScroll)||0;m[0]=B[0]>M?m[0]:0,m[1]=B[1]>M?m[1]:0,v.overflowed[0]&&a(m[0],p[0],g,"y",T,!1),v.overflowed[1]&&a(m[1],p[1],g,"x",T,!1)}}})},L=function(){function o(){return t.getSelection?t.getSelection().toString():a.selection&&"Control"!=a.selection.type?a.selection.createRange().text:0}function i(e,t,a){u.type=a&&r?"stepped":"stepless",u.scrollAmount=10,q(l,e,t,"mcsLinearOut",a?60:null)}var r,l=e(this),s=l.data(n),c=s.opt,u=s.sequential,f=n+"_"+s.idx,h=e("#mCSB_"+s.idx+"_container"),m=h.parent();h.bind("mousedown."+f,function(){r||(r=1,d=!0)}).add(a).bind("mousemove."+f,function(e){if(r&&o()){var t=h.offset(),a=R(e)[0]-t.top+h[0].offsetTop,n=R(e)[1]-t.left+h[0].offsetLeft;a>0&&a<m.height()&&n>0&&n<m.width()?u.step&&i("off",null,"stepped"):("x"!==c.axis&&s.overflowed[0]&&(0>a?i("on",38):a>m.height()&&i("on",40)),"y"!==c.axis&&s.overflowed[1]&&(0>n?i("on",37):n>m.width()&&i("on",39)))}}).bind("mouseup."+f,function(){r&&(r=0,i("off",null)),d=!1})},W=function(){function t(e){var t=null;try{var a=e.contentDocument||e.contentWindow.document;t=a.body.innerHTML}catch(o){}return null!==t}var a=e(this),o=a.data(n);if(o){var i=o.opt,r=n+"_"+o.idx,l=e("#mCSB_"+o.idx),s=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],d=e("#mCSB_"+o.idx+"_container").find("iframe"),u=l;d.length&&d.each(function(){var a=this;t(a)&&(u=u.add(e(a).contents().find("body")))}),u.bind("mousewheel."+r,function(t,n){if(V(a),!A(a,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):c&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===i.axis||"x"===i.mouseWheel.axis)var d="x",u=[Math.round(r*o.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),m=s[1][0].offsetLeft,p=s[1].parent().width()-s[1].width(),g=t.deltaX||t.deltaY||n;else var d="y",u=[Math.round(r*o.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),m=s[0][0].offsetTop,p=s[0].parent().height()-s[0].height(),g=t.deltaY||n;"y"===d&&!o.overflowed[0]||"x"===d&&!o.overflowed[1]||(i.mouseWheel.invert&&(g=-g),i.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),Q(a,(h-g*f).toString(),{dir:d}))}})}},A=function(t,a){var o=a.nodeName.toLowerCase(),i=t.data(n).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(o,i)>-1&&!(e.inArray(o,r)>-1&&!e(a).is(":focus"))},P=function(){var t=e(this),a=t.data(n),o=n+"_"+a.idx,i=e("#mCSB_"+a.idx+"_container"),r=i.parent(),l=e(".mCSB_"+a.idx+"_scrollbar ."+u[12]);l.bind("touchstart."+o+" pointerdown."+o+" MSPointerDown."+o,function(){d=!0}).bind("touchend."+o+" pointerup."+o+" MSPointerUp."+o,function(){d=!1}).bind("click."+o,function(o){if(e(o.target).hasClass(u[12])||e(o.target).hasClass("mCSB_draggerRail")){V(t);var n=e(this),l=n.find(".mCSB_dragger");if(n.parent(".mCSB_scrollTools_horizontal").length>0){if(!a.overflowed[1])return;var s="x",c=o.pageX>l.offset().left?-1:1,d=Math.abs(i[0].offsetLeft)-.9*c*r.width()}else{if(!a.overflowed[0])return;var s="y",c=o.pageY>l.offset().top?-1:1,d=Math.abs(i[0].offsetTop)-.9*c*r.height()}Q(t,d.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(n),i=o.opt,r=n+"_"+o.idx,l=e("#mCSB_"+o.idx+"_container"),s=l.parent();l.bind("focusin."+r,function(){var o=e(a.activeElement),n=l.find(".mCustomScrollBox").length,r=0;o.is(i.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=n?(r+17)*n:0,t[0]._focusTimeout=setTimeout(function(){var e=[at(o)[0],at(o)[1]],a=[l[0].offsetTop,l[0].offsetLeft],n=[a[0]+e[0]>=0&&a[0]+e[0]<s.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<s.width()-o.outerWidth(!1)],c="yx"!==i.axis||n[0]||n[1]?"all":"none";"x"===i.axis||n[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r}),"y"===i.axis||n[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r})},t[0]._focusTimer))})},H=function(){var t=e(this),a=t.data(n),o=n+"_"+a.idx,i=e("#mCSB_"+a.idx+"_container").parent();i.bind("scroll."+o,function(){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+a.idx+"_scrollbar").css("visibility","hidden")})},U=function(){var t=e(this),a=t.data(n),o=a.opt,i=a.sequential,r=n+"_"+a.idx,l=".mCSB_"+a.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(n){function r(e,a){i.scrollAmount=o.snapAmount||o.scrollButtons.scrollAmount,q(t,e,a)}if(n.preventDefault(),$(n)){var l=e(this).attr("class");switch(i.type=o.scrollButtons.scrollType,n.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;d=!0,a.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;d=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||a.tweenRunning)return;r("on",l)}}})},F=function(){var t=e(this),o=t.data(n),i=o.opt,r=o.sequential,l=n+"_"+o.idx,s=e("#mCSB_"+o.idx),c=e("#mCSB_"+o.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']";s.attr("tabindex","0").bind("blur."+l+" keydown."+l+" keyup."+l,function(n){function l(e,a){r.type=i.keyboard.scrollType,r.scrollAmount=i.snapAmount||i.keyboard.scrollAmount,"stepped"===r.type&&o.tweenRunning||q(t,e,a)}switch(n.type){case"blur":o.tweenRunning&&r.dir&&l("off",null);break;case"keydown":case"keyup":var s=n.keyCode?n.keyCode:n.which,f="on";if("x"!==i.axis&&(38===s||40===s)||"y"!==i.axis&&(37===s||39===s)){if((38===s||40===s)&&!o.overflowed[0]||(37===s||39===s)&&!o.overflowed[1])return;"keyup"===n.type&&(f="off"),e(a.activeElement).is(u)||(n.preventDefault(),n.stopImmediatePropagation(),l(f,s))}else if(33===s||34===s){if((o.overflowed[0]||o.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type){V(t);var h=34===s?-1:1;if("x"===i.axis||"yx"===i.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=Math.abs(c[0].offsetLeft)-.9*h*d.width();else var m="y",p=Math.abs(c[0].offsetTop)-.9*h*d.height();Q(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}else if((35===s||36===s)&&!e(a.activeElement).is(u)&&((o.overflowed[0]||o.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type)){if("x"===i.axis||"yx"===i.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=35===s?Math.abs(d.width()-c.outerWidth(!1)):0;else var m="y",p=35===s?Math.abs(d.height()-c.outerHeight(!1)):0;Q(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}})},q=function(t,a,o,i,r){function l(e){var a="stepped"!==f.type,o=r?r:e?a?d.scrollInertia/1.5:d.scrollInertia:1e3/60,n=e?a?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],u=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*u[1]*n:s[0]+f.dir[1]*u[0]*n,p="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),g="auto"!==f.scrollAmount?p:m,v=i?i:e?a?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",x=e?!0:!1;return e&&17>o&&(g="x"===f.dir[0]?s[1]:s[0]),Q(t,g.toString(),{dir:f.dir[0],scrollEasing:v,dur:o,onComplete:x}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},o)))}function s(){clearTimeout(f.step),Z(f,"step"),V(t)}var c=t.data(n),d=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1;switch(a){case"on":if(f.dir=[o===u[16]||o===u[15]||39===o||37===o?"x":"y",o===u[13]||o===u[15]||38===o||37===o?-1:1],V(t),tt(o)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},j=function(t){var a=e(this).data(n).opt,o=[];return"function"==typeof t&&(t=t()),t instanceof Array?o=t.length>1?[t[0],t[1]]:"x"===a.axis?[null,t[0]]:[t[0],null]:(o[0]=t.y?t.y:t.x||"x"===a.axis?null:t,o[1]=t.x?t.x:t.y||"y"===a.axis?null:t),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},Y=function(t,a){if(null!=t&&"undefined"!=typeof t){var o=e(this),i=o.data(n),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;a||(a="x"===r.axis?"x":"y");var d="x"===a?l.outerWidth(!1):l.outerHeight(!1),u="x"===a?l[0].offsetLeft:l[0].offsetTop,h="x"===a?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===a?at(m)[1]:at(m)[0];case"string":case"number":if(tt(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(u-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=u+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&tt(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===a?at(m)[1]:at(m)[0]}return e(t).length?"x"===a?at(e(t))[1]:at(e(t))[0]:(l.css(h,t),void f.update.call(null,o[0]))}}},X=function(t){function a(){clearTimeout(h[0].autoUpdate),h[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(m=r(),m!==S)?(l(3),void(S=m)):(d.advanced.updateOnContentResize&&(p=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==w[0]||p[1]!==w[1]||p[2]!==w[2]||p[3]!==w[3]||p[4]!==w[4]||p[5]!==w[5])&&(l(p[0]!==w[0]||p[1]!==w[1]),w=p)),d.advanced.updateOnImageLoad&&(g=o(),g!==b&&(h.find("img").each(function(){i(this)}),b=g)),void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&a()))},60)}function o(){var e=0;return d.advanced.updateOnImageLoad&&(e=h.find("img").length),e}function i(t){function a(e,t){return function(){return t.apply(e,arguments)}}function o(){this.onload=null,e(t).addClass(u[2]),l(2)}if(e(t).hasClass(u[2]))return void l();var n=new Image;n.onload=a(n,o),n.src=t.src}function r(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var t=0,a=h.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&a.length>0&&a.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(h[0].autoUpdate),f.update.call(null,s[0],e)}var s=e(this),c=s.data(n),d=c.opt,h=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(h[0].autoUpdate),void Z(h[0],"autoUpdate");var m,p,g,v=h.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},S=r(),w=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=o();a()},N=function(e,t,a){return Math.round(e/t)*t-a},V=function(t){var a=t.data(n),o=e("#mCSB_"+a.idx+"_container,#mCSB_"+a.idx+"_container_wrapper,#mCSB_"+a.idx+"_dragger_vertical,#mCSB_"+a.idx+"_dragger_horizontal");o.each(function(){K.call(this)})},Q=function(t,a,o){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=S[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],a=[v[0].offsetTop,v[0].offsetLeft],n=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:a[0],draggerLeft:a[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-i[1])),direction:o.dir}}var s=t.data(n),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=e.extend(d,o),u=[o.dur,o.drag?0:o.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?j.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?j.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=o.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==a||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==a||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==a&&"_resetX"!==a){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(a=N(a,c.snapAmount,c.snapOffset)),o.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],w=[a,0===a?0:a/s.scrollRatio.x],b=p[1],C=g[1],y=b>0?b/s.scrollRatio.x:0,T=C>0?C/s.scrollRatio.x:0;break;
case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],w=[a,0===a?0:a/s.scrollRatio.y],b=p[0],C=g[0],y=b>0?b/s.scrollRatio.y:0,T=C>0?C/s.scrollRatio.y:0}w[1]<0||0===w[0]&&0===w[1]?w=[0,0]:w[1]>=S[1]?w=[S[0],S[1]]:w[0]=-w[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&w[0]>=0||_===S[0]&&w[0]<=S[0]))&&(G(v[0],x,Math.round(w[1]),u[1],o.scrollEasing),G(h[0],x,Math.round(w[0]),u[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,B(v),s.cbOffsets=r())},onUpdate:function(){o.callbacks&&o.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&w[1]>=S[1]-y&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&w[1]<=T&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,B(v,"hide")},e)}}}))}},G=function(e,a,o,n,i,r,l){function s(){b.stop||(_||p.call(),_=J()-x,c(),_>=b.time&&(b.time=_>b.time?_+h-(_-b.time):_+h-1,b.time<_+1&&(b.time=_+1)),b.time<n?b.id=m(s):v.call())}function c(){n>0?(b.currVal=f(b.time,S,C,n,i),w[a]=Math.round(b.currVal)+"px"):w[a]=o+"px",g.call()}function d(){h=1e3/60,b.time=_+h,m=t.requestAnimationFrame?t.requestAnimationFrame:function(e){return c(),setTimeout(e,.01)},b.id=m(s)}function u(){null!=b.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(b.id):clearTimeout(b.id),b.id=null)}function f(e,t,a,o,n){switch(n){case"linear":case"mcsLinear":return a*e/o+t;case"mcsLinearOut":return e/=o,e--,a*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=o/2,1>e?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=o/2,1>e?a/2*Math.pow(2,10*(e-1))+t:(e--,a/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=o/2,1>e?a/2*e*e*e+t:(e-=2,a/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=o,e--,-a*(e*e*e*e-1)+t;case"easeOutStrong":return a*(-Math.pow(2,-10*e/o)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=o)*e,r=i*e;return t+a*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var h,m,l=l||{},p=l.onStart||function(){},g=l.onUpdate||function(){},v=l.onComplete||function(){},x=J(),_=0,S=e.offsetTop,w=e.style,b=e._mTween[a];"left"===a&&(S=e.offsetLeft);var C=o-S;b.stop=0,"none"!==r&&u(),d()},J=function(){return t.performance&&t.performance.now?t.performance.now():t.performance&&t.performance.webkitNow?t.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var a=["top","left"],o=0;o<a.length;o++){var n=a[o];e._mTween[n].id&&(t.requestAnimationFrame?t.cancelAnimationFrame(e._mTween[n].id):clearTimeout(e._mTween[n].id),e._mTween[n].id=null,e._mTween[n].stop=1)}},Z=function(e,t){try{delete e[t]}catch(a){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},et=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},tt=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},at=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[o]=function(t){return f[t]?f[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):f.init.apply(this,arguments)},e[o]=function(t){return f[t]?f[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):f.init.apply(this,arguments)},e[o].defaults=r,t[o]=!0,e(t).load(function(){e(i)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var a,o,n=e(t),i=n.parents(".mCSB_container");if(i.length)return a=i.parent(),o=[i[0].offsetTop,i[0].offsetLeft],o[0]+at(n)[0]>=0&&o[0]+at(n)[0]<a.height()-n.outerHeight(!1)&&o[1]+at(n)[1]>=0&&o[1]+at(n)[1]<a.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var a=e(t).data(n);if(a)return a.overflowed[0]||a.overflowed[1]}})})})}(jQuery,window,document);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

/* global jQuery */
;(function ($) {
	'use strict';

	window.tmgJQ = $.noConflict(); // this line and the line below leave the old $ & jQuery object references. Allowing dependent scripts to use (or override) if they wish.
	window.$ = jQuery;
})(jQuery);
/* Global nav component */
;(function ($, tmg, Cookies, window, document, page, user) {
	'use strict';

	var pluginName = 'GlobalNav';

	function GlobalNav(context, options) {
		this.$globalNavContext = $(context);
		this.$links = this.$globalNavContext.find('.header-nav-global__link, .header-nav-global__drop-down-menu__link');
		this.$notLogged = this.$globalNavContext.find('.header-nav-global__not-logged');
		this.$loggedNotSub = this.$globalNavContext.find('.header-nav-global__logged-not-subscriber');
		this.$loggedAndSub = this.$globalNavContext.find('.header-nav-global__logged-and-subscriber');
		this.$dropDownWrapper = this.$globalNavContext.find('.js-has-dropdown > .header-nav-global__link');
		this.$embedWrapper = this.$globalNavContext.find('.js-has-embed');
		this.$embedContent = this.$embedWrapper.find('.header-nav-global__html-embed');
		this.$status = 'notLogged';
	}

	GlobalNav.prototype = {
		defaults: {},

		init: function init() {
			this.buttonsBehaviour();
			this.getStatusString();

			if (this.showStatusMenu()) {
				return this.$links.each(function (i, elem) {
					elem.href = tmg.updateRedirectParam(elem.href, document.location.href);
				});
			}
			return false;
		},

		buttonsBehaviour: function buttonsBehaviour() {
			var delayStart, delayEnd;

			this.$embedWrapper.on('mouseenter', function () {
				var self = $(this);
				clearTimeout(delayEnd);
				delayStart = setTimeout(function () {
					self.addClass('has-embed-visible');
				}, 500);
			});

			this.$embedWrapper.on('click', function () {
				clearTimeout(delayStart);
			});

			this.$embedWrapper.on('mouseleave', function () {
				var self = $(this);
				clearTimeout(delayStart);
				delayEnd = setTimeout(function () {
					self.removeClass('has-embed-visible');
				}, 300);
			});

			this.$dropDownWrapper.on('click', function (e) {
				e.preventDefault();
				$(this).closest('.header-nav-global__item').toggleClass('has-dropdown-open');
			});
		},

		getStatusString: function getStatusString() {
			if (user.isLoggedIn()) {
				if (user.isSubscriber()) {
					this.$status = 'loggedAndSub';
				} else {
					this.$status = 'loggedNotSub';
				}
			}
			return this.$status;
		},

		showStatusMenu: function showStatusMenu() {
			if (this.$status == 'notLogged') {
				this.$loggedNotSub.remove();
				this.$loggedAndSub.remove();
				this.$notLogged.show();
				return true;
			} else if (this.$status == 'loggedNotSub') {
				this.$notLogged.remove();
				this.$loggedAndSub.remove();
				this.$loggedNotSub.show();
				return true;
			} else if (this.$status == 'loggedAndSub') {
				this.$notLogged.remove();
				this.$loggedNotSub.remove();
				this.$loggedAndSub.show();
				return true;
			}
			return false;
		}
	};

	function init() {
		$('.header-nav-global').each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new GlobalNav(this).init());
			}
		});
	}

	tmg.pageReady(init);
})(tmgJQ, tmg, Cookies, window, document, tmg.page, tmg.user);
(function (window, document) {
	'use strict';

	function Sticky() {
		this.stickyItem = document.querySelector('.is-sticky');

		if (this.stickyItem !== null) {
			// Remove is-sticky and add fallback class
			this.stickyItem.classList.remove('is-sticky');
			this.stickyItem.classList.add('is-sticky-fallback');

			this.stickyArticle = document.querySelector('.js-article');
			this.stickySidebar = document.querySelector('.js-sidebar');
			this.stickyHolding = document.createElement('div');
			this.stickyRect = this.stickyItem.getBoundingClientRect();
			this.stickyTop = this.stickyRect.top;
			this.stickyWidth = this.stickyRect.width;
			this.stickyHeight = this.stickyRect.height;
			this.sidebarHeight = this.stickySidebar.offsetHeight;

			this.isActive = false;
			this.isArticle = this.stickyArticle !== null;

			if (this.isArticle) {
				this.isSidebar = this.stickyItem.classList.contains('js-sidebar');
				this.articleHeight = this.stickyArticle.offsetHeight;
				this.articleBottom = this.articleHeight - this.stickyHeight;
				this.contentHeight = document.querySelector('.js-article-inner').offsetHeight;
			}

			// If on an article where sidebar is taller than content or non article then initialise
			if (this.isArticle && this.contentHeight > this.sidebarHeight || !this.isArticle) {
				this.init();
			}
		}
	}

	Sticky.prototype.init = function () {
		// Setup Placeholder to retain height and width
		this.placeHolder();

		// Scroll event listener
		this.scrollEvent();
	};

	// A placeholder to sit in position of the original element (to retain height)
	Sticky.prototype.placeHolder = function () {
		this.stickyHolding.style.display = 'none';
		this.stickyHolding.style.width = this.stickyWidth + 'px';
		this.stickyHolding.style.height = this.stickyHeight + 'px';
		this.stickyItem.parentNode.insertBefore(this.stickyHolding, this.stickyItem);
	};

	// Add the stickyHolding to retain height and add classes for fixed fallback
	Sticky.prototype.scrollEvent = function () {
		var _this = this;

		window.addEventListener('scroll', function () {
			if (this.pageYOffset >= _this.stickyTop && !_this.isActive) {
				_this.stickyItem.classList.add('is-sticky-fallback--active');
				_this.stickyHolding.style.display = 'block';
				_this.isActive = true;
			} else if (this.pageYOffset < _this.stickyTop && _this.isActive) {
				_this.stickyItem.classList.remove('is-sticky-fallback--active');
				_this.stickyHolding.style.display = 'none';
				_this.isActive = false;
			}
			if (_this.isArticle && _this.isSidebar && _this.isActive) {
				if (this.pageYOffset >= _this.articleBottom) {
					_this.stickyItem.classList.add('is-sticky-fallback--active-end');
				} else if (this.pageYOffset < _this.articleBottom) {
					_this.stickyItem.classList.remove('is-sticky-fallback--active-end');
				}
			}
		});
	};

	// If position: sticky; is not supported then use this fallback
	if (document.querySelector('html').classList.contains('no-csspositionsticky')) {
		new Sticky();
	}
})(window, document);
;
(function ($, window, document) {
	'use strict';

	var init;var windowAutoRefresh = function windowAutoRefresh() {
		this.init();
		return this;
	};

	windowAutoRefresh.prototype = {
		init: function init() {
			this.$bodyTag = $('body.js-autorefresh');
			this.$isTabletMetaTag = $("meta[name='tmg.isTablet']");
			this.$isMobileMetaTag = $("meta[name='tmg.isMobile']");
			this.isTablet = this.$isTabletMetaTag.length ? this.$isTabletMetaTag[0].content === 'true' : false;
			this.isMobile = this.$isMobileMetaTag.length ? this.$isMobileMetaTag[0].content === 'true' : false;
			this.triggerTime = this.$bodyTag.data('autorefresh-interval');
			this.triggerTime = this.triggerTime ? this.triggerTime * 1000 : 300000;

			if (!this.isMobile || this.isTablet) {
				this.autoRefreshTrigger();
			}
		},

		autoRefreshTrigger: function autoRefreshTrigger() {
			setTimeout(function () {
				var hash = '#source=refresh';

				if (!window.location.hash.match(hash)) {
					window.location.hash = hash;
				}

				if (!window.cancelWindowAutoRefresh) {
					window.location.reload();
				}
			}, this.triggerTime);
		}
	};

	init = function init() {
		if ($('body').hasClass('js-autorefresh') && !$('body').data('js-autorefresh')) {
			$('body').data('js-autorefresh', new windowAutoRefresh());
		}
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	var Modal = function Modal(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.defaults = {
			overlayClass: 'tmg-modal-overlay',
			overlayContentClass: 'tmg-modal-overlay-content',
			backdropClass: 'tmg-modal-backdrop',
			closeClass: 'tmg-modal-close',
			content: 'No Content',
			fadeSpeed: 'slow',
			/** regex based on moustache template system **/
			templateRegex: /\{\{(.*?)\}\}/g,
			templateHTML: '<div class="{{backdropClass}}"></div><div class="{{overlayClass}}"><div class="{{overlayContentClass}}">{{content}}</div><div class="{{closeClass}}"></div></div>',
			templateBeforeCallback: function templateBeforeCallback() {},
			templateAfterCallback: function templateAfterCallback() {},
			closeOnEsc: true,
			closeBeforeCallback: function closeBeforeCallback() {},
			closeAfterCallback: function closeAfterCallback() {}
		};
		this.options = options;
		this.metadata = JSON.parse((this.$elem.data('modal-options') || "{'':''}").replace(/'/g, '"'));
		this.config = $.extend({}, this.defaults, this.options, this.metadata);
	};

	Modal.prototype = {
		open: function open() {
			var _this = this;

			var _str;

			/** PREVENT MULTIPLE MODALS **/
			_this.destroy();

			/** ADD MODAL TEMPLATE **/
			_this.config.templateBeforeCallback.call(_this, arguments);

			/** BUILD MODAL TEMPLATE **/
			_str = _this.config.templateHTML.replace(_this.config.templateRegex, function (i, match) {
				return typeof _this.config[match] === 'function' ? _this.config[match].call(_this) : _this.config[match] || '';
			});

			$('body').children(':first').before(_str);
			_this.config.templateAfterCallback.call(_this, arguments);

			/** ESC KEY **/
			if (_this.config.closeOnEsc) {
				$(document).on('keyup', function (e) {
					if (e.keyCode === 27) {
						_this.close();
					}
				});
			}

			/** CLICKING CLOSE BUTTON **/
			$('.' + _this.config.closeClass).on('click', function (e) {
				_this.close();
			});
		},
		close: function close() {
			var _this = this;
			_this.config.closeBeforeCallback.call(_this, arguments);
			$('.' + _this.config.overlayClass + ', .' + _this.config.backdropClass).fadeOut(_this.config.fadeSpeed, function () {
				/** PREVENT CALLBACK FIRING TWICE **/
				if ($('.' + _this.config.overlayClass + ':animated, .' + _this.config.backdropClass + ':animated').length === 0) {
					_this.destroy();
					_this.config.closeAfterCallback.call(_this, arguments);
				}
			});
		},
		destroy: function destroy() {
			var _this = this;
			$('.' + _this.config.overlayClass + ', .' + _this.config.backdropClass).remove();
			/** UNBIND EVENTS **/
			$(document).off('keyup');
			$('.' + _this.config.closeClass + ', .' + _this.config.backdropClass).off('click');
		}
	};

	$.fn.modal = function (method, options) {
		var _this = this;
		return _this.each(function () {
			new Modal(_this, options)[method]();
		});
	};

	window.Modal = Modal;
})(tmgJQ, window, document);
;(function ($, window, document) {
	var trackSocalShare = function trackSocalShare(e) {
		'use strict';

		var className = $(e.target).attr('class');

		var regex = new RegExp('.*social-share_(\\w*)', 'i');

		var socialNetwork = regex.exec(className);

		if (socialNetwork && socialNetwork.length > 0 && '_satellite' in window) {
			_satellite.setVar('shareprovider', socialNetwork[1]);
			_satellite.track('share');
		}
	};

	var attachSocialShareClicks = function attachSocialShareClicks() {
		'use strict';

		$(document).on('click', "[class*='social-share_']", trackSocalShare);
	};

	$(document).ready(function () {
		attachSocialShareClicks();
	});
})(window.tmgJQ, window, document);
"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[802,2],{453:(t,e,s)=>{s.d(e,{Z:()=>o});var r=s(384);const i=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:t,func:e,runIfAlreadyPublished:s}){if("function"!=typeof e)return!1;if(s)for(let s=0;s<this.publishedTopics.length;s++)this.publishedTopics[s]===t&&e.call();const r=(this.UID+=1).toString();return this.topics.push({token:r,topic:t,func:e}),r}unsubscribe({topic:t}){for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics.splice(e,1)}publish({topic:t}){this.publishedTopics.push(t);for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics[e].func.call()}};r.Z.create("tmg.pubsub"),window.tmg.pubsub=i;const o=i},904:(t,e,s)=>{s.d(e,{Z:()=>d});var r=s(384),i=s(453);const o={addAttributeToTurnOn:!1,addClassToTurnOn:!1,attributeName:"hidden",attributeValue:"",className:"",removeAttributeToTurnOn:!0,removeClassToTurnOn:!1,callbackFunction:!1},u=(t,e,s)=>{t.setAttribute(e,s)},c=(t,e)=>{t.classList.add(e)},n=(t,e)=>{t.removeAttribute(e)},a=(t,e)=>{t.classList.remove(e)};let l={addAttribute:u,addClass:c,removeAttribute:n,removeClass:a,turnOn:(t,{addAttributeToTurnOn:e,addClassToTurnOn:s,className:r,attributeName:i,attributeValue:l,removeAttributeToTurnOn:d,removeClassToTurnOn:b,callbackFunction:p}=o)=>{Array.from(document.querySelectorAll(t)).forEach((t=>{""!==i&&(e&&u(t,i,l),d&&n(t,i)),""!==r&&(s&&c(t,r),b&&a(t,r))})),p&&"function"==typeof p&&p()},turnOff:(t,{addAttributeToTurnOn:e,addClassToTurnOn:s,className:r,attributeName:i,attributeValue:l,removeAttributeToTurnOn:d,removeClassToTurnOn:b,callbackFunction:p}=o)=>{Array.from(document.querySelectorAll(t)).forEach((t=>{""!==i&&(e&&n(t,i),d&&u(t,i,l)),""!==r&&(s&&a(t,r),b&&c(t,r))})),p&&"function"==typeof p&&p()}};i.Z.subscribe({topic:"tmg.page.ready",func:()=>{r.Z.create("tmg.feature"),tmg.feature=l},runIfAlreadyPublished:!0});const d=l},384:(t,e,s)=>{s.d(e,{Z:()=>i}),window.tmg=window.tmg||{};const r=function(t){try{let e=tmg,s=t.split(".");return"tmg"===s[0]&&(s=s.slice(1)),s.forEach((t=>{void 0===e[t]&&(e[t]={}),e=e[t]})),e}catch(e){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=r;const i={create:r}}},t=>{t(t.s=904)}]);
;
if (window.HTMLTemplateElement) {
	(function ($, window, document) {
		var $cachedHtmlWrappers = $('.lazy-html__wrapper').parent('.component');

		var $doc = $(document);

		var $win = $(window);

		var pixelThreshold = $win.height();

		/* have it 'look ahead' a whole viewports worth, this could be adjusted */

		var timer;

		var debug = false;

		var graceTime = 200;

		/* Grace time to wait after scroll before running checks, solves issues with chain reactions */

		var activeCount = 0;

		function deferFunction(fcn, graceTime) {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(fcn, graceTime);
		}

		function activateHtmlTemplate($currEl) {
			var wrappedHtml = $currEl.find('.lazy-html__wrapper').html();

			$currEl.html(wrappedHtml);
			activeCount += 1;
			$currEl.data('active', true);

			$(document).trigger('tmg:lazy-loaded-html');

			if (debug) {
				console.log('loaded', $currEl);
			}

			if (activeCount >= $cachedHtmlWrappers.length) {
				$doc.off('scroll.html-embed-tracking');
			}
		}

		$.fn.componentLazyLoad = function () {
			var i = 0;

			var bottomThreshold = $doc.scrollTop() + $win.height() + pixelThreshold;

			var topThreshold = $doc.scrollTop() - pixelThreshold;

			var isWithinLoadingZone;

			var isNotYetActivated;

			var $currEl;

			var numEmbeds = this.length;

			for (i; i < numEmbeds; i++) {
				$currEl = this.eq(i);
				isWithinLoadingZone = $currEl.offset().top < bottomThreshold && $currEl.offset().top > topThreshold;
				isNotYetActivated = !$currEl.data('active');

				if (isWithinLoadingZone && isNotYetActivated) {
					activateHtmlTemplate($currEl);
				}
			}
		};

		$doc.on('scroll.html-embed-tracking', function () {
			deferFunction(function () {
				$cachedHtmlWrappers.componentLazyLoad();
			}, graceTime);
		});

		$cachedHtmlWrappers.componentLazyLoad();
	})(tmgJQ, window, document);
}
/*
* Please try not to put logic here, other than setting flags
* Logic should be at the individual component
*/

;(function ($, document) {
	'use strict';

	$(document).on('tmg:video-autoplay-on', function () {
		$(document).data('video-autoplay-on', true);
	});
	$(document).on('tmg:video-autoplay-off', function () {
		$(document).data('video-autoplay-on', false);
	});
})(tmgJQ, document);
;(function ($, window, document) {
	var init;

	var pluginName = 'detectAdBlocker';

	var $document = $(document);

	var $body = $('body');

	var $adBlockerMessage = $('.adblocker-message');

	var DetectAdBlocker = function DetectAdBlocker(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
	};

	DetectAdBlocker.prototype.init = function () {
		this.checkCookies();
		this.ignoreAdBlockerMessage();
	};

	// checking if user is logged in and subscribed
	DetectAdBlocker.prototype.checkCookies = function () {
		var loginCheck = Cookies.get('tmg_session');

		var subsCheck = Cookies.get('tmg_subs');

		if (loginCheck !== undefined && subsCheck !== undefined) {
			return true;
		} else {
			this.detectAds();
		}
	};

	// checking if the adblocker is switched on
	DetectAdBlocker.prototype.detectAds = function () {
		var _this2 = this;

		var adTest = document.createElement('div');
		adTest.style.position = 'absolute';
		adTest.style.left = '0';
		adTest.style.top = '0';
		adTest.style.height = '10px';
		adTest.style.zIndex = '-1';
		adTest.innerHTML = '&nbsp;';
		adTest.setAttribute('class', 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links advert');

		// Prevent layout thrashing. See: http://wilsonpage.co.uk/preventing-layout-thrashing/
		window.requestAnimationFrame(function () {
			document.body.appendChild(adTest);

			window.requestAnimationFrame(function () {
				var adStyles = window.getComputedStyle(adTest);
				var adDisplay = adStyles.getPropertyValue('display');

				if (adDisplay === 'none' && sessionStorage.getItem('message') !== 'closed') {
					_this2.displayMessage();
				}
			});
		});
	};

	DetectAdBlocker.prototype.displayMessage = function () {
		$adBlockerMessage.addClass('message-active');
		$body.css('overflow', 'hidden');
		if (typeof _satellite !== 'undefined') {
			_satellite.track('TMG AdBlock Message');
		}
	};

	DetectAdBlocker.prototype.removeMessage = function () {
		$adBlockerMessage.remove();
		$body.css('overflow', 'visible');
	};

	DetectAdBlocker.prototype.closeMessageForSession = function () {
		sessionStorage.setItem('message', 'closed');
	};

	DetectAdBlocker.prototype.ignoreAdBlockerMessage = function () {
		var _this = this;
		$body.on('click', '.adblocker-message .close', function () {
			_this.removeMessage();
			_this.closeMessageForSession();
		});
		$body.on('keyup', function (e) {
			if (e.keyCode === 27) {
				// support esc key for keyboard users
				$('.adblocker-message .close').trigger('click');
			}
		});
	};

	$.fn.detectAdBlocker = function (options) {
		return this.each(function () {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new DetectAdBlocker(this, options).init());
			} else {
				return $.data(this, pluginName);
			}
		});
	};

	init = function init() {
		var viewport = tmg.getMediaQuery();
		// checking if the viewport is desktop and there are ad slots present
		if ((viewport === 'lg' || viewport === 'xl') && $('.advert').length > 0 && $('.adblocker-message').length > 0) {
			$document.detectAdBlocker();
		}
	};

	$document.ready(init);
	$document.on('tmg:page-loaded', init);
})(tmgJQ, window, document);
(function ($, window, document) {
	var init;

	var BoxCycle = function BoxCycle(elem) {
		this.elem = elem;
		this.$elem = $(elem);
		this.speed = this.$elem.attr('data-box--cycle-speed') || 5000;
		this.domElements = {
			$container: this.$elem.find(' > .component-content'),
			$slides: this.$elem.find('.section'),
			$controls: this.$elem.find('.box__controls')
		};
	};
	BoxCycle.prototype = {
		init: function init() {
			var _this = this;
			if (tmg.timer && this.domElements.$slides.length > 1) {
				this.buildControls();
				this.setHeight();
				this.transition(this.domElements.$slides.first());
				this.domElements.$container.on('mouseover', function () {
					_this.timeout.stop();
				});
				this.domElements.$container.on('mouseleave', function () {
					_this.timeout.resume();
				});
			} else {
				this.setHeight();
			}
		},
		buildControls: function buildControls() {
			var _this = this;

			var i = 0;
			for (; i < this.domElements.$slides.length; i++) {
				if (i === 0) {
					_this.domElements.$controls.append('<li class="active">' + i + '</li>');
				} else {
					_this.domElements.$controls.append('<li>' + i + '</li>');
				}
			}

			_this.domElements.$slides.addClass('slide');

			_this.domElements.$controls.find('li').on('click', function () {
				_this.timeout.stop();
				_this.domElements.$controls.find('li').removeClass('active');
				$(this).addClass('active');
				_this.transition(_this.domElements.$slides.eq($(this).index()), _this.$elem.find('.section:visible'));
			});
		},
		thisHeight: function thisHeight() {
			return $(this).outerHeight();
		},
		setHeight: function setHeight() {
			var _this = this;
			this.domElements.$container.height(function () {
				return Math.max.apply(Math, _this.domElements.$slides.map(_this.thisHeight));
			});
		},
		transition: function transition(to, from) {
			var _this = this;
			if (from) {
				from.fadeOut(500, function () {
					_this.next(to, from);
				});
			} else {
				this.next(to);
			}
		},
		next: function next(to) {
			var _this = this;
			var nextTo;
			if (to.is(':last-of-type')) {
				nextTo = _this.domElements.$slides.first();
			} else {
				nextTo = to.next();
			}
			to.fadeIn(500, function () {
				_this.timeout = new tmg.timer(function () {
					_this.domElements.$controls.find('li').eq(nextTo.index()).trigger('click');
				}, _this.speed);
			});
		}
	};
	$.fn.boxCycle = function (options) {
		return this.each(function () {
			if (!$.data(this, 'boxCycle')) {
				$.data(this, 'boxCycle', new BoxCycle(this, options).init());
			} else {
				return $.data(this, 'boxCycle');
			}
		});
	};
	window.boxCycle = BoxCycle;

	init = function init() {
		$('.js-tmg-box-cycle').boxCycle();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
/*
Copyright 2013 Michael Countis
MIT License: http://opensource.org/licenses/MIT
*/

(function () {
	'use strict';

	window.googletag = window.googletag || {};
	window.googletag.cmd = window.googletag.cmd || [];

	googletag.cmd.push(function () {
		if (googletag.hasOwnProperty('on') || googletag.hasOwnProperty('off') || googletag.hasOwnProperty('trigger') || googletag.hasOwnProperty('events')) {
			return;
		}

		var old_log = googletag.debug_log.log;

		var events = [];

		var addEvent = function addEvent(name, id, match) {
			events.push({
				'name': name,
				'id': id,
				'match': match
			});
		};

		addEvent('gpt-google_js_loaded', 8, /Google service JS loaded/ig);
		addEvent('gpt-gpt_fetch', 46, /Fetching GPT implementation/ig);
		addEvent('gpt-gpt_fetched', 48, /GPT implementation fetched\./ig);
		addEvent('gpt-page_load_complete', 1, /Page load complete/ig);
		addEvent('gpt-queue_start', 31, /^Invoked queued function/ig);

		addEvent('gpt-service_add_slot', 40, /Associated ([\w]*) service with slot ([\/\w]*)/ig);
		addEvent('gpt-service_add_targeting', 88, /Setting targeting attribute ([\w]*) with value ([\w\W]*) for service ([\w]*)/ig);
		addEvent('gpt-service_collapse_containers_enable', 78, /Enabling collapsing of containers when there is no ad content/ig);
		addEvent('gpt-service_create', 35, /Created service: ([\w]*)/ig);
		addEvent('gpt-service_single_request_mode_enable', 63, /Using single request mode to fetch ads/ig);

		addEvent('gpt-slot_create', 2, /Created slot: ([\/\w]*)/ig);
		addEvent('gpt-slot_add_targeting', 17, /Setting targeting attribute ([\w]*) with value ([\w\W]*) for slot ([\/\w]*)/ig);
		addEvent('gpt-slot_fill', 50, /Calling fillslot/ig);
		addEvent('gpt-slot_fetch', 3, /Fetching ad for slot ([\/\w]*)/ig);
		addEvent('gpt-slot_receiving', 4, /Receiving ad for slot ([\/\w]*)/ig);
		addEvent('gpt-slot_render_delay', 53, /Delaying rendering of ad slot ([\/\w]*) pending loading of the GPT implementation/ig);
		addEvent('gpt-slot_rendering', 5, /^Rendering ad for slot ([\/\w]*)/ig);
		addEvent('gpt-slot_rendered', 6, /Completed rendering ad for slot ([\/\w]*)/ig);

		googletag.events = googletag.events || {};

		googletag.on = function (events, op_arg0 /* data*/, op_arg1 /* callback*/) {
			if (!op_arg0) {
				return this;
			}

			events = events.split(' ');

			var data = op_arg1 ? op_arg0 : undefined;

			var callback = op_arg1 || op_arg0;

			var ei = 0;var e = '';

			callback.data = data;

			for (e = events[ei = 0]; ei < events.length; e = events[++ei]) {
				(this.events[e] = this.events[e] || []).push(callback);
			}

			return this;
		};

		googletag.off = function (events, handler) {
			events = events.split(' ');
			var ei = 0;var e = '';

			var fi = 0;var f = function f() {};

			for (e = events[ei]; ei < events.length; e = events[++ei]) {
				if (!this.events.hasOwnProperty(e)) {
					continue;
				}

				if (!handler) {
					delete this.events[e];
					continue;
				}

				fi = this.events[e].length - 1;
				for (f = this.events[e][fi]; fi >= 0; f = this.events[e][--fi]) {
					if (f == handler) {
						this.events[e].splice(fi, 1);
					}
				}
				if (this.events[e].length === 0) {
					delete this.events[e];
				}
			}

			return this;
		};

		googletag.trigger = function (event, parameters) {
			if (!this.events[event] || this.events[event].length === 0) {
				return this;
			}

			var parameters = parameters || [];

			var fi = 0;var f = this.events[event][fi];

			for (fi, f; fi < this.events[event].length; f = this.events[event][++fi]) {
				if (f.apply(this, [{
					data: f.data
				}].concat(parameters)) === false) {
					break;
				}
			}

			return this;
		};

		googletag.debug_log.log = function (level, message, service, slot, reference) {
			if (message && message.getMessageId && typeof message.getMessageId() === 'number') {
				var args = Array.prototype.slice.call(arguments);

				var e = 0;
				for (e; e < events.length; e++) {
					if (events[e].id === message.getMessageId()) {
						googletag.trigger(events[e].name, args);
					}
				}
			}
			return old_log.apply(this, arguments);
		};
	});
})();
(function ($, window, document) {
	var init;

	var pluginName = 'dropDown';

	var dropDown = function dropDown(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.domElements = {
			$item: this.$elem.find('.dropdown__item'),
			$default: this.$elem.find('.dropdown__item-default')
		};
	};
	dropDown.prototype = {
		init: function init() {
			var _this = this;
			this.domElements.$default.on('click', function () {
				_this.domElements.$item.toggleClass('active');
				$(this).toggleClass('active');
			});
		}
	};
	$.fn.dropDown = function (options) {
		return this.each(function () {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new dropDown(this, options).init());
			} else {
				return $.data(this, pluginName);
			}
		});
	};
	window.dropDown = dropDown;

	init = function init() {
		$('.js-dropdown').dropDown();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'telegraph_HTMLEmbed';

	var className = 'html-embed';

	var pluginNameInit = pluginName + '_init';

	var selector = '.' + className;

	var youtubeURLSelector = 'youtube.com';

	var hasYouTubeFrameClass = 'has-youtube-iframe';

	var Plugin = function Plugin(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);

		this.dataOptions = this.$elem.data('options') ? $.parseJSON(this.$elem.data('options').replace(/'/g, '"')) : {};
	};

	Plugin.prototype = {
		defaults: {},

		/* Init methods */
		init: function init() {
			this.options = $.extend({}, this.defaults, this.dataOptions, this.options);
			this.detectYoutube();
			this.initEvents();
			return this;
		},

		initEvents: function initEvents() {
			// Dom to refactor this piece
			var _detectYoutube = $.proxy(this.detectYoutube, this);
			// on html-embed loaded, then run $(htmlEmbed).trigger('tmg:html-embed-loaded')
			$(document).on('tmg:html-embed-loaded', _detectYoutube);
		},

		detectYoutube: function detectYoutube() {
			var _this = this;
			// add has youtube class to the component
			$(_this.$elem).find('iframe').each(function (i, iframe) {
				if (iframe.src.indexOf(youtubeURLSelector) > 0) {
					_this.$elem.addClass(hasYouTubeFrameClass);
				}
			});
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// only initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new Plugin(this, options).init());
			}
		});
	};

	$.fn[pluginNameInit] = function () {
		// alias, so you can initiate without needing the selector
		$(selector)[pluginName]();
	};

	init = function init() {
		$(selector)[pluginName]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document, Hammer) {
	'use strict';

	var AdvertEnum = {
		EXPANDED: 1,
		COMPACT: 2
	};

	function ImageGallery(context, options) {
		this.gallery = context;
		this.$gallery = $(context);
		this.options = options;
		this.config = {};
		this.slides = null;
		this.thumbs = [];
		this.index = 0; // Current slide index
		this.view = 1; // Active view (1 = VIEWS.IMAGE or 0 = VIEWS.THUMBNAIL)
		this.init();
	}

	// filter for XSS vulnerability CWE-80
	function encodeHtmlEntity(item) {
		var replacement = document.createElement('div');
		// copy attributes
		for (var i = 0; i < item.attributes.length; i++) {
			var attr = item.attributes[i];
			replacement.setAttribute(neutralizespecialchars(attr.name), neutralizespecialchars(attr.value));
		}
		// copy content
		replacement.innerHTML = neutralizespecialchars(item.innerHTML);
		return replacement;
	}

	function neutralizespecialchars(html) {
		return html.replace(/>/g, '>').replace(/</g, '<').replace(/&/g, '&').replace(/”/g, '"').replace(/’/g, '\'').replace(/\//g, '/');
	}

	ImageGallery.prototype = {
		defaults: {
			componentContentSelector: '.component-content',
			settingsContainerSelector: '.gallery-settings',
			galleryContentSelector: '.gallery__image-view .gallery__content',
			onwardSlideSelector: '.gallery__onward-slide-holder',

			// elements JSON
			galleryElements: '.gallery__elements',

			// templates
			thumbailsTPL: '.template-Thumbail',
			imageTPL: '.template-Image',

			// Images view
			imageViewSelector: '.gallery__image-view',
			galleryItemSelector: '.gallery__item',
			galleryImageSelector: '.gallery__image',
			arrowRightSelector: '.gallery__navigation .gallery__arrow-right',
			arrowLeftSelector: '.gallery__navigation .gallery__arrow-left',
			paginationSelector: '.gallery__pagination',
			paginationCurrentSelector: '.gallery__pagination-current',
			paginationNumberSelector: '.gallery__pagination-number',
			viewAllButtonSelector: '.gallery__view-all',
			skipAdSelector: '.gallery__skip-ad',

			// Thumbnails view
			thumbnailViewSelector: '.gallery__thumbnail-view',
			thumbnailItemsSelector: '.gallery__thumbnail-item',
			thumbnailListSelector: '.gallery__thumbnail-items-list',
			thumbnailLinksSelector: '.gallery__thumbnail-link',
			backToImageSelector: '.gallery__back-to-image',

			// Canonical meta tag selector
			canonicalMetaTagSelector: 'link[rel=canonical]',

			// View stats
			VIEWS: {
				THUMBNAIL: 0,
				IMAGE: 1
			},

			// Accessibility settings
			allowArrowKeys: true,
			useTitleAttributes: true
		},

		// Function initialize whole component.
		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			// Set the current item from the initial rendered DOM
			this.currentItem = this.gallery.querySelector(this.config.galleryItemSelector);
			this.onwardSlide = this.gallery.querySelector(this.config.onwardSlideSelector);

			// Create an item template by copying the currentItem and emptying it
			this.slideTemplate = this.createImageSlide(this.currentItem, {});

			// Now that we have the template, adjust the image width
			var imageWrapper = this.currentItem.querySelector(this.config.galleryImageSelector);
			this.adjustImageWidth(imageWrapper);

			// Set the current index
			this.setIndex(parseInt(this.currentItem.getAttribute('data-slide-index'), 10));

			// Initialise the data
			this.initData();

			// templates
			this.thumbTemplate = this.gallery.querySelector(this.config.thumbailsTPL).innerHTML.trim();
			this.thumbnailList = this.gallery.querySelector(this.config.thumbnailListSelector);
			this.$componentContent = this.$gallery.children(this.config.componentContentSelector);
			this.$settingsContainer = this.$gallery.find(this.config.settingsContainerSelector);

			// this.galleryDisplayLength = this.getGalleryDisplayLength();

			// Images view
			this.$imageView = this.$gallery.find(this.config.imageViewSelector);
			this.$arrowRight = this.$gallery.find(this.config.arrowRightSelector);
			this.$arrowLeft = this.$gallery.find(this.config.arrowLeftSelector);
			this.$pagination = this.$gallery.find(this.config.paginationSelector);
			this.$paginationCurrent = this.$gallery.find(this.config.paginationCurrentSelector);
			this.$paginationNumber = this.$gallery.find(this.config.paginationNumberSelector);
			this.$viewAllButton = this.$gallery.find(this.config.viewAllButtonSelector);
			this.$skipAd = this.$gallery.find(this.config.skipAdSelector);

			// Thumbnails view
			this.$thumbnailView = this.$gallery.find(this.config.thumbnailViewSelector);

			this.$backToImage = this.$gallery.find(this.config.backToImageSelector);

			this.galleryContent = this.gallery.querySelector(this.config.galleryContentSelector);

			this.$canonicalMetaTag = $(this.config.canonicalMetaTagSelector);

			this.initSlides();
			this.initNavigation();
			this.initUrl();
			this.initPagination();
			this.initSkippingAd();
			this.createAdvertMpu();
		},

		setIndex: function setIndex(newIndex) {
			this.lastIndex = this.index;
			this.index = newIndex;
		},

		initData: function initData() {
			// Replaces img path while keeping querystring or srcset dimensions
			// 'image.jpg 2x' => 'replacement.png 2x'
			// 'image.jpg?imwidth=400' => 'replacement.png?imwidth=400'
			function replaceImagePath(string, path) {
				return string.replace(/[^$?\s]+(.*)/, path + '$1');
			}

			// Updates the incoming data so that it has Image Manager data in its paths
			function transformData(imageData) {
				var imagePath = imageData['image-src'];
				var imageSrc = replaceImagePath(this.src, imagePath);
				var imageSrcset = this.srcset.split(',').map(function (part) {
					return replaceImagePath(part, imagePath);
				}).join(',');
				var thumbSrc = replaceImagePath(this.thumbSrc, imagePath);
				var thumbSrcset = this.thumbSrcset.split(',').map(function (part) {
					return replaceImagePath(part, imagePath);
				}).join(',');

				return $.extend({}, imageData, {
					'image-src': imageSrc,
					'image-srcset': imageSrcset,
					'thumb-src': thumbSrc,
					'thumb-srcset': thumbSrcset
				});
			}

			var item = this.currentItem;
			var image = item.querySelector(this.config.galleryImageSelector + ' img');

			// load data
			var jsonString = this.gallery.querySelector(this.config.galleryElements).innerText;
			var jsonData = JSON.parse(jsonString.replace(/\n/g, ''));
			this.data = jsonData.map(transformData, {
				src: image.getAttribute('src'),
				srcset: image.getAttribute('srcset'),
				thumbSrc: item.getAttribute('data-thumb-src'),
				thumbSrcset: item.getAttribute('data-thumb-srcset')
			});
		},

		initSlides: function initSlides() {
			this.slides = Array(this.data.length);
			this.slides[this.index] = this.currentItem;
			this.preloadSlides(this.index);
			if (this.onwardSlide) {
				this.slides[this.data.length] = this.onwardSlide.firstElementChild;
			}
		},

		preloadSlides: function preloadSlides(index) {
			if (index > 0) this.getSlide(index - 1);
			if (index < this.slides.length - 1) this.getSlide(index + 1);
		},

		getSlide: function getSlide(index) {
			if (!this.slides[index]) {
				this.slides[index] = this.createImageSlide(this.slideTemplate, this.data[index]);
			}
			return this.slides[index];
		},

		createImageSlide: function createImageSlide(slideTemplate) {
			var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var slide = slideTemplate.cloneNode(true);

			// Update wrapper
			slide.setAttribute('data-url', data['slide-url'] || '');
			slide.setAttribute('data-title', data['image-title'] || '');
			slide.setAttribute('data-slide-index', data['slide-index'] || '');

			// Update image wrapper
			var imageWrapper = slide.querySelector(this.config.galleryImageSelector);
			imageWrapper.setAttribute('data-image-ratio', data['image-ratio'] || '');

			// Update image
			var image = imageWrapper.querySelector('img');
			image.setAttribute('src', data['image-src'] || '');
			image.setAttribute('srcset', data['image-srcset'] || '');
			image.setAttribute('alt', data['image-alt'] || '');

			// Update subtitle
			var subtitle = slide.querySelector('.gallery__subtitle > strong');
			subtitle.innerHTML = data['image-subtitle'] || '';

			// Update caption
			var caption = slide.querySelector('.gallery__caption');
			caption.innerHTML = data['image-caption'] || '';

			// Update credits
			var credits = slide.querySelector('.gallery__credits-credit');
			credits.innerHTML = data['image-credits'] || '';

			return slide;
		},

		initThumbs: function initThumbs() {
			var frag = document.createDocumentFragment();
			this.thumbs = this.data.map(this.createThumb, this);
			this.thumbs.forEach(function (item) {
				return frag.appendChild(encodeHtmlEntity(item));
			});
			this.thumbnailList.appendChild(frag);
		},

		createThumb: function createThumb(data, i) {
			var div = document.createElement('div');
			div.innerHTML = this.parseTemplate(data, this.thumbTemplate);
			div.firstChild.addEventListener('click', this.handleThumbClick(i).bind(this));
			return div.firstChild;
		},

		handleThumbClick: function handleThumbClick(index) {
			return function (evt) {
				evt.preventDefault();
				this.mpu.showNewAdvert({
					disableMobile: true
				});
				this.handleSlides({
					index: index,
					backFromThumbnailView: true
				});
				this.showImageView();
			};
		},

		initPagination: function initPagination() {
			this.$paginationNumber.html(this.slides.length);
			this.updatePagination(this.index);
		},

		updatePagination: function updatePagination(index) {
			this.$paginationCurrent.html(index + 1);
		},

		// parsing template from tpl param, and replace @{key} with JSON value (for given key).
		parseTemplate: function parseTemplate(el, tpl) {
			var parsedTpl = tpl;
			$.each(el, function (key, value) {
				parsedTpl = parsedTpl.replace(RegExp('@{' + key + '}', 'g'), value);
			});
			return parsedTpl;
		},

		// Function creates MPU Object
		createAdvertMpu: function createAdvertMpu() {
			var adViewability = this.$settingsContainer.data('gallery-ad-viewability');
			var slidesPerAd = this.$settingsContainer.data('gallery-slides-per-ad');
			var advert = null;

			if ($('#advert_tmg_mpu').length > 0 && typeof tmgAdsBuildAd !== 'undefined') {
				try {
					advert = tmgAdsBuildAd('advert_tmg_mpu', '', '');
				} catch (e) {
					console.log(e);
				}
			}

			this.mpu = new AdvertMpu({
				adViewability: adViewability,
				slidesPerAd: slidesPerAd,
				advert: advert
			});
		},

		// Initialize navigation to switchings slides and views
		initNavigation: function initNavigation() {
			this.initSwitchingViews();
			this.initNavigationArrows();
			this.initKeyEvents();
			this.initSwipingSlides();
		},
		// Initialize keyboard navigation to navigate slides with arrow keys
		initKeyEvents: function initKeyEvents() {
			var _this = this;
			if (_this.config.allowArrowKeys) {
				$(document).on('keyup', function (e) {
					var code = e.keyCode;
					if (code === 39) {
						if (_this.view === _this.config.VIEWS.IMAGE) {
							$('.gallery__arrow-right').trigger('click').focus();
						} else if (_this.view === _this.config.VIEWS.THUMBNAIL) {
							$('.gallery__thumbnail-link:focus').closest('.gallery__thumbnail-item').next().find('a').focus();
						}
					} else if (code === 37) {
						if (_this.view === _this.config.VIEWS.IMAGE) {
							$('.gallery__arrow-left').trigger('click').focus();
						} else if (_this.view === _this.config.VIEWS.THUMBNAIL) {
							$('.gallery__thumbnail-link:focus').closest('.gallery__thumbnail-item').prev().find('a').focus();
						}
					}
				});
			}
		},

		// Initialize handling browser back button
		initUrl: function initUrl() {
			var _this2 = this;

			var handlePopstate = function handlePopstate(evt) {
				if (evt && evt.state) {
					if (_this2.view === 0) {
						_this2.showImageView();
					}
					_this2.handleSlides({
						index: evt.state.index,
						sameUrl: true
					});
				}
			};

			// show proper image when browser state is loaded
			window.addEventListener('popstate', handlePopstate);

			// set the very first slide in the history
			this.updateUrl(this.index);
		},

		// Function set proper url according to current slide
		updateUrl: function updateUrl(index) {
			if (this.data[index] && window.history && window.history.pushState && !window.jasmine) {
				var url = this.data[index]['slide-url'] || '';
				document.title = this.data[index]['image-title'] || '';
				window.history.pushState({
					index: index
				}, 'slide ' + (index + 1), url);
				this.$canonicalMetaTag.attr('href', url);
			}
		},

		// Initialize navigation to switchings slides and views
		initSwitchingViews: function initSwitchingViews() {
			var that = this;
			this.$backToImage.on('click', function (e) {
				e.preventDefault();
				that.mpu.showNewAdvert({
					disableMobile: true
				});
				that.showImageView();
			});
			this.$viewAllButton.on('click', function (e) {
				e.preventDefault();
				that.mpu.showNewAdvert({
					disableMobile: true
				});
				that.showThumbnailView();
			});
		},

		// Add attribute if not exist
		addAttribute: function addAttribute($el, attrs) {
			var attr;
			for (attr in attrs) {
				if (attr === 'title' && !this.config.useTitleAttributes) {
					continue;
				}
				if (!$el.attr(attr)) {
					$el.attr(attr, attrs[attr]);
				}
			}
		},

		// Function initialize navigation arrows click events to switch slides
		initNavigationArrows: function initNavigationArrows() {
			var that = this;

			// Disable arrow left on first slide
			if (this.index === 0) {
				this.$arrowLeft.addClass('disabled').attr('tabindex', '-1');
			}
			// Disable arrow right on last slide
			if (this.index >= this.slides.length - 1) {
				this.$arrowRight.addClass('disabled').attr('tabindex', '-1');
			}

			// add href attributes so the elements
			// can be navigated using keyboard
			this.addAttribute(this.$arrowLeft, {
				title: this.$arrowLeft.find('.sr-only').text(),
				href: '#'
			});
			this.addAttribute(this.$arrowRight, {
				title: this.$arrowRight.find('.sr-only').text()
			});
			this.addAttribute(this.$viewAllButton, {
				title: this.$viewAllButton.text(),
				href: '#'
			});
			this.addAttribute(this.$backToImage, {
				title: this.$backToImage.text(),
				href: '#'
			});
			this.addAttribute(this.$skipAd, {
				title: this.$skipAd.text(),
				href: '#'
			});

			this.$arrowLeft.click(function (e) {
				e.preventDefault();
				if (!$(this).hasClass('disabled')) {
					that.handleSlides({
						index: that.index - 1
					});
				}
			});
			this.$arrowRight.click(function (e) {
				e.preventDefault();
				if (!$(this).hasClass('disabled')) {
					that.handleSlides({
						index: that.index + 1
					});
				}
			});
		},

		// Function initialize touch events - swipes - on mobile devices - switching slides
		initSwipingSlides: function initSwipingSlides() {
			var that = this;

			Hammer(this.galleryContent).on('swipeleft', function () {
				if (!that.$arrowRight.hasClass('disabled')) {
					that.handleSlides({
						index: that.index + 1
					});
				}
			});

			Hammer(this.galleryContent).on('swiperight', function () {
				if (!that.$arrowLeft.hasClass('disabled')) {
					that.handleSlides({
						index: that.index - 1
					});
				}
			});
		},

		initSkippingAd: function initSkippingAd() {
			var _this = this;

			// Skip ad on click and follow last direction
			this.$skipAd.on('click', function (e) {
				e.preventDefault();
				_this.handleSlides({
					index: _this.index + (_this.lastDirection === 'forward' ? 1 : -1)
				});
				if (_this.lastDirection === 'forward') {
					_this.$arrowRight.focus();
				} else {
					_this.$arrowLeft.focus();
				}
			});
		},

		// Function handle switching slides and manipulating adverts depending on conditions
		// (adViewability on desktop, slidesPerAd on mobile)
		// Parameter: settings.index - index of image to be shown
		handleSlides: function handleSlides(settings) {
			var blockAd = settings.sameUrl || settings.backFromThumbnailView;

			this.direction = this.lastIndex - settings.index > 0 ? 'previous' : 'forward';

			// If mobile advert is visible and we are going in reverse direction
			// (to last image) -> show last image
			var showLastImage = this.compactAdvertVisible && this.direction !== this.lastDirection;

			this.$arrowLeft.removeClass('disabled').attr('tabindex', '0');
			this.$arrowRight.removeClass('disabled').attr('tabindex', '0');

			// Do not show advert when we get there from thumbnail view
			if (blockAd) {
				this.hideImage(this.index);
				this.showImage(settings);
				this.handleLimits();
			} else {
				// Try to show advert
				switch (this.mpu.showNewAdvert()) {
					// Compact advert was shown
					case AdvertEnum.COMPACT:
						this.hideImage(this.index);
						this.$viewAllButton.hide();
						this.$pagination.hide();
						this.$skipAd.show();
						this.compactAdvertVisible = true;
						$(document).trigger('slideChanged');
						break;
					// Expanded advert was shown
					case AdvertEnum.EXPANDED:
						this.showImage(settings);
						this.handleLimits();
						break;
					// No advert was shown
					default:
						this.compactAdvertVisible = false;
						if (showLastImage) {
							// Show last image
							this.showImage({
								index: this.index
							});
						} else {
							this.showImage(settings);
						}
						this.$viewAllButton.show();
						this.$pagination.show();
						this.$skipAd.hide();
						this.handleLimits();
						break;
				}
			}

			// Set variables for next iteration
			this.lastIndex = this.index;
			this.lastDirection = this.direction;

			return true;
		},

		handleLimits: function handleLimits() {
			// Disable arrow left on first slide
			if (this.index === 0) {
				this.$arrowLeft.addClass('disabled').attr('tabindex', '-1');
			}

			// Disable arrow right on last slide
			if (this.index >= this.slides.length - 1) {
				this.$arrowRight.addClass('disabled').attr('tabindex', '-1');
			}
		},

		// Function hide image by its index
		hideImage: function hideImage(index) {
			this.slides[index].classList.remove('active');
		},

		// Function switch view to image
		showImageView: function showImageView() {
			this.view = this.config.VIEWS.IMAGE;
			this.$componentContent.removeClass('gallery__thumbnail-view-active');
			this.$thumbnailView.attr('aria-hidden', 'true');
			this.$imageView.attr('aria-hidden', 'false');
			this.$viewAllButton.focus();
		},

		// Function switch view to thumbnail
		showThumbnailView: function showThumbnailView() {
			var _this3 = this;

			this.view = this.config.VIEWS.THUMBNAIL;
			if (!this.thumbs.length) {
				this.initThumbs();
			}

			this.$componentContent.addClass('gallery__thumbnail-view-active');
			this.$imageView.attr('aria-hidden', 'true');
			this.$thumbnailView.attr('aria-hidden', 'false');

			this.thumbs.forEach(function (item, index) {
				if (index === _this3.index) {
					item.classList.add('active');
					item.querySelector('a').focus();
				} else {
					item.classList.remove('active');
				}
			});
		},

		isOnwardSlide: function isOnwardSlide(index) {
			return this.onwardSlide && index === this.slides.length - 1;
		},

		// Function show image by index
		// Parameter: settings.index - index of image to be shown
		// Parameter: settings.sameUrl - true if url should not be changed while showing new image
		showImage: function showImage(settings) {
			var newIndex = settings.index;
			if (newIndex < 0 || newIndex > this.slides.length - 1) {
				return;
			}

			if (newIndex > 0 && this.$gallery.attr('data-gallery-wall') === 'true') {
				this.showPaywall();
			} else {
				this.hidePaywall();
			}

			// Empty gallery content element
			while (this.galleryContent.firstChild) {
				this.galleryContent.removeChild(this.galleryContent.firstChild);
			}

			// Append new slide content
			this.galleryContent.appendChild(this.getSlide(newIndex));
			this.currentItem = this.getSlide(newIndex);
			this.currentItem.classList.add('active');
			this.setIndex(newIndex);
			this.preloadSlides(newIndex);
			this.updatePagination(newIndex);

			if (!this.isOnwardSlide(newIndex)) {
				// Adjust width to make sure height does not exceed 750px
				var imageWrapper = this.currentItem.querySelector(this.config.galleryImageSelector);
				this.adjustImageWidth(imageWrapper);

				if (!settings.sameUrl) {
					this.updateUrl(newIndex);
					$(document).trigger('slideChanged');
				}
			}
		},

		// adjust width to make sure height does not exceed 750px
		adjustImageWidth: function adjustImageWidth(imageWrapper) {
			function setWidth(image) {
				if (!image.style.width) {
					var rectObject = image.getBoundingClientRect();
					if (rectObject.height > 750) {
						image.style.width = parseFloat(imageWrapper.dataset.imageRatio) * 750 + 'px';
					} else {
						image.style.width = '100%';
					}
				}
			}

			var image = imageWrapper.querySelector('img');
			if (image.complete) {
				setWidth(image);
			} else {
				image.onload = function () {
					return setWidth(image);
				};
			}
		},

		hidePaywall: function hidePaywall() {
			this.$gallery.removeClass('gallery--wall');
			this.$arrowLeft.removeClass('disabled').attr('tabindex', '0');
			this.$arrowRight.removeClass('disabled').attr('tabindex', '0');
		},

		showPaywall: function showPaywall() {
			this.$gallery.addClass('gallery--wall');
			this.$arrowLeft.addClass('disabled').attr('tabindex', '-1');
			this.$arrowRight.addClass('disabled').attr('tabindex', '-1');
		}
	};

	// ADVERT MPU OBJECT
	var AdvertMpu = function AdvertMpu(options) {
		this.config = {};
		this.advert = options.advert;
		this.settings = {
			adViewability: options.adViewability || 5000,
			slidesPerAd: options.slidesPerAd || 5
		};
		this.init();
	};

	AdvertMpu.prototype = {
		defaults: {
			component: '.gallery__advert-mpu .advert',
			container: '.gallery__advert-mpu',
			advert: '.gallery__advert-mpu .ad'
		},

		// Function initialize MPU advert
		init: function init() {
			this.config = $.extend({}, this.defaults);

			this.$container = $(this.config.container);
			this.$component = $(this.config.component);
			this.$advert = $(this.config.advert);

			this.lastTime = new Date();

			this.countClicks = 1;

			this.compactMode = false;

			if (this.advert != null) {
				this.advert.display();
			}
		},

		isExpanded: function isExpanded() {
			return !this.compactMode && this.$container.is(':visible');
		},

		displayAd: function displayAd() {
			if (this.advert != null) {
				this.advert.refresh();
			}
			this.lastTime = new Date();
		},

		removeAd: function removeAd() {
			this.$advert.empty();
		},

		// Function shows new advert if condition is passed (adViewability on desktop,
		// slidesPerAd on mobile)
		showNewAdvert: function showNewAdvert(options) {
			if (this.isExpanded()) {
				if (new Date() - this.lastTime > this.settings.adViewability) {
					// Here should be call to original MPU advert API call
					this.compactMode = false;
					this.displayAd();
					return AdvertEnum.EXPANDED;
				}
			} else {
				if (options && options.disableMobile) {
					return false;
				}
				if (this.countClicks > this.settings.slidesPerAd - 1) {
					this.compactMode = true;
					this.displayAd();
					this.countClicks = 0;
					this.$container.show();
					return AdvertEnum.COMPACT;
				}
				// this is to return the ad to its 'natural' state ...ie: governed by
				// the styles and media queries (more robust than tracking states in js)
				this.compactMode = false;
				this.$container.attr('style', '');
				this.removeAd();
				this.countClicks++;
			}
			return false;
		}
	};

	$.fn.telegraph_image_gallery = function (galleries) {
		return this.each(function () {
			if (!$.data(this, 'telegraph_image_gallery')) {
				galleries.push(new ImageGallery(this));
				$.data(this, 'telegraph_image_gallery', galleries[galleries.length - 1]);
			}
		});
	};

	function init() {
		$('.gallery.component').telegraph_image_gallery([]);
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document, Hammer);
(function (window, document) {
	'use strict';

	window.galleries = [];
	var init = void 0;
	var telegraph_grid_gallery = function telegraph_grid_gallery(container) {
		this.container = container;
	};

	telegraph_grid_gallery.prototype = {
		selectors: {
			mainImageList: 'grid-gallery__main-image-list',
			thumbnailsContainer: 'grid-gallery__thumbnails-container',
			currentImageLabel: 'grid-gallery-current',
			totalImagesLabel: 'grid-gallery-total',
			galleryFooter: 'grid-gallery-footer',
			thumbnailLink: 'grid-gallery__thumbnail',
			prevLink: 'grid-gallery__nav--prev',
			nextLink: 'grid-gallery__nav--next'
		},
		galleryTrigger: 'gallery-trigger',
		currentImageIndex: 0,
		prevCurrentIndex: -1,
		canSlide: true,

		init: function init() {
			this.findDomElements();
			this.maxImageIndex = this.thumbnails.length - 1;
			this.applyInitialStyles();
			this.attachEvents();
			return this;
		},

		findDomElements: function findDomElements() {
			var _this = this;

			Object.keys(this.selectors).map(function (key, index) {
				_this[key] = _this.container.querySelectorAll('[data-js=' + _this.selectors[key] + ']')[0];
			});

			this.thumbnails = this.thumbnailsContainer.getElementsByTagName('li');
			this.mainImages = this.mainImageList.getElementsByTagName('li');
			this.galleryTrigger = document.querySelectorAll('[data-js=' + this.galleryTrigger + ']')[0] || false;
		},

		applyInitialStyles: function applyInitialStyles() {
			this.updateCurrentImage();
			this.updateCurrentThumbnail();
			this.updateCurrentImageLabel();
			this.updateTotalImagesLabel();
			this.galleryFooter.style.opacity = 1;
		},

		attachEvents: function attachEvents() {
			var _this2 = this;

			if (this.thumbnailsContainer) {
				[].forEach.call(this.thumbnails, function (thumbnail) {
					thumbnail.addEventListener('click', _this2.onThumbnailClick.bind(_this2), false);
				});

				this.prevLink && this.prevLink.addEventListener('click', this.onNavClick.bind(this), false);
				this.nextLink && this.nextLink.addEventListener('click', this.onNavClick.bind(this), false);
				this.galleryTrigger && this.galleryTrigger.addEventListener('click', this.onGalleryTriggerClick.bind(this), false);
			}
		},

		setCurrentIndex: function setCurrentIndex(index) {
			if (!this.canSlide) {
				return false;
			}
			this.delayNextSlide();

			if (!index) {
				this.currentImageIndex = 0;
			} else {
				if (index <= this.maxImageIndex) {
					this.currentImageIndex = index;
				}
			}

			this.updateCurrentThumbnail();
			this.updateCurrentImage();
			this.updateCurrentImageLabel();
			this.updateTotalImagesLabel();
		},

		updateCurrentThumbnail: function updateCurrentThumbnail() {
			var _this3 = this;

			var activeClass = 'is-active';
			var prevCurrentThumbnail = this.thumbnailsContainer.getElementsByClassName(activeClass);
			if (prevCurrentThumbnail.length > 0) {
				this.prevCurrentIndex = parseInt(prevCurrentThumbnail[0].getAttribute('data-thumbnail-id'), 10);
				prevCurrentThumbnail[0].classList.remove(activeClass);
			}

			[].forEach.call(this.thumbnails, function (thumbnail, index) {
				if (index === _this3.currentImageIndex && !thumbnail.classList.contains(activeClass)) {
					thumbnail.classList.add(activeClass);
				}
			});
		},

		delayNextSlide: function delayNextSlide() {
			var _this4 = this;

			this.canSlide = false;
			window.setTimeout(function () {
				_this4.canSlide = true;
			}, 500);
		},

		updateCurrentImage: function updateCurrentImage() {
			var _this5 = this;

			[].forEach.call(this.mainImages, function (image, index) {
				if (index === _this5.currentImageIndex) {
					image.style.zIndex = 10;
					image.style.opacity = 1;
				} else if (index === _this5.prevCurrentIndex) {
					image.style.zIndex = 5;
					image.style.opacity = 1;
				} else {
					image.style.zIndex = 1;
					image.style.opacity = 0;
				}

				if (index < _this5.currentImageIndex) {
					image.style.marginLeft = '-100%';
				} else if (index > _this5.currentImageIndex) {
					image.style.marginLeft = '100%';
				} else {
					image.style.marginLeft = 0;
				}
			});
		},

		updateCurrentImageLabel: function updateCurrentImageLabel() {
			this.currentImageLabel.innerHTML = this.currentImageIndex + 1;
		},
		updateTotalImagesLabel: function updateTotalImagesLabel() {
			this.totalImagesLabel.innerHTML = this.maxImageIndex + 1;
		},

		getGalleryPosition: function getGalleryPosition() {
			var elm = this.container;
			var y = elm.offsetTop;
			var node = elm;
			while (node.offsetParent && node.offsetParent != document.body) {
				node = node.offsetParent;
				y += node.offsetTop;
			}return y;
		},

		// event handlers
		onThumbnailClick: function onThumbnailClick(e) {
			var newCurrentIndex = parseInt(e.currentTarget.getAttribute('data-thumbnail-id'), 10);
			this.setCurrentIndex(newCurrentIndex);
		},

		onGalleryTriggerClick: function onGalleryTriggerClick(e) {
			e.preventDefault();
			var scrollTo = this.getGalleryPosition();
			window.scroll(0, scrollTo);
		},

		onNavClick: function onNavClick(e) {
			e.preventDefault();
			var delta = parseInt(e.currentTarget.getAttribute('data-delta'), 10) || 0;
			if (delta === 1 && this.currentImageIndex >= this.maxImageIndex) {
				this.setCurrentIndex(0);
			} else if (delta === -1 && this.currentImageIndex <= 0) {
				this.setCurrentIndex(this.maxImageIndex);
			} else {
				this.setCurrentIndex(this.currentImageIndex + delta);
			}
		}
	};

	init = function init() {
		var gridGalleries = document.querySelectorAll('[data-js="grid-gallery"]');
		[].forEach.call(gridGalleries, function (gallery, index) {
			if (!window.galleries[index]) {
				window.galleries[index] = new telegraph_grid_gallery(gallery).init();
			}
		});
	};

	tmg.pageReady(init);
	document.addEventListener('tmg:page-loaded', init());
})(window, document);
;(function ($, window, document) {
	'use strict';

	var ListOfTags = function ListOfTags(context, options) {
		this.$context = $(context);
		if (!this.$context.hasClass('initialized')) {
			this.init(options);
		}
	};

	ListOfTags.prototype = {
		defaults: function () {
			var selectorComponent = '.list-of-tags';
			return {
				selectorShowMore: selectorComponent + '__show-more',
				selectorItem: selectorComponent + '__item',
				selectorSettings: '.js-settings'
			};
		}(),

		init: function init(options) {
			this.findDomElements();
			this.limit = options && options.limit || this.getLimit() || this.$items.length;

			if (this.limit < this.$items.length) {
				this.$showMore.attr('aria-hidden', 'false');
			}

			this.hideItemsAboveLimit();
			$(this.$showMore).on('click', $.proxy(this.handleShowMore, this));
			this.$context.addClass('initialized');
		},

		findDomElements: function findDomElements() {
			this.$settings = this.$context.find(this.defaults.selectorSettings);
			this.$showMore = this.$context.find(this.defaults.selectorShowMore);
			this.$items = this.$context.find(this.defaults.selectorItem);
		},

		getLimit: function getLimit() {
			return this.$settings.data('limit');
		},

		handleShowMore: function handleShowMore(e) {
			e.preventDefault();
			// We can only show all tags - there is no option to "show less"
			this.$items.attr('aria-hidden', 'false');
			this.$showMore.attr('aria-hidden', 'true');
		},

		hideItemsAboveLimit: function hideItemsAboveLimit() {
			this.$items.slice(this.limit).attr('aria-hidden', 'true');
		}
	};

	function init() {
		if (!tmg.components) {
			tmg.components = {};
		}

		tmg.components.ListOfTags = {};

		tmg.components.ListOfTags.init = function () {
			$('.list-of-tags').each(function () {
				// initiate once
				if (!$.data(this, 'ListOfTags')) {
					$.data(this, 'ListOfTags', new ListOfTags(this));
				}
			});

			return this;
		};

		tmg.components.ListOfTags.init();
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'telegraph_onOffToggler';

	var className = 'js-tmg-toggler';

	var pluginNameInit = pluginName + '_init';

	var selector = '.' + className;

	var onClass = 'js-button-is-on';

	var bottonSelector = '.tmg-toggler__bar-button';

	var togglerObj = null;

	var Plugin = function Plugin(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.eventOn = this.$elem.data('on');
		this.eventOff = this.$elem.data('off');
		this.dataOptions = this.$elem.data('options');
		this.dataOptions = this.dataOptions ? $.parseJSON(this.dataOptions.replace(/'/g, '"')) : {};
		this.$botton = this.$elem.find(bottonSelector);
		togglerObj = this;
	};

	Plugin.prototype = {
		defaults: {},
		init: function init() {
			this.options = $.extend({}, this.defaults, this.dataOptions, this.options);
			this.$botton.on('click', this.buttonClick);
			this.triggerEvent(this.$botton);
			return this;
		},
		triggerEvent: function triggerEvent(button) {
			if (button.hasClass(onClass)) {
				$(document).trigger(togglerObj.eventOn);
			} else {
				$(document).trigger(togglerObj.eventOff);
			}
		},
		buttonClick: function buttonClick(event) {
			event.preventDefault();
			var button = $(this);

			// toggle On Class
			button.toggleClass(onClass);
			togglerObj.triggerEvent(button);
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// only initiate once
			if (!$(this).data(pluginName)) {
				$(this).data(pluginName, new Plugin(this, options).init());
			}
		});
	};
	$.fn[pluginNameInit] = function () {
		$(selector)[pluginName]();
	};

	init = function init() {
		$(selector)[pluginNameInit]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var LoadMore = function LoadMore() {
		this.init();
	};

	LoadMore.prototype = {

		init: function init() {
			this.$loadMoreButton = $('.js-load-more__button');
			// check if this is paginated list
			if (this.$loadMoreButton.length > 0) {
				this.$loadMoreContainer = this.$loadMoreButton.parent();
				this.$loadMoreList = this.$loadMoreButton.closest('.list.section').find('.js-list-of-entities__container');
				this.loadMoreIndex = this.$loadMoreContainer.data('current-page-number');
				this.loadMoreUrl = this.$loadMoreContainer.data('next-url');
				this.wcm = $('body').hasClass('cq-wcm-edit');
				this.preloaded = [];
				this.retryNumber = 0;
				this.maxRetryNumber = 2;
				this.buttonDisabled = false;
				this.classes = {
					disabled: 'disabled',
					listItem: 'list-of-entities__item'
				};

				this.setEvents();
				this.btnDisable();
				this.preloadMore();
			}
		},

		setEvents: function setEvents() {
			this.$loadMoreButton.on('click', $.proxy(this.clickEvent, this));
		},

		clickEvent: function clickEvent() {
			if (!this.buttonDisabled) {
				this.btnDisable();
				this.loadMore();
			}
		},

		btnDisable: function btnDisable() {
			this.buttonDisabled = true;
			this.$loadMoreButton.addClass(this.classes.disabled);
		},
		btnEnable: function btnEnable() {
			this.buttonDisabled = false;
			this.$loadMoreButton.removeClass(this.classes.disabled);
		},
		btnRemove: function btnRemove() {
			this.buttonDisabled = true;
			this.$loadMoreContainer.remove();
		},

		loadMore: function loadMore() {
			if (this.preloaded[this.loadMoreIndex + 1]) {
				this.$loadMoreList.append(this.preloaded[this.loadMoreIndex + 1]);
				this.loadMoreIndex++;
				this.preloadMore();
			}
		},

		preloadMore: function preloadMore() {
			var _this = this;

			var url = _this.loadMoreUrl + (_this.loadMoreIndex + 1);

			if (this.wcm) {
				url = url + '.html';
			} else {
				url = url + '/';
			}

			$.ajax({
				url: url,
				method: 'GET',
				timeout: 10000,
				dataType: 'html'
			}).done(function (response) {
				var $listElements = $(response).find('.' + _this.classes.listItem);
				if ($listElements.length > 0) {
					_this.preloaded[_this.loadMoreIndex + 1] = $listElements;
					_this.retryNumber = 0;
					_this.btnEnable();
				} else {
					_this.btnRemove();
				}
				// Recall image loader for inline responsive images
				$('.js-list-of-entities .responsive-image').each(function () {
					lzld(this);
				});
			}).fail(function (jqXHR) {
				_this.retryNumber++;
				if (_this.retryNumber <= _this.maxRetryNumber) {
					_this.preloadMore();
				} else {
					_this.btnRemove();
				}
			});
		}

	};

	$.fn.telegraph_pagination = function () {
		return this.each(function () {
			var $this = $(this);
			if (!$this.data('tmg_loadMore')) {
				$this.data('tmg_loadMore', new LoadMore());
			}
		});
	};

	init = function init() {
		$('.js-load-more__button').telegraph_pagination();
	};

	$(document).ready(init);
	// Uncomment the following line if pagination needs to be initialised in the video play page
	// $(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
/* Global nav component */
;(function ($, tmg, Cookies, window, document) {
	'use strict';

	var pluginName = 'PremiumListFooter';

	function isAuthorMode() {
		return window.CQ !== undefined;
	};

	function PremiumListFooter(element, options) {
		this.$element = $(element);
		this.$links = this.$element.find('a[href]');
	};

	PremiumListFooter.prototype = {
		init: function init() {
			if (!isAuthorMode()) {
				this.displayFooter(this.isLoggedOut());
			}
			this.$links.each(function (i, elem) {
				elem.href = tmg.updateRedirectParam(elem.href, document.location.href);
			});
		},

		isLoggedOut: function isLoggedOut() {
			return Cookies.get('tmg_pid') === undefined;
		},

		displayFooter: function displayFooter(state) {
			this.$element.toggleClass('is-visible', state).attr('aria-hidden', !state);
		}
	};

	function init() {
		$('.premium-list-footer').each(function () {
			var data = $(this).data();
			// initiate once
			if (!data[pluginName]) {
				data[pluginName] = new PremiumListFooter(this).init();
			}
		});
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, tmg, Cookies, window, document);
/* Premium paywall component */
;(function ($, tmg, window, document) {
	'use strict';

	var pluginName = 'PremiumPaywall';

	function PremiumPaywall(element, options) {
		this.$element = $(element);
		this.$links = this.$element.find('a[href]');
	};

	PremiumPaywall.prototype = {
		init: function init() {
			this.$links.each(function (i, elem) {
				elem.href = tmg.updateRedirectParam(elem.href, document.location.href);
			});
		}
	};

	function init() {
		$('.premium-paywall').each(function () {
			var data = $(this).data();
			// initiate once
			if (!data[pluginName]) {
				data[pluginName] = new PremiumPaywall(this).init();
			}
		});
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, tmg, window, document);
(function ($, window, document, _) {
	'use strict';

	var Map = function Map(context, options, translations) {
		this.$map = $(context);
		this.options = options;
		this.translations = translations;
		this.markers = [];
		this.positions = [];
		this.infowindow; // for holding reference to infowindow
		// Styles from https://snazzymaps.com/
		this.styles = [{
			'stylers': [{
				'saturation': -50
			}]
		}, {
			'featureType': 'landscape.man_made',
			'stylers': [{
				'lightness': -5
			}]
		}, {
			'featureType': 'poi',
			'stylers': [{
				'visibility': 'off'
			}]
		}, {
			'featureType': 'poi.attraction',
			'stylers': [{
				'visibility': 'on'
			}]
		}, {
			'featureType': 'poi.park',
			'stylers': [{
				'visibility': 'on'
			}]
		}, {
			'featureType': 'poi.park',
			'elementType': 'geometry.fill',
			'stylers': [{
				'color': '#a9e2c8'
			}]
		}, {
			'featureType': 'poi.sports_complex',
			'stylers': [{
				'visibility': 'on'
			}]
		}, {
			'featureType': 'transit.station',
			'elementType': 'labels.text',
			'stylers': [{
				'visibility': 'off'
			}]
		}, {
			'featureType': 'water',
			'elementType': 'geometry.fill',
			'stylers': [{
				'color': '#b9dae9'
			}]
		}];

		this.travelGreen = '#008385';
		this.travelPurple = '#86146e';

		this.map;
		this.infoboxHtmlTemplate = '';
	};

	var $maps;

	Map.prototype = {

		// Initializes whole component
		init: function init() {
			this.mapCanvasSelector = this.options.canvasSelector || '.product-map__canvas'; // TODO: remove original default value by setting it in component
			this.mapStaticSelector = this.options.staticMapSelector || '.product-map__static';
			this.mapCanvas = this.$map.find(this.mapCanvasSelector)[0];
			this.mapStatic = this.$map.find(this.mapStaticSelector)[0];
			this.$mapCanvas = $(this.mapCanvas);
			this.$mapStatic = $(this.mapStatic);
			this.infoboxHtmlTemplate = _.template($('.product-map-popup').html());
			this.popupCssClass = this.options.popupCssClass || 'product-map__infobox-container'; // TODO: remove original default value by setting it in component
			if (this.mapStatic !== undefined) {
				this.initStaticMapControls();
			} else {
				this.initDynamicMap();
				this.populateMap();
			}
		},

		mapIsExpanded: false,
		setMapExpansion: function setMapExpansion(newState) {
			this.mapIsExpanded = newState;

			this.fullScreenControl.toggleClass('product-map__fullscreen-button--expanded', newState);
			this.$mapCanvas.toggleClass('product-map__canvas--expanded', newState);
			if (this.mapIsExpanded) {
				$(document).on('keyup', this.closeOnEscape);
			} else {
				$(document).off('keyup', this.closeOnEscape);
			}

			this.center = this.map.getCenter();
			google.maps.event.trigger(this.map, 'resize');
			this.map.setCenter(this.center);
		},

		closeOnEscapeUnbound: function closeOnEscapeUnbound(e) {
			if (e.keyCode === 27) {
				// 27 is escape key
				this.setMapExpansion(false);
				e.stopImmediatePropagation();
			}
		},

		initStaticMapControls: function initStaticMapControls() {
			this.mapStatic.addEventListener('click', function (e) {
				this.$mapStatic.addClass(this.mapStaticSelector.substr(1) + '--hidden');
				this.$mapCanvas.removeClass(this.mapCanvasSelector.substr(1) + '--hidden');
				this.initDynamicMap();
				this.populateMap();
			}.bind(this));
		},

		initDynamicMap: function initDynamicMap() {
			var self = this;
			var options = {
				styles: self.styles,
				streetViewControl: false,
				scrollwheel: false, // disable mousewheel scrolling by default - later enabled once a user clicks on the map
				zoom: parseInt(self.options.zoom || 16, 10)
			};

			self.fullScreenControl = $('<div class="product-map__fullscreen-button"></div>').attr({
				title: this.translations.fullscreenTitle || 'Full screen'
			}).click(function () {
				self.setMapExpansion(!self.mapIsExpanded);
			});

			this.map = new google.maps.Map(self.mapCanvas, options);

			this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(self.fullScreenControl[0]);
			this.closeOnEscape = this.closeOnEscapeUnbound.bind(this);
			this.setMapExpansion(false);

			this.bounds = new google.maps.LatLngBounds();
			$(this.mapCanvasSelector).on('click', function () {
				self.map.setOptions({
					scrollwheel: true
				}); // enable mousewheel scrolling now the user has interated with the map
			});

			// TODO: replace this with pub/sub or similar
			$(window).on('hashchange', function () {
				self.isMapInHiddenTab();
			});
		},

		isMapInHiddenTab: function isMapInHiddenTab() {
			// when the map is behind a tab then it doesn't display correctly, to fix that trigger these events
			var self = this;

			var hash = window.location.hash;

			var isMapInsideTab;

			hash = hash.split('?')[0].substr(1); // Hash should be after query string but just in case it's not
			isMapInsideTab = hash && $('.tabs__container').find('#' + hash).has(self.mapCanvasSelector).length > 0; // dangerous use of: .tabs__container (close coupling)

			if (isMapInsideTab) {
				self.correctMapDisplay();
				self.isMapInHiddenTab = function () {}; // only need to run this function once (e.g. the first time the map is actually shown)
			}
		},

		correctMapDisplay: function correctMapDisplay(time) {
			var self = this;

			var timeoutReference;

			time = time || 200;

			timeoutReference = setTimeout(function () {
				google.maps.event.trigger(self.map, 'resize');
				if (self.markers.length > 1) {
					self.map.fitBounds(self.bounds);
				}
				clearTimeout(timeoutReference);
			}, time);
		},

		populateMap: function populateMap() {
			// TODO: refactor this function to make it follow SRP and be DRYer
			var self = this;
			var markerImage = document.querySelector('.js-product-map-marker');
			var markerImageSvg = markerImage ? markerImage.innerHTML : undefined;

			// if single hotel page
			if (this.options.label && this.options.address && this.options.lat && this.options.lon) {
				this.processItem(this.options);
			}

			// if destination map page
			if (this.options.hotels) {
				this.options.hotels.forEach(function (element) {
					self.processItem(element);
				});
			}

			// TODO: finish this:
			if (self.options.callingPoints) {
				if (markerImageSvg && document.querySelector('.luxuryTourRenderer', '.partnerTourRenderer')) {
					self.options.callingPoints.forEach(function (element) {
						element.icon = {
							anchor: new google.maps.Point(23, 37),
							url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(markerImageSvg)
						};

						self.processItem(element);
					});
				}

				this.createPath(this.positions);
			}

			if (this.markers.length > 1) {
				this.map.fitBounds(this.bounds);
				// calling this here to make sure on init that map shows when behind a tab but tab is deep-linked to, this also assumes a tour always has more than one point
				this.correctMapDisplay(1000);
			}
		},

		processItem: function processItem(item) {
			var self = this;

			var position = this.createPosition(item.lat, item.lon);

			var marker = this.createMarker(position, item);

			var popup;

			if (item.label && item.address) {
				marker.clickable = true;
				popup = this.createPopup(item);

				marker.addListener('click', function () {
					if (self.infowindow) {
						self.infowindow.close();
					}
					self.infowindow = popup;
					$.proxy(self.infowindow.open(self.map, marker));
				});
			}

			this.bounds.extend(position);

			if (this.markers.length === 1) {
				this.map.setCenter(position);
			}

			marker.setMap(this.map);
		},

		createMarker: function createMarker(position, item) {
			var iconSymbol = {
				url: '/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/img/map-pin.svg',
				scaledSize: new google.maps.Size(28, 40)
			};

			var markerConfig = {
				position: position,
				draggable: false,
				raiseOnDrag: false,
				clickable: true,
				icon: iconSymbol
			};
			var marker;

			var $body = $('body');

			if (item.icon && ($body.hasClass('luxuryTourRenderer') || $body.hasClass('partnerTourRenderer'))) {
				markerConfig.icon = item.icon;
			}

			if (item.title) {
				markerConfig.title = item.title;
			}

			marker = new google.maps.Marker(markerConfig);
			this.markers.push(marker);
			return marker;
		},

		createPosition: function createPosition(lat, lng) {
			var position;
			lat = parseFloat(lat);
			lng = parseFloat(lng);
			position = new google.maps.LatLng(lat, lng);
			this.positions.push(position);
			return position;
		},

		createPopup: function createPopup(item) {
			var htmlContent = this.processTemplate(item);

			return new InfoBox({
				content: htmlContent,
				boxClass: this.popupCssClass,
				pixelOffset: new google.maps.Size(-157, -26), // 26 because radius 11 + stroke radius 2px
				closeBoxMargin: '12px 10px 0 0',
				closeBoxURL: 'data:image/gif;charset=utf-8;base64,R0lGODlhDgANAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA0YWQ4ZjdiLTBmMjUtNDczNS1hMWUxLTcyOTQ1NGE3MDA3NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTVDNTRGMDM4RkExMUU1QUQwOThBNzhFMTRFMjAyRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTVDNTRFRjM4RkExMUU1QUQwOThBNzhFMTRFMjAyRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0YWQ4ZjdiLTBmMjUtNDczNS1hMWUxLTcyOTQ1NGE3MDA3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNGFkOGY3Yi0wZjI1LTQ3MzUtYTFlMS03Mjk0NTRhNzAwNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAAACwAAAAADgANAAACDISPqcvtD6OctNpXAAA7',
				alignBottom: true
			});
		},

		createPath: function createPath(positions) {
			var $body = $('body');
			var path = new google.maps.Polyline({
				path: positions,
				strokeColor: $body.hasClass('luxuryTourRenderer') || $body.hasClass('partnerTourRenderer') ? this.travelPurple : this.travelGreen,
				strokeOpacity: 0.8,
				strokeWeight: 1,
				clickable: false
			});

			path.setMap(this.map);
			return path;
		},

		processTemplate: function processTemplate(item) {
			var _templateData = {
				'title': item.label,
				'content': item.address,
				'url': item.url
			};
			return this.infoboxHtmlTemplate(_templateData);
		}
	};

	$.fn.telegraph_product_map = function () {
		$maps = $('.js-product-map');
		$maps.each(function () {
			var $this = $(this);

			var dataOptions;

			var options;

			var dataTranslations;

			var translations;

			var map;

			var infoBoxSrc;

			var hotelsJsonUrl;

			var infoBoxDependancy = $.Deferred();

			var dataDependancy = $.Deferred();

			var $component;

			var $tourCallingPoints = $('.travelCallingPoint');

			if (!$this.data('telegraph_product_map')) {
				$component = $this.find('.js-component-content');
				dataTranslations = $component.data('translations');
				translations = typeof dataTranslations === 'string' ? $.parseJSON(dataTranslations.replace(/'/g, '"')) : dataTranslations || {};
				dataOptions = $component.data('options');
				options = typeof dataOptions === 'string' ? $.parseJSON(dataOptions.replace(/'/g, '"')) : dataOptions || {};
				map = new Map($this, options, translations);
				infoBoxSrc = '/etc/designs/telegraph/core/clientlibs/tmgchannels/travel/libs/infobox-v1.1.13.min.js';
				hotelsJsonUrl = $component.data('product-url');
				$this.data('telegraph_product_map', map);
			}

			if ($tourCallingPoints.length > 0) {
				options.callingPoints = [];
				$tourCallingPoints.each(function (item, index) {
					var $item = $(this);
					var $point = $item.find('[data-product-long]');
					var lon = $point.attr('data-product-long');
					var lat = $point.attr('data-product-lat');
					var itemTitle = $item.find('[itemprop="name"]').text();
					if (lat && lon) {
						options.callingPoints.push({
							'lat': lat,
							'lon': lon,
							'htmlContent': '',
							title: itemTitle
						});
					}
				});
			}

			if (hotelsJsonUrl) {
				$.getJSON(hotelsJsonUrl, function (hotelsJsonResponse) {
					options.hotels = hotelsJsonResponse;
					dataDependancy.resolve();
				});
			} else {
				dataDependancy.resolve();
			}

			yepnope({
				// See http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html for infobox docs - it must be loaded AFTER gmaps API (via window.clientlibs)
				load: infoBoxSrc,
				complete: function complete() {
					infoBoxDependancy.resolve();
				}
			});

			$.when(dataDependancy, infoBoxDependancy).done(function () {
				map.init();
			});
		});
	};
})(tmgJQ, window, document, _);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* API gallery component */
(function ($, window, document, Hammer) {
	'use strict';

	var init;

	var telegraph_product_image_gallery = function telegraph_product_image_gallery(context, options) {
		this.$openButton = $(context);
		this.options = options;
	};

	telegraph_product_image_gallery.prototype = {
		defaults: {
			imageWidth: 170,
			animDuration: 600,
			startImageIndex: 0,
			infiniteLoop: true,
			activeClass: 'is-active',

			selectors: {
				mainImageClass: '.product-gallery__main-image',
				overlayClass: '.tmg-modal-overlay',
				backdropClass: '.tmg-modal-backdrop',
				overlayWrapper: '.product-gallery__wrapper',
				galleryContainer: '.product-gallery__container',
				gallery: '.tmg-modal-overlay .product-gallery',
				thumbnailBar: '.product-gallery__thumbnails-bar',
				thumbnailLink: '.js-product-gallery__thumbnail',
				thumbnailContainer: '.product-gallery__thumbnails-container',
				thumbnail: '.product-gallery__thumbnail',
				activeThumbnail: '.is-active',
				navContainer: '.product-gallery__nav',
				prevLink: '.js-product-gallery-prev',
				nextLink: '.js-product-gallery-next',

				totalCount: '.js-product-gallery-total',
				captionText: '.js-product-gallery-caption',
				currentText: '.js-product-gallery-current'
			}
		},

		currentImageIndex: null,
		startingLeftPosCSS: 0,
		totalImagesWidth: 0,

		$galleryElement: null,
		$thumbBar: null,

		init: function init() {
			this.options = $.extend({}, this.defaults, this.options);
			this.selectors = this.options.selectors;
			this.findDomElements();
			this.attachEvents();
			this.$galleryElementContainer.hide();

			return this;
		},

		findDomElements: function findDomElements() {
			this.$galleryElementContainer = $(this.selectors.galleryContainer);
		},

		attachEvents: function attachEvents() {
			// Attach gallery launch click
			this.$openButton.on('click', $.proxy(this.openModal, this));
		},

		initModal: function initModal() {
			var currentThumb;
			this.findModalDomElements();
			this.attachModalEvents();

			// Focus on modal overlay
			this.$galleryElement.focus();
			// When we opened the modal, we set all the background content to aria-hidden=true, so we need to set the modal content to show now
			$(this.selectors.overlayClass).attr('aria-hidden', false);

			this.totalImagesWidth = this.getTotalWidth();

			// total number of images
			this.setTotalImages();

			// The image you want to be highlighted first
			this.startImageIndex = this.options.startImageIndex;

			this.displayNav();

			// Loop around to the beginning again when you get to the end.
			this.infiniteLoop = this.getInfiniteLoop();
			if (this.infiniteLoop) {
				this.setupInfiniteLoop();
			}

			// Set the first image
			this.currentImageIndex = this.startImageIndex;

			currentThumb = this.$thumbBar.find('.is-active');

			// for infinite loops
			if (this.infiniteLoop) {
				currentThumb.removeClass('is-active');
				currentThumb.removeAttr('aria-labels');
				this.$currentThumbnail = $(currentThumb[2]);
			} else {
				// for finite loops
				this.$currentThumbnail = $(currentThumb[0]);
			}

			this.setActive(this.$currentThumbnail);

			// Accessibility
			this.setAriaHidden();

			// Set the initial text
			this.setTotalText();
			this.setCountText(this.currentImageIndex);
		},

		findModalDomElements: function findModalDomElements() {
			this.$galleryElement = $(this.selectors.gallery);
			this.$thumbBar = this.$galleryElement.find(this.selectors.thumbnailBar);
		},

		attachModalEvents: function attachModalEvents() {
			var $doc = $(document);

			var prevLink = this.selectors.prevLink;

			var nextLink = this.selectors.nextLink;

			var navLinks = prevLink + ', ' + nextLink;

			var $image = $(this.selectors.mainImageClass);
			// Attach thumbnail
			$doc.on('click', this.selectors.thumbnailLink, $.proxy(this.onClickThumb, this));

			// Attach nav arrows
			$doc.on('click', navLinks, $.proxy(this.onClickNav, this));

			// swiperight is from left to right so equivalent to clicking 'previous'
			$image.hammer({}).bind('swiperight', function (event) {
				tmgJQ(prevLink).click();
			});

			// swiperleft is from right to left so equivalent to clicking 'next'
			$image.hammer({}).bind('swipeleft', function (event) {
				tmgJQ(nextLink).click();
			});
		},

		getTotalWidth: function getTotalWidth() {
			var images = this.$thumbBar.find('li');

			var totalImagesWidth = 0;
			for (var i = 0; i < images.length; i++) {
				totalImagesWidth += $(images[i]).outerWidth(true);
			}
			return totalImagesWidth;
		},

		// Set the total number of images for this gallery
		setTotalImages: function setTotalImages() {
			this.totalImages = this.$thumbBar.find('li').length;
		},

		// Hide the nav buttons if there is only one image
		displayNav: function displayNav() {
			if (this.$thumbBar.find('li').length === 1) {
				$(this.selectors.navContainer).hide();
			}
		},

		// Only loop if we have too many images to fit in the thumbnail bar
		getInfiniteLoop: function getInfiniteLoop() {
			var $container = $(this.selectors.thumbnailContainer);

			var infiniteLoop;

			if (this.totalImagesWidth > $container.outerWidth(true)) {
				infiniteLoop = true;
			} else {
				$container.addClass('is-finite');
				infiniteLoop = false;
			}
			return infiniteLoop;
		},

		// Set up the infinite scrolling for the thumbnail bar
		setupInfiniteLoop: function setupInfiniteLoop() {
			var $first = this.$thumbBar.find('li:first');

			var $last = this.$thumbBar.find('li:last');

			var $container = this.$thumbBar.closest(this.selectors.thumbnailContainer);

			var center = $container.outerWidth(true) / 2;

			var startingLeftPos = 0;

			var currentThumbnail;

			// clone the list items either side of visible bar
			// Similar to http://output.jsbin.com/ufoceq/8/
			$first.before(this.$thumbBar.children().clone(true));
			$last.after(this.$thumbBar.children().clone(true));

			// Set initial left starting position to get "1" (first image) centered in slider, and to slide back to the original position when going around the loop:

			// move left 2x cloned lists
			startingLeftPos = this.totalImagesWidth * 2; // 2 cloned lists in

			// move right so the left of the image is exactly centered within the thumbnail bar
			startingLeftPos -= center;

			// then move back by half the width of the image to center it
			startingLeftPos += $first.width() / 2;

			this.startingLeftPosCSS = '-' + startingLeftPos + 'px';
			this.$thumbBar.css('left', this.startingLeftPosCSS);
		},

		// Set up the aria-hidden roles now the JS has hidden the thumbnails
		setAriaHidden: function setAriaHidden() {
			var ariaHidden;
			this.$thumbBar.find('li').each(function (index, thumbnailLi) {
				// Only the first five should ever be on screen
				ariaHidden = index > 4;
				$(thumbnailLi).attr('aria-hidden', ariaHidden);
			});
		},

		// Swap the aria-labelled-by and aria-labels when a new thumbnail is selected
		setAriaLabelledBy: function setAriaLabelledBy($clickedThumbnail) {
			var imgClass = this.selectors.mainImageClass;

			var $img = this.$galleryElement.find(imgClass);
			$img.attr('aria-labelledby', $clickedThumbnail.attr('id'));
			$clickedThumbnail.attr('aria-labels', imgClass);
		},

		// Update the "total" image counter
		setTotalText: function setTotalText() {
			var $total = this.$galleryElement.find(this.selectors.totalCount);
			$total.text(this.totalImages);
		},

		// Thumbnail image click handler
		onClickThumb: function onClickThumb(e) {
			// If we're still dealing with the last click, don't accept a new one
			if (this.scrolling) return;

			var $clickedThumbnail = $(e.currentTarget).find('img');

			var $parent = $clickedThumbnail.closest('li');

			var clickedIndex = $parent.data('thumbnail-index');

			var delta = clickedIndex - this.currentImageIndex;

			if (delta === this.totalImages - 1) {
				delta = -1;
			}
			if (delta === this.totalImages - 2) {
				delta = -2;
			}
			if (delta === this.totalImages - 3) {
				delta = -3;
			}
			if (delta === -Math.abs(this.totalImages - 1)) {
				delta = 1;
			}
			if (delta === -Math.abs(this.totalImages - 2)) {
				delta = 2;
			}
			if (delta === -Math.abs(this.totalImages - 3)) {
				delta = 3;
			}

			this.handleImageSwap($clickedThumbnail[0], delta);
		},

		// Retrieve the correct thumbnail image to send off to be swapped
		onClickNav: function onClickNav(e) {
			// If we're still dealing with the last click, don't accept a new one
			if (this.scrolling) return;

			var direction = this.getNavDirection($(e.currentTarget));

			var newImageIndex;

			var $thumbnail;

			var $newThumbnail;

			newImageIndex = this.getNewImageIndex(direction);
			$newThumbnail = this.getNewThumbnail(newImageIndex);

			if (this.infiniteLoop) {
				if (direction == 1) {
					$thumbnail = $newThumbnail[2];
				} else {
					$thumbnail = $newThumbnail[1];
				}
			} else {
				$thumbnail = $newThumbnail;
			}

			this.handleImageSwap($thumbnail, direction);
			if ((typeof _satellite === 'undefined' ? 'undefined' : _typeof(_satellite)) === 'object' && typeof _satellite.track === 'function') {
				_satellite.track('customPageLoad');
			}
		},

		// Account for looping around when using nav arrows
		getNewImageIndex: function getNewImageIndex(direction) {
			var newImageIndex;

			var current = this.currentImageIndex;

			var loopAtStart = current === 0 && direction === -1;

			var loopAtEnd = current === this.totalImages && direction === 1;

			if (loopAtStart) {
				newImageIndex = this.totalImages - 1;
			} else if (loopAtEnd) {
				newImageIndex = 1;
			} else {
				newImageIndex = current + direction;
			}
			if (newImageIndex === this.totalImages) {
				newImageIndex = 0;
			}
			return newImageIndex;
		},

		// Get the new thumnbail image to swap (to get it's src-array for lazy loading)
		getNewThumbnail: function getNewThumbnail(thumbnailIndex) {
			var $thumbnailsBar = this.$thumbBar;

			var newThumbnailLi = this.getThumbnailAtIndex($thumbnailsBar, thumbnailIndex);
			return newThumbnailLi.find('img');
		},

		// Work out if we want to move next or previous in the thumbnail bar
		getNavDirection: function getNavDirection($clickedNavElement) {
			return $clickedNavElement.data('delta');
		},

		// Handle the image change
		handleImageSwap: function handleImageSwap(clickedThumbnail, delta) {
			var $clickedThumbnail = $(clickedThumbnail);

			var $clickedThumbnailItem = $clickedThumbnail.closest('li');

			var clickedIndex = $clickedThumbnailItem.data('thumbnail-index');

			if (this.infiniteLoop) {
				this.addInfiniteImage(delta, $clickedThumbnailItem);
			}

			this.setActive($clickedThumbnailItem);
			this.setImage($clickedThumbnail, $clickedThumbnailItem);

			this.setCountText(clickedIndex);
			this.setCaption(clickedIndex);

			this.setAriaHidden();
			this.setAriaLabelledBy($clickedThumbnailItem);

			this.setCurrentImageIndex(clickedIndex);
		},

		// Swap the src & renditions from thumbnail to main image
		setImage: function setImage($clickedThumbnail, $clickedThumbnailItem) {
			var clickedThumbnailSrcs = $clickedThumbnail.data('frz-src-array');

			var $oldMainImage = this.$galleryElement.find('.product-gallery__main-image img');

			var $newMainImage;
			$oldMainImage.data('frz-src-array', clickedThumbnailSrcs);
			$oldMainImage.attr('src', $clickedThumbnail.attr('src'));
			$newMainImage = $oldMainImage;
			$newMainImage.data('lazyLoaded', false);
		},

		// Update current image in gallery
		setCurrentImageIndex: function setCurrentImageIndex(index) {
			this.currentImageIndex = index;
		},

		// Update active indicator stripe over selected thumbnail
		setActive: function setActive($clickedThumbnailItem) {
			var activeClass = this.options.activeClass;

			var activeThumb = this.$currentThumbnail;

			var previous = this.getThumbnailAtIndex(this.$thumbBar, this.$currentThumbnail.data('thumbnail-index'));

			var current;

			// Remove the active aria-label attribute
			this.$currentThumbnail.removeAttr('aria-labels');

			// Handle the active indicator
			previous.each(function (i, thumb) {
				$(thumb).removeClass('is-active');
			});

			this.$currentThumbnail = $clickedThumbnailItem;
			current = this.getThumbnailAtIndex(this.$thumbBar, $clickedThumbnailItem.data('thumbnail-index'));
			current.each(function (i, thumb) {
				$(thumb).addClass('is-active');
			});
		},

		// Update the caption text
		setCaption: function setCaption(index) {
			var newDefaultCaption = '';

			var $newThumb = this.getThumbnailAtIndex(this.$thumbBar, index);

			var newText = $newThumb.find('img').data('caption');
			// Swap the new caption in from the new image
			if (typeof newText === 'undefined') {
				newText = newDefaultCaption;
			}
			$(this.selectors.captionText).first().text(newText);
		},

		// Remove the first/last thumbnail and pop it on the other end in the direction of travel - see http://output.jsbin.com/ufoceq/8/
		addInfiniteImage: function addInfiniteImage(delta, $clickedThumbnail) {
			if (this.$thumbBar.is(':animated')) return;

			var _this = this;

			var gallery = this.$thumbBar;

			var $active = $clickedThumbnail;

			var $container = gallery.closest(this.selectors.thumbnailContainer);

			var items = gallery.find('li');

			var len = this.totalImages;

			var current = null;

			var imageWidth = this.options.imageWidth;
			// TODO gotta go - work it out from current and previous

			var animDuration = this.options.animDuration;

			var left;

			var cycle = false;

			var targetImgWidth = $($active).outerWidth(true);

			var currentImgWidth = $($active).prev().outerWidth(true);

			var imgDelta = targetImgWidth / 2 + currentImgWidth / 2;

			var direction;

			var animateLeft;

			var animateLeftCSS;

			if (delta > 0) {
				direction = 1;
			} else {
				direction = -1;
			}

			animateLeft = -Math.abs(imgDelta) * delta, animateLeftCSS = '+=' + -Math.abs(animateLeft) * direction;

			this.scrolling = true;

			if (this.currentImageIndex === this.totalImages) {
				current = 0;
			} else {
				current = this.currentImageIndex + 1;
			}

			gallery.animate({
				left: animateLeftCSS
			}, animDuration, function () {
				current += delta;
				/**
                * See http://output.jsbin.com/ufoceq/8/
                * We reset the left position to where it started before we run
                * out of cloned list items
                */
				cycle = !!(current === 0 || current > len);

				if (cycle) {
					/* we switched from image 1 to n-cloned or
                    from image n to 1-cloned */
					this.currentImageIndex = current === 0 ? len - 1 : 1;

					// TODO delta could be -2, -1, 1, 2 (if clicking a thumb out of order)
					if (delta === 1) {
						left = _this.startingLeftPosCSS;
					} else {
						left = parseInt(_this.startingLeftPosCSS, 10) + imageWidth;
					}

					gallery.css({
						'left': left
					});
				}
				_this.scrolling = false;
			});
		},

		// Get a thumbnail of specific index
		getThumbnailAtIndex: function getThumbnailAtIndex($thumbnailsBar, index) {
			var $newThumbLi = $thumbnailsBar.find("li[data-thumbnail-index='" + index + "']");
			return $newThumbLi;
		},

		// Update the image counter text
		setCountText: function setCountText(index) {
			$(this.selectors.currentText).text(index + 1);
		},

		openModal: function openModal() {
			var _this = this;
			_this.$galleryElementContainer.modal('open', {
				templateBeforeCallback: function templateBeforeCallback(e) {
					/** In this context this relates to the modal **/

					// This could come from anywhere
					// All DOM manipulation must happen before it gets pulled into the modal
					var $overlay = $(_this.selectors.overlayWrapper);

					var overlayContent = $overlay.html();
					this.config.content = overlayContent;
					this.config.fadeSpeed = 'fast';

					// Hide the background contents
					$('.container, .container-fluid').hide()
					// accessibility - hide and remove from tab order
					.attr('aria-hidden', true).attr('tabindex', '-1');
					$('#imageGallery').hide();
				},
				closeAfterCallback: function closeAfterCallback(e) {
					// Show the background contents
					$('.container, .container-fluid').show()
					// accessibility - show and put back in tab order
					.attr('aria-hidden', false).attr('tabindex', '0');
					$('#imageGallery').show();

					// Focus back on the link we opened the modal from
					_this.$openButton.focus();
				}
			});
			this.initModal();

			if ((typeof _satellite === 'undefined' ? 'undefined' : _typeof(_satellite)) === 'object' && typeof _satellite.track === 'function') {
				_satellite.track('customPageLoad');
			}
		}
	};

	$.fn.telegraph_product_image_gallery = function (options) {
		return this.each(function () {
			if (!$.data(this, 'telegraph_product_image_gallery')) {
				$.data(this, 'telegraph_product_image_gallery', new telegraph_product_image_gallery(this, options).init());
			}
		});
	};

	init = function init() {
		$('.js-product-gallery-launch').each(function () {
			var $this = $(this);
			$this.telegraph_product_image_gallery($this.data('options') ? $.parseJSON($this.data('options').replace(/'/g, '"')) : {});
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document, Hammer);
/* section navigation  */
;(function ($) {
	'use strict';

	$.extend($.fn, {
		telegraph_sectionNavigation: function telegraph_sectionNavigation(i, el, ops) {
			var base = this;

			var domElements = {};

			var defaults = {
				resizeDelay: 100,
				closeOnExernalClick: true,
				foldedMenuClass: 'has-folded-items',
				foldedItemClass: 'is-folded',
				activeClass: 'is-active',
				hasFoldedItemLabel: 'hasFoldedItem',
				isActiveLabel: 'isActive',
				clicked: 0,
				keyCode: { // TODO; update to $.ui.keyCode if/when we use jQuery.UI
					ESCAPE: 27,
					ENTER: 13
				},
				debug: function () {
					var debug = false;
					try {
						debug = !!(window.location.search.indexOf('debug') > -1 && window.console);
					} catch (e) {}
					return debug;
				}()
			};

			var options = $.extend(defaults, ops);

			options.index = i;

			// Access to jQuery and DOM versions of element
			base.$el = $(el);
			base.el = el;

			// If already exist return it
			if (base.$el.data('tmg.sectionNavigation')) {
				return base.$el.data('tmg.sectionNavigation');
			}

			// Init function
			base.init = function () {
				base.$el.data(options.isActiveLabel, false);
				base.findDomElements();
				base.attachEvents();
				base.updatePopupNavigation();
				return base;
			};
			base.findDomElements = function () {
				domElements.$main = base.$el.find('.js-section-navigation-main-container');
				domElements.$mainItems = domElements.$main.find('.js-section-navigation-main-item'); // search in domElements.$mainItems instead .$el it will be a bit faster
				domElements.$control = base.$el.find('.js-section-navigation-popup-control');
				domElements.$popup = base.$el.find('.js-section-navigation-popup-container');
				domElements.$popupItems = domElements.$popup.find('.js-section-navigation-popup-item'); // search in domElements.$popup instead .$el it will be a bit faster
			};
			base.showPopupControl = function () {
				if (base.$el.data(options.hasFoldedItemLabel)) {
					domElements.$main.addClass(options.foldedMenuClass);
					domElements.$control.addClass(options.foldedMenuClass);
				} else {
					domElements.$main.removeClass(options.foldedMenuClass);
					domElements.$control.removeClass(options.foldedMenuClass);
					base.closePopupMenu();
				}
			};
			base.checkFoldedItemStatus = function (index, el) {
				if ($(el).position().top === 0) {
					$(domElements.$popupItems.get(index)).removeClass(options.foldedItemClass);
					base.log('Menu element ' + index + ' is visible ');
				} else {
					base.log('Menu element ' + index + ' is folded ');
					base.$el.data(options.hasFoldedItemLabel, true);
					$(domElements.$popupItems.get(index)).addClass(options.foldedItemClass);
				}
			};
			base.updatePopupNavigation = function () {
				// update the navigation state, even if it's closed
				base.$el.data(options.hasFoldedItemLabel, false);
				domElements.$mainItems.each(function (index, el) {
					base.checkFoldedItemStatus(index, el);
				});
				base.showPopupControl();
			};
			base.togglePopupMenu = function () {
				if (base.$el.data(options.isActiveLabel)) {
					base.closePopupMenu();
				} else {
					base.openPopupMenu();
					if (options.debug) {
						options.clicked++;
						base.log('Menu ' + options.index + '; was opened ' + options.clicked + ' times');
					}
				}
			};
			base.log = function (m) {
				if (options.debug) {
					window.console.log(m);
				}
			};
			base.openPopupMenu = function () {
				domElements.$control.addClass(options.activeClass);
				domElements.$popup.addClass(options.activeClass);
				base.$el.data(options.isActiveLabel, true);
				$(document).bind('keyup', base.onEsc);
			};
			base.closePopupMenu = function () {
				domElements.$control.removeClass(options.activeClass);
				domElements.$popup.removeClass(options.activeClass);
				base.$el.data(options.isActiveLabel, false);
				$(document).unbind('keyup', base.onEsc);
			};
			base.onEsc = function (e) {
				// TODO consider http://api.jqueryui.com/jQuery.ui.keyCode/ library in global scope to make it more readable
				// TODO 2 what about event propagation? Do you allow for other "esc" events to happen?
				if (e.keyCode === options.keyCode.ESCAPE) {
					base.closePopupMenu();
				}
			};
			base.attachEvents = function () {
				// attach resize handeler to the window
				$(window).resize(function () {
					clearTimeout($.data(base.$el, 'resizeTimer'));
					$.data(base.$el, 'resizeTimer', setTimeout(function () {
						base.updatePopupNavigation();
					}, options.resizeDelay));
				});
				// attach popup navigation toggle
				domElements.$control.on('click', function (e) {
					if (options.closeOnExernalClick) {
						e.stopPropagation();
					}
					base.togglePopupMenu();
				});
				domElements.$control.bind('keypress', function (e) {
					if (e.keyCode === options.keyCode.ENTER) {
						base.togglePopupMenu();
					}
				});
				if (options.closeOnExernalClick) {
					$(document).click(function () {
						base.closePopupMenu();
					});
				}
			};

			// Add a reverse reference to the DOM object
			base.$el.data('tmg.sectionNavigation', base);
			return base.init();
		}
	});

	var init = function init() {
		$('.section-navigation').each(function (index, el) {
			var $el = $(el);var options;

			// initiate once
			if (!$.data(el, 'telegraph_sectionNavigation')) {
				options = $el.data('options') ? $.parseJSON($el.data('options').replace(/'/g, '"')) : {};
				$.data(el, 'telegraph_sectionNavigation', $el.telegraph_sectionNavigation(index, el, options));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(window.tmgJQ);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'Segment';

	var Segment = function Segment(context, options) {
		this.$context = $(context);
		if (!this.$context.hasClass('initialized')) {
			this.init(options);
		}
	};

	Segment.prototype = {
		defaults: function () {
			var selectorComponent = '.segment-container';
			return {
				selectorSwitchButton: selectorComponent + '__switch-button',
				selectorItemsWitSublist: selectorComponent + '__navigation-list-item--has-sublist',
				selectorNavigation: selectorComponent + '__navigation',
				selectorContent: selectorComponent + '__content'
			};
		}(),

		init: function init(options) {
			this.findDomElements();

			this.$switchButton.on('click', $.proxy(this.toggleContentClick, this));

			this.$itemsWitSublist.on('click', $.proxy(this.toggleSublistClick, this));

			this.$context.addClass('initialized');

			this.isMobile = $('html').hasClass('ua-mobile');
		},

		findDomElements: function findDomElements() {
			this.$switchButton = this.$context.find(this.defaults.selectorSwitchButton);
			this.$itemsWitSublist = this.$context.find(this.defaults.selectorItemsWitSublist);
			this.$navigation = this.$context.find(this.defaults.selectorNavigation);
			this.$content = this.$context.find(this.defaults.selectorContent);
		},

		toggleContentClick: function toggleContentClick(e) {
			var $button = $(e.currentTarget);

			var text = $.trim($button.text());

			var attr = this.$content.attr('aria-hidden') === 'true' ? 'false' : 'true';

			e.preventDefault();

			$button.text(text === 'Hide' ? 'Show' : 'Hide');

			// If there is sublist open - close it also.
			if (text === 'Hide') {
				this.hideSublists();
			}

			this.$content.attr('aria-hidden', attr);
			this.$content.slideToggle(this.isMobile ? 0 : 300);
		},

		toggleSublistClick: function toggleSublistClick(e) {
			var $list = $(e.currentTarget);

			var $subList = $list.children('ul');

			var $button = $list.children('a');

			var attr = $subList.attr('aria-hidden') === 'true' ? 'false' : 'true';
			// If clicked on second level item - don't toogle and let link work properly
			if ($(e.target.parentElement)[0] != $(e.currentTarget)[0]) {
				return true;
			}
			e.preventDefault();
			// If clicked on the same element - toggle it.
			if (this.$itemsWitSublist.filter('.revealed')[0] === $list[0]) {
				$list.toggleClass('revealed');
				$subList.attr('aria-hidden', attr);
				this.toggleSublist($subList);
				// Else if there is already sublist revealed, then hide it and show new one
			} else if (this.$itemsWitSublist.filter('.revealed').length) {
				var self = this;
				this.hideSublists(function () {
					$list.toggleClass('revealed');
					$subList.attr('aria-hidden', attr);
					self.toggleSublist($subList);
				});
				// Else (there is no list revealed) show proper list
			} else {
				$list.toggleClass('revealed');
				$subList.attr('aria-hidden', attr);
				this.toggleSublist($subList);
			}
		},

		toggleSublist: function toggleSublist($subList) {
			if (this.isMobile) {
				$subList.slideToggle(0);
				this.$navigation.css('margin-bottom', $subList[0].clientHeight + 10);
			} else {
				$subList.slideToggle(300);
			}
		},

		hideSublists: function hideSublists(callback) {
			if (this.isMobile) {
				this.$navigation.css('margin-bottom', '');
			}
			this.$itemsWitSublist.filter('.revealed') // Get only items with revealed sublist
			.removeClass('revealed') // Clear class
			.children('ul') // Get sublist
			.attr('aria-hidden', 'true') // Hide sublist
			.slideUp(this.isMobile ? 0 : 300, function () {
				// Slide up sublist
				if (typeof callback === 'function') {
					callback(this);
				}
			});
		}
	};

	init = function init() {
		if (!tmg.components) {
			tmg.components = {};
		}
		tmg.components.Segment = {};

		tmg.components.Segment.init = function () {
			$('.segment-container.component').each(function () {
				// initiate once
				if (!$.data(this, pluginName)) {
					$.data(this, pluginName, new Segment(this));
				}
			});
			return this;
		};

		tmg.components.Segment.init();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
// Extreamly simple patter for creating jQuery functionality for compnents, based on http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/

// http://developers.gigya.com/020_Client_API/010_Socialize/socialize.showShareBarUI

// http://developers.gigya.com/020_Client_API/010_Socialize/socialize.showFollowBarUI
// socialize.showFollowBarUI

;(function ($) {
	'use strict';

	var init;

	var Social = function Social(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;

		this.domElements = {};
	};

	Social.prototype = {
		defaults: {
			shareButtons: [{
				provider: 'facebook',
				tooltip: 'Share on Facebook',
				iconOnly: true
			}, {
				provider: 'twitter',
				tooltip: 'Tweet this page',
				iconOnly: true
			}, {
				provider: 'linkedin',
				tooltip: 'Share on LinkedIn',
				iconOnly: true
			}, {
				provider: 'print',
				tooltip: 'Print this page'
			}, {
				provider: 'email',
				tooltip: 'Share via email'
			}],
			layout: 'vertical',
			showCounts: 'top',
			noButtonBorders: true

		},

		init: function init() {
			this.options = $.extend({}, this.defaults, this.options);

			this.id = 'js-social-' + Math.uuidFast();

			this.findDomElements();
			this.updateDomElements();
			this.initExternalScripts();

			return this;
		},

		findDomElements: function findDomElements() {
			this.domElements.$content = this.$elem.find('.js-content');
		},

		updateDomElements: function updateDomElements() {
			this.domElements.$content.attr('id', this.id);
		},

		initExternalScripts: function initExternalScripts() {
			var act = new gigya.socialize.UserAction();
			var gigyaParams = $.extend({}, this.options, {
				containerID: this.id,
				userAction: act
			});

			gigya.socialize.showShareBarUI(gigyaParams);
		}
	};

	Social.defaults = Social.prototype.defaults;

	$.fn.telegraph_social = function (options) {
		return this.each(function () {
			if (!$.data(this, 'telegraph_social')) {
				$.data(this, 'telegraph_social', new Social(this, options).init());
			} else {
				return $.data(this, 'telegraph_social');
			}
		});
	};

	// TODO: Defer calling this function, move it in general scope or create some global resolver (require.js, or any custom)
	init = function init() {
		var $socialComponents = $('.js-social');

		// TODO use better script loader with dependency resolver, like YepNope
		if ($socialComponents.length) {
			$.ajax({
				url: '//cdn.gigya.com/js/socialize.js?apiKey=2_ASmwJuFXoCCY8YP8uB6mzZphj_UToZbQkeeM6bMOA8swtMk2P3Rwu2WSger_DOSt',
				dataType: 'script',
				cache: true, // otherwise will get fresh copy every page load
				context: this,
				success: function success() {
					$socialComponents.each(function () {
						var $this = $(this);
						$this.telegraph_social($this.data('options') ? $.parseJSON($this.data('options').replace(/'/g, '"')) : {});
					});
				}
			});
		}
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function ($, window, document) {
	'use strict';

	var pluginName = 'SocialShareING';
	var defaults = {
		minCounterTotal: 1
	};

	// tracking constants
	var TRACKING_PARAMS = {
		facebook: '?WT.mc_id=tmg_share_fb',
		twitter: '?WT.mc_id=tmg_share_tw',
		pinterest: '?WT.mc_id=tmg_share_pi',
		whatsapp: '?WT.mc_id=tmg_share_wa',
		linkedin: '?WT.mc_id=tmg_share_li',
		email: '?WT.mc_id=tmg_share_em'
	};

	// Social Share
	function SocialShare(element, options) {
		this.element = element;
		this.$element = $(element);
		this.$buttons = this.$element.find('[data-social-share-button]');
		this.$counter = this.$element.find('.social-share__counter');
		this.$counterValue = this.$element.find('.social-share__counter-value');

		// Settings
		this.settings = $.extend({}, defaults, options);
		this.defaults = defaults;
		this.name = pluginName;
	}

	SocialShare.prototype.init = function () {
		this.initButtons();
		if (this.$counter.length) {
			this.initCounter(this.$counter);
		}
	};

	SocialShare.prototype.initButtons = function () {
		var _this = this;

		this.$buttons.each(function (i, button) {
			var $button = $(button);
			var network = $button.data('social-share-button');
			$button.on('click', function (event) {
				event.preventDefault();
				_this.platforms[network].openPopup(_this.getData(network));
				_this.trackClickEvent(network);
			});
		});
	};

	SocialShare.prototype.initCounter = function ($counter) {
		var _this2 = this;

		var requests = [];
		$.each(this.settings.shareButtons, function (network, options) {
			if (options.networkEnable) {
				requests.push(_this2.platforms[network].fetchCount(_this2.getData(network)));
			}
		});

		$.when.apply($, requests).then(function () {
			for (var _len = arguments.length, counts = Array(_len), _key = 0; _key < _len; _key++) {
				counts[_key] = arguments[_key];
			}

			var total = counts.reduce(function (a, b) {
				return a + b;
			}, 0);
			if (total >= _this2.settings.minCounterTotal) {
				_this2.$counterValue.text(total);
				_this2.$counter.addClass('is-visible');
			}
		});
	};

	SocialShare.prototype.getData = function (network) {
		function getPathFromUrl(url) {
			return url.split(/[?#]/)[0];
		}

		function getMeta(attr, value) {
			return $('meta[' + attr + '="' + value + '"]', 'head').attr('content');
		}

		var networkSettings = this.settings.shareButtons[network];
		var url = getPathFromUrl(getMeta('property', 'og:url') || document.URL);
		var trackedUrl = url + TRACKING_PARAMS[network];
		var title = getMeta('name', 'twitter:title') || getMeta('property', 'og:title') || document.title;
		var image = getMeta('property', 'og:image') || $('body').find('img:first').attr('src');
		var description = getMeta('property', 'og:description') || getMeta('name', 'description');
		var via = networkSettings.account;
		var appId = window.tmgFacebookAppId;

		return {
			url: url,
			trackedUrl: trackedUrl,
			title: title,
			image: image,
			description: description,
			via: via,
			appId: appId
		};
	};

	SocialShare.prototype.trackClickEvent = function (provider) {
		if ((typeof _satelite === 'undefined' ? 'undefined' : _typeof(_satelite)) === 'object') {
			_satellite.setVar('shareprovider', provider);
			_satellite.track('share');
		}
	};

	SocialShare.prototype.platforms = {
		email: {
			openPopup: function openPopup(options) {
				var trackedUrl = options.trackedUrl,
				    title = options.title;

				location.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(trackedUrl);
			},
			fetchCount: function fetchCount() {
				return 0;
			}
		},

		facebook: {
			openPopup: function openPopup(options) {
				var trackedUrl = options.trackedUrl,
				    appId = options.appId;

				var targetUrl = 'https://www.facebook.com/dialog/feed?link=' + encodeURIComponent(trackedUrl) + '&app_id=' + appId;
				window.open(targetUrl, 'facebook', 'toolbar=0,status=0,width=900,height=500');
			},
			fetchCount: function fetchCount(options) {
				var targetUrl = 'https://graph.facebook.com/?id=' + encodeURIComponent(options.url);
				var dfd = $.Deferred();
				$.ajax(targetUrl).done(function (response) {
					var count = response.share ? response.share.share_count : 0;
					dfd.resolve(count);
				}).fail(function () {
					dfd.resolve(0);
				});
				return dfd.promise();
			}
		},

		linkedin: {
			openPopup: function openPopup(options) {
				var trackedUrl = options.trackedUrl,
				    title = options.title,
				    description = options.description;

				var targetUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(trackedUrl) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description);
				window.open(targetUrl, 'linkedin', 'toolbar=0,status=0,width=900,height=500');
			},
			fetchCount: function fetchCount(options) {
				var targetUrl = 'https://www.linkedin.com/countserv/count/share?url=' + encodeURIComponent(options.url) + '&format=json';
				var dfd = $.Deferred();
				$.ajax(targetUrl).done(function (response) {
					var count = response.count || 0;
					dfd.resolve(count);
				}).fail(function () {
					dfd.resolve(0);
				});
				return dfd.promise();
			}
		},

		pinterest: {
			openPopup: function openPopup(options) {
				var trackedUrl = options.trackedUrl,
				    image = options.image,
				    description = options.description;

				var targetUrl = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(trackedUrl) + '&media=' + encodeURIComponent(image) + '&description=' + encodeURIComponent(description);
				window.open(targetUrl, 'pinterest', 'toolbar=0,status=0,width=765,height=657');
			},
			fetchCount: function fetchCount(options) {
				var targetUrl = 'https://api.pinterest.com/v1/urls/count.json?url=' + encodeURIComponent(options.url);
				var dfd = $.Deferred();
				$.ajax(targetUrl).done(function (response) {
					var count = response.count || 0;
					dfd.resolve(count);
				}).fail(function () {
					dfd.resolve(0);
				});
				return dfd.promise();
			}
		},

		twitter: {
			openPopup: function openPopup(options) {
				var trackedUrl = options.trackedUrl,
				    title = options.title,
				    via = options.via;

				var viaParam = via ? '&via=' + via : '';
				var targetUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(trackedUrl) + '&text=' + encodeURIComponent(title) + viaParam;
				window.open(targetUrl, 'twitter', 'toolbar=0,status=0,width=765,height=350');
			},
			fetchCount: function fetchCount() {
				return 0;
			}
		},

		whatsapp: {
			openPopup: function openPopup(options) {
				// TODO: use location.href like email ??
				window.open('whatsapp://send?text=' + encodeURIComponent(options.url));
			},
			fetchCount: function fetchCount() {
				return 0;
			}
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new SocialShare(this, options).init());
			}
		});
	};

	// ----------

	function parseJsonDataAttr(jsonString) {
		try {
			return JSON.parse(jsonString.replace(/'/g, '"'));
		} catch (e) {
			return {};
		}
	}

	function init() {
		$('[data-social-share]').each(function (i, element) {
			var $element = $(element);
			var options = parseJsonDataAttr($element.data('social-share'));
			$element[pluginName](options);
		});
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;
(function ($, window, document) {
	'use strict';

	var selector = '.sponsor-slot__above-headline.sponsor-slot--active,.sponsor-slot__below-headline.sponsor-slot--active';

	var stickClass = 'sponsor-slot--sticky container';

	var mobileOnlyClass = 'sponsor-slot--sticky-mobile-only';

	var htmlSlotClass = 'sponsor-slot__message--active';

	var takeoverClass = 'sponsor-slot--takeover';

	var eventNamespace = 'scroll.stickySponsor';

	var stickyContainer = '<div class="sponsor-slot--sticky-container"></div>';

	var $body = $('body');

	function SparkSlots($el) {
		this.$el = $el;

		if (!this.$el.attr('data-sponsor')) {
			return;
		}

		this.config = this.$el.attr('data-sponsor').replace(/'/g, '"');
		this.config = JSON.parse(this.config);

		this.isStuck = false;
		this.isTakenOver = false;

		this.init();

		return this;
	};

	SparkSlots.prototype = {
		init: function init() {
			var _this = this;

			var className = stickClass;

			$(document).off(eventNamespace);

			if (this.config.htmlPane && this.config.takeOver) {
				this.setScrollDepth(this.config.takeOverThreshold, function (isBeyondThreshold) {
					if (isBeyondThreshold && !_this.isTakenOver) {
						_this.takeOver();
						_this.isTakenOver = true;
					} else if (!isBeyondThreshold && _this.isTakenOver) {
						_this.unTakeOver();
						_this.isTakenOver = false;
					}
				});
			}

			if (this.config.sticky) {
				this.setScrollDepth(0, function (isBeyondThreshold) {
					if (_this.config.stickyMobileOnly && window.tmg.getMediaQuery() !== 'xxs') {
						return;
					}

					className += _this.config.htmlPane ? ' ' + htmlSlotClass : '';

					if (isBeyondThreshold && !_this.isStuck) {
						_this.stickElement(className);
						_this.isStuck = true;
					} else if (!isBeyondThreshold && _this.isStuck) {
						_this.unStickElement(className);
						_this.isStuck = false;
					}
				});
			}

			$(document).trigger('scroll');
		},
		takeOver: function takeOver() {
			this.$el.addClass(takeoverClass);
		},
		unTakeOver: function unTakeOver() {
			this.$el.removeClass(takeoverClass);
		},
		stickElement: function stickElement(className) {
			$body.css({
				'margin-top': this.$el.outerHeight()
			});
			this.$el.addClass(className).wrap(stickyContainer);
		},
		unStickElement: function unStickElement(className) {
			$body.css({
				'margin-top': 0
			});
			this.$el.removeClass(className).unwrap(stickyContainer);
		},
		onScroll: function onScroll(d, cb) {
			var isBeyond = this.isScrollAtThreshold(d);
			cb(isBeyond);
		},
		setScrollDepth: function setScrollDepth(d, cb) {
			var _this = this;

			$(document).on(eventNamespace, function () {
				var isBeyond = _this.isScrollAtThreshold(d);
				cb(isBeyond);
			});
		},
		isScrollAtThreshold: function isScrollAtThreshold(d) {
			// on every scroll event check the position of the sponsor slot right up til the moment it sticks
			// (in case page is still changing size with ad loading)
			if (!this.originalPosition || !this.isStuck) {
				this.originalPosition = this.$el.offset().top + this.$el.height();
			}

			return this.originalPosition + d < $(window).scrollTop();
		}
	};

	$.fn.sparkSlots = function (options) {
		new SparkSlots(this);
	};

	// for unit tests (see acme.spec.component.sparks.js file)
	$(document).on('tmg:page-loaded', function () {
		var $el = $(selector);
		$el.sparkSlots();
	});

	$(document).ready(function () {
		var $el = $(selector);
		$el.sparkSlots();
	});
})(tmgJQ, window, document);
(function ($, window, document) {
	var init;

	var dropDownSort = function dropDownSort(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.domElements = {
			$title: this.$elem.find('.product-listing-sort__title'),
			$title_current: this.$elem.find('.product-listing-sort__title button'),
			$group: this.$elem.find('.product-listing-sort__items-list'),
			$item: this.$elem.find('.product-listing-sort__item'),
			$default: this.$elem.find('.product-listing-sort__item-default')
		};
	};

	var dropDownFilter = function dropDownFilter(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.domElements = {
			$button: this.$elem.find('.product-listing-sort__filters'),
			$title: this.$elem.find('.product-listing-sort__filters .product-listing-sort__title'),
			$group: this.$elem.find('.product-listing-sort__filters-panel')
		};
	};

	dropDownSort.prototype = {
		init: function init() {
			var _this = this;

			_this.domElements.$group.hide();

			this.domElements.$title.on('click', function () {
				_this.domElements.$group.stop().slideToggle(250);
				_this.domElements.$group.toggleClass('open');
			});

			this.domElements.$item.on('click', function () {
				// uncomment to allow current selection to have styles
				// _this.domElements.$item.removeClass('product-listing-sort__item-default');
				// $(this).toggleClass('product-listing-sort__item-default');

				_this.domElements.$item.attr('aria-checked', 'false');
				$(this).attr('aria-checked', 'true');

				_this.domElements.$group.slideUp(250);
				_this.domElements.$title.removeClass('open');

				var selectedText = $(this).html();
				_this.domElements.$title_current.html(selectedText);
			});
		}
	};

	dropDownFilter.prototype = {
		init: function init() {
			var _this = this;

			_this.domElements.$group.hide();

			this.domElements.$title.on('click', function () {
				_this.domElements.$group.slideToggle();
				$(this).toggleClass('open');
				_this.domElements.$button.toggleClass('product-listing-sort__button-open');
			});
		}
	};

	$.fn.dropDownSort = function (options) {
		return this.each(function () {
			if (!$.data(this, 'dropDownSort')) {
				$.data(this, 'dropDownSort', new dropDownSort(this, options).init());
			} else {
				return $.data(this, 'dropDownSort');
			}
		});
	};

	$.fn.dropDownFilter = function (options) {
		return this.each(function () {
			if (!$.data(this, 'dropDownFilter')) {
				$.data(this, 'dropDownFilter', new dropDownFilter(this, options).init());
			} else {
				return $.data(this, 'dropDownFilter');
			}
		});
	};

	window.dropDownSort = dropDownSort;
	window.dropDownFilter = dropDownFilter;

	init = function init() {
		$('.product-listing-sort__sort').dropDownSort();
		$('.product-listing-sort').dropDownFilter();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);

;(function ($, json, hasQuerystring, page) {
	var primarySeparator = ';';

	var secondarySeparator = '_';

	var api = {

		buildAnalyticsString: function buildAnalyticsString(componentName, componentHeading, linkLabel, imgTxt, pagePath) {
			var obj;
			if (componentHeading) {
				componentName += secondarySeparator + componentHeading;
			}
			obj = {
				'componentName': componentName,
				'destination': linkLabel,
				'linkType': imgTxt,
				'pageOfUse': pagePath
			};
			return JSON.stringify(obj);
		},

		escapeSeparatorsInString: function escapeSeparatorsInString(input) {
			var separatorsRegexp = new RegExp('[' + primarySeparator + secondarySeparator + ']', 'g');

			var separatorReplacement = '-';
			return input.replace(separatorsRegexp, separatorReplacement);
		},

		readPagePath: function readPagePath() {
			var pathName = window.location.pathname;
			pathName = pathName.replace(/\//g, ' ').trim().replace(/\s/g, secondarySeparator);
			return pathName || 'portal';
		},

		getComponentName: function getComponentName($componentWrapper) {
			var classname = $componentWrapper.attr('class') || '';var result = classname.split(/\s+/)[0];
			return result || '';
		},

		readComponentWrapper: function readComponentWrapper($anchorElement) {
			var componentWrapper = $anchorElement.closest('.component');
			return componentWrapper;
		},

		readComponentHeading: function readComponentHeading($componentWrapper) {
			var $componentHeadings = $componentWrapper.find('.component-heading, .segment-container__title');

			var result = '';
			if ($componentHeadings.length !== 0) {
				result = $componentHeadings.first().text().replace(/ /g, '-');
			}
			return this.escapeSeparatorsInString(result.trim());
		},

		isImage: function isImage($eventTarget) {
			return $eventTarget.is('img') || !!$eventTarget.find('.gallery-teaser__image').length;
		},

		isGalleryIcon: function isGalleryIcon($eventTarget) {
			return $eventTarget.is('.list-of-entities__icon, .gallery-teaser__button');
		},

		isVideoIcon: function isVideoIcon($eventTarget) {
			return $eventTarget.is('.video-icon__play, .video-icon__arrow, .video-icon__duration');
		},

		isLogoBar: function isLogoBar($eventTarget) {
			return $eventTarget.is('.header-logobar__img');
		},

		readLabelFromListItemBody: function readLabelFromListItemBody($anchorTag) {
			var $imageLinkLabel = $anchorTag.parent().find('.list-of-entities__item-body-headline, .hero-block__item-body-headline').first();
			// Live indicators  in list items cram another <a> element inside the <h3>, hence this nasty check
			if ($imageLinkLabel.has('.live-indicator').length !== 0) {
				$imageLinkLabel = $imageLinkLabel.find('a').first(); // innermost <a> in a list item with live indicator
			}
			if ($anchorTag.hasClass('gallery-teaser__content')) {
				$imageLinkLabel = $anchorTag.find('.gallery-teaser__info').first();
			}
			return $imageLinkLabel.text().trim().replace(/[,\s]+/g, '-');
		},

		readLabelFromImgAlt: function readLabelFromImgAlt($anchorTag) {
			var $image = $anchorTag.find('.header-logobar__img').first();

			var altText = $image.attr('alt');

			var label = '';
			if (altText) {
				label = altText.trim().replace(/[,\s]+/g, '-');
			}
			return label;
		},

		readLinkLabel: function readLinkLabel($anchorClicked, $eventTarget) {
			var result;

			var galleryTeaserButton = '-View-gallery';
			if (this.isLogoBar($eventTarget)) {
				result = this.readLabelFromImgAlt($anchorClicked);
			} else if (this.isImage($eventTarget)) {
				result = this.readLabelFromListItemBody($anchorClicked);
			} else if (this.isGalleryIcon($eventTarget) || this.isVideoIcon($eventTarget)) {
				result = this.readLabelFromListItemBody($anchorClicked);
			} else {
				result = $anchorClicked.first().text().trim().replace(/[,\s]+/g, '-');
			}
			if (result.indexOf(galleryTeaserButton) > -1) {
				result = result.replace(galleryTeaserButton, '');
			}
			return this.escapeSeparatorsInString(result);
		},

		readElementClicked: function readElementClicked($eventTarget) {
			if (this.isImage($eventTarget)) {
				return 'img';
			} else if (this.isGalleryIcon($eventTarget) || this.isVideoIcon($eventTarget)) {
				return 'ico';
			} else {
				return 'txt';
			}
		},

		createIcid: function createIcid() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$brand = _ref.brand,
			    brand = _ref$brand === undefined ? page.getChannel() : _ref$brand,
			    _ref$product = _ref.product,
			    product = _ref$product === undefined ? 'generic' : _ref$product,
			    _ref$mediaType = _ref.mediaType,
			    mediaType = _ref$mediaType === undefined ? 'generic' : _ref$mediaType,
			    _ref$contentType = _ref.contentType,
			    contentType = _ref$contentType === undefined ? page.getContentType() : _ref$contentType,
			    _ref$contentLocation = _ref.contentLocation,
			    contentLocation = _ref$contentLocation === undefined ? 'generic' : _ref$contentLocation;

			// ICID=[brand]_[product]_[mediaType]_[contentType]_[contentLocation]
			return brand + '_' + product + '_' + mediaType + '_' + contentType + '_' + contentLocation;
		},

		isDtmEnabled: function isDtmEnabled() {
			return !!window._satellite;
		},

		processIcids: function processIcids() {
			var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-icid]';

			// Loop over [data-icid] to call function to append custom ICID parameter
			var icidElements = Array.from(document.querySelectorAll(selector));
			icidElements.forEach(function (element) {
				var updatedHref = void 0;
				var options = json.tryParse(element.dataset.icid);
				var icidString = api.createIcid(options);
				var href = element.getAttribute('href');

				if (href) {
					updatedHref = tmg.setQuerystringParam(href, 'ICID', icidString);
					element.setAttribute('href', updatedHref);
				}
			});
		}

	};

	// Expose the API
	window.TMG_COMPONENT_TRACKING = window.TMG_COMPONENT_TRACKING || api;

	(function setUpEvents() {
		if (api.isDtmEnabled()) {
			$('.component.list-of-entities a[href^="/"]:not(.midArticleUnit .component.list-of-entities a), ' + ".component.hero-block a[href^='/'], " + ".component.segment-container a[href^='/'], " + ".component.gallery-teaser a[href^='/'], " + ".component.article-body-image a[href^='/'], " + ".component.article-body-text a[href^='/'], " + ".component.list-of-tags a[href^='/'], " + ".component.byline a[href^='/'], " + ".component.inline-content a[href^='/'], " + ".component.quote a[href^='/'], " + ".component.header-breadcrumbs a[href^='/'], " + ".component.header-nav-local a[href^='/'], " + ".component.header-nav-primary a[href^='/'], " + ".component.header-nav-global a[href^='/'], " + ".component.overlay-nav-primary a[href^='/'], " + ".component.breadcrumbs a[href^='/'], " + '.component.header-logobar a').on('click', function (e) {
				var $eventTarget = $(e.target);

				var $anchorClicked = $(this);

				var componentName;

				var componentHeading;

				var linkLabel = api.readLinkLabel($anchorClicked, $eventTarget);

				var pagePath = api.readPagePath();

				var $componentWrapper;

				var analyticsString;

				var imgTxt = api.readElementClicked($eventTarget);

				$componentWrapper = api.readComponentWrapper($anchorClicked);
				componentName = api.getComponentName($componentWrapper);
				componentHeading = api.readComponentHeading($componentWrapper);
				analyticsString = api.buildAnalyticsString(componentName, componentHeading, linkLabel, imgTxt, pagePath);

				// TODO: Consider removing dependency on satellite
				window._satellite.setCookie('tmgComponentTracking', encodeURIComponent(analyticsString), 1);
			});

			api.processIcids();
		}
	})();
})(tmgJQ, tmg.json, tmg.hasQuerystring, tmg.page);
;(function ($, document, user) {
	'use strict';

	var init;

	var pluginName = 'GlobalNav';

	function GlobalNav(context, options) {
		this.$globalNavContext = $(context);
		this.$links = this.$globalNavContext.find('.header-nav-global__link, .header-nav-global__drop-down-menu__link');
		this.$notLogged = this.$globalNavContext.find('.header-nav-global__not-logged');
		this.$loggedNotSub = this.$globalNavContext.find('.header-nav-global__logged-not-subscriber');
		this.$loggedAndSub = this.$globalNavContext.find('.header-nav-global__logged-and-subscriber');
		this.$dropDownWrapper = this.$globalNavContext.find('.js-has-dropdown > .header-nav-global__link');
		this.$embedWrapper = this.$globalNavContext.find('.js-has-embed');
		this.$embedContent = this.$embedWrapper.find('.header-nav-global__html-embed');
		this.$status = 'notLogged';
	}

	GlobalNav.prototype = {
		defaults: {},

		init: function init() {
			this.buttonsBehaviour();
			this.getStatusString();

			if (this.showStatusMenu()) {
				return this.$links.each(function (i, elem) {
					elem.href = tmg.updateRedirectParam(elem.href, document.location.href);
				});
			}
			return false;
		},

		buttonsBehaviour: function buttonsBehaviour() {
			var delayStart, delayEnd;

			this.$embedWrapper.on('mouseenter', function () {
				var self = $(this);
				clearTimeout(delayEnd);
				delayStart = setTimeout(function () {
					self.addClass('has-embed-visible');
				}, 500);
			});

			this.$embedWrapper.on('click', function () {
				clearTimeout(delayStart);
			});

			this.$embedWrapper.on('mouseleave', function () {
				var self = $(this);
				clearTimeout(delayStart);
				delayEnd = setTimeout(function () {
					self.removeClass('has-embed-visible');
				}, 300);
			});

			this.$dropDownWrapper.on('click', function (e) {
				e.preventDefault();
				$(this).closest('.header-nav-global__item').toggleClass('has-dropdown-open');
			});
		},

		getStatusString: function getStatusString() {
			if (user.isLoggedIn()) {
				if (user.isSubscriber()) {
					this.$status = 'loggedAndSub';
				} else {
					this.$status = 'loggedNotSub';
				}
			}
			return this.$status;
		},

		showStatusMenu: function showStatusMenu() {
			if (this.$status == 'notLogged') {
				this.$loggedNotSub.remove();
				this.$loggedAndSub.remove();
				this.$notLogged.show();
				return true;
			} else if (this.$status == 'loggedNotSub') {
				this.$notLogged.remove();
				this.$loggedAndSub.remove();
				this.$loggedNotSub.show();
				return true;
			} else if (this.$status == 'loggedAndSub') {
				this.$notLogged.remove();
				this.$loggedNotSub.remove();
				this.$loggedAndSub.show();
				return true;
			}
			return false;
		}
	};

	function init() {
		$('.header-nav-global').each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new GlobalNav(this).init());
			}
		});
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, document, tmg.user);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'LocalNav';

	var LocalNav = function LocalNav(context, options) {
		this.$localNav = $(context);

		this.containterWidth = 0;
		this.listElementsWidth = 0;

		this.options = options;
		this.config = {};

		this.init();
	};

	LocalNav.prototype = {

		defaults: {
			localNavExpandedSelector: 'header-nav-local--expanded',
			listSelector: '.header-nav-local__list',
			listItemsSelector: '.header-nav-local__item',
			buttonSelector: '.header-nav-local__button',
			buttonTextSelector: '.header-nav-local__button-text',
			buttonShowSelector: 'header-nav-local__button--show',
			buttonExpandedLabel: 'expanded-label',
			buttonNoExpandedLabel: 'no-expanded-label'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.$list = this.$localNav.find(this.config.listSelector);
			this.$listItems = this.$localNav.find(this.config.listItemsSelector);
			this.$button = this.$localNav.find(this.config.buttonSelector);
			this.$buttonText = this.$localNav.find(this.config.buttonTextSelector);

			this.refresh();
			this.attachEvents();
		},

		refresh: function refresh() {
			this.setButtonVisibility();
		},

		/* EVENTS */

		attachEvents: function attachEvents() {
			this.buttonClick();
			this.windowResize();
		},

		buttonClick: function buttonClick() {
			this.$button.on('click', function () {
				this.$localNav.toggleClass(this.config.localNavExpandedSelector);
				this.changeButtonLabel();
			}.bind(this));
		},

		windowResize: function windowResize() {
			$(window).on('resize', function () {
				this.refresh();
			}.bind(this));
		},

		/* HELPERS */

		/* we should show button only if we need */
		setButtonVisibility: function setButtonVisibility() {
			this.containterWidth = this.$list.width();
			this.listElementsWidth = 0;
			this.$listItems.each(function (index, item) {
				this.listElementsWidth += $(item).width();
			}.bind(this));

			if (this.listElementsWidth > this.containterWidth) {
				this.$button.addClass(this.config.buttonShowSelector);
			} else {
				this.$button.removeClass(this.config.buttonShowSelector);
			}
		},

		changeButtonLabel: function changeButtonLabel() {
			var isExpanded = this.$localNav.hasClass(this.config.localNavExpandedSelector);

			var newLabel;

			if (isExpanded) {
				newLabel = this.$buttonText.data(this.config.buttonExpandedLabel);
			} else {
				newLabel = this.$buttonText.data(this.config.buttonNoExpandedLabel);
			}
			this.$buttonText.text(newLabel);
		}

	};

	init = function init() {
		var $localNavs = $('.header-nav-local');

		var localNavs = [];var ob;

		$localNavs.each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				ob = new LocalNav(this);
				localNavs.push(ob);
				$.data(this, pluginName, ob);
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'PrimaryNav';

	var PrimaryNav = function PrimaryNav(context, options) {
		this.$primaryNav = $(context);

		this.options = options;
		this.config = {};

		this.init();
	};

	PrimaryNav.prototype = {

		defaults: {
			primaryNavExpandedSelector: 'header-nav-primary--expanded',
			buttonSelector: '.header-nav-primary__button',
			buttonTextSelector: '.header-nav-primary__button-text',
			buttonShowSelector: 'header-nav-primary__button--show',
			buttonExpandedLabel: 'expanded-label',
			buttonNoExpandedLabel: 'no-expanded-label'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.$button = this.$primaryNav.find(this.config.buttonSelector);
			this.$buttonText = this.$primaryNav.find(this.config.buttonTextSelector);

			this.attachEvents();
		},

		/* EVENTS */

		attachEvents: function attachEvents() {
			this.buttonClick();
		},

		buttonClick: function buttonClick() {
			this.$button.on('click', function () {
				this.$primaryNav.toggleClass(this.config.primaryNavExpandedSelector);
				this.changeButtonLabel();
			}.bind(this));
		},

		/* HELPERS */

		changeButtonLabel: function changeButtonLabel() {
			var isExpanded = this.$primaryNav.hasClass(this.config.primaryNavExpandedSelector);

			var newLabel;

			if (isExpanded) {
				newLabel = this.$buttonText.data(this.config.buttonExpandedLabel);
			} else {
				newLabel = this.$buttonText.data(this.config.buttonNoExpandedLabel);
			}
			this.$buttonText.text(newLabel);
		}

	};

	init = function init() {
		/* run only for 'header-nav-primary--theme' variant */
		return $('.header-nav-primary--theme').each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new PrimaryNav(this));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'HeaderOverlayButton';

	var HeaderOverlayButton = function HeaderOverlayButton(context, options) {
		this.$headerOverlayButton = $(context);
		this.$mainContent = null;

		this.options = options;
		this.config = {};

		this.init();
	};

	HeaderOverlayButton.prototype = {

		defaults: {
			overlayNavSelector: '.snippet-overlay-nav',
			overlayNavShowSelector: 'snippet-overlay-nav--show',
			overlayNavCloseButton: '.overlay-nav-button__button',
			mainContentSelector: '.main-content',
			mainContentOverlayOnClass: 'sr-only'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.$overlayNav = $(this.config.overlayNavSelector);
			this.$mainContent = $(this.config.mainContentSelector);

			this.attachEvent();
		},

		attachEvent: function attachEvent() {
			this.$headerOverlayButton.on('click', function () {
				this.showOverlayNav();
				this.addFocusToCloseButton();
			}.bind(this));
		},

		showOverlayNav: function showOverlayNav() {
			this.$overlayNav.addClass(this.config.overlayNavShowSelector);
			if (this.$mainContent) {
				this.$mainContent.addClass(this.config.mainContentOverlayOnClass);
			}
		},

		addFocusToCloseButton: function addFocusToCloseButton() {
			var overlayNavCloseButton = $(this.config.overlayNavCloseButton);
			if (overlayNavCloseButton.length) {
				overlayNavCloseButton[0].focus();
			}
		}

	};

	init = function init() {
		$('.header-nav-overlay-button').each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new HeaderOverlayButton(this));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
/* Offer component */
;(function ($, tmg, window, document) {
	'use strict';

	var pluginName = 'Offer';

	function Offer(element, options) {
		this.$element = $(element);
		this.$links = this.$element.find('a[href]');
	};

	Offer.prototype = {
		init: function init() {
			this.$links.each(function (i, elem) {
				elem.href = tmg.updateRedirectParam(elem.href, document.location.href);
			});
		}
	};

	function init() {
		$('.offer').each(function () {
			var data = $(this).data();
			// initiate once
			if (!data[pluginName]) {
				data[pluginName] = new Offer(this).init();
			}
		});
	}

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, tmg, window, document);
(function (window, document) {
	'use strict';

	function OverlayContinuation() {
		this.overlayClickElem = document.querySelector('[data-js="overlay-continuation__handler"]');
		this.overlayContainer = document.querySelector('[data-js="overlay-continuation"]');
		this.overlayClose = document.querySelector('[data-js="overlay-continuation__close"]');
		this.overlayTimeout = null;

		// Check we have a continuation anchor
		if (this.overlayClickElem) {
			this.overlayAnchor = this.overlayClickElem.href;
			this.events();
		}
	}

	OverlayContinuation.prototype.events = function () {
		var _this = this;

		// Show the overlay when triggered
		this.overlayClickElem.addEventListener('click', function (e) {
			e.preventDefault();
			_this.showOverlay();
		}, false);

		// Close the overlay when close button clicked
		this.overlayClose.addEventListener('click', function () {
			// Now the user has clicked close,
			// Kill the setTimeOut
			// And hide the overlay,
			clearTimeout(_this.overlayTimeout);
			_this.overlayContainer.classList.remove('overlay-continuation__visible');
		});
	};

	// Add the stickyHolding to retain height and add classes for fixed fallback
	OverlayContinuation.prototype.showOverlay = function () {
		var _this = this;

		// Check we have a container to display,
		// otherwise just let the user continue their journey without the overlay
		if (this.overlayContainer !== undefined) {
			this.overlayContainer.classList.add('overlay-continuation__visible');
		}

		// Set a timer for 5 seconds then fire the close overlay function
		this.overlayTimeout = setTimeout(function () {
			_this.closeAndRedirect();
		}, 5000);
	};

	OverlayContinuation.prototype.closeAndRedirect = function () {
		// Forward the user to the link destination
		window.location.href = this.overlayAnchor;
	};

	document.addEventListener('DOMContentLoaded', function () {
		new OverlayContinuation();
	});
	document.addEventListener('tmg:page-loaded', new OverlayContinuation());
})(window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var OverlayNavButton = function OverlayNavButton(context, options) {
		this.$overlayNavButton = $(context);
		this.$mainContent = null;

		this.options = options;
		this.config = {};

		this.init();
	};

	OverlayNavButton.prototype = {

		defaults: {
			overlayNavButtonSelector: '.overlay-nav-button__button',
			overlayNavSelector: '.snippet-overlay-nav',
			overlayNavShowSelector: 'snippet-overlay-nav--show',
			headerNavOverlayButton: '.header-nav-overlay-button__button',
			mainContentSelector: '.main-content',
			mainContentOverlayOnClass: 'sr-only'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.$overlayNavButton = this.$overlayNavButton.find(this.config.overlayNavButtonSelector);
			this.$overlayNav = $(this.config.overlayNavSelector);
			this.$mainContent = $(this.config.mainContentSelector);

			this.attachEvents();
		},

		attachEvents: function attachEvents() {
			this.handleClick();
			this.handleEsc();
		},

		handleClick: function handleClick() {
			this.$overlayNavButton.on('click', function () {
				this.closeNavOverlay();
			}.bind(this));
		},

		handleEsc: function handleEsc() {
			$(document).keydown(function (e) {
				// ESCAPE key pressed
				if (e.keyCode == 27) {
					this.closeNavOverlay();
				}
			}.bind(this));
		},

		closeNavOverlay: function closeNavOverlay() {
			this.hideOverlayNav();
			this.addFocusToHeaderNavButton();
		},

		hideOverlayNav: function hideOverlayNav() {
			if (this.$mainContent) {
				this.$mainContent.removeClass(this.config.mainContentOverlayOnClass);
			}
			this.$overlayNav.removeClass(this.config.overlayNavShowSelector);
		},

		addFocusToHeaderNavButton: function addFocusToHeaderNavButton() {
			var headerNavOverlayButton = $(this.config.headerNavOverlayButton);
			if (headerNavOverlayButton.length) {
				headerNavOverlayButton[0].focus();
			}
		}

	};

	init = function init() {
		var $overlayNavButtons = $('.overlay-nav-button');

		var overlayNavButtons = [];

		$overlayNavButtons.each(function () {
			// initiate once
			if (!$.data(this, 'overlayNavButtons')) {
				$.data(this, 'overlayNavButtons', overlayNavButtons.push(new OverlayNavButton(this)));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var OverlayNavSecondary = function OverlayNavSecondary(context, options) {
		this.$overlayNavSecondary = $(context);

		this.options = options;
		this.config = {};

		this.init();
	};

	OverlayNavSecondary.prototype = {

		defaults: {
			overlayNavPrimaryItemsSelector: '.overlay-nav-primary__item',
			overlayNavPrimaryItemLinkClass: '.overlay-nav-primary__link',
			overlayNavSecondaryItemsSelector: '.overlay-nav-secondary__item'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.$overlayNavPrimaryItems = $(this.config.overlayNavPrimaryItemsSelector);
			this.$overlayNavSecondaryItems = this.$overlayNavSecondary.find(this.config.overlayNavSecondaryItemsSelector);

			this.attachEvents();
		},

		attachEvents: function attachEvents() {
			this.handleBlur();
		},

		// when we lost focus on last element from secondary nav -> add focus for first element from primary nav
		handleBlur: function handleBlur() {
			this.$overlayNavSecondaryItems.last().on('focusout', function () {
				this.$overlayNavPrimaryItems.first().children(this.config.overlayNavPrimaryItemLinkClass).focus();
			}.bind(this));
		}

	};

	$(document).on('ready tmg:page-loaded', function () {});

	init = function init() {
		var $overlayNavSecondaries = $('.overlay-nav-secondary');

		var overlayNavSecondaries = [];

		$overlayNavSecondaries.each(function () {
			// initiate once
			if (!$.data(this, 'OverlayNavSecondary')) {
				$.data(this, 'OverlayNavSecondary', overlayNavSecondaries.push(new OverlayNavSecondary(this)));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var noclash = $.fn.telegraph_listOfEntities ? 'noclash_' : '';

	var pluginName = noclash + 'telegraph_listOfEntities';

	var pluginNameInit = pluginName + '_init';

	var selector = '.js-list-of-entities';

	var Plugin = function Plugin(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.dataOptions = this.$elem.data('options');
		this.dataOptions = this.dataOptions ? $.parseJSON(this.dataOptions.replace(/'/g, '"')) : {};
		this.domElements = {};
	};

	Plugin.prototype = {
		defaults: {
			isMobile: 0,
			moreless: {
				from: -1, // -1 === off ; this must be set 0 or more to enable moreless
				speed: 300,
				breakpoint: 'xxs',
				text: {
					more: 'Show more',
					less: 'Show less'
				}
			},
			selectors: {
				listItems: '.list-of-entities__item',
				listItemsMoreless: '.list-of-entities__item.is-moreless',
				morelessButton: '.component-footer-link',
				root: 'html'
			},
			classNames: {
				isMoreless: 'is-moreless',
				uaMob: 'ua-mobile'
			},
			attrs: {
				ariaHidden: 'aria-hidden',
				moreless: 'data-moreless'
			}
		},
		init: function init() {
			this.options = $.extend(true, {}, this.defaults, this.dataOptions, this.options);
			this.options.isMobile = $(this.options.selectors.root).hasClass(this.options.classNames.uaMob);
			this.findDomElements();
			this.attachEvents();
			this.morelessInit();
			return this;
		},
		findDomElements: function findDomElements() {
			this.domElements.$listItems = this.$elem.find(this.options.selectors.listItems);
			this.domElements.$listItemsMoreless = [];
			this.domElements.$morelessButton = this.$elem.find(this.options.selectors.morelessButton);
		},
		attachEvents: function attachEvents() {
			// standard
		},
		morelessInit: function morelessInit() {
			// check if moreless is required
			var currentBreakpoint = window.tmg.getMediaQuery();

			var options = this.options.moreless;

			var breakpoints = this.utils.getKeysFromHash(tmg.viewport.mediaQueriesBreakpoints);

			var currentIndex = breakpoints.indexOf(currentBreakpoint);

			var optionsIndex = breakpoints.indexOf(options.breakpoint);

			var itemsLength = this.domElements.$listItems.length;

			if (options.from > -1 && // moreless has a from value
			optionsIndex >= currentIndex && // trigger breakpoint is >= screen size
			itemsLength > options.from) {
				// enough items to trigger moreless
				this.morelessApply();
			}
		},
		morelessApply: function morelessApply() {
			// identify items to hide and attach event handler
			var _this = this;

			var from = _this.options.moreless.from;

			_this.options.moreless.open = true;
			_this.domElements.$listItems.each(function (index, item) {
				if (index >= from) {
					var $item = $(item);
					$item.addClass(_this.options.classNames.isMoreless);
				}
			});

			_this.domElements.$listItemsMoreless = _this.$elem.find(_this.options.selectors.listItemsMoreless);
			_this.options.moreless.speed = _this.options.isMobile ? 0 : _this.options.moreless.speed; // snap on mobile
			_this.moreless(true);
			_this.$elem.on('click', _this.options.selectors.morelessButton, function (e) {
				e.preventDefault();
				_this.moreless();
			});
		},
		moreless: function moreless(snap) {
			// toggle, opens and closes the items, sets attributes etc...
			if (this.options.moreless.busy) {
				// ignore requests when busy
				return;
			}

			var _this = this;

			var moreless = _this.options.moreless;

			var speed = snap ? 0 : moreless.speed;

			var open = !moreless.open;

			var buttonText = open ? moreless.text.less : moreless.text.more;

			var callback = function callback() {
				_this.domElements.$listItemsMoreless.attr(_this.options.attrs.ariaHidden, !open);
				_this.options.moreless.busy = false;
			};

			_this.options.moreless.busy = true;
			_this.$elem.attr(_this.options.attrs.moreless, open);
			_this.options.moreless.open = open;
			_this.domElements.$morelessButton.text(buttonText);
			_this.domElements.$listItemsMoreless.slideToggle(speed, callback); // crappy jQuery animation, sorry :(
		},
		utils: {
			getKeysFromHash: function getKeysFromHash(table) {
				var arr = [];
				for (var key in table) {
					arr.push(key);
				}
				return arr;
			}
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$(this).data(pluginName)) {
				$(this).data(pluginName, new Plugin(this, options).init());
			}
		});
	};

	$.fn[pluginNameInit] = function () {
		$(selector)[pluginName]();
	};

	$(document).on('ready tmg:page-loaded', function () {
		$(selector)[pluginName]();
	});
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'telegraph_ListSlider';

	var className = 'list-slider';

	var pluginNameInit = pluginName + '_init';

	var selector = '.' + className;

	var sliderMobileOnlyClass = className + '--mobile-only';

	var sliderActiveClass = className + '--active';

	var arrowsContainerClass = className + '__arrows';

	var noArrowsClass = className + '--no-arrows';

	var leftArrowClass = 'arrow__left';

	var rightArrowClass = 'arrow__right';

	var draggingClass = 'dragging';

	var disabledClass = 'disabled';

	var arrowsContainerSelector = '.' + arrowsContainerClass;

	var arrowSelector = '.arrow';

	var listContainerSelector = '.list-of-entities__container';

	var listContainerContainerSelector = 'div:first';

	var listItemSelector = '.list-of-entities__item';

	var listContentSelector = '.js-list-of-entities';

	var isTouch = $('html').hasClass('touch');

	var telegraph_ListSlider = function telegraph_ListSlider(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.$listContainer = this.$elem.find(listContainerSelector);
		this.$listContainerContainer = this.$listContainer.parents(listContainerContainerSelector);
		this.$listItems = this.$elem.find(listItemSelector);
		this.$listJSContainer = this.$elem.find(listContentSelector);
		this.$tags = this.$elem.find(listContentSelector);

		this.dataOptions = this.$listJSContainer.data('options') ? $.parseJSON(this.$listJSContainer.data('options').replace(/'/g, '"')) : {};
		this.domElements = {};
	};

	telegraph_ListSlider.prototype = {
		defaults: {
			dictionary: {
				previous: 'Previous',
				next: 'Next'
			},
			animationTime: 500, // milliseconds
			clickDragTime: 300, // milliseconds
			dragMinimumMove: 5, // pixels
			currentSelectedIndex: 0,

			paddingLeft: 0,
			noArrows: false,
			sliderMobileOnly: false,
			active: true,
			clickMoveAway: true,
			mediaQuery: '',
			arrowsContainerTpl: '<div class="' + arrowsContainerClass + '">',
			arrowTpl: '<a href="#" class="arrow"><span class="arrow__inner"><span class="arrow__text">{{TEXT}}</span></span></a>'
		},
		init: function init() {
			var _selectNextItemEvent;

			if (this.$listItems.length === 0) {
				return false;
			}

			this.options = $.extend({}, this.defaults, this.dataOptions, this.options);

			// start at the right point
			if (this.$elem.data('selected-item') >= 0) {
				this.options.currentSelectedIndex = this.$elem.data('selected-item');
			}

			this.options.paddingLeft = parseInt(this.$elem.css('padding-left'));

			// Arrows container
			this.$listJSContainer.wrap(this.options.arrowsContainerTpl);
			this.$arrowsContainer = this.$elem.find(arrowsContainerSelector);

			this.$listContainer.data('margin-left', this.$listContainer.css('margin-left'));

			// Append arrows, if needed
			if (this.options.noArrows === true) {
				this.$elem.addClass(noArrowsClass);
			} else {
				this.$arrowsContainer.append(this.createArrow(leftArrowClass, 'slideLeft', this.options.dictionary.previous)).append(this.createArrow(rightArrowClass, 'slideRight', this.options.dictionary.next));
			}
			this.$arrows = this.$elem.find(arrowSelector);

			// Mobile only functionality
			if (this.options.sliderMobileOnly === 'true') {
				this.$elem.addClass(sliderMobileOnlyClass);
			}

			// For when we need to force the selection of a specific item
			this.$elem.selectItem = this.selectItem;

			// Attach the events
			this.attachEvents();

			// exposing some methods
			_selectNextItemEvent = $.proxy(this.selectNextItemEvent, this);
			this.$elem.on('list-slider:select-next-item', _selectNextItemEvent);

			this.selectItem(this.options.currentSelectedIndex);

			this.enableArrows(parseInt(this.$listContainer.css('margin-left')));

			return this;
		},

		attachEvents: function attachEvents() {
			var _this = this;

			var _mouseDownEvent = $.proxy(this.mouseDownEvent, this);

			var _mouseMoveEvent = $.proxy(this.mouseMoveEvent, this);

			var _dragStartEvent = $.proxy(this.dragStartEvent, this);

			var _clickEvent = $.proxy(this.clickEvent, this);

			var _mouseUpEvent = $.proxy(this.mouseUpEvent, this);

			var _resizeEvent = $.proxy(this.resizeEvent, this);

			var _selectNextItem = $.proxy(this.selectNextItem, this);

			var _selectFirstItem = $.proxy(this.selectFirstItem, this);

			_this.$listContainer
			// Drag start
			.on('mousedown touchstart', _mouseDownEvent)
			// Moving on mouse down
			.on('mousemove', _mouseMoveEvent).on('selectFirstItem', _selectFirstItem).on('selectNextItem', _selectNextItem);

			// Item click should play the video
			_this.$listItems.on('click touchend', _clickEvent)
			// Fixes browser anchor and image drag
			.on('dragstart', 'a, img', _dragStartEvent);

			$(document).on('mouseup touchend', _mouseUpEvent)
			// Video player will trigger this event
			.on('tmg:video-played', function () {
				if ($(document).data('video-autoplay-on') === true) {
					_this.selectNextItem();
				}
			});

			$(window).resize(_resizeEvent).trigger('resize');
		},

		selectNextItemEvent: function selectNextItemEvent(event) {
			this.selectNextItem();
		},

		eventXValue: function eventXValue(event) {
			var x = 0;var touch;
			if (event.type.indexOf('touch') === 0) {
				touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
				x = touch.pageX;
			} else {
				x = event.pageX;
			}
			return x;
		},

		resizeEvent: function resizeEvent(event) {
			var gotMediaQuery = tmg.getMediaQuery();

			if (this.options.mediaQuery != gotMediaQuery) {
				this.options.mediaQuery = gotMediaQuery;
				// IF current breakpoint is mobile
				if (this.options.sliderMobileOnly !== 'true' || this.options.mediaQuery === 'xxs') {
					// activate
					this.$elem.addClass(sliderActiveClass);
					// We need to set the container size to something ridiculous so the elements inside don't get squashed.
					this.$listContainer.width(5000);
					this.$listContainer.width(this.$listItems.eq(0).width() * this.$listItems.length);
					this.$listContainer.css('margin-left', 0);
					this.options.active = true;
				} else {
					// deactivate
					this.$listContainer.width('auto');
					this.$listContainer.css('margin-left', this.$listContainer.data('margin-left'));
					this.$elem.removeClass(sliderActiveClass);
					this.options.active = false;
				}
			}
		},

		dragStartEvent: function dragStartEvent(event) {
			event.preventDefault();
		},

		clickEvent: function clickEvent(event) {
			var element = event.currentTarget;var target = event.target;

			if (this.options.active === true) {
				event.preventDefault();
				event.stopPropagation();
				// are we dragging?
				if (isTouch // on touch devices we only need to check for the scroll amount
				? Math.abs(this.eventXValue(event) - this.$listContainer.data('start-move')) < this.options.dragMinimumMove : event.timeStamp - this.$listContainer.data('click-start') < this.options.clickDragTime || Math.abs(this.eventXValue(event) - this.$listContainer.data('start-move')) < this.options.dragMinimumMove) {
					if (this.options.clickMoveAway === true) {
						// we preventDefault and stopPropagation above, so we need to force the click here
						if (target.tagName === 'A') {
							window.location.href = target.href;
						}
					} else {
						if (target.tagName === 'A') {
							// component.video-sequence will take care of redirecting if needed
							$(document).trigger('tmg:slider-list-item-anchor-clicked', [target]);
						}
						this.selectItem($(element).index());
					}
				}
			}
		},

		mouseUpEvent: function mouseUpEvent(event) {
			var containers = $(selector).find(listContainerSelector);
			$.each(containers, function (i, listContainer) {
				listContainer = $(listContainer);
				if (listContainer.hasClass(draggingClass)) {
					event.preventDefault();
					event.stopPropagation();
					setTimeout(function () {
						listContainer.removeClass(draggingClass);
					}, 10);
				}
			});
		},
		mouseDownEvent: function mouseDownEvent(event) {
			if (this.options.active === true) {
				this.$listContainer.addClass(draggingClass);
				this.$listContainer.data('click-start', event.timeStamp);
				this.$listContainer.data('start-move', this.eventXValue(event));
				this.$listContainer.data('start-margin', parseInt(this.$listContainer.css('margin-left')));
			}
		},

		mouseMoveEvent: function mouseMoveEvent(event) {
			if (this.options.active === true && this.$listContainer.hasClass(draggingClass)) {
				var m = this.$listContainer.data('start-margin') + this.eventXValue(event) - this.$listContainer.data('start-move');
				this.$listContainer.css('margin-left', this.validateMargin(m));
			}
		},

		createArrow: function createArrow(klass, method, text) {
			var arrow = $(this.options.arrowTpl.replace('{{TEXT}}', text)).addClass(klass);

			var _this = this;

			arrow.on('click', function (event) {
				event.preventDefault();
				_this[method]();
			});
			return arrow;
		},

		/* SINGLE ITEM SELECTOR FUNCTION */
		selectItem: function selectItem(n) {
			this.slideTo(n);
		},

		/* SLIDE FUNCTIONS */
		slideLeft: function slideLeft(event) {
			this.slide('+');
		},
		slideRight: function slideRight(event) {
			this.slide('-');
		},
		slide: function slide(direction) {
			if (isTouch) {
				return false;
			}
			var margin = parseInt(this.$listContainer.css('margin-left'));
			if (direction === '+') {
				margin += this.$listItems.first().width() * 4;
			} else {
				margin -= this.$listItems.first().width() * 4;
			}

			margin = this.validateMargin(margin);

			this.setMargin(margin);
		},

		slideTo: function slideTo(n) {
			if (n >= 0 && n < this.$listItems.length) {
				var newMargin = -1 * (n * this.$listItems.first().width()) + 0;
				newMargin = this.validateMargin(newMargin);
				this.setMargin(newMargin);
			}
			this.highlightItem(n);
		},

		/* SELECTOR FUNCTIONS */
		selectPreviousItem: function selectPreviousItem() {
			if (this.options.currentSelectedIndex > 0) {
				this.selectItem(this.options.currentSelectedIndex - 1);
			}
		},
		selectNextItem: function selectNextItem() {
			if (this.options.currentSelectedIndex < this.$listItems.length) {
				this.selectItem(this.options.currentSelectedIndex + 1);
			}
		},

		/* FIRST AND LAST ITEM SELECTOR FUNCTIONS */
		selectFirstItem: function selectFirstItem() {
			this.selectItem(0);
		},
		selectLastItem: function selectLastItem() {
			this.selectItem(this.$listItems.length - 1);
		},

		/* OTHER FUNCTIONS */
		validateMargin: function validateMargin(newMargin) {
			var corrector = -1 * this.options.paddingLeft;
			if (newMargin > corrector) {
				newMargin = corrector;
			}
			if (this.$listContainerContainer.width() >= this.$listContainer.width()) {
				newMargin = corrector;
			} else if (-1 * newMargin + this.$arrowsContainer.width() - corrector > this.$listContainer.width()) {
				newMargin = -1 * (this.$listContainer.width() - this.$arrowsContainer.width()) - corrector;
			}

			this.enableArrows(newMargin);
			return newMargin;
		},
		setMargin: function setMargin(m) {
			var _this = this;
			this.$listContainer.animate({
				'margin-left': m
			}, this.options.animationTime, function () {
				_this.enableArrows(m);
			});
		},
		highlightItem: function highlightItem(index) {
			if (index < 0) {
				index = 0;
			}
			if (index === this.$listItems.length) {
				this.selectFirstItem();
				$(document).trigger('tmg:list-item-selected', [this.$listContainer, this.$listItems.eq(this.options.currentSelectedIndex)]);
				return this.options.currentSelectedIndex;
			}

			if (this.options.currentSelectedIndex == index) {
				$(document).trigger('tmg:list-item-selected', [this.$listContainer, this.$listItems.eq(this.options.currentSelectedIndex)]);
				return this.options.currentSelectedIndex;
			}

			this.options.currentSelectedIndex = index;

			// broadcast event passing the element we selected
			$(document).trigger('tmg:list-item-selected', [this.$listContainer, this.$listItems.eq(this.options.currentSelectedIndex)]);

			return this.options.currentSelectedIndex;
		},
		enableArrows: function enableArrows(margin) {
			var corrector = -1 * this.options.paddingLeft + 0;

			// if there is room for scrolling
			if (this.$listContainerContainer.width() < this.$listContainer.width()) {
				this.$arrows.removeClass(disabledClass);
				if (margin === corrector) {
					this.$arrows.first().addClass(disabledClass);
				} else if (margin === -1 * (this.$listContainer.width() - this.$arrowsContainer.width()) - corrector) {
					this.$arrows.last().addClass(disabledClass);
				}
			} else {
				this.$arrows.first().addClass(disabledClass);
				this.$arrows.last().addClass(disabledClass);
			}
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// only initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new telegraph_ListSlider(this, options).init());
			}
		});
	};

	$.fn[pluginNameInit] = function () {
		// alias, so you can initiate without needing the selector
		$(selector)[pluginName]();
	};

	init = function init() {
		$(selector)[pluginName]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded tmg:video-sequence-loaded', init);
})(tmgJQ, window, document);
/* Tabbed list component */
(function ($, window, document) {
	'use strict';

	var init;

	var liveStream = function liveStream(component) {
		this.$component = $(component);
		this.defaults = {
			classes: {
				disabledLiveHeadline: 'headline--live-disabled'
			},
			selectors: {
				lifePost: '.live-post.component',
				lifeStreamBar: '.live-stream__bar',
				lifeStreamWrapper: '.live-stream__post-wrapper',
				lifeStreamButton: '.live-stream__bar-button',
				liveIndicator: '.headline--live',
				liveHeadline: 'headline--live'
			}
		};
		this.dataOptions = this.$component.data('options') || '{}';
		this.dataOptions = this.dataOptions ? $.parseJSON(this.dataOptions.replace(/'/g, '"')) : {};
		this.options = $.extend({}, this.defaults, this.dataOptions);
		this.init();
	};

	liveStream.prototype = {

		init: function init() {
			this.isActive = false;
			this.lifePost = this.options.selectors.lifePost;

			this.$lifePublishDate = $('time.article-date-published[itemprop=datePublished]');
			this.$lifeMetaPublishDate = $('meta[itemprop=datePublished]');

			this.$wrapper = this.$component.find(this.options.selectors.lifeStreamWrapper);
			this.$btn = this.$component.find(this.options.selectors.lifeStreamButton);
			this.$window = $(window);

			this.livestream_enabled = this.options.livestream_enabled === 'true';
			this.livestream_url = this.options.live_stream_url;
			this.timeout = +this.options.refresh_interval * 1000;

			this.timestamp = 0;
			this.livePostList = [];

			this.cookieName = 'liveStreamAutoRefresh' + window.location.pathname.replace(/\//g, '_');
			this.timer = null;

			this.needsRefresh = false;

			if (!window.CQ && this.livestream_enabled) {
				this.isActive = true;
				this.setEvents();
				this.findNewestTimestampFromDOM();
				this.populateLivepostList();
				this.checkCookieSettings();
			} else {
				this.die(window.CQ);
			}
		},

		populateLivepostList: function populateLivepostList() {
			var _this = this;

			_this.livePostList = [];
			$.each(_this.$component.find(_this.lifePost), function (index, element) {
				_this.livePostList[index] = {
					id: $(element).attr('id'),
					html: element
				};
			});
		},

		setEvents: function setEvents() {
			var _this = this;

			if (_this.$btn) {
				_this.$btn.on('click', function () {
					if (_this.$btn.hasClass('js-button-is-on')) {
						_this.setCookieSetting(false);
						_this.stopAutoRefresh();
						_this.setButtonsState(false);
					} else {
						_this.setCookieSetting(true);
						_this.startAutoRefresh();
						_this.setButtonsState(true);
					}
				});
			}
		},

		setButtonsState: function setButtonsState(value) {
			if (value) {
				this.$btn.addClass('js-button-is-on');
			} else {
				this.$btn.removeClass('js-button-is-on');
			}
		},

		checkCookieSettings: function checkCookieSettings() {
			var state = Cookies.get(this.cookieName);

			if (!state) {
				// if no cookie - use true as a default value
				this.setCookieSetting(true);
			}

			if (state === 'false') {
				this.stopAutoRefresh();
				this.setButtonsState(false);
			} else {
				// true or undefined
				this.startAutoRefresh();
				this.setButtonsState(true);
			}
		},

		die: function die(editor) {
			this.stopAutoRefresh();
			if (!editor) {
				this.$component.find(this.options.selectors.lifeStreamBar).remove();
				$(this.options.selectors.liveHeadline).addClass(this.options.classes.disabledLiveHeadline);
			}
		},

		setCookieSetting: function setCookieSetting(value) {
			this.autorefresh = value;
			Cookies.set(this.cookieName, value, {
				expires: 5,
				path: window.location.pathname
			});
		},

		startAutoRefresh: function startAutoRefresh() {
			this.autoRefresh();
		},

		autoRefresh: function autoRefresh() {
			var _this = this;
			_this.liveReload();
			this.timer = setTimeout(function () {
				_this.autoRefresh();
			}, _this.timeout);
		},

		stopAutoRefresh: function stopAutoRefresh() {
			clearTimeout(this.timer);
			delete this.timer;
		},

		findIndexByKeyValue: function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
			for (var i = 0; i < arraytosearch.length; i++) {
				if (arraytosearch[i][key] == valuetosearch) {
					return i;
				}
			}
			return null;
		},

		liveReload: function liveReload() {
			var _this = this;

			var url = _this.livestream_url.replace('TIMESTAMP.json', this.timestamp + '.json');

			var posts = '[]';

			var currentPosition = 0;

			if (!_this.isActive) {
				return;
			} else {
				_this.isActive = false;
			}

			_this.populateLivepostList();

			$.ajax({
				url: url,
				method: 'GET',
				timeout: 5000,
				cache: false,
				dataType: 'text',
				isModified: true
			}).done(function (response) {
				currentPosition = _this.$window.scrollTop();
				var json = JSON.parse(response);
				_this.isActive = json.refresh;

				if (json.posts) {
					_this.findNewestTimestampFromJson(json.posts);
					_this.cleanPosts(json.posts);
					_this.modifyOrAddPosts(json.posts);
					_this.reorderPosts(json.posts);
					_this.initPosts();

					// iso format
					if (json.iso8601FormattedPublicationDate) {
						_this.updatePostTimeIso(json.iso8601FormattedPublicationDate);
					}

					// string format
					if (json.dateAndTimeFormattedPublicationDate) {
						_this.updatePostTimeString(json.dateAndTimeFormattedPublicationDate);
					}

					_this.$window.scrollTop(currentPosition);
				}
				if (!_this.isActive) {
					_this.die();
				}
			});
		},

		updatePostTimeIso: function updatePostTimeIso(value) {
			this.$lifePublishDate.attr('datetime', value);
			this.$lifeMetaPublishDate.attr('content', value);
		},

		updatePostTimeString: function updatePostTimeString(value) {
			this.$lifePublishDate.text(value);
		},

		findNewestTimestampFromDOM: function findNewestTimestampFromDOM() {
			var _this = this;

			var timestamp = _this.timestamp;

			_this.populateLivepostList();

			if (!_this.needsRefresh) {
				$.each(_this.livePostList, function (index, element) {
					var domTimestamp = $(element.html).data('timestamp');
					if (domTimestamp > timestamp) {
						timestamp = domTimestamp;
					}
				});
			} else {
				_this.needsRefresh = false;
				timestamp = 0;
			}

			_this.timestamp = timestamp;
		},

		findNewestTimestampFromJson: function findNewestTimestampFromJson(json) {
			var _this = this;

			var timestamp = _this.timestamp;

			if (!_this.needsRefresh) {
				$.each(json, function (index, element) {
					if (element.modificationTimestamp > timestamp) {
						timestamp = element.modificationTimestamp;
					}
				});
			} else {
				_this.needsRefresh = false;
				timestamp = 0;
			}

			_this.timestamp = timestamp;
		},

		cleanPosts: function cleanPosts(json) {
			var _this = this;

			$.each(_this.livePostList, function (index, element) {
				var jsonIndex = _this.findIndexByKeyValue(json, 'postId', element.id);
				if (jsonIndex == null) {
					_this.livePostList[jsonIndex] = undefined;
					_this.$wrapper.find('#' + element.id).remove();
				}
			});
		},

		modifyOrAddPosts: function modifyOrAddPosts(json) {
			var _this = this;

			$.each(json, function (index, element) {
				var $tag = _this.$wrapper.find('#' + element.postId);
				if (element.html) {
					if ($tag.length) {
						$tag.replaceWith(element.html);
					} else {
						if (_this.$wrapper.find(_this.lifePost).eq(index).length) {
							_this.$wrapper.find(_this.lifePost).eq(index).after(element.html);
						} else {
							_this.$wrapper.append(element.html);
						}
					}
				} else if (!$tag.length) {
					// if JSON element doesn't have HTML ensure that content is already in DOM, if element is missing then it needs to be downloaded again
					_this.needsRefresh = true;
				}
			});
		},

		reorderPosts: function reorderPosts(json) {
			var _this = this;

			var domIndex = null;

			var tag = null;

			$.each(json, function (index, element) {
				tag = document.getElementById(element.postId);
				domIndex = $(_this.lifePost).index(tag);
				if (index != domIndex) {
					_this.$wrapper.find(_this.lifePost).eq(index).before($(tag));
				}
			});
		},

		initPosts: function initPosts() {
			// Recall image loader for inline responsive images
			$('.live-post .lazy-image').each(function () {
				tmg.lazyImage.createImage(this);
			});

			// re-run the Opta widget init if $jqOpta exists
			if ('$jqOpta' in window) {
				$jqOpta.widgetStart();
			}
		}

	};

	$.fn.telegraph_liveStream = function (ops) {
		return this.each(function () {
			var $this = $(this);
			if (!$this.data('live_stream')) {
				$this.data('live_stream', new liveStream(this));
			}
		});
	};

	init = function init() {
		$('.js-live-stream').telegraph_liveStream();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
/* Paywall component */
;(function ($, document) {
	'use strict';

	var init;

	var Paywall = function Paywall(context, options) {
		this.$paywall = $(context);

		this.options = options;
		this.config = {};

		this.init();
	};

	Paywall.prototype = {

		defaults: {
			screenReaderOnlyLinkSelector: 'a.sr-only:first'
		},

		init: function init() {
			this.config = $.extend({}, this.defaults, this.options);

			this.screenReaderOnlyLink = this.$paywall.find(this.config.screenReaderOnlyLinkSelector);

			this.appendReturnURL();
			this.setInitialFocus();

			this.attachEvents();
		},

		attachEvents: function attachEvents() {
			var _this = this;
			$('body').on('focus blur', 'a', function () {
				if (!$(this).parents('.paywall').length) {
					_this.setInitialFocus();
				}
			});
		},

		appendReturnURL: function appendReturnURL() {
			var elementsToModify = this.$paywall.find('a, area');
			$.each(elementsToModify, function (i, tag) {
				var $tag = $(tag);
				$tag.attr('href', $tag.attr('href').replace(/redirectTo=/i, 'redirectTo=' + encodeURIComponent(document.location.href)));
			});
		},

		setInitialFocus: function setInitialFocus() {
			if (this.screenReaderOnlyLink.length) {
				this.screenReaderOnlyLink.focus();
			}
		}
	};

	init = function init() {
		var $paywalls = $('.paywall');

		var paywalls = [];

		$paywalls.each(function () {
			// initiate once
			if (!$.data(this, 'paywall')) {
				$.data(this, 'paywall', paywalls.push(new Paywall(this)));
			}
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'telegraph_StickyVideo';

	var className = 'sticky-video';

	var pluginNameInit = pluginName + '_init';

	var selector = '.' + className;

	var stickyVideoInit = 'sticky-video-init';

	var sequenceAreaSelector = '.sequence-area';

	var videoOuterSelector = '.sticky-video__outer';

	var videoContainerSelector = '.sticky-video__container';

	var videoSelector = '.video-player';

	var videoResizedClass = 'sticky-video--resized';

	var videoStickyClass = 'sticky-video--sticky';

	var telegraph_StickyVideo = function telegraph_StickyVideo(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.$outer = $(elem).find(videoOuterSelector);
		this.$container = $(elem).find(videoContainerSelector);
		this.$video = $(elem).find(videoSelector);
		this.$sequenceArea = $(elem).closest(sequenceAreaSelector);
		if (this.$sequenceArea.length === 0) {
			this.$sequenceArea = this.$container;
		}

		this.dataOptions = this.$elem.data('options') ? $.parseJSON(this.$elem.data('options').replace(/'/g, '"')) : {};
		this.domElements = {};

		this.eventsInitialised = false;
	};

	telegraph_StickyVideo.prototype = {
		defaults: {
			minVideoHeight: 220,
			maxVideoHeight: 0,
			maxVideoWidth: 0,
			videoRatio: 0,
			mediaQuery: 'xs',
			activeViewport: {
				'md': true,
				'lg': true,
				'xl': true
			}
		},

		init: function init() {
			var body = $('body');

			var _this = this;

			if (!body.data(stickyVideoInit)) {
				body.data(stickyVideoInit, 1);
			}

			// Ten loops max
			if (body.data(stickyVideoInit) <= 10) {
				this.options = $.extend({}, this.defaults, this.dataOptions, this.options);

				this.options.maxVideoHeight = Math.floor(this.$container.height());

				if (this.options.maxVideoHeight > 0) {
					this.options.maxVideoWidth = Math.floor(this.$sequenceArea.width());
					this.options.videoOffsetTop = Math.floor(this.$container.offset().top);
					this.options.videoRatio = this.options.maxVideoWidth / this.options.maxVideoHeight;
					this.options.offSetControl = this.getSequencePositionTop();

					if (this.viewportSticky()) {
						this.$elem.css('height', this.options.maxVideoHeight + parseInt(this.$outer.css('padding-top')) + parseInt(this.$outer.css('padding-bottom')));
						this.$container.css('height', this.options.maxVideoHeight);
					}

					this.initEvents();
				} else {
					setTimeout(function () {
						// DOM is not ready yet as video has no height
						$(selector)[pluginName]();
						body.data(stickyVideoInit, body.data(stickyVideoInit) + 1);
					}, 1000);
				}
			}
			return this;
		},

		initEvents: function initEvents() {
			var _restartEvent;var _this = this;

			if (!_this.eventsInitialised) {
				_restartEvent = $.proxy(_this.restart, _this);

				_this.eventsInitialised = true;

				$(document).on('tmg:ooyala-player-breakpoint-class-set', function () {
					_this.options.mediaQuery = ''; // reset the mediaQuery value so restart works regardless
					_restartEvent();
					// Fixes scrolling problem...
					// The Ooyala video component is using CSS to controll the ability to show
					// the controllers bar by looking at the video size, not at the screen size :-(
					_this.$elem.find('.tmgv-bp-min-xxs, .tmgv-bp-min-xs, .tmgv-bp-min-sm, .tmgv-bp-min-md').removeClass('tmgv-bp-min-xs tmgv-bp-min-sm tmgv-bp-min-md tmgv-bp-max-xxs tmgv-bp-max-xs tmgv-bp-max-sm tmgv-bp-max-md').addClass('tmgv-bp-min-xs tmgv-bp-max-lg');
				});

				$(window).resize(_restartEvent);

				this.observeScroll();
			}
		},

		restart: function restart() {
			if (this.options.mediaQuery != window.tmg.getMediaQuery()) {
				$('body').data(stickyVideoInit, 0);

				this.resetStyles();

				// ititialise the component again
				this.init();

				$(window).trigger('scroll');
			}
		},

		viewportSticky: function viewportSticky() {
			return typeof this.options.activeViewport[window.tmg.getMediaQuery()] === 'boolean' && this.options.activeViewport[window.tmg.getMediaQuery()] === true;
		},

		resetStyles: function resetStyles() {
			// be sure we reset everything
			this.$elem.css('height', 'auto');
			this.$container.css('height', 'auto');
			this.$container.css('width', 'auto');
			this.$video.css('height', 'auto');
			this.$video.css('width', 'auto');
			this.$outer.removeClass(videoResizedClass);
			this.$outer.removeClass(videoStickyClass);
			this.options.mediaQuery = window.tmg.getMediaQuery();
			this.options.maxVideoWidth = Math.floor(this.$sequenceArea.width());
			this.options.offSetControl = this.getSequencePositionTop();
		},

		getSequencePositionTop: function getSequencePositionTop() {
			return this.$sequenceArea.get(0).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
		},

		observeScroll: function observeScroll() {
			var _this = this;

			$(window).scroll(function () {
				var scroll = $(window).scrollTop();

				var diff = _this.options.maxVideoHeight + _this.options.videoOffsetTop - scroll;

				var sticky = false;

				var newHeight;var newWidth;

				var _restartEvent = $.proxy(_this.restart, _this);

				if (_this.options.offSetControl != _this.getSequencePositionTop()) {
					_this.options.mediaQuery = ''; // reset the mediaQuery value so restart works regardless
					_restartEvent();
				} else if (_this.viewportSticky()) {
					// if scroll is less than the video offset
					if (scroll > _this.options.videoOffsetTop) {
						// resize
						_this.$outer.addClass(videoResizedClass);

						newHeight = diff;
						if (newHeight <= _this.options.minVideoHeight) {
							// then newHeight = minHeight
							// position fixed, top 0 by adding a class
							_this.$outer.addClass(videoStickyClass);
							newHeight = _this.options.minVideoHeight;
							sticky = true;
						} else {
							_this.$outer.removeClass(videoStickyClass);
						}

						newWidth = Math.floor(_this.options.videoRatio * newHeight);
						// else
					} else {
						_this.$outer.removeClass(videoResizedClass);
						_this.$outer.removeClass(videoStickyClass);
						newHeight = _this.options.maxVideoHeight;
						newWidth = Math.floor(_this.options.videoRatio * newHeight);
					}

					if (sticky) {
						_this.$container.css('padding-top', 0).css('height', 'auto');
					} else {
						_this.$container.css('padding-top', _this.options.maxVideoHeight - newHeight).css('height', _this.options.maxVideoHeight);
					}

					_this.$video.css('height', newHeight).css('width', newWidth);
				}
			}).trigger('scroll');
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// only initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new telegraph_StickyVideo(this, options).init());
			}
		});
	};
	$.fn[pluginNameInit] = function () {
		// alias, so you can initiate without needing the selector
		$(selector)[pluginName]();
	};

	init = function init() {
		$(selector)[pluginName]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;

	var pluginName = 'timelabels';

	var pluginNameInit = pluginName + '_init';

	var pluginDoneClass = pluginName + '-done';

	var selector = ".list-of-entities[data-timelabels='true']";

	var listOfItemsItemSelector = '.list-of-entities__item';

	var dateTimeClass = 'm_meta-property__date';

	var dateTimeContainerSelector = '.' + dateTimeClass;

	var dateSelector = dateTimeContainerSelector + '-date';

	var separatorSelector = dateTimeContainerSelector + '-separator';

	var timeSelector = dateTimeContainerSelector + '-time';

	var dateTimeDescriptorClass = dateTimeClass + '-descriptor';

	var dateTimeDescriptorSelector = '.' + dateTimeDescriptorClass;

	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var Timelabels = function Timelabels(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.dataOptions = this.$elem.data('options') ? $.parseJSON(this.$elem.data('options').replace(/'/g, '"')) : {};
		this.dateTimeElements = {};
		this.itemsElements = {};
		this.interval = null;

		// Don't make me think! Some constants to help reading the code correctly
		this.oneMinute = 60;
		this.oneHour = 3600;

		this.now = this.options && this.options.now ? this.options.now : Date.now();
		this.date = new Date(this.now);
		this.nowTimestamp = this.now / 1000 | 0;

		var m = this.date.getMonth() * 1 + 1;

		this.dateTodayZeroHours = new Date(this.date.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (this.date.getDate() < 10 ? '0' : '') + this.date.getDate());

		this.todayZeroHoursTimestamp = this.dateTodayZeroHours.getTime() / 1000;
	};

	Timelabels.prototype = {
		/*  */
		defaults: {
			autoUpdate: false
		},

		init: function init() {
			this.options = $.extend({}, this.defaults, this.dataOptions, this.options);

			// get every time tags around
			this.findItems();

			// get every dateTime tags around
			this.findDateTimeElements();

			// add our descriptors
			this.addDescriptors();

			// foreach time, create the descriptor considering the local timestamp
			this.updateDescriptorsString();

			if (this.options.autoUpdate) {
				setInterval(this.updateDescriptorsString, 1000);
			}

			return this;
		},

		findItems: function findItems() {
			this.itemsElements = this.$elem.find(listOfItemsItemSelector);
		},

		findDateTimeElements: function findDateTimeElements() {
			this.dateTimeElements = this.itemsElements.find(dateTimeContainerSelector);
		},

		addDescriptors: function addDescriptors() {
			this.dateTimeElements.find(dateTimeDescriptorSelector).remove();
			this.dateTimeElements.append($('<span>').addClass(dateTimeDescriptorClass));
		},

		updateDescriptorsString: function updateDescriptorsString() {
			var _this = this;
			$.each(this.itemsElements, function (i, item) {
				item = $(item);
				var articleDate;var printString;var h;

				var articleTimestampMs = item.data('timestamp') * 1;

				var articleTimestamp = articleTimestampMs / 1000;

				var elapsedMinutesSincePublication = Math.floor(_this.nowTimestamp - articleTimestamp);

				// IF TODAY
				if (articleTimestamp >= _this.todayZeroHoursTimestamp) {
					// < 1 min ago
					if (elapsedMinutesSincePublication < 1) {
						printString = '&lt;1m';
						// < 60 min ago
					} else if (Math.ceil(elapsedMinutesSincePublication / _this.oneMinute) < 60) {
						printString = Math.ceil(elapsedMinutesSincePublication / _this.oneMinute) + 'm';
					} else {
						articleDate = new Date(articleTimestampMs);

						printString = item.find(timeSelector).text().replace(/[^0-9\:]/g, '');

						if (item.find(timeSelector).text() == '12:00am') {
							printString = '00:00';
						}
						// if PM, then make it 24hs
						else if (item.find(timeSelector).text().toLowerCase().indexOf('pm') != -1) {
								h = parseFloat(printString.replace(':', '.'));
								if (h < 12) {
									h += 12;
								}
								printString = (h.toFixed(2) + '').replace('.', ':');
							}
					}
					// dd Mon yyyy
				} else {
					printString = item.find(dateSelector).text();
				}

				item.find(dateSelector).hide();
				item.find(separatorSelector).hide();
				item.find(timeSelector).hide();

				item.find(dateTimeDescriptorSelector).html(printString);
			});
			this.$elem.addClass(pluginDoneClass);
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new Timelabels(this, options).init());
			}
		});
	};

	$.fn[pluginNameInit] = function (options) {
		$(selector)[pluginName](options);
	};

	init = function init() {
		$(selector)[pluginNameInit]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($, window, document) {
	// 'use strict';
	var init;

	var pluginName = 'timebreaks';

	var pluginNameInit = pluginName + '_init';

	var pluginDoneClass = pluginName + '-done';

	// Versions

	var timebreakDaySplitterClass = 'day-splitter';

	var itemHasTimebreakClassPrefix = 'item-has-timebreak-';

	var selector = ".list-of-entities[data-timebreaks='true']";

	var listOfEntitiesSelector = '.list-of-entities';

	var listOfEntitiesItemSelector = '.list-of-entities__item';

	var componentHeaderSelector = '.component-header';

	// Template

	var timebreakSelector = '.m_timebreak';

	var timebreakIntroTextSelector = '.component-subheading';

	var timebreakMainTextSelector = '.m_meta-property__date-date';

	var timebreakTimeTagSelector = '.m_meta-property__date';

	var timebreakTemplate = '<div class="component-header m_timebreak">' + '<h2 class="component-heading">' + '<time class="m_meta-property__date" datetime="">' + '<span class="m_meta-property__date-date"></span>' + '</time>' + '</h2>' + '<p class="component-subheading"></p>' + '</div>';

	// loop helpers

	var _counter = 0;

	var _lastCheckedItem = 0;

	var _lastPrintedBreak = '';

	var _timeBreakPosition = false;

	var Timebreaks = function Timebreaks(elem, options) {
		this.options = options;
		this.elem = elem;
		this.$elem = $(elem);
		this.dataOptions = {};
		this.dateTimeElements = {};
		this.itemsElements = {};
		this.interval = null;

		this.now = this.options && this.options.now ? this.options.now : Date.now();
		this.date = new Date(this.now);
		this.nowHours = this.date.getHours();
		this.nowTimestamp = this.now / 1000 | 0;

		var m = this.date.getMonth() * 1 + 1;
		var d = this.date.getDate() * 1;

		this.dateTodayZeroHours = new Date(this.date.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (this.date.getDate() < 10 ? '0' : '') + this.date.getDate());
		this.todayZeroHoursTimestamp = this.dateTodayZeroHours.getTime() / 1000;
	};

	Timebreaks.prototype = {
		defaults: {

			// Dictionary
			dictionary: {
				// Easier to work with arrays as we can plug to their indexes
				weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				hours: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty One', 'Twenty Two', 'Twenty Three'],

				/** Labels
                * You can call an internal method by passing it's name as string
                * You can also pass a function, which will then be called passing the item's timestamp as param
                * Your function should return a time tag as DOM object. You can use the timeTagTemplate
                * firstTimebreakMain : function(timestamp){return $('<time>')}
                */
				labels: {
					timeTimebreakIntro: '',
					timeTimebreakMain: 'timeTimebreakMain',

					dayTimebreakIntro: '',
					dayTimebreakMain: 'dayTimebreakMain'
				}
			},
			autoUpdate: false
		},

		init: function init() {
			this.options = $.extend({}, this.defaults, this.dataOptions, this.options);

			// get every time tags around
			this.findItems();

			// add timebreaks
			this.addTimebreaks();

			if (this.options.autoUpdate) {
				var _this = this;
				setInterval(function () {
					_this.addTimebreaks();
				}, 1000);
			}

			return this;
		},

		findItems: function findItems() {
			this.itemsElements = this.$elem.find(listOfEntitiesItemSelector);
		},

		removeTimebreaks: function removeTimebreaks() {
			this.$elem.find(timebreakSelector).remove();
			this.$elem.removeClass(function (index, css) {
				var re = new RegExp('(^|\s)' + itemHasTimebreakClassPrefix + '\S+', 'g');
				return (css.match(re) || []).join(' ');
			});
		},

		dayNth: function dayNth(day) {
			if (day > 3 && day < 21) {
				return day + 'th';
			}
			switch (day % 10) {
				case 1:
					return day + 'st';
				case 2:
					return day + 'nd';
				case 3:
					return day + 'rd';
				default:
					return day + 'th';
			}
		},

		getLabel: function getLabel(labelKey, timestamp) {
			if (typeof this.options.dictionary.labels[labelKey] === 'function') {
				return this.options.dictionary.labels[labelKey](timestamp);
			} else if (typeof this[this.options.dictionary.labels[labelKey]] === 'function') {
				return this[this.options.dictionary.labels[labelKey]](timestamp);
			}
			return this.options.dictionary.labels[labelKey];
		},

		// Deprecated (for now, so don't delete it yet!)
		firstTimebreakIntro: function firstTimebreakIntro(timestamp) {
			// Weekday Nth Month
			var articleDate = new Date(timestamp);

			var WD = this.options.dictionary.weekDays[articleDate.getDay()];

			var DDth = this.dayNth(articleDate.getDate());

			var MON = this.options.dictionary.months[articleDate.getMonth()];
			return WD + ' ' + DDth + ' ' + MON;
		},

		timeTimebreakMain: function timeTimebreakMain(timestamp) {
			// Over N hour(s) ago
			var articleDate = new Date(timestamp);

			var H = (this.nowHours - articleDate.getHours()) % 24;
			return 'More than ' + this.options.dictionary.hours[H - 1] + ' hour' + (H > 1 ? 's' : '') + ' ago';
		},

		dayTimebreakMain: function dayTimebreakMain(timestamp) {
			// Weekday N Month YYYY
			var articleDate = new Date(timestamp);

			var WD = this.options.dictionary.weekDays[articleDate.getDay()];

			var MON = this.options.dictionary.months[articleDate.getMonth()];

			var D = articleDate.getDate();

			var Y = articleDate.getFullYear();
			return WD + ' ' + D + ' ' + MON + ' ' + Y;
		},

		timeToDatetimeAttribute: function timeToDatetimeAttribute(timestamp) {
			// YYYY-MM-DDTHH:II:SS
			var articleDate = new Date(timestamp);
			return articleDate.getFullYear() + '-' + (articleDate.getMonth() < 9 ? '0' : '') + (articleDate.getMonth() + 1) + '-' + (articleDate.getDate() < 10 ? '0' : '') + articleDate.getDate() + 'T00:00:00';
		},

		addTimebreaks: function addTimebreaks() {
			var _this = this;

			// Clean up
			this.removeTimebreaks();

			$.each(this.itemsElements, function (i, item) {
				// i is 0 as many times as many lists we have. Weird!
				// So we are using this _counter to solve the problem.
				_counter++;

				// The first element in the lists will never get a timebreak above it
				// We can't have 2 timebreaks consecutively placed on the list
				if (_counter == 1 || _timeBreakPosition == 'bottom') {
					_lastCheckedItem = item;
					_timeBreakPosition = false;
					return true;
				}

				item = $(item);

				// No timebreak under a visible header
				if (i == 0 && item.closest(listOfEntitiesSelector + ':first').find('>' + componentHeaderSelector).length && item.closest(listOfEntitiesSelector + ':first').find('>' + componentHeaderSelector).css('display') != 'none') {
					_lastCheckedItem = item;
					_timeBreakPosition = false;
					return true;
				}

				var articleDate;var HH;var printString;

				var ul = item.parents(selector)[0];

				var articleTimestampMs = item.data('timestamp') * 1;

				var articleTimestamp = articleTimestampMs / 1000;

				var elapsedMinutesSincePublication = Math.floor(_this.nowTimestamp - articleTimestamp);

				var timeBreakPosition = false;

				var introString = '';

				var mainString = '';

				var klass = '';

				var $timeBreakElement;

				articleDate = new Date(articleTimestampMs);

				// IF TODAY
				if (articleTimestamp >= _this.todayZeroHoursTimestamp) {
					HH = articleDate.getHours();

					// Did we already print this hour?
					if (_lastPrintedBreak == HH || (_this.date.getTime() - articleDate.getTime()) / 60000 < 60) {
						// do nothing
						_lastCheckedItem = item[0];
						_timeBreakPosition = false;
						return true;
					}

					introString = _this.getLabel('timeTimebreakIntro', articleTimestampMs);
					mainString = _this.getLabel('timeTimebreakMain', articleTimestampMs);
					_lastPrintedBreak = HH;
					timeBreakPosition = 'top';

					klass = timebreakDaySplitterClass;

					// IF NOT TODAY
				} else {
					mainString = _this.getLabel('dayTimebreakMain', articleTimestampMs);
					// Did we already print this day?
					if (_lastPrintedBreak == mainString) {
						// do nothing
						_lastCheckedItem = item[0];
						_timeBreakPosition = false;
						return true;
					}

					introString = _this.getLabel('dayTimebreakIntro', articleTimestampMs);

					_lastPrintedBreak = mainString;
					timeBreakPosition = 'top';
				}

				$timeBreakElement = $(timebreakTemplate).addClass(klass);
				$timeBreakElement.find(timebreakIntroTextSelector).html(introString);
				$timeBreakElement.find(timebreakMainTextSelector).html(mainString);
				$timeBreakElement.find('time').attr('datetime', _this.timeToDatetimeAttribute(articleTimestampMs));

				// if first element in the current list
				if (i == 0) {
					// we don't want 2 timebreaks in the same list item
					if ($(_lastCheckedItem).find(componentHeaderSelector).length) {
						_lastCheckedItem = item;
						_timeBreakPosition = false;
						return true;
					}
					timeBreakPosition = 'bottom';
					$(_lastCheckedItem).addClass(itemHasTimebreakClassPrefix + timeBreakPosition).append($timeBreakElement);
				} else {
					item.addClass(itemHasTimebreakClassPrefix + timeBreakPosition).prepend($timeBreakElement);
				}

				_lastCheckedItem = item[0];
				_timeBreakPosition = timeBreakPosition;
			});
			this.$elem.addClass(pluginDoneClass);
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			// initiate once
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new Timebreaks(this, options).init());
			}
		});
	};

	$.fn[pluginNameInit] = function (options) {
		$(selector)[pluginName](options);
	};

	init = function init() {
		$(selector)[pluginNameInit]();
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
(self["tmg.build"]=self["tmg.build"]||[]).push([[81],{86:()=>{!function(t,e,n,i,o,s){"use strict";const a={commentCountDelay:18e4,convConfig:{siteId:"",articleId:"",collectionMeta:"",initialNumVisible:5,disableAvatars:!0,readOnly:!1,datetimeFormat:{minutesUntilAbsoluteTime:-1,absoluteFormat:"d MMM yyyy h:mma"}}};class r{constructor(e,i={}){return this.options=t.extend(!0,{},a,i),this.status="initial",this.element=e,this.links=e.querySelectorAll("a[href]"),this.loadButton=e.querySelector(".comments-block__load"),this.loginContainer=e.querySelector(".comments-block__login-cta-container"),this.jumpLinks=n.querySelectorAll(".comment-cta"),this.counts=n.querySelectorAll('[data-js="comment-count"]'),this.commentingConfig=this.getCommentingConfig(),this}init(){s.isFeatureEnabled()&&this.options.articleCommentingConfig&&(this.injectViafouraScript(),this.bindViafouraEvents(),this.initJumpLinks(),this.initViafouraCommentCount(),this.initLoginBox(),this.makeCommentsVisible())}makeCommentsVisible(){this.element.classList.add("is-visible"),Array.prototype.slice.call(this.jumpLinks).forEach((t=>t.classList.add("is-visible")))}onHashChange(){this.checkUrlHash()&&this.viafouraLoadButtonClick()}initJumpLinks(){Array.prototype.slice.call(this.jumpLinks).forEach((t=>{t.addEventListener("click",(()=>i.scrollTo(this.element)))}))}initLoginBox(){o.isLoggedIn()||(Array.prototype.slice.call(this.links).forEach((t=>{t.setAttribute("href",tmg.updateRedirectParam(t.href,n.location.href))})),this.loginContainer.classList.add("is-visible"))}checkUrlHash(){return location.hash.substr(1)===this.element.id}openComments(){this.element.classList.add("is-open")}getCommentingConfig(){const t=this.element.getAttribute("data-options");return!!t&&JSON.parse(t)}initViafouraCommentCount(){const t=t=>{this.counts.forEach((e=>{e.querySelector('[data-js="comment-count__number"]').innerHTML=`${t}`,e.parentNode.classList.add("is-visible")})),e.dataLayer.comments=t};if(this.commentingConfig){const e=this.commentingConfig.convConfig.articleId,n=`https://livecomments.viafoura.co/v4/livecomments/${this.commentingConfig.convConfig.viafouraEnvironmentId}/content-containers/comment-count-and-status/by-container-ids`,i=localStorage.getItem(`tmg.commenting.count-${e}`);i&&t(i),this.getViafouraCommentCount(n,e).then((n=>{n&&(localStorage.setItem(`tmg.commenting.count-${e}`,n),t(n>9999?"10k +":n))}))}}getViafouraCommentCount(t,e){return fetch(t,{method:"POST",headers:{Accept:"application/json"},body:`["${e}"]`}).then((t=>t.status>=200&&t.status<300?Promise.resolve(t):Promise.reject(new Error(t.statusText)))).then((t=>t.json())).then((t=>t[0]&&t[0].commentCount?t[0].commentCount:0),(t=>(console.log("error getting data from viafoura",t),!1)))}bindViafouraEvents(){this.loadButton.addEventListener("click",this.viafouraLoadButtonClick.bind(this)),e.addEventListener("hashchange",this.onHashChange.bind(this)),this.counts[0].addEventListener("click",(()=>{e.dataLayer.event=["commentCountTop"]})),this.counts[1].addEventListener("click",(()=>{e.dataLayer.event=["commentCountBottom"]}))}viafouraLoadButtonClick(){const t=n.querySelector("[data-label-loading]");t.innerHTML=t.dataset.labelLoading,this.loadButton.classList.add("loading"),e.dataLayer.event="showComments";const i=n.querySelector('[data-js="comment-viafoura"]').querySelector(".vf3-comments");this.loadViafouraListeners(),i&&this.openComments()}injectViafouraScript(){var t;e.RUM.mark("js_load_viafoura_start"),(t="//cdn.viafoura.net/vf-v2.js",new Promise(((e,i)=>{{const i=n.createElement("script");i.setAttribute("src",t),i.addEventListener("load",e,!1),i.setAttribute("defer","true"),n.querySelector("head").appendChild(i)}}))).then((()=>{e.RUM.mark("js_load_viafoura_end")}))}loadViafouraListeners(){e.vfQ=e.vfQ||[],e.vfQ.push((()=>{e.vf.$subscribe("commenting","loaded",(()=>{this.openComments()})),e.vf.$subscribe("comment","created",(()=>{const t=new CustomEvent("commentsEvent",{detail:{eventNum:tmg.page.isApp?"event41":"event248"}});e.dispatchEvent(t),e.dataLayer.commentType="comment",e.dataLayer.event="commented"})),e.vf.$subscribe("comment-reply","posted",(()=>{const t=new CustomEvent("commentsEvent",{detail:{eventNum:tmg.page.isApp?"event42":"event249"}});e.dispatchEvent(t),e.dataLayer.commentType="reply",e.dataLayer.event="commented"}))}))}}const c="telegraph_commenting";t.fn[c]=function(e){return this.each((function(){t.data(this,c)||t.data(this,c,new r(this,e).init())}))},tmg.pageReady((function(){Array.prototype.slice.call(n.querySelectorAll(".comments-block")).filter((e=>t(e).attr("data-options").length>0)).forEach((e=>{t(e)[c](JSON.parse(e.dataset.options))}))}))}(tmgJQ,window,document,tmg.page,tmg.user,tmg.commenting)}},t=>{t(t.s=86)}]);
;(function ($, document, tracking) {
	init = function init() {
		var $midArticleWrapper = $('[data-js="mid-article-slot"] a'); // this has to be a jQuery object for the tracking API

		$midArticleWrapper.click(function (event) {
			// needs to use Jquery because the dtm 'api' expects things to be jquery
			var $eventTarget = $(event.target);
			var $anchorClicked = $(this);
			var linkLabel = tracking.readLinkLabel($anchorClicked, $eventTarget);
			var pagePath = tracking.readPagePath();
			var linkType = tracking.readElementClicked($eventTarget);
			var trackingString = encodeURIComponent(tracking.buildAnalyticsString('list-of-entities_mid-article-slot', '', linkLabel, linkType, pagePath));
			if (tracking.isDtmEnabled()) {
				window._satellite.setCookie('tmgComponentTracking', trackingString, 1);
			}
		});
	};
	window.tmg.pageReady(init);
})(tmgJQ, document, TMG_COMPONENT_TRACKING);
"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[816,2],{969:(t,o,i)=>{i.d(o,{Z:()=>l});var s=i(384);class e{constructor(t,o){this.tooltipMainClass="js-tooltip-main",this.tooltipCloseClass="js-tooltip-close",this.tooltipArrowClass="js-tooltip-arrow",this.tooltipShowClass="overlay-tooltip--is-visible",this.tooltipOffset=5,this.target=t,this.settings=o,this.buildTooltip()}buildTooltip(){this.createWrapper(),this.createMarkup(),this.bindEvents()}createWrapper(){const t=document.createElement("div");t.className="overlay-tooltip__wrapper",this.settings.wrapperStyle&&t.setAttribute("style",this.settings.wrapperStyle),t.style.position="relative",t.style.overflow="visible",this.wrapElement(this.target,t),this.tooltipWrapper=this.target.parentNode}createMarkup(){const{buttons:t}=this.settings||!1,o=document.createElement("div");o.className=`overlay-tooltip overlay-tooltip--${this.settings.positionY}-${this.settings.positionX} ${this.tooltipMainClass}`;let i=`<button class="overlay-tooltip__close ${this.tooltipCloseClass}"></button>\n\t\t\t\t\t\t<span class="overlay-tooltip__arrow ${this.tooltipArrowClass}"></span>\n\t\t\t\t\t\t<div class="overlay-tooltip__content">${this.settings.content}</div>`;t&&(i+='<div class="overlay-tooltip__btn-wrapper">',t.forEach((t=>{i+=`<a href="${t.url}" class="overlay-tooltip__button ${t.alternate?"overlay-tooltip__button--alternate":""}">${t.label}</a>`})),i+="</div>"),o.innerHTML=i,this.tooltipWrapper.append(o),this.tooltip=this.tooltipWrapper.querySelector(`.${this.tooltipMainClass}`),this.closeTooltip=this.tooltipWrapper.querySelector(`.${this.tooltipCloseClass}`),this.arrowTooltip=this.tooltipWrapper.querySelector(`.${this.tooltipArrowClass}`),this.arrowWidth=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("border-bottom-width"),10)}getTooltipPosition(t){let o=0,i=0,s=t;for(;t;)o+=t.offsetLeft-t.scrollLeft+t.clientLeft,t=t.offsetParent;return i=window.innerWidth-(o+s.offsetWidth),{l:o,r:i}}setTooltipPosition(){const t=`${this.target.offsetHeight+this.arrowWidth+this.tooltipOffset}px`;"top"===this.settings.positionY&&(this.tooltip.style.bottom=t),"bottom"===this.settings.positionY&&(this.tooltip.style.top=t)}repositioningTooltip(){let t=this.getTooltipPosition(this.tooltip);t.l<0&&"right"===this.settings.positionX&&(this.tooltip.style.right=`${parseInt(window.getComputedStyle(this.tooltip).getPropertyValue("right"),10)+t.l}px`,this.arrowTooltip.style.right=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("right"),10)-t.l+"px"),t.r<0&&"left"===this.settings.positionX&&(this.tooltip.style.left=`${parseInt(window.getComputedStyle(this.tooltip).getPropertyValue("left"),10)+t.r}px`,this.arrowTooltip.style.left=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("left"),10)-t.r+"px")}resetPositioningTooltip(){this.tooltip.style.right="",this.tooltip.style.left="",this.setTooltipArrow()}setTooltipArrow(){const t=this.target.offsetWidth/2;"left"===this.settings.positionX&&(this.arrowTooltip.style.left=t-this.arrowWidth+"px"),"right"===this.settings.positionX&&(this.arrowTooltip.style.right=t-this.arrowWidth/2+"px")}wrapElement(t,o){t.parentNode.insertBefore(o,t),o.appendChild(t)}bindEvents(){this.closeTooltip.addEventListener("click",(()=>{this.hideTooltip()})),["orientationchange","resize"].forEach((t=>{window.addEventListener(t,(()=>{this.resetPositioningTooltip(),this.repositioningTooltip()}))}))}revealTooltip(){this.setTooltipPosition(),this.setTooltipArrow(),this.tooltip.classList.add(this.tooltipShowClass),this.repositioningTooltip()}hideTooltip(){this.tooltip.classList.remove(this.tooltipShowClass),this.resetPositioningTooltip()}}s.Z.create("Tooltip"),s.Z.create("tooltip"),tmg.tooltip=e;const l=e},384:(t,o,i)=>{i.d(o,{Z:()=>e}),window.tmg=window.tmg||{};const s=function(t){try{let o=tmg,i=t.split(".");return"tmg"===i[0]&&(i=i.slice(1)),i.forEach((t=>{void 0===o[t]&&(o[t]={}),o=o[t]})),o}catch(o){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=s;const e={create:s}}},t=>{t(t.s=969)}]);
// TODO Since when we do have snippets in core files?
;(function ($, window, document) {
	'use strict';

	var snippetGallery = function snippetGallery(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.domElements = {};
		this.customScrollEnabled = (cssua.ua.ie >= 9.0 || !cssua.ua.ie) && !$('body').hasClass('cq-wcm-edit') && !cssua.ua.mobile;
	};

	snippetGallery.prototype = {
		init: function init() {
			this.findDomElements();

			// CQ url redirect click
			$(this.domElements.$listItem).each(function () {
				$(this).find('a').each(function () {
					var $this = $(this);
					$this.off();
					$this.attr('data-url', $this.attr('href'));
					$this.attr('href', 'javascript:void(0);');
				});
			});

			this.cleanEmptyComponent();
			this.attachEvents();
			this.setHeadlineTags();
			this.setHeaderCounters();
			this.setCustomScrollbars();

			// Listen for orientation changes
			window.addEventListener('orientationchange', $.proxy(function () {
				this.moveToHeadlineTag($('.js-snippet-gallery__tags-wrapper .js-snippet-gallery__tags-item.js-item--active'));
				this.setCustomScrollbars();
			}, this), false);

			this.$elem.find('.list-of-entities:first-child .list-of-entities__item:first-child').trigger('click');

			return this;
		},

		// Find and cache some DOM elements
		findDomElements: function findDomElements() {
			this.domElements.$listComponent = this.$elem.find('.list-of-entities');
			this.domElements.$listItem = this.$elem.find('.list-of-entities__item');
			this.domElements.$listWrapper = this.$elem.find('.js-snippet-gallery__list-wrapper');
			this.domElements.$nextVideoControl = this.$elem.find('.js-snippet-gallery__nav-controls-next');
			this.domElements.$prevVideoControl = this.$elem.find('.js-snippet-gallery__nav-controls-prev');
			this.domElements.$snippetTagsWrapper = this.$elem.find('.js-snippet-gallery__tags-wrapper');
			this.domElements.$videoDisplay = this.$elem.find('.js-snippet-gallery__display');
			this.domElements.$videoDisplayWrapper = this.$elem.find('.js-snippet-gallery__video-wrapper');
			this.domElements.$videoScreenInfo = this.$elem.find('.js-snippet-gallery__info-box');
			this.domElements.$moduleEntityProperty = this.$elem.find('.m_entity-property-item[data-entity-property-item--name="Rating"]');
			this.domElements.$parentContainer = this.$elem.parents('.wide-screen-container');
			this.domElements.$backgroundImage = this.domElements.$parentContainer.find('.js-snippet-gallery__background');
		},

		// Attach some events to selectors
		attachEvents: function attachEvents() {
			this.domElements.$listItem.on('click', $.proxy(this.getItemMetadata, this));
			this.domElements.$nextVideoControl.on('click', $.proxy(this.nextVideo, this));
			this.domElements.$prevVideoControl.on('click', $.proxy(this.prevVideo, this));
		},

		// Set header counter
		setHeaderCounters: function setHeaderCounters() {
			var listContainers = this.$elem.find('.list-of-entities');
			listContainers.each(function (index) {
				var listContainersIndex = listContainers.eq(index);

				var listItemsNo = listContainersIndex.find('.list-of-entities__item').length;

				listContainersIndex.find('.component-heading').first().append('<i>' + listItemsNo + '</i>');
			});
		},

		// Get list header and display them as a tag
		// Check its position and animate the transition from one to an other
		setHeadlineTags: function setHeadlineTags() {
			var listHeaders = $('.list-of-entities').children('.component-header').children('h2');
			if (listHeaders.length >= 1) {
				for (var i = 0; i < listHeaders.length; i++) {
					var taggedItemsNo = listHeaders.parents('.list-of-entities').eq(i).find('.list-of-entities__item').length;
					this.domElements.$snippetTagsWrapper.append('<span class="js-snippet-gallery__tags-item snippet-gallery__tags-item">' + listHeaders.eq(i).html() + '</span>');
				};

				this.domElements.$snippetTagsWrapper.append('<span class="js-tags-item-hover-helper tags-item-hover-helper"></span>');

				// Get current label and move the hover helper to its position
				var headerTags = this.domElements.$snippetTagsWrapper.find('.js-snippet-gallery__tags-item');

				var that = this;

				headerTags.click(function () {
					var $this = $(this);

					var tagIndex = $this.index();

					that.moveToHeadlineTag($this);

					// Set the first time of the list as active
					that.domElements.$listWrapper.find('.list-of-entities:eq(' + tagIndex + ')').find('.list-of-entities__item').first().click();
				});

				headerTags.first().addClass('js-item--active');
			}
		},

		moveToHeadlineTag: function moveToHeadlineTag($tag) {
			var tagIndex = $tag.index();

			var hoverHelper = this.domElements.$snippetTagsWrapper.find('.js-tags-item-hover-helper');

			$tag.addClass('js-item--active');
			$tag.siblings('span').removeClass('js-item--active');

			hoverHelper.css({
				'left': $tag.position().left + 10 + 'px',
				'width': $tag.width() + 20 + 'px'
			});

			if (this.customScrollEnabled) {
				this.domElements.$listWrapper.mCustomScrollbar('scrollTo', this.domElements.$listWrapper.find('.list-of-entities:eq(' + tagIndex + ')'));
			} else if (cssua.ua.mobile) {
				var windowWidth = $(window).width();
				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.md) {
					this.domElements.$listWrapper.animate({
						scrollTop: this.domElements.$listWrapper.find('.list-of-entities:eq(' + tagIndex + ')').offset().top - this.domElements.$listWrapper.offset().top + this.domElements.$listWrapper.scrollTop()
					}, 200);
				};

				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.sm && windowWidth < tmg.viewport.mediaQueriesBreakpoints.md) {
					this.domElements.$listWrapper.animate({
						scrollLeft: this.domElements.$listWrapper.find('.list-of-entities:eq(' + tagIndex + ')').offset().left - this.domElements.$listWrapper.offset().left + this.domElements.$listWrapper.scrollLeft()
					}, 200);
				}
			}
		},

		// Get the metadata JSON from the list item
		getItemMetadata: function getItemMetadata(event) {
			var target = $(event.target);

			var item = target.hasClass('list-of-entities__item') ? target : target.parents('.list-of-entities__item');

			var itemMetadata = item.find('.list-of-entities__item-image').data('video') ? $.parseJSON(item.find('.list-of-entities__item-image').data('video').replace(/'/g, '"')) : {};

			// itemModuleRating       = item.find(this.domElements.$moduleEntityProperty),  // Used for the module rating will be used later on, DO NOT REMOVE

			var itemDataLinks = item.find('.list-of-entities__item-image').data('links') ? $.parseJSON(item.find('.list-of-entities__item-image').data('links').replace(/'/g, '"')) : {};

			var itemModuleRating = item.find('.entity-property-numeric-bar');
			// Remove this line when the modules are available

			var itemImage = item.find('.list-of-entities__item-image').data('frz-src-array');

			var itemQuote = item.find('.m_meta-property__quote').text();

			var videoPlayerScreen = '';

			if (itemModuleRating.is(':visible') == true) {
				var itemModuleRatingHtml = itemModuleRating.html();
			} else {
				var itemModuleRatingHtml = '';
			}

			// Check if quote exists
			if (itemQuote.length > 0) {
				var itemQuoteHtml = "'" + itemQuote + "'";
			} else {
				var itemQuoteHtml = '';
			}

			// Check if review link is available
			var linksButton = '';
			if (typeof itemDataLinks.review !== 'undefined' && itemDataLinks.review != '') {
				linksButton = '<a href="' + itemDataLinks.review + '" class="js-snippet-gallery__info-box-item snippet-gallery__info-box-item">' + '<strong>Read Review</strong> ' + '<span class="entity-property-numeric-bar">' + itemModuleRatingHtml + '</span>' + '<span class="js-item-quote">' + itemQuoteHtml + '</span>' + '</a>';
			}

			// Check if latest link is available
			var readMoreButton = '';
			if (typeof itemDataLinks.latest !== 'undefined' && itemDataLinks.latest.length != '') {
				readMoreButton = '<a href="' + itemDataLinks.latest + '" class="js-snippet-gallery__info-box-item snippet-gallery__info-box-item snippet-gallery__info-box-item-read-more"><span>Read More</span></a>';
			}

			// get the image with the biggest width and add '_filmblur' before the image type to get the path for the blurred image
			// matches the last dot ('.')
			var re = /(\.[^.]*)$/g;
			// parses and sorts the array of images decending based on their width property and gets the first element -  the largest one
			var baseImage = JSON.parse(itemImage.replace(/'/g, '"')).sort(function sortJsonByWidth(x, y) {
				return y.width - x.width;
			})[0];
			// adds '_filmblur' before the last dot ('.')
			var blurredImage = baseImage.src.replace(re, '_filmblur$1');

			var videoPlayerScreenInfo = $('<div class="js-snippet-gallery__info-box snippet-gallery__info-box">' + linksButton + readMoreButton + '</div>');

			if (typeof itemMetadata.id === 'undefined') {
				videoPlayerScreen = $('<div class="js-snippet-gallery__video-wrapper snippet-gallery__video-wrapper">' + '<div class="js-video-player video-player component">' + '<div class="js-video-player__component-content component-content">' + '<span class="js-video-player__image-container video-player__image-container" onclick="window.location=\'' + itemDataLinks.latest + '\'">' + '<a href="javascript:void(0);"><img data-frz-src-array="' + itemImage + '" class="js-video-player__image video-player__image" alt="video-player image"></a>' + '</span>' + '</div>' + '</div>' + '</div>');
			} else {
				videoPlayerScreen = $('<div class="js-snippet-gallery__video-wrapper snippet-gallery__video-wrapper">' + '<div class="js-video-player video-player component" data-options="{ \'videoId\': \'' + itemMetadata.id + '\', \'autoplay\': false, \'autoscale\': false, \'type\': \'' + itemMetadata.type + '\' }">' + '<div class="js-video-player__component-content component-content">' + '<span class="js-video-player__image-container video-player__image-container">' + '<img data-frz-src-array="' + itemImage + '" class="js-video-player__image video-player__image" alt="video-player image">' + '<span class="video-player__image-controls-wrapper">' + '<span class="video-player__image-controls">' + '<span class="js-video-player__image-controls-title video-player__image-controls-title">' + item.find('.list-of-entities__item-body-headline').text() + '</span>' + '<span class="js-video-player__image-controls-play video-player__image-controls-play"></span>' + '<span class="video-player__image-controls-duration">' + itemMetadata.duration + '</span>' + '</span>' + '</span>' + '</span>' + '<div class="js-video-player__player video-player__player"></div>' + '</div>' + '</div>' + '</div>');
			}

			var mainBackgroundImage = $('<div class="js-snippet-gallery__background snippet-gallery__background">' + '<span class="js-video-player__image-container video-player__image-container">' + '<img class="js-video-player__image video-player__image" alt="video-player image" src="' + blurredImage + '" >' + '</span>' + '</div>');

			// do not display the img tag in case an error occurs
			$(mainBackgroundImage).find('img.js-video-player__image.video-player__image').error(function () {
				$(this).hide();
			});

			// Remove/Add active state on the clicked item
			this.$elem.find('.list-of-entities__item.js-item--active').removeClass('js-item--active'); // Remove all active class from the items
			item.addClass('js-item--active'); // Add active class on the current clicked item

			// Check where the current item is
			// and move the set the top label as active
			var itemParentIndex = item.parents('.list-of-entities').index();

			var hoverHelper = this.domElements.$snippetTagsWrapper.find('.js-tags-item-hover-helper');

			var displayTags = this.domElements.$snippetTagsWrapper.find('.js-snippet-gallery__tags-item');

			var listHeaders = $('.list-of-entities').children('.component-header').children('h2');

			var displayTagsIndex = displayTags.eq(itemParentIndex);

			displayTagsIndex.addClass('js-item--active');
			displayTagsIndex.siblings('span').removeClass('js-item--active');

			if (listHeaders.length >= 1) {
				hoverHelper.css({
					'left': displayTagsIndex.position().left + 10 + 'px',
					'width': displayTagsIndex.width() + 20 + 'px'
				});
			}

			// Build/Distroy the video Screen
			this.domElements.$videoDisplayWrapper.replaceWith(videoPlayerScreen);
			this.domElements.$videoDisplayWrapper = videoPlayerScreen;
			this.domElements.$videoScreenInfo.replaceWith(videoPlayerScreenInfo);
			this.domElements.$videoScreenInfo = videoPlayerScreenInfo;
			this.domElements.$backgroundImage.replaceWith(mainBackgroundImage);
			this.domElements.$backgroundImage = mainBackgroundImage;

			// Apply lazyload to the images
			$('.js-snippet-gallery__video-wrapper .js-video-player__image').each(function () {
				// Make sure we only apply it if we don't have a src set
				if (this.src === '') {
					lzld(this);
				}
			});

			this.$elem.find('.js-video-player').telegraph_videoPlayer(this.$elem.find('.js-video-player').data('options') ? $.parseJSON(this.$elem.find('.js-video-player').data('options').replace(/'/g, '"')) : {});

			var currentItem = $('.snippet-gallery__list-wrapper').find('.js-item--active');

			var itemIndex = this.domElements.$listItem.index(currentItem);

			if (itemIndex > 0) {
				// Fade Left/Right the video player when the user clicks on the controlls
				var timeoutDuration = 200; // To get a beautyfull effect this must be the same as in the .scss file (snippet.gallery.scss) :)
				this.domElements.$videoDisplay.addClass('js-switch-left js-hide-video').removeClass('js-switch-right');
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.addClass('js-switch-right').removeClass('js-switch-left js-hide-video');
				}, this), timeoutDuration);
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.removeClass('js-switch-right');
				}, this), timeoutDuration * 3);
			}

			return false;
		},

		navigateVideo: function navigateVideo(direction) {
			var currentItem = $('.snippet-gallery__list-wrapper').find('.js-item--active');

			var newIndex = this.domElements.$listItem.index(currentItem);
			newIndex = direction == 'ltr' ? newIndex + 1 : newIndex - 1;

			if (newIndex >= this.domElements.$listItem.length) newIndex = 0;
			if (newIndex < 0) newIndex = this.domElements.$listItem.length - 1;

			var newItem = this.domElements.$listItem.eq(newIndex);

			newItem.trigger('click');

			// Check where the current item is
			// and move the set the top label as active
			var itemParentIndex = newItem.parents('.list-of-entities').index();

			var hoverHelper = this.domElements.$snippetTagsWrapper.find('.js-tags-item-hover-helper');

			var displayTags = this.domElements.$snippetTagsWrapper.find('.js-snippet-gallery__tags-item');

			var listHeaders = $('.list-of-entities').children('.component-header').children('h2');

			var displayTagsIndex = displayTags.eq(itemParentIndex);

			displayTagsIndex.addClass('js-item--active');
			displayTagsIndex.siblings('span').removeClass('js-item--active');

			if (listHeaders.length >= 1) {
				hoverHelper.css({
					'left': displayTagsIndex.position().left + 10 + 'px',
					'width': displayTagsIndex.width() + 20 + 'px'
				});
			}

			// Fade Left/Right the video player when the user clicks on the controlls
			var timeoutDuration = 200; // To get a beautiful effect this must be the same as in the .scss file (snippet.gallery.scss) :)
			if (direction == 'ltr') {
				this.domElements.$videoDisplay.addClass('js-switch-left js-hide-video').removeClass('js-switch-right');
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.addClass('js-switch-right').removeClass('js-switch-left js-hide-video');
				}, this), timeoutDuration);
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.removeClass('js-switch-right');
				}, this), timeoutDuration * 3);
			} else {
				this.domElements.$videoDisplay.addClass('js-switch-right js-hide-video').removeClass('js-switch-left');
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.addClass('js-switch-left').removeClass('js-switch-right js-hide-video');
				}, this), timeoutDuration);
				setTimeout($.proxy(function () {
					this.domElements.$videoDisplay.removeClass('js-switch-left');
				}, this), timeoutDuration * 3);
			}

			// Scroll to Next/Prev list element
			if (this.customScrollEnabled) {
				this.domElements.$listWrapper.mCustomScrollbar('scrollTo', this.domElements.$listWrapper.find('.mCSB_container').find(newItem));
			} else if (cssua.ua.mobile) {
				var windowWidth = $(window).width();
				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.md) {
					this.domElements.$listWrapper.animate({
						scrollTop: newItem.offset().top - this.domElements.$listWrapper.offset().top + this.domElements.$listWrapper.scrollTop()
					}, 200);
				};

				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.sm && windowWidth < tmg.viewport.mediaQueriesBreakpoints.md) {
					this.domElements.$listWrapper.animate({
						scrollLeft: newItem.offset().left - this.domElements.$listWrapper.offset().left + this.domElements.$listWrapper.scrollLeft()
					}, 200);
				}
			}
		},

		nextVideo: function nextVideo() {
			this.navigateVideo('ltr');
		},

		prevVideo: function prevVideo() {
			this.navigateVideo('rtl');
		},

		listWrapperWidth: function listWrapperWidth(windowWidth) {
			var totalWidth = 0;
			$('.js-snippet-gallery .list-of-entities').each(function () {
				var listContainerElementsNo = $(this).find('.list-of-entities__item').length;

				var listItemsWidth = $(this).find('.list-of-entities__item').width();

				var listHeaderWidth = $(this).find('.component-header').width();

				var $this = $(this);
				$this.css('width', listItemsWidth * listContainerElementsNo + listHeaderWidth + 'px');

				totalWidth += listItemsWidth * listContainerElementsNo + listHeaderWidth;

				$this.parent('.js-snippet-gallery__scroll-helper').css('width', totalWidth + 'px');
			});

			this.domElements.$listWrapper.css('width', windowWidth + 'px');
		},

		setCustomScrollbars: function setCustomScrollbars() {
			var windowWidth = $(window).width();
			if (this.customScrollEnabled) {
				this.domElements.$listWrapper.mCustomScrollbar('destroy');
				this.domElements.$listWrapper.removeClass('js-shadow-bot-active');
				this.domElements.$listWrapper.css('width', '370px');
				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.md) {
					this.domElements.$listWrapper.addClass('js-shadow-bot-active');
					$('.js-snippet-gallery .list-of-entities').css('width', '100%'); // Reset to 100% in case the portrait orientation was triggered first
					$('.js-snippet-gallery__scroll-helper').css('width', '100%'); // Reset to 100% in case the portrait orientation was triggered first
					this.domElements.$listWrapper.mCustomScrollbar({
						axis: 'y',
						keyboard: {
							scrollType: 'stepped'
						},
						mouseWheel: {
							scrollAmount: 50
						},
						autoExpandScrollbar: true,
						callbacks: {
							whileScrolling: function whileScrolling() {
								var $this = $(this);
								if (this.mcs.topPct > 5) {
									$this.addClass('js-shadow-top-active');
								} else {
									$this.removeClass('js-shadow-top-active');
								}

								if (this.mcs.topPct >= 99) {
									$this.removeClass('js-shadow-bot-active');
								} else {
									$this.addClass('js-shadow-bot-active');
								}
							},
							alwaysTriggerOffsets: false
						}
					});
				};

				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.sm && windowWidth < tmg.viewport.mediaQueriesBreakpoints.md) {
					this.listWrapperWidth(windowWidth);

					this.domElements.$listWrapper.mCustomScrollbar({
						axis: 'x',
						keyboard: {
							scrollType: 'stepped'
						},
						mouseWheel: {
							scrollAmount: 50
						},
						autoExpandScrollbar: true
					});
				}
			} else if (cssua.ua.mobile) {
				this.domElements.$listWrapper.css('width', '370px');
				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.md) {
					$('.js-snippet-gallery .list-of-entities').css('width', '100%'); // Reset to 100% in case the portrait orientation was triggered first
					$('.js-snippet-gallery__scroll-helper').css('width', '100%'); // Reset to 100% in case the portrait orientation was triggered first
					this.domElements.$listWrapper.addClass('js-default-scroll vertical');
					this.domElements.$listWrapper.removeClass('horizontal');
				};

				if (windowWidth >= tmg.viewport.mediaQueriesBreakpoints.sm && windowWidth < tmg.viewport.mediaQueriesBreakpoints.md) {
					this.listWrapperWidth(windowWidth);
					this.domElements.$listWrapper.addClass('js-default-scroll horizontal');
					this.domElements.$listWrapper.removeClass('vertical');
				}
			} else {
				this.domElements.$listWrapper.addClass('js-default-scroll');
			}
		},

		cleanEmptyComponent: function cleanEmptyComponent() {
			var componentContent = this.domElements.$listComponent.find('.js-list-of-entities.component-content');
			componentContent.each(function () {
				var $this = $(this);

				var listContainer = $this.find('.js-list-of-entities__container');

				if (!listContainer.is(':visible')) {
					$this.parent('.list-of-entities.component').remove();
				};
			});
		}
	};

	$.fn.telegraph_snippetGallery = function (options) {
		return this.each(function () {
			if (!$.data(this, 'telegraph_snippetGallery')) {
				if ($(window).width() >= tmg.viewport.mediaQueriesBreakpoints.sm) {
					$.data(this, 'telegraph_snippetGallery', new snippetGallery(this, options).init());
				} else {
					$.data(this, 'telegraph_snippetGallery', new snippetGallery(this, options).setHeaderCounters());
				}
			}
		});
	};

	$(document).ready(function () {
		$('.js-snippet-gallery').each(function () {
			var $this = $(this);
			$this.telegraph_snippetGallery();
		});

		// IE10 and above hover fix :)
		if (cssua.ua.ie >= 10.0) {
			$('.js-snippet-gallery__display').mouseenter(function () {
				$(this).addClass('ua-ie-mouse-on');
				$(this).mouseleave(function () {
					$(this).removeClass('ua-ie-mouse-on');
				});
			});
		};
	});
})(tmgJQ, window, document);
;(function ($, window, document) {
	'use strict';

	var init;
	var defaults = {
		classes: {
			jsrun: 'js-run', // maybe better if we had a no-js class at the body level (maybe - wouldn't be component specific?)
			hidden: 'js-hidden', // The class used to hide elements not wanted to display
			closed: 'closed', // The class given to closed sections
			block: 'js-accordion-section',
			trigger: 'js-accordion-section-trigger', // The class used to hold the trigger text
			content: 'js-accordion-section-body', // The class that wraps the section content
			header: 'js-accordion-section-header' // The class that wraps the section header
		},
		dataAttributes: {
			showSectionText: 'js-accordion-show-text',
			closeSectionText: 'js-accordion-close-text'
		},
		triggerText: {
			show: 'Open',
			close: 'Close'
		}
	};

	function Accordion(element, options) {
		// Extend the defaults with passed through options
		this.options = $.extend({}, defaults, options);

		// Create jQuery selectors for the elements
		this.$wrap = $(element);

		this.$wrap.addClass(this.options.classes.jsrun);

		this.options.triggerText.show = this.$wrap.data(this.options.dataAttributes.showSectionText) || this.options.triggerText.show;
		this.options.triggerText.close = this.$wrap.data(this.options.dataAttributes.closeSectionText) || this.options.triggerText.close;

		this.$blocks = this.$wrap.find('.' + this.options.classes.block);

		// Let's initialise the functionality
		this.init(this.options);
	}

	Accordion.prototype.init = function () {
		var that = this;

		this.$blocks.each(function () {
			var $block = $(this);
			var $header = $block.find('.' + that.options.classes.header);
			var $content = $block.find('.' + that.options.classes.content);
			var $trigger = $header.find('.' + that.options.classes.trigger);

			that.bindHeadersAsControls($header, $trigger, $content);
			$trigger.text(that.options.triggerText.close);
			$trigger.removeClass(that.options.classes.hidden);
		});
	};

	Accordion.prototype.bindHeadersAsControls = function ($header, $trigger, $content) {
		var that = this;
		// TODO: add keyboard bindings
		$header.on('click', function () {
			that.toggleSection($trigger, $header, $content);
		});
	};

	Accordion.prototype.toggleSection = function ($trigger, $header, $content) {
		var isOpen = $content.hasClass(this.options.classes.hidden);
		var newTriggerText = isOpen ? this.options.triggerText.close : this.options.triggerText.show;

		$content.toggleClass(this.options.classes.hidden);
		$header.toggleClass(this.options.classes.closed);
		$trigger.text(newTriggerText);
	};

	// TODO: implement this:
	Accordion.prototype.openAll = function () {};

	// TODO: implement this:
	Accordion.prototype.closeAll = function () {};

	$.fn.telegraph_accordion = function (options) {
		return this.each(function () {
			var $this = $(this);
			// Destroy existing instance to re-initiate
			if ($this.data('telegraph_accordion')) {
				$this.data('telegraph_accordion', null);
			}
			$this.data('telegraph_accordion', new Accordion(this, options));
		});
	};

	// Initialise the snippet call here for now
	init = function init() {
		$('.js-accordion').each(function () {
			var $this = $(this);
			// TODO: build options JSON from data-options than pass that in here?
			$this.telegraph_accordion();
		});
	};

	$(document).ready(init);
	$(document).on('tmg:page-loaded', init);
})(tmgJQ, window, document);
;(function ($) {
	'use strict';

	/*
   * Creates sticky functionality on
   *
   * Usage:
   *   1. Add .js-sticky-navs to your body
   *   2. Plugin will use selectors for nav menu and info bar and make them sticky by default
   *   3. Set overrides for these using [data-sticky-navs] on .js-sticky-navs
   *   3. The overrides should be the key that matches the selector in this.config.selectors
  */

	// Example options data attribute:
	// <div data-sticky-navs='["menu","infoBar"]'>

	function StickyNavBars(options) {
		this.config = {
			classes: {
				stuck: '--stuck',
				activeWp: 'section-menu__link--active',
				menu: 'section-menu',
				menuSection: 'section-menu-item',
				menuClone: 'section-menu--clone',
				menuOpen: 'section-menu--open',
				toggleButtonOpen: 'toggle-button--open',
				infoBar: 'info-bar',
				infoBarClone: 'info-bar--clone'
			},
			selectors: {
				menu: '.section-menu',
				menuClone: '.section-menu--clone',
				menuItem: '.section-menu__item',
				menuLink: '.section-menu__link',
				menuBarWaypoint: '.page__content',
				menuSection: '.section-menu-item',
				menuSectionTitle: '.section-menu-item__title',
				infoBar: '.info-bar',
				infoBarClone: 'info-bar--clone',
				pricePrefix: '.travel-price__prefix',
				toggleButton: '.toggle-button',
				infoBarWaypoint: '.keyInformationCard',
				leadAssetHeading: '.lead-asset h1',
				travelCtaLink: '.info-bar .travel-cta__link'
			}
		};

		// Shorthand references, since we have so many checks against config
		this.clss = this.config.classes;
		this.sels = this.config.selectors;

		// Event handlers organised into object to allow easy checking against this.toBeStuck array
		this.eventHandlers = {
			menu: function menu() {
				var self = this;

				$(this.sels.toggleButton + ', ' + this.sels.menuItem).on('click', function () {
					self.clones.menu.trigger('switchState', {
						state: !self.clones.menu.data('is-open')
					});
				});

				this.clones.menu.on('switchState', function (event, data) {
					var currentState = $(this).data('is-open');
					var newState = data.state;

					if (newState !== currentState) {
						$(this).data('is-open', newState).toggleClass(self.clss.menuOpen);
						$(self.sels.toggleButton).toggleClass(self.clss.toggleButtonOpen);
					}
				});

				$(this.sels.menu + ' a').on('click', function (event) {
					// Override default browser behaviour
					event.preventDefault();

					// Change hash string
					if (history.pushState) {
						history.pushState(null, null, $(this).attr('href'));
					}

					self.offsetPageForHash(location.hash);
				});
			},
			infoBar: function infoBar() {
				var self = this;

				$(this.sels.travelCtaLink).on('click', function (event) {
					// Override default browser behaviour
					event.preventDefault();

					// Change hash string
					if (history.pushState) {
						history.pushState(null, null, $(this).attr('href'));
					}

					self.offsetPageForHash(location.hash);
				});
			}
		};

		this.defaults = {
			toBeStuck: [this.sels.menu, this.sels.infoBar]
		};

		if (options) {
			this.toBeStuck = options.map(function (key) {
				return this.sels[key];
			}, this);
		} else {
			this.toBeStuck = this.defaults.toBeStuck;
		}

		// Replace the defaults with options argument, if provided
		// this.toBeStuck = (options) ? options : this.defaults.toBeStuck;

		this.clones = {};
		this.menuWaypoints = [];

		this.init();
	}

	StickyNavBars.prototype.init = function () {
		this.createClones();
		this.createWaypoints();
		this.addEventHandlers();

		// When page loads, if there's a hash string then do our offset magic stuff
		if (location.hash) {
			this.offsetPageForHash();
		}
	};

	StickyNavBars.prototype.isStickyEl = function (selector) {
		return this.toBeStuck.indexOf(selector) != -1;
	};

	StickyNavBars.prototype.createIdenticalTwin = function (selector, cloneClass) {
		// Creates a clone, appends to parent
		var jqEl = $(selector);
		var clone = jqEl.clone().addClass(cloneClass);

		jqEl.parent().append(clone);

		return clone;
	};

	StickyNavBars.prototype.adjustScrollAmount = function (stickySelector, oldYPosition) {
		// Support a third argument if we must check height of an element which is different
		// to the stickySelector
		var heightSelector = arguments[2] ? arguments[2] : stickySelector;

		return this.isStickyEl(stickySelector) ? oldYPosition -= $(heightSelector).outerHeight() : oldYPosition;
	};

	StickyNavBars.prototype.addEventHandlers = function () {
		Object.keys(this.eventHandlers).forEach(function (nav) {
			var selector = this.sels[nav];

			if (this.isStickyEl(selector)) {
				this.eventHandlers[nav].call(this);
			}
		}, this);
	};

	StickyNavBars.prototype.offsetPageForHash = function (hash) {
		// Offsets the page so sticky bars don't overlay desired content

		var hashStr = hash || location.hash;

		try {
			var infoBarWaypointTop = $(this.sels.infoBarWaypoint).offset().top;
			var menuBarWaypointTop = $(this.sels.menuBarWaypoint).offset().top;
		} catch (e) {
			throw new Error('Waypoint Selectors are not present');
		}

		try {
			// The 'natural' y position of the linked item
			var newYPosition = $(hashStr).offset().top;
		} catch (e) {
			throw new Error('No hash string provided!');
		}

		// Adjust scroll amount by clone heights as appropriate
		if (newYPosition >= menuBarWaypointTop) {
			// Using the height of a menu item (rather than menuClone)
			// accounts for the situation whereby the menu may not have closed by this point

			newYPosition = this.adjustScrollAmount(this.sels.menu, newYPosition, this.sels.menuItem);
		}

		if (newYPosition >= infoBarWaypointTop) {
			newYPosition = this.adjustScrollAmount(this.sels.infoBar, newYPosition);
		}

		// Adjust scroll amount with a bit of breathing space
		newYPosition -= 21;

		// Disable menu waypoints temporarily until after browser has scrolled to desired location
		// Otherwise incorrect menu items are highlighted

		if (this.isStickyEl(this.sels.menu)) {
			this.menuWaypoints.forEach(function (el, index) {
				el.disable();
			});
		}

		scrollTo(0, newYPosition);
		this.activateMenuItem(hashStr.replace('#', ''));

		if (this.isStickyEl(this.sels.menu)) {
			this.menuWaypoints.forEach(function (el, index) {
				el.enable();
			});
		}
	};

	StickyNavBars.prototype.activateMenuItem = function (id) {
		// Highlights a menu item

		var associatedItem = $(this.sels.menu).find('[href=#' + id + ']');

		$(this.sels.menuLink).removeClass(this.clss.activeWp);
		associatedItem.addClass(this.clss.activeWp);
	};

	StickyNavBars.prototype.createClones = function () {
		if (this.isStickyEl(this.sels.menu)) {
			// Clone menu bar

			this.clones.menu = this.createIdenticalTwin(this.sels.menu, this.clss.menuClone);

			// TODO: Take text from data attribute so it can use translations from model
			// Set data attribute and add Open/Close button to menu bar
			this.clones.menu.data('is-open', false).prepend('<div class="toggle-button">More</div>');
		}

		if (this.isStickyEl(this.sels.infoBar)) {
			var headingText = $(this.sels.leadAssetHeading).text();

			// Clone info bar
			this.clones.infoBar = this.createIdenticalTwin(this.sels.infoBar, this.clss.infoBarClone);

			// Content changes for info bar clone
			// TODO: Take text from data attribute so it can use translations from model
			this.clones.infoBar.find('.container').prepend('<h1 class="info-bar__heading">' + headingText + '</h1>');
			this.clones.infoBar.find(this.sels.pricePrefix).text('from');
		}
	};

	StickyNavBars.prototype.createWaypoints = function () {
		var self = this;

		if (this.isStickyEl(this.sels.menu)) {
			// Create waypoint for menu bar
			$(this.sels.menuBarWaypoint).waypoint({
				handler: function handler(direction) {
					self.clones.menu.toggleClass(self.clss.menu + self.clss.stuck);

					// If scrolling up and past the sticky menu waypoint, set open state to false
					if (direction === 'up') {
						self.clones.menu.trigger('switchState', {
							state: false
						});
					}
				}
			});

			// Create waypoints for each section
			$(this.sels.menuSection).each(function () {
				var wpInstance = new Waypoint({
					element: this,
					handler: function handler() {
						self.activateMenuItem(this.element.id);
					}
				});

				// Assign to an array to allow references
				self.menuWaypoints.push(wpInstance);
			});
		}

		if (this.isStickyEl(this.sels.infoBar)) {
			// Create waypoint for info bar
			$(this.sels.infoBarWaypoint).waypoint({
				handler: function handler() {
					self.clones.infoBar.toggleClass(self.clss.infoBar + self.clss.stuck);
				}
			});
		}
	};

	$('document').ready(function () {
		$.fn.telegraph_sticky_navs = function (options) {
			return this.each(function () {
				$(this).data('telegraph_sticky_navs', new StickyNavBars(options));
			});
		};

		$('.js-sticky-navs').each(function () {
			var el = $(this);
			var options = el.data('sticky-navs');

			el.telegraph_sticky_navs(options);
		});
	});
})(tmgJQ);
;(function ($) {
	'use strict';

	/*
   * Creates parallax effect on lazyloaded background images
   *
   * Usage:
   *   1. Add .js-lazy-parallax to your body or other element in your page
   *   2. Use defaults or pass options using [data-lazy-parallax] on .js-lazy-parallax
   *   3. Add new types (with supporting scss styles defined for matching class in this.config.classes) as you wish
  */

	// Example options data attribute:
	// <div data-lazy-parallax='[{"type":"parallax","identifier":"el1"},{"type":"fixed","identifier":"el2"}]'>

	// Note: Identifiers should be names that match this.config.dataAttribute on element to be made parallax

	function LazyLoadedParallax(options) {
		/*
     * 1. Plugin accepts options for which parent elements it should apply
     *    to (defaults to only lead asset and full width image)
     * 2. Each element takes a 'type,' fixed background or real parallax effect
     *    (see stylesheet)
     * 3. Looks for first occuring element to have [data-lazy-loaded] attribute
     *    then applies classes
    */

		this.defaults = [{
			type: 'parallax',
			identifier: 'fullWidthImage'
		}, {
			type: 'fixed',
			identifier: 'leadAsset'
		}];

		// Any new classes' keys must have matching corresponding type above

		this.config = {
			supportedTypes: ['parallax', 'fixed'],
			classes: {
				fixed: 'js-img-fixed',
				parallax: 'js-img-parallax'
			},
			intervalMs: 200,
			intervalMaxCount: 20,
			dataAttribute: 'data-lazy-parallax-id'
		};

		// Replace the defaults with options argument, if provided
		this.options = options || this.defaults;

		this.firstDomEl = '';
		this.allSelectorsByType = [];
		this.intervalCounter = 0;

		this.init();
	}

	LazyLoadedParallax.prototype.init = function () {
		this.convertIdentifiersToSelector();
		this.sortByType();

		// If the first supplied DOM element doesn't match, throw an error
		if ($(this.firstDomEl).length > 0) {
			this.prepareListener();
		} else {
			throw new Error('Lazy Parallax was not supplied a valid first element');
		}
	};

	LazyLoadedParallax.prototype.convertIdentifiersToSelector = function () {
		// Convert the identifiers in options object into selectors
		// e.g. turns leadAsset into '[data-lazy-parallax-id=leadAsset]'

		this.options.forEach(function (item, index) {
			this.options[index].identifier = '[' + this.config.dataAttribute + '=' + item.identifier + ']';
		}, this);
	};

	LazyLoadedParallax.prototype.setFirstDomEl = function (selector) {
		// Set the first occurring DOM element amongst all our selectors

		if ($(this.allSelectors).index(selector) === 0) {
			this.firstDomEl = selector;
		}
	};

	LazyLoadedParallax.prototype.sortByType = function () {
		// Outputs array of selectors by supported type
		this.config.supportedTypes.forEach(function (type) {
			this.allSelectorsByType[type] = [];

			// Create an array of the selectors for options matching this type

			this.options.filter(function (element) {
				return element['type'] === type;
			}).forEach(function (element) {
				var currSelector = element.identifier;

				// Add into array of all selectors
				this.allSelectorsByType[type].push(currSelector);

				this.setAllSelectors();
				this.setFirstDomEl(currSelector);
			}, this);
		}, this); // Note: 'this' within loop is the LazyLoadedParallax instance
	};

	LazyLoadedParallax.prototype.setAllSelectors = function () {
		// Retrieves every provided selector, regardless of type and stores it

		var allSelectors = [];

		Object.keys(this.allSelectorsByType).forEach(function (type) {
			this[type].forEach(function (selector) {
				allSelectors.push(selector);
			});
		}, this.allSelectorsByType);

		this.allSelectors = this.coerceToString(allSelectors);
	};

	LazyLoadedParallax.prototype.coerceToString = function (array) {
		return array + '';
	};

	LazyLoadedParallax.prototype.applyClasses = function () {
		// Apply relevant class to each selector of a particular type
		// This is what gives the parallax effect

		Object.keys(this.allSelectorsByType).forEach(function (type) {
			var className = this.config.classes[type];
			var selectors = this.coerceToString(this.allSelectorsByType[type]);

			$(selectors).addClass(className);
		}, this);
	};

	LazyLoadedParallax.prototype.prepareListener = function () {
		if ($(this.firstDomEl).find('img').data('lazy-loaded')) {
			// If our first element has lazy loaded
			// then we can apply our classes

			this.applyClasses();
			clearInterval(this.listenInterval);
		} else if (!this.listenInterval) {
			var self = this;

			// Otherwise set an interval to keep checking

			this.listenInterval = setInterval(function () {
				self.intervalCounter++;

				if (self.intervalCounter < self.config.intervalMaxCount) {
					self.prepareListener();
				} else {
					clearInterval(self.listenInterval);
					console.log('%c Lazy Parallax: Max interval count reached ', 'background: #222; color: #bada55');
				}
			}, this.config.intervalMs);
		}
	};

	$('document').ready(function () {
		$.fn.telegraph_lazy_parallax = function (options) {
			return this.each(function () {
				$(this).data('telegraph_lazy_parallax', new LazyLoadedParallax(options));
			});
		};

		// The selecting class can be applied to any element which is a parent
		// of all the elements you wish to be parallax. Usually body

		$('.js-lazy-parallax').each(function () {
			var el = $(this);
			var options = el.data('lazy-parallax');

			el.telegraph_lazy_parallax(options);
		});
	});
})(tmgJQ);
