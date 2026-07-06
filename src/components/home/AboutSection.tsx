import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { stats, recognitions, offices } from '@/data/mock';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const keyPoints = [
  'Certified education counsellors with hands-on MBBS admission experience',
  'End-to-end support: application, VISA, pre-departure, and on-campus orientation',
  'Established partnerships with 20+ top-ranked universities in China & Kyrgyzstan',
  'In-person offices in Rawalpindi (HQ) and Lahore for face-to-face guidance',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700" aria-hidden="true" />
            About NRZ International
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          id="about-heading"
          className="text-4xl sm:text-5xl font-black text-slate-900 text-center leading-tight mb-4"
        >
          Pakistan's Bridge to{' '}
          <span className="text-blue-700">World-Class</span>{' '}
          Medical Education
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-500 text-lg text-center max-w-2xl mx-auto mb-16"
        >
          Trusted by thousands of Pakistani families since 2008, NRZ International is the
          country's most experienced MBBS and medical education consultancy.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Left: Impact visual panel ── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Main dark card */}
            <div
              className="relative rounded-3xl overflow-hidden p-8 min-h-[480px] flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #0d2255 0%, #0a1628 100%)' }}
            >
              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)',
                  backgroundSize: '28px 28px',
                }}
                aria-hidden="true"
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', transform: 'translate(30%, -30%)' }}
                aria-hidden="true"
              />

              {/* Top: Brand */}
              <div className="relative flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-900 font-black text-sm">NRZ</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">NRZ International</p>
                  <p className="text-blue-300 text-xs">Education Consultancy Since 2008</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="bg-white/8 border border-white/10 rounded-2xl p-5 hover:bg-white/12 transition-colors"
                  >
                    <p className="text-3xl font-black text-white leading-tight">{stat.value}</p>
                    <p className="text-blue-200 text-sm font-medium mt-1">{stat.label}</p>
                    <p className="text-blue-300/60 text-xs mt-0.5">{stat.sublabel}</p>
                  </div>
                ))}
              </div>

              {/* Recognition bar */}
              <div className="relative bg-amber-400/10 border border-amber-400/20 rounded-xl p-4">
                <p className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5">Degrees Recognized By</p>
                <div className="flex flex-wrap gap-2">
                  {recognitions.map((r) => (
                    <span
                      key={r.abbr}
                      className="text-white text-xs font-bold bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                      title={r.name}
                    >
                      {r.abbr}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Countries pill — decorative */}
            <div className="absolute -bottom-5 left-8 bg-white shadow-xl border border-slate-100 rounded-2xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="China">🇨🇳</span>
              <div className="w-px h-6 bg-slate-200" />
              <span className="text-2xl" role="img" aria-label="Kyrgyzstan">🇰🇬</span>
              <div className="w-px h-6 bg-slate-200" />
              <span className="text-sm font-bold text-slate-700">China &amp; Kyrgyzstan</span>
            </div>
          </motion.div>

          {/* ── Right: Text content ── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Since <strong className="text-slate-900">2008</strong>, NRZ International has guided
              thousands of Pakistani students to MBBS, BDS, Engineering, and Pharmacy programs at
              WHO &amp; PMDC recognized universities across China and Kyrgyzstan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              Our team of certified education counsellors has built direct relationships with over
              20 partner universities — so when NRZ secures your admission letter, it's
              official, guaranteed, and fast. No middlemen. No uncertainty.
            </p>

            {/* Key points */}
            <ul className="space-y-3 mb-9" aria-label="What NRZ offers">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-700 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Office cards */}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Our Offices</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="border border-slate-200 rounded-xl p-4 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-blue-700 flex-shrink-0" aria-hidden="true" />
                    <span className="font-bold text-slate-900 text-sm">{office.city}</span>
                    {office.isMain && (
                      <span className="ml-auto text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full font-bold">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2">{office.address}</p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-semibold hover:underline"
                  >
                    <Phone size={11} aria-hidden="true" />
                    {office.phone}
                  </a>
                  <div className="flex items-center gap-1 mt-1 text-slate-400 text-xs">
                    <Clock size={10} aria-hidden="true" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Book a Free Consultation
              </Link>
              <a
                href="https://nrzpk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold text-sm rounded-xl transition-colors"
              >
                Visit nrzpk.com
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
