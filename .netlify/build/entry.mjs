import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CqZ3wO6K.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/blog/astro-y-tailwind.astro.mjs');
const _page1 = () => import('./pages/blog/neovim.astro.mjs');
const _page2 = () => import('./pages/blog/ricos-pobres-tecs.astro.mjs');
const _page3 = () => import('./pages/blog/rss-buena-idea-pero.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/quiensoy.astro.mjs');
const _page6 = () => import('./pages/trabajos.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const _page8 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/blog/astro-y-tailwind.md", _page0],
    ["src/pages/blog/neovim.md", _page1],
    ["src/pages/blog/ricos-pobres-tecs.md", _page2],
    ["src/pages/blog/rss-buena-idea-pero.md", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/quiensoy.astro", _page5],
    ["src/pages/trabajos.astro", _page6],
    ["src/pages/index.astro", _page7],
    ["node_modules/.pnpm/astro@5.0.0-beta.2_@types+node@22.7.9_rollup@4.21.3_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "13bb46ad-1f8e-44c7-bae9-2bfdc899c376"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
