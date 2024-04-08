function startMain() {
  function checkPopupPermissions() {
    var isAllowed = false;
    var popup = window.open("", "_blank", "width=100,height=100");
    
    if (popup) {
        popup.close();
        isAllowed = true;
    }
    
    return isAllowed;
  }
  
  if (checkPopupPermissions()) {
    if (window.self !== window.top) { console.log('Iframed'); } else { const url = window.location.href + 'browser/'; const ScriptURL = window.location.href + 'Assets/javascript/TabSystem.js'; const CSS_URL = window.location.href + 'Assets/css/browser.css'; var newWindow = window.open("", "newWindow", "width=1200,height=750"); newWindow.document.write( `
    <html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
      }
      
      iframe {
        width: 100%;
        height: 100vh;
        border: none;
      }
    </style>
  </head>
  <body>
    <iframe src='${url}'>
  </body>
 </html>
    ` ); window.location.href = 'https://google.com'; }
  } else {
    document.getElementById('Popup').style.display = 'flex';
  }
}

startMain()