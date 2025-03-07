/* empty css                                */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BYwAOejc.mjs';
import { $ as $$Sidebar, a as $$Layout } from '../chunks/Sidebar_C9AiCgNx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-20 text-pretty"> <div class="cuerpo ml-10 mr-5 md:ml-20 md:mr-10 md:px-10 col-span-3"> <h2>Quien soy</h2> <p>Llevo muchos años haciendo cosas productivas e improductivas en Internet. Programo en HTML, CSS, JavaScript, Python. En otros lenguajes hago cosas en forma esporádica y/o por diversión.</p>
He trabajado con muchos frameworks, CMS y tecnologías varias:
<ul class="list-disc list-inside p-4"> <li>Django</li> <li>Flask</li> <li>Astro</li> <li>Tailwind</li> <li>Jekyll</li> <li>Wordpress...</li> </ul>
Diría que esa es la lista de lo que me gusta hoy, sacando un poco a Wordpress que es un gusto adquirido y necesario al que le tengo más cariño que ganas. Incluiría también trabajar en servidores Linux.
 <h3>La historia es así</h3> <p>
(( Mi nombre no es ni Pedro ni soy de Barcelona, como me sugiere que escriba <a href="https://codeium.com/" target="_blank">Codeium</a>.)) Ya no uso Codium, porque el plug de Copilot para Neovim está muy bueno. Mi nombre es Felipe y vivo en Valparaíso, Chile.
</p> <p>
Comencé a hacer cosas en el computador cuando prácticamente Internet estaba llegando. En los noventa habían muchos sitios que uno visitaba con frecuencia. ¿Recuerdan cuando guardábamos booksmarks ordenados por carpeta en Netscape Navigator? En esos años revisaba un directorio llamado <a href="https://web.archive.org/web/19990125104610/http://www.worldwidepunk.com/" target="_blank">World Wide Punk</a>, una página que reseñaba música, sellos, zines y distros. En el footer de la página encontré un banner de Linux. Hasta ese día sólo había hecho algunos experimentos en HTML en un editor para Mac llamado <a href="https://www.barebones.com/products/bbedit/" target="_blank">BBedit</a>. Sólo páginas raras y gifs animados.
</p>
Me obsesioné con Linux. Con instalarlo y conocer ese otro sistema operativo en el que la gente podía hacer lo que quisiera. Mi primera distro fue claro, <a href="https://en.wikipedia.org/wiki/Red_Hat_Linux" target="_blank">Red Hat</a>. Después <a href="https://www.mandrakelinux.org" target="_blank">Mandrake</a>, por la cantidad de cosas que tenía resueltas. Desde que usé <a href="https://www.debian.org/index.es.html" target="_blank">Debian</a> la primera vez no me fui nunca de los sistemas basados en Debian. Si, el mantenedor de paquetes, la consistencia y estabilidad del sistema. Ubuntu, Mepis, etc. Un tiempo usé Arch, cuando se hizo muy popular al principio, para ver qué tal era. Me devolví a derivados de Debian, la última vez a <a href="https://www.mxlinux.org" target="_blank">MX Linux</a> y me quedé para siempre.
<p></p> <p>
Linux ha sido mi mundo desde hace muchos muchos años. GNOME, KDE, Xfce, GIMP, Bluefish, Abiword, Gnumeric, Evolution(noooo!), Firefox*, HexChat y tantos otros. La aventura extraña de hacer un kernel personalizado, nada más poco útil pero al mismo tiempo muy gratificante. Buenos recuerdos. Al inicio era fanático del software libre, un evangelizador dedicado, hoy también lo soy, pero entiendo perfectamente porqué hay gente que no lo usa y no me queda energía para tratar de convertir a nadie. Creo que el software libre se tomó el mundo, se cumplió mucho de lo que siempre soñamos y ahora tiene otros problemas, algunos viejos,  que no se han resuelto. Ya escribiré de eso pero el resumen es: hay que pagarle a la gente que mantiene y desarrolla el software. Lo otro: las empresas tienen la obligación moral de devolver a la comunidad poniéndose con cosas concretas como horas de desarrollo e infraestructura y no eventos que se lleva el viento y alianzas y alianzas y más alianzas que no sirven de nada.
</p> <p>
Llegar a Linux fue descubrir la programación, pero no sentí que había de verdad entendido mejor lo que es programar hasta que conocí Python, a través de <a href="https://www.djangoproject.com/" target="_blank">Django</a>. Programar es relajante y emocionante al mismo tiempo. Para muchos de nosotros creo que es una recración del juego. En algún punto pude empezar a vivir de esto y me siento muy afortunado. Siempre es un tema serio pasar mucho tiempo frente al computador porque cuando te gusta mucho esto es difícil diferenciar entre tiempo de entretención y estar programando o aprendiendo algo.
</p> <p>
Desde el principio uno de mis intereses ha sido el tema de cómo interactua la gente con sus tecnologías, sobre todo el derecho que tienen las personas a usar herramientas en forma consciente. Preguntas extrañas como ¿por qué la gente está obligada a aceptar todo lo que propone una empresa tecnológica sin importar nada? ¿qué pasa si un día abandonamos su dictadura tecnológica y armamos algo nuevo? Esas cosas las pensaba desde hace años. He trabajado en la administración pública, empresas, ong's y en forma independiente y la conclusión a la que he llegado es que son cosas que aún le importan a un 5 por ciento de la gente, como mucho. Ahora con la AI viene otra oleada de desastre, peor que el de las redes sociales, pero la propaganda tiene a todo el mundo atontado. Veamos como sigue.
</p> <p>
Y si, obviamente, estamos programando y estudiando machinne learning siempre con los cursos de <a href="https://fast.ai" target="_blank">FastAI</a>. El ML es una de las partes más entrenenidas de todo esto, cuando no te dejas llevar por la publicidad y buscas lugares para estudiar y aprender.
</p> <p>Actualicé esto porque estoy usando Neovim el 100% de mi tiempo, antes puse un comentario sobre VSCodium, que es el VSCode sin telemetría. Es un editor muy bueno casi igual a VSCode, pero NeoVim es lo máximo, ya escribiré sobre él.</p> <hr class="border-zinc-700"> <p>
* Hoy uso <a href="https://www.vivaldi.com/" target="_blank">Vivaldi</a>, no Firefox, y tiene partes de su <a href="https://vivaldi.com/blog/technology/why-isnt-vivaldi-browser-open-source/" target="_blank">código cerrado</a>, pero confío en ellos y quiero que les vaya bien! Este es un caso típico de los problemas que plantea el software libre. Creo que ellos tienen derecho a hacer su producto, siempre que sean transparentes sobre lo que te están entregando. En tecnología no todo es un asunto de licencia, hace mucho tiempo que no me gustan cosas de Mozilla (y otras si!) y es evidente como han dejado a Firefox botado. Por otro lado, me gusta la forma como la gente de <a href="https://vivaldi.com/es/for-a-better-web/" target="_blank">Vivaldi hace sus cosas</a> y el navegador es <a href="https://www.forbes.com/sites/barrycollins/2024/10/24/vivaldi-7-the-best-web-browser-just-got-even-better/" target="_blank">lejos el mejor</a>. Hoy lo uso para correo y web, algo que estaba en alguna versión de Mozilla previa a Firefox y que después se perdió.
</p> </div> <div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div>` })}`;
}, "/home/felipe/Taller/newastro/src/pages/index.astro", undefined);

const $$file = "/home/felipe/Taller/newastro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
