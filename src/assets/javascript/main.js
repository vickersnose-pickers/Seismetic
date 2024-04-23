setTimeout(() => {
    navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix,
      });
}, 103);

 


  const form = document.getElementById("psearch");
const address = document.getElementById("pbox");
const searchEngine = document.getElementById("search_engine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, JSON.parse(localStorage.getItem('basic-config')).search_engine || 'https://www.google.com/search?q=%s');
  var config = JSON.parse(localStorage.getItem('basic-config'));
  const ProxyURL = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
  eval(`${JSON.parse(localStorage.getItem('basic-config')).proxy_opening_mode || 'main'}('${ProxyURL}')`);
  window.parent.postMessage(`ReplaceURL('${url}')`, '*');
});

function main(url) {
  window.location.href = url;
}