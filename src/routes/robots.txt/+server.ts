import { PUBLIC_SITE_URL } from '$env/static/public';

export const prerender = true;

export function GET() {
	const content = `# allow crawling everything by default
User-agent: *
Disallow:

Sitemap: ${PUBLIC_SITE_URL}/sitemap.xml`;

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
