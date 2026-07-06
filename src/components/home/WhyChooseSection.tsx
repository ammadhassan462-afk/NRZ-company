import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Award,
  Banknote,
  HeartHandshake,
  Star,
  ArrowRight,
} from 'lucide-react';
import { whyChooseNRZ, testimonials } from '@/data/mock';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Award,
  Banknote,
  HeartHandshake,
};

// Each card gets a distinct accent colour for the icon container
const accentColors: string[] = [
  'bg-blue-50 text-blue-700',
  'bg-emerald-50 text-emerald-700',
  'bg-amber-50 text-amber-700',
  'bg-violet-50 text-violet-700',
  'bg-green-50 text-green-700',
  'bg-rose-50 text-rose-700',
];

const cardBorders: string[] = [
  'hover:border-blue-200 hover:shadow-blue-50',
  'hover:border-emerald-200 hover:shadow-emerald-50',
  'hover:border-amber-200 hover:shadow-amber-50',
  'hover:border-violet-200 hover:shadow-violet-50',
  'hover:border-green-200 hover:shadow-green-50',
  'hover:border-rose-200 hover:shadow-rose-50',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
});

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-24 bg-slate-50 overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700" aria-hidden="true" />
            Why Choose NRZ
          </span>
          <h2 id="why-choose-heading" className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            The NRZ Advantage —<br />
            <span className="text-blue-700">Beyond Just Admission</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Thousands of Pakistani families trust NRZ International not just to secure
            admissions, but for 360° support before, during, and after their child's
            journey abroad.
          </p>
        </motion.div>

        {/* ── 6 advantage cards ── */}
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          aria-label="NRZ advantages"
        >
          {whyChooseNRZ.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.li
                key={item.id}
                {...fadeUp(i * 0.07)}
                className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default ${cardBorders[i]}`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform group-hover:scale-110 duration-300 ${accentColors[i]}`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>

        {/* ── Testimonials ── */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-7">
            What Our Students Say
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                {...fadeUp(i * 0.08)}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.program} · {t.university}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Trust bar ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="relative overflow-hidden bg-blue-700 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, #60a5fa, transparent 60%)' }}
            aria-hidden="true"
          />
          <div className="relative text-center sm:text-left">
            <p className="text-white font-black text-xl sm:text-2xl leading-tight">
              Join 5,000+ Pakistani Students <span className="text-amber-400">Already Enrolled</span>
            </p>
            <p className="text-blue-200 text-sm mt-1">
              2026 September intake is open — limited seats at partner universities.
            </p>
          </div>
          <Link
            to="/apply"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm rounded-xl transition-colors shadow-lg"
          >
            Start My Application
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
