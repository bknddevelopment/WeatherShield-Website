'use client'

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import CTASection from '../components/CTASection'
import { 
  Shield, 
  Award, 
  Users, 
  Home, 
  CheckCircle, 
  Heart, 
  Target, 
  TrendingUp,
  Star,
  Clock,
  Phone,
  Zap,
  BadgeCheck,
  Building,
  HeartHandshake,
  Briefcase,
  ArrowRight,
  Play,
  ChevronRight,
  MapPin,
  Calendar,
  ThumbsUp,
  Hammer,
  AlertCircle
} from 'lucide-react'

// Trust badges data
const trustBadges = [
  {
    name: 'GAF Master Elite',
    icon: <BadgeCheck className="w-10 h-10" />,
    description: 'Top 2% Nationwide',
    color: 'from-amber-500 to-amber-600',
    featured: true
  },
  {
    name: 'BBB Accredited',
    icon: <Award className="w-10 h-10" />,
    description: 'A+ Rating',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Google Reviews',
    icon: <Star className="w-10 h-10" />,
    description: '5.0 Stars • 500+ Reviews',
    color: 'from-green-500 to-green-600'
  },
  {
    name: '24/7 Emergency',
    icon: <Zap className="w-10 h-10" />,
    description: 'Rapid Response Team',
    color: 'from-red-500 to-orange-500'
  }
]

