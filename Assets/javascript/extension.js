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
