"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "pricing",
      question: "How do you determine project pricing?",
      answer: "Our pricing is based on several factors including project complexity, timeline, team size, and technology requirements. We offer three engagement models: Fixed Scope for well-defined projects, Time & Materials for flexible development, and Dedicated Team for long-term partnerships. We provide detailed quotes after understanding your specific requirements."
    },
    {
      id: "timeline",
      question: "What's the typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while a complex web application could take 3-6 months. We provide detailed project roadmaps with milestones during the discovery phase. Our agile methodology ensures regular deliveries and allows for adjustments along the way."
    },
    {
      id: "ip-ownership",
      question: "Who owns the intellectual property?",
      answer: "You own all intellectual property rights to the code, designs, and deliverables we create for your project. We provide full source code access and documentation upon project completion. Our contracts clearly outline IP ownership and transfer terms to protect your interests."
    },
    {
      id: "maintenance",
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support services including bug fixes, security updates, performance optimization, and feature enhancements. We provide 3 months of post-launch support with all projects, and offer ongoing maintenance packages for long-term support needs."
    },
    {
      id: "team-size",
      question: "What size team will work on my project?",
      answer: "Team size depends on project requirements and timeline. Typically, we assign 2-5 specialists including developers, designers, and a project manager. For larger projects, we can scale the team accordingly. With our Dedicated Team model, you get a consistent team focused solely on your project."
    },
    {
      id: "communication",
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular updates, progress reports, and scheduled meetings. We use project management tools to track progress and provide real-time visibility. You'll have direct access to your project manager and can communicate with the development team as needed."
    },
    {
      id: "technology",
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely! We&apos;re experienced with a wide range of technologies and can integrate with your existing systems. We can also recommend modern alternatives if they would better serve your project goals. Our team stays current with the latest technologies and best practices."
    },
    {
      id: "scalability",
      question: "How do you ensure the solution is scalable?",
      answer: "We design all solutions with scalability in mind, using modern architecture patterns, cloud infrastructure, and performance optimization techniques. We conduct load testing and provide recommendations for scaling as your business grows. Our solutions are built to handle increased traffic and data volume."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="faq" className="py-16 bg-tv-panel/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-tv-muted max-w-3xl mx-auto">
            Get answers to common questions about our services, process, and engagement models
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <AccordionItem 
                  value={faq.id}
                  className="bg-tv-bg/50 border border-tv-accent/30 rounded-xl px-6 glow-border hover:border-tv-accent/60 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-tv-fore hover:text-tv-glow transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-tv-muted pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-tv-bg/50 border border-tv-accent/30 rounded-2xl p-8 glow-border">
            <h3 className="text-2xl font-bold font-display mb-4 text-tv-fore">
              Still Have Questions?
            </h3>
            <p className="text-tv-muted mb-6">
              We&apos;re here to help! Schedule a free consultation to discuss your project and get personalized answers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
