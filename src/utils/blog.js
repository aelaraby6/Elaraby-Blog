import { getCollection } from 'astro:content';

/**
 * Fetch and sort all published blog posts.
 * @returns {Promise<Array>} Sorted array of blog post objects
 */
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  return posts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

/**
 * Calculates estimated reading time in minutes from raw text / markdown content.
 * @param {string} content
 * @returns {string} e.g. "6 min read"
 */
export function getReadingTime(content = '') {
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/---[\s\S]*?---/, '');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Format a Date object into readable date string.
 * @param {Date|string} date
 * @returns {string} e.g. "September 24, 2026"
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date into ISO YYYY-MM-DD.
 * @param {Date|string} date
 * @returns {string}
 */
export function formatISODate(date) {
  const d = new Date(date);
  return d.toISOString().split('T')[0];
}

/**
 * Get unique categories with their post counts and descriptions.
 * @param {Array} posts
 * @returns {Array<{ name: string, slug: string, count: number, description?: string }>}
 */
export function getAllCategories(posts) {
  const categoryMap = new Map();

  const categoryDescriptions = {
    'Backend': 'Server architecture, caching patterns, database internals, and high-performance backend systems.',
    'AI': 'Practical machine learning notes, intelligent log heuristics, and AI security experiments.',
    'Cybersecurity': 'Access control models, authentication protocols, defensive engineering, and incident investigations.',
    'Networking': 'TCP/IP diagnostics, DNS forensics, socket programming, and protocol analysis.',
    'Software Engineering': 'Architectural principles, refactoring strategies, debugging philosophies, and craft.',
    'Learning Notes': 'Case notes and deep dives into new technologies, concepts, and experimental findings.',
    'Random Thoughts': 'Reflections on software design, mystery books, problem solving, and developer life.',
  };

  posts.forEach((post) => {
    const cat = post.data.category;
    if (cat) {
      if (!categoryMap.has(cat)) {
        categoryMap.set(cat, {
          name: cat,
          slug: slugify(cat),
          count: 0,
          description: categoryDescriptions[cat] || `Articles and case studies covering ${cat}.`,
        });
      }
      categoryMap.get(cat).count += 1;
    }
  });

  return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count);
}

/**
 * Get unique tags with their post counts.
 * @param {Array} posts
 * @returns {Array<{ name: string, slug: string, count: number }>}
 */
export function getAllTags(posts) {
  const tagMap = new Map();

  posts.forEach((post) => {
    const tags = post.data.tags || [];
    tags.forEach((tag) => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, {
          name: tag,
          slug: slugify(tag),
          count: 0,
        });
      }
      tagMap.get(tag).count += 1;
    });
  });

  return Array.from(tagMap.values()).sort((a, b) => b.count - a.count);
}

/**
 * Converts text to a clean URL slug.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
