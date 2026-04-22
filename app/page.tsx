'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

function RavpageForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  function handleLoad() {
    const iframe = iframeRef.current
    if (!iframe?.contentDocument?.body) return
    iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px'
  }

  return (
    <iframe
      ref={iframeRef}
      src="/ravpage-form.html"
      onLoad={handleLoad}
      style={{ width: '100%', border: 'none', minHeight: '320px', display: 'block' }}
      scrolling="no"
      title="טופס הרשמה"
    />
  )
}

function Section({ children, alt = false, className = '', id = '' }: {
  children: React.ReactNode
  alt?: boolean
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`py-16 px-5 md:px-8 ${alt ? 'bg-[#F9F4EE]' : 'bg-white'} ${className}`}>
      <div className="max-w-2xl mx-auto text-center">{children}</div>
    </section>
  )
}

function CTAButton({ text = 'אני רוצה להחזיר לעצמי שליטה — 129 ₪ בלבד' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <a href="#cta-form" className="cta-btn">{text}</a>
      <span className="text-sm text-[#5C5150]">או 3 תשלומים נוחים של 43 ₪</span>
    </div>
  )
}

function Stars() {
  return <span className="text-[#C4A97D] text-lg">★★★★★</span>
}

const moduleIcons: Record<string, React.ReactNode> = {
  'מה הגוף שלך באמת אומר?': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="13" cy="13" r="7" />
      <line x1="18.5" y1="18.5" x2="26" y2="26" />
      <path d="M10 13h6M13 10v6" />
    </svg>
  ),
  '6 דקות של ריסטרט': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="16" cy="16" r="10" />
      <polyline points="16,9 16,16 21,19" />
      <path d="M6 6l2 2M26 6l-2 2" strokeWidth="1.2" />
    </svg>
  ),
  'כשהאנרגיה תקועה — הכאב גובר': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M18 4l-6 12h7l-7 12" />
      <path d="M8 22c2-1 5-1 7 0s5 1 7 0" strokeWidth="1.2" opacity="0.5" />
    </svg>
  ),
  'הפרק שאף אחד לא מדבר עליו': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M16 27s-11-7-11-14a7 7 0 0 1 11-5.74A7 7 0 0 1 27 13c0 7-11 14-11 14z" />
      <path d="M16 13v4M16 19v1" />
    </svg>
  ),
  'לשנות את הסיפור שהמוח מספר': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 6a7 7 0 0 0-1 13.5V22h10v-2.5A7 7 0 0 0 20 6" />
      <line x1="11" y1="25" x2="21" y2="25" />
      <line x1="13" y1="28" x2="19" y2="28" />
      <path d="M13 13c1-2 5-2 6 0" strokeWidth="1.2" />
    </svg>
  ),
  'שקט שנשאר': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M6 20c3-5 5-5 10-5s7 0 10 5" />
      <path d="M4 25c4-6 6-6 12-6s8 0 12 6" />
      <circle cx="16" cy="10" r="3" />
      <line x1="16" y1="4" x2="16" y2="6" />
      <line x1="11" y1="6" x2="12.5" y2="7.5" />
      <line x1="21" y1="6" x2="19.5" y2="7.5" />
    </svg>
  ),
}

