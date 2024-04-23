// int
function HideOthers() {
    var settingPanels = document.querySelectorAll('.SettingPanel');
    settingPanels.forEach(function(panel) {
        var divsInsidePanel = panel.querySelectorAll('div');
        divsInsidePanel.forEach(function(div) {
            if (div.id.includes('_card')) {
                div.style.display = 'none';
            } else {
                console.log('w')
            }
        });
    });
}

function OpenCard(id) {
    HideOthers()
    document.getElementById(`${id}_card`).style.display = 'flex';
}

let proxy;
let airplane_mode;
var data = JSON.parse(localStorage.getItem('basic-config'));

if (data.airplane_mode === true) {
    document.getElementById('checkbox-1').value = true;
} 

document.getElementById('checkbox-1').onclick = function () {
    const Checkbox = document.getElementById('checkbox-1').value
    airplane_mode = Checkbox;
}
document.getElementById(TradeNumb(data.proxy)).style.border = '1px green solid';
function SetProxy(numb) {
    proxy = numb;
    HideAll();
    const OldData = JSON.parse(localStorage.getItem('basic-config'));
    var jsonData = { airplane_mode: OldData.airplane_mode, search_engine: OldData.search_engine, proxy: numb, theme: OldData.theme, proxy_opening_mode: OldData.proxy_opening_mode};
    var jsonString = JSON.stringify(jsonData);
    localStorage.setItem('basic-config', jsonString);
    document.getElementById(TradeNumb(numb)).style.border = '1px green solid';
}

function setBrowsingMode(mode) {
    const OldData = JSON.parse(localStorage.getItem('basic-config'));
    var jsonData = { airplane_mode: OldData.airplane_mode, search_engine: OldData.search_engine, proxy: OldData.proxy, theme: OldData.theme, proxy_opening_mode: mode};
    var jsonString = JSON.stringify(jsonData);
    localStorage.setItem('basic-config', jsonString);
}

function HideAll() {
    const bs = document.getElementsByClassName('ProxySelectionTab');
    for (let i = 0; i < bs.length; i++) {
        bs[i].style.border = '1px solid #282828';
    }
}


function TradeNumb(numb) {
    const trades = {
        1: 'uv',
        2: 'rh',
        3: 'dn',
        4: 'nu'
    };
    return trades[numb] || '';
}

function apply_theme() {
    const OldData = JSON.parse(localStorage.getItem('basic-config'));
    var jsonData = { airplane_mode: OldData.airplane_mode, search_engine: OldData.search_engine, proxy: OldData.proxy, theme: document.getElementById('themes').value, proxy_opening_mode: OldData.proxy_opening_mode};
    var jsonString = JSON.stringify(jsonData);
    localStorage.setItem('basic-config', jsonString);
}