// Achievement counter component
function AnimatedCounter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// Statistics data
const statistics = [
  { 
    number: 25, 
    suffix: '+', 
    label: 'Years of Excellence', 
    icon: <Calendar className="w-8 h-8" />,
    description: 'Serving Myrtle Beach since 1999'
  },
  { 
    number: 10000, 
    suffix: '+', 
    label: 'Homes Protected', 
    icon: <Home className="w-8 h-8" />,
    description: 'Trusted by thousands of families'
  },
  { 
    number: 100, 
    suffix: '%', 
    label: 'Satisfaction Rate', 
    icon: <ThumbsUp className="w-8 h-8" />,
    description: 'Backed by our guarantee'
  },
  { 
    number: 60, 
    suffix: ' Min', 
    label: 'Emergency Response', 
    icon: <Clock className="w-8 h-8" />,
    description: '24/7 storm damage service'
  }
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-[70vh] bg-gradient-to-br from-[#0056b3] via-[#0056b3] to-[#003d82] overflow-hidden">
          {/* Animated Background Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{ y: heroY }}
          >
            <div className="absolute inset-0 bg-pattern"></div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <motion.div 
            className="container mx-auto px-4 pt-32 pb-20 relative z-10"
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 px-6 py-2 rounded-full mb-8"
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">TRUSTED SINCE 1999</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Weather Shield Roofing
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl mb-8 text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our Commitment to Excellence in Roofing
              </motion.p>

              <motion.p
                className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Living and working along the coastal regions brings unique challenges, especially when it comes to the wrath of nature. 
                Our leadership excels in offering prompt and effective solutions for storm damage repairs and roof replacements. 
                Our dedication towards ensuring the safety and satisfaction of homeowners is palpable. With a focus on delivering 
                unparalleled service, our team is recognized for their expertise in managing storm-damaged homes with utmost 
                efficiency and transparency.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              >
                <motion.a
                  href="/quote"
                  className="btn-primary px-8 py-4 text-lg font-bold rounded-lg shadow-xl flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Inspection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="tel:843-877-5539"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl hover:bg-white hover:text-[#0056b3] transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  (843) 877-5539
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`relative bg-white rounded-xl shadow-lg p-6 text-center ${
                    badge.featured ? 'ring-2 ring-amber-500 ring-offset-2' : ''
                  }`}
                >
                  {badge.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ELITE STATUS
                    </div>
                  )}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} text-white mb-4`}>
                    {badge.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Exceptional Roofing Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold text-[#0056b3] mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Exceptional Roofing Solutions Tailored to Your Needs
              </motion.h2>
              
              <motion.div 
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Weather Shield Roofing stands as a pinnacle of roofing excellence in Myrtle Beach. As a family-owned 
                  and operated premier roofing company, it has carved out a niche for itself through years of dedicated 
                  service. Known for our exceptional quality workmanship, reliable services, and unyielding commitment 
                  to customer satisfaction, Weather Shield Roofing is your go-to choice for all roofing needs, ensuring 
                  the use of the best roof shingles and materials available in the market.
                </p>
                
                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Family-Owned</h3>
                      <p className="text-sm text-gray-600">Local expertise with personal touch</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Premium Quality</h3>
                      <p className="text-sm text-gray-600">Best materials and workmanship</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <HeartHandshake className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Customer First</h3>
                      <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section with Animated Counters */}
        <section className="py-20 bg-gradient-to-br from-[#0056b3] to-[#003d82] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold text-[#0056b3] mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Comprehensive Residential and Commercial Roofing Services
              </motion.h2>
              
              <motion.div 
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  We understand the critical role a roof plays in safeguarding your property, be it residential or 
                  commercial, protecting your family, employees, and assets alike. It is with this understanding that 
                  we commit ourselves to meeting your roofing needs swiftly, efficiently, and in a cost-effective manner. 
                  Whether the requirement is for minor repairs, a complete overhaul, or routine maintenance, our team 
                  possesses the requisite expertise and resources to guarantee outcomes that exceed your expectations.
                </p>
                
                {/* Service Categories */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-gradient-to-br from-[#0056b3]/5 to-[#0056b3]/10 rounded-xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Home className="w-10 h-10 text-[#0056b3] mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Complete roof replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Storm damage repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Preventive maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Insurance claim assistance</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Building className="w-10 h-10 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Flat roof systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">TPO & EPDM installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Scheduled maintenance programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Emergency leak repairs</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Certified Professionals Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold text-[#0056b3] mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Certified Professionals and Premium Materials
              </motion.h2>
              
              <motion.div 
                className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                  Our team consists of highly skilled and certified roofing professionals, utilizing only top-tier 
                  materials coupled with the latest techniques in the industry. This ensures the durability, longevity, 
                  and aesthetic appeal of your roofing solutions. We prioritize understanding our client's unique needs 
                  and preferences, allowing us to tailor our services in a manner that aligns perfectly with your budget 
                  and timelines.
                </p>
                
                {/* Certification Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6 shadow-lg">
                      <Hammer className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Expert Craftsmen</h3>
                      <p className="text-sm opacity-90">Factory-trained installation specialists</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-[#0056b3] to-[#003d82] text-white rounded-xl p-6 shadow-lg">
                      <Shield className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                      <p className="text-sm opacity-90">Top brands & extended warranties</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-6 shadow-lg">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Latest Technology</h3>
                      <p className="text-sm opacity-90">Modern techniques & equipment</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  See Weather Shield in Action
                </h2>
                <p className="text-xl text-gray-300">
                  Watch our team deliver excellence in every project
                </p>
              </motion.div>
              
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                  <iframe
                    src="https://www.youtube.com/embed/842PsMZ29gY"
                    title="Weather Shield Roofing Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ minHeight: '500px' }}
                  ></iframe>
                </div>
                
                {/* Play button overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/20 to-amber-500/20 pointer-events-none"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-display font-bold text-[#0056b3] mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Weather Shield Roofing?
              </motion.h2>
              
              <motion.div 
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                  At Weather Shield Roofing, our pledge to attention to detail, unwavering professionalism, and 
                  excellence sets us apart. We support our work with a comprehensive service warranty, ensuring 
                  our clients' peace of mind. For new roofing installations, repairs, or maintenance, look no 
                  further than Weather Shield Roofing, the definitive choice for all your roofing dilemmas. 
                  Contact us today to find out more about our offerings or to schedule a free consultation.
                </p>
                
                {/* Key Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <BadgeCheck className="w-8 h-8" />,
                      title: "Comprehensive Warranty",
                      description: "Industry-leading warranties on all work and materials",
                      color: "text-green-500"
                    },
                    {
                      icon: <Clock className="w-8 h-8" />,
                      title: "24/7 Emergency Service",
                      description: "Rapid response team for storm damage and emergencies",
                      color: "text-red-500"
                    },
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Expert Team",
                      description: "Certified professionals with decades of experience",
                      color: "text-blue-500"
                    },
                    {
                      icon: <Heart className="w-8 h-8" />,
                      title: "Customer Satisfaction",
                      description: "100% satisfaction guarantee on all projects",
                      color: "text-amber-500"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
                    >
                      <div className={`flex-shrink-0 ${benefit.color}`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Final CTA */}
                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.a
                    href="/quote"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Your Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <p className="text-gray-600 mt-4">
                    Or call us directly at{" "}
                    <a href="tel:843-877-5539" className="text-[#0056b3] font-bold hover:underline">
                      (843) 877-5539
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Emergency Banner */}
        <motion.section 
          className="py-8 bg-gradient-to-r from-red-500 to-amber-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 text-white">
                <AlertCircle className="w-8 h-8 animate-pulse" />
                <div>
                  <p className="font-bold text-lg">Storm Damage? We're Here 24/7</p>
                  <p className="text-sm opacity-90">Emergency response team ready to help</p>
                </div>
              </div>
              <motion.a
                href="tel:843-877-5539"
                className="bg-white text-red-500 px-6 py-3 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 animate-pulse" />
                Call Emergency Line
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Main CTA Section */}
        <CTASection 
          variant="primary"
          title="Ready to Experience the Weather Shield Difference?"
          description="Join thousands of satisfied homeowners who trust us with their most important investment."
        />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}