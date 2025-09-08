"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Smartphone, 
  Database, 
  Brain, 
  Palette, 
  Cloud,
  Users,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Code,
      title: "Web & Mobile App Development",
      description: "Full-stack development with modern frameworks and responsive design",
      outcomes: [
        "Custom web applications",
        "Cross-platform mobile apps",
        "Progressive Web Apps (PWA)"
      ],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10"
    },
    {
      icon: Database,
      title: "Backend & API Engineering",
      description: "Scalable server architecture and robust API development",
      outcomes: [
        "RESTful & GraphQL APIs",
        "Microservices architecture",
        "Database optimization"
      ],
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10"
    },
    {
      icon: Brain,
      title: "AI/ML & Data Engineering",
      description: "Intelligent solutions powered by machine learning and data insights",
      outcomes: [
        "Machine learning models",
        "Data pipeline automation",
        "AI-powered features"
      ],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts and delights",
      outcomes: [
        "User experience research",
        "Interactive prototypes",
        "Design systems"
      ],
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/10"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Infrastructure",
      description: "Reliable deployment and scalable cloud solutions",
      outcomes: [
        "AWS/GCP/Azure setup",
        "CI/CD pipelines",
        "Monitoring & security"
      ],
      color: "from-indigo-500 to-blue-600",
      bgGlow: "bg-indigo-500/10"
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Dedicated development teams to accelerate your projects",
      outcomes: [
        "Senior developers",
        "Project management",
        "Long-term partnerships"
      ],
      color: "from-teal-500 to-cyan-600",
      bgGlow: "bg-teal-500/10"
    }
  ];

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

  const cardVariants = {
    hidden: { y: 80, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/3 to-transparent rounded-full"></div>
      </div>
      
      {/* Floating Particles */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-64 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-48 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-2 py-1 mb-3 backdrop-blur-sm"
          >
            <Sparkles className="w-2 h-2 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-100">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight"
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive technology solutions tailored to transform your business with cutting-edge innovation
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-3"
          />
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={cardVariants}>
              <motion.div
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="h-full group cursor-pointer perspective-1000"
              >
                <div className={`relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-lg p-4 overflow-hidden transition-all duration-500 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-cyan-500/10 ${service.bgGlow}`}>
                  
                  {/* Card Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  </div>

                  {/* Icon Container with Enhanced Animation */}
                  <motion.div
                    whileHover={{ 
                      rotate: 10,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-black/20`}
                  >
                    <service.icon className="w-5 h-5 text-white drop-shadow-lg" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Enhanced Outcomes List */}
                    <ul className="space-y-1.5">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <motion.li 
                          key={outcomeIndex} 
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * outcomeIndex }}
                          className="flex items-center text-xs text-slate-400 group-hover:text-slate-300"
                        >
                          <motion.div
                            whileHover={{ rotate: 90, scale: 1.2 }}
                            className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-2 shadow-sm`}
                          >
                            <Zap className="w-1.5 h-1.5 text-white" />
                          </motion.div>
                          {outcome}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Reveal Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <button className="flex items-center text-xs text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-2 h-2 ml-1" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-tv-glow rounded-2xl blur-lg opacity-25 animate-pulse"></div>
            
            <div className="relative bg-tv-panel/80 backdrop-blur-xl border border-tv-accent/50 rounded-lg p-4 max-w-lg mx-auto glow-border">
              <motion.div
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-3"
              >
                <Sparkles className="w-5 h-5 text-tv-glow mx-auto" />
              </motion.div>
              
              <h3 className="text-lg font-bold text-tv-fore mb-2">
                Ready to transform your ideas into reality?
              </h3>
              
              <p className="text-tv-muted mb-4 text-sm">
                Let&apos;s collaborate to build something extraordinary together
              </p>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 shadow-lg shadow-tv-glow/25"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-10 flex items-center">
                  Let&apos;s Discuss Your Project
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </motion.div>
                </span>
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl"></div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;