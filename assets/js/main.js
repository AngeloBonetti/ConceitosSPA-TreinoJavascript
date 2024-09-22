import { Router } from "./router.js";

const router = new Router();

router.add("/[object%20HTMLImageElement]", "/assets/pages/home.html");
router.add("/index.html", "/assets/pages/home.html");
router.add("/home", "/assets/pages/home.html");
router.add("/oUniverso", "/assets/pages/oUniverso.html");
router.add("/exploracao", "/assets/pages/exploracao.html");

const btn = document.querySelectorAll(".menu");
btn.forEach((btn) => {
  btn.addEventListener("click", route);
});

function route(event) {
  event.preventDefault();
  window.history.pushState({}, "", event.target); //usado para ver o historico da janela, no caso to falando pra pegar do historico a informação de target, que seria o href
  //tambem poderia colcoar event.target.href para especificar mais, mas no caso assim ja estava funcionando

  router.handle();
}

//esse era o antigo jeito, foi substituido para usar a class
/* const routes = {
  "/[object%20HTMLImageElement]": "/assets/pages/home.html",
  "/assets/": "/assets/pages/home.html",
  "/home": "/assets/pages/home.html",
  "/oUniverso": "/assets/pages/oUniverso.html",
  "/exploracao": "/assets/pages/exploracao.html",
}; */

window.onpopstate = () => handle(); //quanto eu clicar na seta do navegador <- -> pra ir pra pagina anterior, vai executar a função handle, indo para a aba anterior.
router.handle();
