import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.985-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface ProductCardProps {
  title: string;
  image: string;
  tag: string;
  description: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ProductCard = memo(({ title, image, tag, description }: ProductCardProps) => (
  <motion.div 
    variants={itemVariants}
    className="group bg-white dark:bg-zinc-900 p-4 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 flex flex-col h-full"
  >
    <div className="relative aspect-square overflow-hidden mb-5 rounded-2xl bg-gray-50 dark:bg-zinc-800">
      <div className="absolute top-4 right-4 z-10">
        <span className="px-4 py-2 bg-[#3b4226] text-[#d4af37] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
          {tag}
        </span>
      </div>
      <img 
        src={`${image}&auto=format&fit=crop&q=80&w=600`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
    </div>
    <div className="px-2 pb-2 flex-grow flex flex-col">
      <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-gold transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <div className="flex flex-col gap-3 mt-auto">
        <a 
          href={`https://wa.me/64223104144?text=Inquiry about ${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-brand-gold text-brand-dark text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-mustard transition-colors rounded-xl shadow-sm hover:shadow-md"
        >
          <WhatsappIcon size={16} /> Whatsapp for Quote
        </a>
        <Link 
          to="/contact"
          className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-brand-gold dark:hover:text-brand-gold transition-colors text-center block mt-2"
        >
          Inquire for Bulk
        </Link>
      </div>
    </div>
  </motion.div>
));

export default ProductCard;
