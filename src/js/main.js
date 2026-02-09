import { generos, libros, autores } from "./data.js";

/* ========== APP ========== */
const app = document.querySelector("#app");
const render = (html) => (app.innerHTML = html);

const renderBreadcrumb = () => {
  const breadCrumb = document.querySelector(".brcr");
  breadCrumb.innerHTML = "";

  const nav = document.createElement("nav");
  const lista = document.createElement("ol");
  lista.classList.add("breadcrumb");

  const paginaInicial = ["pag", "Libreria"];
  const refGeneros = generos.map((g) => [g.id, g.name]);
  const refLibros = libros.map((l) => [l.id, l.name]);
  const refAutores = autores.map((a) => [a.id, a.name]);
  const mapaRutas = [paginaInicial, ...refGeneros, ...refLibros, ...refAutores];

  let buscar = breadCrumb.id;

  console.table(mapaRutas);
  console.table(buscar);

  while (buscar.length >= 3) {
    let encontrado = mapaRutas.find((ruta) => ruta[0] === buscar);
    if (encontrado) {
        console.log(encontrado);
        
      const idRuta = encontrado[0];

      const li = document.createElement("li");
      li.classList.add("breadcrumb-item");

      const a = document.createElement("a");
      a.textContent = encontrado[1];
      a.href = "#";

      if (idRuta === breadCrumb.id) {
        li.classList.add("active");
        a.removeAttribute("href");
      }

      a.onclick = (e) => {
        e.preventDefault();

        if (idRuta === "pag") {
          renderHome();
        } else if (generos.some((g) => g.id === idRuta)) {
          loadGenre(idRuta);
        } else if (libros.some((l) => l.id === idRuta)) {
          loadBook(idRuta);
        } else if (autores.some((a) => a.id === idRuta)) {
          loadAuthor(idRuta);
        }
      };

      li.appendChild(a);
      lista.prepend(li);
    }
    buscar = buscar.substring(0, buscar.length - 1);
  }

  nav.appendChild(lista);
  breadCrumb.appendChild(nav);
};

const renderHeader = () => `
  <div class="border border-bottom text-center bg-white">
    <img
      class="d-block mx-auto mb-4"
      src="./src/asset/images/atlas.jpg"
      alt=""
      width="250"
    />
    <h1 class="display-5 fw-bold text-body-emphasis">Biblioteca Atlas</h1>

    <div class="col-lg-6 mx-auto">
      <p class="text-muted lead mb-4">
        <i class="fa fa-quote-left"></i>
        Un mundo de historias en un solo lugar
        <i class="fa fa-quote-right"></i>
      </p>
    </div>
  </div>
`;

