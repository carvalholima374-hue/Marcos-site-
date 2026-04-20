<script lang="ts">
	let { size = 24, color = 'currentColor', strokeWidth = 1.5, class: className = '', ...rest } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke={color}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class={className}
	{...rest}
>
	<rect x="2" y="2" width="20" height="20" rx="5" />
	<circle cx="12" cy="12" r="4.5" />
	<circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
</svg>
