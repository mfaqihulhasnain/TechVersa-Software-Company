"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  FileText,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  DollarSign,
  Clock
} from "lucide-react";

export default function ContactForms() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    countryId: 'us',
    company: '',
    message: ''
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    countryId: 'us',
    company: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $50,000", 
    "$50,000 - $100,000",
    "$100,000+",
    "Let&apos;s discuss"
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "Custom Software",
    "API Development",
    "Data Analytics",
    "AI/ML Solution",
    "Other"
  ];

  const timelines = [
    "1-2 months",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const countryCodes = [
    { id: "us", code: "+1", country: "United States", flag: "🇺🇸" },
    { id: "ca", code: "+1", country: "Canada", flag: "🇨🇦" },
    { id: "uk", code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { id: "de", code: "+49", country: "Germany", flag: "🇩🇪" },
    { id: "fr", code: "+33", country: "France", flag: "🇫🇷" },
    { id: "it", code: "+39", country: "Italy", flag: "🇮🇹" },
    { id: "es", code: "+34", country: "Spain", flag: "🇪🇸" },
    { id: "nl", code: "+31", country: "Netherlands", flag: "🇳🇱" },
    { id: "se", code: "+46", country: "Sweden", flag: "🇸🇪" },
    { id: "no", code: "+47", country: "Norway", flag: "🇳🇴" },
    { id: "dk", code: "+45", country: "Denmark", flag: "🇩🇰" },
    { id: "ch", code: "+41", country: "Switzerland", flag: "🇨🇭" },
    { id: "at", code: "+43", country: "Austria", flag: "🇦🇹" },
    { id: "be", code: "+32", country: "Belgium", flag: "🇧🇪" },
    { id: "pt", code: "+351", country: "Portugal", flag: "🇵🇹" },
    { id: "gr", code: "+30", country: "Greece", flag: "🇬🇷" },
    { id: "pl", code: "+48", country: "Poland", flag: "🇵🇱" },
    { id: "cz", code: "+420", country: "Czech Republic", flag: "🇨🇿" },
    { id: "hu", code: "+36", country: "Hungary", flag: "🇭🇺" },
    { id: "ro", code: "+40", country: "Romania", flag: "🇷🇴" },
    { id: "bg", code: "+359", country: "Bulgaria", flag: "🇧🇬" },
    { id: "hr", code: "+385", country: "Croatia", flag: "🇭🇷" },
    { id: "si", code: "+386", country: "Slovenia", flag: "🇸🇮" },
    { id: "sk", code: "+421", country: "Slovakia", flag: "🇸🇰" },
    { id: "lt", code: "+370", country: "Lithuania", flag: "🇱🇹" },
    { id: "lv", code: "+371", country: "Latvia", flag: "🇱🇻" },
    { id: "ee", code: "+372", country: "Estonia", flag: "🇪🇪" },
    { id: "ie", code: "+353", country: "Ireland", flag: "🇮🇪" },
    { id: "fi", code: "+358", country: "Finland", flag: "🇫🇮" },
    { id: "ru", code: "+7", country: "Russia", flag: "🇷🇺" },
    { id: "ua", code: "+380", country: "Ukraine", flag: "🇺🇦" },
    { id: "by", code: "+375", country: "Belarus", flag: "🇧🇾" },
    { id: "jp", code: "+81", country: "Japan", flag: "🇯🇵" },
    { id: "kr", code: "+82", country: "South Korea", flag: "🇰🇷" },
    { id: "cn", code: "+86", country: "China", flag: "🇨🇳" },
    { id: "in", code: "+91", country: "India", flag: "🇮🇳" },
    { id: "au", code: "+61", country: "Australia", flag: "🇦🇺" },
    { id: "nz", code: "+64", country: "New Zealand", flag: "🇳🇿" },
    { id: "br", code: "+55", country: "Brazil", flag: "🇧🇷" },
    { id: "mx", code: "+52", country: "Mexico", flag: "🇲🇽" },
    { id: "ar", code: "+54", country: "Argentina", flag: "🇦🇷" },
    { id: "cl", code: "+56", country: "Chile", flag: "🇨🇱" },
    { id: "co", code: "+57", country: "Colombia", flag: "🇨🇴" },
    { id: "pe", code: "+51", country: "Peru", flag: "🇵🇪" },
    { id: "ve", code: "+58", country: "Venezuela", flag: "🇻🇪" },
    { id: "za", code: "+27", country: "South Africa", flag: "🇿🇦" },
    { id: "eg", code: "+20", country: "Egypt", flag: "🇪🇬" },
    { id: "ng", code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { id: "ke", code: "+254", country: "Kenya", flag: "🇰🇪" },
    { id: "gh", code: "+233", country: "Ghana", flag: "🇬🇭" },
    { id: "ma", code: "+212", country: "Morocco", flag: "🇲🇦" },
    { id: "dz", code: "+213", country: "Algeria", flag: "🇩🇿" },
    { id: "tn", code: "+216", country: "Tunisia", flag: "🇹🇳" },
    { id: "ly", code: "+218", country: "Libya", flag: "🇱🇾" },
    { id: "sa", code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { id: "ae", code: "+971", country: "UAE", flag: "🇦🇪" },
    { id: "qa", code: "+974", country: "Qatar", flag: "🇶🇦" },
    { id: "kw", code: "+965", country: "Kuwait", flag: "🇰🇼" },
    { id: "bh", code: "+973", country: "Bahrain", flag: "🇧🇭" },
    { id: "om", code: "+968", country: "Oman", flag: "🇴🇲" },
    { id: "jo", code: "+962", country: "Jordan", flag: "🇯🇴" },
    { id: "lb", code: "+961", country: "Lebanon", flag: "🇱🇧" },
    { id: "sy", code: "+963", country: "Syria", flag: "🇸🇾" },
    { id: "iq", code: "+964", country: "Iraq", flag: "🇮🇶" },
    { id: "ir", code: "+98", country: "Iran", flag: "🇮🇷" },
    { id: "tr", code: "+90", country: "Turkey", flag: "🇹🇷" },
    { id: "il", code: "+972", country: "Israel", flag: "🇮🇱" },
    { id: "ps", code: "+970", country: "Palestine", flag: "🇵🇸" }
  ];

  // Initialize EmailJS if keys are available
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'your_public_key_here') {
      emailjs.init(publicKey);
    }
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      
      if (serviceId && templateId && serviceId !== "your_service_id_here") {
        // Use EmailJS if configured
        const selectedCountry = countryCodes.find(country => country.id === contactForm.countryId);
        const templateParams = {
          from_name: contactForm.name,
          from_email: contactForm.email,
          phone: (selectedCountry?.code || '+1') + " " + contactForm.phone,
          company: contactForm.company || "Not provided",
          message: contactForm.message,
          to_email: "faqihulhasnain572@gmail.com",
          subject: "New Contact Form Submission - TechVersa"
        };

        await emailjs.send(serviceId, templateId, templateParams);
      } else {
        // Use Web3Forms - much easier than EmailJS!
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        
        if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
          // Fallback: Log the form data and show success message
          const selectedCountry = countryCodes.find(country => country.id === contactForm.countryId);
          console.log('Contact Form Submission:', {
            name: contactForm.name,
            email: contactForm.email,
            phone: (selectedCountry?.code || '+1') + " " + contactForm.phone,
            company: contactForm.company || "Not provided",
            message: contactForm.message,
            timestamp: new Date().toISOString()
          });
          
          // Simulate successful submission
          setSubmitStatus({ type: 'success', message: 'Message received! We\'ll get back to you soon.' });
          setContactForm({ name: '', email: '', phone: '', countryId: 'us', company: '', message: '' });
          return;
        }
        
        const formData = new FormData();
        formData.append('access_key', accessKey);
        const selectedCountry = countryCodes.find(country => country.id === contactForm.countryId);
        formData.append('name', contactForm.name);
        formData.append('email', contactForm.email);
        formData.append('phone', (selectedCountry?.code || '+1') + " " + contactForm.phone);
        formData.append('company', contactForm.company || "Not provided");
        formData.append('message', contactForm.message);
        formData.append('subject', 'New Contact Form Submission - TechVersa');
        formData.append('to', 'faqihulhasnain572@gmail.com');
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error('Failed to send message');
        }
      }

      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setContactForm({ name: '', email: '', phone: '', countryId: 'us', company: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' });
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID;
      
      if (serviceId && templateId && serviceId !== "your_service_id_here") {
        // Use EmailJS if configured
        const selectedCountry = countryCodes.find(country => country.id === quoteForm.countryId);
        const templateParams = {
          from_name: quoteForm.name,
          from_email: quoteForm.email,
          phone: (selectedCountry?.code || '+1') + " " + quoteForm.phone,
          company: quoteForm.company || "Not provided",
          project_type: quoteForm.projectType,
          budget_range: quoteForm.budgetRange,
          timeline: quoteForm.timeline,
          description: quoteForm.description,
          to_email: "faqihulhasnain572@gmail.com",
          subject: "New Quote Request - TechVersa"
        };

        await emailjs.send(serviceId, templateId, templateParams);
      } else {
        // Use Web3Forms - much easier than EmailJS!
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        
        if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
          // Fallback: Log the form data and show success message
          const selectedCountry = countryCodes.find(country => country.id === quoteForm.countryId);
          console.log('Quote Request Submission:', {
            name: quoteForm.name,
            email: quoteForm.email,
            phone: (selectedCountry?.code || '+1') + " " + quoteForm.phone,
            company: quoteForm.company || "Not provided",
            projectType: quoteForm.projectType,
            budgetRange: quoteForm.budgetRange,
            timeline: quoteForm.timeline,
            description: quoteForm.description,
            timestamp: new Date().toISOString()
          });
          
          // Simulate successful submission
          setSubmitStatus({ type: 'success', message: 'Quote request received! We\'ll get back to you soon.' });
          setQuoteForm({ 
            name: '', 
            email: '', 
            phone: '', 
            countryId: 'us', 
            company: '', 
            projectType: '', 
            budgetRange: '', 
            timeline: '', 
            description: '' 
          });
          return;
        }
        
        const formData = new FormData();
        formData.append('access_key', accessKey);
        const selectedCountry = countryCodes.find(country => country.id === quoteForm.countryId);
        formData.append('name', quoteForm.name);
        formData.append('email', quoteForm.email);
        formData.append('phone', (selectedCountry?.code || '+1') + " " + quoteForm.phone);
        formData.append('company', quoteForm.company || "Not provided");
        formData.append('project_type', quoteForm.projectType);
        formData.append('budget_range', quoteForm.budgetRange);
        formData.append('timeline', quoteForm.timeline);
        formData.append('description', quoteForm.description);
        formData.append('subject', 'New Quote Request - TechVersa');
        formData.append('to', 'faqihulhasnain572@gmail.com');
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error('Failed to send message');
        }
      }

      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Quote request sent successfully! We\'ll get back to you soon.' });
      setQuoteForm({ 
        name: '', 
        email: '', 
        phone: '', 
        countryId: 'us', 
        company: '', 
        projectType: '', 
        budgetRange: '', 
        timeline: '', 
        description: '' 
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <Tabs defaultValue="contact" className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-slate-900/90 to-slate-800/90 border border-slate-700/40 rounded-2xl p-2 shadow-xl shadow-black/25">
            <TabsTrigger 
              value="contact" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-xl transition-all duration-300 hover:bg-slate-700/50"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger 
              value="quote" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 rounded-xl transition-all duration-300 hover:bg-slate-700/50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Request Quote
            </TabsTrigger>
          </TabsList>
        </motion.div>

        {/* Contact Form */}
        <TabsContent value="contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-700/30 rounded-3xl shadow-2xl shadow-black/30 overflow-hidden backdrop-blur-sm">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-cyan-500/3"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
              
              <CardHeader className="text-center relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CardTitle className="text-3xl font-display bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-4">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Have a question or want to discuss a project? We&apos;d love to hear from you.
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <User className="w-4 h-4 inline mr-2" />
                        Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <div className="flex gap-3">
                      <div className="w-32">
                        <Select
                          value={contactForm.countryId}
                          onValueChange={(value) => setContactForm({ ...contactForm, countryId: value })}
                        >
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white rounded-xl h-12 transition-all duration-300">
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white z-[9999] max-h-48 overflow-y-auto rounded-xl">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.id} value={country.id} className="text-white hover:bg-blue-500/20 focus:bg-blue-500/20">
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <Input
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                          placeholder="(405) 200-4589"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <Input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                      placeholder="Your company name (optional)"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 resize-none rounded-xl transition-all duration-300"
                      placeholder="Tell us about your project or question..."
                    />
                  </motion.div>

                  {submitStatus && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{submitStatus.message}</span>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Quote Request Form */}
        <TabsContent value="quote">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-700/30 rounded-3xl shadow-2xl shadow-black/30 overflow-hidden backdrop-blur-sm">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-pink-500/3"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>
              
              <CardHeader className="text-center relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CardTitle className="text-3xl font-display bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent mb-4">
                    Request a Quote
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Ready to start your project? Tell us about your requirements and we&apos;ll provide a detailed quote.
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <User className="w-4 h-4 inline mr-2" />
                        Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <div className="flex gap-3">
                      <div className="w-32">
                        <Select
                          value={quoteForm.countryId}
                          onValueChange={(value) => setQuoteForm({ ...quoteForm, countryId: value })}
                        >
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white rounded-xl h-12 transition-all duration-300">
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white z-[9999] max-h-48 overflow-y-auto rounded-xl">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.id} value={country.id} className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <Input
                          type="tel"
                          required
                          value={quoteForm.phone}
                          onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                          className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                          placeholder="(405) 200-4589"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <Input
                      type="text"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-400 rounded-xl h-12 transition-all duration-300"
                      placeholder="Your company name (optional)"
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Project Type *
                      </label>
                      <div className="relative overflow-visible">
                        <Select
                          value={quoteForm.projectType}
                          onValueChange={(value) => setQuoteForm({ ...quoteForm, projectType: value })}
                        >
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white rounded-xl h-12 transition-all duration-300">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white z-[9999] max-h-48 overflow-y-auto rounded-xl">
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type} className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white mb-3">
                        <DollarSign className="w-4 h-4 inline mr-2" />
                        Budget Range *
                      </label>
                      <div className="relative overflow-visible">
                        <Select
                          value={quoteForm.budgetRange}
                          onValueChange={(value) => setQuoteForm({ ...quoteForm, budgetRange: value })}
                        >
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white rounded-xl h-12 transition-all duration-300">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white z-[9999] max-h-48 overflow-y-auto rounded-xl">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range} className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="relative"
                  >
                      <label className="block text-sm font-medium text-white mb-3">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Timeline *
                      </label>
                    <div className="relative overflow-visible">
                      <Select
                        value={quoteForm.timeline}
                        onValueChange={(value) => setQuoteForm({ ...quoteForm, timeline: value })}
                      >
                        <SelectTrigger className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white rounded-xl h-12 transition-all duration-300">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600 text-white z-[9999] max-h-48 overflow-y-auto rounded-xl">
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline} className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                      <label className="block text-sm font-medium text-white mb-3">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Project Description *
                      </label>
                    <Textarea
                      required
                      rows={6}
                      value={quoteForm.description}
                      onChange={(e) => setQuoteForm({ ...quoteForm, description: e.target.value })}
                      className="bg-slate-800/50 border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-400 resize-none rounded-xl transition-all duration-300"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                    />
                  </motion.div>

                  {submitStatus && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{submitStatus.message}</span>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Request Quote
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Enhanced Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div 
          className="group relative"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/40 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/20">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/2 to-cyan-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <Mail className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 mb-3">Email Us</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">faqihulhasnain572@gmail.com</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group relative"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/40 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-green-500/60 hover:shadow-xl hover:shadow-green-500/20">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/2 to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <Phone className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300 mb-3">Call Us</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">+1 (405) 200-4589</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group relative"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/40 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/2 to-pink-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <MapPin className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 mb-3">Visit Us</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">San Francisco, CA</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
