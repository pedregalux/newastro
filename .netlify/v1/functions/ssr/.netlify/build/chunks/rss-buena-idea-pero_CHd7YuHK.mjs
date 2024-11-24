/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_CzPDkCjp.mjs';
import { $ as $$PostLayout } from './PostLayout_BtNkpxfO.mjs';

const html = () => "";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"RSS es una gran idea, pero...","pubDate":"2024/10/05","description":"Los RSS nos permitieron ordenar la experiencia de leer cosas por la web, saber cuando hay algo nuevo,etc. Pero, todos esos sitios en los que tanta gente ha trabajado con amor para que usted los vea, ¿qué hacemos con ellos?","postimage":""};
				const file = "/home/felipe/Taller/newastro/src/pages/blog/rss-buena-idea-pero.md";
				const url = "/blog/rss-buena-idea-pero";
				function rawContent() {
					return "";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
