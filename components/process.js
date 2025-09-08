"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Sparkles,
  Play,
  ChevronDown,
  Star,
  TrendingUp,
  Globe,
  Shield,
  Target,
  Award
} from "lucide-react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedStep, setExpandedStep] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Discovery & Research",
      icon: Search,
      description: "We dive deep into your business goals, user needs, and technical requirements to create a comprehensive project roadmap.",
      details: [
        { item: "Stakeholder interviews & workshops", icon: Users },
        { item: "Market research & competitor analysis", icon: TrendingUp },
        { item: "Technical architecture planning", icon: Code },
        { item: "Project timeline & risk assessment", icon: Clock }
      ],
      color: "from-blue-500 via-cyan-500 to-indigo-500",
      bgGradient: "from-blue-500/10 via-cyan-500/5 to-indigo-500/10",
      shadowColor: "shadow-blue-500/20",
      duration: "1-2 weeks",
      deliverables: "Project Brief, User Stories, Technical Architecture",
      metrics: "95% client satisfaction",
      highlight: "Strategic Foundation"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      icon: Palette,
      description: "Our design team creates intuitive user experiences and beautiful interfaces that align with your brand and user expectations.",
      details: [
        { item: "User journey mapping & wireframes", icon: Target },
        { item: "Interactive prototypes & testing", icon: Sparkles },
        { item: "Design system & component library", icon: Award },
        { item: "Accessibility & usability validation", icon: Shield }
      ],
      color: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/10 via-pink-500/5 to-rose-500/10",
      shadowColor: "shadow-purple-500/20",
      duration: "2-4 weeks",
      deliverables: "Design System, Interactive Prototypes, Style Guide",
      metrics: "40% improvement in UX scores",
      highlight: "User-Centered Design"
    },
    {
      id: 3,
      title: "Development & Integration",
      icon: Code,
      description: "Our development team brings your vision to life using cutting-edge technologies and industry best practices for scalable solutions.",
      details: [
        { item: "Agile development methodology", icon: Zap },
        { item: "CI/CD pipeline implementation", icon: Rocket },
        { item: "Real-time progress tracking", icon: TrendingUp },
        { item: "Code quality & security reviews", icon: Shield }
      ],
      color: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
      shadowColor: "shadow-green-500/20",
      duration: "4-8 weeks",
      deliverables: "MVP Application, API Documentation, Source Code",
      metrics: "99.9% uptime guaranteed",
      highlight: "Enterprise-Grade Development"
    },
    {
      id: 4,
      title: "Testing & Optimization",
      icon: TestTube,
      description: "Comprehensive testing ensures your application is robust, secure, and performs flawlessly across all platforms and devices.",
      details: [
        { item: "Automated testing & quality assurance", icon: CheckCircle },
        { item: "Performance optimization & monitoring", icon: TrendingUp },
        { item: "Security audits & penetration testing", icon: Shield },
        { item: "Cross-platform compatibility testing", icon: Globe }
      ],
      color: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/10 via-amber-500/5 to-yellow-500/10",
      shadowColor: "shadow-orange-500/20",
      duration: "1-3 weeks",
      deliverables: "QA Reports, Performance Metrics, Security Certification",
      metrics: "Zero critical bugs",
      highlight: "Quality Assurance"
    },
    {
      id: 5,
      title: "Launch & Growth",
      icon: Rocket,
      description: "We launch your product with confidence and provide ongoing support to help you scale and evolve with your business needs.",
      details: [
        { item: "Seamless deployment & go-live support", icon: Rocket },
        { item: "Performance monitoring & analytics", icon: TrendingUp },
        { item: "User training & comprehensive documentation", icon: Users },
        { item: "24/7 maintenance & feature updates", icon: Clock }
      ],
      color: "from-indigo-500 via-purple-500 to-violet-500",
      bgGradient: "from-indigo-500/10 via-purple-500/5 to-violet-500/10",
      shadowColor: "shadow-indigo-500/20",
      duration: "Ongoing",
      deliverables: "Live Application, Analytics Dashboard, Support Portal",
      metrics: "150% ROI average",
      highlight: "Continuous Innovation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };


  const stepVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.8, rotateX: 45 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="process" className="pt-16 pb-32 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-[400px] h-[400px] bg-gradient-radial from-purple-500/15 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-slate-800/20 to-transparent rounded-full"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Dynamic Connecting Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="25%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.4)" />
              <stop offset="75%" stopColor="rgba(245, 158, 11, 0.4)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.path 
            d="M 100 300 Q 300 150 500 300 T 900 300 T 1300 300" 
            stroke="url(#processGradient)" 
            strokeWidth="3" 
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          variants={floatingVariants}
          animate="animate"
          className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} rounded-full opacity-40`}
          style={{
            backgroundColor: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 15)}%`,
            animationDelay: `${i * 1.5}s`
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-xl border-2 border-blue-400/30 rounded-full px-6 py-3 mb-8 shadow-xl shadow-blue-500/20"
          >
            <div className="relative">
              <Rocket className="w-5 h-5 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="text-sm font-semibold text-slate-200 tracking-wide">PROVEN METHODOLOGY</span>
            <Star className="w-4 h-4 text-purple-400" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight"
          >
            Our Process
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            A proven methodology that transforms ideas into exceptional digital experiences, 
            backed by <span className="font-bold text-blue-400">200+ successful projects</span> and industry-leading results
          </motion.p>
          
          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
            />
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
            />
          </div>
        </motion.div>

        {/* Enhanced Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              onHoverStart={() => setHoveredStep(step.id)}
              onHoverEnd={() => setHoveredStep(null)}
              className="relative group"
            >
              {/* Connection Line to Next Step */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 origin-left"
                />
              )}

              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="cursor-pointer relative z-10 h-full"
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className={`
                  relative h-full bg-slate-800/90 backdrop-blur-2xl border-2 border-slate-700/50 
                  rounded-2xl p-6 transition-all duration-500 overflow-hidden shadow-xl
                  ${hoveredStep === step.id ? 'border-blue-400/60 shadow-2xl shadow-blue-500/20' : ''}
                  ${activeStep === index ? 'ring-2 ring-purple-400 ring-opacity-50' : ''}
                `}>
                  
                  {/* Animated Background Glow */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    animate={activeStep === index ? { opacity: [0, 0.3, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Highlight Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    {step.highlight}
                  </motion.div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-4">
                      {/* Step Number with 3D effect */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotateY: 15 }}
                        className="relative group/number"
                      >
                        <div className={`
                          relative w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} 
                          flex items-center justify-center shadow-xl mx-auto mb-3
                          group-hover/number:shadow-2xl transition-all duration-300
                        `}>
                          <span className="text-lg font-black text-white relative z-10">{step.id}</span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-50 group-hover/number:opacity-80 transition-opacity duration-300`} />
                        </div>
                        
                        {/* Floating particles around number */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              animate={{
                                x: [0, 20, -20, 0],
                                y: [0, -20, 20, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 3,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              style={{
                                top: `${20 + i * 10}%`,
                                left: `${30 + i * 15}%`
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* Enhanced Step Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-10 h-10 bg-slate-700/50 border-2 border-slate-600/50 rounded-xl flex items-center justify-center group-hover:border-blue-400/50 transition-all duration-300 mx-auto mb-3 shadow-lg"
                      >
                        <step.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                        <div className="absolute inset-0 bg-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      </motion.div>

                      <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300 mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      
                      {/* Enhanced Meta Information */}
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full font-medium border border-slate-600/30">
                          <Clock className="w-2.5 h-2.5 inline mr-1" />
                          {step.duration}
                        </span>
                        <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full font-medium border border-blue-400/30">
                          <TrendingUp className="w-2.5 h-2.5 inline mr-1" />
                          {step.metrics}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-center">
                      {step.description}
                    </p>

                    {/* Enhanced Deliverables Preview */}
                    <div className="mb-4 p-3 bg-slate-700/50 rounded-xl border border-slate-600/30 group-hover:bg-slate-700/70 transition-all duration-300">
                      <h4 className="text-xs font-bold text-slate-200 mb-1 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-blue-400 mr-1" />
                        Key Deliverables
                      </h4>
                      <p className="text-xs text-slate-400 text-center leading-relaxed">{step.deliverables}</p>
                    </div>

                    {/* Enhanced Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedStep === step.id ? "auto" : 0,
                        opacity: expandedStep === step.id ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-600/30">
                        <h4 className="text-base font-bold text-slate-200 mb-4 flex items-center justify-center">
                          <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-2"></div>
                          Process Deep Dive
                        </h4>
                        <div className="grid gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ x: -30, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: detailIndex * 0.1, type: "spring" }}
                              className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/20 hover:border-slate-500/30 hover:shadow-lg transition-all group/detail"
                            >
                              <motion.div
                                whileHover={{ scale: 1.3, rotate: 20 }}
                                className={`
                                  w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} 
                                  flex items-center justify-center shadow-lg flex-shrink-0
                                `}
                              >
                                <detail.icon className="w-4 h-4 text-white" />
                              </motion.div>
                              <span className="text-xs text-slate-400 group-hover/detail:text-slate-300 transition-colors font-medium">
                                {detail.item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced Progress Indicator */}
                    <div className="mt-6 pt-4 border-t border-slate-600/30">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-slate-400 font-medium">Step {step.id} of {steps.length}</span>
                        <span className="text-slate-200 font-semibold">{Math.round((step.id / steps.length) * 100)}%</span>
                      </div>
                      <div className="relative w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(step.id / steps.length) * 100}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2.5 bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30 hover:border-blue-400/30 rounded-lg text-xs font-semibold text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedStep(expandedStep === step.id ? null : step.id);
                      }}
                    >
                      {expandedStep === step.id ? 'Show Less' : 'Learn More'}
                      <motion.div
                        animate={{ rotate: expandedStep === step.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="text-center"
        >
          <div className="relative inline-block max-w-6xl mx-auto">
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-[2rem] blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2rem] blur-2xl opacity-30 animate-pulse delay-1000" />
            
            <div className="relative bg-slate-800/95 backdrop-blur-2xl border-2 border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-blue-500/20">
              {/* Animated Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                  filter: ["hue-rotate(0deg)", "hue-rotate(20deg)", "hue-rotate(0deg)"]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-4"
              >
                <div className="relative w-12 h-12 mx-auto">
                  <Play className="w-12 h-12 text-blue-400 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-ping" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-black mb-3 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                Ready to Transform Your Vision?
              </h3>
              
              <p className="text-slate-400 mb-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                Join <span className="font-bold text-blue-400">500+ successful clients</span> who've transformed their businesses with our proven process. 
                Let's start with a <span className="font-bold text-purple-400">free discovery session</span> to map your path to success.
              </p>

              {/* Enhanced Stats Row */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                {[
                  { icon: Users, label: "Happy Clients", value: "500+" },
                  { icon: Rocket, label: "Projects Delivered", value: "200+" },
                  { icon: Award, label: "Success Rate", value: "98%" },
                  { icon: TrendingUp, label: "Avg. ROI", value: "150%" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + index * 0.1 }}
                    className="flex items-center gap-2 bg-slate-700/50 px-2 py-1.5 rounded-lg border border-slate-600/30 backdrop-blur-sm"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center">
                      <stat.icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-100">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-xl shadow-blue-500/30 min-w-[200px]"
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Project Today
                    <motion.div
                      whileHover={{ x: 8, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </motion.div>
                  </span>
                  
                  {/* Enhanced Button Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-2xl"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"></div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-slate-700/80 border-2 border-slate-600/50 hover:border-blue-400/60 text-slate-200 hover:text-blue-400 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm min-w-[200px]"
                >
                  <span className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-colors" />
                    Watch Our Process Demo
                  </span>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Free consultation</span>
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>No commitment required</span>
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 text-center"
        >
          <h4 className="text-2xl font-bold text-slate-100 mb-8">Project Timeline Visualization</h4>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Background */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-full transform -translate-y-1/2"></div>
            
            {/* Timeline Steps */}
            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.2 + index * 0.2, type: "spring" }}
                  className="relative flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg z-10 border-2 border-slate-900`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-20 text-center">
                    <div className="text-sm font-semibold text-slate-200 mb-1">{step.title}</div>
                    <div className="text-xs text-slate-400">{step.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;