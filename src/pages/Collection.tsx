import React, { memo } from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const Collection = memo(() => {
  const products = [
    {
      title: "Chilli Powder",
      tag: "Organic Certified",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
      description: "Fine vibrant red powder sourced from the central province, sun-dried and cold-ground to preserve essential oils."
    },
    {
      title: "Clove",
      tag: "Premium Grade",
      image: "https://rayinfood.com/wp-content/uploads/2022/05/cloves.png",
      description: "Raw clove buds are harvested from our cultivation of clove trees and processed by cleaning and drying under strict hygienic conditions."
    },
    {
      title: "Curry Powder",
      tag: "Heritage Blend",
      image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c",
      description: "A complex heritage blend of 12 hand-selected spices, slow-roasted to a deep aromatic profile."
    },
    {
      title: "Turmeric Powder",
      tag: "High Curcumin",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
      description: "Bright golden-yellow powder with high curcumin content, traditionally processed for pure potency."
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
