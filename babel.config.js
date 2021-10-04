module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        // import React from 'react'のエラーを防ぐ
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
};
