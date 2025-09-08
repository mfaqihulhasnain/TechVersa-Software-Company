"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  const logoVariants = {
    initial: { 
      background: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    },
    animate: { 
      background: ["linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)", 
                   "linear-gradient(135deg, #8b5cf6, #d946ef, #f97316)",
                   "linear-gradient(135deg, #d946ef, #f97316, #eab308)",
                   "linear-gradient(135deg, #f97316, #eab308, #22c55e)",
                   "linear-gradient(135deg, #eab308, #22c55e, #06b6d4)",
                   "linear-gradient(135deg, #22c55e, #06b6d4, #6366f1)",
                   "linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6)"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <>
      {/* Backdrop blur overlay when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-background/60 via-background/40 to-transparent backdrop-blur-xl z-40"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-lg border-b border-gradient shadow-2xl shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        {/* Animated border gradient */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
        )}

        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Enhanced Logo - Mobile Optimized */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-lg md:rounded-xl blur-sm opacity-70"
                />
                <div className="relative bg-background/80 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 md:p-2 border border-primary/20">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </motion.div>
              
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                className="text-xl md:text-3xl font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 200%"
                }}
              >
                TechVersa
              </motion.div>
            </Link>

            {/* Desktop Navigation - Unchanged */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 text-foreground/80 hover:text-foreground transition-all duration-300 font-medium rounded-lg group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="navHover"
                    />
                    
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/5 rounded-lg border border-primary/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)",
                      "linear-gradient(45deg, #8b5cf6, #d946ef, #f97316)",
                      "linear-gradient(45deg, #d946ef, #f97316, #6366f1)",
                      "linear-gradient(45deg, #f97316, #6366f1, #8b5cf6)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <Button
                  asChild
                  className="relative bg-background/90 hover:bg-background text-foreground border-0 font-semibold px-6 py-2 rounded-lg backdrop-blur-sm group-hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Get a Quote</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Improved */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 group z-50 touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-30"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 bg-background/95 backdrop-blur-xl z-40 overflow-y-auto overscroll-contain"
                style={{ maxHeight: 'calc(100vh - 3.5rem)' }}
              >
                <div className="min-h-full flex flex-col justify-between p-4 pb-safe">
                  {/* Navigation Items */}
                  <motion.div className="space-y-2 flex-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="relative"
                      >
                        <motion.button
                          onClick={() => handleNavClick(item.href)}
                          whileHover={{ x: 4, scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="block w-full text-left text-foreground/90 hover:text-foreground transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/8 hover:to-purple-500/8 border border-transparent hover:border-primary/20 group text-base"
                        >
                          <motion.div
                            className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-primary to-purple-500 rounded-r group-hover:h-1/2 group-hover:top-1/4 transition-all duration-300"
                          />
                          <span className="relative z-10 ml-2">{item.name}</span>
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Mobile CTA Button - Fixed at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="space-y-3 pt-4 border-t border-gradient/20 mt-6"
                  >
                    <div className="relative group">
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                        animate={{
                          background: [
                            "linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)",
                            "linear-gradient(45deg, #8b5cf6, #d946ef, #f97316)",
                            "linear-gradient(45deg, #d946ef, #f97316, #6366f1)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <Button
                        asChild
                        className="relative w-full bg-background hover:bg-background/95 text-foreground border-0 font-semibold py-3 text-base rounded-lg backdrop-blur-sm group-hover:shadow-lg transition-all duration-300"
                      >
                        <Link href="/contact" className="flex items-center justify-center space-x-2">
                          <span>Get a Quote</span>
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Sparkles className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </div>

                    {/* Contact Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="text-center pt-3"
                    >
                      <p className="text-xs text-foreground/60 mb-1">Ready to start your project?</p>
                      <p className="text-xs text-foreground/40">Get in touch for a free consultation</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;