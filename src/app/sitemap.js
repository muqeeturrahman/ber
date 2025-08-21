export default async function sitemap() {
  const baseUrl = 'https://Beecruit.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/packages/pakistan',
    '/careers',
    '/blog',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route || '/'}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.7,
  }))
}


