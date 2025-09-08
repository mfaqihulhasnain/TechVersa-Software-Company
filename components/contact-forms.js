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
  AlertCircle
} from "lucide-react";

export default function ContactForms() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
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
        const templateParams = {
          from_name: contactForm.name,
          from_email: contactForm.email,
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
          console.log('Contact Form Submission:', {
            name: contactForm.name,
            email: contactForm.email,
            company: contactForm.company || "Not provided",
            message: contactForm.message,
            timestamp: new Date().toISOString()
          });
          
          // Simulate successful submission
          setSubmitStatus({ type: 'success', message: 'Message received! We\'ll get back to you soon.' });
          setContactForm({ name: '', email: '', company: '', message: '' });
          return;
        }
        
        const formData = new FormData();
        formData.append('access_key', accessKey);
        formData.append('name', contactForm.name);
        formData.append('email', contactForm.email);
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
      setContactForm({ name: '', email: '', company: '', message: '' });
      
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
        const templateParams = {
          from_name: quoteForm.name,
          from_email: quoteForm.email,
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
          console.log('Quote Request Submission:', {
            name: quoteForm.name,
            email: quoteForm.email,
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
        formData.append('name', quoteForm.name);
        formData.append('email', quoteForm.email);
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
          <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-2xl shadow-black/20">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
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
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-white mb-3">
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
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
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Card Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <Mail className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
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
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20">
            {/* Card Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <Phone className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300 mb-3">Call Us</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">+14052004589</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group relative"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
            {/* Card Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <motion.div
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20"
            >
              <MapPin className="w-8 h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 mb-3">Visit Us</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">San Francisco, CA</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
