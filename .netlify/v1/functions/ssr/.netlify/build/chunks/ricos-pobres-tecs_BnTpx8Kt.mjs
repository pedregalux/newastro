/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_CzPDkCjp.mjs';
import { $ as $$PostLayout } from './PostLayout_F63cX-af.mjs';

const html = () => "<p>En las décadas de los 90 y 2 mil lugares sucios, poco transitados y espacios de homeless en San Francisco fueron invadidos por empresas tecnológicas y cafés. Fue un tema bien reporteado y documentado. Como todo lo que en EE.UU. se hace grotescamente mal y feo al resto del mundo le encanta copiarlo, lo mismo pasó en cada ciudad del mundo donde aparecieron empresas relacionadas con la web y nuevas tecnologías.</p>\n<p>Esto no es antiguo pero nunca fue tan masivo (la ilusión de un pasado mejor). Cuando los ricos se fueron del centro de las ciudades, donde estaban instalados sus bancos, gobiernos, bolsas de comercio, clubes y edificios principales, a vivir a sus nuevos barrios, las calles y rincones del centro se convirtieron en zona de homeless en la noche y zona de gente muy ocupada y próspera en el día. Eso también esta muy reporteado por si alguien no lo ha visto directamente.</p>\n<p>Es la continuación de un fenómeno antiguo. En su forma capitalista, es la confirmación de que la vida y el progreso deben seguir, pese al mal olor y la basura. Vamos a instalar más riqueza en las narices de esta gente que no tiene ni baño, total, ya nadie los ve. Pero los ricos nunca dejan de ver y perseguir a los pobres, y cuando se les acaban los espacios para invadir y construir startups, siguen más y más allá. Esta es una doble maldición para los que no tienen nada, como si no los dejaran ni morir en paz. Esta contradicción ha servido de inspiración para grandes obras artísticas, sobre todo literarias y musicales.</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Ricos, pobres y techs","pubDate":"2024-10-05T00:00:00.000Z","description":"Los ricos y los artistas tienen un asunto freudiano con la pobreza. También las tech. Llegar a poner starbucks en barrios decadentes es parte de eso.","postimage":""};
				const file = "/home/felipe/Taller/newastro/src/pages/blog/ricos-pobres-tecs.md";
				const url = "/blog/ricos-pobres-tecs";
				function rawContent() {
					return "\nEn las décadas de los 90 y 2 mil lugares sucios, poco transitados y espacios de homeless en San Francisco fueron invadidos por empresas tecnológicas y cafés. Fue un tema bien reporteado y documentado. Como todo lo que en EE.UU. se hace grotescamente mal y feo al resto del mundo le encanta copiarlo, lo mismo pasó en cada ciudad del mundo donde aparecieron empresas relacionadas con la web y nuevas tecnologías.\n\nEsto no es antiguo pero nunca fue tan masivo (la ilusión de un pasado mejor). Cuando los ricos se fueron del centro de las ciudades, donde estaban instalados sus bancos, gobiernos, bolsas de comercio, clubes y edificios principales, a vivir a sus nuevos barrios, las calles y rincones del centro se convirtieron en zona de homeless en la noche y zona de gente muy ocupada y próspera en el día. Eso también esta muy reporteado por si alguien no lo ha visto directamente.\n\nEs la continuación de un fenómeno antiguo. En su forma capitalista, es la confirmación de que la vida y el progreso deben seguir, pese al mal olor y la basura. Vamos a instalar más riqueza en las narices de esta gente que no tiene ni baño, total, ya nadie los ve. Pero los ricos nunca dejan de ver y perseguir a los pobres, y cuando se les acaban los espacios para invadir y construir startups, siguen más y más allá. Esta es una doble maldición para los que no tienen nada, como si no los dejaran ni morir en paz. Esta contradicción ha servido de inspiración para grandes obras artísticas, sobre todo literarias y musicales.\n\n";
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
