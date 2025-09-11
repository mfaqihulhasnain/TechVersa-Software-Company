"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Zap, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { createOptimizedScrollHandler, prefersReducedMotion } from "@/lib/performance";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    // Skip mouse tracking if user prefers reduced motion
    if (prefersReducedMotion()) return;

    // Optimized mouse tracking with throttling (32ms = 30fps for smoother performance)
    const handleMouseMove = createOptimizedScrollHandler((e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    }, 32);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/30" />
        
        {/* Dynamic mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_70%)]" />
        </div>

        {/* Animated grid overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Interactive Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tech Icons */}
        {[
          { Icon: Code2, x: 15, y: 20, delay: 0, color: "text-blue-400" },
          { Icon: Zap, x: 85, y: 30, delay: 1, color: "text-yellow-400" },
          { Icon: Globe, x: 10, y: 70, delay: 2, color: "text-green-400" },
          { Icon: Sparkles, x: 90, y: 75, delay: 3, color: "text-pink-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-60`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: item.delay }}
          >
            <item.Icon className="w-8 h-8" />
          </motion.div>
        ))}

        {/* Optimized Particles - Reduced from 28 to 12 for better performance */}
        {[
          { left: 26.6, top: 51.5, hue: 225, duration: 4.0, delay: 0.1 },
          { left: 96.3, top: 29.7, hue: 121, duration: 5.0, delay: 0.8 },
          { left: 17.9, top: 27.8, hue: 1, duration: 4.5, delay: 1.2 },
          { left: 62.7, top: 95.4, hue: 117, duration: 5.5, delay: 0.3 },
          { left: 78.4, top: 89.6, hue: 203, duration: 4.8, delay: 1.5 },
          { left: 29.0, top: 85.4, hue: 194, duration: 5.2, delay: 0.6 },
          { left: 33.2, top: 84.9, hue: 289, duration: 4.3, delay: 1.1 },
          { left: 96.5, top: 28.3, hue: 279, duration: 5.8, delay: 0.4 },
          { left: 40.9, top: 43.7, hue: 85, duration: 4.6, delay: 1.3 },
          { left: 89.6, top: 24.4, hue: 354, duration: 4.4, delay: 0.9 },
          { left: 67.9, top: 95.0, hue: 250, duration: 5.2, delay: 0.2 },
          { left: 7.0, top: 49.5, hue: 165, duration: 4.1, delay: 1.4 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `hsl(${particle.hue}, 70%, 60%)`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: textY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Enhanced Tagline with Icon */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Adaptive software for an ever‑changing world</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Headline with Gradient Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-tight"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Build faster.
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Scale smarter.
            </motion.span>
          </motion.h1>

          {/* Enhanced Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              TechVersa designs, builds, and scales{" "}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              cloud‑ready web & AI solutions
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              {" "}for startups and enterprises.
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-bold group overflow-hidden"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  Get a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#case-studies")}
                className="relative border-2 border-purple-400/50 text-purple-200 hover:bg-purple-400/10 px-10 py-4 text-lg font-bold group backdrop-blur-sm"
              >
                <motion.div
                  className="absolute inset-0 bg-purple-400/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Play className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">View Case Studies</span>
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("#next-section")}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [2, 14, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
          />
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Optimized Ambient Glow Effects - Slower animations for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;