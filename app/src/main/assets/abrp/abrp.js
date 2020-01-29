//add replacement for $.getJSON
var s = document.createElement("script");
s.src = browser.runtime.getURL("getjson.js");
(document.head || document.documentElement).appendChild(s);

//listener for telemetry messages from background js
browser.runtime.onMessage.addListener(request => {
  if(request.tlm) {
    window.wrappedJSObject.abrptransmitterTlm = cloneInto(request.tlm, window);
  }
});