"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "TechVersa transformed our outdated systems into a modern, scalable platform. Their attention to detail and technical expertise exceeded our expectations. The project was delivered on time and within budget.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Innovations",
      avatar: "SJ",
      rating: 5,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      quote: "Working with TechVersa was a game-changer for our healthcare startup. They understood our complex requirements and built a solution that not only met but exceeded our needs. Highly recommended!",
      author: "Dr. Michael Chen",
      role: "Founder & CEO",
      company: "HealthTech Solutions",
      avatar: "MC",
      rating: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      quote: "The team at TechVersa delivered an exceptional e-commerce platform that increased our online sales by 300%. Their expertise in modern web technologies and user experience design is outstanding.",
      author: "Emily Rodriguez",
      role: "VP of Digital",
      company: "Retail Enterprise",
      avatar: "ER",
      rating: 5,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      quote: "TechVersa's AI-powered solution revolutionized our data analysis capabilities. Their innovative approach and deep technical knowledge helped us gain insights we never thought possible.",
      author: "David Kim",
      role: "Data Science Director",
      company: "Analytics Corp",
      avatar: "DK",
      rating: 5,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      quote: "From concept to launch, TechVersa guided us through every step of our SaaS platform development. Their agile methodology and transparent communication made the entire process smooth and efficient.",
      author: "Lisa Thompson",
      role: "Product Manager",
      company: "SaaS Startup",
      avatar: "LT",
      rating: 5,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_50%)]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-xl"
        animate={{ 
          x: [0, -40, 20, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="h-full flex items-center justify-center">
                  <div className="relative bg-gradient-to-br from-gray-800/70 via-slate-800/50 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl w-full overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].color} opacity-20 rounded-2xl blur-xl`} />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800/70 via-slate-800/50 to-gray-900/70 rounded-2xl" />
                    
                    <div className="relative z-10">
                      {/* Quote Icon with Enhanced Design */}
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-xl flex items-center justify-center shadow-lg relative`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          <Quote className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <motion.blockquote 
                        className="text-lg md:text-xl text-white text-center mb-8 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                      </motion.blockquote>

                      {/* Author Info with Enhanced Design */}
                      <motion.div 
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {/* Enhanced Avatar */}
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-xl flex items-center justify-center shadow-lg relative`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          <span className="text-lg font-bold text-white relative z-10">
                            {testimonials[currentIndex].avatar}
                          </span>
                        </motion.div>

                        {/* Author Details */}
                        <div className="text-center md:text-left">
                          <h4 className="text-lg font-bold text-white mb-1">
                            {testimonials[currentIndex].author}
                          </h4>
                          <p className="text-gray-300 mb-1 text-sm">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className={`font-semibold bg-gradient-to-r ${testimonials[currentIndex].color} bg-clip-text text-transparent text-sm`}>
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 bg-gradient-to-r from-gray-700/50 to-slate-700/50 backdrop-blur-xl border border-gray-600/50 rounded-2xl flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Enhanced Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg shadow-blue-500/50"
                        : "bg-gray-600/50 hover:bg-gray-500/70"
                    }`}
                  />
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 bg-gradient-to-r from-gray-700/50 to-slate-700/50 backdrop-blur-xl border border-gray-600/50 rounded-2xl flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { number: "50+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
            { number: "99%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Support Available", color: "from-purple-500 to-pink-500" },
            { number: "5+", label: "Years Experience", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div className="relative bg-gradient-to-br from-gray-800/60 to-slate-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;