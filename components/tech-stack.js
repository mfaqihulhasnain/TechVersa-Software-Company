"use client";

import { motion } from "framer-motion";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiAmazon,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "shadcn/ui", icon: SiReact, color: "#61DAFB" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#FFD43B" },
        { name: "FastAPI", icon: SiPython, color: "#009688" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "REST APIs", icon: SiNodedotjs, color: "#339933" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4A90A4" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Prisma", icon: SiPrisma, color: "#2D5A87" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
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
    <section id="tech-stack" className="relative py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(147,51,234,0.06),transparent_50%)]" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

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

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block relative"
          >
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6 relative">
              Tech Stack
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cutting-edge technologies and tools powering next-generation applications
          </motion.p>
        </motion.div>

        {/* Enhanced Tech Stack Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="group relative"
            >
              {/* Category Card */}
              <div className="relative bg-gradient-to-br from-gray-800/60 via-slate-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-700" />
                
                {/* Category Header */}
                <div className="text-center mb-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.category}
                  </motion.h3>
                  <motion.div 
                    className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  />
                </div>

                {/* Tech Items Grid */}
                <div className="grid grid-cols-2 gap-3 flex-grow">
                  {category.items.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      className="relative group/item"
                    >
                      <div className="bg-gradient-to-br from-gray-700/50 to-slate-800/50 border border-gray-600/30 rounded-xl p-4 text-center transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden">
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        
                        {/* Tech Logo Container */}
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-gray-600/30 to-slate-700/30 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover/item:bg-gradient-to-br group-hover/item:from-gray-500/40 group-hover/item:to-slate-600/40 relative"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Icon Glow Effect */}
                          <div 
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur-xl"
                            style={{ backgroundColor: tech.color + '20' }}
                          />
                          <tech.icon 
                            className="w-6 h-6 transition-all duration-300 relative z-10" 
                            style={{ color: tech.color }}
                          />
                        </motion.div>
                        
                        {/* Tech Name */}
                        <h4 className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-br from-gray-800/60 via-slate-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Always Learning, Always Evolving
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              We stay at the forefront of technology, continuously adopting new tools and frameworks 
              that help us deliver better solutions for our clients.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {["Latest Versions", "Best Practices", "Security First", "Performance Optimized"].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-200 font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;