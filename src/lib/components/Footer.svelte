<script lang="ts">
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import { PUBLIC_BUSINESS_NAME } from '$env/static/public';

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
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/>
						<circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.5"/>
						<circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
					</svg>
				</a>

				<!-- WhatsApp -->
				<a
					href={waURL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp do Marcos Prótese Capilar"
					class="text-[#A0A0A0] hover:text-[#D4A017] transition-colors duration-200"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M3 21l1.65-4.88A8.96 8.96 0 013 12C3 7.03 7.03 3 12 3s9 4.03 9 9-4.03 9-9 9a8.96 8.96 0 01-4.35-1.12L3 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M9 10.5c0 3 2.5 5.5 5.5 5.5h0c.5 0 1-.2 1.35-.55l.65-.65a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7 0l-.35.35a3.55 3.55 0 01-2.6-2.6l.35-.35a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7 0l-.65.65A1.9 1.9 0 009 10.5z" fill="currentColor"/>
					</svg>
				</a>
			</div>

			<!-- Copyright + Dev credit -->
			<div class="flex flex-col items-center sm:items-end gap-1">
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
