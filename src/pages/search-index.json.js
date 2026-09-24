import { getPublishedPosts, formatDate } from '../utils/blog.js';
import { resolvePath } from '../utils/paths.js';

export async function GET() {
  const posts = await getPublishedPosts();

  const searchData = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags || [],
    caseNumber: post.data.caseNumber || 'CASE FILE',
    date: formatDate(post.data.pubDate),
    slug: post.slug,
    url: resolvePath(`articles/${post.slug}`),
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
