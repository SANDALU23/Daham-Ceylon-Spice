import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Award, Leaf } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Certification = memo(() => {
  const certificates = [
    {
      url: "https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/cerificate%201.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL2NlcmlmaWNhdGUgMS5qcGciLCJpYXQiOjE3Nzc2MjkwNjQsImV4cCI6MjA5Mjk4OTA2NH0.ljgy0TJ3OvTiDqCsrxVYvFCRuSTq6-tBMYmlzlMg3Ho",
      title: "Export License"
    },
    {
      url: "https://yqdppggiipjbpowzrhok.supabase.co/storage/v1/object/sign/Logo/certificate2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNmE4YjRlNC1jMTY2LTQwMGEtYTI4Mi1mYWY0YjY3OGE1YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvL2NlcnRpZmljYXRlMi5qcGciLCJpYXQiOjE3Nzc2Mjk0MDYsImV4cCI6MjA5Mjk4OTQwNn0.ugFHERbFkJlWUhMNcZnRPM1CKZ2cKYRRoFVk80TjRGg",
      title: "Business Registration"
    }
  ];

  const certifications = [
    { name: "Organic Certified", icon: <ShieldCheck className="w-10 h-10 text-brand-gold" />, desc: "Certified by international organic standards for purity and sustainability." },
    { name: "Fair Trade", icon: <Globe className="w-10 h-10 text-brand-gold" />, desc: "Ensuring fair compensation and ethical treatment for all our farming partners." },
    { name: "ISO 22000", icon: <Award className="w-10 h-10 text-brand-gold" />, desc: "Global food safety management standards strictly followed in our facilities." },
    { name: "Non-GMO", icon: <Leaf className="w-10 h-10 text-brand-gold" />, desc: "Pure, natural seeds with no genetic modification, preserving original Ceylon flavor." }
  ];

  return (
    <main className="py-32 px-6 bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Quality Guaranteed</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-brand-dark dark:text-brand-gold">Our Certifications</h2>
          <p className="text-muted dark:text-white/50 max-w-2xl mx-auto">
            We hold ourselves to the highest global standards to ensure that every grain of spice leaving our facility is of the utmost quality and safety.
          </p>
        </motion.div>

        {/* Certificate Image Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group w-full">
                <div className="absolute -inset-2 bg-brand-gold/10 rounded-2xl blur-xl group-hover:bg-brand-gold/20 transition-all duration-500" />
                <div className="relative bg-white dark:bg-white/5 p-4 md:p-6 rounded-2xl border border-brand-dark/10 dark:border-white/10 shadow-2xl h-full flex flex-col">
                  <div className="flex-1 overflow-hidden rounded-lg">
                    <img 
                      src={cert.url} 
                      alt={`Offical Certification of Daham Ceylon Spice - ${cert.title}`} 
                      className="w-full h-full object-contain bg-white/50 dark:bg-white/5"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-brand-dark/10 dark:border-white/10 pt-6">
                    <div className="flex items-center gap-4 text-center">
                      <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0" />
                      <div className="text-left">
                        <h4 className="font-bold uppercase tracking-widest text-xs">{cert.title}</h4>
                        <p className="text-[10px] text-muted dark:text-white/40">Registered (PVT) LTD Exporter</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open(cert.url, '_blank')}
                      className="w-full px-6 py-3 bg-brand-dark dark:bg-brand-gold text-white dark:text-brand-dark text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full"
                    >
                      View Large Version
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-8 border border-brand-dark/10 dark:border-white/10 rounded-xl hover:border-brand-gold/50 transition-colors group text-center shadow-sm hover:shadow-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-gold">{cert.name}</h3>
              <p className="text-muted dark:text-white/40 text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
});

export default Certification;
