'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  CheckCircle,
  User
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  service: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Myrtle Beach, SC',
    rating: 5,
    date: '2 weeks ago',
    review: 'Weather Shield exceeded all expectations! After Hurricane damage, they responded within hours. The crew was professional, the work was impeccable, and they handled all the insurance paperwork. Couldn\'t be happier with our new roof!',
    service: 'Storm Damage Repair',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Conway, SC',
    rating: 5,
    date: '1 month ago',
    review: 'From the initial inspection to the final cleanup, everything was perfect. They found issues our insurance missed and got them covered. The team was respectful of our property and completed the job ahead of schedule.',
    service: 'Roof Replacement',
    verified: true
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    location: 'North Myrtle Beach, SC',
    rating: 5,
    date: '1 month ago',
    review: 'Best roofing company in the area! Fair pricing, excellent communication, and outstanding quality. They stand behind their work with a great warranty. I\'ve already recommended them to several neighbors.',
    service: 'Roof Replacement',
    verified: true
  },
  {
    id: 4,
    name: 'Robert Davis',
    location: 'Surfside Beach, SC',
    rating: 5,
    date: '2 months ago',
    review: 'Had a leak that two other companies couldn\'t fix. Weather Shield found the real problem and fixed it permanently. Their expertise and honesty saved me thousands. True professionals!',
    service: 'Roof Repair',
    verified: true
  },
  {
    id: 5,
    name: 'Maria Garcia',
    location: 'Garden City, SC',
    rating: 5,
    date: '3 months ago',
    review: 'Exceptional service from start to finish. They provided a detailed quote, explained everything clearly, and delivered exactly what they promised. The new gutters look great and work perfectly!',
    service: 'Gutter Services',
    verified: true
  },
  {
    id: 6,
    name: 'James Thompson',
    location: 'Pawleys Island, SC',
    rating: 5,
    date: '3 months ago',
    review: 'After getting quotes from 5 companies, Weather Shield was the clear choice. Not the cheapest, but the best value. Their attention to detail and customer service is unmatched. Highly recommend!',
    service: 'Roof Inspection',
    verified: true
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 lg:py-24 bg-weather-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-weather-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-weather-dark max-w-3xl mx-auto mb-6">
            Don't just take our word for it – hear from homeowners who've experienced the Weather Shield difference
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-lg font-bold text-weather-black">5.0</span>
            <span className="text-weather-dark">•</span>
            <span className="text-weather-dark">200+ Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-weather-teal/20" />
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-weather-dark">{testimonial.date}</span>
                  </div>

                  {/* Review */}
                  <p className="text-weather-dark mb-4 line-clamp-4">
                    "{testimonial.review}"
                  </p>

                  {/* Service Tag */}
                  <div className="inline-block px-3 py-1 bg-weather-teal/10 text-weather-teal rounded-full text-sm font-semibold mb-4">
                    {testimonial.service}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-weather-gray">
                    <div className="w-10 h-10 bg-weather-teal rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-weather-black">{testimonial.name}</p>
                      <p className="text-sm text-weather-dark">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-weather-dark" />
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-weather-dark" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-weather-teal'
                  : 'bg-weather-gray hover:bg-weather-dark'
              }`}
              aria-label={`Go to testimonials page ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-weather-dark mb-6">
            Join hundreds of satisfied customers who trust Weather Shield with their homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-weather-teal text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Your Free Quote
            </a>
            <a
              href="/testimonials"
              className="border-2 border-weather-teal text-weather-teal px-8 py-4 rounded-lg font-semibold hover:bg-weather-teal hover:text-white transition-all duration-300"
            >
              Read More Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}