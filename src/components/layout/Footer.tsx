import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { recognitions, offices } from '@/data/mock';

const programLinks = [
  { label: 'MBBS in China', href: '/programs/mbbs-china' },
  { label: 'MBBS in Kyrgyzstan', href: '/programs/mbbs-kyrgyzstan' },
  { label: 'BDS in China', href: '/programs/bds-china' },
  { label: 'Engineering in China', href: '/programs/engineering-china' },
  { label: 'Pharmacy in China', href: '/programs/pharmacy-china' },
  { label: 'Chinese Language', href: '/programs/chinese-language' },
];

const universityLinks = [
  { label: 'Changsha Medical University', href: '/universities/changsha' },
  { label: 'Hubei University of Medicine', href: '/universities/hubei' },
  { label: 'Chifeng University', href: '/universities/chifeng' },
  { label: 'Henan University of S&T', href: '/universities/henan' },
  { label: 'Dalian Medical University', href: '/universities/dalian' },
  { label: 'View All Universities →', href: '/universities' },
];

const quickLinks = [
  { label: 'About NRZ', href: '/about' },
  { label: 'Apply Online', href: '/apply' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Student Login', href: '/login' },
];

// Social links — text-based since FB/IG/YT are not in lucide-react
const socialLinks = [
  { label: 'Facebook', abbr: 'f', href: 'https://facebook.com/nrzpk', color: 'hover:bg-blue-600' },
  { label: 'Instagram', abbr: 'ig', href: 'https://instagram.com/nrzpk', color: 'hover:bg-pink-600' },
  { label: 'YouTube', abbr: 'yt', href: 'https://youtube.com/@nrzpk', color: 'hover:bg-red-600' },
  { label: 'WhatsApp', abbr: 'wa', href: 'https://wa.me/923005050789', color: 'hover:bg-green-600' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" aria-label="Site footer">

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand column — spans 4 cols */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-black text-base leading-tight">NRZ International</p>
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Est. 2008 · Rawalpindi</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Pakistan's most trusted MBBS and medical education consultancy — connecting
              Pakistani students with WHO &amp; PMDC recognized universities in China and
              Kyrgyzstan since 2008.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold transition-all ${s.color} hover:text-white hover:border-transparent`}
                >
                  {s.abbr}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923005050789?text=Hi NRZ, I'd like to know more about MBBS admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-lg transition-colors"
            >
              <span role="img" aria-label="WhatsApp" className="text-base">💬</span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Programs — spans 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Programs</h3>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities — spans 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Universities</h3>
            <ul className="space-y-2.5">
              {universityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — spans 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact Us</h3>

            {offices.map((office) => (
              <div key={office.city} className="mb-6 last:mb-0">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {office.city} — {office.label}
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-slate-400 text-xs">
                    <MapPin size={13} className="flex-shrink-0 mt-0.5 text-slate-500" aria-hidden="true" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Phone size={13} className="flex-shrink-0 text-slate-500" aria-hidden="true" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Mail size={13} className="flex-shrink-0 text-slate-500" aria-hidden="true" />
                    <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Clock size={13} className="flex-shrink-0 text-slate-500" aria-hidden="true" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="mt-5 pt-5 border-t border-slate-800 flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-slate-500 hover:text-white text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recognition bar ── */}
        <div className="border-t border-slate-800 pt-8 pb-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 text-center">
            Our Partner Universities are Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {recognitions.map((r) => (
              <div
                key={r.abbr}
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
                title={r.name}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white text-xs font-bold">{r.abbr}</span>
                <span className="text-slate-500 text-xs hidden sm:inline">— {r.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {year} NRZ International (Pvt.) Ltd. All rights reserved. Rawalpindi, Pakistan.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://nrzpk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-xs transition-colors"
            >
              nrzpk.com
              <ExternalLink size={10} aria-hidden="true" />
            </a>
            <span className="text-slate-700 text-xs">|</span>
            <Link to="/contact" className="text-slate-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-white text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
