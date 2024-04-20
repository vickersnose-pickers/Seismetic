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
    <p>${name}</p>
    <button onclick="ExecuteScript('${id}')">▶</button>
    </div>
    </img>`;

    document.getElementById('ext').appendChild(Extension);
}


if (localStorage.getItem('installationData')) {
    document.getElementById('NoExtensionsAvailable').remove()
    if (localStorage.hasOwnProperty('installationData')) {
        var dataArray = JSON.parse(localStorage.getItem('installationData'));
        dataArray.forEach(function(item) {
            HyperlinkExtension(item.id, item.name);
        });
    }
}