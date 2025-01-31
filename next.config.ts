import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config) {
    // Find the rule that handles file imports (like images)
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    // Handle SVG imports as React components
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false, // Maintain the viewBox for scaling
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      // Optionally, handle SVG as URL imports (if needed)
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        use: ['file-loader'],
      }
    );

    // Exclude SVG from the default file-loader rule to prevent conflicts
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
