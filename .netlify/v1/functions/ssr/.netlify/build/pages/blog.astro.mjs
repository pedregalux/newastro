/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CzPDkCjp.mjs';
import { $ as $$Sidebar, a as $$Layout } from '../chunks/Sidebar_BQ4nxQz8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/astro-y-tailwind.md": () => import('../chunks/astro-y-tailwind_BHettow8.mjs').then(n => n._),"./blog/neovim.md": () => import('../chunks/neovim_DLWm57BH.mjs').then(n => n._),"./blog/ricos-pobres-tecs.md": () => import('../chunks/ricos-pobres-tecs_CMhBjxEW.mjs').then(n => n._),"./blog/rss-buena-idea-pero.md": () => import('../chunks/rss-buena-idea-pero_CHd7YuHK.mjs').then(n => n._)}), () => "./blog/*.md");
  const pageTitle = "Blog";
  allPosts.sort(
    (a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> ` })}`;
}, "/home/felipe/Taller/newastro/src/pages/blog.astro", void 0);

const $$file = "/home/felipe/Taller/newastro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
