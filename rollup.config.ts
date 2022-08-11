import { defineConfig, OutputOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';

const prodOutput: OutputOptions[] = [
  {
    file: 'dist/index.common.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'CrazThur',
  },
  {
    file: 'dist/index.js',
    format: 'es',
  },
];

export default defineConfig({
  input: 'src/index.ts',
  output: prodOutput,
  plugins: [typescript()],
});
