
/* ====== Utils ====== */
export const norm = (v) => (v ?? "").toString().trim();


/* ====== Reglas (validadores puros) ====== */
export const rules = {
  required: (v) => norm(v).length > 0,
  minLength: (v, n) => norm(v).length >= n,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(norm(v)),
  numeric: (v) => /^-?\d+(\.\d+)?$/.test(norm(v)),
};

/* ====== UI de errores (Bootstrap-friendly) ====== */
export const setFieldError = (input, message) => {
  input.classList.add("is-invalid");

  // Para input-group, buscamos/creamos un invalid-feedback cerca
  let fb =
    input.closest(".input-group")?.querySelector(".invalid-feedback") ||
    input.parentElement?.querySelector(".invalid-feedback");

  if (!fb) {
    fb = document.createElement("div");
    fb.className = "invalid-feedback";
    (input.closest(".input-group") || input.parentElement).appendChild(fb);
  }

  fb.textContent = message;
};

export const clearFieldError = (input) => {
  input.classList.remove("is-invalid");
  const fb =
    input.closest(".input-group")?.querySelector(".invalid-feedback") ||
    input.parentElement?.querySelector(".invalid-feedback");
  if (fb) fb.textContent = "";
};

/* ====== Motor de validación (evita envío si hay errores) ======
   schema ejemplo:
   {
     email: [{ rule:"required", msg:"..." }, { rule:"email", msg:"..." }],
     age: [{ rule:"numeric", msg:"..." }]
   }
*/
export const validateForm = (form, schema) => {
  let ok = true;

  for (const [name, validators] of Object.entries(schema)) {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) continue;

    clearFieldError(input);

    for (const v of validators) {
      const pass =
        v.value !== undefined
          ? rules[v.rule](input.value, v.value)
          : rules[v.rule](input.value);

      if (!pass) {
        setFieldError(input, v.msg || "Campo inválido.");
        ok = false;
        break;
      }
    }
  }

  return ok;
};
