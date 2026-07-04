import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const programs = [
  { label: 'MBBS in China', href: '#' },
  { label: 'BDS in China', href: '#' },
  { label: 'Clinical Medicine', href: '#' },
  { label: 'BS Nursing', href: '#' },
  { label: 'Pharmacy', href: '#' },
  { label: 'Engineering — Kyrgyzstan', href: '#' },
  { label: 'Chinese Language Course', href: '#' },
]

const universities = [
  { label: 'Changsha Medical University', href: '#' },
  { label: 'Hubei Polytechnic University', href: '#' },
  { label: 'Chifeng University', href: '#' },
  { label: 'Henan Medical University', href: '#' },
  { label: 'Liaoning Inst. of Sci & Tech', href: '#' },
  { label: 'Dalian Minzu University', href: '#' },
]

const quickLinks = [
  { label: 'About NRZ', href: '#about' },
  { label: 'Why Choose Us', href: '#' },
  { label: 'Application Process', href: '#' },
  { label: 'Scholarships', href: '#' },
  { label: 'News & Events', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const recognitions = ['WHO', 'FAIMER', 'ECFMG', 'PMDC', 'PLAB', 'WCAME']

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">NRZ International</p>
                <p className="text-[10px] text-blue-400 font-medium tracking-wide">EST. 2008 · RAWALPINDI</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pakistan's leading education consultancy for MBBS and Engineering programs in China and Kyrgyzstan. Trusted by 5,000+ students since 2008.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', href: '#', letter: 'f' },
                { label: 'Instagram', href: '#', letter: 'in' },
                { label: 'YouTube', href: '#', letter: 'yt' },
              ].map(({ label, href, letter }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-slate-400 text-xs font-bold">{letter}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Universities</h4>
            <ul className="space-y-2.5">
              {universities.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-3 mb-7">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Rawalpindi / Islamabad & Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <a href="tel:+923331234567" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  +92 333 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <a href="mailto:info@nrzpk.com" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  info@nrzpk.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <a
                  href="https://nrzpk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  nrzpk.com
                </a>
              </li>
            </ul>

            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recognitions bar */}
        <div className="border-t border-slate-800 pt-8 pb-6">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Our Partner Universities Are Recognized By
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {recognitions.map((r) => (
              <span
                key={r}
                className="px-4 py-1.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-lg border border-slate-700"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} NRZ International Consultants. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
