document.body.onload = function () {
    fetch('../Assets/javascript/game.json', {
        cache: 'no-store'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(game_info => {
            let ProxyMode;
            const gameDiv = document.createElement('div');
            gameDiv.className = 'AppDiv';
            gameDiv.innerHTML = `
                <img alt="Game Logo" src="${game_info.icon}">
                <p>${game_info.Name}</p>
                <button onclick="idk_continue_tmrw">▶</button>`;
            document.getElementById('div').appendChild(gameDiv);
        });
    })
    .catch(error => {
        console.error('An error occurred during the fetch operation:', error);
    });
}



function return_uv_url(url) {
    const custom_url = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
    return custom_url
  }
  
  function return_dn_url(url) {
    const custom_url = `${__dynamic$config.prefix}${__uv$config.encodeUrl(url)}`
    return custom_url
  }
  
  function return_rh_url(url) {
    const custom_url = `../rammerhead.html#${url}`
    return custom_url;
  }
  
  function return_nu_url(url) {
    const custom_url = `/webinstance/${url}`
    return custom_url;
  }


  function GetProxyURL(url) {
    let DataSample = JSON.parse(localStorage.getItem('basic-config'));
  
    const proxyMap = {
      1: return_uv_url,
      2: return_rh_url,
      3: return_dn_url,
      4: return_nu_url
    };
  
    let proxyFunction = proxyMap[DataSample.proxy];
    if (proxyFunction) {
      return proxyFunction(url);
    }
  }
function redirect(url) {
    window.location.href = url
}