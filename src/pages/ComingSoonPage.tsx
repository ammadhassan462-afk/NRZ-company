import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';

// Pretty labels for known stub routes
const pageLabels: Record<string, string> = {
  '/programs': 'Programs',
  '/programs/mbbs-china': 'MBBS in China',
  '/programs/mbbs-kyrgyzstan': 'MBBS in Kyrgyzstan',
  '/programs/bds-china': 'BDS in China',
  '/programs/engineering-china': 'Engineering in China',
  '/programs/pharmacy-china': 'Pharmacy in China',
  '/programs/chinese-language': 'Chinese Language Program',
  '/universities': 'Universities',
  '/universities/changsha': 'Changsha Medical University',
  '/universities/hubei': 'Hubei University of Medicine',
  '/universities/chifeng': 'Chifeng University',
  '/universities/henan': 'Henan University of S&T',
  '/universities/dalian': 'Dalian Medical University',
  '/about': 'About NRZ International',
  '/contact': 'Contact Us',
  '/apply': 'Apply Online',
  '/login': 'Student Login',
};

export default function ComingSoonPage() {
  const { pathname } = useLocation();
  const label = pageLabels[pathname] ?? 'This Page';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center shadow-lg mb-6">
        <GraduationCap size={28} className="text-white" />
      </div>

      {/* Badge */}
      <span className="inline-flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Week 1 · UI Prototype
      </span>

      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 leading-tight">
        {label}
      </h1>
      <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed">
        This page is coming in a future sprint. The full homepage is live at the link below.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-base rounded-xl transition-colors shadow-md"
      >
        <ArrowLeft size={18} />
        Back to Homepage
      </Link>

      <p className="text-slate-400 text-xs mt-8">
        NRZ International · Est. 2008 · Rawalpindi, Pakistan
      </p>
    </div>
  );
}
