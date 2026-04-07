import { PUBLIC_WHATSAPP_NUMBER, PUBLIC_WHATSAPP_MESSAGE } from '$env/static/public';

export function getWhatsAppURL(customMessage?: string): string {
	const msg = encodeURIComponent(customMessage ?? PUBLIC_WHATSAPP_MESSAGE);
	return `https://wa.me/${PUBLIC_WHATSAPP_NUMBER}?text=${msg}`;
}
