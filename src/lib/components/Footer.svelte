<script lang="ts">
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import { PUBLIC_BUSINESS_NAME } from "$env/static/public";
    import InstagramIcon from "$lib/icons/InstagramIcon.svelte";
    import WhatsAppIcon from "$lib/icons/WhatsAppIcon.svelte";

    const waURL = getWhatsAppURL();
    const year = new Date().getFullYear();
</script>

<footer class="bg-bg-footer border-t border-[#2A2A2A]">
    <div class="mx-auto max-w-6xl px-6 py-8">
        <div
            class="relative flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
            <!-- Business name -->
            <span
                class="font-display text-text-primary text-sm font-semibold tracking-wide"
            >
                {PUBLIC_BUSINESS_NAME}
            </span>

            <!-- Social links -->
            <div
                class="flex w-full items-center justify-center gap-5 md:absolute"
            >
                <!-- Instagram -->
                <a
                    href="https://www.instagram.com/marcos_protesecapilar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram do Marcos Prótese Capilar"
                    class="hover:text-accent text-[#A0A0A0] transition-colors duration-200"
                >
                    <InstagramIcon size={20} />
                </a>

                <!-- WhatsApp -->
                <a
                    href={waURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp do Marcos Prótese Capilar"
                    class="hover:text-accent text-[#A0A0A0] transition-colors duration-200"
                >
                    <WhatsAppIcon size={20} />
                </a>
            </div>

            <!-- Copyright + Dev credit -->
            <div
                class="flex flex-col items-center gap-1 text-center sm:items-end"
            >
                <p class="text-xs text-[#A0A0A0]">
                    © {year}
                    {PUBLIC_BUSINESS_NAME}. Todos os direitos reservados.
                </p>
                <p class="text-xs text-[#585858]">
                    Desenvolvido por <a
                        href="https://arcturuz.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-accent transition-colors duration-200"
                        >Arcturuz</a
                    >
                </p>
            </div>
        </div>
    </div>
</footer>
