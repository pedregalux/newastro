/* empty css                                */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_BYwAOejc.mjs';
import { $ as $$Sidebar, a as $$Layout } from '../chunks/Sidebar_C9AiCgNx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/astro-y-tailwind.md": () => import('../chunks/astro-y-tailwind_DKrgz9wl.mjs').then(n => n._),"./blog/neovim.md": () => import('../chunks/neovim_BmRdZPCc.mjs').then(n => n._),"./blog/ricos-pobres-tecs.md": () => import('../chunks/ricos-pobres-tecs_DP6XMOmM.mjs').then(n => n._),"./blog/rss-buena-idea-pero.md": () => import('../chunks/rss-buena-idea-pero_6z_Kwb-3.mjs').then(n => n._)}), () => "./blog/*.md");
  const pageTitle = "Blog";
  allPosts.sort(
    (a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> ` })}`;
}, "/home/felipe/Taller/newastro/src/pages/blog.astro", undefined);

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
