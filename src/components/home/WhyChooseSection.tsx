import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield,
  Award,
  Users,
  FileCheck,
  Globe,
  Clock,
} from 'lucide-react'
import { whyChooseNRZ } from '@/data/mock'

const iconMap: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  Shield,
  Award,
  Users,
  FileCheck,
  Globe,
  Clock,
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function WhyChooseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-slate-50" ref={ref} aria-label="Why choose NRZ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-5">
            <div className="w-2 h-2 bg-blue-700 rounded-full" aria-hidden="true" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">Why Choose NRZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            The NRZ Advantage — <span className="text-blue-700">6 Reasons</span> Our Students Succeed
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From your first inquiry to your visa stamp, we handle every detail so you can focus on what matters: your future.
          </p>
        </motion.div>

        {/* Cards grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="NRZ advantages">
          {whyChooseNRZ.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.li
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center mb-5 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" aria-hidden={true} />
                  )}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2.5 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.li>
            )
          })}
        </ul>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 bg-blue-700 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">Ready to begin your journey?</p>
            <p className="text-blue-200 text-sm mt-0.5">Talk to an NRZ consultant today — completely free.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/apply"
              className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-amber-600"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/programs"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white"
            >
              Browse Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
