// Central Configuration for SME Portfolio & Lead Generation
export const SITE_CONFIG = {
  agencyName: "StudioSME",
  designerName: "Hasif",
  tagline: "High-Converting Websites for Local SMEs",
  role: "SME Digital Strategy & Web Specialist",
  location: "Kuala Lumpur & Selangor, Malaysia (Serving businesses nationwide)",
  
  // Contact details (fully configurable in one place)
  whatsappNumber: "+60123456789", // formatted with country code
  whatsappDisplay: "+60 12-345 6789",
  email: "hello@studiosme.my",
  calendlyUrl: "https://calendly.com",
  
  // Currency settings
  currency: "RM",
  
  // Default WhatsApp prefilled templates
  whatsappMessages: {
    general: "Hi Hasif, I saw your portfolio and I'm interested in getting a high-converting website for my business.",
    industrySpecific: (industry: string) => `Hi Hasif, I run a ${industry} business and I would like to discuss building a website for it.`,
    packageSpecific: (pkg: string) => `Hi Hasif, I'm interested in the ${pkg} package for my business website. Could we discuss the details?`,
    customQuote: (industry: string, features: string[]) => 
      `Hi Hasif, I would like an estimate for my ${industry} business. Key features needed: ${features.join(", ")}. Can we discuss?`,
  },
  
  // Default Email prefilled templates
  emailTemplate: {
    subject: "Website Enquiry for My Local Business",
    body: (businessName = "[Your Business Name]", businessType = "[e.g. Cafe, Clinic, Workshop]") => 
      `Hi Hasif,\n\nI'm interested in getting a professional website built for my business.\n\nBusiness Name: ${businessName}\nBusiness Type / Industry: ${businessType}\nCurrent Online Presence (Facebook/Instagram/None): \nPrimary Goal (e.g. more WhatsApp enquiries, online menu, bookings): \n\nLooking forward to hearing from you!`,
  }
};
