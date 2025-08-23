'use client';

import { motion, useInView } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Award,
  Users,
  CheckCircle,
  ThumbsUp,
  MessageSquare,
  BarChart3,
  Calendar,
  Target
} from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface ReviewStatsProps {
  reviews: Array<{
    rating: number;
    date: string;
    verified: boolean;
  }>;
  averageRating: number;
  totalReviews: number;
  responseRate: number;
  responseTime: string;
}

function AnimatedCounter({ 
  target, 
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0 
}: { 
  target: number; 
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(parseFloat(start.toFixed(decimals)));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ReviewStats({
  reviews,
  averageRating,
  totalReviews,
  responseRate,
  responseTime
}: ReviewStatsProps) {
  const ratingBreakdown = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const verifiedCount = reviews.filter(r => r.verified).length;
  const verificationRate = (verifiedCount / totalReviews) * 100;

  // Calculate recent reviews (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentReviews = reviews.filter(r => new Date(r.date) > thirtyDaysAgo).length;

  // Calculate review growth
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
  const previousMonthReviews = reviews.filter(r => {
    const reviewDate = new Date(r.date);
    return reviewDate > sixtyDaysAgo && reviewDate <= thirtyDaysAgo;
  }).length;
  
  const growthRate = previousMonthReviews > 0 
    ? ((recentReviews - previousMonthReviews) / previousMonthReviews * 100).toFixed(0)
    : '0';

  const stats = [
    {
      icon: <Star className="w-6 h-6" />,
      value: averageRating,
      label: 'Average Rating',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      decimals: 1
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: totalReviews,
      label: 'Total Reviews',
      color: 'text-weather-teal',
      bgColor: 'bg-weather-teal/10',
      suffix: '+'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      value: verificationRate,
      label: 'Verified Reviews',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      suffix: '%'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      value: responseRate,
      label: 'Response Rate',
      color: 'text-weather-navy',
      bgColor: 'bg-weather-navy/10',
      suffix: '%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${stat.bgColor} ${stat.color} mb-4`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              <AnimatedCounter 
                target={stat.value} 
                suffix={stat.suffix || ''} 
                decimals={stat.decimals || 0}
              />
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed Breakdown */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Rating Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Rating Distribution</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map(rating => {
              const count = ratingBreakdown[rating as keyof typeof ratingBreakdown];
              const percentage = (count / totalReviews) * 100;
              
              return (
                <div key={rating} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.1 * (6 - rating) }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                      />
                    </div>
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                    <span className="text-xs text-gray-500 ml-1">({percentage.toFixed(0)}%)</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Average Score</span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : i < averageRating
                          ? 'fill-yellow-200 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Performance Metrics</h3>
            <Target className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-6">
            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Recent Reviews (30 days)</span>
                <span className="font-bold text-gray-900">{recentReviews}</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(recentReviews / totalReviews) * 100}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-weather-teal rounded-full"
                />
              </div>
            </div>

            {/* Growth Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Monthly Growth</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-green-600">+{growthRate}%</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(parseInt(growthRate), 100)}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-green-500 rounded-full"
                />
              </div>
            </div>

            {/* Response Time */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <span className="font-bold text-gray-900">{responseTime}</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-weather-amber rounded-full"
                />
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
                <span className="font-bold text-gray-900">98%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '98%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-weather-navy to-weather-navy-dark rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="w-4 h-4 text-weather-amber" />
              <span>Top rated contractor in Myrtle Beach area</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-weather-navy via-weather-navy-dark to-weather-navy rounded-xl p-6 text-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <ThumbsUp className="w-6 h-6 mx-auto mb-2 text-weather-amber" />
            <div className="text-2xl font-bold">
              <AnimatedCounter target={98} suffix="%" />
            </div>
            <p className="text-sm opacity-90">Would Recommend</p>
          </div>
          <div>
            <Calendar className="w-6 h-6 mx-auto mb-2 text-weather-amber" />
            <div className="text-2xl font-bold">15+</div>
            <p className="text-sm opacity-90">Years Experience</p>
          </div>
          <div>
            <Users className="w-6 h-6 mx-auto mb-2 text-weather-amber" />
            <div className="text-2xl font-bold">
              <AnimatedCounter target={10000} suffix="+" />
            </div>
            <p className="text-sm opacity-90">Happy Customers</p>
          </div>
          <div>
            <Award className="w-6 h-6 mx-auto mb-2 text-weather-amber" />
            <div className="text-2xl font-bold">A+</div>
            <p className="text-sm opacity-90">BBB Rating</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}