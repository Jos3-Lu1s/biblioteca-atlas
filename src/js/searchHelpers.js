import { generos, libros, autores } from "./data.js";

import { rules, norm } from "./formValidation.js";

// Helpers
const nlow = (v) => norm(v).toLowerCase();

export const searchBooks = (q) =>
  libros.filter((b) => {
    const hay = (t) => nlow(t).includes(q);
    return (
      hay(b.name) ||
      hay(b.desc) ||
      hay(b.sinopsis) ||
      (b.tags ?? []).some((tag) => nlow(tag).includes(q))
    );
  });

export const searchAuthors = (q) =>
  autores.filter((a) => {
    const hay = (t) => nlow(t).includes(q);
    return (
      hay(a.name) ||
      hay(a.bio) ||
      hay(a.nationality) ||
      (a.awards ?? []).some((p) => nlow(p).includes(q))
    );
  });

export const searchGenres = (q) =>
  generos.filter((g) => nlow(g.name).includes(q));


// validador de busquedas
export const getValidSearch = (input) => {
  const value = input.value;

  if (!rules.required(value)) {
    return { ok: false, msg: "El campo de búsqueda es obligatorio." };
  }
  if (!rules.minLength(value, 2)) {
    return { ok: false, msg: "Escribe al menos 2 caracteres." };
  }
  return { ok: true, q: nlow(value) };
};
