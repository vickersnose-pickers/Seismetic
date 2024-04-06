if (window.self !== window.top) {
    console.log('Iframed');
} else {
    const url = window.location.href + 'browser/';
    const ScriptURL = window.location.href + 'Assets/javascript/TabSystem.js';
    const CSS_URL = window.location.href + 'Assets/css/browser.css';
    var newWindow = window.open("", "newWindow", "width=1200,height=750");
    newWindow.document.write(
        `<!DOCTYPE html>

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="${CSS_URL}">
        <link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..30,100..700,0..1,-50..100" />
        </head>
        
        <body>
          <div class="BrowserBar">
            <div class="Tab" id="Tab1">
              <div class="LittleLine"></div>
              <div class="BigLine">
                <p id="Tab1_p">New Tab</p>
                <a>X</a>
              </div>
            </div>
            <button class="adds" id="add">+</button>
          </div>
          <div class="ActionBar">
            <div class="BrowserControls">
              <button id="back"><span class="material-symbols-outlined">arrow_back</span></button>
              <button id="forward"><span class="material-symbols-outlined">arrow_forward</span></button>
              <button id="refresh"><span class="material-symbols-outlined">refresh</span></button>
              <button id="home"><span class="material-symbols-outlined">home</span></button>
            </div>
            <div class="BrowserSearch">
              <div class="SafetyIcon"></div>
              <input placeholder="Search or type a URL" id="BrowserBar">
            </div>
            <div class="BrowserExtras"></div>
          </div>
          <script src="${ScriptURL}"></script>
        </body>
        </html>`
    );
    window.location.href = 'https://google.com';
}
