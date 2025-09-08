"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ArrowLeft, Sparkles, MessageCircle, Mail, Phone, Code2, Zap, Globe, Brain, Palette, Cloud } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForms from "@/components/contact-forms";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen relative overflow-hidden">
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
            { Icon: Brain, x: 90, y: 75, delay: 3, color: "text-purple-400" },
            { Icon: Palette, x: 25, y: 45, delay: 4, color: "text-pink-400" },
            { Icon: Cloud, x: 75, y: 15, delay: 5, color: "text-cyan-400" },
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

          {/* Enhanced Particles */}
          {[
            { left: 26.6, top: 51.5, hue: 225, duration: 3.2, delay: 0.1 },
            { left: 96.3, top: 29.7, hue: 121, duration: 4.1, delay: 0.8 },
            { left: 17.9, top: 27.8, hue: 1, duration: 3.7, delay: 1.2 },
            { left: 62.7, top: 95.4, hue: 117, duration: 4.3, delay: 0.3 },
            { left: 78.4, top: 89.6, hue: 203, duration: 3.9, delay: 1.5 },
            { left: 29.0, top: 85.4, hue: 194, duration: 4.0, delay: 0.6 },
            { left: 33.2, top: 84.9, hue: 289, duration: 3.5, delay: 1.1 },
            { left: 96.5, top: 28.3, hue: 279, duration: 4.2, delay: 0.4 },
            { left: 40.9, top: 43.7, hue: 85, duration: 3.8, delay: 1.3 },
            { left: 89.6, top: 24.4, hue: 354, duration: 3.6, delay: 0.9 },
            { left: 67.9, top: 95.0, hue: 250, duration: 4.4, delay: 0.2 },
            { left: 7.0, top: 49.5, hue: 165, duration: 3.3, delay: 1.4 },
            { left: 93.3, top: 7.9, hue: 93, duration: 4.1, delay: 0.7 },
            { left: 42.2, top: 12.9, hue: 317, duration: 3.4, delay: 1.0 },
            { left: 9.3, top: 9.2, hue: 240, duration: 3.9, delay: 0.5 },
            { left: 47.0, top: 43.5, hue: 337, duration: 4.0, delay: 1.2 },
            { left: 24.9, top: 89.9, hue: 4, duration: 3.7, delay: 0.8 },
            { left: 66.3, top: 67.0, hue: 267, duration: 4.2, delay: 0.3 },
            { left: 0.6, top: 3.1, hue: 333, duration: 3.5, delay: 1.1 },
            { left: 72.9, top: 42.7, hue: 296, duration: 3.8, delay: 0.6 },
            { left: 2.5, top: 18.2, hue: 96, duration: 4.3, delay: 0.9 },
            { left: 36.0, top: 58.4, hue: 304, duration: 3.6, delay: 1.3 },
            { left: 24.9, top: 85.9, hue: 132, duration: 4.1, delay: 0.4 },
            { left: 34.4, top: 25.7, hue: 120, duration: 3.9, delay: 1.0 },
            { left: 49.5, top: 14.1, hue: 128, duration: 3.4, delay: 0.7 },
            { left: 72.9, top: 61.7, hue: 9, duration: 4.0, delay: 1.2 },
            { left: 62.9, top: 13.1, hue: 28, duration: 3.7, delay: 0.5 },
            { left: 67.7, top: 43.7, hue: 173, duration: 4.2, delay: 0.8 },
            { left: 98.1, top: 86.7, hue: 272, duration: 3.8, delay: 1.1 },
            { left: 91.1, top: 48.3, hue: 255, duration: 3.5, delay: 0.6 }
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
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
            }}
            transition={{
                duration: particle.duration,
              repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

       {/* Enhanced Back to Homepage Button for Dark Theme */}
<div className="relative z-10 pt-24 pb-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className="inline-block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="ghost"
            className="group relative flex items-center gap-2 
                       text-gray-300 hover:text-cyan-400 transition-all duration-300
                       border border-gray-700 hover:border-cyan-400/50
                       backdrop-blur-md rounded-2xl px-5 py-2.5
                       shadow-[0_0_10px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                       bg-gradient-to-r from-gray-900/60 via-gray-800/60 to-gray-900/60"
          >
            {/* Glow Background */}
            <span className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-lg transition duration-300"></span>

            {/* Icon Animation */}
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 text-cyan-300 group-hover:text-cyan-400"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.div>


            

            {/* Text */}
            <span className="relative z-10 font-medium 
                             group-hover:tracking-wide group-hover:text-cyan-400
                             transition-all duration-300">
              Back to Homepage
            </span>
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  </div>
</div>


        {/* Enhanced Header Section */}
        <div className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              className="text-center"
              style={{ y: textY }}
            >
              {/* Enhanced Tagline with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let&apos;s build something extraordinary together</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </motion.div>
              </motion.div>

              {/* Enhanced Main Headline with Gradient Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
                  Get in
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block text-white relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  >
                    Touch
                    <motion.div
                    className="absolute -top-2 -right-8 text-cyan-400 opacity-60"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles size={24} />
                    </motion.div>
                  </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Ready to transform your ideas into reality?{" "}
                  </motion.span>
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    Let&apos;s discuss your project
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    {" "}and explore how we can help you achieve your goals.
                  </motion.span>
                </p>
              </motion.div>

              {/* Enhanced Quick contact action cards */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 mt-12"
              >
                <motion.div
                  className="group relative perspective-1000"
                  whileHover={{ 
                    y: -8, 
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                    {/* Card Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>

                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-black/20"
                      >
                        <Phone className="w-6 h-6 text-white drop-shadow-lg" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                          Quick Call
                        </h3>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          Schedule a call
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="group relative perspective-1000"
                  whileHover={{ 
                    y: -8, 
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer">
                    {/* Card Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>

                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-black/20"
                      >
                        <Mail className="w-6 h-6 text-white drop-shadow-lg" />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                          Send Email
                        </h3>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          Get in touch
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="group relative perspective-1000"
                  whileHover={{ 
                    y: -8, 
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                    {/* Card Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>

                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-black/20"
                      >
                        <MessageCircle className="w-6 h-6 text-white drop-shadow-lg" />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
                          Live Chat
                        </h3>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          Instant support
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact Forms - Enhanced container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-16"
        >
          <ContactForms />
        </motion.div>
      </div>
      
      <Footer />
    </>
  );
}