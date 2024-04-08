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
  const url = search(address.value, searchEngine.value);

  window.location.href = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
});