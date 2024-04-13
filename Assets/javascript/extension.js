async function ExecuteScript(script) {
    const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
    const doc = Iframe.contentDocument;
    try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/SeismeticNetwork/cdn@latest/${script}.js`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const scriptText = await response.text();
        const scriptElement = doc.createElement('script');
        scriptElement.textContent = scriptText;
        doc.body.appendChild(scriptElement);
        console.log(scriptText);
    } catch (error) {
        console.error('Error fetching script:', error);
    }
}


function HyperlinkExtension(id, name) {
    const Extension = document.createElement('div')
    Extension.className = 'ExtensionCard';  
    Extension.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/SeismeticNetwork/cdn@latest/${id}_ico.png" alt="Eruda">
    <div class="bigbox">
      <p>${name}</p>
     <button onclick="ExecuteScript('${id}')">Exeute</button>
    </div>
    </img>`;

    document.getElementById('ext').appendChild(Extension);
}

//<div class="ExtensionCard">
//<img src="https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdE5VzPRli24SpK9ph68u1Y=/eruda-mobile-browser-console-2023-01-04%2000-00-00-2024-03-06%2017-34-30" alt="Eruda">
//<div class="bigbox">
//  <p>Eruda</p>
// <button onclick="ExecuteScript('eruda')">Exeute</button>
//</div>
//</img></div>