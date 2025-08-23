'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

// Skeleton loader for text content
export function TextSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-weather-gray to-weather-light rounded animate-shimmer"
          style={{
            width: `${100 - i * 15}%`,
            backgroundSize: '200% 100%'
          }}
        />
      ))}
    </div>
  );
}

// Skeleton loader for cards
export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="w-16 h-16 bg-weather-gray rounded-lg mb-4" />
          <div className="h-6 bg-weather-gray rounded w-3/4 mb-3" />
          <div className="space-y-2">
            <div className="h-4 bg-weather-gray rounded" />
            <div className="h-4 bg-weather-gray rounded w-5/6" />
            <div className="h-4 bg-weather-gray rounded w-4/6" />
          </div>
          <div className="mt-4 h-10 bg-weather-gray rounded-lg" />
        </div>
      ))}
    </div>
  );
}

// Skeleton loader for testimonials
export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-weather-gray rounded-full" />
        ))}
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-weather-gray rounded" />
        <div className="h-4 bg-weather-gray rounded" />
        <div className="h-4 bg-weather-gray rounded w-3/4" />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-weather-gray rounded-full" />
        <div>
          <div className="h-4 bg-weather-gray rounded w-24 mb-1" />
          <div className="h-3 bg-weather-gray rounded w-32" />
        </div>
      </div>
    </div>
  );
}

// Full page loading spinner
export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="inline-block"
        >
          <div className="w-20 h-20 bg-weather-teal rounded-full p-4">
            <Shield className="w-full h-full text-white" />
          </div>
        </motion.div>
        <p className="mt-4 text-weather-dark font-semibold">Loading...</p>
      </motion.div>
    </div>
  );
}

// Inline loading spinner
export function Spinner({ size = 'md', color = 'weather-teal' }: { size?: 'sm' | 'md' | 'lg'; color?: string }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} animate-spin`}>
      <svg className="w-full h-full" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className={`opacity-75 text-${color}`}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

// Button loading state
export function ButtonLoader({ text = 'Processing...' }: { text?: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Spinner size="sm" color="white" />
      <span>{text}</span>
    </div>
  );
}

// Image loading placeholder
export function ImageSkeleton({ aspectRatio = 'aspect-video' }: { aspectRatio?: string }) {
  return (
    <div className={`${aspectRatio} bg-weather-gray rounded-lg animate-pulse relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );
}

// Progress bar
export function ProgressBar({ progress, className = '' }: { progress: number; className?: string }) {
  return (
    <div className={`w-full bg-weather-gray rounded-full h-2 overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-full bg-weather-teal rounded-full"
      />
    </div>
  );
}

// Dots loading animation
export function DotsLoader() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-weather-teal rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
}

// Pulse animation for placeholders
export function PulsePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-weather-gray rounded-lg ${className}`} />
  );
}

// Loading overlay
export function LoadingOverlay({ isLoading, children }: { isLoading: boolean; children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg"
        >
          <Spinner size="lg" />
        </motion.div>
      )}
    </div>
  );
}

// Export all loading components
export const LoadingStates = {
  Text: TextSkeleton,
  Card: CardSkeleton,
  Testimonial: TestimonialSkeleton,
  Page: PageLoader,
  Spinner,
  Button: ButtonLoader,
  Image: ImageSkeleton,
  Progress: ProgressBar,
  Dots: DotsLoader,
  Pulse: PulsePlaceholder,
  Overlay: LoadingOverlay
};

export default LoadingStates;