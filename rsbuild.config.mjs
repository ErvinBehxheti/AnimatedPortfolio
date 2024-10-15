import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';

export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginImageCompress()],
  html: {
    template: './public/index.html'
  },
  performance: {
    chunkSplit: {
      strategy: process.env.NODE_ENV === 'production' ? 'split-by-module' : 'custom',
    },
  },
});
