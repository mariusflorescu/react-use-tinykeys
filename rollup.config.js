import babel from '@rollup/plugin-babel';
import pluginTypescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const config = {
  input: 'src/index.tsx',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default' },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [pluginTypescript(), babel({ babelHelpers: 'bundled' })],
};

export default config;
