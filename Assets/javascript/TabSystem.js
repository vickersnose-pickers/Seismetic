let TabCount = 0;

function CreateTab() {
    TabCount = TabCount + 1
    const Identifier = TabCount;
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
}

function KillTab(id) {
    document.getElementById('Tab' + id).remove()
}

CreateTab()