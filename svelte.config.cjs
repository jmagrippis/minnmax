const sveltePreprocess = require('svelte-preprocess')
const vercel = require('@sveltejs/adapter-vercel')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    adapter: vercel(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      plugins: [],
    },
  },
}
