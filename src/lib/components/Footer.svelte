<script lang="ts">
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import { PUBLIC_BUSINESS_NAME } from '$env/static/public';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import WhatsAppIcon from '$lib/icons/WhatsAppIcon.svelte';

	const waURL = getWhatsAppURL();
	const year = new Date().getFullYear();
</script>

<footer class="bg-[#080808] border-t border-[#2A2A2A]">
	<div class="max-w-6xl mx-auto px-6 py-8">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-4">

			<!-- Business name -->
			<span
				class="text-[#F5F5F5] font-semibold text-sm tracking-wide"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				{PUBLIC_BUSINESS_NAME}
			</span>

			<!-- Social links -->
			<div class="flex items-center gap-5">
				<!-- Instagram -->
				<a
					href="https://www.instagram.com/marcos_protesecapilar/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram do Marcos Prótese Capilar"
					class="text-[#A0A0A0] hover:text-[#D4A017] transition-colors duration-200"
				>
					<InstagramIcon size={20} />
				</a>

				<!-- WhatsApp -->
				<a
					href={waURL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp do Marcos Prótese Capilar"
					class="text-[#A0A0A0] hover:text-[#D4A017] transition-colors duration-200"
				>
					<WhatsAppIcon size={20} />
				</a>
			</div>

			<!-- Copyright + Dev credit -->
			<div class="flex flex-col items-center sm:items-end gap-1 text-center">
				<p class="text-[#A0A0A0] text-xs">
					© {year} {PUBLIC_BUSINESS_NAME}. Todos os direitos reservados.
				</p>
				<p class="text-[#585858] text-xs">
					Desenvolvido por <a href="https://arcturuz.dev" target="_blank" rel="noopener noreferrer" class="hover:text-[#D4A017] transition-colors duration-200">Arcturuz</a>
				</p>
			</div>

		</div>
	</div>
</footer>
