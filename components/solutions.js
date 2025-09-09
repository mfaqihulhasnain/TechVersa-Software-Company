"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Layers,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Globe,
  Code2,
  Database,
  Cloud,
  Cpu,
  Network,
  Lock,
  Rocket,
  BarChart3,
  Lightbulb
} from "lucide-react";

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("fintech");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const industries = [
    {
      id: "fintech",
      name: "FinTech",
      icon: CreditCard,
      description: "Secure, scalable financial technology solutions that drive innovation in banking, payments, and investment platforms.",
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500/20 to-emerald-500/20",
      glowColor: "green",
      solutions: [
        {
          title: "Digital Banking Platform",
          description: "Complete online banking solution with real-time transactions, account management, and security features.",
          features: ["Real-time Transactions", "Multi-factor Authentication", "Compliance Ready"],
          icon: Database,
          techStack: ["React", "Node.js", "PostgreSQL", "AWS"]
        },
        {
          title: "Payment Processing System",
          description: "Robust payment gateway with multi-currency support, fraud detection, and compliance management.",
          features: ["Multi-currency Support", "Fraud Detection", "PCI DSS Compliant"],
          icon: Shield,
          techStack: ["Python", "Redis", "Kafka", "Docker"]
        },
        {
          title: "Investment Analytics Dashboard",
          description: "Real-time portfolio tracking, risk analysis, and automated trading algorithms.",
          features: ["Portfolio Tracking", "Risk Analysis", "Automated Trading"],
          icon: BarChart3,
          techStack: ["Vue.js", "Python", "TensorFlow", "MongoDB"]
        }
      ]
    },
    {
      id: "healthtech",
      name: "HealthTech",
      icon: Heart,
      description: "Healthcare technology solutions that improve patient care, streamline operations, and ensure regulatory compliance.",
      color: "from-red-500 to-pink-600",
      bgGradient: "from-red-500/10 to-pink-500/10",
      iconBg: "from-red-500/20 to-pink-500/20",
      glowColor: "red",
      solutions: [
        {
          title: "Electronic Health Records (EHR)",
          description: "Comprehensive patient data management with HIPAA compliance and interoperability features.",
          features: ["HIPAA Compliant", "Interoperability", "Data Analytics"],
          icon: Database,
          techStack: ["Angular", "Java", "Oracle", "Azure"]
        },
        {
          title: "Telemedicine Platform",
          description: "Video consultation system with appointment scheduling, prescription management, and billing integration.",
          features: ["Video Consultations", "Appointment System", "Billing Integration"],
          icon: Network,
          techStack: ["React Native", "WebRTC", "Node.js", "MySQL"]
        },
        {
          title: "Medical Device Integration",
          description: "IoT connectivity for medical devices with real-time monitoring and alert systems.",
          features: ["IoT Connectivity", "Real-time Monitoring", "Alert Systems"],
          icon: Cpu,
          techStack: ["IoT Core", "MQTT", "InfluxDB", "Grafana"]
        }
      ]
    },
    {
      id: "edtech",
      name: "EdTech",
      icon: GraduationCap,
      description: "Educational technology platforms that enhance learning experiences and streamline educational administration.",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      iconBg: "from-blue-500/20 to-indigo-500/20",
      glowColor: "blue",
      solutions: [
        {
          title: "Learning Management System (LMS)",
          description: "Comprehensive platform for course delivery, student tracking, and assessment management.",
          features: ["Course Delivery", "Student Tracking", "Assessment Tools"],
          icon: Code2,
          techStack: ["React", "Django", "PostgreSQL", "Redis"]
        },
        {
          title: "Virtual Classroom Platform",
          description: "Interactive online learning environment with video conferencing, whiteboard, and collaboration tools.",
          features: ["Video Conferencing", "Interactive Whiteboard", "Collaboration Tools"],
          icon: Network,
          techStack: ["WebRTC", "Socket.io", "Canvas API", "MongoDB"]
        },
        {
          title: "Student Information System",
          description: "Complete student lifecycle management from enrollment to graduation with analytics and reporting.",
          features: ["Lifecycle Management", "Analytics & Reporting", "Automated Workflows"],
          icon: BarChart3,
          techStack: ["Vue.js", "Laravel", "MySQL", "Elasticsearch"]
        }
      ]
    },
    {
      id: "ecommerce",
      name: "E‑commerce",
      icon: ShoppingCart,
      description: "E-commerce solutions that drive sales, optimize user experience, and scale with your business growth.",
      color: "from-orange-500 to-yellow-600",
      bgGradient: "from-orange-500/10 to-yellow-500/10",
      iconBg: "from-orange-500/20 to-yellow-500/20",
      glowColor: "orange",
      solutions: [
        {
          title: "Multi-Channel E-commerce Platform",
          description: "Unified platform supporting web, mobile, and marketplace integration with inventory management.",
          features: ["Multi-channel Support", "Inventory Management", "Marketplace Integration"],
          icon: Globe,
          techStack: ["Next.js", "Microservices", "Kubernetes", "PostgreSQL"]
        },
        {
          title: "Personalization Engine",
          description: "AI-powered product recommendations, dynamic pricing, and personalized shopping experiences.",
          features: ["AI Recommendations", "Dynamic Pricing", "Personalized UX"],
          icon: Lightbulb,
          techStack: ["Python", "TensorFlow", "Apache Spark", "Cassandra"]
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end logistics tracking, warehouse management, and automated fulfillment systems.",
          features: ["Logistics Tracking", "Warehouse Management", "Automated Fulfillment"],
          icon: TrendingUp,
          techStack: ["React", "Spring Boot", "Apache Kafka", "TimescaleDB"]
        }
      ]
    },
    {
      id: "saas",
      name: "SaaS",
      icon: Layers,
      description: "Software-as-a-Service solutions that provide scalable, subscription-based applications for modern businesses.",
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      iconBg: "from-purple-500/20 to-violet-500/20",
      glowColor: "purple",
      solutions: [
        {
          title: "Multi-Tenant SaaS Platform",
          description: "Scalable architecture supporting multiple customers with data isolation and custom branding.",
          features: ["Multi-tenant Architecture", "Data Isolation", "Custom Branding"],
          icon: Cloud,
          techStack: ["React", "Node.js", "Docker", "AWS EKS"]
        },
        {
          title: "API-First Application",
          description: "RESTful and GraphQL APIs with comprehensive documentation and developer tools.",
          features: ["RESTful & GraphQL", "API Documentation", "Developer Tools"],
          icon: Code2,
          techStack: ["GraphQL", "FastAPI", "OpenAPI", "Kong Gateway"]
        },
        {
          title: "Analytics & Reporting Suite",
          description: "Real-time dashboards, custom reports, and business intelligence tools for data-driven decisions.",
          features: ["Real-time Dashboards", "Custom Reports", "Business Intelligence"],
          icon: BarChart3,
          techStack: ["D3.js", "Apache Superset", "ClickHouse", "Apache Airflow"]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 15, scale: 0.9 },
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
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
    { Icon: Code2, x: 10, y: 20, delay: 0, color: "text-blue-400" },
    { Icon: Database, x: 90, y: 15, delay: 1, color: "text-green-400" },
    { Icon: Lock, x: 95, y: 85, delay: 3, color: "text-red-400" },
    { Icon: Rocket, x: 15, y: 60, delay: 0.5, color: "text-orange-400" }
  ];

  const activeIndustry = industries.find(ind => ind.id === activeTab);

  return (
    <section id="solutions" className="py-6 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/20" />
        
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-cyan-500/8 to-transparent rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated tech grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Interactive Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} opacity-30`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: [6.2, 7.1, 6.8, 7.3, 6.5, 7.0, 6.9, 6.4, 7.2, 6.7][i % 10],
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="w-8 h-8 drop-shadow-lg" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 72.1, top: 65.9, hue: 317, duration: 5.2, delay: 0.1 },
          { left: 91.4, top: 33.8, hue: 328, duration: 6.8, delay: 1.2 },
          { left: 53.1, top: 62.3, hue: 277, duration: 7.1, delay: 2.3 },
          { left: 87.5, top: 2.1, hue: 225, duration: 5.9, delay: 0.8 },
          { left: 69.3, top: 70.2, hue: 316, duration: 6.4, delay: 1.7 },
          { left: 60.2, top: 19.7, hue: 272, duration: 7.3, delay: 0.5 },
          { left: 88.3, top: 57.0, hue: 292, duration: 6.1, delay: 2.1 },
          { left: 57.6, top: 13.4, hue: 313, duration: 5.7, delay: 1.4 },
          { left: 86.6, top: 38.5, hue: 223, duration: 6.9, delay: 0.3 },
          { left: 8.19, top: 2.4, hue: 342, duration: 7.0, delay: 1.9 },
          { left: 77.1, top: 69.5, hue: 217, duration: 5.8, delay: 0.7 },
          { left: 27.5, top: 67.8, hue: 279, duration: 6.6, delay: 2.0 },
          { left: 61.4, top: 45.7, hue: 236, duration: 7.2, delay: 1.1 },
          { left: 15.0, top: 51.8, hue: 261, duration: 5.5, delay: 0.9 },
          { left: 9.42, top: 82.2, hue: 351, duration: 6.3, delay: 1.6 },
          { left: 50.5, top: 44.2, hue: 201, duration: 7.4, delay: 0.4 },
          { left: 32.3, top: 96.9, hue: 263, duration: 5.6, delay: 2.2 },
          { left: 6.07, top: 42.2, hue: 271, duration: 6.7, delay: 1.3 },
          { left: 72.6, top: 65.0, hue: 242, duration: 7.5, delay: 0.6 },
          { left: 43.5, top: 32.6, hue: 333, duration: 5.4, delay: 1.8 },
          { left: 54.9, top: 12.4, hue: 289, duration: 6.2, delay: 0.2 },
          { left: 93.5, top: 12.5, hue: 289, duration: 7.6, delay: 1.5 },
          { left: 79.0, top: 6.9, hue: 220, duration: 5.3, delay: 2.4 },
          { left: 14.1, top: 50.3, hue: 324, duration: 6.5, delay: 0.8 },
          { left: 91.3, top: 74.6, hue: 217, duration: 7.7, delay: 1.0 },
          { left: 41.1, top: 7.5, hue: 319, duration: 5.1, delay: 2.1 },
          { left: 47.5, top: 80.7, hue: 263, duration: 6.8, delay: 0.5 },
          { left: 2.37, top: 34.1, hue: 316, duration: 7.8, delay: 1.7 },
          { left: 50.9, top: 28.1, hue: 353, duration: 5.9, delay: 0.3 },
          { left: 25.1, top: 16.1, hue: 252, duration: 6.4, delay: 2.0 },
          { left: 32.0, top: 58.2, hue: 333, duration: 7.9, delay: 1.2 },
          { left: 9.44, top: 50.7, hue: 318, duration: 5.0, delay: 0.7 },
          { left: 48.2, top: 0.1, hue: 236, duration: 6.1, delay: 1.9 },
          { left: 5.48, top: 25.3, hue: 318, duration: 8.0, delay: 0.4 },
          { left: 34.9, top: 87.4, hue: 293, duration: 5.7, delay: 1.4 },
          { left: 45.7, top: 9.3, hue: 225, duration: 6.3, delay: 2.3 },
          { left: 82.2, top: 94.5, hue: 223, duration: 8.1, delay: 0.9 },
          { left: 27.7, top: 45.2, hue: 271, duration: 5.8, delay: 1.6 },
          { left: 89.1, top: 24.7, hue: 315, duration: 6.6, delay: 0.1 },
          { left: 60.8, top: 65.1, hue: 334, duration: 8.2, delay: 2.2 },
          { left: 55.2, top: 68.5, hue: 333, duration: 5.6, delay: 1.1 },
          { left: 46.0, top: 83.2, hue: 316, duration: 6.9, delay: 0.6 },
          { left: 20.2, top: 74.5, hue: 291, duration: 8.3, delay: 1.8 },
          { left: 42.4, top: 64.3, hue: 221, duration: 5.5, delay: 0.2 },
          { left: 37.4, top: 0.8, hue: 204, duration: 7.0, delay: 2.4 },
          { left: 65.9, top: 89.2, hue: 337, duration: 8.4, delay: 1.3 },
          { left: 35.0, top: 52.5, hue: 347, duration: 5.4, delay: 0.8 },
          { left: 2.66, top: 24.3, hue: 345, duration: 7.1, delay: 1.7 },
          { left: 69.3, top: 5.8, hue: 331, duration: 8.5, delay: 0.5 },
          { left: 13.9, top: 48.9, hue: 249, duration: 5.3, delay: 2.0 }
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
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
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
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full px-6 py-3 mb-4 backdrop-blur-sm"
          >
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Industry Solutions</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
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
              Solutions
            </motion.span>
            <br />
            <span className="text-white">& Industries</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed "
          >
            Specialized solutions tailored to your industry&apos;s unique challenges and opportunities
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-sm mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Enhanced Tab List */}
            <div className="relative mb-0 pb-0">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-4 md:p-6 shadow-2xl">
                <TabsList className="grid grid-cols-2 md:flex md:flex-row w-full bg-transparent gap-2 h-auto">
                  {industries.map((industry, index) => (
                    <motion.div key={industry.id} variants={itemVariants} className="flex-1">
                      <TabsTrigger
                        value={industry.id}
                        className={`
                          relative flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl 
                          transition-all duration-300 w-full min-h-[70px] md:min-h-[100px]
                          ${activeTab === industry.id 
                            ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/60 shadow-lg text-white' 
                            : 'hover:bg-slate-700/30 text-gray-400 hover:text-gray-300'
                          }
                        `}
                      >
                        {/* Enhanced Icon Container for Active Tab */}
                        {activeTab === industry.id ? (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 relative bg-gradient-to-br ${industry.iconBg} shadow-md overflow-hidden`}
                          >
                            <industry.icon className="w-4 h-4 md:w-6 md:h-6 text-white drop-shadow-lg relative z-20" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-lg blur-2xl opacity-40 z-0`} />
                            
                            {/* Rotating rings for active tab */}
                            <motion.div
                              className="absolute inset-0 border-2 border-white/20 rounded-lg z-10"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                              className="absolute inset-1 border border-white/10 rounded-lg z-10"
                              animate={{ rotate: [360, 0] }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        ) : (
                          <div className={`
                            w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300
                            bg-slate-700/40
                          `}>
                            <industry.icon className="w-4 h-4 md:w-6 md:h-6" />
                          </div>
                        )}
                        
                        {/* Enhanced Label for Active Tab */}
                        <span className={`text-xs md:text-sm font-semibold text-center leading-tight transition-all duration-300 ${
                          activeTab === industry.id 
                            ? `bg-gradient-to-r ${industry.color} bg-clip-text text-transparent` 
                            : ''
                        }`}>
                          {industry.name}
                        </span>

                        {/* Enhanced Active Indicator */}
                        {activeTab === industry.id && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-xl border border-white/10 shadow-lg`}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}

                        {/* Glow Effect for Active Tab */}
                        {activeTab === industry.id && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            animate={{
                              boxShadow: [
                                `0 0 0 0 rgba(59, 130, 246, 0)`,
                                `0 0 0 2px rgba(59, 130, 246, 0.3)`,
                                `0 0 0 0 rgba(59, 130, 246, 0)`
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>
              </div>
            </div>

            {/* Enhanced Tab Content */}
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-4 md:mt-6">
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-20 md:space-y-24"
                >
                  {/* Enhanced Industry Header */}
                  <div className="text-center relative mb-16 md:mb-24 pt-0 md:pt-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-10 relative bg-gradient-to-br ${industry.iconBg} backdrop-blur-sm shadow-2xl overflow-hidden`}
                    >
                      <industry.icon className="w-12 h-12 text-white drop-shadow-lg relative z-20" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-3xl blur-2xl opacity-40 z-0`} />
                      
                      {/* Rotating rings */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/20 rounded-3xl z-10"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-2 border border-white/10 rounded-3xl z-10"
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-5xl md:text-6xl font-bold font-display mb-10 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {industry.name}{" "}
                      <span className={`bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                        Solutions
                      </span>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {industry.description}
                    </motion.p>
                  </div>

                  {/* Enhanced Solutions Grid */}
                  <div className="flex justify-center w-full">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-fit"
                    >
                    {industry.solutions.map((solution, index) => (
                      <motion.div
                        key={solution.title}
                        variants={cardVariants}
                        whileHover={{ 
                          y: -15, 
                          scale: 1.03,
                          rotateY: 8,
                          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredCard(solution.title)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Card className={`h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 rounded-3xl overflow-hidden transition-all duration-700 hover:border-slate-600/60 hover:shadow-2xl backdrop-blur-xl relative group`}>
                          {/* Dynamic background overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                          
                          {/* Animated border glow */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={hoveredCard === solution.title ? {
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0)",
                                "0 0 0 2px rgba(59, 130, 246, 0.3)",
                                "0 0 0 0 rgba(59, 130, 246, 0)"
                              ]
                            } : {}}
                            transition={{ duration: 2, repeat: hoveredCard === solution.title ? Infinity : 0 }}
                          />
                          
                          {/* Enhanced Card Header */}
                          <CardHeader className="relative p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${industry.iconBg} group-hover:shadow-lg transition-all duration-300 relative`}
                              >
                                <div className={`absolute inset-0 bg-gradient-to-br ${industry.iconBg} blur-lg opacity-50`} />
                                <solution.icon className="w-6 h-6 text-white relative z-10" />
                              </motion.div>
                              
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 mb-2 leading-tight">
                                  {solution.title}
                                </CardTitle>
                                <motion.div 
                                  className={`h-1 bg-gradient-to-r ${industry.color} rounded-full origin-left`}
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  transition={{ duration: 0.8, delay: index * 0.1 }}
                                />
                              </div>
                            </div>
                          </CardHeader>
                          
                          {/* Enhanced Card Content */}
                          <CardContent className="relative p-6 pt-0 flex flex-col flex-grow">
                            <CardDescription className="text-gray-300 group-hover:text-white/90 transition-colors duration-300 mb-6 leading-relaxed text-sm">
                              {solution.description}
                            </CardDescription>
                            
                            {/* Enhanced Features List */}
                            <div className="mb-6 flex-grow">
                              <h5 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Key Features:</h5>
                              <ul className="space-y-2">
                                {solution.features.map((feature, featureIndex) => (
                                  <motion.li 
                                    key={featureIndex}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * featureIndex }}
                                    className="flex items-center text-xs text-gray-300 group-hover:text-white/80 transition-colors duration-300"
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.3, rotate: 360 }}
                                      transition={{ duration: 0.4 }}
                                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mr-3 flex-shrink-0`}
                                    >
                                      <CheckCircle className="w-2 h-2 text-white" />
                                    </motion.div>
                                    <span className="font-medium">{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Tech Stack */}
                            <motion.div 
                              className="mb-4 pt-3 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 }}
                            >
                              <h5 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                                <Code2 className="w-2 h-2" />
                                Tech Stack:
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {solution.techStack.map((tech, techIndex) => (
                                  <motion.span
                                    key={tech}
                                    className={`px-2 py-1 bg-gradient-to-r ${industry.iconBg} text-white text-xs font-semibold rounded-full border border-white/10`}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + techIndex * 0.05 }}
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>

                            {/* Hover Reveal CTA */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ 
                                opacity: hoveredCard === solution.title ? 1 : 0,
                                y: hoveredCard === solution.title ? 0 : 20
                              }}
                              transition={{ duration: 0.3 }}
                              className="pt-3 border-t border-slate-700/50"
                            >
                              <button className="flex items-center text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-300 group/btn">
                                <Sparkles className="w-3 h-3 mr-1 text-blue-400" />
                                <span>Explore Solution</span>
                                <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform text-blue-400" />
                              </button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-24"
        >
          <div className="relative inline-block max-w-4xl mx-auto">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"
            />
            
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              {/* Floating decorative elements */}
              {[
                { left: 84.0, top: 40.5, duration: 4.2, delay: 0.1 },
                { left: 74.1, top: 26.6, duration: 5.8, delay: 0.8 },
                { left: 45.8, top: 36.5, duration: 4.7, delay: 1.5 },
                { left: 47.5, top: 41.4, duration: 5.3, delay: 0.3 },
                { left: 61.6, top: 31.5, duration: 4.9, delay: 1.2 },
                { left: 80.5, top: 48.3, duration: 5.6, delay: 0.6 },
                { left: 75.3, top: 26.8, duration: 4.4, delay: 1.8 },
                { left: 59.1, top: 31.1, duration: 5.1, delay: 0.4 },
                { left: 69.6, top: 48.9, duration: 4.8, delay: 1.1 },
                { left: 55.7, top: 18.4, duration: 5.7, delay: 0.9 },
                { left: 83.7, top: 25.6, duration: 4.6, delay: 1.6 },
                { left: 51.8, top: 73.9, duration: 5.4, delay: 0.2 }
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
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
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-2"
              >
                <Lightbulb className="w-6 h-6 text-yellow-400 mx-auto drop-shadow-lg" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold font-display mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Don&apos;t see your
                </span>
                <br />
                <span className="text-white">industry?</span>
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-4 max-w-xl mx-auto text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Every industry tells a different story. Let&apos;s craft a custom solution that aligns perfectly with your industry&apos;s unique challenges, regulations, and growth opportunities.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 shadow-2xl shadow-purple-500/25 overflow-hidden"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Chapter 6 assignment.pdf';
                    link.download = 'TechVersa-Solutions-Guide.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/70 px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 backdrop-blur-sm flex items-center gap-2 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-purple-400/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Rocket className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Guide</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                className="mt-12 pt-8 border-t border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-400 text-sm mb-6 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Trusted by 200+ companies across 15+ industries
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                  {["HealthCorp", "FinanceGlobal", "EduTech Solutions", "RetailNext", "CloudVentures"].map((company, index) => (
                    <motion.div
                      key={company}
                      className="text-gray-300 font-bold text-base cursor-pointer"
                      whileHover={{ 
                        scale: 1.15, 
                        opacity: 1,
                        color: "#a855f7",
                      }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.5, y: 0 }}
                      delay={{ delay: 0.7 + index * 0.1 }}
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: "50+", label: "Industries Served", icon: Globe },
            { number: "500+", label: "Solutions Delivered", icon: Rocket },
            { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
            { number: "24/7", label: "Support Available", icon: Users }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 rounded-xl p-4 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;