"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  Award,
  Sparkles,
  ChevronRight,
  Play,
  BarChart3,
  Eye,
  Calendar,
  Target,
  Zap,
  Globe,
  Code2,
  Database,
  Shield,
  Lightbulb
} from "lucide-react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("all");
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const caseStudies = [
    {
      id: "fintech-platform",
      title: "Next-Gen Banking Platform",
      company: "FinTech Startup",
      description: "Built a comprehensive digital banking platform serving 50,000+ users with real-time transactions, AI-powered fraud detection, and mobile-first design.",
      longDescription: "Revolutionary banking platform that transformed how users interact with their finances through cutting-edge technology and intuitive design.",
      image: "/images/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
      stack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      results: [
        { metric: "50,000+ active users", icon: Users, color: "text-blue-400" },
        { metric: "99.9% uptime", icon: TrendingUp, color: "text-green-400" },
        { metric: "40% faster transactions", icon: Clock, color: "text-yellow-400" }
      ],
      category: "FinTech",
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/15 to-emerald-500/15",
      iconBg: "from-green-500/20 to-emerald-500/20",
      duration: "6 months",
      rating: 5,
      testimonial: "TechVersa delivered beyond our expectations with exceptional quality and innovation.",
      clientLogo: "F"
    },
    {
      id: "healthcare-ai",
      title: "AI-Powered Diagnostic Assistant",
      company: "HealthTech Company",
      description: "Developed an AI system that analyzes medical images with 95% accuracy, reducing diagnosis time by 60% and improving patient outcomes.",
      longDescription: "State-of-the-art machine learning solution that revolutionizes medical diagnostics with unprecedented accuracy and speed.",
      image: "/images/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
      stack: ["Python", "TensorFlow", "FastAPI", "MongoDB", "Kubernetes"],
      results: [
        { metric: "95% diagnostic accuracy", icon: BarChart3, color: "text-purple-400" },
        { metric: "60% faster diagnosis", icon: Clock, color: "text-yellow-400" },
        { metric: "10,000+ scans processed", icon: TrendingUp, color: "text-green-400" }
      ],
      category: "HealthTech",
      color: "from-red-500 to-pink-600",
      bgGradient: "from-red-500/15 to-pink-500/15",
      iconBg: "from-red-500/20 to-pink-500/20",
      duration: "8 months",
      rating: 5,
      testimonial: "The AI solution has transformed our diagnostic capabilities completely.",
      clientLogo: "H"
    },
    {
      id: "ecommerce-platform",
      title: "Multi-Channel E-commerce Solution",
      company: "Retail Enterprise",
      description: "Created a unified e-commerce platform integrating web, mobile, and marketplace channels with advanced personalization and inventory management.",
      longDescription: "Comprehensive e-commerce ecosystem that unifies all sales channels while delivering personalized shopping experiences at scale.",
      image: "/images/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
      stack: ["Next.js", "Shopify", "Stripe", "Redis", "GCP"],
      results: [
        { metric: "300% increase in sales", icon: TrendingUp, color: "text-green-400" },
        { metric: "50% reduction in cart abandonment", icon: BarChart3, color: "text-blue-400" },
        { metric: "99.5% system reliability", icon: Award, color: "text-yellow-400" }
      ],
      category: "E-commerce",
      color: "from-orange-500 to-yellow-600",
      bgGradient: "from-orange-500/15 to-yellow-500/15",
      iconBg: "from-orange-500/20 to-yellow-500/20",
      duration: "4 months",
      rating: 5,
      testimonial: "Our sales tripled within the first quarter after launch.",
      clientLogo: "R"
    },
    {
      id: "edtech-platform",
      title: "Interactive Learning Platform",
      company: "EdTech Innovator",
      description: "Built a comprehensive learning management system with AI-powered personalization, interactive content, and real-time collaboration tools.",
      longDescription: "Next-generation educational platform that adapts to individual learning styles and promotes collaborative knowledge sharing.",
      image: "/images/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
      stack: ["Vue.js", "Django", "WebRTC", "PostgreSQL", "AWS"],
      results: [
        { metric: "100,000+ students", icon: Users, color: "text-blue-400" },
        { metric: "85% completion rate", icon: BarChart3, color: "text-purple-400" },
        { metric: "4.9/5 satisfaction", icon: Star, color: "text-yellow-400" }
      ],
      category: "EdTech",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/15 to-indigo-500/15",
      iconBg: "from-blue-500/20 to-indigo-500/20",
      duration: "7 months",
      rating: 5,
      testimonial: "The platform has revolutionized how our students learn and engage.",
      clientLogo: "E"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", count: caseStudies.length },
    { id: "FinTech", label: "FinTech", count: caseStudies.filter(s => s.category === "FinTech").length },
    { id: "HealthTech", label: "HealthTech", count: caseStudies.filter(s => s.category === "HealthTech").length },
    { id: "E-commerce", label: "E-commerce", count: caseStudies.filter(s => s.category === "E-commerce").length },
    { id: "EdTech", label: "EdTech", count: caseStudies.filter(s => s.category === "EdTech").length }
  ];

  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, rotateX: 20, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingIcons = [
    { Icon: Code2, x: 10, y: 20, delay: 0, color: "text-blue-400" },
    { Icon: Database, x: 90, y: 15, delay: 1, color: "text-green-400" },
    { Icon: Shield, x: 5, y: 80, delay: 2, color: "text-red-400" },
    { Icon: Lightbulb, x: 95, y: 85, delay: 3, color: "text-yellow-400" },
    { Icon: Globe, x: 15, y: 60, delay: 0.5, color: "text-purple-400" }
  ];

  return (
    <section id="case-studies" className="pt-2 pb-6 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-blue-900/20" />
        
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        />
        
        {/* Animated tech grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Interactive Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-30`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              x: mousePosition.x * 0.2,
              y: mousePosition.y * 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: [8.2, 9.1, 8.8, 9.3, 8.5][i % 5],
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="w-10 h-10 drop-shadow-lg" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 19.4, top: 88.8, hue: 292, duration: 6.2, delay: 0.1 },
          { left: 76.4, top: 85.7, hue: 314, duration: 7.8, delay: 1.2 },
          { left: 94.5, top: 69.2, hue: 274, duration: 8.1, delay: 2.3 },
          { left: 98.3, top: 35.3, hue: 311, duration: 6.9, delay: 0.8 },
          { left: 57.3, top: 93.1, hue: 321, duration: 7.4, delay: 1.7 },
          { left: 60.5, top: 17.4, hue: 295, duration: 8.3, delay: 0.5 },
          { left: 44.0, top: 10.6, hue: 253, duration: 6.7, delay: 2.1 },
          { left: 12.3, top: 87.6, hue: 254, duration: 7.1, delay: 1.4 },
          { left: 11.1, top: 75.2, hue: 325, duration: 8.6, delay: 0.3 },
          { left: 43.3, top: 65.0, hue: 300, duration: 6.5, delay: 1.9 },
          { left: 57.1, top: 85.1, hue: 286, duration: 7.9, delay: 0.7 },
          { left: 93.5, top: 48.9, hue: 284, duration: 8.4, delay: 1.1 },
          { left: 65.2, top: 92.2, hue: 274, duration: 6.8, delay: 2.0 },
          { left: 81.4, top: 22.6, hue: 321, duration: 7.3, delay: 0.4 },
          { left: 83.9, top: 18.4, hue: 237, duration: 8.7, delay: 1.6 },
          { left: 2.03, top: 27.8, hue: 259, duration: 6.4, delay: 0.9 },
          { left: 6.20, top: 42.7, hue: 244, duration: 7.6, delay: 1.3 },
          { left: 45.7, top: 69.8, hue: 239, duration: 8.2, delay: 0.2 },
          { left: 66.3, top: 17.3, hue: 242, duration: 6.9, delay: 1.8 },
          { left: 77.3, top: 39.0, hue: 265, duration: 7.5, delay: 0.6 },
          { left: 64.0, top: 48.1, hue: 291, duration: 8.1, delay: 1.5 },
          { left: 85.1, top: 2.3, hue: 267, duration: 6.3, delay: 2.2 },
          { left: 85.7, top: 79.6, hue: 276, duration: 7.8, delay: 0.8 },
          { left: 82.5, top: 25.7, hue: 337, duration: 8.5, delay: 1.0 },
          { left: 95.6, top: 13.1, hue: 351, duration: 6.7, delay: 1.7 },
          { left: 59.6, top: 83.0, hue: 240, duration: 7.2, delay: 0.3 },
          { left: 7.28, top: 39.3, hue: 314, duration: 8.8, delay: 1.4 },
          { left: 59.2, top: 94.2, hue: 277, duration: 6.6, delay: 0.7 },
          { left: 75.3, top: 3.8, hue: 358, duration: 7.9, delay: 1.9 },
          { left: 25.0, top: 23.5, hue: 292, duration: 8.3, delay: 0.1 },
          { left: 2.69, top: 83.3, hue: 330, duration: 6.8, delay: 1.6 },
          { left: 75.1, top: 50.8, hue: 276, duration: 7.4, delay: 0.5 },
          { left: 36.4, top: 58.6, hue: 317, duration: 8.6, delay: 1.2 },
          { left: 62.3, top: 73.9, hue: 228, duration: 6.5, delay: 2.1 },
          { left: 48.6, top: 53.6, hue: 299, duration: 7.7, delay: 0.9 },
          { left: 39.1, top: 23.4, hue: 325, duration: 8.4, delay: 1.3 },
          { left: 11.7, top: 80.0, hue: 258, duration: 6.9, delay: 0.4 },
          { left: 72.2, top: 65.1, hue: 309, duration: 7.6, delay: 1.8 },
          { left: 49.5, top: 77.7, hue: 245, duration: 8.2, delay: 0.6 },
          { left: 12.6, top: 73.6, hue: 357, duration: 6.7, delay: 1.5 },
          { left: 69.9, top: 56.1, hue: 265, duration: 7.8, delay: 0.2 },
          { left: 81.0, top: 59.0, hue: 265, duration: 8.5, delay: 1.7 },
          { left: 97.9, top: 89.6, hue: 243, duration: 6.4, delay: 0.8 },
          { left: 55.8, top: 83.5, hue: 348, duration: 7.3, delay: 1.1 },
          { left: 69.6, top: 14.9, hue: 338, duration: 8.7, delay: 0.3 },
          { left: 7.70, top: 17.7, hue: 230, duration: 6.6, delay: 1.9 },
          { left: 77.6, top: 23.6, hue: 280, duration: 7.5, delay: 0.7 },
          { left: 58.6, top: 16.1, hue: 295, duration: 8.3, delay: 1.4 },
          { left: 95.6, top: 47.5, hue: 324, duration: 6.8, delay: 0.5 },
          { left: 43.1, top: 16.1, hue: 347, duration: 7.7, delay: 1.6 },
          { left: 73.0, top: 96.1, hue: 278, duration: 8.1, delay: 0.9 },
          { left: 47.2, top: 81.7, hue: 248, duration: 6.5, delay: 1.2 },
          { left: 19.5, top: 71.7, hue: 326, duration: 7.9, delay: 0.4 },
          { left: 64.7, top: 12.2, hue: 230, duration: 8.6, delay: 1.8 },
          { left: 96.3, top: 56.7, hue: 256, duration: 6.7, delay: 0.6 },
          { left: 62.5, top: 90.2, hue: 249, duration: 7.4, delay: 1.3 },
          { left: 62.8, top: 85.9, hue: 350, duration: 8.2, delay: 0.1 },
          { left: 65.0, top: 18.3, hue: 302, duration: 6.9, delay: 1.7 },
          { left: 87.7, top: 62.6, hue: 348, duration: 7.6, delay: 0.8 },
          { left: 61.9, top: 94.1, hue: 232, duration: 8.4, delay: 1.5 }
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
              y: [0, -60, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full px-6 py-3 mb-4 backdrop-blur-sm"
          >
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Success Stories</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 leading-tight"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Case Studies
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Real-world solutions that drive measurable results for our clients across various industries
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Filter System */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 relative overflow-hidden group ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/60 border border-slate-700/50 text-gray-300 hover:bg-slate-700/60 hover:border-purple-400/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {filter.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.id 
                    ? 'bg-white/20' 
                    : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {filteredStudies.map((study, index) => (
            <motion.div 
              key={study.id} 
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              layout
            >
              <motion.div
                whileHover={{ 
                  y: -20, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
                className="group cursor-pointer h-full"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 rounded-3xl overflow-hidden transition-all duration-700 hover:border-slate-600/60 hover:shadow-2xl backdrop-blur-xl relative group">
                  {/* Dynamic background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={hoveredCard === index ? {
                      boxShadow: [
                        "0 0 0 0 rgba(139, 92, 246, 0)",
                        "0 0 0 2px rgba(139, 92, 246, 0.3)",
                        "0 0 0 0 rgba(139, 92, 246, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                  />
                  
                  {/* Enhanced Image Section with Real Image */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-700/30 to-slate-800/30 flex items-center justify-center overflow-hidden">
                    {/* Real Image Background */}
                    <Image
                      src={study.image}
                      alt={`${study.title} - ${study.company}`}
                      fill
                      className="object-cover opacity-40 hover:opacity-60 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.iconBg} opacity-30`} />
                    
                    {/* Interactive Overlay */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: hoveredCard === index ? 1 : 0.8,
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-10"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Client Logo Overlay */}
                    <div className="absolute top-2 left-2 z-20">
                      <motion.div 
                        className={`w-8 h-8 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center shadow-2xl relative`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.color} blur-lg opacity-50`} />
                        <span className="text-sm font-bold text-white relative z-10">{study.clientLogo}</span>
                      </motion.div>
                    </div>
                    
                    {/* Case Study Badge */}
                    <div className="absolute bottom-2 right-2 z-20">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-xs font-medium text-white">Case Study</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="relative p-4 pb-3">
                    {/* Enhanced Header with Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={`bg-gradient-to-r ${study.iconBg} border-white/10 text-white font-semibold px-3 py-1 text-xs`}
                        >
                          {study.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(study.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1 + 0.5 }}
                            >
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    {/* Company Info with Enhanced Visual */}
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div 
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-gray-400 font-semibold">{study.company}</span>
                    </div>
                    
                    <CardTitle className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 mb-2 leading-tight">
                      {study.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-xs">
                      {study.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative p-4 pt-0">
                    {/* Enhanced Tech Stack */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                        <div className="w-1 h-2 bg-purple-400 rounded-full" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {study.stack.slice(0, 3).map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              className={`bg-gradient-to-r ${study.iconBg} text-white border border-white/10 font-semibold hover:scale-105 transition-transform cursor-pointer text-xs px-2 py-0.5`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {study.stack.length > 3 && (
                          <Badge className="bg-gray-600/50 text-gray-300 text-xs px-2 py-0.5">
                            +{study.stack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Results Section */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                        <Target className="w-3 h-3" />
                        Key Results
                      </h4>
                      <div className="space-y-2">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <motion.div
                            key={resultIndex}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: resultIndex * 0.1 }}
                            className="flex items-center group/result"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                              className={`w-6 h-6 rounded-lg bg-gradient-to-br ${study.iconBg} flex items-center justify-center mr-2 shadow-lg relative`}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-br ${study.iconBg} blur-lg opacity-50`} />
                              <result.icon className={`w-3 h-3 ${result.color} relative z-10`} />
                            </motion.div>
                            <span className="text-xs font-semibold text-white group-hover/result:text-transparent group-hover/result:bg-clip-text group-hover/result:bg-gradient-to-r group-hover/result:from-purple-400 group-hover/result:to-blue-400 transition-all duration-300">
                              {result.metric}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <motion.div 
                      className="pt-3 border-t border-slate-700/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative">
                        <div className="absolute -left-1 -top-1 text-lg text-purple-400/20 font-serif">&ldquo;</div>
                        <p className="text-gray-300 italic text-xs leading-relaxed pl-3">
                          {study.testimonial}
                        </p>
                      </div>
                    </motion.div>

                    {/* Enhanced CTA Section */}
                    <div className="pt-2">
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="group/link inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
                      >
                        <span className="relative flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-purple-400" />
                          <span className="text-xs">Read More</span>
                          <motion.div
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-3 h-3 text-blue-400" />
                          </motion.div>
                        </span>
                      </Link>
                    </div>
                  </CardContent>

                  {/* Floating Number Indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0, 
                      scale: hoveredCard === index ? 1 : 0,
                      rotate: hoveredCard === index ? 0 : -45
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Success Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0, 
                      scale: hoveredCard === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute bottom-4 left-4 flex items-center gap-1 bg-green-500/20 border border-green-400/30 rounded-full px-2 py-0.5 backdrop-blur-sm"
                  >
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-green-300">✓</span>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <div className="relative inline-block max-w-2xl mx-auto">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-lg"
            />
            
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl">
              {/* Floating decorative elements */}
              {[
                { left: 28.0, top: 31.4, duration: 5.2, delay: 0.1 },
                { left: 84.3, top: 77.4, duration: 6.8, delay: 0.8 },
                { left: 25.6, top: 24.0, duration: 5.9, delay: 1.5 },
                { left: 35.2, top: 80.5, duration: 6.4, delay: 0.3 },
                { left: 42.5, top: 30.9, duration: 7.1, delay: 1.2 },
                { left: 24.0, top: 36.5, duration: 5.7, delay: 0.6 },
                { left: 78.5, top: 25.9, duration: 6.9, delay: 1.8 },
                { left: 77.1, top: 20.2, duration: 5.4, delay: 0.4 },
                { left: 40.8, top: 66.6, duration: 7.3, delay: 1.1 },
                { left: 71.5, top: 19.4, duration: 6.1, delay: 0.9 },
                { left: 34.4, top: 45.3, duration: 5.8, delay: 1.6 },
                { left: 69.3, top: 27.6, duration: 7.0, delay: 0.2 },
                { left: 39.9, top: 69.4, duration: 6.5, delay: 1.3 },
                { left: 63.4, top: 57.9, duration: 5.6, delay: 0.7 },
                { left: 22.6, top: 30.5, duration: 7.2, delay: 1.4 }
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}
              
              <motion.div
                animate={{ 
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-400 mx-auto drop-shadow-lg" />
              </motion.div>
              
              <motion.h3 
                className="text-xl md:text-2xl font-bold font-display mb-2 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Ready to Create Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-4 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let&apos;s discuss how we can help you achieve similar results and transform your business with innovative, scalable solutions that drive real impact.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-2xl shadow-purple-500/25 overflow-hidden"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Start Your Project
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-3 h-3" />
                    </motion.div>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/70 px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 backdrop-blur-sm flex items-center gap-1 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-purple-400/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <ExternalLink className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">View All Case Studies</span>
                  <ArrowRight className="w-3 h-3 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { number: "500M+", label: "Revenue Generated", icon: TrendingUp },
                  { number: "98%", label: "Client Satisfaction", icon: Star },
                  { number: "50+", label: "Success Stories", icon: Award },
                  { number: "15+", label: "Industries", icon: Globe }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-3 h-3 text-white" />
                    </motion.div>
                    <div className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Explore more of our successful projects and client partnerships
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 rounded-2xl overflow-hidden group hover:border-purple-400/50 transition-all duration-500 cursor-pointer relative"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Portfolio Image */}
                <Image
                  src="/images/stock-photo-random-pictures-cute-and-funny-2286554497.jpg"
                  alt={`Portfolio Project ${i + 1}`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 12vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300" />
                
                {/* Project Label */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs text-white font-medium">
                      Project {i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;