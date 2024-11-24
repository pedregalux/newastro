/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_CzPDkCjp.mjs';
import { $ as $$PostLayout } from './PostLayout_BtNkpxfO.mjs';

const html = () => "<p>Neovim es un software famoso. Todos los programadores lo conocen, aunque sea de oída. Famoso también es el nivel de fanatismo de sus usuarios, los consejos y la recomendación constante y sostenida de que “es un editor que vas a amar y te cambiará la vida”.</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Neovim, todo lo bueno que digan es verdad","pubDate":"2024/11/02","description":"No es fácil y hay un tiempo necesario para acostumbrarse y avanzar un poco, sin embargo cuando empiezas a despegar de verdad te gusta el editor. Es como en la antiguedad, cuando conocías un software y lo usabas con entusiasmo y dedicación, incluso con cariño.","postimage":""};
				const file = "/home/felipe/Taller/newastro/src/pages/blog/neovim.md";
				const url = "/blog/neovim";
				function rawContent() {
					return "\nNeovim es un software famoso. Todos los programadores lo conocen, aunque sea de oída. Famoso también es el nivel de fanatismo de sus usuarios, los consejos y la recomendación constante y sostenida de que \"es un editor que vas a amar y te cambiará la vida\".\n";
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
