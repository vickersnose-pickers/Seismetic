let TabCount = 0;
let SelectedTab = 0
function CreateTab() {
    TabCount = TabCount + 1
    const Identifier = TabCount;
    SelectedTab = Identifier;
    HideIframes();
    const Iframe = document.createElement('iframe');
    document.getElementById('Iframeholder').appendChild(Iframe);
    Iframe.src = `/BrowserPages/`;
    Iframe.id = `Tab${Identifier}_IFRAME`;
    const TabDiv = document.createElement('div');
    TabDiv.className = 'Tab';
    TabDiv.id = 'Tab' + Identifier;
    TabDiv.innerHTML = `
    <div class="LittleLine"></div>
      <div class="BigLine">
        <p id="Tab${Identifier}_p">Tab ${Identifier}</p>
        <a onclick="KillTab(${Identifier})">X</a>
      </div>`
      document.getElementById('BrowserAppend').appendChild(TabDiv);
      document.head.appendChild(document.getElementById('add'))
      document.getElementById('BrowserAppend').appendChild(document.getElementById('add'))
      TabDiv.onclick = function () {
        SelectedTab = Identifier
        HideIframes()
        Iframe.style.display = 'flex';
      }
}

function KillTab(id) {
    document.getElementById('Tab' + id).remove()
    document.getElementById(`Tab${id}_IFRAME`).remove()
}

CreateTab()


function HideIframes() {
  var iframeHolder = document.getElementById('Iframeholder');
    if (iframeHolder) {
        var iframes = iframeHolder.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].style.display = 'none';
        }
    } else {
        console.error("Element with ID 'IframeHolder' not found.");
    }
}

/////////////

document.getElementById('back').onclick = function () {
  const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
  Iframe.contentWindow.history.back();
}

document.getElementById('forward').onclick = function () {
  const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
  Iframe.contentWindow.history.forward();
}

document.getElementById('refresh').onclick = function () {
  const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
  Iframe.contentDocument.location.reload();
}

document.getElementById('home').onclick = function () {
  const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
  Iframe.src = '/BrowserPages/';
}