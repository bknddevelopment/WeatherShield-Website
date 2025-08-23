'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import CTASection from '../components/CTASection'
import TrustIndicators from '../components/TrustIndicators'

// Import all review components
import ReviewHero from '../components/reviews/ReviewHero'
import ReviewFilters, { FilterState, SortOption } from '../components/reviews/ReviewFilters'
import ReviewCard from '../components/reviews/ReviewCard'
import ReviewStats from '../components/reviews/ReviewStats'
import PlatformIntegration from '../components/reviews/PlatformIntegration'
import VideoTestimonials from '../components/reviews/VideoTestimonials'
import ReviewSchema from '../components/reviews/ReviewSchema'
import ReviewCTA from '../components/reviews/ReviewCTA'

// Import review data
import { reviewsData, getReviewStats } from '../data/reviewsData'
import type { Review } from '../data/reviewsData'

import { 
  ChevronDown, 
  Grid, 
  List,
  TrendingUp,
  Award,
  Image as ImageIcon
} from 'lucide-react'

export default function ReviewsPage() {
  const [filters, setFilters] = useState<FilterState>({
    service: 'All',
    rating: null,
    platform: 'All',
    dateRange: 'all',
    verified: null
  })
  
  const [sortBy, setSortBy] = useState<SortOption>('recent')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [visibleReviews, setVisibleReviews] = useState(9)
  const [activeTab, setActiveTab] = useState<'reviews' | 'stats' | 'platforms'>('reviews')

  const stats = getReviewStats()
  
  // Get unique services and platforms for filters
  const services = useMemo(() => {
    const uniqueServices = Array.from(new Set(reviewsData.map(r => r.service)))
    return uniqueServices.sort()
  }, [])
  
  const platforms = useMemo(() => {
    const uniquePlatforms = Array.from(new Set(reviewsData.map(r => r.platform)))
    return uniquePlatforms.sort()
  }, [])

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = [...reviewsData]
    
    // Apply service filter
    if (filters.service !== 'All') {
      filtered = filtered.filter(r => r.service === filters.service)
    }
    
    // Apply rating filter
    if (filters.rating !== null) {
      filtered = filtered.filter(r => r.rating >= filters.rating!)
    }
    
    // Apply platform filter
    if (filters.platform !== 'All') {
      filtered = filtered.filter(r => r.platform === filters.platform)
    }
    
    // Apply date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date()
      const ranges: Record<string, number> = {
        'week': 7,
        'month': 30,
        '3months': 90,
        '6months': 180,
        'year': 365
      }
      
      if (ranges[filters.dateRange]) {
        const cutoffDate = new Date()
        cutoffDate.setDate(now.getDate() - ranges[filters.dateRange])
        filtered = filtered.filter(r => new Date(r.date) >= cutoffDate)
      }
    }
    
    // Apply verified filter
    if (filters.verified !== null) {
      filtered = filtered.filter(r => r.verified === filters.verified)
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(query) ||
        r.text.toLowerCase().includes(query) ||
        r.service.toLowerCase().includes(query) ||
        r.location?.toLowerCase().includes(query)
      )
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case 'helpful':
        filtered.sort((a, b) => b.helpful - a.helpful)
        break
      case 'rating_high':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'rating_low':
        filtered.sort((a, b) => a.rating - b.rating)
        break
    }
    
    return filtered
  }, [filters, sortBy, searchQuery])

  const displayedReviews = filteredReviews.slice(0, visibleReviews)
  
  // Featured reviews (top 3 most helpful 5-star reviews)
  const featuredReviews = useMemo(() => {
    return reviewsData
      .filter(r => r.rating === 5)
      .sort((a, b) => b.helpful - a.helpful)
      .slice(0, 3)
  }, [])

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 9, filteredReviews.length))
  }

  // Reset visible reviews when filters change
  useEffect(() => {
    setVisibleReviews(9)
  }, [filters, sortBy, searchQuery])

  return (
    <>
      {/* SEO Schema Markup */}
      <ReviewSchema
        reviews={reviewsData}
        averageRating={stats.averageRating}
        totalReviews={stats.totalReviews}
        businessName="Weather Shield Roofing"
        businessUrl="https://weathershieldroofing.com"
      />
      
      <Header />
      
      {/* Hero Section */}
      <ReviewHero 
        averageRating={stats.averageRating}
        totalReviews={stats.totalReviews}
        platformCount={Object.keys(stats.platformCounts).length}
      />
      
      {/* Quick Stats Bar */}
      <section className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'reviews'
                    ? 'bg-weather-teal text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Reviews</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                  {filteredReviews.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('stats')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'stats'
                    ? 'bg-weather-teal text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Statistics</span>
              </button>
              
              <button
                onClick={() => setActiveTab('platforms')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'platforms'
                    ? 'bg-weather-teal text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Platforms</span>
              </button>
            </div>
            
            {activeTab === 'reviews' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-weather-teal text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-weather-teal text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Filters */}
                <ReviewFilters
                  onFilterChange={setFilters}
                  onSortChange={setSortBy}
                  onSearchChange={setSearchQuery}
                  totalReviews={reviewsData.length}
                  filteredCount={filteredReviews.length}
                  services={services}
                  platforms={platforms}
                />
                
                {/* Featured Reviews */}
                {!searchQuery && filters.service === 'All' && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Reviews</h2>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {featuredReviews.map((review, index) => (
                        <ReviewCard
                          key={review.id}
                          review={review}
                          index={index}
                          variant="featured"
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Review Grid/List */}
                <div className={
                  viewMode === 'grid'
                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }>
                  {displayedReviews.map((review, index) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      index={index}
                      variant={viewMode === 'list' ? 'default' : 'default'}
                    />
                  ))}
                </div>
                
                {/* Load More */}
                {visibleReviews < filteredReviews.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-12"
                  >
                    <button
                      onClick={loadMoreReviews}
                      className="inline-flex items-center gap-2 bg-weather-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-weather-teal-dark transition-colors"
                    >
                      Load More Reviews
                      <ChevronDown className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      Showing {displayedReviews.length} of {filteredReviews.length} reviews
                    </p>
                  </motion.div>
                )}
                
                {filteredReviews.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No reviews found matching your criteria.</p>
                  </div>
                )}
              </motion.div>
            )}
            
            {/* Statistics Tab */}
            {activeTab === 'stats' && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ReviewStats
                  reviews={reviewsData}
                  averageRating={stats.averageRating}
                  totalReviews={stats.totalReviews}
                  responseRate={stats.responseRate}
                  responseTime={stats.responseTime}
                />
              </motion.div>
            )}
            
            {/* Platforms Tab */}
            {activeTab === 'platforms' && (
              <motion.div
                key="platforms"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PlatformIntegration />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />
      
      {/* Review CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ReviewCTA variant="inline" />
        </div>
      </section>
      
      {/* Trust Indicators */}
      <TrustIndicators />
      
      {/* Final CTA */}
      <CTASection 
        variant="primary"
        title="Ready to Experience 5-Star Service?"
        description="Join thousands of satisfied customers who trust Weather Shield for their roofing needs."
      />
      
      <Footer />
      <FloatingContact />
      
      {/* Floating Review CTA */}
      <ReviewCTA variant="floating" />
    </>
  )
}