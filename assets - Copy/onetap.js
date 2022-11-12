/* eslint-disable no-var */

(function () {
  'use strict';

  var debug = window && window.location && window.location.search && window.location.search.indexOf('debug=onetap')!==-1

  function loadUserLib(successCallback, errorCallback) {

    function loadScript(url) {
      debug && console.log('LOADING', url);
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onerror = errorCallback;
      script.onload = successCallback;

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
        scriptHref = 'https://secure.telegraph.co.uk/customer/lib/tmguser';
      }
    }
    scriptHref = scriptHref.replace(/onetap/g, 'tmguser');

    if (/qa6.telegraph.co.uk/.test(scriptHref)) {
      loadScript(scriptHref + '@v1.0.0/tmguser.qa6.js');
    } else if (/qa5.telegraph.co.uk/.test(scriptHref)) {
      loadScript(scriptHref + '@v1.0.0/tmguser.qa5.js');
    } else if (/staging-ams64.telegraph.co.uk/.test(scriptHref)) {
      loadScript(scriptHref + '@v1.0.0/tmguser.stg.js');
    } else {
      loadScript(scriptHref + '@v1.0.0/tmguser.js');
    }
  }

  function insertOntap() {

    var alreadyNotified = false;
    window.onetapstatus = function(notification) {
      if(!alreadyNotified) {
        alreadyNotified = true;

        var message;
        if(notification && notification.getNotDisplayedReason()) {
          message = 'one-tap-will-not-load';
        } else {
          message ='one-tap-will-load';
        }   
        if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
          window.martech.tools.callbacks(message);
        } else {
          console.log('Cannot find window.martech.tools.callbacks(\'one-tap-will-load\')');
        }
      }
    }

    window.onetaplogin = function (response) {
      debug && console.log('GOOGLE RESPONSE', response);

      if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
        window.martech.tools.callbacks('google-one-tap-loader');
      } else {
        console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-loader\')');
      }

      tmguser.login('token', 'google', response.credential).then(
        function (data) {
          debug && console.log('Login with success', data);
          if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
            window.martech.tools.callbacks('google-one-tap-login');
          } else {
            console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-login\')');
          }
        },
        function (err) {
          debug && console.log('Login err', err);
          var error = err && err.response && err.response.status;
          if (error === 401) {
            var email = err.response.data.socialProfile.email;
            var firstName = err.response.data.socialProfile.firstName || '';
            var lastName = err.response.data.socialProfile.lastName || '';
            tmguser.createSSOAccount(email, firstName, lastName, 'google').then(
              function (createAccountResponse) {
                debug && console.log('createAccountResponse', createAccountResponse);
                if (createAccountResponse.http_code >= 400) {
                  debug && console.log('Error', createAccountResponse);
                  if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
                    window.martech.tools.callbacks('google-one-tap-error');
                  } else {
                    debug && console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-error\')');
                  }
                } else {
                  window.dataLayer = {
                    event: ['registrationComplete'],
                    pageName: 'Onetap',
                    pageType: 'onetapRenderer',
                    pageId: '',
                    registration: { registrationType: 'onetap', emailOptIn: false },
                    rollupContentPath: '',
                    userStatus: 'registered',
                    subscription: {
                      productId: '',
                      paymentPlan: '',
                    }
                  };

                  var apiIdToken = createAccountResponse.accessToken.id_token;
                  var apiAccessToken = createAccountResponse.accessToken.access_token;

                  debug && console.log('loginWithSSO === linkSSOAccount', apiIdToken, apiAccessToken);
                  tmguser.linkSSOAccount(response.credential, 'google', apiIdToken, apiAccessToken).then(
                    function (linkResponse) {
                      if (createAccountResponse.http_code >= 400) {
                        debug && console.log('Error', response);
                        if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
                          window.martech.tools.callbacks('google-one-tap-error');
                        } else {
                          debug && console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-error\')');
                        }
                      } else {
                        debug && console.log('ACCOUNT LINKED', linkResponse);
                        tmguser.login('token', 'google', response.credential).then(_ => {
                          if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
                            window.martech.tools.callbacks('google-one-tap-reg');
                          } else {
                            debug && console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-reg\')');
                          }
                        })
                      }
                    },
                    function (linkError) {
                      debug && console.log('CANNOT LINK ACCOUNT', linkError);
                      if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
                        window.martech.tools.callbacks('google-one-tap-error');
                      } else {
                        debug && console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-error\')');
                      }
                    }
                  )
                }
              },
              function (createAccountErr) {
                debug && console.log('CANNOT CREATE SSO ACCOUNT', createAccountErr);
                if(window && window.martech && window.martech.tools && window.martech.tools.callbacks){
                  window.martech.tools.callbacks('google-one-tap-error');
                } else {
                  debug && console.log('Cannot find window.martech.tools.callbacks(\'google-one-tap-error\')');
                }
              }
            )
          }
        }
      )
    }

    var g_id = document.createElement('div');
    g_id.id = 'g_id_onload';
    g_id.setAttribute('data-client_id', '537085313350-c3frt0pajh077k8gvr6khb14f9eb7frp.apps.googleusercontent.com');
    g_id.setAttribute('data-prompt_parent_id', 'on_tap');
    g_id.setAttribute('data-auto_select', 'false');
    g_id.setAttribute('data-state_cookie_domain', 'telegraph.co.uk');

    g_id.setAttribute('data-callback', 'onetaplogin');
    g_id.setAttribute('data-moment_callback', 'onetapstatus');
    g_id.setAttribute('data-context', 'signin');
    g_id.setAttribute('data-itp_support', 'true');

    document.getElementsByTagName('body')[0].appendChild(g_id);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  loadUserLib(
    function () {
      var tmguser = window.tmguser;
      var loggedIn = tmguser.__userData();
      if (!loggedIn) {
        debug && console.log('tmguser', tmguser);
        insertOntap();
      } else {
        debug && console.log('Already loggged in');
        if(window && window.martech && window.martech.tools && window.martech.tools.callbacks) {
          window.martech.tools.callbacks('one-tap-will-not-load');
        } else {
          console.log('Cannot find window.martech.tools.callbacks(\'one-tap-will-not-load\')');
        }
      }
    },
    function (err) {
      debug && console.log('CANNOT LOAD USER LIB', err);
      if(window && window.martech && window.martech.tools && window.martech.tools.callbacks) {
        window.martech.tools.callbacks('one-tap-will-not-load');
      } else {
        console.log('Cannot find window.martech.tools.callbacks(\'one-tap-will-not-load\')');
      }
    })

}());
