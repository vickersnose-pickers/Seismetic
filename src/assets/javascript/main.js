

 


  const form = document.getElementById("psearch");
const address = document.getElementById("pbox");
const searchEngine = document.getElementById("search_engine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, JSON.parse(localStorage.getItem('basic-config')).search_engine || 'https://www.google.com/search?q=%s');
  var config = JSON.parse(localStorage.getItem('basic-config'));
  const ProxyURL = GetProxyURL(url)
  eval(`${JSON.parse(localStorage.getItem('basic-config')).proxy_opening_mode || 'main'}('${ProxyURL}')`);
  window.parent.postMessage(`ReplaceURL('${url}')`, '*');
});

function main(url) {
  window.location.href = url;
}

//returns

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
