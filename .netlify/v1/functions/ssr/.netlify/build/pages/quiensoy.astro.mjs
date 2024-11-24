/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CzPDkCjp.mjs';
import { $ as $$Sidebar, a as $$Layout } from '../chunks/Sidebar_BQ4nxQz8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Quiensoy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Quiensoy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> <h2>Quien soy</h2> <p>Llevo muchos años haciendo cosas productivas e improductivas en Internet. Programo en HTML, CSS, JavaScript, Python. En otros lenguajes hago cosas en forma esporádica y/o por diversión.</p>
He trabajado con muchos frameworks, CMS y tecnologías varias:
<ul class="list-disc list-inside p-4"> <li>Django</li> <li>Flask</li> <li>Astro</li> <li>Tailwind</li> <li>Wordpress</li> </ul>
Diría que esa es la lista de lo que me gusta hoy, sacando un poco a Wordpress que es un gusto adquirido y necesario al que le tengo más cariño que nada.
 <h3>La historia es esta</h3> <p>
Mi nombre no es ni Pedro ni soy de Barcelona, como me recomienda Codeium, que uso en Codium y lo recomiendo siempre. Mi nombre es Felipe y vivo en Valparaíso, Chile.
</p> <p>
Comencé a hacer cosas en el computador cuando prácticamente Internet estaba llegando. En los noventa habían muchos sitios que uno visitaba con frecuencia. ¿Recuerdan cuando guardábamos booksmarks ordenados por carpeta en Netscape Navigator? En esos años revisaba un directorio llamado World Wide Punk, una página que reseñaba música, sellos, zines y distros. En el footer de la página encontré un banner de Linux. Hasta ese día sólo había hecho algunos experimentos en HTML en un editor para Mac llamado BBedit. Sólo páginas raras y gifs animados.
</p> <p>
Me obsesioné con Linux. Con instalarlo y conocer ese otro sistema operativo en el que la gente podía hacer lo que quisiera. Mi primera distro fue claro, Red Hat. Después Mandrake, por la cantidad de cosas que tenía resueltas. Desde que usé Debian la primera vez no me fui nunca de los sistemas basados en Debian. Si, el mantenedor de paquetes, la consistencia y estabilidad del sistema. Ubuntu, Mepis, etc. Un tiempo usé Arch, cuando se hizo muy popular al principio, para ver qué tal era. Me devolví a derivados de Debian, la última vez a MX Linux y me quedé para siempre.
</p> <p>
Linux ha sido mi mundo desde hace muchos muchos años. GNOME, KDE, Xfce, GIMP, Bluefish, Abiword, Gnumeric, Evolution(noooo!), Firefox, HexChat y tantos otros. La aventura extraña de hacer un kernel personalizado, nada más poco útil pero al mismo tiempo muy gratificante. Buenos recuerdos. Al inicio era fanático del software libre, un evangelizador dedicado, hoy también lo soy, pero entiendo perfectamente porqué hay gente que no lo usa y no me queda energía para tratar de convertir a nadie. Creo que el software libre se tomó el mundo, se cumplió mucho de lo que siempre soñamos y ahora tiene otros problemas, algunos viejos,  que no se han resuelto. Ya escribiré de eso pero el resumen es: hay que pagarle a la gente que mantiene y desarrolla el software. Lo otro: las empresas tienen la obligación moral de devolver a la comunidad poniéndose con cosas concretas como horas de desarrollo e infraestructura y no eventos que se lleva el viento y alianzas y alianzas y más alianzas que no sirven de nada.
</p> <p>
Llegar a Linux fue descubrir la programación, pero no sentí que había de verdad entendido mejor lo que es programar hasta que conocí Python, a través de Django. Programar es relajante y emocionante al mismo tiempo. Para muchos de nosotros creo que es una recración del juego. En algún punto pude empezar a vivir de esto y me siento muy afortunado. Siempre es un tema serio pasar mucho tiempo frente al computador porque cuando te gusta mucho esto es difícil diferenciar entre tiempo de entretención y estar programando o aprendiendo algo.
</p> <p>
Desde el principio uno de mis intereses ha sido el tema de cómo interactua la gente con sus tecnologías, sobre todo el derecho que tienen las personas a usar herramientas en forma consciente.
</p> </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div>` })}`;
}, "/home/felipe/Taller/newastro/src/pages/quiensoy.astro", void 0);

const $$file = "/home/felipe/Taller/newastro/src/pages/quiensoy.astro";
const $$url = "/quiensoy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Quiensoy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
