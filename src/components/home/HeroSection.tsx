import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Play } from 'lucide-react'
import { stats } from '@/data/mock'

const highlights = [
  'No IELTS Required for MBBS',
  'PMDC & WHO Recognized Universities',
  'Guaranteed Admission Letters',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const floatAnimation = prefersReducedMotion
    ? {}
    : { animate: { y: [0, -8, 0] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const } }

  const floatAnimation2 = prefersReducedMotion
    ? {}
    : { animate: { y: [0, 8, 0] }, transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 } }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Photographic background — shifted right so the clean doctor portrait fills the frame */}
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

      {/* 
        Multi-stop overlay:
        • 0-55%  very dark  → buries the baked-in red text on the left side of the photo
        • 55-75% medium     → transition zone / card background
        • 75-100% light     → lets the doctor portrait show on the far right
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,16,80,0.93) 0%, rgba(8,16,80,0.93) 45%, rgba(8,16,80,0.60) 62%, rgba(8,16,80,0.28) 78%, rgba(8,16,80,0.12) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-amber-400/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/15 border border-amber-400/30 rounded-full mb-7"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full" aria-hidden="true" />
              <span className="text-amber-300 text-sm font-semibold tracking-wide">
                Pakistan's Trusted Education Consultancy Since 2008
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Study{' '}
              <span className="text-amber-400">MBBS</span>{' '}
              in China —{' '}
              <span className="text-blue-300">Guaranteed</span>{' '}
              Admission
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-blue-100/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              NRZ International connects Pakistani students with top-ranked WHO & PMDC recognized universities in China and Kyrgyzstan. Your path to a medical degree — simplified.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="space-y-3 mb-10"
              aria-label="Key highlights"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-blue-100 text-base font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-amber-600"
              >
                Apply Now — Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Watch our story video"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                Watch Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10"
              aria-label="NRZ statistics"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="text-blue-300/80 text-xs sm:text-sm font-medium leading-tight order-last">{stat.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block mt-48"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main card — compact */}
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
                        i === 0
                          ? 'bg-amber-400 text-slate-900'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {prog}
                    </span>
                  ))}
                </div>

                {/* University list */}
                <div className="space-y-2">
                  {[
                    { name: 'Changsha Medical University', fee: '30,000 RMB/yr', badge: 'Most Popular' },
                    { name: 'Chifeng University', fee: '25,000 RMB/yr', badge: 'Scholarship Available' },
                    { name: 'Henan Medical University', fee: '27,000 RMB/yr', badge: 'No HSK' },
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
                {...floatAnimation}
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-4 py-2.5 shadow-lg text-sm font-bold"
              >
                ✓ Free Consultation
              </motion.div>

              {/* Floating stat */}
              <motion.div
                {...floatAnimation2}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-slate-900 font-black text-xl">5,000+</p>
                <p className="text-slate-500 text-xs font-medium">Students Placed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
