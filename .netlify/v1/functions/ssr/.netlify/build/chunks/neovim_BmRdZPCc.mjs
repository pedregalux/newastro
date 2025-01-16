/* empty css                        */
import { e as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from './astro/server_BYwAOejc.mjs';
import { $ as $$PostLayout } from './PostLayout_ByBDoNkQ.mjs';

const html = () => "<p>Neovim es un software famoso. Todos los programadores lo conocen, aunque sea de oída. Famoso también es el nivel de fanatismo de sus usuarios, los consejos y la recomendación constante y sostenida de que “es un editor que vas a amar y te cambiará la vida”. Lo mismo pasa con Emacs, pero objetivamente creo que VIM/NEOVIM ya superó en usuarios y comunidad por paliza a Emacs. Como usuario viejo de Linux conocía ámbos y los había usado, sólo por diversión, hace muchos años. Me sorprendió entonces por ejemplo la cantidad de cosas diferentes que tenía Emacs, incluyendo juegos y un psicoanalista (es cierto!). Lo más llamativo de VIM siempre era la campaña por los niños de Ugranda y la simpleza de todo.</p>\n<p>Lo cierto es que Neovim se transforma rápidamente en una especie de vicio. El estilo de terminal es un placer estético. Me atrevería a afirmar de que se ve mejor que todos los otros editores e IDE’s. Cuando comienzas el proceso de personalización simplemente es recomendable tener unos días libres. No será conveniente que entres en este viaje de Neovim justo cuando estás llegando a la fecha de entrega de algo.</p>\n<p>Es conveniente para usuarios nuevos empezar con una distro, de hecho yo sigo con una aunque la he modificado bastante. La distro que uso es LazyVim y viene con una gran cantidad de cosas resueltas y pre configuradas. La verdad es que si no te gusta, siempre puedes cambiar cosas, como hice yo, pero no tendrás que sufrir tanto la primera vez. Luego de la distro (Lazy, Lunar, Chad etc etc) y si quieres seguir aprendiendo y tuneando todo a tu gusto, puedes usar kickstart.nvim, una instalación que funciona como punto de partida, muy bien documentada.</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Neovim, todo lo bueno que digan es verdad","pubDate":"2024/11/02","description":"No es fácil y hay un tiempo necesario para acostumbrarse y avanzar un poco, sin embargo cuando empiezas a despegar de verdad te gusta el editor. Es como en la antiguedad, cuando conocías un software y lo usabas con entusiasmo y dedicación, incluso con cariño.","postimage":""};
				const file = "/home/felipe/Taller/newastro/src/pages/blog/neovim.md";
				const url = "/blog/neovim";
				function rawContent() {
					return "   \n                                        \n                                                  \n                   \n                                                                                                                                                                                                                                                                                  \n             \n   \n\nNeovim es un software famoso. Todos los programadores lo conocen, aunque sea de oída. Famoso también es el nivel de fanatismo de sus usuarios, los consejos y la recomendación constante y sostenida de que \"es un editor que vas a amar y te cambiará la vida\". Lo mismo pasa con Emacs, pero objetivamente creo que VIM/NEOVIM ya superó en usuarios y comunidad por paliza a Emacs. Como usuario viejo de Linux conocía ámbos y los había usado, sólo por diversión, hace muchos años. Me sorprendió entonces por ejemplo la cantidad de cosas diferentes que tenía Emacs, incluyendo juegos y un psicoanalista (es cierto!). Lo más llamativo de VIM siempre era la campaña por los niños de Ugranda y la simpleza de todo.\n\nLo cierto es que Neovim se transforma rápidamente en una especie de vicio. El estilo de terminal es un placer estético. Me atrevería a afirmar de que se ve mejor que todos los otros editores e IDE's. Cuando comienzas el proceso de personalización simplemente es recomendable tener unos días libres. No será conveniente que entres en este viaje de Neovim justo cuando estás llegando a la fecha de entrega de algo.\n\nEs conveniente para usuarios nuevos empezar con una distro, de hecho yo sigo con una aunque la he modificado bastante. La distro que uso es LazyVim y viene con una gran cantidad de cosas resueltas y pre configuradas. La verdad es que si no te gusta, siempre puedes cambiar cosas, como hice yo, pero no tendrás que sufrir tanto la primera vez. Luego de la distro (Lazy, Lunar, Chad etc etc) y si quieres seguir aprendiendo y tuneando todo a tu gusto, puedes usar kickstart.nvim, una instalación que funciona como punto de partida, muy bien documentada.\n";
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
