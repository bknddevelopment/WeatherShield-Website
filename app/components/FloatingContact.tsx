'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  X, 
  Send,
  Clock,
  Zap
} from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message sent:', message);
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Buttons */}
      <AnimatePresence>
        {showWidget && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          >
            {/* Emergency Call Button */}
            <motion.a
              href="tel:843-877-5539"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-weather-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    24/7 Emergency Line
                  </div>
                </div>
              </div>
              {/* Pulsing indicator */}
              <div className="absolute -inset-1 bg-red-500 rounded-full animate-ping opacity-30" />
            </motion.a>

            {/* Chat Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-weather-teal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <MessageCircle className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-weather-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                  Chat with us
                </div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-weather-teal p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">Weather Shield Support</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>We typically reply instantly</span>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 h-64 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {/* Welcome Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-weather-teal rounded-full flex-shrink-0" />
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                      <p className="text-sm text-weather-dark">
                        Hi! 👋 Thanks for visiting Weather Shield Roofing. How can we help you today?
                      </p>
                      <div className="mt-3 space-y-2">
                        <button className="block w-full text-left px-3 py-2 bg-weather-light rounded-lg text-sm hover:bg-weather-gray transition-colors">
                          🏠 I need a roof inspection
                        </button>
                        <button className="block w-full text-left px-3 py-2 bg-weather-light rounded-lg text-sm hover:bg-weather-gray transition-colors">
                          ⛈️ Storm damage emergency
                        </button>
                        <button className="block w-full text-left px-3 py-2 bg-weather-light rounded-lg text-sm hover:bg-weather-gray transition-colors">
                          💰 Get a free quote
                        </button>
                        <button className="block w-full text-left px-3 py-2 bg-weather-light rounded-lg text-sm hover:bg-weather-gray transition-colors">
                          ❓ Other questions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Footer */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-weather-gray">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-weather-gray rounded-lg focus:outline-none focus:border-weather-teal transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-weather-teal text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-weather-dark mt-2 text-center">
                  Or call us directly at{' '}
                  <a href="tel:843-877-5539" className="text-weather-teal font-semibold">
                    (843) 877-5539
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Emergency Banner (shows occasionally) */}
      <AnimatePresence>
        {showWidget && !isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ delay: 5 }}
            className="fixed bottom-32 right-6 z-40"
          >
            <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-semibold text-sm">24/7 Emergency Service</span>
              </div>
              <p className="text-xs opacity-90">
                Storm damage? We're here to help immediately.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}