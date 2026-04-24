import React, { memo } from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const Collection = memo(() => {
  const products = [
    {
      title: "Clove",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/cloves.png",
      description: "Raw clove buds are harvested from our cultivation of clove trees and processed by cleaning and drying under strict hygienic conditions."
    },
    {
      title: "Curry Powder",
      tag: "Heritage Blend",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/2K1A0034-removebg-preview.png",
      description: "An aromatic and flavourful blend of spices (cumin, fennel seeds, coriander seeds, cinnamon, green cardamom, cloves and curry leaves) is used in almost all traditional Sri Lankan curries."
    },
    {
      title: "Chilli Pieces",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/2K1A0021-removebg-preview.png",
      description: "Our chilli pieces are a great addition to any dish as a garnish or for added flavour, instantly elevate your meals."
    },
    {
      title: "Fenugreek",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/2K1A0107-removebg-preview.png",
      description: "Fenugreek Seeds are harvested and processed for packaging at our state-of-the-art processing facility."
    },
    {
      title: "Fennel",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/2K1A0115-removebg-preview.png",
      description: "Fennel seeds have an aniseed aroma and taste that is used throughout Sri Lankan cuisine."
    },
    {
      title: "Mustard",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/2K1A0051-removebg-preview.png",
      description: "Raw mustard pods are harvested from the Mustard plant and processed under strict food safety guidelines."
    }
  ];

  return (
    <main className="py-32 px-6 bg-brand-cream/50 dark:bg-brand-dark/20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Signature Collection</h2>
            <p className="text-muted max-w-xl">
              Curated organic spices processed with traditional methods and modern precision.
            </p>
          </div>
        </motion.div>

        <Carousel items={products} />
      </div>
    </main>
  );
});

export default Collection;
