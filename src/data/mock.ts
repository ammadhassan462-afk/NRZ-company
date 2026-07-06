// ─────────────────────────────────────────────
// NRZ International — Mock Data (Week 1 UI)
// ─────────────────────────────────────────────

export interface University {
  id: string;
  name: string;
  location: string;
  established: number;
  fee: string;
  feeUSD: string;
  feePKR: string;
  recognition: string[];
  programs: string[];
  duration: string;
  medium: string;
  badge: string;
  noIELTS: boolean;
  noHSK: boolean;
  scholarshipAvailable: boolean;
  minGrade: string;
}

export interface Program {
  id: string;
  name: string;
  slug: string;
  country: string;
  duration: string;
  popular: boolean;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Recognition {
  abbr: string;
  name: string;
}

export interface Office {
  city: string;
  label: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  isMain: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  university: string;
  program: string;
  rating: number;
  quote: string;
  initials: string;
}

// ─── Universities ──────────────────────────────
export const universities: University[] = [
  {
    id: 'changsha',
    name: 'Changsha Medical University',
    location: 'Changsha, Hunan Province, China',
    established: 1921,
    fee: '30,000 RMB/yr',
    feeUSD: '~$4,200/yr',
    feePKR: '~₨ 11.5 Lac/yr',
    recognition: ['WHO', 'PMDC', 'PMC', 'NMC'],
    programs: ['MBBS', 'BDS'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'Most Popular',
    noIELTS: true,
    noHSK: true,
    scholarshipAvailable: false,
    minGrade: '60% in Biology, Chemistry, Physics',
  },
  {
    id: 'hubei',
    name: 'Hubei University of Medicine',
    location: 'Shiyan, Hubei Province, China',
    established: 1965,
    fee: '28,000 RMB/yr',
    feeUSD: '~$3,900/yr',
    feePKR: '~₨ 10.7 Lac/yr',
    recognition: ['WHO', 'PMDC', 'PMC'],
    programs: ['MBBS'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'Scholarship Available',
    noIELTS: true,
    noHSK: true,
    scholarshipAvailable: true,
    minGrade: '60% in Biology, Chemistry, Physics',
  },
  {
    id: 'chifeng',
    name: 'Chifeng University',
    location: 'Chifeng, Inner Mongolia, China',
    established: 1958,
    fee: '25,000 RMB/yr',
    feeUSD: '~$3,500/yr',
    feePKR: '~₨ 9.5 Lac/yr',
    recognition: ['WHO', 'PMDC', 'PMC'],
    programs: ['MBBS'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'Budget Friendly',
    noIELTS: true,
    noHSK: true,
    scholarshipAvailable: false,
    minGrade: '55% in Biology, Chemistry, Physics',
  },
  {
    id: 'henan',
    name: 'Henan University of Science & Technology',
    location: 'Luoyang, Henan Province, China',
    established: 1952,
    fee: '27,000 RMB/yr',
    feeUSD: '~$3,750/yr',
    feePKR: '~₨ 10.2 Lac/yr',
    recognition: ['WHO', 'PMDC', 'PMC'],
    programs: ['MBBS', 'Engineering'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'No HSK Required',
    noIELTS: true,
    noHSK: true,
    scholarshipAvailable: false,
    minGrade: '60% in relevant subjects',
  },
  {
    id: 'liaoning',
    name: 'Liaoning University of Traditional Medicine',
    location: 'Shenyang, Liaoning Province, China',
    established: 1956,
    fee: '26,000 RMB/yr',
    feeUSD: '~$3,600/yr',
    feePKR: '~₨ 9.8 Lac/yr',
    recognition: ['WHO', 'PMDC'],
    programs: ['MBBS', 'Pharmacy'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'New Intake Open',
    noIELTS: true,
    noHSK: false,
    scholarshipAvailable: true,
    minGrade: '55% in relevant subjects',
  },
  {
    id: 'dalian',
    name: 'Dalian Medical University',
    location: 'Dalian, Liaoning Province, China',
    established: 1947,
    fee: '32,000 RMB/yr',
    feeUSD: '~$4,500/yr',
    feePKR: '~₨ 12.2 Lac/yr',
    recognition: ['WHO', 'PMDC', 'PMC', 'NMC'],
    programs: ['MBBS', 'BDS', 'Pharmacy'],
    duration: '5+1 years',
    medium: 'English Medium',
    badge: 'Premium University',
    noIELTS: true,
    noHSK: true,
    scholarshipAvailable: false,
    minGrade: '65% in Biology, Chemistry, Physics',
  },
];

// ─── Programs ──────────────────────────────────
export const programs: Program[] = [
  { id: 'mbbs-china', name: 'MBBS in China', slug: '/programs/mbbs-china', country: 'China', duration: '5+1 years', popular: true },
  { id: 'bds-china', name: 'BDS in China', slug: '/programs/bds-china', country: 'China', duration: '5 years', popular: false },
  { id: 'engineering', name: 'Engineering in China', slug: '/programs/engineering-china', country: 'China', duration: '4 years', popular: false },
  { id: 'pharmacy', name: 'Pharmacy in China', slug: '/programs/pharmacy-china', country: 'China', duration: '4 years', popular: false },
  { id: 'nursing', name: 'Nursing in China', slug: '/programs/nursing-china', country: 'China', duration: '4 years', popular: false },
  { id: 'mbbs-kyrgyzstan', name: 'MBBS in Kyrgyzstan', slug: '/programs/mbbs-kyrgyzstan', country: 'Kyrgyzstan', duration: '5+1 years', popular: true },
  { id: 'chinese', name: 'Chinese Language', slug: '/programs/chinese-language', country: 'China', duration: '1 year', popular: false },
];

// ─── Stats ─────────────────────────────────────
export const stats: Stat[] = [
  { value: '5,000+', label: 'Students Placed', sublabel: 'across China & Kyrgyzstan' },
  { value: '15+', label: 'Years Experience', sublabel: 'established 2008' },
  { value: '20+', label: 'Partner Universities', sublabel: 'WHO & PMDC recognized' },
  { value: '95%', label: 'Visa Success Rate', sublabel: '2023–24 intake batch' },
];

// ─── Why Choose NRZ ────────────────────────────
export const whyChooseNRZ: WhyChooseItem[] = [
  {
    id: 'recognition',
    title: 'PMDC, PMC & WHO Recognized',
    description: 'Every partner university is fully recognized by PMDC, PMC, WHO, and NMC — your degree qualifies for MDCAT licensing examinations in Pakistan.',
    icon: 'ShieldCheck',
  },
  {
    id: 'no-ielts',
    title: 'No IELTS or TOEFL Required',
    description: 'All MBBS programs are taught in English. No IELTS, TOEFL, SAT, or HSK language test is required for most of our partner universities.',
    icon: 'BadgeCheck',
  },
  {
    id: 'admission',
    title: 'Guaranteed Admission Letters',
    description: 'Official invitation letters directly from partner universities within 2–4 weeks of document submission — zero uncertainty, zero waiting.',
    icon: 'FileCheck',
  },
  {
    id: 'experience',
    title: '15+ Years Proven Track Record',
    description: 'Founded in 2008 in Rawalpindi, NRZ International has placed over 5,000 Pakistani students with an unmatched record in the industry.',
    icon: 'Award',
  },
  {
    id: 'fees',
    title: 'Affordable Fees & Scholarships',
    description: 'Programs start from just 25,000 RMB/year (approx. ₨9.5 Lac). Select universities offer merit-based scholarships of up to 30% on tuition.',
    icon: 'Banknote',
  },
  {
    id: 'support',
    title: 'Complete End-to-End Support',
    description: 'From initial consultation through VISA processing, pre-departure briefings, airport pickup, and on-campus orientation — we are with you every step.',
    icon: 'HeartHandshake',
  },
];

// ─── Recognitions ──────────────────────────────
export const recognitions: Recognition[] = [
  { abbr: 'PMDC', name: 'Pakistan Medical & Dental Council' },
  { abbr: 'PMC', name: 'Pakistan Medical Commission' },
  { abbr: 'WHO', name: 'World Health Organization' },
  { abbr: 'NMC', name: 'National Medical Commission' },
  { abbr: 'MDCAT', name: 'MDCAT Eligible Graduates' },
];

// ─── Offices ───────────────────────────────────
export const offices: Office[] = [
  {
    city: 'Rawalpindi',
    label: 'Main Office',
    address: 'Office 3, Bilal Plaza, Committee Chowk, Rawalpindi, Punjab 46000',
    phone: '+92 51 457 1988',
    whatsapp: '923005050789',
    email: 'info@nrzpk.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    isMain: true,
  },
  {
    city: 'Lahore',
    label: 'Branch Office',
    address: 'Office 12, Executive Towers, Gulberg III, Lahore, Punjab 54000',
    phone: '+92 42 357 8899',
    whatsapp: '923215050789',
    email: 'lahore@nrzpk.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    isMain: false,
  },
];

// ─── Process Steps ─────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'Speak with our certified counsellors about your eligibility, preferred country, program, and the right university for your goals.',
    icon: 'MessageCircle',
  },
  {
    step: 2,
    title: 'Document Preparation',
    description: 'Our team guides you step-by-step through transcripts, passport copies, medical certificates, and university application forms.',
    icon: 'ClipboardList',
  },
  {
    step: 3,
    title: 'Admission & VISA',
    description: 'We secure your official admission letter and manage the full VISA application — then prepare you with a pre-departure briefing.',
    icon: 'Plane',
  },
];

// ─── Testimonials ──────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Muhammad Ali Raza',
    city: 'Rawalpindi',
    university: 'Changsha Medical University',
    program: 'MBBS · Year 3',
    rating: 5,
    initials: 'MA',
    quote: 'NRZ handled everything from admission to VISA processing. I just had to show up. The counsellors are honest and genuinely invested — best decision of my academic life.',
  },
  {
    id: 2,
    name: 'Zahra Farooq',
    city: 'Lahore',
    university: 'Hubei University of Medicine',
    program: 'MBBS · Year 4',
    rating: 5,
    initials: 'ZF',
    quote: 'I was nervous about studying abroad, but NRZ\'s pre-departure briefing was so thorough. They even arranged airport pickup in China. I felt completely prepared and supported.',
  },
  {
    id: 3,
    name: 'Hassan Mahmood',
    city: 'Karachi',
    university: 'Dalian Medical University',
    program: 'MBBS · Year 5',
    rating: 5,
    initials: 'HM',
    quote: 'The scholarship guidance from NRZ saved my family 30% on tuition fees. Their counsellors don\'t just sell you a university — they genuinely care about your future.',
  },
];
