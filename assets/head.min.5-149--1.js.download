tmg.createNamespace('tmg.viewport');

tmg.addEvent = function (elem, type, eventHandle) {
	if (elem === null || elem === undefined) {
		return;
	}

	if (elem.addEventListener) {
		elem.addEventListener(type, eventHandle, false);
	} else if (elem.attachEvent) {
		elem.attachEvent('on' + type, eventHandle);
	} else {
		elem['on' + type] = eventHandle;
	}
};
tmg.createNamespace('tmg.pageReady');

window.tmg.pageReady = function (fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
};
tmg.createNamespace('tmg.getMediaQuery');

tmg.getMediaQuery = function () {
	var defaultMQ = 'xxs';

	var body = document.body;

	var div = document.getElementById('tmgMediaQuery');
	if (!div && body) {
		div = document.createElement('div');
		div.id = 'tmgMediaQuery';
		body.appendChild(div);
	}
	if (!window.getComputedStyle || !body) {
		return defaultMQ;
	}
	return window.getComputedStyle(div, ':after').content.replace(/[^a-z]/g, '') || defaultMQ;
};
tmg.createNamespace('tmg.timer');

tmg.timer = function (callback, delay) {
	var _this = this;
	var timerId = void 0;
	var start = void 0;
	var remaining = delay;

	this.pause = function () {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};

	this.resume = function () {
		start = new Date();
		window.clearTimeout(timerId);

		timerId = window.setTimeout(function () {
			callback.call(_this);
		}, remaining);
	};

	this.stop = function () {
		window.clearTimeout(timerId);
		remaining = 0;
	};

	this.status = function () {
		return timerId;
	};

	this.resume();
};
tmg.createNamespace('tmg.throttle');

