import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ערכת MDHM לכאבי ראש ומיגרנה | אופיר שגב פרימן',
  description: 'הערכה הדיגיטלית לשחרור מכאבי ראש ומיגרנה בשיטת MDHM. תהליך שיטתי שעוזר להבין את שורש הכאב ולהחזיר שליטה על הגוף.',
  openGraph: {
    title: 'ערכת MDHM לכאבי ראש ומיגרנה',
    description: 'לקח לי 20 שנה ומסע לסין להבין מה באמת עומד מאחורי המיגרנה.',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
