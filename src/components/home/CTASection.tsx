import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone, CalendarCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Free Consultation',
    description: 'Book a free session with your dedicated NRZ consultant to explore the right program and university for you.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Document Review',
    description: 'Upload your academic documents. Your consultant reviews them and guides you through any corrections.',
  },
  {
    icon: ArrowRight,
    step: '03',
    title: 'Guaranteed Admission',
    description: 'Receive your official admission letter from a top Chinese university. We handle the JW202 visa process end-to-end.',
  },
]

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const pulseAnimation = prefersReducedMotion
    ? {}
    : {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
      }

  return (
    <section className="py-24 bg-white" ref={ref} aria-label="How it works and apply">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it works header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 rounded-full mb-5">
            <div className="w-2 h-2 bg-amber-500 rounded-full" aria-hidden="true" />
            <span className="text-amber-700 text-sm font-semibold tracking-wide">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Your Admission in{' '}
            <span className="text-blue-700">3 Simple Steps</span>
          </h2>
          <p className="text-slate-600 text-base">
            NRZ makes the entire process transparent, trackable, and stress-free from day one.
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="grid sm:grid-cols-3 gap-6 mb-20 relative" aria-label="Application steps">
          <div className="hidden sm:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" aria-hidden="true" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 text-center bg-white"
              >
                <div className="relative inline-flex mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-blue-700 flex items-center justify-center shadow-lg">
                    <Icon className="w-9 h-9 text-white" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 text-slate-900 text-xs font-black rounded-full flex items-center justify-center" aria-hidden="true">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-2">{step.description}</p>
              </motion.li>
            )
          })}
        </ol>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-8 sm:px-16 py-14 text-center"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              {...pulseAnimation}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full mb-5"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full" aria-hidden="true" />
              <span className="text-amber-300 text-sm font-semibold">Admissions Open for 2025–26</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Your Medical Career Starts{' '}
              <span className="text-amber-400">Today</span>
            </h2>
            <p className="text-blue-100/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 5,000+ Pakistani students who trusted NRZ International to guide them into top Chinese medical universities. Applications are open — don't miss the intake.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-amber-600"
              >
                Start Free Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <a
                href="tel:+923331234567"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us Now
              </a>
            </div>

            <p className="text-blue-300/60 text-xs mt-7 font-medium">
              Free consultation · No upfront payment · Your data is secure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
