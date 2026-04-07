import type { Action } from 'svelte/action';

export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, options) => {
	const delay = options?.delay ?? 0;
	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						node.classList.add('visible');
					}, delay);
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.12 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
