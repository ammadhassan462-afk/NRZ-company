import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, GraduationCap } from 'lucide-react';

const programLinks = [
  { label: 'MBBS in China', href: '/programs/mbbs-china', badge: 'Most Popular' },
  { label: 'MBBS in Kyrgyzstan', href: '/programs/mbbs-kyrgyzstan', badge: '' },
  { label: 'BDS in China', href: '/programs/bds-china', badge: '' },
  { label: 'Engineering in China', href: '/programs/engineering-china', badge: '' },
  { label: 'Pharmacy in China', href: '/programs/pharmacy-china', badge: '' },
  { label: 'Chinese Language', href: '/programs/chinese-language', badge: '' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs', children: programLinks },
  { label: 'Universities', href: '/universities' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Outside click closes dropdown
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Escape key closes dropdown & mobile menu
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-blue-700 text-white text-center py-2 text-xs sm:text-sm font-medium hidden sm:block">
        🎓&nbsp;
        <span className="opacity-90">2026 September Intake Now Open — Limited Seats Available.</span>
        &nbsp;
        <Link to="/apply" className="underline underline-offset-2 font-bold hover:text-amber-300 transition-colors">
          Apply Free →
        </Link>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={false}
        animate={{ backgroundColor: 'rgba(255,255,255,0.98)', boxShadow: '0 1px 24px rgba(0,0,0,0.08)' }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-200/80"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="NRZ International — Home">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center shadow-md group-hover:bg-blue-800 transition-colors flex-shrink-0">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-base tracking-tight text-slate-900 transition-colors">
                  NRZ International
                </span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-blue-700 transition-colors">
                  Est. 2008 · Rawalpindi
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer text-slate-700 hover:text-blue-700 hover:bg-blue-50 ${
                        isActive(link.href) ? 'text-blue-700' : ''
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              role="menuitem"
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span>{child.label}</span>
                              {child.badge && (
                                <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-2 pt-2 px-4 pb-1">
                            <Link
                              to="/programs"
                              className="text-xs text-blue-700 font-semibold hover:underline"
                              onClick={() => setOpenDropdown(null)}
                            >
                              View all programs →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all text-slate-700 hover:text-blue-700 hover:bg-blue-50 ${
                      isActive(link.href) ? 'text-blue-700 bg-blue-50' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+925145715988"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                <Phone size={14} />
                <span>051 457 1988</span>
              </a>
              <div className="w-px h-5 bg-slate-200" />
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/apply"
                className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              >
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile CTAs */}
              <div className="px-4 pb-5 pt-2 border-t border-slate-100 flex flex-col gap-2.5 mt-1">
                <a
                  href="tel:+925145715988"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <Phone size={15} />
                  Call: 051 457 1988
                </a>
                <Link
                  to="/apply"
                  className="block text-center py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm rounded-lg transition-colors"
                >
                  Apply Now — Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
