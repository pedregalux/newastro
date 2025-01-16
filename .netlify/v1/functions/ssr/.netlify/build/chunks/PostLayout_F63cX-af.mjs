import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, h as renderSlot } from './astro/server_CzPDkCjp.mjs';
import { $ as $$Sidebar, a as $$Layout } from './Sidebar_13OncO8c.mjs';

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> <h2>${frontmatter.title}</h2> <div class="text-pretty mt-5 mb-5 ml-10 mr-20"> <b class="text-pretty-white md:font-medium md:text-2xl">${frontmatter.description}</b> </div> <img${addAttribute(frontmatter.postimage, "src")} class="mt-5 mb-10 mr-auto ml-auto rounded-full"> ${renderSlot($$result2, $$slots["default"])} </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div>` })}`;
}, "/home/felipe/Taller/newastro/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
