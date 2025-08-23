'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ThumbsUp, 
  MessageSquare,
  MapPin,
  Calendar,
  Home,
  Building,
  Cloud,
  Droplets,
  Shield,
  ExternalLink,
  User,
  MoreHorizontal
} from 'lucide-react';
import { useState } from 'react';

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    date: string;
    rating: number;
    service: string;
    location?: string;
    text: string;
    platform: 'Google' | 'Facebook' | 'Yelp' | 'BBB';
    verified: boolean;
    helpful: number;
    response?: {
      text: string;
      date: string;
    };
    images?: string[];
    projectType?: string;
    workDuration?: string;
  };
  index: number;
  variant?: 'default' | 'compact' | 'featured';
}

const serviceIcons: Record<string, JSX.Element> = {
  'Residential': <Home className="w-4 h-4" />,
  'Commercial': <Building className="w-4 h-4" />,
  'Storm Damage': <Cloud className="w-4 h-4" />,
  'Gutters': <Droplets className="w-4 h-4" />,
  'Siding': <Shield className="w-4 h-4" />,
};

const platformColors: Record<string, string> = {
  'Google': 'bg-blue-500',
  'Facebook': 'bg-blue-600',
  'Yelp': 'bg-red-500',
  'BBB': 'bg-green-600',
};

export default function ReviewCard({ review, index, variant = 'default' }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{review.name}</span>
              {review.verified && (
                <CheckCircle className="w-3 h-3 text-green-600" />
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${
                      i < review.rating 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span>{formatDate(review.date)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">{review.text}</p>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gradient-to-br from-weather-teal/5 to-weather-amber/5 border-2 border-weather-teal rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="bg-weather-amber text-white text-xs font-bold px-3 py-1 rounded-full">
            FEATURED REVIEW
          </div>
          <div className={`${platformColors[review.platform]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {review.platform}
          </div>
        </div>
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-weather-teal rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{review.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {review.location && (
                    <>
                      <MapPin className="w-3 h-3" />
                      <span>{review.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${
                    i < review.rating 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">{formatDate(review.date)}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          "{review.text}"
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-weather-teal/10 rounded-full">
              {serviceIcons[review.service]}
              <span className="text-sm font-semibold text-weather-teal">
                {review.service}
              </span>
            </div>
            {review.projectType && (
              <span className="text-sm text-gray-600">
                {review.projectType}
              </span>
            )}
          </div>
          <button
            onClick={handleHelpful}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              hasVoted 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Helpful ({helpfulCount})</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Platform Badge */}
      <div className={`${platformColors[review.platform]} h-1`} />
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-weather-teal to-weather-teal-dark rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{review.name}</h3>
                {review.verified && (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-semibold">Verified</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(review.date)}</span>
                </div>
                {review.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{review.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                  Share Review
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                  Report Issue
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${
                  i < review.rating 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-gray-900">{review.rating}.0</span>
          <span className="text-sm text-gray-500">via {review.platform}</span>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-weather-teal/10 rounded-full">
            {serviceIcons[review.service]}
            <span className="text-sm font-semibold text-weather-teal">
              {review.service}
            </span>
          </div>
          {review.projectType && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {review.projectType}
            </span>
          )}
          {review.workDuration && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {review.workDuration}
            </span>
          )}
        </div>

        {/* Review Text */}
        <div className="mb-4">
          <p className={`text-gray-700 leading-relaxed ${!isExpanded ? 'line-clamp-4' : ''}`}>
            {review.text}
          </p>
          {review.text.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-weather-teal font-semibold text-sm mt-2 hover:text-weather-teal-dark transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Business Response */}
        {review.response && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-weather-teal" />
              <span className="font-semibold text-sm text-gray-900">
                Response from Weather Shield
              </span>
            </div>
            <p className="text-sm text-gray-700">{review.response.text}</p>
            <p className="text-xs text-gray-500 mt-2">
              Responded {formatDate(review.response.date)}
            </p>
          </div>
        )}

        {/* Images */}
        {review.images && review.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {review.images.slice(0, 3).map((image, idx) => (
              <div 
                key={idx} 
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <button
            onClick={handleHelpful}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              hasVoted 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {hasVoted ? 'Thanks!' : 'Helpful'} ({helpfulCount})
            </span>
          </button>
          
          <a
            href={`#`}
            className="flex items-center gap-1 text-sm text-weather-teal hover:text-weather-teal-dark transition-colors"
          >
            <span>View on {review.platform}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}