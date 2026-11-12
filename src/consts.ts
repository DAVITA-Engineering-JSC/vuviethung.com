// Du lieu dung chung cho toan site.

export const SITE_TITLE = 'Vũ Việt Hùng';
export const SITE_DESCRIPTION = 'Blog cá nhân của Vũ Việt Hùng';

// Chu de bai viet. Them chu de moi: them mot dong o day va them slug vao src/content.config.ts.
export const TOPICS = [
	{
		slug: 'quan-tri',
		name: 'Quản trị',
		desc: 'Điều hành, con người và ra quyết định.',
		icon: '<rect x="3" y="20" width="8" height="13"/><rect x="14" y="11" width="8" height="22"/><rect x="25" y="3" width="8" height="30"/>',
	},
	{
		slug: 'ky-thuat',
		name: 'Kỹ thuật',
		desc: 'Thiết bị công nghiệp và bảo trì nhà máy.',
		icon: '<path fill-rule="evenodd" d="M18 3a15 15 0 1 0 0 30 15 15 0 0 0 0-30Zm0 9a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/>',
	},
	{
		slug: 'cong-nghe',
		name: 'Công nghệ',
		desc: 'AI, số hoá và công cụ làm việc.',
		icon: '<rect x="3" y="3" width="13" height="13"/><rect x="20" y="3" width="13" height="13"/><rect x="3" y="20" width="13" height="13"/><circle cx="26.5" cy="26.5" r="6.5"/>',
	},
	{
		slug: 'sach',
		name: 'Sách',
		desc: 'Ghi chú đọc sách và điều rút ra.',
		icon: '<path d="M4 5h12v27H4zM20 5h12v27H20z"/>',
	},
];

export function topicBySlug(slug?: string) {
	return TOPICS.find((t) => t.slug === slug);
}

// Uoc luong so phut doc, 200 tu moi phut.
export function readingMinutes(body?: string) {
	const words = (body || '').split(String.fromCharCode(10)).join(' ').split(' ').filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}
