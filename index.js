/*
/Array de rutas posibles y funciones
*/
function handleRoute(route) {
  const routes = [
    {
      path: /sit1\/./,
      handler: () => {
        console.log("Handler sit 1");
      },
    },
    {
      path: /sit2\/./,
      handler: () => {
        console.log("Handler sit 2");
      },
    },
    {
      path: /searchButton\/./,
      handler: () => {
        console.log("Buscador");
      },
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      r.handler();
    }
  }
}
function gotTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
  /*
  /Esto sería el router en sí
  */
}

(function () {
  const sit1ButtonEl = document.querySelector(".sit-1");
  const sit2ButtonEl = document.querySelector(".sit-2");
  const searchButtonEl = document.querySelector(".searchButton");

  sit1.addEventListener("click", () => gotTo("./sit1"));
  sit2.addEventListener("click", () => gotTo("./sit2"));
  sit2.addEventListener("click", () => gotTo("./searchButton"));

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
