export const dynamic = 'force-static';

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'anthropic-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://terreya.com/sitemap.xml',
  };
}
