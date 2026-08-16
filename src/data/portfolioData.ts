import { StatisticItem, IndustryDemo, PortfolioProject, PricingPackage, FaqItem, ProcessStep } from '../types';

export const VERIFIED_STATISTICS: StatisticItem[] = [
  {
    id: 'stat-1',
    metric: '84%',
    headline: 'of consumers search for local businesses online',
    description: 'The vast majority of potential customers check Google or search online before visiting or calling a local service provider.',
    source: 'BrightLocal Local Consumer Review Survey',
    sourceUrl: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
    year: '2024',
    verified: true,
  },
  {
    id: 'stat-2',
    metric: '72.7%',
    headline: 'of Malaysian establishments maintain an active web presence',
    description: 'Malaysian business digitalization has surged, making an official website the standard baseline for credibility and discoverability.',
    source: 'Department of Statistics Malaysia (DOSM) ICT Report',
    sourceUrl: 'https://www.dosm.gov.my/',
    year: '2023',
    verified: true,
  },
  {
    id: 'stat-3',
    metric: '76%',
    headline: 'of local mobile searches visit a business within 24 hours',
    description: 'When people search on their phones for nearby services or dining, more than three out of four take physical action within a day.',
    source: 'Google / Ipsos Local Search Behavior Study',
    sourceUrl: 'https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-mobile-search-micro-moments/',
    year: 'Verified Research',
    verified: true,
  },
  {
    id: 'stat-4',
    metric: '50%+',
    headline: 'will switch to a competitor if your website is missing or outdated',
    description: 'Consumers equate a neglected or missing digital presence with poor service quality, driving them directly to competitors who look ready.',
    source: 'Clutch Small Business Online Presence Survey',
    sourceUrl: 'https://clutch.co/agencies/resources/small-business-websites-survey',
    year: '2023',
    verified: true,
  }
];

