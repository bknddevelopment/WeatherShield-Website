'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  Award, 
  Shield,
  TrendingUp,
  CheckCircle,
  Users,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

interface ReviewHeroProps {
  averageRating: number;
  totalReviews: number;
  platformCount: number;
}

export default function ReviewHero({ 
  averageRating, 
  totalReviews,
  platformCount 
}: ReviewHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-weather-navy via-weather-navy-dark to-weather-teal py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-weather-amber/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-weather-teal/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="inline-flex items-center gap-2 bg-weather-amber text-weather-navy px-6 py-2 rounded-full mb-6 shadow-xl"
          >
            <Award className="w-5 h-5" />
            <span className="font-bold text-sm">MYRTLE BEACH'S TOP RATED ROOFING CONTRACTOR</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Customer Reviews & Testimonials
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
          >
            Discover why homeowners across the Grand Strand trust Weather Shield 
            for their roofing, siding, and gutter needs
          </motion.p>

          {/* Rating Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6 + (i * 0.1),
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-5xl font-bold text-white mb-2"
                >
                  {averageRating}
                </motion.div>
                <p className="text-white/80 text-sm">Average Rating</p>
              </div>

              {/* Total Reviews */}
              <div className="text-center border-x border-white/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8 
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-weather-amber/20 rounded-full mb-3"
                >
                  <Users className="w-8 h-8 text-weather-amber" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="text-5xl font-bold text-white mb-2"
                >
                  {totalReviews}+
                </motion.div>
                <p className="text-white/80 text-sm">Verified Reviews</p>
              </div>

              {/* Platforms */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.9 
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-weather-teal/20 rounded-full mb-3"
                >
                  <Shield className="w-8 h-8 text-weather-teal-light" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-5xl font-bold text-white mb-2"
                >
                  {platformCount}
                </motion.div>
                <p className="text-white/80 text-sm">Review Platforms</p>
              </div>
            </div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-1">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-xs text-white/70">Verified Reviews</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <p className="text-xs text-white/70">Would Recommend</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-weather-amber mb-1">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-xs text-white/70">Response Rate</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-weather-teal-light mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold">A+</span>
                </div>
                <p className="text-xs text-white/70">BBB Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              href="#reviews"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-weather-amber text-weather-navy px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Read Customer Reviews
            </motion.a>
            <motion.a
              href="https://g.page/r/YOUR_GOOGLE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              Leave a Review
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Review Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              name: "Sarah J.",
              text: "Exceptional service! They replaced our roof in just two days.",
              rating: 5,
              service: "Roof Replacement"
            },
            {
              name: "Michael C.",
              text: "Professional team, fair pricing, and outstanding quality work.",
              rating: 5,
              service: "Storm Damage"
            },
            {
              name: "Jennifer W.",
              text: "Best roofing company in Myrtle Beach! Highly recommend.",
              rating: 5,
              service: "Gutters"
            }
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 text-sm mb-3">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm font-semibold">{review.name}</span>
                <span className="text-weather-amber text-xs">{review.service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}