window.tmg.throttle = function (fn, threshhold) {
	threshhold = threshhold || 200;
	var last, deferTimer;
	return function () {
		var context = this;var now = +new Date();var args = arguments;
		if (last && now < last + threshhold) {
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

tmg.createNamespace('tmg.loadClientLibs');

tmg.loadClientLibs = {
	init: function init() {
		if (typeof yepnope === 'function') {
			var transposedClientlibs = this.transposeClientlibs(window.clientlibs);
			var yepnopeClientlibs = {
				load: transposedClientlibs.load,
				complete: function complete() {
					// console.log('All clientlibs loaded. Calling completeCallback\'s');
					var node = document.getElementsByTagName('script')[0];
					for (var index = 0; index < transposedClientlibs.completeCallback.length; index++) {
						var script = document.createElement('script');

						script.type = 'text/javascript';
						script[script.innerText ? 'innerText' : 'textContent'] = transposedClientlibs.completeCallback[index];

						node.parentNode.insertBefore(script, node);
					}
				}
			};

			yepnope(yepnopeClientlibs);
		}
	},
	transposeClientlibs: function transposeClientlibs(tmpObj, treeString, skipTest) {
		var response = {
			load: [],
			completeCallback: []
		};

		if (!!tmpObj['test'] && (skipTest === undefined || skipTest === false)) {
			// console.log('Testing clientlib with condition: "', tmpObj['test'], '" will be loaded if test eval result "', eval(tmpObj['test']), '" is false, was tested for clientlib tree path', treeString);
			if (!eval(tmpObj['test'])) {
				response = this.transposeClientlibs(tmpObj, (treeString ? treeString + '.' : '') + key, true);
			}
		} else {
			for (var key in tmpObj) {
				if (tmpObj.hasOwnProperty(key) && key !== 'test') {
					if (key === 'load') {
						// console.log( 'Adding clientlib LOAD', (!!treeString ? treeString + '.' : '') + key, tmpObj[key].toString() );
						response.load = response.load.concat(tmpObj[key]);
					} else if (key === 'completeCallback') {
						// console.log( 'Adding clientlib INLINE LOAD', (!!treeString ? treeString + '.' : '') + key, tmpObj[key].toString() );
						response.completeCallback = response.completeCallback.concat(tmpObj[key]);
					} else if (_typeof(tmpObj[key]) === 'object') {
						var tmpResponse = this.transposeClientlibs(tmpObj[key], (treeString ? treeString + '.' : '') + key);
						response.load = response.load.concat(tmpResponse.load);
						response.completeCallback = response.completeCallback.concat(tmpResponse.completeCallback);
					} else {
						console.warn('clientlib on ' + treeString + ' has an unsuported property of ' + key);
					}
				}
			}
		}

		return response;
	}
};
tmg.createNamespace('tmg.viewport');

tmg.viewport = {
	width: document.documentElement.clientWidth,
	// https://gist.github.com/joaocunha/7675924
	// dpr: (function(){ var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1; return dpr > 2 ? 2 : dpr; })(),
	dpr: 1,
	// From _variables SCSS file
	mediaQueriesBreakpoints: {
		xxs: 0,
		xs: 480,
		sm: 730,
		md: 988,
		lg: 1008,
		xl: 1328
	},
	// From _variables SCSS file
	containerSizes: {
		sm: 740,
		md: 960,
		lg: 1280
	}
};

tmg.getViewportWidth = function (excludeScroll) {
	if (typeof excludeScroll === 'undefined') {
		excludeScroll = true;
	}

	if (excludeScroll && document.documentElement.clientWidth >= 0) {
		return document.documentElement.clientWidth;
	} else if (excludeScroll && document.body && document.body.clientWidth >= 0) {
		return document.body.clientWidth;
	} else if (window.innerWidth >= 0) {
		return window.innerWidth;
	}

	return 0;
};
tmg.createNamespace('tmg.guid');

tmg.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	var r = Math.random() * 16 | 0;
	var v = c === 'x' ? r : r & 0x3 | 0x8;
	return v.toString(16);
});
;var print_uk_day = function print_uk_day(offset) {
	var dTh = function dTh(day) {
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
	};

	// FUTURE REFACTORING IN PLAN
	// A dictionary object will be created.

	var WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var day;var month;var weekDay;var date;var nowTime = new Date();

	if (isNaN(offset)) {
		offset = 0;
	}

	offset = offset * 1;

	date = new Date(nowTime.getTime() + offset + nowTime.getTimezoneOffset() * 60000);
	day = date.getDate();
	month = date.getMonth();
	weekDay = date.getDay();

	document.write('<span>' + WeekDays[weekDay] + ' ' + dTh(day) + ' ' + Months[month] + '</span>');
};
"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[661,2,768],{436:(t,e,s)=>{s.d(e,{Z:()=>a});var r=s(384),i=s(453);class n{constructor(){r.Z.create("tmg.page"),tmg.page={getMetaTag:this.getMetaTag,getMetaContent:this.getMetaContent,getPageType:this.getPageType,getPageTitle:this.getPageTitle,getChannel:this.getChannel,getBusinessSegment:this.getBusinessSegment,getCategory:this.getCategory,getContentType:this.getContentType,getArticleId:this.getArticleId,getPublishDate:this.getPublishDate,getKeywords:this.getKeywords,getLocation:this.getLocation,getLeadAssetLayout:this.getLeadAssetLayout,isArticle:this.isArticle,isSponsored:this.isSponsored,isGallery:this.isGallery,isGallery2:this.isGallery2,isPremium:this.isPremium,isApp:this.isApp.bind(this)}}getPageType(){return window.dataLayer&&window.dataLayer.pageType}getPageTitle(){return document.title}getChannel(){return this.getMetaContent("tmgads.channel")}getCategory(){return this.getMetaContent("DCSext.Category")}getBusinessSegment(){return this.getMetaContent("tmgads.businessSegment")}getContentType(){return this.getMetaContent("DCSext.Content_Type")}getArticleId(){return this.getMetaContent("tmgads.articleid")}getPublishDate(){return this.getMetaContent("DCSext.articleFirstPublished")}getKeywords(){return this.getMetaContent("keywords").split(",").map((t=>t.trim()))}getLocation(){return document.location}getMetaContent(t,e="content"){const s=this.getMetaTag(t);let r="generic";return s&&s.getAttribute(e)&&(r=s.getAttribute(e)),r}getMetaTag(t){return document.querySelector(`meta[name='${t}']`)}isArticle(){let t=!1;return["articleRenderer","articleRenderer2","longFormRenderer"].forEach((e=>{this.getPageType()===e&&(t=!0)})),t}isGallery(){return"galleryRenderer"===this.getPageType()}isGallery2(){return"galleryRenderer2"===this.getPageType()}isSponsored(){return"sponsored"===this.getBusinessSegment()}isPremium(){return"true"===this.getMetaContent("tmg.premium.state")}isApp(){return"true"===this.getMetaContent("tmg.app")}isAuthor(){return document.documentElement.hasAttribute("data-is-author")}getLeadAssetLayout(){return this.isArticle()&&document.querySelector("[data-lead-asset-layout]")?document.querySelector("[data-lead-asset-layout]").dataset.leadAssetLayout:this.isArticle()?"hidden":void 0}}i.Z.subscribe({topic:"tmg.page.ready",func:new n,runIfAlreadyPublished:!0});const a=new n},453:(t,e,s)=>{s.d(e,{Z:()=>n});var r=s(384);const i=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:t,func:e,runIfAlreadyPublished:s}){if("function"!=typeof e)return!1;if(s)for(let s=0;s<this.publishedTopics.length;s++)this.publishedTopics[s]===t&&e.call();const r=(this.UID+=1).toString();return this.topics.push({token:r,topic:t,func:e}),r}unsubscribe({topic:t}){for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics.splice(e,1)}publish({topic:t}){this.publishedTopics.push(t);for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics[e].func.call()}};r.Z.create("tmg.pubsub"),window.tmg.pubsub=i;const n=i},384:(t,e,s)=>{s.d(e,{Z:()=>i}),window.tmg=window.tmg||{};const r=function(t){try{let e=tmg,s=t.split(".");return"tmg"===s[0]&&(s=s.slice(1)),s.forEach((t=>{void 0===e[t]&&(e[t]={}),e=e[t]})),e}catch(e){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=r;const i={create:r}},951:(t,e,s)=>{s.d(e,{Z:()=>l});var r=s(384),i=s(436);const n=new RegExp(/\?[^#]*|(?=#)|$/),a=(()=>{const t={};return e=>t[e]||(t[e]=new RegExp(`([?&;]${e}(?=[=&;#]|$))=?([^&;#]*)`))})(),o=(t,e)=>{const s=a(e).exec(t);return s&&decodeURIComponent(s[2])},g=(t,e,s)=>{let r,g,c;return void 0===t&&(t=i.Z.getLocation().search),null===o(t,e)?(r=`${e}=${encodeURIComponent(s)}`,g=n.exec(t)[0],c=t.replace(n,(g.length?g+"&":"?")+r)):c=t.replace(a(e),`$1=${encodeURIComponent(s)}`),c},c=(t,e)=>{let s=e;if(null!==o(e,t)){let r,i=e.split("?")[0],n=(-1!==e.indexOf("?")?e.split("?")[1]:"").split("&");for(let e=n.length-1;e>=0;e-=1)r=n[e].split("=")[0],r===t&&n.splice(e,1);return s=i+(n.length>0?"?":"")+n.join("&"),s}return s},u=(t,e)=>{const s="redirectTo";return null!==o(t,s)?g(t,s,e):t};r.Z.create("tmg.GET_PARAM"),tmg.getQuerystringParam=o,tmg.setQuerystringParam=g,tmg.removeQuerystringParam=c,tmg.updateRedirectParam=u,location.search.substr(1).split("&").forEach((t=>{const e=t.split("=");e.length>1?tmg.GET_PARAM[e[0]]=decodeURIComponent(e[1]):tmg.GET_PARAM[e[0]]=""}));const l={matchParam:a,matchQuerystring:n,getQuerystringParam:o,removeQuerystringParam:c,setQuerystringParam:g,updateRedirectParam:u}}},t=>{t(t.s=951)}]);
// Polyfill for CustomEvent
(function () {
	if (typeof window.CustomEvent === 'function') {
		return false;
	}

	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles || false, params.cancelable || false, params.detail || undefined);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
})();
// polyfill for "".endsWith()
(function () {
	if (typeof String.prototype.endsWith === 'function') {
		return false;
	}

	String.prototype.endsWith = function (searchString, position) {
		var subjectString = this.toString();var lastIndex;
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
})();
// yepnope.js
// Version - 1.5.4pre
//
// by
// Alex Sexton - @SlexAxton - AlexSexton[at]gmail.com
// Ralph Holzmann - @ralphholzmann - ralphholzmann[at]gmail.com
//
// http://yepnopejs.com/
// https://github.com/SlexAxton/yepnope.js/
//
// Tri-license - WTFPL | MIT | BSD
//
// Please minify before use.
// Also available as Modernizr.load via the Modernizr Project
//
( function ( window, doc, undef ) {

var docElement            = doc.documentElement,
    sTimeout              = window.setTimeout,
    firstScript           = doc.getElementsByTagName( "script" )[ 0 ],
    toString              = {}.toString,
    execStack             = [],
    started               = 0,
    noop                  = function () {},
    // Before you get mad about browser sniffs, please read:
    // https://github.com/Modernizr/Modernizr/wiki/Undetectables
    // If you have a better solution, we are actively looking to solve the problem
    isGecko               = ( "MozAppearance" in docElement.style ),
    isGeckoLTE18          = isGecko && !! doc.createRange().compareNode,
    insBeforeObj          = isGeckoLTE18 ? docElement : firstScript.parentNode,
    // Thanks to @jdalton for showing us this opera detection (by way of @kangax) (and probably @miketaylr too, or whatever...)
    isOpera               = window.opera && toString.call( window.opera ) == "[object Opera]",
    isIE                  = !! doc.attachEvent && !isOpera,
    strJsElem             = isGecko ? "object" : isIE  ? "script" : "img",
    strCssElem            = isIE ? "script" : strJsElem,
    isArray               = Array.isArray || function ( obj ) {
      return toString.call( obj ) == "[object Array]";
    },
    isObject              = function ( obj ) {
      return Object(obj) === obj;
    },
    isString              = function ( s ) {
      return typeof s == "string";
    },
    isFunction            = function ( fn ) {
      return toString.call( fn ) == "[object Function]";
    },
    globalFilters         = [],
    scriptCache           = {},
    prefixes              = {
      // key value pair timeout options
      timeout : function( resourceObj, prefix_parts ) {
        if ( prefix_parts.length ) {
          resourceObj['timeout'] = prefix_parts[ 0 ];
        }
        return resourceObj;
      }
    },
    handler,
    yepnope;

  /* Loader helper functions */
  function isFileReady ( readyState ) {
    // Check to see if any of the ways a file can be ready are available as properties on the file's element
    return ( ! readyState || readyState == "loaded" || readyState == "complete" || readyState == "uninitialized" );
  }


  // Takes a preloaded js obj (changes in different browsers) and injects it into the head
  // in the appropriate order
  function injectJs ( src, cb, attrs, timeout, /* internal use */ err, internal ) {
    var script = doc.createElement( "script" ),
        done, i;

    timeout = timeout || yepnope['errorTimeout'];

    script.src = src;

    // Add our extra attributes to the script element
    for ( i in attrs ) {
        script.setAttribute( i, attrs[ i ] );
    }

    cb = internal ? executeStack : ( cb || noop );

    // Bind to load events
    script.onreadystatechange = script.onload = function () {

      if ( ! done && isFileReady( script.readyState ) ) {

        // Set done to prevent this function from being called twice.
        done = 1;
        cb();

        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null;
      }
    };

    // 404 Fallback
    sTimeout(function () {
      if ( ! done ) {
        done = 1;
        // Might as well pass in an error-state if we fire the 404 fallback
        cb(1);
      }
    }, timeout );

    // Inject script into to document
    // or immediately callback if we know there
    // was previously a timeout error
    err ? script.onload() : firstScript.parentNode.insertBefore( script, firstScript );
  }

  // Takes a preloaded css obj (changes in different browsers) and injects it into the head
  function injectCss ( href, cb, attrs, timeout, /* Internal use */ err, internal ) {

    // Create stylesheet link
    var link = doc.createElement( "link" ),
        done, i;

    timeout = timeout || yepnope['errorTimeout'];

    cb = internal ? executeStack : ( cb || noop );

    // Add attributes
    link.href = href;
    link.rel  = "stylesheet";
    link.type = "text/css";

    // Add our extra attributes to the link element
    for ( i in attrs ) {
      link.setAttribute( i, attrs[ i ] );
    }

    if ( ! err ) {
      firstScript.parentNode.insertBefore( link, firstScript );
      sTimeout(cb, 0);
    }
  }

  function executeStack ( ) {
    // shift an element off of the stack
    var i   = execStack.shift();
    started = 1;

    // if a is truthy and the first item in the stack has an src
    if ( i ) {
      // if it's a script, inject it into the head with no type attribute
      if ( i['t'] ) {
        // Inject after a timeout so FF has time to be a jerk about it and
        // not double load (ignore the cache)
        sTimeout( function () {
          (i['t'] == "c" ?  yepnope['injectCss'] : yepnope['injectJs'])( i['s'], 0, i['a'], i['x'], i['e'], 1 );
        }, 0 );
      }
      // Otherwise, just call the function and potentially run the stack
      else {
        i();
        executeStack();
      }
    }
    else {
      // just reset out of recursive mode
      started = 0;
    }
  }

  function preloadFile ( elem, url, type, splicePoint, dontExec, attrObj, timeout ) {

    timeout = timeout || yepnope['errorTimeout'];

    // Create appropriate element for browser and type
    var preloadElem = doc.createElement( elem ),
        done        = 0,
        firstFlag   = 0,
        stackObject = {
          "t": type,     // type
          "s": url,      // src
        //r: 0,        // ready
          "e": dontExec,// set to true if we don't want to reinject
          "a": attrObj,
          "x": timeout
        };

    // The first time (common-case)
    if ( scriptCache[ url ] === 1 ) {
      firstFlag = 1;
      scriptCache[ url ] = [];
    }

    function onload ( first ) {
      // If the script/css file is loaded
      if ( ! done && isFileReady( preloadElem.readyState ) ) {

        // Set done to prevent this function from being called twice.
        stackObject['r'] = done = 1;

        ! started && executeStack();

        // Handle memory leak in IE
        preloadElem.onload = preloadElem.onreadystatechange = null;
        if ( first ) {
          if ( elem != "img" ) {
            sTimeout(function(){ insBeforeObj.removeChild( preloadElem ) }, 50);
          }

          for ( var i in scriptCache[ url ] ) {
            if ( scriptCache[ url ].hasOwnProperty( i ) ) {
              scriptCache[ url ][ i ].onload();
            }
          }
        }
      }
    }


    // Setting url to data for objects or src for img/scripts
    if ( elem == "object" ) {
      preloadElem.data = url;
    } else {
      preloadElem.src = url;

      // Setting bogus script type to allow the script to be cached
      preloadElem.type = elem;
    }

    // Don't let it show up visually
    preloadElem.width = preloadElem.height = "0";

    // Attach handlers for all browsers
    preloadElem.onerror = preloadElem.onload = preloadElem.onreadystatechange = function(){
      onload.call(this, firstFlag);
    };
    // inject the element into the stack depending on if it's
    // in the middle of other scripts or not
    execStack.splice( splicePoint, 0, stackObject );

    // The only place these can't go is in the <head> element, since objects won't load in there
    // so we have two options - insert before the head element (which is hard to assume) - or
    // insertBefore technically takes null/undefined as a second param and it will insert the element into
    // the parent last. We try the head, and it automatically falls back to undefined.
    if ( elem != "img" ) {
      // If it's the first time, or we've already loaded it all the way through
      if ( firstFlag || scriptCache[ url ] === 2 ) {
        insBeforeObj.insertBefore( preloadElem, isGeckoLTE18 ? null : firstScript );

        // If something fails, and onerror doesn't fire,
        // continue after a timeout.
        sTimeout( onload, timeout );
      }
      else {
        // instead of injecting, just hold on to it
        scriptCache[ url ].push( preloadElem );
      }
    }
  }

  function load ( resource, type, dontExec, attrObj, timeout ) {
    // If this method gets hit multiple times, we should flag
    // that the execution of other threads should halt.
    started = 0;

    // We'll do 'j' for js and 'c' for css, yay for unreadable minification tactics
    type = type || "j";
    if ( isString( resource ) ) {
      // if the resource passed in here is a string, preload the file
      preloadFile( type == "c" ? strCssElem : strJsElem, resource, type, this['i']++, dontExec, attrObj, timeout );
    } else {
      // Otherwise it's a callback function and we can splice it into the stack to run
      execStack.splice( this['i']++, 0, resource );
      execStack.length == 1 && executeStack();
    }

    // OMG is this jQueries? For chaining...
    return this;
  }

  // return the yepnope object with a fresh loader attached
  function getYepnope () {
    var y = yepnope;
    y['loader'] = {
      "load": load,
      "i" : 0
    };
    return y;
  }

  /* End loader helper functions */
  // Yepnope Function
  yepnope = function ( needs ) {

    var i,
        need,
        // start the chain as a plain instance
        chain = this['yepnope']['loader'];

    function satisfyPrefixes ( url ) {
      // split all prefixes out
      var parts   = url.split( "!" ),
      gLen    = globalFilters.length,
      origUrl = parts.pop(),
      pLen    = parts.length,
      res     = {
        "url"      : origUrl,
        // keep this one static for callback variable consistency
        "origUrl"  : origUrl,
        "prefixes" : parts
      },
      mFunc,
      j,
      prefix_parts;

      // loop through prefixes
      // if there are none, this automatically gets skipped
      for ( j = 0; j < pLen; j++ ) {
        prefix_parts = parts[ j ].split( '=' );
        mFunc = prefixes[ prefix_parts.shift() ];
        if ( mFunc ) {
          res = mFunc( res, prefix_parts );
        }
      }

      // Go through our global filters
      for ( j = 0; j < gLen; j++ ) {
        res = globalFilters[ j ]( res );
      }

      // return the final url
      return res;
    }

    function getExtension ( url ) {
        return url.split(".").pop().split("?").shift();
    }

    function loadScriptOrStyle ( input, callback, chain, index, testResult ) {
      // run through our set of prefixes
      var resource     = satisfyPrefixes( input ),
          autoCallback = resource['autoCallback'],
          extension    = getExtension( resource['url'] );

      // if no object is returned or the url is empty/0 just exit the load
      if ( resource['bypass'] ) {
        return;
      }

      // Determine callback, if any
      if ( callback ) {
        callback = isFunction( callback ) ?
          callback :
          callback[ input ] ||
          callback[ index ] ||
          callback[ ( input.split( "/" ).pop().split( "?" )[ 0 ] ) ];
      }

      // if someone is overriding all normal functionality
      if ( resource['instead'] ) {
        return resource['instead']( input, callback, chain, index, testResult );
      }
      else {
        // Handle if we've already had this url and it's completed loaded already
        if ( scriptCache[ resource['url'] ] ) {
          // don't let this execute again
          resource['noexec'] = true;
        }
        else {
          scriptCache[ resource['url'] ] = 1;
        }

        // Throw this into the queue
        chain.load( resource['url'], ( ( resource['forceCSS'] || ( ! resource['forceJS'] && "css" == getExtension( resource['url'] ) ) ) ) ? "c" : undef, resource['noexec'], resource['attrs'], resource['timeout'] );

        // If we have a callback, we'll start the chain over
        if ( isFunction( callback ) || isFunction( autoCallback ) ) {
          // Call getJS with our current stack of things
          chain['load']( function () {
            // Hijack yepnope and restart index counter
            getYepnope();
            // Call our callbacks with this set of data
            callback && callback( resource['origUrl'], testResult, index );
            autoCallback && autoCallback( resource['origUrl'], testResult, index );

            // Override this to just a boolean positive
            scriptCache[ resource['url'] ] = 2;
          } );
        }
      }
    }

    function loadFromTestObject ( testObject, chain ) {
        var testResult = !! testObject['test'],
            group      = testResult ? testObject['yep'] : testObject['nope'],
            always     = testObject['load'] || testObject['both'],
            callback   = testObject['callback'] || noop,
            cbRef      = callback,
            complete   = testObject['complete'] || noop,
            needGroupSize,
            callbackKey;

        // Reusable function for dealing with the different input types
        // NOTE:: relies on closures to keep 'chain' up to date, a bit confusing, but
        // much smaller than the functional equivalent in this case.
        function handleGroup ( needGroup, moreToCome ) {
          if ( ! needGroup ) {
            // Call the complete callback when there's nothing to load.
            ! moreToCome && complete();
          }
          // If it's a string
          else if ( isString( needGroup ) ) {
            // if it's a string, it's the last
            if ( !moreToCome ) {
              // Add in the complete callback to go at the end
              callback = function () {
                var args = [].slice.call( arguments );
                cbRef.apply( this, args );
                complete();
              };
            }
            // Just load the script of style
            loadScriptOrStyle( needGroup, callback, chain, 0, testResult );
          }
          // See if we have an object. Doesn't matter if it's an array or a key/val hash
          // Note:: order cannot be guaranteed on an key value object with multiple elements
          // since the for-in does not preserve order. Arrays _should_ go in order though.
          else if ( isObject( needGroup ) ) {
            // I hate this, but idk another way for objects.
            needGroupSize = (function(){
              var count = 0, i
              for (i in needGroup ) {
                if ( needGroup.hasOwnProperty( i ) ) {
                  count++;
                }
              }
              return count;
            })();

            for ( callbackKey in needGroup ) {
              // Safari 2 does not have hasOwnProperty, but not worth the bytes for a shim
              // patch if needed. Kangax has a nice shim for it. Or just remove the check
              // and promise not to extend the object prototype.
              if ( needGroup.hasOwnProperty( callbackKey ) ) {
                // Find the last added resource, and append to it's callback.
                if ( ! moreToCome && ! ( --needGroupSize ) ) {
                  // If this is an object full of callbacks
                  if ( ! isFunction( callback ) ) {
                    // Add in the complete callback to go at the end
                    callback[ callbackKey ] = (function( innerCb ) {
                      return function () {
                        var args = [].slice.call( arguments );
                        innerCb && innerCb.apply( this, args );
                        complete();
                      };
                    })( cbRef[ callbackKey ] );
                  }
                  // If this is just a single callback
                  else {
                    callback = function () {
                      var args = [].slice.call( arguments );
                      cbRef.apply( this, args );
                      complete();
                    };
                  }
                }
                loadScriptOrStyle( needGroup[ callbackKey ], callback, chain, callbackKey, testResult );
              }
            }
          }
        }

        // figure out what this group should do
        handleGroup( group, !!always );

        // Run our loader on the load/both group too
        // the always stuff always loads second.
        always && handleGroup( always );
    }

    // Someone just decides to load a single script or css file as a string
    if ( isString( needs ) ) {
      loadScriptOrStyle( needs, 0, chain, 0 );
    }
    // Normal case is likely an array of different types of loading options
    else if ( isArray( needs ) ) {
      // go through the list of needs
      for( i = 0; i < needs.length; i++ ) {
        need = needs[ i ];

        // if it's a string, just load it
        if ( isString( need ) ) {
          loadScriptOrStyle( need, 0, chain, 0 );
        }
        // if it's an array, call our function recursively
        else if ( isArray( need ) ) {
          yepnope( need );
        }
        // if it's an object, use our modernizr logic to win
        else if ( isObject( need ) ) {
          loadFromTestObject( need, chain );
        }
      }
    }
    // Allow a single object to be passed in
    else if ( isObject( needs ) ) {
      loadFromTestObject( needs, chain );
    }
  };

  // This publicly exposed function is for allowing
  // you to add functionality based on prefixes on the
  // string files you add. 'css!' is a builtin prefix
  //
  // The arguments are the prefix (not including the !) as a string
  // and
  // A callback function. This function is passed a resource object
  // that can be manipulated and then returned. (like middleware. har.)
  //
  // Examples of this can be seen in the officially supported ie prefix
  yepnope['addPrefix'] = function ( prefix, callback ) {
    prefixes[ prefix ] = callback;
  };

  // A filter is a global function that every resource
  // object that passes through yepnope will see. You can
  // of course conditionally choose to modify the resource objects
  // or just pass them along. The filter function takes the resource
  // object and is expected to return one.
  //
  // The best example of a filter is the 'autoprotocol' officially
  // supported filter
  yepnope['addFilter'] = function ( filter ) {
    globalFilters.push( filter );
  };

  // Default error timeout to 10sec - modify to alter
  yepnope['errorTimeout'] = 1e4;

  // Webreflection readystate hack
  // safe for jQuery 1.4+ ( i.e. don't use yepnope with jQuery 1.3.2 )
  // if the readyState is null and we have a listener
  if ( doc.readyState == null && doc.addEventListener ) {
    // set the ready state to loading
    doc.readyState = "loading";
    // call the listener
    doc.addEventListener( "DOMContentLoaded", handler = function () {
      // Remove the listener
      doc.removeEventListener( "DOMContentLoaded", handler, 0 );
      // Set it to ready
      doc.readyState = "complete";
    }, 0 );
  }

  // Attach loader &
  // Leak it
  window['yepnope'] = getYepnope();

  // Exposing executeStack to better facilitate plugins
  window['yepnope']['executeStack'] = executeStack;
  window['yepnope']['injectJs'] = injectJs;
  window['yepnope']['injectCss'] = injectCss;

})( this, document );

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-flexbox-flexboxlegacy-csscolumns-inlinesvg-svg-touch-printshiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-csspositionsticky
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,


    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName,


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },

    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },


    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) {
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };


    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };



    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };
    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };



    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

	tests['csspositionsticky'] = function(){
		var prop = 'position:';
		var value = 'sticky';
		var el = document.createElement('a');
		var mStyle = el.style;
		var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

		mStyle.cssText = prop + prefixes.join(value + ';' + prop).slice(0, -prop.length);

		return mStyle.position.indexOf(value) !== -1;
	};


    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr;
     };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;

    Modernizr.mq            = testMediaQuery;

    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.0';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/\w+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

  /*------------------------------- Print Shiv -------------------------------*/

  /** Used to filter media types */
  var reMedia = /^$|\b(?:all|print)\b/;

  /** Used to namespace printable elements */
  var shivNamespace = 'html5shiv';

  /** Detect whether the browser supports shivable style sheets */
  var supportsShivableSheets = !supportsUnknownElements && (function() {
    // assign a false negative if unable to shiv
    var docEl = document.documentElement;
    return !(
      typeof document.namespaces == 'undefined' ||
      typeof document.parentWindow == 'undefined' ||
      typeof docEl.applyElement == 'undefined' ||
      typeof docEl.removeNode == 'undefined' ||
      typeof window.attachEvent == 'undefined'
    );
  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Wraps all HTML5 elements in the given document with printable elements.
   * (eg. the "header" element is wrapped with the "html5shiv:header" element)
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Array} An array wrappers added.
   */
  function addWrappers(ownerDocument) {
    var node,
        nodes = ownerDocument.getElementsByTagName('*'),
        index = nodes.length,
        reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
        result = [];

    while (index--) {
      node = nodes[index];
      if (reElements.test(node.nodeName)) {
        result.push(node.applyElement(createWrapper(node)));
      }
    }
    return result;
  }

  /**
   * Creates a printable wrapper for the given element.
   * @private
   * @param {Element} element The element.
   * @returns {Element} The wrapper.
   */
  function createWrapper(element) {
    var node,
        nodes = element.attributes,
        index = nodes.length,
        wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);

    // copy element attributes to the wrapper
    while (index--) {
      node = nodes[index];
      node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
    }
    // copy element styles to the wrapper
    wrapper.style.cssText = element.style.cssText;
    return wrapper;
  }

  /**
   * Shivs the given CSS text.
   * (eg. header{} becomes html5shiv\:header{})
   * @private
   * @param {String} cssText The CSS text to shiv.
   * @returns {String} The shived CSS text.
   */
  function shivCssText(cssText) {
    var pair,
        parts = cssText.split('{'),
        index = parts.length,
        reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
        replacement = '$1' + shivNamespace + '\\:$2';

    while (index--) {
      pair = parts[index] = parts[index].split('}');
      pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
      parts[index] = pair.join('}');
    }
    return parts.join('{');
  }

  /**
   * Removes the given wrappers, leaving the original elements.
   * @private
   * @params {Array} wrappers An array of printable wrappers.
   */
  function removeWrappers(wrappers) {
    var index = wrappers.length;
    while (index--) {
      wrappers[index].removeNode();
    }
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document for print.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivPrint(ownerDocument) {
    var shivedSheet,
        wrappers,
        data = getExpandoData(ownerDocument),
        namespaces = ownerDocument.namespaces,
        ownerWindow = ownerDocument.parentWindow;

    if (!supportsShivableSheets || ownerDocument.printShived) {
      return ownerDocument;
    }
    if (typeof namespaces[shivNamespace] == 'undefined') {
      namespaces.add(shivNamespace);
    }

    function removeSheet() {
      clearTimeout(data._removeSheetTimer);
      if (shivedSheet) {
          shivedSheet.removeNode(true);
      }
      shivedSheet= null;
    }

    ownerWindow.attachEvent('onbeforeprint', function() {

      removeSheet();

      var imports,
          length,
          sheet,
          collection = ownerDocument.styleSheets,
          cssText = [],
          index = collection.length,
          sheets = Array(index);

      // convert styleSheets collection to an array
      while (index--) {
        sheets[index] = collection[index];
      }
      // concat all style sheet CSS text
      while ((sheet = sheets.pop())) {
        // IE does not enforce a same origin policy for external style sheets...
        // but has trouble with some dynamically created stylesheets
        if (!sheet.disabled && reMedia.test(sheet.media)) {

          try {
            imports = sheet.imports;
            length = imports.length;
          } catch(er){
            length = 0;
          }

          for (index = 0; index < length; index++) {
            sheets.push(imports[index]);
          }

          try {
            cssText.push(sheet.cssText);
          } catch(er){}
        }
      }

      // wrap all HTML5 elements with printable elements and add the shived style sheet
      cssText = shivCssText(cssText.reverse().join(''));
      wrappers = addWrappers(ownerDocument);
      shivedSheet = addStyleSheet(ownerDocument, cssText);

    });

    ownerWindow.attachEvent('onafterprint', function() {
      // remove wrappers, leaving the original elements, and remove the shived style sheet
      removeWrappers(wrappers);
      clearTimeout(data._removeSheetTimer);
      data._removeSheetTimer = setTimeout(removeSheet, 500);
    });

    ownerDocument.printShived = true;
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  // expose API
  html5.type += ' print';
  html5.shivPrint = shivPrint;

  // shiv for print
  shivPrint(document);

}(this, document));
;

