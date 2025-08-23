'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Star, 
  Gift,
  ChevronRight,
  X,
  Smartphone,
  Mail,
  QrCode,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface ReviewCTAProps {
  variant?: 'floating' | 'inline' | 'modal';
}

export default function ReviewCTA({ variant = 'floating' }: ReviewCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [smsSent, setSmsSent] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    // Show floating CTA after user scrolls 50% of the page
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !showFloating) {
        setShowFloating(true);
      }
    };

    if (variant === 'floating') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant, showFloating]);

  const reviewPlatforms = [
    {
      name: 'Google',
      url: 'https://g.page/r/YOUR_GOOGLE_ID/review',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      description: 'Leave a Google review'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/weathershieldroofing/reviews',
      icon: '👍',
      color: 'from-blue-600 to-blue-700',
      description: 'Review us on Facebook'
    },
    {
      name: 'Yelp',
      url: 'https://yelp.com/biz/weather-shield-roofing',
      icon: '⭐',
      color: 'from-red-500 to-red-600',
      description: 'Share on Yelp'
    },
    {
      name: 'BBB',
      url: 'https://www.bbb.org/weathershield',
      icon: '🏆',
      color: 'from-green-600 to-green-700',
      description: 'Rate us on BBB'
    }
  ];

  const handleEmailRequest = () => {
    // Simulate email sent
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleSMSRequest = () => {
    // Simulate SMS sent
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 3000);
  };

  if (variant === 'floating') {
    return (
      <>
        <AnimatePresence>
          {showFloating && !isOpen && (
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setIsOpen(true)}
              className="fixed right-4 bottom-20 z-40 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-bold">Leave a Review</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
              
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 bg-weather-amber rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Review Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-weather-teal to-weather-teal-dark text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Share Your Experience</h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-white/90">
                    Your feedback helps us serve you better and helps others find quality roofing services
                  </p>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Incentive Banner */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Gift className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Thank You Gift!</p>
                        <p className="text-sm text-gray-600">
                          Leave a review and receive 10% off your next service
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Platform Selection */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Choose Your Platform</h4>
                    <div className="space-y-3">
                      {reviewPlatforms.map(platform => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{platform.icon}</span>
                            <div>
                              <p className="font-semibold text-gray-900">{platform.name}</p>
                              <p className="text-sm text-gray-600">{platform.description}</p>
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-weather-teal transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Alternative Methods */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Get Review Link</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={handleEmailRequest}
                        disabled={emailSent}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 ${
                          emailSent 
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : 'border-gray-200 hover:border-weather-teal hover:bg-weather-teal/5'
                        }`}
                      >
                        {emailSent ? (
                          <>
                            <CheckCircle className="w-6 h-6 mb-2" />
                            <span className="text-sm font-medium">Email Sent!</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-6 h-6 mb-2 text-gray-600" />
                            <span className="text-sm font-medium">Email Link</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={handleSMSRequest}
                        disabled={smsSent}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 ${
                          smsSent 
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : 'border-gray-200 hover:border-weather-teal hover:bg-weather-teal/5'
                        }`}
                      >
                        {smsSent ? (
                          <>
                            <CheckCircle className="w-6 h-6 mb-2" />
                            <span className="text-sm font-medium">SMS Sent!</span>
                          </>
                        ) : (
                          <>
                            <Smartphone className="w-6 h-6 mb-2 text-gray-600" />
                            <span className="text-sm font-medium">Text Link</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* QR Code */}
                    <button
                      onClick={() => setShowQR(!showQR)}
                      className="w-full mt-4 flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <QrCode className="w-5 h-5" />
                      <span className="font-medium">Show QR Code</span>
                    </button>

                    {showQR && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-4 p-4 bg-gray-50 rounded-lg text-center"
                      >
                        <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <QrCode className="w-24 h-24 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">
                          Scan with your phone to leave a review
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Inline variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-weather-navy via-weather-navy-dark to-weather-navy rounded-2xl p-8 text-white shadow-2xl"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className="inline-flex items-center justify-center w-16 h-16 bg-weather-amber rounded-full mb-6"
        >
          <Star className="w-8 h-8 text-weather-navy" />
        </motion.div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Had a Great Experience?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your feedback matters! Share your Weather Shield experience and help others 
          discover quality roofing services in Myrtle Beach
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {reviewPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
            >
              <span className="text-xl">{platform.icon}</span>
              <span>{platform.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
          <p className="text-sm text-white/80 flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Leave a review and receive 10% off your next service!
          </p>
        </div>
      </div>
    </motion.div>
  );
}