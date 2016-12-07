Setup the working directory:
- `git clone`
- `yarn`
- `yarn run clean`: clean the `dist` folder
- `yarn run lint`: lint the files in `src`
- `yarn run compile`: build the files for usage with a package manager (`babel` compilation)
- `yarn run bundle`: build the files for usage directly in the browser (`webpack` compilation)
- `yarn run build`: perform a clean recompile and rebundle

After the bundling step, the minified build is available in `dist/index.min.js` (with an associated sourcemap file `dist/index.min.js.map`).
