import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { stats } from '@/data/mock';

const highlights = [
  'No IELTS / TOEFL Required',
  'PMDC & WHO Recognized Universities',
  'Guaranteed Admission Letters',
];

const floatAnimation = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const safeFloat = reduceMotion ? {} : floatAnimation;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — NRZ International"
    >
      {/* ── Background photo — shifted right to frame the clean doctor portrait ── */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: '85% center',
          filter: 'brightness(0.72)',
        }}
        aria-hidden="true"
      />

      {/* ── Directional overlay — heavy left (text), light right (photo) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,16,80,0.93) 0%, rgba(8,16,80,0.93) 45%, rgba(8,16,80,0.60) 62%, rgba(8,16,80,0.28) 78%, rgba(8,16,80,0.12) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Bottom fade so the stats bar reads cleanly ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, rgba(8,16,80,0.75) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* Left — Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              <span className="text-amber-300 text-xs font-bold tracking-wide uppercase">
                Pakistan's Trusted Education Consultancy Since 2008
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Study{' '}
              <span className="text-amber-400">MBBS</span>{' '}
              in China —{' '}
              <span className="text-blue-300">Guaranteed</span>{' '}
              Admission
            </h1>

            {/* Sub-headline */}
            <p className="text-blue-100/80 text-lg leading-relaxed mb-7 max-w-lg">
              NRZ International connects Pakistani students with top-ranked WHO &amp; PMDC
              recognized universities in China and Kyrgyzstan. Your path to a medical
              degree — simplified.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-9" aria-label="Key highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100/90 text-sm font-medium">
                  <CheckCircle2 size={17} className="text-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Apply Now — Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
                aria-label="Watch Our Story video"
              >
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play size={14} className="text-white fill-white ml-0.5" aria-hidden="true" />
                </span>
                Watch Our Story
              </button>
            </div>
          </motion.div>

          {/* Right — Admission portal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block mt-48"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-[2px] border border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-900 font-black text-xs">NRZ</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">NRZ International</p>
                    <p className="text-blue-300 text-xs">Admission Portal</p>
                  </div>
                </div>

                <p className="text-blue-100/70 text-xs mb-3">Select your preferred program to begin your application</p>

                {/* Program pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['MBBS', 'BDS', 'Engineering', 'Pharmacy', 'Nursing', 'Chinese Language'].map((prog, i) => (
                    <span
                      key={prog}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition-all ${
                        i === 0 ? 'bg-amber-400 text-slate-900' : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {prog}
                    </span>
                  ))}
                </div>

                {/* University rows */}
                <div className="space-y-2">
                  {[
                    { name: 'Changsha Medical University', fee: '30,000 RMB/yr', badge: 'Most Popular' },
                    { name: 'Chifeng University', fee: '25,000 RMB/yr', badge: 'Scholarship Available' },
                    { name: 'Henan University of S&T', fee: '27,000 RMB/yr', badge: 'No HSK' },
                  ].map((uni) => (
                    <div
                      key={uni.name}
                      className="flex items-center justify-between bg-white/8 hover:bg-white/15 rounded-xl px-3 py-2.5 cursor-pointer transition-all border border-white/10"
                    >
                      <div>
                        <p className="text-white text-xs font-semibold">{uni.name}</p>
                        <p className="text-blue-300 text-[11px] mt-0.5">{uni.fee}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                        {uni.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/apply"
                  className="mt-3 block w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm rounded-xl transition-colors text-center"
                >
                  Start Your Application →
                </Link>
              </div>

              {/* Floating badge */}
              <motion.div
                {...safeFloat}
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-4 py-2.5 shadow-lg text-sm font-bold"
              >
                ✓ Free Consultation
              </motion.div>

              {/* Students placed chip */}
              <motion.div
                {...safeFloat}
                transition={{ ...(reduceMotion ? {} : { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }) }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-2xl font-black text-slate-900 leading-tight">5,000+</p>
                <p className="text-slate-500 text-xs font-medium">Students Placed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center lg:text-left lg:px-8 first:pl-0 last:pr-0">
                <dt className="text-3xl xl:text-4xl font-black text-white">{stat.value}</dt>
                <dd className="text-blue-200 text-sm font-medium mt-1">{stat.label}</dd>
                <dd className="text-blue-300/60 text-xs mt-0.5">{stat.sublabel}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hidden lg:flex"
        animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
