import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/blog.js';
import { resolvePath } from '../utils/paths.js';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Elaraby Blog // Personal Space Logs & Architecture',
    description: 'Personal space log by Elaraby. Deep dives into software engineering, backend architecture, AI service layers, and distributed systems.',
    site: context.site || 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: resolvePath(`articles/${post.slug}/`),
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>en-us</language>`,
  });
}
