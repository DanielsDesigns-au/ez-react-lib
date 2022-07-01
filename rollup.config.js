import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json', outputToFilesystem: true }),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/src/index.d.ts',
    output: [
      {
        file: packageJson.types,
        format: 'esm',
      },
    ],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/, /\.module\.scss$/],
  },
];
