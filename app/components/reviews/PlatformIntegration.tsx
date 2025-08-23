'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  ExternalLink, 
  MessageSquare,
  Award,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';

interface PlatformData {
  name: string;
  rating: number;
  reviewCount: number;
  url: string;
  logo: string;
  color: string;
  lastUpdated: string;
  verified: boolean;
  businessId?: string;
}

const platforms: PlatformData[] = [
  {
    name: 'Google Business',
    rating: 5.0,
    reviewCount: 71,
    url: 'https://g.page/r/YOUR_GOOGLE_ID/review',
    logo: '/api/placeholder/120/40',
    color: 'from-blue-500 to-blue-600',
    lastUpdated: '2024-01-20',
    verified: true,
    businessId: 'ChIJxxxxxxxxxxxxxx'
  },
  {
    name: 'Facebook',
    rating: 4.9,
    reviewCount: 45,
    url: 'https://facebook.com/weathershieldroofing/reviews',
    logo: '/api/placeholder/120/40',
    color: 'from-blue-600 to-blue-700',
    lastUpdated: '2024-01-19',
    verified: true
  },
  {
    name: 'Yelp',
    rating: 4.8,
    reviewCount: 28,
    url: 'https://yelp.com/biz/weather-shield-roofing',
    logo: '/api/placeholder/120/40',
    color: 'from-red-500 to-red-600',
    lastUpdated: '2024-01-18',
    verified: true
  },
  {
    name: 'BBB',
    rating: 5.0,
    reviewCount: 15,
    url: 'https://www.bbb.org/weathershield',
    logo: '/api/placeholder/120/40',
    color: 'from-green-600 to-green-700',
    lastUpdated: '2024-01-17',
    verified: true
  }
];

export default function PlatformIntegration() {
  const totalReviews = platforms.reduce((sum, p) => sum + p.reviewCount, 0);
  const averageRating = (
    platforms.reduce((sum, p) => sum + (p.rating * p.reviewCount), 0) / totalReviews
  ).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Overall Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-weather-navy via-weather-navy-dark to-weather-navy rounded-2xl p-8 text-white shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Trusted Across All Platforms</h2>
            <p className="text-white/80 mb-4">
              Our reputation speaks for itself across multiple review platforms
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${
                        i < Math.floor(parseFloat(averageRating))
                          ? 'fill-yellow-400 text-yellow-400'
                          : i < parseFloat(averageRating)
                          ? 'fill-yellow-200 text-yellow-400'
                          : 'fill-white/20 text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-3xl font-bold">{averageRating}</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold">{totalReviews}+</div>
                <div className="text-sm text-white/80">Total Reviews</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Award className="w-12 h-12 text-weather-amber" />
            <div>
              <div className="text-sm text-white/80">Industry</div>
              <div className="text-xl font-bold">Top Rated</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Platform Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
            
            <div className="p-6">
              {/* Platform Logo */}
              <div className="h-10 mb-4 flex items-center">
                <div className="text-lg font-bold text-gray-800">
                  {platform.name}
                </div>
              </div>
              
              {/* Rating */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(platform.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : i < platform.rating
                            ? 'fill-yellow-200 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">{platform.rating}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {platform.reviewCount} reviews
                </p>
              </div>
              
              {/* Verified Badge */}
              {platform.verified && (
                <div className="flex items-center gap-1 text-green-600 mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold">Verified Business</span>
                </div>
              )}
              
              {/* Actions */}
              <div className="space-y-2">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">View Reviews</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${platform.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Write Review</span>
                </a>
              </div>
              
              {/* Last Updated */}
              <p className="text-xs text-gray-500 mt-3 text-center">
                Updated {new Date(platform.lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Reviews Widget Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Latest Google Reviews</h3>
          <a
            href={platforms[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View All
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        {/* Google Reviews Embed Placeholder */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Live Google Reviews Feed
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              See what our customers are saying in real-time
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">5.0</span>
              <span className="text-gray-600">• 71 reviews</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-900 mb-1">Verified Reviews</h4>
          <p className="text-sm text-gray-600">
            All reviews are from verified customers
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
          <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-900 mb-1">Growing Reputation</h4>
          <p className="text-sm text-gray-600">
            Consistently rated 5 stars across platforms
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
          <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-900 mb-1">Community Trusted</h4>
          <p className="text-sm text-gray-600">
            Recommended by neighbors throughout Myrtle Beach
          </p>
        </div>
      </motion.div>
    </div>
  );
}