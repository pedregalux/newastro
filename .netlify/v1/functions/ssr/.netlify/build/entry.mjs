import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_SjWPgbke.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/astro-y-tailwind.astro.mjs');
const _page2 = () => import('./pages/blog/neovim.astro.mjs');
const _page3 = () => import('./pages/blog/ricos-pobres-tecs.astro.mjs');
const _page4 = () => import('./pages/blog/rss-buena-idea-pero.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/quiensoy.astro.mjs');
const _page7 = () => import('./pages/trabajos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.7_@types+node@22.10.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/astro-y-tailwind.md", _page1],
    ["src/pages/blog/neovim.md", _page2],
    ["src/pages/blog/ricos-pobres-tecs.md", _page3],
    ["src/pages/blog/rss-buena-idea-pero.md", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/quiensoy.astro", _page6],
    ["src/pages/trabajos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b4bcd3d5-91c8-47b7-be74-60036cdde637"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