export default function Page() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <Section className="pt-20 pb-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#8B2635] font-bold mb-5 tracking-wide text-center leading-snug">
            לנשים שהמיגרנה כבר מנהלת להן את היומן:
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-snug mb-6">
            לקח לי 20 שנה ומסע לסין להבין מה באמת עומד מאחורי המיגרנה.
            <br /><br />
            עכשיו אני חושף את השיטה — כדי שנשים שניסו הכל יוכלו סוף סוף{' '}
            <span className="mark">להחזיר לעצמן שליטה על הגוף</span>,
            בלי תלות בכדורים, בלי תורים, מהבית.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-[#5C5150] mb-8 leading-relaxed text-center">
            הערכה הדיגיטלית של שיטת MDHM — תהליך שיטתי שעוזר להבין את שורש הכאב ולשחרר אותו שלב אחר שלב.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <a
              href="#pain"
              className="inline-flex items-center gap-2 text-[#8B2635] font-semibold text-base border border-[#8B2635] rounded-full px-6 py-3 hover:bg-[#F9F4EE] transition-colors"
            >
              ספרו לי עוד
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                <path d="M10 4v12M5 11l5 5 5-5" />
              </svg>
            </a>
          </motion.div>

          {/* Hero mockup */}
          <motion.div variants={fadeUp} className="mt-10 rounded-2xl overflow-hidden">
            <Image
              src="/hero-mockup-kit.png"
              alt="ערכת MDHM לכאבי ראש ומיגרנה — תצוגת המוצר"
              width={1000}
              height={720}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* ─── PAIN ─── */}
      <Section alt id="pain">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6 text-center">
            כשהכדור הבא כבר לא מפתיע אותך —<br />
            זה הרגע שמשהו צריך להשתנות.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#5C5150] mb-4">
            יש נשים שמתחילות כל בוקר בבדיקה אחת — האם הכאב שם.
            <br />שמחזיקות כדור בתיק לכל מקרה.
            <br />שתוכניות שלהן תמיד מגיעות עם סימן שאלה.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg font-semibold text-[#1C1C1C] mb-2">זה לא רק הכאב עצמו.</motion.p>

          <motion.ul variants={stagger} className="mb-6 space-y-2">
            {[
              'הפגישה שביטלת ברגע האחרון',
              'הילדים שראו אותך שוב מתכרבלת בחושך',
              'האירוע שהגעת אליו — אבל לא באמת הייתה שם',
            ].map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start justify-center gap-2 text-[#5C5150]">
                <span className="text-[#8B2635] mt-1">✦</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="bg-white rounded-xl p-5 border border-[#F5EAD8] mb-8">
            <p className="text-sm text-[#5C5150]">
              👈 כמיליון ישראלים סובלים ממיגרנה כרונית. מתוכם —{' '}
              <strong className="text-[#1C1C1C]">750,000 נשים</strong>. רובן לא יודעות מה המקור האמיתי של הכאב.
            </p>
          </motion.div>

          {/* Why Nothing Worked */}
          <motion.h3 variants={fadeUp} className="text-xl font-bold mb-4 text-center">
            למה לא עבד עד עכשיו:
          </motion.h3>

          {/* Visual infographic */}
          <motion.div variants={fadeUp} className="mb-6 rounded-xl overflow-hidden bg-white p-3 border border-[#F5EAD8]">
            <Image
              src="/why-failed.png"
              alt="כל גישה מטפלת בממד אחד בלבד — כדורים, עיסוי, דיקור, טיפול רגשי"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div variants={stagger} className="space-y-3 mb-6">
            {[
              { t: 'כדורים', p: 'מכבים את האות, לא את הסיבה. הגוף מתרגל — צריך יותר.' },
              { t: 'נוירולוג / בוטוקס', p: 'בודק את הראש. לא את הרגש, המחשבות, הדפוסים העמוקים.' },
              { t: 'דיקור / כירופרקט', p: 'עוזר לגוף בלבד. שאר הסיבות ממשיכות לפעול מאחורי הקלעים.' },
            ].map(({ t, p }) => (
              <motion.div key={t} variants={fadeUp} className="bg-white rounded-lg p-4 border border-[#F5EAD8]">
                <p className="font-bold text-[#1C1C1C] mb-1">{t}</p>
                <p className="text-sm text-[#5C5150]">{p}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="border-r-4 border-[#8B2635] pr-4">
            <p className="text-[#1C1C1C] leading-relaxed">
              המיגרנה לא מגיעה ממקום אחד. היא מגיעה מהגוף שצובר מתח, מרגשות שלא מצאו מקום, ממחשבות שלא עוצרות, מדפוסים שיושבים עמוק.
              <br /><br />
              <strong>כשמטפלים בשכבה אחת — שאר הסיבות ממשיכות לפעול. ולכן הכאב חוזר.</strong>
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* ─── STORY + AUTHORITY ─── */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6 text-center">
            הייתי בדיוק שם.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-4 text-[#5C5150] leading-relaxed mb-6">
            <p>הייתי איש הייטק עם מיגרנות משתקות — 20 שנה. כדורים, נוירולוגים, כל מה שהרפואה הציעה. שום דבר לא נגע בשורש.</p>
            <p>כשהחברה שעבדתי בה קרסה — טסתי למזרח.</p>
            <p className="text-sm italic text-[#5C5150] bg-[#F9F4EE] p-3 rounded-lg">
              (כסקפטי מושלם. חשבתי: "מה כבר תחדש לי רפואה מלפני 2,000 שנה?")
            </p>
            <p>עברתי התמחות קלינית בבית החולים האוניברסיטאי בצ׳נגדו, סין. חזרתי עם תשובה שחיפשתי 20 שנה:</p>
            <p className="text-xl font-bold text-[#1C1C1C]">
              <span className="mark">הכאב הוא לא הבעיה. הוא התוצאה.</span>
            </p>
          </motion.div>

          {/* Ofir in China photo */}
          <motion.div variants={fadeUp} className="mb-8 rounded-xl overflow-hidden border border-[#F5EAD8]">
            <Image
              src="/ofir-china.jpg"
              alt="אופיר שגב פרימן עם המורים שלו בסין — בית החולים האוניברסיטאי בצ׳נגדו"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-xs text-center text-[#5C5150] py-2 bg-[#F9F4EE]">
              בית החולים האוניברסיטאי בצ׳נגדו, סין — התמחות קלינית
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger} className="grid grid-cols-3 gap-3 mb-8">
            {[
              { n: '21', l: 'שנות ניסיון' },
              { n: '10,000+', l: 'לקוחות טופלו' },
              { n: 'מאות', l: 'נשים שמצאו הקלה' },
            ].map(({ n, l }) => (
              <motion.div key={l} variants={fadeUp} className="text-center bg-[#F9F4EE] rounded-xl p-4">
                <div className="text-2xl font-bold text-[#8B2635]">{n}</div>
                <div className="text-xs text-[#5C5150] mt-1">{l}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Media coverage */}
          <motion.div variants={stagger} className="mb-6 space-y-2">
            {/* "כפי שנראה ב" banner */}
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[#F5EAD8] shadow-sm">
              <Image
                src="/media-as-seen-in.png"
                alt="כפי שנראה ב — Ynet, רשת 13, ערוץ 2, מנטה, לאישה"
                width={800}
                height={120}
                className="w-full h-auto"
              />
            </motion.div>

            {/* YNET + TV side by side */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-2">
              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[#F5EAD8] shadow-sm">
                <Image
                  src="/media-ynet.png"
                  alt="כתבה ב-Ynet"
                  width={400}
                  height={280}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[#F5EAD8] shadow-sm">
                <Image
                  src="/media-tv.png"
                  alt="אופיר בקו הבריאות — ערוץ 13"
                  width={400}
                  height={280}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Japan article - full width */}
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[#F5EAD8] shadow-sm">
              <Image
                src="/media-japan.png"
                alt="כתבה גדול ביפן — אופיר שגב פרימן"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <p className="font-bold text-[#1C1C1C] text-lg">
              אותם כלים שמביאים תוצאות בקליניקה —<br />
              עכשיו בערכה דיגיטלית מהבית.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* ─── CTA #2 ─── */}
      <Section alt className="!py-8">
        <CTAButton />
      </Section>

      {/* ─── SOLUTION ─── */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm text-[#8B2635] font-semibold mb-2">אני שמח להציג:</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-1 text-center">
            הערכה הדיגיטלית לשחרור מכאבי ראש ומיגרנה
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#C4A97D] font-semibold mb-6">בשיטת MDHM</motion.p>

          {/* 5 dimensions visual */}
          <motion.div variants={fadeUp} className="mb-8 rounded-xl overflow-hidden bg-[#F9F4EE] p-2">
            <Image
              src="/method-multidimensional.png"
              alt="שיטת MDHM — 5 שכבות הריפוי: פיזי, אנרגטי, רגשי, מנטלי, תת-מודע"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 text-center">
            מה תקבלי בערכה
          </motion.h2>

          {/* Course curriculum style */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8DDD5] overflow-hidden mb-12">
            {/* Header bar */}
            <div className="bg-[#8B2635] px-5 py-3 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5 shrink-0">
                <path d="M4 6h16M4 10h16M4 14h10" />
              </svg>
              <span className="text-white font-bold text-sm">6 שיעורים — גישה מיידית לכל התכנים</span>
            </div>

            {/* Lessons list */}
            {[
              { title: 'מה הגוף שלך באמת אומר?', desc: 'הבנה עמוקה של שורש הכאב לפני שמתחילים לטפל. כולל שאלון אבחנה עצמי שמראה לך בדיוק איפה הגוף שלך "תקוע".', dur: '18 דק׳' },
              { title: '6 דקות של ריסטרט', desc: 'טכניקות מבוססות מחקר להרגעת מערכת העצבים — נשימות, סריקה גופנית, שחרור שרירי לסת וצוואר.', dur: '22 דק׳' },
              { title: 'כשהאנרגיה תקועה — הכאב גובר', desc: 'אקופרסורה, טאפינג וניקוז אנרגטי — לשחרר את מה שהגוף מחזיק מבלי שהרגשת.', dur: '25 דק׳' },
              { title: 'הפרק שאף אחד לא מדבר עליו', desc: 'הקשר הישיר בין רגשות לא מעובדים לכאב. EFT, כתיבה רגשית ומדיטציה מודרכת לשחרור עמוק.', dur: '30 דק׳' },
              { title: 'לשנות את הסיפור שהמוח מספר', desc: 'כלים לזהות ולשחרר אמונות שמזינות את הכאב — נוירולוגית.', dur: '20 דק׳' },
              { title: 'שקט שנשאר', desc: 'עבודה עמוקה בתת-המודע — כדי שהשינוי יהפוך להרגל ביולוגי חדש, לא הקלה זמנית.', dur: '28 דק׳' },
            ].map(({ title, desc, dur }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`flex items-start gap-4 px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F4]'} border-b border-[#F0E8E0] last:border-b-0`}
              >
                {/* Number + play icon */}
                <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                  <div className="w-8 h-8 rounded-full bg-[#F9F4EE] border border-[#E8DDD5] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="#8B2635" className="w-3.5 h-3.5">
                      <path d="M8 5l11 7-11 7V5z" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-[#C4A97D] font-semibold">שיעור {i + 1}</span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1C1C1C] mb-1 text-right">{title}</p>
                  <p className="text-base text-[#5C5150] leading-relaxed text-right">{desc}</p>
                </div>
                {/* Duration */}
                <div className="shrink-0 text-xs text-[#C4A97D] font-semibold pt-1 whitespace-nowrap">{dur}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bonuses */}
          <motion.h3 variants={fadeUp} className="text-xl font-bold mb-4 text-center">
            ו-3 בונוסים שעוטפים את התהליך:
          </motion.h3>

          <motion.div variants={stagger} className="space-y-3 mb-8">
            {[
              { img: '/bonus-protocol.png', alt: 'פרוטוקול המגן', title: 'פרוטוקול המגן', desc: 'לו"ז יומי קצר שבונה שכבת מגן לפני שההתקף מגיע', value: '569' },
              { img: '/bonus-vip-whatsapp.png', alt: 'קבוצת VIP', title: 'קבוצת ה-VIP השקטה', desc: 'הודעת דיוק מאופיר פעם בשבוע', value: '397' },
              { img: '/bonus-toxins.png', alt: 'מדריך הרעלנים', title: 'חשיפת הטריגרים הסמויים', desc: 'רשימת המוקשים בבית ובמזון שמפעילים את הכאב', value: '497' },
            ].map(({ img, alt, title, desc, value }) => (
              <motion.div key={title} variants={fadeUp} className="bg-white rounded-xl p-4 border border-[#C4A97D]">
                <div className="flex gap-4 items-center">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                    <Image src={img} alt={alt} width={100} height={100} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#1C1C1C]">{title}</p>
                    <p className="text-sm text-[#5C5150] mt-0.5">{desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#5C5150]">שווי</span>
                    <p className="font-bold text-[#8B2635]">{value} ₪</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section alt>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-2 text-center">
            מה אומרות נשים שעברו את התהליך:
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-[#5C5150] mb-8">
            עדויות ישירות — WhatsApp שקיבלנו מנשים שעבדו עם השיטה
          </motion.p>

          {/* WhatsApp testimonials */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mb-8">
            {[
              { src: '/testimonial-1.png', alt: 'עדות WhatsApp — הכל עבר ומרגישה הרבה יותר טוב' },
              { src: '/testimonial-2.png', alt: 'עדות WhatsApp — יש שיפור עצום וחזרתי לפעילות מלאה' },
              { src: '/testimonial-3.png', alt: 'עדות WhatsApp — אני מרגישה משמעותית הרבה יותר טוב' },
              { src: '/testimonial-4.png', alt: 'עדות WhatsApp — מאז שהייתי אצלך לא היו לי כאבים' },
            ].map(({ src, alt }) => (
              <motion.div key={src} variants={fadeUp} className="rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={alt} width={400} height={550} className="w-full h-auto" />
              </motion.div>
            ))}
          </motion.div>

          {/* Text testimonials bridge */}
          <motion.div variants={stagger} className="space-y-3 mb-6">
            {[
              { name: 'שחר', quote: 'מצאתי את המרפאה של אופיר אחרי שלוש שנים של מיגרנות — שלושה רופאים שלא ידעו לתת מענה. בזכות הטיפול של אופיר היום המיגרנות כמעט ואינן.' },
              { name: 'אלינור', quote: 'היחידים שהצליחו לתת מענה כשאחרים כשלו. גם אחרי שהתייאשתי — המשכתי לחזור.' },
            ].map(({ name, quote }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#F5EAD8]"
              >
                <Stars />
                <p className="text-[#1C1C1C] mt-2 leading-relaxed">"{quote}"</p>
                <p className="text-sm text-[#5C5150] mt-3 font-semibold">— {name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-center text-[#5C5150] mb-2">
            * אלו עדויות של מטופלות מהקליניקה — אותה שיטה, אותם כלים, עכשיו בערכה הדיגיטלית.
          </motion.p>
        </motion.div>
      </Section>

      {/* ─── WHO IS IT FOR ─── */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 text-center">
            הערכה מתאימה אם:
          </motion.h2>

          <motion.ul variants={stagger} className="space-y-3 mb-8">
            {[
              'ניסית כדורים, נוירולוגים, דיקור — והכאב ממשיך לחזור',
              'את מרגישה שיש קשר בין הסטרס לבין ההתקפים — אבל אף אחד לא יודע מה לעשות עם זה',
              'את רוצה להבין מה באמת קורה בגוף שלך — לא רק לכבות את הכאב',
              'את מוכנה לתהליך שיטתי של 21 יום — לא פתרון קסם',
            ].map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                <span className="text-[#8B2635] font-bold mt-1 shrink-0">✦</span>
                <span className="text-[#1C1C1C]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      {/* ─── PRICING + GUARANTEE ─── */}
      <Section alt>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 text-center">
            ההשקעה שלך:
          </motion.h2>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 shadow-sm border border-[#F5EAD8] text-center mb-6">
            <p className="text-5xl font-bold text-[#8B2635] mb-1">129 ₪</p>
            <p className="text-sm text-[#5C5150] mb-4">או 3 תשלומים של 43 ₪ בלבד</p>
            <p className="text-base font-bold text-[#1C1C1C]">פחות מעלות טיפול אחד בקליניקה</p>
          </motion.div>

          {/* Guarantee */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 border border-[#C4A97D] mb-8">
            <p className="font-bold text-[#1C1C1C] mb-2">🛡️ אחריות 30 יום — ללא אותיות קטנות</p>
            <p className="text-base text-[#5C5150] leading-relaxed">
              תרגלת, עברת על התכנים, ולא הרגשת שינוי?
              מחזירים לך את הכסף. הכל. ללא שאלות.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section id="cta-form" className="!bg-[#3D0A12]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            הגיע הזמן להחזיר שליטה:
          </motion.h2>

          {/* Elegant form container */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[#C4A97D] overflow-hidden"
            style={{ boxShadow: '0 2px 24px rgba(196,169,125,0.13)' }}
          >
            {/* Steps header */}
            <div className="bg-[#F9F4EE] px-6 pt-6 pb-5 border-b border-[#E8DDD5]">
              <ol className="space-y-3">
                {[
                  'מלאי את הפרטים בטופס למטה',
                  'השלימי רכישה בדרך התשלום המאובטח',
                  'תוך 15 שניות כל הערכה מגיעה ישירות למייל שלך',
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="bg-[#8B2635] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[#1C1C1C] text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Form */}
            <div className="bg-white px-4 py-5">
              <RavpageForm />
            </div>

            {/* Footer */}
            <div className="bg-[#F9F4EE] px-6 py-3 border-t border-[#E8DDD5] text-center">
              <p className="text-xs text-[#5C5150]">אחריות מלאה 30 יום ✦ גישה מיידית למייל ✦ תשלום מאובטח</p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-sm text-white/70 font-semibold text-center">
            באהבה,<br />
            <span className="text-white text-base">אופיר שגב פרימן</span>
          </motion.p>
        </motion.div>
      </Section>

    </main>
  )
}
