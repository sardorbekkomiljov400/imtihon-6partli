import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // 'n' harfini olib tashladik

export default createMiddleware(routing);

export const config = {
  // Barcha qo'llab-quvvatlanadigan tillarni matcherga qo'shish kerak
  matcher: ['/', '/(uz|ru|en)/:path*']
};