export const INDUSTRY_DEMOS: IndustryDemo[] = [
  {
    id: 'cafe',
    name: 'Café & Bakery',
    category: 'Food & Beverage',
    badge: 'Popular',
    iconName: 'Coffee',
    businessName: 'Kopi & Crust Artisan Bakehouse',
    heroHeadline: 'Handcrafted Sourdough & Specialty Brews, Fresh Every Morning.',
    heroSubheadline: 'Artisanal bakes, slow-roasted single origins, and a cozy neighborhood vibe in the heart of Bangsar.',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'View Today\'s Bakes & Menu',
    secondaryCtaText: 'Find Us on Google Maps',
    aboutSnippet: 'Founded in 2021, Kopi & Crust was built on a simple premise: honest, 36-hour fermented sourdough and ethically sourced beans.',
    hours: 'Mon – Sun: 7:30 AM – 7:00 PM',
    location: '28, Jalan Telawi 3, Bangsar, Kuala Lumpur',
    rating: '4.9',
    reviewCount: 384,
    featuredTestimonial: {
      author: 'Afiqah Rahim',
      text: 'Their sea salt chocolate croissant is unbeatable! I check their daily menu website every weekend before driving down.',
      role: 'Regular Customer'
    },
    keyPerks: ['Live Daily Menu Updates', 'Instant WhatsApp Reservation', 'Google Maps One-Click Navigation', 'Instagram Feed Sync'],
    services: [
      { name: 'Signature Almond Croissant', price: 'RM 12.00', description: 'Double baked with almond frangipane and toasted flakes', highlight: true },
      { name: 'Cold Brew Oat Latte', price: 'RM 14.50', description: '18-hour steep Ethiopian blend with Minor Figures oat milk' },
      { name: 'Truffle Scrambled Sourdough', price: 'RM 22.00', description: 'Cage-free eggs, black truffle oil, and chives on toasted sourdough' },
      { name: 'Pistachio Matcha Tart', price: 'RM 16.00', description: 'Uji matcha ganache with roasted pistachio crust' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Dining',
    category: 'Food & Beverage',
    badge: 'High Demand',
    iconName: 'Utensils',
    businessName: 'Bayan Rasa Malaysian Kitchen',
    heroHeadline: 'Authentic Heritage Recipes with a Contemporary Touch.',
    heroSubheadline: 'Slow-cooked rendang, charcoal-grilled satay, and festive feasts made for family gatherings in Petaling Jaya.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Reserve a Table',
    secondaryCtaText: 'Explore Dining Menu',
    aboutSnippet: 'Bayan Rasa brings together three generations of authentic secret family marinades with warm Malaysian hospitality.',
    hours: 'Tues – Sun: 11:30 AM – 10:30 PM (Closed Mondays)',
    location: '42, Jalan SS2/66, Petaling Jaya, Selangor',
    rating: '4.8',
    reviewCount: 520,
    featuredTestimonial: {
      author: 'Dato’ Lee K.S.',
      text: 'Celebrated our family anniversary here. The online menu made pre-ordering for 14 people effortless!',
      role: 'Family Diner'
    },
    keyPerks: ['Table Booking via WhatsApp', 'Dietary & Halal Filters', 'Event & Private Dining Enquiries', 'Full Digital Price Transparency'],
    services: [
      { name: 'Wagyu Beef Rendang Tok', price: 'RM 48.00', description: 'Slow-simmered for 8 hours in rich coconut milk and toasted kerisik', highlight: true },
      { name: 'Kajang Charcoal Satay Platter (12 pcs)', price: 'RM 32.00', description: 'Tender chicken and beef skewers with chunky spiced peanut gravy' },
      { name: 'Smoked Itik Salai Masak Lemak', price: 'RM 38.00', description: 'Smoked duck breast in turmeric birds-eye chilli coconut broth' },
      { name: 'Cempedak Crème Brûlée', price: 'RM 18.00', description: 'Silky custard infused with wild fresh cempedak puree' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'barber',
    name: 'Barbershop & Grooming',
    category: 'Personal Care',
    badge: 'Conversion Focused',
    iconName: 'Scissors',
    businessName: 'The Gentleman\'s Blade Studio',
    heroHeadline: 'Precision Fades, Traditional Hot Towel Shaves, Zero Rush.',
    heroSubheadline: 'A sanctuary for modern gentlemen. Master barbers, vintage leather chairs, and complimentary espresso.',
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Book Slot on WhatsApp',
    secondaryCtaText: 'View Services & Rates',
    aboutSnippet: 'No crowded walk-in lines. We respect your schedule with seamless appointments and tailored grooming consultations.',
    hours: 'Mon – Sat: 10:00 AM – 9:00 PM | Sun: 10:00 AM – 6:00 PM',
    location: '15-G, Jalan USJ 10/1E, Taipan Triangle, Subang Jaya',
    rating: '4.9',
    reviewCount: 412,
    featuredTestimonial: {
      author: 'Marcus Tan',
      text: 'Best fade in Subang. Booking via their website took 10 seconds and my barber was ready as soon as I walked in.',
      role: 'Client since 2022'
    },
    keyPerks: ['Barber Selection Option', 'Zero Walk-in Waiting Frustration', 'Clear Fixed Rates (No Upselling)', 'Photo Lookbook Gallery'],
    services: [
      { name: 'Signature Precision Cut & Wash', price: 'RM 45.00', description: 'Consultation, precision skin fade/scissor cut, tonic wash & styling', highlight: true },
      { name: 'Traditional Hot Towel Shave', price: 'RM 35.00', description: 'Pre-shave oil, hot steamed towels, straight razor glide & aftershave balm' },
      { name: 'The Executive Grooming Package', price: 'RM 70.00', description: 'Full haircut, beard trim, hot towel treatment and refreshing scalp massage' },
      { name: 'Beard Sculpt & Line-Up', price: 'RM 25.00', description: 'Precision razor edging, length balance and organic beard conditioning' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'workshop',
    name: 'Car Workshop & Tyres',
    category: 'Automotive Services',
    badge: 'Trust Builder',
    iconName: 'Wrench',
    businessName: 'Apex Auto Care & Diagnostics',
    heroHeadline: 'Transparent Car Maintenance Without the Guesswork.',
    heroSubheadline: 'Diagnostic computer scanning, genuine parts, scheduled servicing, and upfront itemized estimates before we touch your car.',
    heroImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Get a Service Quote',
    secondaryCtaText: 'Browse Service Packages',
    aboutSnippet: 'Tired of surprise bills and pushy mechanics? Apex Auto Care operates with 100% video inspection updates sent straight to your WhatsApp.',
    hours: 'Mon – Sat: 8:30 AM – 6:30 PM (Sun by appointment)',
    location: 'Lot 14, Jalan PJS 11/20, Bandar Sunway, Selangor',
    rating: '4.9',
    reviewCount: 689,
    featuredTestimonial: {
      author: 'Dr. Zarith Sofia',
      text: 'As a woman, visiting workshops used to be intimidating. Apex sent me a WhatsApp video explaining the brake pad wear before replacing. Trustworthy!',
      role: 'Continental Car Owner'
    },
    keyPerks: ['Video WhatsApp Updates', 'Transparent Price Sheets', 'Air-Conditioned Customer Lounge', 'Emergency Towing Hotline'],
    services: [
      { name: 'Scheduled Major Service (Fully Synthetic)', price: 'From RM 188.00', description: 'Liqui Moly / Motul oil, OEM filter replacement, 40-point safety check', highlight: true },
      { name: 'ECU Computer Diagnostics', price: 'RM 60.00', description: 'Advanced OBD-II system scan with error clearing & printout analysis' },
      { name: 'Aircond Deep Chemical Flush', price: 'RM 220.00', description: 'Gas refill, compressor oil replacement and cabin evaporator disinfection' },
      { name: 'Brake Disc Skimming & Pad Replacement', price: 'From RM 140.00', description: 'Restores pedal feel, stops squeaks, and eliminates steering wobble' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'clinic',
    name: 'Clinic & Dental Practice',
    category: 'Healthcare',
    badge: 'Credibility First',
    iconName: 'Stethoscope',
    businessName: 'Klinik Pergigian Aethel Dental',
    heroHeadline: 'Gentle, Modern Dental Care Designed for Anxiety-Free Smiles.',
    heroSubheadline: '3D digital imaging, pain-free laser technology, cosmetic clear aligners, and family dental checkups in a serene clinic environment.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Schedule Consultation',
    secondaryCtaText: 'View Treatments & Pricing',
    aboutSnippet: 'Led by certified dental surgeons with over 12 years of clinical excellence, Aethel Dental eliminates dental fear with transparent pricing and soothing care.',
    hours: 'Mon – Fri: 9:00 AM – 8:00 PM | Sat – Sun: 9:00 AM – 5:00 PM',
    location: 'Unit 3-1, Menara Kiara, Mont Kiara, Kuala Lumpur',
    rating: '5.0',
    reviewCount: 310,
    featuredTestimonial: {
      author: 'Nurul Huda',
      text: 'I used to dread root canals, but Dr. Tan was so gentle I barely felt the local anesthetic. Clear prices on their site with zero hidden fees.',
      role: 'Patient'
    },
    keyPerks: ['Kementerian Kesihatan Malaysia Registered', '0% Installment Plans Available', 'Online Slot Booking', 'Same-Day Emergency Relief'],
    services: [
      { name: 'Comprehensive Scaling & AirFlow Polishing', price: 'RM 130.00', description: 'Pain-free stain removal, ultrasonic tartar clearance and fluoride rinse', highlight: true },
      { name: 'Invisible Clear Aligners Consultation', price: 'Free Initial Scan', description: 'Digital 3D simulation of your smile transformation journey' },
      { name: 'In-Office Philips Zoom! Teeth Whitening', price: 'RM 950.00', description: 'Up to 8 shades whiter in a single 60-minute relaxing session' },
      { name: 'Wisdom Tooth Minor Oral Surgery', price: 'Claimable via Insurance', description: 'Low-trauma surgical extraction with painless sedation options' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'tuition',
    name: 'Tuition & Education Centre',
    category: 'Education',
    badge: 'Results Focused',
    iconName: 'GraduationCap',
    businessName: 'Pinnacle Academic Excellence Centre',
    heroHeadline: 'Building Deep Conceptual Mastery, Not Just Memorization.',
    heroSubheadline: 'SPM, IGCSE & UASA small-group masterclasses taught by award-winning educators. Average 2-grade improvement within 4 months.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Book Free Trial Class',
    secondaryCtaText: 'Download 2025 Timetable',
    aboutSnippet: 'With maximum 12 students per class and proprietary exam answering blueprints, Pinnacle Academy helps students master critical subjects with confidence.',
    hours: 'Mon – Fri: 3:00 PM – 10:00 PM | Sat – Sun: 8:30 AM – 7:00 PM',
    location: '12A, Jalan Puteri 1/4, Bandar Puteri Puchong, Selangor',
    rating: '4.9',
    reviewCount: 245,
    featuredTestimonial: {
      author: 'Mrs. Cynthia Wong',
      text: 'My son was struggling with SPM Add Maths (failing with 34%). After 5 months at Pinnacle, he scored an A- in his trial exam!',
      role: 'Parent of SPM Candidate'
    },
    keyPerks: ['Free 1-Hour Trial Lesson', 'Comprehensive Printed Study Modules', 'Weekly WhatsApp Progress Reports', 'Recorded Replay Access'],
    services: [
      { name: 'SPM Add Maths & Modern Maths Masterclass', price: 'RM 140 / mo', description: 'Focus on paper 2 problem-solving frameworks and past-year breakdowns', highlight: true },
      { name: 'IGCSE Physics & Chemistry Intensive', price: 'RM 160 / mo', description: 'Practical paper guidance, MCQ speed techniques and formula sheets' },
      { name: 'Bahasa Melayu & English Karangan Workshop', price: 'RM 130 / mo', description: 'Grammar structuring, high-scoring vocabulary and format mastery' },
      { name: '1-on-1 Personalized Mentorship', price: 'RM 85 / hour', description: 'Dedicated tutor tailored precisely to the student\'s weak topics' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'contractor',
    name: 'Renovation & Interior Contractor',
    category: 'Home & Construction',
    badge: 'High Value Deal',
    iconName: 'Hammer',
    businessName: 'SolidBuild Interior & Renovation',
    heroHeadline: 'Transforming Houses into Functional, Elegant Sanctuaries.',
    heroSubheadline: 'Full-service residential renovations, custom kitchen cabinetry, wet-works and tiling with guaranteed on-time handover contracts.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Request Free Site Quotation',
    secondaryCtaText: 'View Completed Portfolio',
    aboutSnippet: 'CIDB registered with over 180+ completed homes across Klang Valley. We eliminate hidden variation orders (VO) with fully itemized BOQs.',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    location: 'G-19, The Strand, Kota Damansara, Petaling Jaya',
    rating: '4.9',
    reviewCount: 168,
    featuredTestimonial: {
      author: 'Ir. Haikal & Farah',
      text: 'SolidBuild completed our 2-storey link house renovation 5 days ahead of schedule. The WhatsApp site photo log every evening gave us complete peace of mind.',
      role: 'Eco Ardence Homeowner'
    },
    keyPerks: ['CIDB Registered Contractor', '12-Month Workmanship Warranty', 'Zero Hidden Variation Orders', '3D Photorealistic Renderings'],
    services: [
      { name: 'Complete Kitchen Extension & Cabinetry', price: 'From RM 28,000', description: 'Quartz stone countertops, 4G glass panels, plumbing & exhaust works', highlight: true },
      { name: 'Full Bathroom Remodel & Waterproofing', price: 'From RM 8,500', description: '3-layer Sika waterproofing, porcelain tiles, concealed piping & fixtures' },
      { name: 'Plaster Ceiling & Smart LED Ambient Lighting', price: 'From RM 3,800', description: 'Cove lighting, curtain pelmets and aesthetic drop-ceiling profiles' },
      { name: 'Whole-House Vinyl / SPC Flooring', price: 'RM 6.50 / sqft', description: '100% waterproof 5mm SPC click-lock with IXPE soundproof backing' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'salon',
    name: 'Hair & Beauty Salon',
    category: 'Personal Care',
    badge: 'Aesthetic',
    iconName: 'Sparkles',
    businessName: 'Luxe Hair Atelier & Spa',
    heroHeadline: 'Balayage, Keratin Treatments & Japanese Scalp Rituals.',
    heroSubheadline: 'Certified colorists using organic ammonia-free formulas. Look radiant with bespoke hair artistry tailored to your lifestyle.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Book Stylist via WhatsApp',
    secondaryCtaText: 'Browse Hair Transformations',
    aboutSnippet: 'Located in Plaza Damas, Luxe Hair Atelier pairs luxury Japanese organic treatments with internationally trained senior colorists.',
    hours: 'Tues – Sun: 10:30 AM – 8:00 PM (Closed Mondays)',
    location: 'Block C-12, Plaza Damas, Sri Hartamas, Kuala Lumpur',
    rating: '4.9',
    reviewCount: 376,
    featuredTestimonial: {
      author: 'Cheryl S.',
      text: 'My balayage looks phenomenal! They checked my hair porosity first and recommended the right toner. Best salon experience in KL.',
      role: 'Client'
    },
    keyPerks: ['Free Hair & Scalp Consultation', '100% Ammonia-Free Colorants', 'Private Muslimah Section Available', 'Complimentary Scalp Refresh Tonic'],
    services: [
      { name: 'Custom Dimensional Balayage & Olaplex', price: 'RM 380 – RM 580', description: 'Seamless hand-painted highlights with bond-building restorative treatment', highlight: true },
      { name: 'Japanese Head Spa & Micro-Mist Therapy', price: 'RM 180.00', description: 'Deep sebum cleansing, scalp acupuncture massage, and herbal steam' },
      { name: 'Brazilian Keratin Anti-Frizz Smoothing', price: 'From RM 290.00', description: 'Tames unruly humidity curls for up to 4 months of silky shine' },
      { name: 'Creative Designer Cut & Style', price: 'RM 85.00', description: 'Wash, blow-dry styling, and face-framing structural cut' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness Gym & Martial Arts',
    category: 'Health & Wellness',
    badge: 'High Energy',
    iconName: 'Dumbbell',
    businessName: 'Forge Athletics & Muay Thai Club',
    heroHeadline: 'Forge Your Strength. Build Unstoppable Stamina.',
    heroSubheadline: 'Functional bodybuilding, authentic Thai boxing, HIIT conditioning, and supportive community coaching for beginners to competitors.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Claim 1-Day Free Pass',
    secondaryCtaText: 'View Class Schedule',
    aboutSnippet: 'No intimidating egos, no overcrowded equipment. Forge Athletics is dedicated to functional strength, body recomposition, and real athletic habits.',
    hours: 'Mon – Fri: 6:30 AM – 10:00 PM | Sat – Sun: 8:00 AM – 8:00 PM',
    location: '18, Jalan 13/2, Section 13, Petaling Jaya',
    rating: '4.9',
    reviewCount: 298,
    featuredTestimonial: {
      author: 'Rajesh Nair',
      text: 'Down 14kg in 6 months! The coaches actually correct your form every set. Joining Forge was the best decision of my year.',
      role: 'Member'
    },
    keyPerks: ['Free 1-Day Trial Access', 'Certified Strength & Conditioning Coaches', 'Capped Class Sizes (No Crowding)', 'Complimentary InBody Body Composition Scan'],
    services: [
      { name: 'Unlimited Monthly All-Access Gym & HIIT', price: 'RM 169 / mo', description: 'Full access to free weights, rogue racks, turf zone and all daily HIIT classes', highlight: true },
      { name: 'Authentic Muay Thai Striking & Padwork', price: 'RM 210 / mo', description: 'Technique, heavy bag combos, sparring drills and conditioning' },
      { name: '10-Session Personal Training Jumpstart', price: 'RM 1,200', description: 'Custom nutritional plan, lifting form mastery, and progressive overload tracking' },
      { name: 'Student / Off-Peak Access Pass', price: 'RM 129 / mo', description: 'Valid 10:00 AM to 4:00 PM weekdays for budget-conscious fitness enthusiasts' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'homeservices',
    name: 'Aircond & Home Services',
    category: 'Home Services',
    badge: 'Everyday Essential',
    iconName: 'Fan',
    businessName: 'CoolPro Aircond & Electrical Services',
    heroHeadline: 'Ice Cold Air. Zero Mess. 60-Day Leak Warranty.',
    heroSubheadline: 'Reliable chemical overhaul, refrigerant top-up, installation, and electrical troubleshooting across Klang Valley with punctual technicians.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'WhatsApp for Fast Slot',
    secondaryCtaText: 'Check Service Rates',
    aboutSnippet: 'We arrive on time, use heavy-duty floor drop cloths to protect your furniture, and back all chemical services with a 60-day written guarantee.',
    hours: 'Mon – Sun: 8:00 AM – 7:30 PM (Emergency slots available)',
    location: 'Coverage: KL, PJ, Subang, Shah Alam, Puchong, Cyberjaya',
    rating: '4.9',
    reviewCount: 540,
    featuredTestimonial: {
      author: 'Kenny Chong',
      text: 'Booked on WhatsApp at 9 PM on Sunday, technician arrived 9:30 AM Monday. Aircond went from blowing lukewarm air to freezing cold. Super polite team.',
      role: 'Condominium Owner'
    },
    keyPerks: ['60-Day Workmanship Guarantee', 'Floor & Wall Protective Coverings', 'Transparent Fixed Price List', 'Same-Day Dispatch for Urgent Leaks'],
    services: [
      { name: 'Full Chemical Dismantle Overhaul (1.0 – 1.5 HP)', price: 'RM 120.00', description: 'Coil chemical wash, blower wheel scrub, drain pipe vacuum & free R410A gas top-up', highlight: true },
      { name: 'Standard General Servicing (Water Clean)', price: 'RM 60.00', description: 'Filter wash, casing scrub, test run amp check and basic drain clearing' },
      { name: 'Inverter Aircond Supply & Pro Installation', price: 'From RM 1,299', description: 'Daikin / Panasonic 5-star inverter with premium 0.61mm copper piping' },
      { name: 'Whole-House Distribution Board (DB) Check', price: 'RM 150.00', description: 'RCCB trip troubleshooting, grounding test and circuit breaker upgrades' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Properties',
    category: 'Professional Services',
    badge: 'High Value',
    iconName: 'Building',
    businessName: 'Prime Living Luxury Properties',
    heroHeadline: 'Curated Homes & High-Yield Investments in Prime Locations.',
    heroSubheadline: 'Bangsar, Mont Kiara & KLCC residential specialist. Virtual tours, floor plans, and bank mortgage feasibility evaluations.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Schedule Private Viewing',
    secondaryCtaText: 'View Available Listings',
    aboutSnippet: 'With over RM 85M in closed transactions, Prime Living helps families find their forever home and investors maximize rental yields with zero hassle.',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    location: 'Solaris Dutamas, Mont Kiara, Kuala Lumpur',
    rating: '5.0',
    reviewCount: 112,
    featuredTestimonial: {
      author: 'Datin Seri Melissa',
      text: 'The digital property brochure with video walkthrough made screening units effortless before flying back to KL. Exceptional service.',
      role: 'Property Buyer'
    },
    keyPerks: ['Free Valuation & Market Comparables', 'Bank Loan Pre-Approval Assistance', '360° Virtual Tour Hosting', 'VIP Tenant Screening'],
    services: [
      { name: 'Exclusive Seller Marketing Package', price: 'Standard Agency Fee', description: 'Professional staging photography, digital brochure, Google/FB ad targeting', highlight: true },
      { name: 'Buyer Home Search & Negotiation Service', price: 'Free for Buyers', description: 'Curated shortlisted viewings, title checking and SPA legal coordination' },
      { name: 'Expat Tenancy & Rental Asset Management', price: 'Bespoke', description: 'Inventory handover, monthly rent collection and maintenance coordination' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
    ]
  },
  {
    id: 'photography',
    name: 'Wedding & Studio Photography',
    category: 'Creative Services',
    badge: 'Portfolio Centric',
    iconName: 'Camera',
    businessName: 'Noor Moments Wedding Studio',
    heroHeadline: 'Capturing Raw Emotion, Timeless Elegance & Real Stories.',
    heroSubheadline: 'Cinematic wedding photography, pre-wedding destination shoots, and heirloom albums tailored for modern couples across Malaysia.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    primaryCtaText: 'Check Date Availability',
    secondaryCtaText: 'Explore Wedding Stories',
    aboutSnippet: 'We believe real photography isn’t about stiff poses—it’s about preserving the joyful tears, quiet glances, and electric celebrations.',
    hours: 'Consultations by appointment (Wed – Sun)',
    location: 'Studio 7, Tamarind Square, Cyberjaya',
    rating: '5.0',
    reviewCount: 194,
    featuredTestimonial: {
      author: 'Danial & Sarah',
      text: 'Looking through our wedding album still brings tears to our eyes. Their online gallery made sharing photos with relatives in Australia instantaneous!',
      role: 'Bride & Groom'
    },
    keyPerks: ['Private Online Client Proofing Gallery', 'High-Res Edited Downloads (No Watermarks)', 'Archival Fine-Art Print Albums', 'Drone Aerial Cinematography Option'],
    services: [
      { name: 'Full-Day Wedding Story (Akad + Sanding)', price: 'RM 3,800', description: '2 Senior photographers, 10 hours coverage, 450+ edited high-res photos, 12x12 luxury album', highlight: true },
      { name: 'Pre-Wedding / Engagement Outdoor Shoot', price: 'RM 1,800', description: '4-hour session, 2 locations, styling consultation, 40 color-graded portraits' },
      { name: 'Cinematic 4K Wedding Highlight Film', price: 'RM 2,500', description: '3-5 minute emotional highlight film with licensed score + full ceremony speeches cut' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=600&auto=format&fit=crop',
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'kopi-co',
    title: 'Kopi & Co. Cafe & Roastery',
    category: 'Food & Beverage',
    industry: 'Specialty Coffee & Cafe',
    isConcept: true,
    tagline: 'Turning weekend Instagram searchers into packed Sunday morning tables.',
    objective: 'Solve the problem of customers asking for the menu and location repeatedly on WhatsApp/Instagram DMs by creating an intuitive digital storefront.',
    keyFeatures: ['Interactive digital menu with dietary tags', 'Direct Google Maps / Waze 1-tap navigation', 'Live daily bake availability indicator', 'One-click WhatsApp table reservation'],
    resultsFocus: 'Eliminated manual menu PDF sending and increased table reservation clarity.',
    desktopImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop',
    accentColor: '#d97706',
    liveDemoId: 'cafe'
  },
  {
    id: 'apex-auto',
    title: 'Apex Auto Care & Tyres',
    category: 'Automotive',
    industry: 'Car Workshop & Diagnostics',
    isConcept: true,
    tagline: 'Replacing workshop distrust with transparent pricing and instant booking.',
    objective: 'Create a website that overcomes the classic consumer fear of mechanic overcharging with transparent service tiers and customer video inspection proof.',
    keyFeatures: ['Service package cost estimator', 'Direct WhatsApp appointment booker with car model picker', 'Customer video assurance guarantee badge', 'Waze & Google Maps shop locator'],
    resultsFocus: 'Positioned the workshop as modern and transparent, attracting higher-end continental car owners.',
    desktopImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop',
    accentColor: '#ef4444',
    liveDemoId: 'workshop'
  },
  {
    id: 'gentlemans-cut',
    title: 'The Gentleman\'s Blade Studio',
    category: 'Personal Care',
    industry: 'Premium Barbershop',
    isConcept: true,
    tagline: 'A grooming website as sharp and refined as the razor cut.',
    objective: 'Stop wasted walk-in queue drop-offs by establishing an organized time-slot booking flow with stylist portfolios and transparent rates.',
    keyFeatures: ['Interactive barber selection with haircut portfolios', 'One-tap WhatsApp slot reservation', 'Customer reviews showcase with Google ratings', 'Integrated price cards with zero hidden charges'],
    resultsFocus: 'Smooth scheduling with higher appointment show-up rates.',
    desktopImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop',
    accentColor: '#10b981',
    liveDemoId: 'barber'
  },
  {
    id: 'aethel-dental',
    title: 'Aethel Dental & Aesthetic Clinic',
    category: 'Healthcare',
    industry: 'Dental & Medical Practice',
    isConcept: true,
    tagline: 'Calming dental anxiety through warm digital aesthetics and clear treatment costs.',
    objective: 'Transform a clinical healthcare practice into a warm, approachable brand that invites patients to book consultations without intimidation.',
    keyFeatures: ['Before & after smile transformation slider', 'Doctor profiles & KKM certification badges', 'Treatment fee range transparency with 0% installment info', 'WhatsApp concierge booking assistant'],
    resultsFocus: 'Increased patient trust for cosmetic clear aligners and veneer inquiries.',
    desktopImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    accentColor: '#06b6d4',
    liveDemoId: 'clinic'
  },
  {
    id: 'solidbuild-renovation',
    title: 'SolidBuild Interior & Renovation',
    category: 'Home & Renovation',
    industry: 'Residential Contractor',
    isConcept: true,
    tagline: 'Proving contractor credibility and workmanship before the client even calls.',
    objective: 'High-ticket home renovations require massive trust. The site proves contractor legitimacy via CIDB credentials, real job-site galleries, and sample BOQs.',
    keyFeatures: ['Completed project case study galleries by home type', 'CIDB accreditation & 12-month warranty highlights', 'Instant site inspection WhatsApp booking', 'Interactive cost calculator by square footage'],
    resultsFocus: 'Helped filter serious homeowners looking for quality work rather than lowball price-shoppers.',
    desktopImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    accentColor: '#f59e0b',
    liveDemoId: 'contractor'
  },
  {
    id: 'pinnacle-tuition',
    title: 'Pinnacle Academic Centre',
    category: 'Education',
    industry: 'Tuition & Learning Centre',
    isConcept: true,
    tagline: 'Converting concerned parents into trial class enrolments with proven exam results.',
    objective: 'Parents want proof of improvement. The website showcases real parent testimonials, exam grade jumps, tutor credentials, and downloadable timetables.',
    keyFeatures: ['Downloadable PDF timetable & syllabus roadmap', 'Free trial class enrolment form', 'Tutor credentials & subject specializations', 'Parent review quotes with verified student milestones'],
    resultsFocus: 'Surged student trial class sign-ups ahead of the new school term.',
    desktopImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
    accentColor: '#6366f1',
    liveDemoId: 'tuition'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Business Presence',
    tagline: 'Ideal for local businesses that need a clean, credible digital storefront fast.',
    priceDisplay: 'RM 1,800 – RM 2,500',
    timeline: '7 – 10 Days Handover',
    idealFor: 'Cafes, barbers, solo clinics, tuition tutors, boutique salons',
    deliverables: [
      'Single-page high-converting digital storefront layout',
      'Mobile-first responsive design for iPhone & Android',
      'Direct WhatsApp click-to-chat integration with custom message',
      'Google Maps & Waze location embed with 1-tap navigation',
      'Services / Menu list with transparent pricing display',
      'Opening hours, contact details, and social links',
      'Basic on-page Google Search (SEO) setup',
      'Full deployment, domain setup assistance & 30-day support'
    ],
    featuresIncluded: [
      'Mobile & Desktop Responsive',
      'WhatsApp Quick Chat',
      'Google Map Embed',
      'Service/Menu Pricing List',
      'SSL Security & Fast Hosting Setup',
      '30 Days Free Support'
    ],
    ctaText: 'Enquire About Starter'
  },
  {
    id: 'growth',
    name: 'Growth & Customer Acquisition',
    popular: true,
    tagline: 'For established businesses looking to outperform local competitors and capture serious leads.',
    priceDisplay: 'RM 3,200 – RM 4,800',
    timeline: '10 – 14 Days Handover',
    idealFor: 'Restaurants, workshops, dental clinics, contractors, fitness gyms, service firms',
    deliverables: [
      'Multi-section conversion-optimized website (Up to 5 distinct sections/pages)',
      'Custom interactive features (Digital Menu filter, Service Booking, or Price Estimator)',
      'Customer reviews & social proof showcase with Google Star rating integration',
      'Before & After transformation / photo gallery showcase',
      'Structured enquiry capture form sent directly to WhatsApp & Email',
      'Advanced Local SEO optimization (Google Business Profile readiness, schema metadata)',
      'Speed optimization (Loads in under 1.5 seconds on 4G mobile)',
      'Custom copywriting guidance & 60-day post-launch support'
    ],
    featuresIncluded: [
      'Everything in Starter',
      'Interactive Features (Menu/Booking/Calculator)',
      'Social Proof & Review Wall',
      'Photo Portfolio / Gallery',
      'Advanced Local SEO & Speed Tuning',
      'Copywriting & Content Structuring',
      '60 Days Free Support & Minor Updates'
    ],
    ctaText: 'Enquire About Growth'
  },
  {
    id: 'premium',
    name: 'Bespoke Premium Asset',
    tagline: 'For high-ticket service providers and multi-branch brands wanting an unmatched digital edge.',
    priceDisplay: 'RM 5,500 – RM 8,500',
    timeline: '14 – 21 Days Handover',
    idealFor: 'Luxury contractors, real estate agencies, multi-clinic chains, high-end wedding studios',
    deliverables: [
      'Complete bespoke web architecture tailored to your brand identity',
      'Interactive custom tools (e.g. quote builders, branch selectors, multi-step booking)',
      'Multi-language capability (e.g. English, Bahasa Melayu, Chinese)',
      'High-end animations & interactive micro-interactions',
      'Content management system (CMS) integration for easy self-updates if needed',
      'Full analytics dashboard setup (Google Analytics 4, Meta Pixel)',
      'Priority turnaround & 90-day comprehensive support warranty'
    ],
    featuresIncluded: [
      'Everything in Growth',
      'Multi-language Support',
      'Custom Quote Calculator / Flow',
      'CMS for Self-Editing Content',
      'Analytics & Pixel Tracking Setup',
      'Multi-branch / Multi-location Support',
      '90 Days Priority Support & Training'
    ],
    ctaText: 'Discuss Premium Project'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell Me About Your Business',
    duration: '20-Min WhatsApp or Call',
    description: 'We discuss what services you offer, who your ideal customers are, and the exact information your customers ask for daily.',
    deliverable: 'Clarity on website goals and content requirements',
    iconName: 'MessageSquare'
  },
  {
    step: '02',
    title: 'I Plan the Website Blueprint',
    duration: '2 – 3 Days',
    description: 'I structure the layout, write high-converting copy, and organize your services, pricing, and contact pathways for maximum conversion.',
    deliverable: 'Clear visual wireframe & content outline',
    iconName: 'FileText'
  },
  {
    step: '03',
    title: 'You Review the Live Design',
    duration: '1 – 2 Days',
    description: 'You get a private live link to test on your phone and laptop. We adjust colors, text, images, or pricing until you are 100% proud of it.',
    deliverable: 'Interactive staging prototype ready for feedback',
    iconName: 'Eye'
  },
  {
    step: '04',
    title: 'I Build, Speed-Tune & Connect WhatsApp',
    duration: '3 – 5 Days',
    description: 'I build the clean code, test every button, optimize mobile loading speed, embed Google Maps, and configure your prefilled WhatsApp links.',
    deliverable: 'Polished, ultra-fast production website',
    iconName: 'Code'
  },
  {
    step: '05',
    title: 'Launch & Start Getting Enquiries',
    duration: 'Launch Day',
    description: 'We connect your domain (e.g. yourbusiness.com.my) and launch. I provide a simple guide so you know how to share and monitor results.',
    deliverable: 'Live website ready to turn visitors into enquiries',
    iconName: 'Rocket'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I really need a website if I already have an Instagram / Facebook page?',
    category: 'general',
    answer: 'Social media is great for occasional posting, but it is terrible for answering basic customer questions quickly. When someone searches on Google for a service nearby, your Instagram profile rarely shows up, and customers have to scroll through dozens of posts just to find your address, opening hours, or price list. A website gives your business one permanent, professional home that appears on search engines and lets a customer understand what you do in under 15 seconds.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take from start to finish?',
    category: 'process',
    answer: 'Most SME websites take between 7 to 14 days from our initial conversation to live launch. Because we use a focused, step-by-step process, you won’t have to waste weeks in endless back-and-forth meetings.',
  },
  {
    id: 'faq-3',
    question: 'How do customers contact me from the website?',
    category: 'results',
    answer: 'In Malaysia and Southeast Asia, WhatsApp is king. Every website I build includes prominent, beautifully positioned WhatsApp buttons with prefilled messages (e.g., "Hi, I\'d like to book an appointment for tomorrow"). When a customer taps the button on their phone, it instantly opens WhatsApp with the message already written for them.',
  },
  {
    id: 'faq-4',
    question: 'Will the website work smoothly on mobile phones?',
    category: 'technical',
    answer: '100% yes. Over 80% of local searches happen on mobile devices. Every website is designed mobile-first from the ground up, ensuring fast loading on 4G connections, large touch-friendly buttons, and seamless navigation.',
  },
  {
    id: 'faq-5',
    question: 'Can you help me with domain name (.com / .my) and hosting?',
    category: 'technical',
    answer: 'Yes! I handle the technical setup from start to finish. I will guide you on purchasing your official domain (e.g. yourbusiness.com or .com.my) and setting up ultra-fast, secure cloud hosting with SSL encryption (the green padlock).',
  },
  {
    id: 'faq-6',
    question: 'Can you redesign my existing outdated website?',
    category: 'general',
    answer: 'Absolutely. Many businesses have a website built 5–10 years ago that is slow, hard to read on phones, or doesn’t reflect their current quality. We can modernize the entire look, improve loading speed, and rebuild it around customer acquisition.',
  },
  {
    id: 'faq-7',
    question: 'Can I update prices, photos, or menu items later?',
    category: 'process',
    answer: 'Yes. Depending on your preference, I can either provide a user-friendly system where you can update items yourself, or you can utilize our post-launch support package where you simply message me on WhatsApp whenever you need a price or photo updated.',
  },
  {
    id: 'faq-8',
    question: 'Can you add Google Maps and Waze navigation?',
    category: 'technical',
    answer: 'Yes. Every local business website includes an interactive Google Maps embed plus direct one-tap "Navigate in Waze" and "Open in Google Maps" buttons so customers can drive straight to your doorstep without typing your address.',
  },
  {
    id: 'faq-9',
    question: 'Will my website appear on Google Search?',
    category: 'results',
    answer: 'Yes. Every website is built with clean semantic HTML, fast loading speeds, localized metadata tags, and OpenGraph social preview tags so Google can easily index your business for local searches.',
  },
  {
    id: 'faq-10',
    question: 'What do I need to prepare before we start?',
    category: 'process',
    answer: 'Very little! Just your business logo (if you have one), a list of your core services and prices, photos of your shop/work (even phone photos can be curated), and your operating hours. If you don’t have professional photos, I can help source high-quality royalty-free imagery that fits your industry perfectly.',
  },
  {
    id: 'faq-11',
    question: 'Do you offer a warranty or support after launching?',
    category: 'results',
    answer: 'Yes. Every project includes a 30 to 90-day comprehensive support warranty. If anything breaks, if you notice a typo, or if you need help understanding visitor enquiries, I am directly reachable via WhatsApp.',
  },
  {
    id: 'faq-12',
    question: 'Why choose you instead of cheap template builders or expensive agencies?',
    category: 'general',
    answer: 'DIY page builders take dozens of hours of your valuable time and usually end up looking clunky and slow. Large design agencies charge RM 15,000+ with layers of account managers and months of delays. Working with me gives you direct personal attention from someone who understands local business conversion, delivers in days, and charges transparent, honest rates.',
  }
];