/**
	cssua.js
	User-agent specific CSS support

	Created: 2006-06-10-1635
	Modified: 2013-07-29-0009

	Copyright (c)2006-2013 Stephen M. McKamey
	Distributed under The MIT License.
*/

/**
 * @type {Object}
 */
var cssua = (

/**
 * @param html {Object} root DOM element
 * @param userAgent {string} browser userAgent string
 * @return {Object}
 */
function(html, userAgent) {
	'use strict';

	/*jslint regexp: false, browser: true */

	/**
	 * @const
	 * @type {string}
	 */
	var PREFIX = ' ua-';

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_Platform = /\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_Version = /([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_BlackBerry = /\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_Silk = /\bsilk-accelerated=true\b/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_FluidApp = /\bfluidapp\b/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_desktop = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_mobile = /(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/;

	/**
	 * @const
	 * @type {RegExp}
	 */
	var R_game = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/;

	/**
	 * The root CssUserAgent
	 * @type {Object}
	 */
	var cssua = {

		parse:
			/**
			 * @param uaStr {string}
			 * @return {Object}
			 */
			function(uaStr) {

				/**
				 * @type {Object}
				 */
				var ua = {};

				uaStr = (''+uaStr).toLowerCase();
				if (!uaStr) {
					return ua;
				}

				var i, count, raw = uaStr.split(/[()]/);
				for (var j=0, rawCount=raw.length; j<rawCount; j++) {
					if (j%2) {
						// inside parens covers platform identifiers
						var platforms = raw[j].split(';');
						for (i=0, count=platforms.length; i<count; i++) {
							if (R_Platform.exec(platforms[i])) {
								var key = RegExp.$1.split(' ').join('_'),
									val = RegExp.$2;

								// if duplicate entries favor highest version
								if ((!ua[key] || parseFloat(ua[key]) < parseFloat(val))) {
									ua[key] = val;
								}
							}
						}

					} else {
						// outside parens covers most version identifiers
						var uas = raw[j].match(R_Version);
						if (uas) {
							for (i=0, count=uas.length; i<count; i++) {
								var parts = uas[i].split(/[\/\s]+/);
								if (parts.length && parts[0] !== 'mozilla') {
									ua[parts[0].split(' ').join('_')] = parts.slice(1).join('-');
								}
							}
						}
					}
				}

				if (R_mobile.exec(uaStr)) {
					// mobile device indicators
					ua.mobile = RegExp.$1;
					if (R_BlackBerry.exec(uaStr)) {
						delete ua[ua.mobile];
						ua.blackberry = ua.version || RegExp.$3 || RegExp.$2 || RegExp.$1;
						if (RegExp.$1) {
							// standardize non-tablet blackberry
							ua.mobile = 'blackberry';
						} else if (ua.version === '0.0.1') {
							// fix playbook 1.0 quirk
							ua.blackberry = '7.1.0.0';
						}
					}

				} else if (R_desktop.exec(uaStr)) {
					// desktop OS indicators
					ua.desktop = RegExp.$1;

				} else if (R_game.exec(uaStr)) {
					// game console indicators
					ua.game = RegExp.$1;
					var game = ua.game.split(' ').join('_');

					if (ua.version && !ua[game]) {
						ua[game] = ua.version;
					}
				}

				// platform naming standardizations
				if (ua.intel_mac_os_x) {
					ua.mac_os_x = ua.intel_mac_os_x.split('_').join('.');
					delete ua.intel_mac_os_x;

				} else if (ua.cpu_iphone_os) {
					ua.ios = ua.cpu_iphone_os.split('_').join('.');
					delete ua.cpu_iphone_os;

				} else if (ua.cpu_os) {
					ua.ios = ua.cpu_os.split('_').join('.');
					delete ua.cpu_os;

				} else if (ua.mobile === 'iphone' && !ua.ios) {
					ua.ios = '1';
				}

				// UA naming standardizations
				if (ua.opera && ua.version) {
					ua.opera = ua.version;
					// version/XXX refers to opera
					delete ua.blackberry;

				} else if (R_Silk.exec(uaStr)) {
					ua.silk_accelerated = true;

				} else if (R_FluidApp.exec(uaStr)) {
					ua.fluidapp = ua.version;
				}

				if (ua.applewebkit) {
					ua.webkit = ua.applewebkit;
					delete ua.applewebkit;

					if (ua.opr) {
						ua.opera = ua.opr;
						delete ua.opr;
						delete ua.chrome;
					}

					if (ua.safari) {
						if (ua.chrome || ua.crios || ua.opera || ua.silk || ua.fluidapp || ua.phantomjs || (ua.mobile && !ua.ios)) {
							delete ua.safari;

						} else if (ua.version && !ua.rim_tablet_os) {
							ua.safari = ua.version;

						} else {
							ua.safari = ({
								'419': '2.0.4',
								'417': '2.0.3',
								'416': '2.0.2',
								'412': '2.0',
								'312': '1.3',
								'125': '1.2',
								'85': '1.0'
							})[parseInt(ua.safari, 10)] || ua.safari;
						}
					}

				} else if (ua.msie || ua.trident) {
					if (!ua.opera) {
						// standardize Internet Explorer
						ua.ie = ua.msie || ua.rv;
					}
					delete ua.msie;

					if (ua.windows_phone_os) {
						// standardize window phone
						ua.windows_phone = ua.windows_phone_os;
						delete ua.windows_phone_os;

					} else if (ua.mobile === 'wpdesktop' || ua.mobile === 'xblwp7' || ua.mobile === 'zunewp7') {
						ua.mobile = 'windows desktop';
						ua.windows_phone = (+ua.ie < 9) ? '7.0' : (+ua.ie < 10) ? '7.5' : '8.0';
						delete ua.windows_nt;
					}

				} else if (ua.gecko || ua.firefox) {
					ua.gecko = ua.rv;
				}

				if (ua.rv) {
					delete ua.rv;
				}
				if (ua.version) {
					delete ua.version;
				}

				return ua;
			},

		format:
			/**
			 * @param ua {Object}
			 * @return {string}
			 */
			function (ua) {
				/**
				 * @param b {string} browser key
				 * @param v {string} browser value
				 * @return {string} formatted CSS classes
				 */
				function format(b, v) {
					b = b.split('.').join('-');

					/**
					 * @type {string}
					 */
					var css = PREFIX+b;
					if (typeof v === 'string') {
						v = v.split(' ').join('_').split('.').join('-');
						var i = v.indexOf('-');
						while (i > 0) {
							// loop through chopping last '-' to end off
							// concat result onto return string
							css += PREFIX+b+'-'+v.substring(0, i);
							i = v.indexOf('-', i+1);
						}
						css += PREFIX+b+'-'+v;
					}
					return css;
				}
	
				/**
				 * @type {string}
				 */
				var	uaCss = '';
				for (var b in ua) {
					if (b && ua.hasOwnProperty(b)) {
						uaCss += format(b, ua[b]);
					}
				}
	
				// user-agent classNames
				return uaCss;
			},

		encode:
			/**
			 * Encodes parsed userAgent object as a compact URI-Encoded key-value collection
			 * @param ua {Object}
			 * @return {string}
			 */
			function(ua) {
				var query = '';
				for (var b in ua) {
					if (b && ua.hasOwnProperty(b)) {
						if (query) {
							query += '&';
						}
						query += encodeURIComponent(b)+'='+encodeURIComponent(ua[b]);
					}
				}
				return query;
			}
	};

	/**
	 * @const
	 * @type {Object}
	 */
	cssua.userAgent = cssua.ua = cssua.parse(userAgent);

	/**
	 * @const
	 * @type {string}
	 */
	var ua = cssua.format(cssua.ua)+' js';

	// append CSS classes to HTML node
	if (html.className) {
		html.className = html.className.replace(/\bno-js\b/g, '') + ua;
		
	} else {
		html.className = ua.substr(1);
	}

	return cssua;

})(document.documentElement, navigator.userAgent);

/*
	lazyload.js: Image lazy loading

	Code https://github.com/fasterize/lazyload

	Copyright (c) 2012 Vincent Voyer, http://fasterize.com

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

//For image loading times
//http://www.smashingmagazine.com/2011/11/14/analyzing-network-characteristics-using-javascript-and-the-dom-part-1/

// Prevent double lazyload script on same page
// We NEED to use string as closure compiler would otherwise compile this statement badly
if (!window['lzld']) {

	tmg.lzld = function( window, document, rAF, cAF, Modernizr ){
		'use strict';
		// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
		// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'],
			x;

		for (x = 0; x < vendors.length && !window[rAF]; ++x) {
				window[rAF] = window[vendors[x] + 'RequestAnimationFrame'];
				window[cAF] = window[vendors[x] + 'CancelAnimationFrame']
						|| window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if (!window[rAF]) {
				window[rAF] = function (callback) {
						var currTime = new Date().getTime(),
								timeToCall = Math.max(0, 16 - (currTime - lastTime)),
								id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);

						lastTime = currTime + timeToCall;

						return id;
				};
		}

		if (!window[cAF]) {
				window[cAF] = function (id) {
						window.clearTimeout(id);
				};
		}

		// end of requestAnimationFrame polyfill

		var lzld            = {},
			// Vertical offset in px. Used for preloading images while scrolling
			offset          = 150,

			// Key used for localstorage bandwith
			bandwidthKey     = 'lazyload_bandwidth',
			// indicate to use session storage for saving data
			bandwidthStorageSession = true,
			// Number of last loaded images that will be used for comptation
			bandwidthNoOfMeasurements  = !!( tmg && tmg.bandwidth && tmg.bandwidth.noOfMeasurements ) ? tmg.bandwidth.measurements : 5,
			// Speed in bytes per sec that indicates fast network
			bandwidthUpperLimit = !!( tmg && tmg.bandwidth && tmg.bandwidth.limit ) ? tmg.bandwidth.upperLimit : 14000, // Dialup slow
			// Avarage bandwidth computed by last no files
			bandwidth        = getBandwithPersist(),

			// connectionTypes : [
			// 	["14K (slow Dialup)", 14000],
			// 	["28K (Dialup)", 28000],
			// 	["56K (Dialup)", 57600],
			// 	["64K (ISDN)", 64000],
			// 	["128K (ISDN-2)", 128000],
			// 	["384K (ADSL, EDGE/3G)", 384000],
			// 	["512K (ADSL)", 512000],
			// 	["1Mbit", 1024000],
			// 	["1.54Mbit (DS1, T1)", 1540000],
			// 	["2Mbit (E1, ISDN-32)", 2000000],
			// 	["10Mbit (10Base-T)", 10000000],
			// 	["100Mbit (LAN)", 102000000]
			// ],

			//where to get real src
			lazyAttr        = 'data-frz-src',
			lazyAttrParent  = 'data-frz-parent',
			lazyAttrRatio   = 'data-frz-ratio',
			//TMG added
			lazyAttrArray   = 'data-frz-src-array',
			lazyAttrPersist = 'data-frz-persist',
			useParentAttr	= 'data-frz-use-parent',
			// Window height
			winH            = viewport(),
			// Self-populated page images array, we do not getElementsByTagName
			imgs            = [],
			pageHasLoaded   = false,
			unsubscribed    = false,

			// throttled functions, so that we do not call them too much
			// saveViewportT =  throttle(saveViewport, 20),
			// showImagesT = throttle(showImages, 20);

			saveViewportT = function() { window.requestAnimationFrame(saveViewport); },
			showImagesT = function() { window.requestAnimationFrame(showImages);},

			hoistAttributeTargetSelector = "data-frz-ancestor",
			hoistAttribute;

		// Override image element .getAttribute globally so that we give the real src
		// does not works for ie < 8: http://perfectionkills.com/whats-wrong-with-extending-the-dom/
		// Internet Explorer 7 (and below) [...] does not expose global Node, Element, HTMLElement, HTMLParagraphElement
		window['HTMLImageElement'] && overrideGetAttribute();

		// Called from every lazy <img> onload event
		window['lzld'] = onDataSrcImgLoad;

		// find and merge images on domready with possibly already present onload= onerror= imgs
		function findImages() {
			var
				domreadyImgs = document.getElementsByClassName('responsive-image'),
				currentImg;

			// merge them with already self onload registered imgs
			for (var imgIndex = 0, max = domreadyImgs.length; imgIndex < max; imgIndex += 1) {
				currentImg = domreadyImgs[imgIndex];

				if ( (currentImg.getAttribute(lazyAttr) || currentImg.getAttribute(lazyAttrArray) ) && inArrayObject( { img: currentImg }, imgs, 'img' ) === -1) {

					imgs.push( { img: currentImg } );
				}
			}

			showImages();
			setTimeout(showImagesT, 25);
		}

		// init
		domready(findImages);
		addEvent(window, 'load', onLoad);

		// Bind events
		subscribe();

		// called by img onload= or onerror= for IE6/7
		function onDataSrcImgLoad(img) {
			hoistAttribute = !!document.querySelector( "["+ hoistAttributeTargetSelector +"]" );
			// if image is not already in the imgs array
			// it can already be in it if domready was fast and img onload slow
			if ( inArrayObject( { img: img }, imgs, 'img' ) === -1 ) {
				// this case happens when the page had loaded but we inserted more lazyload images with
				// javascript (ajax). We need to re-watch scroll/resize
				// console.log( 'unsubscribed', unsubscribed );
				if ( unsubscribed ) {
					subscribe();
				}
				lzld.showIfVisible( img, imgs.push( { img: img } ) - 1);
			}
		}

		function onLoad() {
			pageHasLoaded = true;
			// if page height changes (hiding elements at start)
			// we should recheck for new in viewport images that need to be shown
			// see onload test
			showImagesT();
			// we could be the first to be notified about onload, so let others event handlers
			// pass and then try again
			// because they could change things on images
			setTimeout(showImagesT, 25);
		}

		//Not used anymore in favour of requestAnimationFrame
		// function throttle(fn, minDelay) {
		// 	var lastCall = 0;
		// 	return function() {
		// 		var now = +new Date();
		// 		if (now - lastCall < minDelay) {
		// 			return;
		// 		}
		// 		lastCall = now;

		// 		// we do not return anything as
		// 		// https://github.com/documentcloud/underscore/issues/387
		// 		fn.apply(this, arguments);
		// 	}
		// }

		// X-browser
		function addEvent( el, type, fn ) {
			if (el.attachEvent) {
				el.attachEvent && el.attachEvent( 'on' + type, fn );
			} else {
				el.addEventListener( type, fn, false );
			}
		}

		// X-browser
		function removeEvent( el, type, fn ) {
			if (el.detachEvent) {
				el.detachEvent && el.detachEvent( 'on' + type, fn );
			} else {
				el.removeEventListener( type, fn, false );
			}
		}

		// custom domready function
		// ripped from https://github.com/dperini/ContentLoaded/blob/master/src/contentloaded.js
		// http://javascript.nwbox.com/ContentLoaded/
		// http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
		// kept the inner logic, merged with our helpers/variables
		function domready(callback) {
			var
				done = false,
				top = true;

			function init(e) {
				if (e.type === 'readystatechange' && document.readyState !== 'complete') return;
				removeEvent((e.type === 'load' ? window : document), e.type, init);
				if (!done) {
					done = true;
					callback();
				}
			}

			function poll() {
				try { document.documentElement.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
				init('poll');
			}

			if (document.readyState === 'complete') callback();
			else {
				if (document.createEventObject && document.documentElement.doScroll) {
					try { top = !window.frameElement; } catch(e) { }
					if (top) poll();
				}
				addEvent(document, 'DOMContentLoaded', init);
				addEvent(document, 'readystatechange', init);
				addEvent(window, 'load', init);
			}
		}

		// img = dom element
		// index = imgs array index
		lzld.showIfVisible = function( img, index ) {
			// Image was called via onload event or called via lzld.showIfVisible and does not have index defined
			if ( typeof index == 'undefined' ) {
				index = inArrayObject( { img: img }, imgs, 'img' );
			}
			// Image was not present in imgs array created on DOM load
			if ( index === -1 ) {
				index = imgs.push( { img: img } ) - 1;
			}
			try {
				// We have to check that the current node is in the DOM
				// It could be a detached() dom node
				// http://bugs.jquery.com/ticket/4996
				if (contains(document.documentElement, img) && img.getBoundingClientRect().top < winH + offset && isOnline()) {

					var imgObj = getOptimalImageSrc(img, true),
						isImg = img.tagName == 'IMG',
						newImg;

					if (imgObj !== null) {

						// If the node is an image then use it, otherwise create one to embed
						if (!isImg) {
							newImg = document.createElement('img');
							newImg.src = imgObj.src;
						} else {
							img.src = imgObj.src;
						}

						//For styling it via background image
						// img.parentNode.style.backgroundImage = "url('" + imgObj.src+ "')";

						if (!img.complete) { // image is cached/loaded, potential problem is when image is referred multiple times on page and loaded at the same time (web browser will load it once but report time multiple times)
							imgs[index].size = imgObj.size;
							imgs[index].start = +new Date;
							imgs[index].timer = setTimeout(
								function () {
									imgs[index].expired = true
								},
								7 * 1000
								//imgs[ index ].timeout //TBD with use of https://docs.google.com/spreadsheet/ccc?key=0AplxPyCzmQi6dDRBN2JEd190N1hhV1N5cHQtUVdBMUE&hl=en_GB#gid=0 ???
							);

							img.onload = function () {
								if (!imgs[index].size) {
									return;
								}
								imgs[index].end = +new Date;
								clearTimeout(imgs[index].timer);

								var duration = ( imgs[index].end - imgs[index].start ) / 1000,
									speedBps = ( imgs[index].size / duration ).toFixed(2);

								if (isFinite(speedBps)) {
									if (bandwidth.length > bandwidthNoOfMeasurements - 1) {
										bandwidth.shift();
									}
									bandwidth.push(speedBps);
									setBandwithPersist();
								}
							};
						}
					}

					if (!img.getAttribute(lazyAttrPersist)) {
						img.removeAttribute(lazyAttr);
						img.removeAttribute(lazyAttrArray);
					}

					//For styling it via background image
					if (isImg && img.src !== null) {
						img.parentNode.style.backgroundImage = "url('" + img.src + "')";
					} else if (imgObj !== null) {
						img.parentNode.style.backgroundImage = "url('" + imgObj.src + "')";
					}

					img.parentNode.setAttribute(lazyAttrRatio, img.getAttribute(lazyAttrRatio));
					img.parentNode.setAttribute(lazyAttrParent, "");
					if (hoistAttribute) {// there is a element on the page which requires a hoisted value
						hoistAttributeValue(img, hoistAttributeTargetSelector, lazyAttrRatio);
					}
					img.setAttribute("data-lazy-loaded", "true");

					if (!isImg && imgObj !== null) {
						var alt = img.getAttribute('data-alt');

						newImg.className = 'responsive-image__source';
						newImg.alt = alt;
						// append image here
						img.appendChild(newImg);
					}

					imgs[index].complete = true;

					return true; // img shown
				} else {
					return false; // img to be shown
				}
			}
			catch(e){
				// lzld fails silently
			}
		}

		function getBandwithPersist() {
			if ( bandwidthStorageSession ){
				return window.JSON ? window.JSON.parse( sessionStorage.getItem( bandwidthKey ) || '[]' ) : [];
			}
			else {
				return window.JSON ? window.JSON.parse( localStorage.getItem( bandwidthKey ) || '[]' ) : [];
			}
		}

		function setBandwithPersist() {
			if ( bandwidthStorageSession ){
				sessionStorage.setItem( bandwidthKey, window.JSON.stringify( bandwidth ) );
			}
			else {
				localStorage.setItem( bandwidthKey, window.JSON.stringify( bandwidth ) );
			}
		}

		function isFastNetwork() {
			var sum = 0;
			for (var i = 0; i < bandwidth.length; i++) {
				sum += parseFloat( bandwidth[i] );
			}
			if ( bandwidth.length === bandwidthNoOfMeasurements ) {
				return ( sum / bandwidth.length ).toFixed(2) > bandwidthUpperLimit;
			}
			return true;
		}

		// expose to global scope for testing/debugging etc...
		// e.g. tmg.lazyLoad.persist.get().connectionType.text
		// if (window.tmg && ( ("jasmine" in window) || location.href.match('debug') )){
		//     tmg.lazyLoad = {
		//         persist: persist,
		//         imgs: imgs
		//     }
		// }

		// cross browser viewport calculation
		function viewport() {
			if (document.documentElement.clientHeight >= 0) {
				return document.documentElement.clientHeight;
			} else if (document.body && document.body.clientHeight >= 0) {
				return document.body.clientHeight
			} else if (window.innerHeight >= 0) {
				return window.innerHeight;
			} else {
				return 0;
			}
		}

		function saveViewport() {
			winH = viewport();
		}

		// Loop through images array to find to-be-shown images
		function showImages() {
			var
				len = imgs.length,
				current,
				allImagesDone = true;

			hoistAttribute = !!document.querySelector( "["+ hoistAttributeTargetSelector +"]" );

			for (current = 0; current < len; current++) {
				var img = imgs[current];
				// if showIfVisible is false, it means we have some waiting images to be shown
				if( img !== null && img.complete !== true && !lzld.showIfVisible( img.img, current ) ) {
					allImagesDone = false;
				}
			}

			if (allImagesDone && pageHasLoaded) {
				unsubscribe();
			}
		}

		function unsubscribe() {
			unsubscribed = true;
			removeEvent(window, 'resize', saveViewportT);
			removeEvent(window, 'resize', showImagesT);
			removeEvent(window, 'scroll', showImagesT);
			removeEvent(window, 'touchstart', showImagesT);
			removeEvent(window, 'load', onLoad);
		}

		function subscribe() {
			unsubscribed = false;
			addEvent(window, 'resize', saveViewportT);
			addEvent(window, 'resize', showImagesT);
			addEvent(window, 'scroll', showImagesT);
			addEvent(window, 'touchstart', showImagesT);
		}

		function isOnline() {
			var checkOnline = typeof window.navigator.onLine === 'boolean' ? window.navigator.onLine : true;

			return !!checkOnline;

			// //why to unload this, the network may be back?
			// if(!checkOnline) {
			// 	unsubscribe();
			// 	return false;
			// }
		}

		function getOptimalImageSrc( img, returnObject ) {
			if ( !!img.getAttribute(lazyAttrArray) ) {

				var srcArray      = getJsonFromAttribute( img ),
					useParent 	  = img.getAttribute(useParentAttr),
					restrict      = window.location.search.indexOf("debug") > -1 ? 1 : isFastNetwork() ? 1 : 0.5,
					imgWidth      = img.hasAttribute( 'src' ) ? parseInt( img.getAttribute('width') ) : parseInt( img.getAttribute('data-width') ),
					maxImgWidth   = typeof( img.offsetWidth ) !== 'undefined' ? Math.floor( img.offsetWidth * tmg.viewport.dpr ) : tmg.getViewportWidth(),
					returnObject  = typeof( returnObject ) !== 'undefined' ? returnObject : false;

				//Check if lazy load is needed
				if ( imgWidth != NaN && imgWidth >= maxImgWidth ) {

					if ( img.hasAttribute( 'src' ) ) {
						return null;
					} else {
						var dummyObj = {};
						dummyObj.src = img.getAttribute('data-src');
						return dummyObj;
					}

				}
				// console.log( 'maxImgWidth', maxImgWidth, 'restrict', restrict );

				//if use parent is set to true then the max width of an image is the width of its parent
				if(useParent != null && useParent != '' && useParent) {
					maxImgWidth = typeof( img.parentNode.offsetWidth ) !== 'undefined' ? Math.floor( img.parentNode.offsetWidth * tmg.viewport.dpr ) : tmg.getViewportWidth();
				}
				//Find optimal image
				if ( srcArray ) {
					for ( var i = 0; i < srcArray.length; i++ ) {
						if ( parseInt( srcArray[ i ].width ) >= ( maxImgWidth * restrict ) ) {
							// console.log( 'optimal width', srcArray[ i ].width );
							return returnObject ? srcArray[ i ] : srcArray[ i ].src;
						}
					}
					// console.log( 'optimal width', srcArray[ srcArray.length - 1 ].width );
					return returnObject ? srcArray[ srcArray.length - 1 ] : srcArray[ srcArray.length - 1 ].src;
				}
			}
			return null;
		}

		function getJsonFromAttribute( img ) {
			return img.getAttribute(lazyAttrArray) ? ( window.JSON ? JSON.parse( img.getAttribute(lazyAttrArray).replace(/'/g,'\"') ).sort( sortJsonByWidth ) : [] ) : [];
		}

		function sortJsonByWidth(x, y) {
			return x.width - y.width;
		}

		function overrideGetAttribute() {
			var original = HTMLImageElement.prototype.getAttribute;
			HTMLImageElement.prototype.getAttribute = function(name) {
				if( name === 'src' ) {
					return getOptimalImageSrc( this ) || original.call( this, lazyAttr ) || original.call( this, name );
				} else {
					// this.removeAttribute('data-frz-src-array');
					// our own lazyloader will go through theses lines
					// because we use getAttribute(lazyAttr)
					return original.call( this, name );
				}
			}
		}

		// https://github.com/jquery/sizzle/blob/3136f48b90e3edc84cbaaa6f6f7734ef03775a07/sizzle.js#L708
		var contains = document.documentElement.compareDocumentPosition ?
			function( a, b ) {
				return !!(a.compareDocumentPosition( b ) & 16); //16 DOCUMENT_POSITION_CONTAINED_BY
			} :
			document.documentElement.contains ?
			function( a, b ) {
				return a !== b && ( a.contains ? a.contains( b ) : false );
			} :
			function( a, b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
				return false;
			};

		// https://github.com/jquery/jquery/blob/f3515b735e4ee00bb686922b2e1565934da845f8/src/core.js#L610
		// We cannot use Array.prototype.indexOf because it's not always available
		function inArray( elem, array, i ) {
			var len;

			if ( array ) {
				if ( Array.prototype.indexOf ) {
					return Array.prototype.indexOf.call( array, elem, i );
				}

				len = array.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in array && array[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		}

		function inArrayObject( elem, array, property ) {
			for (var i = 0; i < array.length; i++) {
				if (array[i][property] === elem[property]) {
					return i;
				}
			}
			return -1;
		}

		function hoistAttributeValue( elem, hoistAttributeTargetSelector, attributeName ){

			var value = elem.getAttribute(attributeName),
				currentValue; // in case there are multiple hoisted values

			while (elem.parentNode && elem.parentNode.getAttribute) {
				elem = elem.parentNode;
				if (elem.getAttribute(hoistAttributeTargetSelector) !== null ){
					// concat with previous value if a value existed
					// NB: no use case for this, we expect to just be adding a single value.
					currentValue = elem.getAttribute(attributeName);
					if (currentValue){
						value = currentValue +","+ value;
					}
					elem.setAttribute(attributeName, value);
					break;
				}
			}
		}

		return lzld;

	}( this, document, 'requestAnimationFrame', 'cancelAnimationFrame', this.Modernizr )
}


/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = encodeURIComponent(String(value));
				value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init();
}));

"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[493,2],{453:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(384);const c=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:t,func:e,runIfAlreadyPublished:s}){if("function"!=typeof e)return!1;if(s)for(let s=0;s<this.publishedTopics.length;s++)this.publishedTopics[s]===t&&e.call();const i=(this.UID+=1).toString();return this.topics.push({token:i,topic:t,func:e}),i}unsubscribe({topic:t}){for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics.splice(e,1)}publish({topic:t}){this.publishedTopics.push(t);for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics[e].func.call()}};i.Z.create("tmg.pubsub"),window.tmg.pubsub=c;const o=c},283:(t,e,s)=>{s.d(e,{Z:()=>n});var i=s(384),c=s(453);class o{constructor(){i.Z.create("tmg.utils"),tmg.utils={injectScript:this.injectScript,getRandomInt:this.getRandomInteger}}injectScript(t,e=!0){return new Promise(((s,i)=>{if(t){const i=document.createElement("script");i.setAttribute("src",t),i.addEventListener("load",s,!1),e&&i.setAttribute("defer","true"),document.querySelector("head").appendChild(i)}else i(Error("No src supplied"))}))}getRandomInteger(t,e){if(!t||!e)return;const s=Math.ceil(t),i=Math.floor(e);return Math.floor(Math.random()*(i-s)+s)}disableScrolling(){document.documentElement.style.overflow="hidden"}enableScrolling(){document.documentElement.style.overflow="auto"}}c.Z.subscribe({topic:"tmg.page.ready",func:new o,runIfAlreadyPublished:!0});const n=o},384:(t,e,s)=>{s.d(e,{Z:()=>c}),window.tmg=window.tmg||{};const i=function(t){try{let e=tmg,s=t.split(".");return"tmg"===s[0]&&(s=s.slice(1)),s.forEach((t=>{void 0===e[t]&&(e[t]={}),e=e[t]})),e}catch(e){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=i;const c={create:i}}},t=>{t(t.s=283)}]);
"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[768,2],{436:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(384),n=s(453);class r{constructor(){i.Z.create("tmg.page"),tmg.page={getMetaTag:this.getMetaTag,getMetaContent:this.getMetaContent,getPageType:this.getPageType,getPageTitle:this.getPageTitle,getChannel:this.getChannel,getBusinessSegment:this.getBusinessSegment,getCategory:this.getCategory,getContentType:this.getContentType,getArticleId:this.getArticleId,getPublishDate:this.getPublishDate,getKeywords:this.getKeywords,getLocation:this.getLocation,getLeadAssetLayout:this.getLeadAssetLayout,isArticle:this.isArticle,isSponsored:this.isSponsored,isGallery:this.isGallery,isGallery2:this.isGallery2,isPremium:this.isPremium,isApp:this.isApp.bind(this)}}getPageType(){return window.dataLayer&&window.dataLayer.pageType}getPageTitle(){return document.title}getChannel(){return this.getMetaContent("tmgads.channel")}getCategory(){return this.getMetaContent("DCSext.Category")}getBusinessSegment(){return this.getMetaContent("tmgads.businessSegment")}getContentType(){return this.getMetaContent("DCSext.Content_Type")}getArticleId(){return this.getMetaContent("tmgads.articleid")}getPublishDate(){return this.getMetaContent("DCSext.articleFirstPublished")}getKeywords(){return this.getMetaContent("keywords").split(",").map((t=>t.trim()))}getLocation(){return document.location}getMetaContent(t,e="content"){const s=this.getMetaTag(t);let i="generic";return s&&s.getAttribute(e)&&(i=s.getAttribute(e)),i}getMetaTag(t){return document.querySelector(`meta[name='${t}']`)}isArticle(){let t=!1;return["articleRenderer","articleRenderer2","longFormRenderer"].forEach((e=>{this.getPageType()===e&&(t=!0)})),t}isGallery(){return"galleryRenderer"===this.getPageType()}isGallery2(){return"galleryRenderer2"===this.getPageType()}isSponsored(){return"sponsored"===this.getBusinessSegment()}isPremium(){return"true"===this.getMetaContent("tmg.premium.state")}isApp(){return"true"===this.getMetaContent("tmg.app")}isAuthor(){return document.documentElement.hasAttribute("data-is-author")}getLeadAssetLayout(){return this.isArticle()&&document.querySelector("[data-lead-asset-layout]")?document.querySelector("[data-lead-asset-layout]").dataset.leadAssetLayout:this.isArticle()?"hidden":void 0}}n.Z.subscribe({topic:"tmg.page.ready",func:new r,runIfAlreadyPublished:!0});const a=new r},453:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(384);const n=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:t,func:e,runIfAlreadyPublished:s}){if("function"!=typeof e)return!1;if(s)for(let s=0;s<this.publishedTopics.length;s++)this.publishedTopics[s]===t&&e.call();const i=(this.UID+=1).toString();return this.topics.push({token:i,topic:t,func:e}),i}unsubscribe({topic:t}){for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics.splice(e,1)}publish({topic:t}){this.publishedTopics.push(t);for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics[e].func.call()}};i.Z.create("tmg.pubsub"),window.tmg.pubsub=n;const r=n},384:(t,e,s)=>{s.d(e,{Z:()=>n}),window.tmg=window.tmg||{};const i=function(t){try{let e=tmg,s=t.split(".");return"tmg"===s[0]&&(s=s.slice(1)),s.forEach((t=>{void 0===e[t]&&(e[t]={}),e=e[t]})),e}catch(e){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=i;const n={create:i}}},t=>{t(t.s=436)}]);
"use strict";(self["tmg.build"]=self["tmg.build"]||[]).push([[625,2,768],{410:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(453),n=s(384),r=s(436);class o{constructor(){this.params={local:"local",qa:"qa",ci:"ci",staging:"staging",prod:"prod"},this.currentEnv=this.determineEnvironment(),n.Z.create("tmg.environment"),tmg.environment={currentEnv:this.currentEnv,getEnvironment:this.getEnvironment,getList:this.getList,getTld:this.getTld,isCommentingTurnedOn:this.isCommentingTurnedOn,isHttps:this.isHttps,isLocal:this.isLocal,isProd:this.isProd}}determineEnvironment(){const t=r.Z.getLocation().hostname.split(".");return t.some((t=>"local"===t||"127"===t||"localhost"===t))?this.getList().local:t.some((t=>/(^|-)ci[0-9]+(-app)?$/i.test(t)))?this.getList().ci:t.some((t=>/(^|-)qa[0-9]+(-app)?$/i.test(t)))?this.getList().qa:t.some((t=>/(^|-)staging(.*)$/i.test(t)))?this.getList().staging:this.getList().prod}getList(){return this.params}getEnvironment(){return this.currentEnv}getTld(){return"telegraph.co.uk"}isCommentingTurnedOn(){let t=!1;try{void 0!==tmg.COMMENTING_STATUS&&(t=!!tmg.COMMENTING_STATUS)}catch(t){console.log(t)}return t}isHttps(){return"https:"===r.Z.getLocation().protocol||this.isLocal()}isLocal(){return this.getEnvironment()===this.getList().local}isProd(){return this.getEnvironment()===this.getList().prod}}i.Z.subscribe({topic:"tmg.page.ready",func:new o,runIfAlreadyPublished:!0});const a=o},436:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(384),n=s(453);class r{constructor(){i.Z.create("tmg.page"),tmg.page={getMetaTag:this.getMetaTag,getMetaContent:this.getMetaContent,getPageType:this.getPageType,getPageTitle:this.getPageTitle,getChannel:this.getChannel,getBusinessSegment:this.getBusinessSegment,getCategory:this.getCategory,getContentType:this.getContentType,getArticleId:this.getArticleId,getPublishDate:this.getPublishDate,getKeywords:this.getKeywords,getLocation:this.getLocation,getLeadAssetLayout:this.getLeadAssetLayout,isArticle:this.isArticle,isSponsored:this.isSponsored,isGallery:this.isGallery,isGallery2:this.isGallery2,isPremium:this.isPremium,isApp:this.isApp.bind(this)}}getPageType(){return window.dataLayer&&window.dataLayer.pageType}getPageTitle(){return document.title}getChannel(){return this.getMetaContent("tmgads.channel")}getCategory(){return this.getMetaContent("DCSext.Category")}getBusinessSegment(){return this.getMetaContent("tmgads.businessSegment")}getContentType(){return this.getMetaContent("DCSext.Content_Type")}getArticleId(){return this.getMetaContent("tmgads.articleid")}getPublishDate(){return this.getMetaContent("DCSext.articleFirstPublished")}getKeywords(){return this.getMetaContent("keywords").split(",").map((t=>t.trim()))}getLocation(){return document.location}getMetaContent(t,e="content"){const s=this.getMetaTag(t);let i="generic";return s&&s.getAttribute(e)&&(i=s.getAttribute(e)),i}getMetaTag(t){return document.querySelector(`meta[name='${t}']`)}isArticle(){let t=!1;return["articleRenderer","articleRenderer2","longFormRenderer"].forEach((e=>{this.getPageType()===e&&(t=!0)})),t}isGallery(){return"galleryRenderer"===this.getPageType()}isGallery2(){return"galleryRenderer2"===this.getPageType()}isSponsored(){return"sponsored"===this.getBusinessSegment()}isPremium(){return"true"===this.getMetaContent("tmg.premium.state")}isApp(){return"true"===this.getMetaContent("tmg.app")}isAuthor(){return document.documentElement.hasAttribute("data-is-author")}getLeadAssetLayout(){return this.isArticle()&&document.querySelector("[data-lead-asset-layout]")?document.querySelector("[data-lead-asset-layout]").dataset.leadAssetLayout:this.isArticle()?"hidden":void 0}}n.Z.subscribe({topic:"tmg.page.ready",func:new r,runIfAlreadyPublished:!0});const o=new r},453:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(384);const n=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:t,func:e,runIfAlreadyPublished:s}){if("function"!=typeof e)return!1;if(s)for(let s=0;s<this.publishedTopics.length;s++)this.publishedTopics[s]===t&&e.call();const i=(this.UID+=1).toString();return this.topics.push({token:i,topic:t,func:e}),i}unsubscribe({topic:t}){for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics.splice(e,1)}publish({topic:t}){this.publishedTopics.push(t);for(let e=0;e<this.topics.length;e++)this.topics[e].topic===t&&this.topics[e].func.call()}};i.Z.create("tmg.pubsub"),window.tmg.pubsub=n;const r=n},384:(t,e,s)=>{s.d(e,{Z:()=>n}),window.tmg=window.tmg||{};const i=function(t){try{let e=tmg,s=t.split(".");return"tmg"===s[0]&&(s=s.slice(1)),s.forEach((t=>{void 0===e[t]&&(e[t]={}),e=e[t]})),e}catch(e){console.warn("couldn't create namespace:",t)}};window.tmg.createNamespace=i;const n={create:i}}},t=>{t(t.s=410)}]);
(self["tmg.build"]=self["tmg.build"]||[]).push([[378,164,2,768],{181:(e,t,r)=>{e.exports=function e(t,r,n){function s(o,a){if(!r[o]){if(!t[o]){if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[o]={exports:{}};t[o][0].call(u.exports,(function(e){return s(t[o][1][e]||e)}),u,u.exports,e,t,r,n)}return r[o].exports}for(var i=void 0,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(e,t,r){"use strict";var n=e("../src/store-engine"),s=[e("../storages/localStorage"),e("../storages/sessionStorage"),e("../storages/cookieStorage"),e("../storages/memoryStorage")];t.exports=n.createStore(s,[])},{"../src/store-engine":2,"../storages/cookieStorage":4,"../storages/localStorage":5,"../storages/memoryStorage":6,"../storages/sessionStorage":7}],2:[function(e,t,r){"use strict";function n(e,t,r){r||(r=""),e&&!l(e)&&(e=[e]),t&&!l(t)&&(t=[t]);var n=r?"__storejs_"+r+"_":"",s=r?new RegExp("^"+n):null;if(!/^[a-zA-Z0-9_\-]*$/.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var f={_namespacePrefix:n,_namespaceRegexp:s,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(e){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){function t(){if(r)return a(arguments,(function(e,t){n[t]=e})),r.apply(s,n)}var n=i(arguments,0),s=this,o=[t].concat(n);return e.apply(s,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(t){r=e}return void 0!==r?r:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(l(e))a(e,(function(e){t._addPlugin(e)}));else{var r=o(this.plugins,(function(t){return e===t}));if(!r){if(this.plugins.push(e),!g(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!p(n))throw new Error("Plugins must return an object of function properties");a(n,(function(r,n){if(!g(r))throw new Error("Bad plugin property: "+n+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,n)}))}}},addStorage:function(e){(function(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)})("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},h=u(f,d,{plugins:[]});return h.raw={},a(h,(function(e,t){g(e)&&(h.raw[t]=c(h,e))})),a(e,(function(e){h._addStorage(e)})),a(t,(function(e){h._addPlugin(e)})),h}var s=e("./util"),i=s.slice,o=s.pluck,a=s.each,c=s.bind,u=s.create,l=s.isList,g=s.isFunction,p=s.isObject;t.exports={createStore:n};var d={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(r,n){e.call(t,t._deserialize(r),(n||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return n.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return n(this.storage,this.plugins,e)}}},{"./util":3}],3:[function(e,t,n){(function(e){"use strict";function r(e,t){return Array.prototype.slice.call(e,t||0)}function n(e,t){s(e,(function(e,r){return t(e,r),!1}))}function s(e,t){if(i(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))return e[n]}function i(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}var o=Object.assign?Object.assign:function(e,t,r,s){for(var i=1;i<arguments.length;i++)n(Object(arguments[i]),(function(t,r){e[r]=t}));return e},a=function(){if(Object.create)return function(e,t,n,s){var i=r(arguments,1);return o.apply(this,[Object.create(e)].concat(i))};var e=function(){};return function(t,n,s,i){var a=r(arguments,1);return e.prototype=t,o.apply(this,[new e].concat(a))}}(),c=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},u="undefined"!=typeof window?window:e;t.exports={assign:o,create:a,trim:c,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:r,each:n,map:function(e,t){var r=i(e)?[]:{};return s(e,(function(e,n){return r[n]=t(e,n),!1})),r},pluck:s,isList:i,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:u}}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,r){"use strict";function n(e){for(var t=u.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(c(t[r])){var n=t[r].split("="),s=unescape(n[0]);e(unescape(n[1]),s)}}function s(e){e&&i(e)&&(u.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function i(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(u.cookie)}var o=e("../src/util"),a=o.Global,c=o.trim;t.exports={name:"cookieStorage",read:function(e){if(!e||!i(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(u.cookie.replace(new RegExp(t),"$1"))},write:function(e,t){e&&(u.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")},each:n,remove:s,clearAll:function(){n((function(e,t){s(t)}))}};var u=a.document},{"../src/util":3}],5:[function(e,t,r){"use strict";function n(){return i.localStorage}function s(e){return n().getItem(e)}var i=e("../src/util").Global;t.exports={name:"localStorage",read:s,write:function(e,t){return n().setItem(e,t)},each:function(e){for(var t=n().length-1;t>=0;t--){var r=n().key(t);e(s(r),r)}},remove:function(e){return n().removeItem(e)},clearAll:function(){return n().clear()}}},{"../src/util":3}],6:[function(e,t,r){"use strict";t.exports={name:"memoryStorage",read:function(e){return n[e]},write:function(e,t){n[e]=t},each:function(e){for(var t in n)n.hasOwnProperty(t)&&e(n[t],t)},remove:function(e){delete n[e]},clearAll:function(e){n={}}};var n={}},{}],7:[function(e,t,r){"use strict";function n(){return i.sessionStorage}function s(e){return n().getItem(e)}var i=e("../src/util").Global;t.exports={name:"sessionStorage",read:s,write:function(e,t){return n().setItem(e,t)},each:function(e){for(var t=n().length-1;t>=0;t--){var r=n().key(t);e(s(r),r)}},remove:function(e){return n().removeItem(e)},clearAll:function(){return n().clear()}}},{"../src/util":3}]},{},[1])(1)},436:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(384),s=r(453);class i{constructor(){n.Z.create("tmg.page"),tmg.page={getMetaTag:this.getMetaTag,getMetaContent:this.getMetaContent,getPageType:this.getPageType,getPageTitle:this.getPageTitle,getChannel:this.getChannel,getBusinessSegment:this.getBusinessSegment,getCategory:this.getCategory,getContentType:this.getContentType,getArticleId:this.getArticleId,getPublishDate:this.getPublishDate,getKeywords:this.getKeywords,getLocation:this.getLocation,getLeadAssetLayout:this.getLeadAssetLayout,isArticle:this.isArticle,isSponsored:this.isSponsored,isGallery:this.isGallery,isGallery2:this.isGallery2,isPremium:this.isPremium,isApp:this.isApp.bind(this)}}getPageType(){return window.dataLayer&&window.dataLayer.pageType}getPageTitle(){return document.title}getChannel(){return this.getMetaContent("tmgads.channel")}getCategory(){return this.getMetaContent("DCSext.Category")}getBusinessSegment(){return this.getMetaContent("tmgads.businessSegment")}getContentType(){return this.getMetaContent("DCSext.Content_Type")}getArticleId(){return this.getMetaContent("tmgads.articleid")}getPublishDate(){return this.getMetaContent("DCSext.articleFirstPublished")}getKeywords(){return this.getMetaContent("keywords").split(",").map((e=>e.trim()))}getLocation(){return document.location}getMetaContent(e,t="content"){const r=this.getMetaTag(e);let n="generic";return r&&r.getAttribute(t)&&(n=r.getAttribute(t)),n}getMetaTag(e){return document.querySelector(`meta[name='${e}']`)}isArticle(){let e=!1;return["articleRenderer","articleRenderer2","longFormRenderer"].forEach((t=>{this.getPageType()===t&&(e=!0)})),e}isGallery(){return"galleryRenderer"===this.getPageType()}isGallery2(){return"galleryRenderer2"===this.getPageType()}isSponsored(){return"sponsored"===this.getBusinessSegment()}isPremium(){return"true"===this.getMetaContent("tmg.premium.state")}isApp(){return"true"===this.getMetaContent("tmg.app")}isAuthor(){return document.documentElement.hasAttribute("data-is-author")}getLeadAssetLayout(){return this.isArticle()&&document.querySelector("[data-lead-asset-layout]")?document.querySelector("[data-lead-asset-layout]").dataset.leadAssetLayout:this.isArticle()?"hidden":void 0}}s.Z.subscribe({topic:"tmg.page.ready",func:new i,runIfAlreadyPublished:!0});const o=new i},453:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(384);const s=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:e,func:t,runIfAlreadyPublished:r}){if("function"!=typeof t)return!1;if(r)for(let r=0;r<this.publishedTopics.length;r++)this.publishedTopics[r]===e&&t.call();const n=(this.UID+=1).toString();return this.topics.push({token:n,topic:e,func:t}),n}unsubscribe({topic:e}){for(let t=0;t<this.topics.length;t++)this.topics[t].topic===e&&this.topics.splice(t,1)}publish({topic:e}){this.publishedTopics.push(e);for(let t=0;t<this.topics.length;t++)this.topics[t].topic===e&&this.topics[t].func.call()}};n.Z.create("tmg.pubsub"),window.tmg.pubsub=s;const i=s},987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(42),s=r(978),i=r(384),o=r(470),a=r(436),c=r(453);const u={pId:"",firstName:"",lastName:"",username:"",email:"",readerType:"",subscriber:"",subButton:"",subscriptionType:"",subscriptionName:""},l={viafouraRefresh:"VfRefresh",pianoRefToken:"user_ref_token",pianoIDToken:"__utp",meterCount:"tmg_meter_count",personalisation:"tmg_p13n",publicId:"tmg_pid",registrationSuccess:"tmg_registration_success",rememberMe:"tmg_rem",session:"tmg_session",refreshToken:"tmg_refresh",subscriptionConfirmation:"tmg_subscription_confirmation"},g="ACCESS_TOKEN",p="validAppUser",d="tmg.user.mytelegraph.token",f="tmg.user.mytelegraph.onboarded.status",h=document.querySelector("html");let m={};const y=(e,t)=>{if(t||(()=>{let e=document.querySelectorAll('[class*="logged-in--"], [class*="is-subscriber--"], [class*="app-tmg-subscriber--"]');e=Array.prototype.slice.call(e),e.forEach((e=>{y(e,!0)}))})(),e)return e.className=e.className.replace(new RegExp("\\b(?:logged-in--|is-subscriber--|app-tmg-subscriber--).+\\b","g"),""),e.classList&&(e.classList.add(`logged-in--${v()}`),e.classList.add(`is-subscriber--${S()}`),e.classList.add(`app-tmg-subscriber--${T()}`)),e.classList},b=()=>{let e=n.Z.get(l.personalisation);return s.Z.tryParse(e,u)},v=()=>!!n.Z.get(l.session),S=()=>"true"===m.subscriber,w=()=>!!localStorage.getItem(g),_=()=>localStorage.getItem(p)||"{}",T=()=>{try{const e=_(),t=w(),r="TMG"===JSON.parse(e).subscriptionType;return t&&r}catch(e){return!1}},A=()=>{try{const e=_(),t=w(),r="All Digital Access"===JSON.parse(e).subscriptionName;return t&&r}catch(e){return!1}},C=()=>(window.sessionStorage.removeItem("id_token"),window.sessionStorage.removeItem("access_token"),window.localStorage.removeItem(p),window.localStorage.removeItem(g),void 0!==window.vf&&window.vf.session.logout(),n.Z.remove(l.viafouraRefresh),n.Z.remove(l.session),P(),!0),P=()=>(m=b(),y(h),m),I={applyStatusCssClasses:y,clearAllData:()=>{C();for(let e in l)n.Z.remove(l[e]);o.Z.remove("fyre-auth"),o.Z.remove("fyre-authentication-creds"),P()},getPianoRefToken:()=>n.Z.get(l.pianoRefToken)||!1,getPianoIDToken:()=>n.Z.get(l.pianoIDToken)||!1,getMeterCount:()=>!1,getMyTelegraphToken:()=>{const e=o.Z.storage.read(d);return"undefined"!==e&&null!==e&&e},getProfile:b,getSubscriberId:()=>JSON.parse(localStorage.getItem("pid"))||"",getAccessToken:()=>localStorage.getItem(g)||"",getPublicId:()=>n.Z.get(l.publicId)||"",getSessionId:()=>n.Z.get(l.session)||"",getRefreshToken:()=>n.Z.get(l.refreshToken)||"",isLoggedIn:v,isLoggedInApp:()=>!!localStorage.getItem(p),isRegistered:()=>!!m.pId,isSubscriber:S,isAdLite:()=>!0===A()||"true"===a.Z.getMetaContent("tmg.isAdLite"),isGoogleShowcase:()=>"true"===a.Z.getMetaContent("tmg.isGoogleShowcase"),canComment:()=>v()&&S(),canCommentInApp:()=>T(),isAppTmgSubscriber:T,isAppTmgDigitalPlusSubscriber:A,isMyTelegraphOnboarded:()=>!!o.Z.storage.read(f),login:()=>(P(),!1),logout:C,setMyTelegraphToken:({token:e})=>o.Z.storage.write(d,e),setMyTelegraphOnboarded:({status:e})=>o.Z.storage.write(f,e),updateState:P};i.Z.create("tmg.user"),window.tmg.user=I,m=P(),c.Z.publish({topic:"tmg.user.ready"});const x=I},42:(e,t,r)=>{"use strict";function n(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}r.d(t,{Z:()=>s});const s=function e(t){function r(e,s,i){var o;if(arguments.length>1){if("number"==typeof(i=n({path:"/"},r.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{o=JSON.stringify(s),/^[\{\[]/.test(o)&&(s=o)}catch(e){}return s=(s=encodeURIComponent(String(s))).replace(/%(20|23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(20|23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",s,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}e||(o={});for(var c=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,l=0;l<c.length;l++){var g=c[l].split("="),p=g[0].replace(u,decodeURIComponent),d=g.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));try{if(d=t&&t(d,p)||d.replace(u,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===p){o=d;break}e||(o[p]=d)}catch(e){}}return o}return r.get=r.set=r,r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(e,t){r(e,"",n(t,{expires:-1}))},r.withConverter=e,r}()},978:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(384);let s={};const i=e=>{let t={};return"string"==typeof e&&(t=o(e.replace(/'/g,'"'))),t},o=(e,t)=>{let r=t||{},n=e,s=!1,i="",o=[],g=[],p=[];const d=/[{?,\s]\s*"([^"]|\\")+"\s*:(\s*"([^"]|\\")+"|(.+))\s*[},]/gi,f=/^\s*{?\s*'|'\s*}?\s*$/i;if(!e)return r;if("[object Object]"===Object.prototype.toString.call(e))return e;if(s=c(n),s||(p=n.match(d)||[],p.forEach((e=>{if(e.includes('"label"')){const t=e.replace(/^\s*[{\s]|[,}]\s*$/gi,"").split(":")[1].replace(/\s*"([^]+|\\")"\s*$/gi,"$1"),r=t.replace(/"/gi,'\\"'),s=e.replace(t,r);n=n.replace(e,s)}})),i=n.replace(d,""),o=i.split(/,(?=(?:[^",]*:[^",]*)|[^",]*$)/)),o.forEach((e=>{const t=e.replace(/^\s*{|}\s*$/gi,"");c(a(t))||g.push(t)})),g.forEach((e=>{let t=!1,r=e;!0===f.test(e)&&(r=l(e),t=c(a(r))),t||!0!==/[^"']\w+[^"']:/.test(r)||(r=u(r),t=c(a(r))),t&&(n=n.replace(e,r))})),s=c(n),s)r=c(n);else try{JSON.parse(n)}catch(e){console.log("tmg.json.tryParse failed:",e)}return r},a=e=>`{${e}}`,c=e=>{let t=!1;try{t=JSON.parse(e)}catch(e){}return t},u=e=>{let t=e;return t=t.replace(/^\s*(.*?):/,'"$1":'),t},l=e=>{let t=e;return t=t.replace(/^\s*'([^']+|\\')':/,'"$1":'),t=t.replace(/:\s*('')\s*$/,': ""'),t=t.replace(/:\s*'([^']+|\\')'\s*$/,': "$1"'),t};s={parseFromAem:i,tryParse:o,simpleTryParse:c},n.Z.create("tmg.json"),tmg.json=s;const g=s;tmg.parseAemJson=i},384:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),window.tmg=window.tmg||{};const n=function(e){try{let t=tmg,r=e.split(".");return"tmg"===r[0]&&(r=r.slice(1)),r.forEach((e=>{void 0===t[e]&&(t[e]={}),t=t[e]})),t}catch(t){console.warn("couldn't create namespace:",e)}};window.tmg.createNamespace=n;const s={create:n}},470:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(181),s=r.n(n);r(384).Z.create("tmg.store"),tmg.store=s();const i=s()}},e=>{e(e.s=987)}]);
tmg.createNamespace('tmg.commenting');

tmg.commenting = function (window, document, tmg, env) {
	var timeDelayBeforeUpdatingCounts = 1000 * 150; // milliseconds * seconds
	var cachePrefix = 'tmg.commenting.count-';
	var minimumCommentsBeforeShowingCount = 9; // TODO: make this an option?
	var maximumCountNumberToDisplay = 9999; // TODO: make this an option?
	var textToDisplayAboveMaxCount = '10k +';
	var refreshCountSetInterval = void 0;
	var refetch = false;

	function init() {
		if (!isFeatureEnabled()) {
			return;
		}

		processCounts();
	}

	function isFeatureEnabled() {
		// if the commenting variable isn't set at all or if its false... (allows it to work without esi present...)
		return typeof tmg.COMMENTING_STATUS === 'undefined' || !!tmg.COMMENTING_STATUS;
	}

	function loadLiveFyreLibrary(url) {
		// TODO: handle error/reject scenario
		return new Promise(function (resolve, reject) {
			if (!window.Livefyre) {
				resolve(tmg.utils.injectScript(url));
			} else {
				resolve();
			}
		});
	}

	/**
     * Accepts an array of livefyre article IDs, gets a JSON response, stores the
     * count in the browser
     *
     * example param: ["AmzZ1M2qRYTY","AnR8XJDdtk2j","Am1hNmfQ29cz"]
     * example response:
     * {
     *   "AmzZ1M2qRYTY": {
     *     "feed": 0,
     *     "instagram": 0,
     *     "livefyre": 22,
     *     "facebook": 0,
     *     "total": 22,
     *     "twitter": 0
     *   },
     *   // ...
     * }
     *
     * NOTE: If the article ID does not exist in livefyre then nothing is returned for it.
     * If no article IDs were found then an status is still 200, but empty data object is returned.
     */
	function fetchCountsFromLiveFyre(siteId, articleIds) {
		var ret = void 0;
		// as per http://api.livefyre.com/docs/apis/by-category/integration
		var liveFyreNetwork = 'telegraphmedia' + (env.getEnvironment() === 'prod' ? '' : '-int');
		var liveFyreApi = 'https://' + liveFyreNetwork + '.bootstrap.fyre.co/api/v1.1/public/comments/ncomments/';
		var hash = btoa(siteId + ':' + articleIds.join(','));
		var targetUrl = '' + liveFyreApi + hash + '.json';

		function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error(response.statusText));
			}
		}

		function json(response) {
			return response.json();
		}

		ret = window.fetch(targetUrl).then(status).then(json).then(function (response) {
			return response.data[siteId] || {};
		}, function (error) {
			console.log('error getting data from livefyre', error);
			return {};
		});

		return ret;
	}

	function processCounts() {
		var siteId = '';
		var indicators = void 0;
		var articleIds = [];

		// can't test tmg.commenting.isFeatureEnabled() if its not currently an article page, as thats the only page type that (currently) includes that ESI

		indicators = Array.prototype.slice.call(document.querySelectorAll('[data-js="comment-count"]'));

		indicators.filter(function (element) {
			// this shouldn't come out if the articleId isn't there or if this article isn't set to show the count, but to be on the safe side...
			return element.dataset.options.indexOf('articleId') > -1;
		}).forEach(function (element) {
			var indicatorOptions = tmg.parseAemJson(element.dataset.options);

			if (articleIds.indexOf(indicatorOptions.articleId) === -1) {
				articleIds.push(indicatorOptions.articleId);
			}

			if (!siteId && indicatorOptions.siteId) {
				siteId = indicatorOptions.siteId;
			}
		});

		articleIds.forEach(function (articleId) {
			var cachedCount = localStorage.getItem('' + cachePrefix + articleId);

			if (cachedCount) {
				renderIndicatorCount(articleId, cachedCount);
			}
		});

		// TODO: decide where this config should live, needs to be present across the site/at least on hub and article pages:
		tmg.commenting.fetchCountsFromLiveFyre(siteId, articleIds).then(function (response) {
			articleIds.forEach(function (articleId) {
				if (!response[articleId] || !response[articleId].total) {
					return; // livefyre didn't return any data around this article...
				}

				// TODO: have a tmg.storage wrapper? ... consider the number/time of articles currently in cache...
				localStorage.setItem('' + cachePrefix + articleId, response[articleId].total);
				renderIndicatorCount(articleId, response[articleId].total);
			});
		});
	}

	function renderIndicatorCount(articleId, commentCount, ignoreDisplayThreshold) {
		var indicators = Array.prototype.slice.call(document.querySelectorAll('[data-js="comment-count"][data-options*="' + articleId + '"]'));

		if (commentCount > maximumCountNumberToDisplay) {
			commentCount = textToDisplayAboveMaxCount;
		}

		indicators.forEach(function (element) {
			var countNumber = element.querySelector('[data-js="comment-count__number"]');

			countNumber.innerHTML = commentCount;
			if (ignoreDisplayThreshold || commentCount > minimumCommentsBeforeShowingCount) {
				element.parentNode.classList.add('is-visible'); // selecting the comment-cta (probably)
			}
		});
	}

	function refreshCounts() {
		// TODO: can't do this using promises ... resolved once per page load only!
		// could do this using events?
	}

	tmg.pageReady(init);

	return {
		fetchCountsFromLiveFyre: fetchCountsFromLiveFyre,
		isFeatureEnabled: isFeatureEnabled,
		loadLiveFyreLibrary: loadLiveFyreLibrary,
		processCounts: processCounts,
		renderIndicatorCount: renderIndicatorCount
	};
}(window, document, tmg, tmg.environment);
(self["tmg.build"]=self["tmg.build"]||[]).push([[380,164,2,768,378,661],{181:(e,t,r)=>{e.exports=function e(t,r,s){function n(o,a){if(!r[o]){if(!t[o]){if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[o]={exports:{}};t[o][0].call(u.exports,(function(e){return n(t[o][1][e]||e)}),u,u.exports,e,t,r,s)}return r[o].exports}for(var i=void 0,o=0;o<s.length;o++)n(s[o]);return n}({1:[function(e,t,r){"use strict";var s=e("../src/store-engine"),n=[e("../storages/localStorage"),e("../storages/sessionStorage"),e("../storages/cookieStorage"),e("../storages/memoryStorage")];t.exports=s.createStore(n,[])},{"../src/store-engine":2,"../storages/cookieStorage":4,"../storages/localStorage":5,"../storages/memoryStorage":6,"../storages/sessionStorage":7}],2:[function(e,t,r){"use strict";function s(e,t,r){r||(r=""),e&&!l(e)&&(e=[e]),t&&!l(t)&&(t=[t]);var s=r?"__storejs_"+r+"_":"",n=r?new RegExp("^"+s):null;if(!/^[a-zA-Z0-9_\-]*$/.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var m={_namespacePrefix:s,_namespaceRegexp:n,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(e){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){function t(){if(r)return a(arguments,(function(e,t){s[t]=e})),r.apply(n,s)}var s=i(arguments,0),n=this,o=[t].concat(s);return e.apply(n,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(t){r=e}return void 0!==r?r:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(l(e))a(e,(function(e){t._addPlugin(e)}));else{var r=o(this.plugins,(function(t){return e===t}));if(!r){if(this.plugins.push(e),!g(e))throw new Error("Plugins must be function values that return objects");var s=e.call(this);if(!p(s))throw new Error("Plugins must return an object of function properties");a(s,(function(r,s){if(!g(r))throw new Error("Bad plugin property: "+s+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,s)}))}}},addStorage:function(e){(function(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)})("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},h=u(m,d,{plugins:[]});return h.raw={},a(h,(function(e,t){g(e)&&(h.raw[t]=c(h,e))})),a(e,(function(e){h._addStorage(e)})),a(t,(function(e){h._addPlugin(e)})),h}var n=e("./util"),i=n.slice,o=n.pluck,a=n.each,c=n.bind,u=n.create,l=n.isList,g=n.isFunction,p=n.isObject;t.exports={createStore:s};var d={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(r,s){e.call(t,t._deserialize(r),(s||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return s.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return s(this.storage,this.plugins,e)}}},{"./util":3}],3:[function(e,t,s){(function(e){"use strict";function r(e,t){return Array.prototype.slice.call(e,t||0)}function s(e,t){n(e,(function(e,r){return t(e,r),!1}))}function n(e,t){if(i(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var s in e)if(e.hasOwnProperty(s)&&t(e[s],s))return e[s]}function i(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}var o=Object.assign?Object.assign:function(e,t,r,n){for(var i=1;i<arguments.length;i++)s(Object(arguments[i]),(function(t,r){e[r]=t}));return e},a=function(){if(Object.create)return function(e,t,s,n){var i=r(arguments,1);return o.apply(this,[Object.create(e)].concat(i))};var e=function(){};return function(t,s,n,i){var a=r(arguments,1);return e.prototype=t,o.apply(this,[new e].concat(a))}}(),c=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},u="undefined"!=typeof window?window:e;t.exports={assign:o,create:a,trim:c,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:r,each:s,map:function(e,t){var r=i(e)?[]:{};return n(e,(function(e,s){return r[s]=t(e,s),!1})),r},pluck:n,isList:i,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:u}}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,r){"use strict";function s(e){for(var t=u.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(c(t[r])){var s=t[r].split("="),n=unescape(s[0]);e(unescape(s[1]),n)}}function n(e){e&&i(e)&&(u.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function i(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(u.cookie)}var o=e("../src/util"),a=o.Global,c=o.trim;t.exports={name:"cookieStorage",read:function(e){if(!e||!i(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(u.cookie.replace(new RegExp(t),"$1"))},write:function(e,t){e&&(u.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")},each:s,remove:n,clearAll:function(){s((function(e,t){n(t)}))}};var u=a.document},{"../src/util":3}],5:[function(e,t,r){"use strict";function s(){return i.localStorage}function n(e){return s().getItem(e)}var i=e("../src/util").Global;t.exports={name:"localStorage",read:n,write:function(e,t){return s().setItem(e,t)},each:function(e){for(var t=s().length-1;t>=0;t--){var r=s().key(t);e(n(r),r)}},remove:function(e){return s().removeItem(e)},clearAll:function(){return s().clear()}}},{"../src/util":3}],6:[function(e,t,r){"use strict";t.exports={name:"memoryStorage",read:function(e){return s[e]},write:function(e,t){s[e]=t},each:function(e){for(var t in s)s.hasOwnProperty(t)&&e(s[t],t)},remove:function(e){delete s[e]},clearAll:function(e){s={}}};var s={}},{}],7:[function(e,t,r){"use strict";function s(){return i.sessionStorage}function n(e){return s().getItem(e)}var i=e("../src/util").Global;t.exports={name:"sessionStorage",read:n,write:function(e,t){return s().setItem(e,t)},each:function(e){for(var t=s().length-1;t>=0;t--){var r=s().key(t);e(n(r),r)}},remove:function(e){return s().removeItem(e)},clearAll:function(){return s().clear()}}},{"../src/util":3}]},{},[1])(1)},436:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(384),n=r(453);class i{constructor(){s.Z.create("tmg.page"),tmg.page={getMetaTag:this.getMetaTag,getMetaContent:this.getMetaContent,getPageType:this.getPageType,getPageTitle:this.getPageTitle,getChannel:this.getChannel,getBusinessSegment:this.getBusinessSegment,getCategory:this.getCategory,getContentType:this.getContentType,getArticleId:this.getArticleId,getPublishDate:this.getPublishDate,getKeywords:this.getKeywords,getLocation:this.getLocation,getLeadAssetLayout:this.getLeadAssetLayout,isArticle:this.isArticle,isSponsored:this.isSponsored,isGallery:this.isGallery,isGallery2:this.isGallery2,isPremium:this.isPremium,isApp:this.isApp.bind(this)}}getPageType(){return window.dataLayer&&window.dataLayer.pageType}getPageTitle(){return document.title}getChannel(){return this.getMetaContent("tmgads.channel")}getCategory(){return this.getMetaContent("DCSext.Category")}getBusinessSegment(){return this.getMetaContent("tmgads.businessSegment")}getContentType(){return this.getMetaContent("DCSext.Content_Type")}getArticleId(){return this.getMetaContent("tmgads.articleid")}getPublishDate(){return this.getMetaContent("DCSext.articleFirstPublished")}getKeywords(){return this.getMetaContent("keywords").split(",").map((e=>e.trim()))}getLocation(){return document.location}getMetaContent(e,t="content"){const r=this.getMetaTag(e);let s="generic";return r&&r.getAttribute(t)&&(s=r.getAttribute(t)),s}getMetaTag(e){return document.querySelector(`meta[name='${e}']`)}isArticle(){let e=!1;return["articleRenderer","articleRenderer2","longFormRenderer"].forEach((t=>{this.getPageType()===t&&(e=!0)})),e}isGallery(){return"galleryRenderer"===this.getPageType()}isGallery2(){return"galleryRenderer2"===this.getPageType()}isSponsored(){return"sponsored"===this.getBusinessSegment()}isPremium(){return"true"===this.getMetaContent("tmg.premium.state")}isApp(){return"true"===this.getMetaContent("tmg.app")}isAuthor(){return document.documentElement.hasAttribute("data-is-author")}getLeadAssetLayout(){return this.isArticle()&&document.querySelector("[data-lead-asset-layout]")?document.querySelector("[data-lead-asset-layout]").dataset.leadAssetLayout:this.isArticle()?"hidden":void 0}}n.Z.subscribe({topic:"tmg.page.ready",func:new i,runIfAlreadyPublished:!0});const o=new i},453:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(384);const n=new class{constructor(){this.topics=[],this.publishedTopics=[],this.UID=-1}subscribe({topic:e,func:t,runIfAlreadyPublished:r}){if("function"!=typeof t)return!1;if(r)for(let r=0;r<this.publishedTopics.length;r++)this.publishedTopics[r]===e&&t.call();const s=(this.UID+=1).toString();return this.topics.push({token:s,topic:e,func:t}),s}unsubscribe({topic:e}){for(let t=0;t<this.topics.length;t++)this.topics[t].topic===e&&this.topics.splice(t,1)}publish({topic:e}){this.publishedTopics.push(e);for(let t=0;t<this.topics.length;t++)this.topics[t].topic===e&&this.topics[t].func.call()}};s.Z.create("tmg.pubsub"),window.tmg.pubsub=n;const i=n},177:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(384),n=r(453),i=r(42),o=r(987),a=r(436),c=r(951),u=r(978);class l{constructor(){s.Z.create("tmg.dataLayerUtils"),window.dataLayer=window.dataLayer||{},this.cookieStatus=this.getCookies(),this.isPaymentRenderer=window.dataLayer.pageType&&"paymentRenderer"===window.dataLayer.pageType,this.listenerEvents=["click","input"],this.initListeners("[data-layer-event]"),tmg.dataLayerUtils={cookieStatus:this.cookieStatus,update:this.update,isPaymentRenderer:this.isPaymentRenderer,onRegistrationSuccess:this.onRegistrationSuccess,onRegistrationUpdate:this.onRegistrationUpdate,onSubscriptionConfirmation:this.onSubscriptionConfirmation,updateSubscription:this.updateSubscription,updateUserStatus:this.updateUserStatus,checkCookie:this.checkCookie,removeCookie:this.removeCookie,addPropertyValue:this.addPropertyValue},this.update()}update(){this.cookieStatus.registrationSuccess.value?(this.onRegistrationSuccess(),this.removeCookie(this.cookieStatus.registrationSuccess.name)):this.cookieStatus.registrationUpdate.value?(this.onRegistrationUpdate(),this.removeCookie(this.cookieStatus.registrationUpdate.name)):this.cookieStatus.subscriptionConfirmation.value?(this.onSubscriptionConfirmation(),this.removeCookie(this.cookieStatus.subscriptionConfirmation.name)):this.isPaymentRenderer&&this.updateSubscription(),this.updateUserStatus()}updateUserStatus(){o.Z.isLoggedIn()?window.dataLayer.userStatus=o.Z.isSubscriber()?"subscribed":"registered":window.dataLayer.userStatus="anonymous"}onRegistrationSuccess(){const e=this.checkCookie(this.cookieStatus.registrationSuccess,"success_facebook"),t=this.checkCookie(this.cookieStatus.registrationSuccess,"success_emailoffers-true");window.dataLayer.event=["registrationComplete"],window.dataLayer.registration={registrationType:e?"facebook":"email",emailOptIn:t?"true":"false"}}onRegistrationUpdate(){"1"!==this.cookieStatus.registrationUpdate.value?(window.dataLayer.event=["registrationUpdate","newsletterSignup"],window.dataLayer.newsletterType=this.cookieStatus.registrationUpdate.value):window.dataLayer.event=["registrationUpdate"],window.dataLayer.registration={registrationType:"email"}}onSubscriptionConfirmation(){window.dataLayer.event=["subscriptionConfirmation"],window.dataLayer.subscription=u.Z.tryParse(JSON.stringify(this.cookieStatus.subscriptionConfirmation.value))}updateSubscription(){window.dataLayer.event=["subscriptionCheckout"],window.dataLayer.subscription={productID:c.Z.getQuerystringParam(a.Z.getLocation().search,"productId")}}checkCookie(e,t){return!(!e||!t)&&e.value===t}removeCookie(e=null){e&&i.Z.remove(e,{domain:".telegraph.co.uk"})}initListeners(e){const t=document.querySelectorAll(e);t&&t.forEach((e=>this.bindListeners(e)))}bindListeners(e){this.listenerEvents.forEach((t=>{e.addEventListener(t,(e=>{this.addEvent(e.target.dataset.layerEvent)}))}))}addEvent(e){window.dataLayer.event!==e&&(window.dataLayer.event=e)}getCookies(){return{registrationSuccess:{name:"tmg_registration_success",value:i.Z.get("tmg_registration_success")},registrationUpdate:{name:"tmg_registration_update",value:i.Z.get("tmg_registration_update")},subscriptionConfirmation:{name:"tmg_subscription_confirmation",value:i.Z.get("tmg_subscription_confirmation")}}}static addPropertyValue(e,t){e&&t&&(window.dataLayer[e]=t)}}n.Z.subscribe({topic:"tmg.page.ready",func:()=>{new l},runIfAlreadyPublished:!0});const g=l},987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>L});var s=r(42),n=r(978),i=r(384),o=r(470),a=r(436),c=r(453);const u={pId:"",firstName:"",lastName:"",username:"",email:"",readerType:"",subscriber:"",subButton:"",subscriptionType:"",subscriptionName:""},l={viafouraRefresh:"VfRefresh",pianoRefToken:"user_ref_token",pianoIDToken:"__utp",meterCount:"tmg_meter_count",personalisation:"tmg_p13n",publicId:"tmg_pid",registrationSuccess:"tmg_registration_success",rememberMe:"tmg_rem",session:"tmg_session",refreshToken:"tmg_refresh",subscriptionConfirmation:"tmg_subscription_confirmation"},g="ACCESS_TOKEN",p="validAppUser",d="tmg.user.mytelegraph.token",m="tmg.user.mytelegraph.onboarded.status",h=document.querySelector("html");let f={};const y=(e,t)=>{if(t||(()=>{let e=document.querySelectorAll('[class*="logged-in--"], [class*="is-subscriber--"], [class*="app-tmg-subscriber--"]');e=Array.prototype.slice.call(e),e.forEach((e=>{y(e,!0)}))})(),e)return e.className=e.className.replace(new RegExp("\\b(?:logged-in--|is-subscriber--|app-tmg-subscriber--).+\\b","g"),""),e.classList&&(e.classList.add(`logged-in--${v()}`),e.classList.add(`is-subscriber--${S()}`),e.classList.add(`app-tmg-subscriber--${_()}`)),e.classList},b=()=>{let e=s.Z.get(l.personalisation);return n.Z.tryParse(e,u)},v=()=>!!s.Z.get(l.session),S=()=>"true"===f.subscriber,w=()=>!!localStorage.getItem(g),C=()=>localStorage.getItem(p)||"{}",_=()=>{try{const e=C(),t=w(),r="TMG"===JSON.parse(e).subscriptionType;return t&&r}catch(e){return!1}},k=()=>{try{const e=C(),t=w(),r="All Digital Access"===JSON.parse(e).subscriptionName;return t&&r}catch(e){return!1}},P=()=>(window.sessionStorage.removeItem("id_token"),window.sessionStorage.removeItem("access_token"),window.localStorage.removeItem(p),window.localStorage.removeItem(g),void 0!==window.vf&&window.vf.session.logout(),s.Z.remove(l.viafouraRefresh),s.Z.remove(l.session),T(),!0),T=()=>(f=b(),y(h),f),A={applyStatusCssClasses:y,clearAllData:()=>{P();for(let e in l)s.Z.remove(l[e]);o.Z.remove("fyre-auth"),o.Z.remove("fyre-authentication-creds"),T()},getPianoRefToken:()=>s.Z.get(l.pianoRefToken)||!1,getPianoIDToken:()=>s.Z.get(l.pianoIDToken)||!1,getMeterCount:()=>!1,getMyTelegraphToken:()=>{const e=o.Z.storage.read(d);return"undefined"!==e&&null!==e&&e},getProfile:b,getSubscriberId:()=>JSON.parse(localStorage.getItem("pid"))||"",getAccessToken:()=>localStorage.getItem(g)||"",getPublicId:()=>s.Z.get(l.publicId)||"",getSessionId:()=>s.Z.get(l.session)||"",getRefreshToken:()=>s.Z.get(l.refreshToken)||"",isLoggedIn:v,isLoggedInApp:()=>!!localStorage.getItem(p),isRegistered:()=>!!f.pId,isSubscriber:S,isAdLite:()=>!0===k()||"true"===a.Z.getMetaContent("tmg.isAdLite"),isGoogleShowcase:()=>"true"===a.Z.getMetaContent("tmg.isGoogleShowcase"),canComment:()=>v()&&S(),canCommentInApp:()=>_(),isAppTmgSubscriber:_,isAppTmgDigitalPlusSubscriber:k,isMyTelegraphOnboarded:()=>!!o.Z.storage.read(m),login:()=>(T(),!1),logout:P,setMyTelegraphToken:({token:e})=>o.Z.storage.write(d,e),setMyTelegraphOnboarded:({status:e})=>o.Z.storage.write(m,e),updateState:T};i.Z.create("tmg.user"),window.tmg.user=A,f=T(),c.Z.publish({topic:"tmg.user.ready"});const L=A},42:(e,t,r)=>{"use strict";function s(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var s in r)t[s]=r[s]}return t}r.d(t,{Z:()=>n});const n=function e(t){function r(e,n,i){var o;if(arguments.length>1){if("number"==typeof(i=s({path:"/"},r.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch(e){}return n=(n=encodeURIComponent(String(n))).replace(/%(20|23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(20|23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",n,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}e||(o={});for(var c=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,l=0;l<c.length;l++){var g=c[l].split("="),p=g[0].replace(u,decodeURIComponent),d=g.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));try{if(d=t&&t(d,p)||d.replace(u,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===p){o=d;break}e||(o[p]=d)}catch(e){}}return o}return r.get=r.set=r,r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(e,t){r(e,"",s(t,{expires:-1}))},r.withConverter=e,r}()},978:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(384);let n={};const i=e=>{let t={};return"string"==typeof e&&(t=o(e.replace(/'/g,'"'))),t},o=(e,t)=>{let r=t||{},s=e,n=!1,i="",o=[],g=[],p=[];const d=/[{?,\s]\s*"([^"]|\\")+"\s*:(\s*"([^"]|\\")+"|(.+))\s*[},]/gi,m=/^\s*{?\s*'|'\s*}?\s*$/i;if(!e)return r;if("[object Object]"===Object.prototype.toString.call(e))return e;if(n=c(s),n||(p=s.match(d)||[],p.forEach((e=>{if(e.includes('"label"')){const t=e.replace(/^\s*[{\s]|[,}]\s*$/gi,"").split(":")[1].replace(/\s*"([^]+|\\")"\s*$/gi,"$1"),r=t.replace(/"/gi,'\\"'),n=e.replace(t,r);s=s.replace(e,n)}})),i=s.replace(d,""),o=i.split(/,(?=(?:[^",]*:[^",]*)|[^",]*$)/)),o.forEach((e=>{const t=e.replace(/^\s*{|}\s*$/gi,"");c(a(t))||g.push(t)})),g.forEach((e=>{let t=!1,r=e;!0===m.test(e)&&(r=l(e),t=c(a(r))),t||!0!==/[^"']\w+[^"']:/.test(r)||(r=u(r),t=c(a(r))),t&&(s=s.replace(e,r))})),n=c(s),n)r=c(s);else try{JSON.parse(s)}catch(e){console.log("tmg.json.tryParse failed:",e)}return r},a=e=>`{${e}}`,c=e=>{let t=!1;try{t=JSON.parse(e)}catch(e){}return t},u=e=>{let t=e;return t=t.replace(/^\s*(.*?):/,'"$1":'),t},l=e=>{let t=e;return t=t.replace(/^\s*'([^']+|\\')':/,'"$1":'),t=t.replace(/:\s*('')\s*$/,': ""'),t=t.replace(/:\s*'([^']+|\\')'\s*$/,': "$1"'),t};n={parseFromAem:i,tryParse:o,simpleTryParse:c},s.Z.create("tmg.json"),tmg.json=n;const g=n;tmg.parseAemJson=i},384:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),window.tmg=window.tmg||{};const s=function(e){try{let t=tmg,r=e.split(".");return"tmg"===r[0]&&(r=r.slice(1)),r.forEach((e=>{void 0===t[e]&&(t[e]={}),t=t[e]})),t}catch(t){console.warn("couldn't create namespace:",e)}};window.tmg.createNamespace=s;const n={create:s}},951:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(384),n=r(436);const i=new RegExp(/\?[^#]*|(?=#)|$/),o=(()=>{const e={};return t=>e[t]||(e[t]=new RegExp(`([?&;]${t}(?=[=&;#]|$))=?([^&;#]*)`))})(),a=(e,t)=>{const r=o(t).exec(e);return r&&decodeURIComponent(r[2])},c=(e,t,r)=>{let s,c,u;return void 0===e&&(e=n.Z.getLocation().search),null===a(e,t)?(s=`${t}=${encodeURIComponent(r)}`,c=i.exec(e)[0],u=e.replace(i,(c.length?c+"&":"?")+s)):u=e.replace(o(t),`$1=${encodeURIComponent(r)}`),u},u=(e,t)=>{let r=t;if(null!==a(t,e)){let s,n=t.split("?")[0],i=(-1!==t.indexOf("?")?t.split("?")[1]:"").split("&");for(let t=i.length-1;t>=0;t-=1)s=i[t].split("=")[0],s===e&&i.splice(t,1);return r=n+(i.length>0?"?":"")+i.join("&"),r}return r},l=(e,t)=>{const r="redirectTo";return null!==a(e,r)?c(e,r,t):e};s.Z.create("tmg.GET_PARAM"),tmg.getQuerystringParam=a,tmg.setQuerystringParam=c,tmg.removeQuerystringParam=u,tmg.updateRedirectParam=l,location.search.substr(1).split("&").forEach((e=>{const t=e.split("=");t.length>1?tmg.GET_PARAM[t[0]]=decodeURIComponent(t[1]):tmg.GET_PARAM[t[0]]=""}));const g={matchParam:o,matchQuerystring:i,getQuerystringParam:a,removeQuerystringParam:u,setQuerystringParam:c,updateRedirectParam:l}},470:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(181),n=r.n(s);r(384).Z.create("tmg.store"),tmg.store=n();const i=n()}},e=>{e(e.s=177)}]);
