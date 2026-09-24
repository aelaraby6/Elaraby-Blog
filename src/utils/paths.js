/**
 * Safely resolves a path by prefixing Astro's configured BASE_URL.
 * Useful for GitHub Pages repository subpaths (e.g. /my-repo/articles).
 *
 * @param {string} path - Relative or absolute-like path (e.g. '/articles', 'images/detective.svg')
 * @returns {string} Fully resolved path with base URL
 */
export function resolvePath(path = '') {
  if (!path) return import.meta.env.BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('mailto:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
