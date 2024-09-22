export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  handle() {
    const pathname = window.location.pathname;
    /* console.log(pathname);
    console.log(this.routes[pathname]); */
    const route = this.routes[pathname];
    fetch(route).then((data) =>
      data.text().then((html) => {
        document.querySelector("#app").innerHTML = html;
      })
    );
  }

  /* fetch(route) // vai lá e pega os dados que serão retornados por essa rota (route)
      
              .then(data => data.text()) //logo após, coloque esses dados numa variável data. com essa variável data, retorne o valor desse objeto em forma de text. Ou seja, nada mais do que formatar o valor recebido como um objeto em data.
      
              .then(html => console.log(html) //finalmente, receba o valor formatado de data, e os coloque na variável html. No final, execute um console.log dessa variável html.
      )
       */
}
