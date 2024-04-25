

 


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
  const custom_url = `rammerhead.html#go=${url}`
  return custom_url;
}

function return_nu_url(url) {
  const custom_url = `/webinstance/${url}`
  return custom_url;
}

function GetProxyURL(url) {
  let DataSample = JSON.parse(localStorage.getItem('basic-config'));

  if (DataSample.proxy == 1) {
    return return_uv_url(url)
  } else if (DataSample.proxy == 2) {
    return return_rh_url(url)
  } else if (DataSample.proxy == 3) {
    return return_dn_url(url)
  } else if (DataSample.proxy == 4) {
    return return_nu_url(url)
  }
}