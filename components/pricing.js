"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Check, 
  Clock, 
  Users, 
  Target,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Download,
  Calendar,
  Lightbulb
} from "lucide-react";

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const pricingModels = [
    {
      id: "fixed-scope",
      name: "Fixed Scope",
      icon: Target,
      description: "Perfect for well-defined projects with clear requirements and timelines.",
      price: "Starting at $15,000",
      duration: "2-6 months",
      features: [
        "Detailed project specification",
        "Fixed timeline and budget",
        "Regular milestone deliveries",
        "Quality assurance included",
        "3 months post-launch support",
        "Source code ownership"
      ],
      additionalFeatures: [
        "Free discovery workshop",
        "Technical architecture review",
        "Performance optimization"
      ],
      bestFor: "MVP development, specific features, redesign projects",
      cta: "Get Fixed Quote",
      popular: false,
      savings: "Save 20% vs hourly",
      gradient: "from-blue-600 to-cyan-600",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      glowColor: "blue"
    },
    {
      id: "time-materials",
      name: "Time & Materials",
      icon: Clock,
      description: "Flexible engagement for evolving projects that need iterative development.",
      price: "Starting at $120/hour",
      duration: "Ongoing",
      features: [
        "Flexible scope and timeline",
        "Hourly billing with detailed reports",
        "Weekly progress updates",
        "Agile development methodology",
        "Priority support",
        "Monthly retainer discounts"
      ],
      additionalFeatures: [
        "Real-time project dashboard",
        "Dedicated Slack channel",
        "Weekly strategy calls"
      ],
      bestFor: "Ongoing development, feature additions, maintenance",
      cta: "Start T&M Project",
      popular: true,
      savings: "Most flexible",
      gradient: "from-purple-600 to-pink-600",
      iconBg: "from-purple-500/20 to-pink-500/20",
      glowColor: "purple"
    },
    {
      id: "dedicated-team",
      name: "Dedicated Team",
      icon: Users,
      description: "Long-term partnership with a dedicated team of experts for your project.",
      price: "Starting at $8,000/month",
      duration: "6+ months",
      features: [
        "Dedicated development team",
        "Project manager included",
        "Unlimited revisions",
        "Direct team communication",
        "Scalable team size",
        "IP ownership and transfer"
      ],
      additionalFeatures: [
        "Monthly strategy sessions",
        "Team scaling flexibility",
        "Priority feature requests"
      ],
      bestFor: "Long-term projects, complex systems, enterprise solutions",
      cta: "Build Your Team",
      popular: false,
      savings: "Save 40% vs individual contractors",
      gradient: "from-emerald-600 to-teal-600",
      iconBg: "from-emerald-500/20 to-teal-500/20",
      glowColor: "emerald"
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
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingIcons = [
    { Icon: Shield, x: 10, y: 20, delay: 0, color: "text-blue-400" },
    { Icon: Zap, x: 90, y: 15, delay: 1, color: "text-yellow-400" },
    { Icon: TrendingUp, x: 5, y: 80, delay: 2, color: "text-green-400" },
    { Icon: Sparkles, x: 95, y: 85, delay: 3, color: "text-purple-400" },
    { Icon: Lightbulb, x: 15, y: 60, delay: 0.5, color: "text-orange-400" }
  ];

  return (
    <section id="pricing" className="py-4 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-blue-900/20" />
        
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated mesh pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "50% 50%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-40`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + (i * 0.3),
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 1.25, top: 65.32, hue: 297, duration: 4.2, delay: 0.1 },
          { left: 76.95, top: 24.74, hue: 245, duration: 4.8, delay: 0.8 },
          { left: 72.42, top: 60.13, hue: 221, duration: 5.1, delay: 1.2 },
          { left: 80.29, top: 58.71, hue: 298, duration: 4.5, delay: 0.3 },
          { left: 6.64, top: 18.69, hue: 248, duration: 4.9, delay: 1.5 },
          { left: 81.22, top: 68.73, hue: 255, duration: 4.3, delay: 0.6 },
          { left: 63.30, top: 6.23, hue: 231, duration: 5.0, delay: 1.1 },
          { left: 10.57, top: 63.57, hue: 256, duration: 4.7, delay: 0.4 },
          { left: 92.12, top: 51.79, hue: 261, duration: 4.6, delay: 1.3 },
          { left: 98.68, top: 60.92, hue: 311, duration: 4.4, delay: 0.9 },
          { left: 67.08, top: 7.57, hue: 261, duration: 5.2, delay: 0.2 },
          { left: 17.90, top: 14.51, hue: 320, duration: 4.1, delay: 1.4 },
          { left: 77.11, top: 28.97, hue: 252, duration: 4.8, delay: 0.7 },
          { left: 52.82, top: 25.63, hue: 261, duration: 4.9, delay: 1.0 },
          { left: 14.29, top: 32.82, hue: 269, duration: 4.3, delay: 0.5 },
          { left: 91.00, top: 48.47, hue: 237, duration: 5.1, delay: 1.2 },
          { left: 41.94, top: 40.09, hue: 264, duration: 4.7, delay: 0.8 },
          { left: 38.31, top: 58.93, hue: 313, duration: 4.5, delay: 1.1 },
          { left: 66.37, top: 88.46, hue: 221, duration: 4.9, delay: 0.3 },
          { left: 43.29, top: 68.06, hue: 222, duration: 4.6, delay: 0.9 },
          { left: 2.26, top: 87.52, hue: 299, duration: 5.0, delay: 0.6 },
          { left: 23.46, top: 61.57, hue: 291, duration: 4.4, delay: 1.3 },
          { left: 84.98, top: 78.96, hue: 230, duration: 4.8, delay: 0.4 },
          { left: 77.58, top: 29.45, hue: 302, duration: 4.2, delay: 1.0 },
          { left: 36.44, top: 65.18, hue: 264, duration: 5.1, delay: 0.7 },
          { left: 35.49, top: 66.28, hue: 246, duration: 4.7, delay: 1.2 },
          { left: 46.33, top: 27.51, hue: 286, duration: 4.5, delay: 0.5 },
          { left: 60.94, top: 88.24, hue: 230, duration: 4.9, delay: 0.8 },
          { left: 71.21, top: 26.50, hue: 237, duration: 4.3, delay: 1.1 },
          { left: 26.43, top: 2.30, hue: 279, duration: 5.0, delay: 0.2 },
          { left: 53.62, top: 60.13, hue: 274, duration: 4.6, delay: 0.9 },
          { left: 16.68, top: 99.21, hue: 256, duration: 4.8, delay: 0.6 },
          { left: 59.07, top: 41.30, hue: 317, duration: 4.4, delay: 1.3 },
          { left: 61.94, top: 9.93, hue: 265, duration: 5.1, delay: 0.3 },
          { left: 72.23, top: 99.92, hue: 240, duration: 4.7, delay: 1.0 },
          { left: 56.03, top: 62.88, hue: 269, duration: 4.5, delay: 0.7 },
          { left: 44.16, top: 69.77, hue: 273, duration: 4.9, delay: 0.4 },
          { left: 9.73, top: 87.38, hue: 238, duration: 4.2, delay: 1.2 },
          { left: 11.87, top: 80.06, hue: 249, duration: 4.8, delay: 0.8 },
          { left: 81.63, top: 43.95, hue: 239, duration: 4.6, delay: 0.5 }
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
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Pricing & Plans</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
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
              Engagement
            </motion.span>
            <br />
            <span className="text-white">Models</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Choose the engagement model that perfectly aligns with your project needs, timeline, and budget
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {pricingModels.map((model, index) => (
            <motion.div
              key={model.id}
              variants={cardVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge with Enhanced Design */}
              {model.popular && (
                <motion.div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge className={`bg-gradient-to-r ${model.gradient} text-white px-6 py-2 flex items-center gap-2 shadow-lg`}>
                    <Star className="w-4 h-4" />
                    <span className="font-bold">Most Popular</span>
                    <Sparkles className="w-3 h-3" />
                  </Badge>
                </motion.div>
              )}

              {/* Savings Badge */}
              <motion.div 
                className="absolute -top-3 -right-3 z-20"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {model.savings}
                </div>
              </motion.div>

              <Card className={`h-full relative overflow-hidden transition-all duration-700 group-hover:scale-[1.02] ${
                model.popular 
                  ? "bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20" 
                  : "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-purple-400/50"
              } backdrop-blur-xl flex flex-col`}>
                
                {/* Dynamic background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${model.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${model.glowColor === 'blue' ? '#3b82f6' : model.glowColor === 'purple' ? '#8b5cf6' : '#10b981'}20, transparent)`,
                  }}
                />

                <CardHeader className="text-center pb-4 relative z-10 flex-shrink-0">
                  {/* Enhanced Icon with Complex Animation */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${model.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    animate={hoveredCard === model.id ? {
                      boxShadow: [
                        "0 0 0 0 rgba(139, 92, 246, 0)",
                        "0 0 0 10px rgba(139, 92, 246, 0.1)",
                        "0 0 0 0 rgba(139, 92, 246, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: hoveredCard === model.id ? Infinity : 0 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${model.iconBg} rounded-3xl blur-lg opacity-50`} />
                    <model.icon className="w-10 h-10 text-white relative z-10" />
                    
                    {/* Rotating rings */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                      animate={hoveredCard === model.id ? { rotate: 360 } : {}}
                      transition={{ duration: 3, repeat: hoveredCard === model.id ? Infinity : 0, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-2 border border-white/10 rounded-2xl"
                      animate={hoveredCard === model.id ? { rotate: -360 } : {}}
                      transition={{ duration: 4, repeat: hoveredCard === model.id ? Infinity : 0, ease: "linear" }}
                    />
                  </motion.div>

                  <CardTitle className="text-xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {model.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    {model.description}
                  </CardDescription>

                  {/* Enhanced Price Section */}
                  <motion.div 
                    className={`bg-gradient-to-r ${model.iconBg} rounded-xl p-4 border border-white/10 relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
                    <div className={`text-3xl font-bold font-display bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent relative z-10`}>
                      {model.price}
                    </div>
                    <div className="text-sm text-gray-400 mt-1 relative z-10 flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      {model.duration}
                    </div>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10 flex-grow flex flex-col px-6">
                  {/* Enhanced Features */}
                  <div className="flex-grow">
                    <motion.h4 
                      className="text-sm font-bold text-white mb-4 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${model.gradient} rounded-full`} />
                      Core Features:
                    </motion.h4>
                    <ul className="space-y-3">
                      {model.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start gap-3 group/item"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        >
                          <motion.div
                            className={`w-5 h-5 bg-gradient-to-r ${model.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </motion.div>
                          <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Additional Premium Features */}
                    <motion.div 
                      className="mt-6 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h5 className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Bonus Inclusions:
                      </h5>
                      <ul className="space-y-2">
                        {model.additionalFeatures.map((feature, index) => (
                          <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Enhanced Best For */}
                  <div className="pt-4 border-t border-white/10 flex-shrink-0">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      Perfect For:
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed bg-gradient-to-r from-white/5 to-transparent p-3 rounded-lg border border-white/5">
                      {model.bestFor}
                    </p>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="flex-shrink-0 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full h-14 ${
                          model.popular
                            ? `bg-gradient-to-r ${model.gradient} text-white hover:opacity-90 shadow-2xl shadow-purple-500/25`
                            : `bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 border border-white/10`
                        } font-bold text-lg group/btn transition-all duration-300 relative overflow-hidden rounded-xl`}
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {model.cta}
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl">
            {/* Enhanced background decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
            
            {/* Floating elements */}
            {[
              { left: 28.92, top: 73.98, duration: 3.2, delay: 0.1 },
              { left: 64.99, top: 37.39, duration: 4.1, delay: 0.8 },
              { left: 47.60, top: 74.94, duration: 3.7, delay: 1.2 },
              { left: 45.89, top: 55.72, duration: 4.3, delay: 0.3 },
              { left: 40.79, top: 58.52, duration: 3.9, delay: 1.5 },
              { left: 34.01, top: 64.13, duration: 4.0, delay: 0.6 },
              { left: 59.76, top: 39.41, duration: 3.5, delay: 1.1 },
              { left: 40.95, top: 32.99, duration: 4.2, delay: 0.4 }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
              >
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-purple-300">Custom Solutions</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold font-display mb-3 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Need Something
                </span>
                <br />
                <span className="text-white">Unique?</span>
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-4 max-w-xl mx-auto text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Every project tells a different story. Let's craft a custom engagement model that aligns perfectly with your vision, timeline, and budget constraints.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 shadow-2xl shadow-purple-500/25 flex items-center gap-2 relative overflow-hidden group"
                  onClick={() => {
                    // Redirect to contact page
                    window.location.href = '/contact';
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/70 px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 backdrop-blur-sm flex items-center gap-2 relative overflow-hidden group"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Chapter 6 assignment.pdf';
                    link.download = 'TechVersa-Pricing-Guide.pdf';
                    link.click();
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-purple-400/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Guide</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Additional Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Shield,
              title: "Risk-Free Guarantee",
              description: "30-day money-back guarantee on all fixed-scope projects",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Zap,
              title: "Lightning Fast Delivery",
              description: "Average project delivery 40% faster than industry standard",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: TrendingUp,
              title: "Scalable Solutions",
              description: "Built to grow with your business from MVP to enterprise",
              color: "from-blue-500 to-cyan-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 rounded-xl p-6 text-center backdrop-blur-sm hover:border-purple-400/50 transition-all duration-500 group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;