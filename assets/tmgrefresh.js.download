(function () {
  'use strict';

  function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  var scriptHref = '';
  // IE sucks
  if (document.currentScript) {
    var currentScript = document.currentScript;
    var currentScriptUrl = currentScript.src;
    scriptHref = currentScriptUrl.substring(0, currentScriptUrl.length - 3); // remove .js
  } else {
    // see https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/document/currentScript/polyfill.js
    var scripts = document.getElementsByTagName('script');
    try {
      throw new Error();
    } catch (err) {
      var i = 0;
      var res = ((/.*at [^(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];
      for (i = 0; i < scripts.length; i++) {
        if (scripts[i].src === res) {
          scriptHref = scripts[i].src;
          break;
        }
      }
    }

    // just use prod
    if (!scriptHref) {
      scriptHref = 'https://secure.telegraph.co.uk/customer/lib/tmgrefresh';
    }
  }

  if (/qa6.telegraph.co.uk/.test(scriptHref)) {
    loadScript(scriptHref + '@v1.0.0/tmgrefresh.qa6.js');
    loadScript('https://qa6.telegraph.co.uk/customer/lib/onetap.js');
  } else if (/qa5.telegraph.co.uk/.test(scriptHref)) {
    loadScript(scriptHref + '@v1.0.0/tmgrefresh.qa5.js');
    loadScript('https://qa5.telegraph.co.uk/customer/lib/onetap.js');
  } else if (/secure.telegraph.co.uk/.test(scriptHref)) {
    loadScript(scriptHref + '@v1.0.0/tmgrefresh.js');
  } else {
    loadScript(scriptHref + '@v1.0.0/tmgrefresh.stg.js');
  }
}());
