"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "AI/ML Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" }
    ],
    resources: [
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/techversa" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/techversa" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/techversa" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/techversa" }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-tv-bg border-t border-tv-accent/30">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-bold font-display gradient-text">
                    TechVersa
                  </span>
                </Link>
                
                <p className="text-tv-muted mb-6 max-w-md leading-relaxed">
                  We're a full‑stack team crafting reliable products with modern web, cloud, and AI—on time and on budget.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-tv-muted">
                    <Mail className="w-4 h-4 text-tv-glow" />
                    <span>hello@techversa.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-tv-muted">
                    <Phone className="w-4 h-4 text-tv-glow" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-tv-muted">
                    <MapPin className="w-4 h-4 text-tv-glow" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-tv-panel border border-tv-accent/30 rounded-lg flex items-center justify-center hover:border-tv-glow transition-colors glow-border"
                    >
                      <social.icon className="w-5 h-5 text-tv-muted hover:text-tv-glow transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-tv-fore mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-tv-muted hover:text-tv-glow transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-tv-fore mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-tv-muted hover:text-tv-glow transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-tv-fore mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-tv-muted hover:text-tv-glow transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-tv-accent/20"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-tv-fore mb-2">
              Stay Updated
            </h3>
            <p className="text-tv-muted mb-4">
              Get the latest insights on technology and development trends.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-tv-panel border border-tv-accent/30 rounded-lg text-tv-fore placeholder:text-tv-muted focus:outline-none focus:border-tv-glow transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-6 border-t border-tv-accent/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-tv-muted text-sm">
              © 2024 TechVersa. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-tv-muted hover:text-tv-glow transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
