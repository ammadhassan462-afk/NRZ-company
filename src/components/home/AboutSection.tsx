import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const offices = [
  {
    city: 'Rawalpindi / Islamabad',
    address: 'Main Office, Rawalpindi, Punjab, Pakistan',
    phone: '+92 333 123 4567',
    email: 'info@nrzpk.com',
  },
  {
    city: 'Lahore',
    address: 'Lahore Branch Office, Punjab, Pakistan',
    phone: '+92 333 765 4321',
    email: 'lahore@nrzpk.com',
  },
]

const recognitions = ['WHO', 'FAIMER', 'ECFMG', 'PMDC', 'PLAB', 'WCAME', 'UNESCO']

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-700 rounded-full" />
              <span className="text-blue-700 text-sm font-semibold tracking-wide">About NRZ International</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Pakistan's Most Trusted{' '}
              <span className="text-blue-700">Overseas Education</span>{' '}
              Consultancy
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-5">
              Founded in 2008 in Rawalpindi, NRZ International has spent over 16 years helping Pakistani students unlock world-class medical and engineering education in China and Kyrgyzstan. We have successfully placed more than 5,000 students in top-ranked universities worldwide.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our model is simple: every student gets a dedicated personal consultant who manages their entire journey — from first inquiry to visa approval — ensuring no step is missed and no document is wrong. We partner only with universities recognized by WHO, FAIMER, PMDC, and other international bodies so your degree carries global weight.
            </p>

            {/* Recognitions */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                International Recognitions
              </p>
              <div className="flex flex-wrap gap-2">
                {recognitions.map((r) => (
                  <span
                    key={r}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-default border border-slate-200"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://nrzpk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm group"
            >
              Visit Official Website
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Story Card */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-7 text-white">
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Our Mission</p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                "To make quality overseas education accessible and stress-free for every Pakistani student — with transparency, honesty, and a personal touch at every step."
              </p>
            </div>

            {/* Office Cards */}
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider pt-2">Our Offices</p>
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl p-5 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {office.city}
                  </h4>
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 animate-pulse" title="Open" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-slate-400 flex-shrink-0" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    {office.email}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
