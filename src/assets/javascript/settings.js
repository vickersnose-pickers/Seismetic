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