/* HOME */
const renderHome = () => {
  render(`
    ${renderHeader()}
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-8">
                <div id="pag" class="brcr"></div>
                <div class="row g-4">
                    ${generos
                      .map(
                        (g) => `
                        <div class="col-md-4 col-sm-6">
                            <div class="card h-100 shadow-sm border-0" onclick="loadGenre('${g.id}')" role="button">

                                <!-- Imagen con overlay visual -->
                                <div class="position-relative">
                                    <img 
                                        src="https://placehold.co/600x400?text=${encodeURIComponent(g.name)}" 
                                        class="card-img-top" 
                                        alt="${g.name}"
                                    >

                                    <span class="badge bg-dark position-absolute top-0 end-0 m-2">
                                        <i class="fa fa-book"></i> ${g.name}
                                    </span>
                                </div>

                                <div class="card-footer bg-light text-center small text-muted">
                                    <i class="fa fa-arrow-right"></i> Explorar categoría
                                </div>

                            </div>
                        </div>

                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    </div>
  `);
  renderBreadcrumb();
};

/* GENRE */
window.loadGenre = (id) => {
  const genre = generos.find((g) => g.id === id);
  const list = libros.filter((b) => b.genreId === id);

  render(`
    ${renderHeader()}

    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">

        <div id="${genre.id}" class="brcr"></div>
          <div class="row g-4">
            ${list
              .map(
                (b) => `
                <div class="col-md-4 col-sm-6">
                  <div
                    onclick="loadBook('${b.id}')"
                    role="button"
                  >
                    <div class="card border-0 shadow-sm">
                      <img
                        src="https://placehold.co/400x600?text=${b.name}"
                        class="card-img-top"
                        alt="${b.name}"
                      />

                      <div class="card-body bg-dark text-white text-center">
                        <h5 class="card-title mb-1">${b.name}</h5>
                      </div>

                      <span class="badge bg-secondary position-absolute top-0 end-0 m-2">
                        <i class="fa fa-book"></i> ${genre.name}
                      </span>

                      <div class="card-footer text-center small">
                        <i class="fa fa-arrow-right"></i> Ver libro
                      </div>
                    </div>
                  </div>
                </div>
              `,
              )
              .join("")}
          </div>

        </div>
      </div>
    </div>
  `);
  renderBreadcrumb();
};

/* BOOK */
window.loadBook = (id) => {
  const book = libros.find((b) => b.id === id);
  const author = autores.find((a) => a.id === book.authorId);
  const genre = generos.find((g) => g.id === book.genreId);

  render(`
    ${renderHeader()}

    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">

          <div id="${book.id}" class="brcr"></div>

          <!-- Tarjeta del libro -->
          <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div class="row g-0">

              <div class="col-md-4 text-center p-4 bg-light">
                <img
                  src="${book.cover || "https://placehold.co/400x600?text=" + book.name}"
                  class="img-fluid rounded shadow mb-3"
                  alt="${book.name}"
                />

                <span class="badge bg-primary">${genre.name}</span>
                <span class="badge bg-warning text-dark ms-1">${book.year}</span>
              </div>

              <div class="col-md-8">
                <div class="card-body p-4">

                  <h2 class="fw-bold mb-2">
                    <i class="fa fa-book text-primary"></i> ${book.name}
                  </h2>

                  <p class="mb-2">
                    <i class="fa fa-user text-secondary"></i> Autor:
                    <a
                      href="#"
                      onclick="loadAuthor('${author.id}')"
                      class="fw-semibold text-decoration-none"
                    >
                      ${author.name}
                    </a>
                  </p>

                  <p class="mb-2">
                    <i class="fa fa-building text-secondary"></i>
                    Editorial: <strong>${book.publisher}</strong>
                  </p>

                  <p class="mb-3">
                    <i class="fa fa-star text-warning"></i>
                    Rating: <strong>${book.rating}</strong> / 5
                  </p>

                  <div class="mb-3">
                    ${book.tags
                      .map(
                        (tag) =>
                          `<span class="badge bg-secondary me-1">${tag}</span>`,
                      )
                      .join("")}
                  </div>

                  <p class="text-muted fst-italic">${book.desc}</p>

                  <div class="mt-3">
                    <h5 class="fw-bold">📖 Sinopsis</h5>
                    <p class="text-justify">${book.sinopsis}</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `);
  renderBreadcrumb();
};

/* AUTHOR */
window.loadAuthor = (id) => {
  const author = autores.find((a) => a.id === id);
  const authorlibros = libros.filter((b) => b.authorId === id);

  render(`
    ${renderHeader()}

    <!-- CONTENIDO DEL AUTOR -->
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-8">

          <div id="${author.id}" class="brcr"></div>

          <div class="card shadow-lg border-0 rounded-4 overflow-hidden">

            <!-- Header del autor -->
            <div class="bg-dark text-white p-4">
              <h2 class="fw-bold mb-1">
                <i class="fa fa-user"></i> ${author.name}
              </h2>
              <p class="fst-italic mb-0">
                "${author.quote}"
              </p>
            </div>

            <div class="card-body p-4">

              <!-- Datos básicos -->
              <div class="row mb-4">
                <div class="col-md-6">
                  <p>
                    <i class="fa fa-flag text-primary"></i>
                    <strong>Nacionalidad:</strong> ${author.nationality}
                  </p>
                </div>
                <div class="col-md-3">
                  <p>
                    <i class="fa fa-calendar text-success"></i>
                    <strong>Nacimiento:</strong> ${author.birthYear}
                  </p>
                </div>
                <div class="col-md-3">
                  <p>
                    <i class="fa fa-skull text-danger"></i>
                    <strong>Fallecimiento:</strong> ${author.deathYear}
                  </p>
                </div>
              </div>

              <!-- Biografía -->
              <div class="mb-4">
                <h4 class="fw-bold">
                  <i class="fa fa-info-circle text-secondary"></i> Biografía
                </h4>
                <p class="text-muted">${author.bio}</p>
              </div>

              <!-- Premios -->
              <div class="mb-4">
                <h4 class="fw-bold">
                  <i class="fa fa-trophy text-warning"></i> Premios
                </h4>
                <ul class="list-group list-group-flush">
                  ${author.awards
                    .map(
                      (a) => `
                        <li class="list-group-item">
                          <i class="fa fa-award text-warning"></i> ${a}
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>

              <!-- Libros -->
              <div>
                <h4 class="fw-bold">
                  <i class="fa fa-book text-primary"></i> Libros del autor
                </h4>
                <ul class="list-group">
                  ${authorlibros
                    .map(
                      (b) => `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          <span><i class="fa fa-book"></i> ${b.name}</span>
                          <span class="badge bg-secondary">${b.year}</span>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `);
  renderBreadcrumb();
};

renderHome();
