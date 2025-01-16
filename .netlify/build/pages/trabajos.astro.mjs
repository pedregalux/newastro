/* empty css                                */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BYwAOejc.mjs';
import { $ as $$Sidebar, a as $$Layout } from '../chunks/Sidebar_C9AiCgNx.mjs';
export { renderers } from '../renderers.mjs';

const $$Trabajos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> <h2>Trabajos</h2> <p>ya vienen...</p> </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> ` })} `;
}, "/home/felipe/Taller/newastro/src/pages/trabajos.astro", undefined);

const $$file = "/home/felipe/Taller/newastro/src/pages/trabajos.astro";
const $$url = "/trabajos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Trabajos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
