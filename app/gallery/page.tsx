'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import CTASection from '../components/CTASection';
import { motion, AnimatePresence } from 'framer-motion';

// Project types for filtering
const projectTypes = ['All', 'Residential', 'Commercial', 'Gutters', 'Siding', 'Storm Damage'] as const;
type ProjectType = typeof projectTypes[number];

// Project data interface
interface Project {
  id: number;
  title: string;
  type: ProjectType;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  completionTime: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Complete Roof Replacement',
    type: 'Residential',
    location: 'Austin, TX',
    description: 'Full roof replacement with architectural shingles after storm damage',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    completionTime: '3 days'
  },
  {
    id: 2,
    title: 'Commercial Metal Roofing',
    type: 'Commercial',
    location: 'Houston, TX',
    description: 'Standing seam metal roof installation for warehouse facility',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    completionTime: '1 week'
  },
  {
    id: 3,
    title: 'Seamless Gutter Installation',
    type: 'Gutters',
    location: 'San Antonio, TX',
    description: 'Custom seamless aluminum gutters with leaf guards',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    completionTime: '1 day'
  },
  {
    id: 4,
    title: 'Hail Damage Restoration',
    type: 'Storm Damage',
    location: 'Dallas, TX',
    description: 'Emergency repair and full restoration after severe hail storm',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    completionTime: '4 days'
  },
  {
    id: 5,
    title: 'Vinyl Siding Upgrade',
    type: 'Siding',
    location: 'Fort Worth, TX',
    description: 'Complete vinyl siding replacement with insulation upgrade',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    afterImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
    completionTime: '5 days'
  },
  {
    id: 6,
    title: 'Luxury Home Re-roofing',
    type: 'Residential',
    location: 'Plano, TX',
    description: 'Premium slate tile installation for upscale residence',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    completionTime: '2 weeks'
  },
  {
    id: 7,
    title: 'Retail Center Roof',
    type: 'Commercial',
    location: 'Arlington, TX',
    description: 'TPO flat roof system for shopping center',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    completionTime: '2 weeks'
  },
  {
    id: 8,
    title: 'Historic Home Restoration',
    type: 'Residential',
    location: 'Galveston, TX',
    description: 'Cedar shake roof restoration maintaining historical accuracy',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
    completionTime: '3 weeks'
  },
  {
    id: 9,
    title: 'Hurricane Damage Repair',
    type: 'Storm Damage',
    location: 'Corpus Christi, TX',
    description: 'Emergency response and complete roof reconstruction',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1430285561322-7808604715df?w=800',
    completionTime: '1 week'
  },
  {
    id: 10,
    title: 'Copper Gutter System',
    type: 'Gutters',
    location: 'The Woodlands, TX',
    description: 'Premium copper gutters and downspouts installation',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    afterImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
    completionTime: '2 days'
  },
  {
    id: 11,
    title: 'Fiber Cement Siding',
    type: 'Siding',
    location: 'Sugar Land, TX',
    description: 'James Hardie fiber cement siding with ColorPlus technology',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    afterImage: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
    completionTime: '1 week'
  },
  {
    id: 12,
    title: 'Office Complex Roof',
    type: 'Commercial',
    location: 'Irving, TX',
    description: 'EPDM rubber roofing system for multi-story office building',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    completionTime: '3 weeks'
  }
];

// Statistics data
const stats = [
  { label: 'Projects Completed', value: '2,500+' },
  { label: 'Years of Service', value: '15' },
  { label: 'Satisfied Customers', value: '98%' },
  { label: 'Insurance Claims Handled', value: '1,000+' }
];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showBeforeImage, setShowBeforeImage] = useState(true);

  // Filter projects based on selected type
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-teal to-weather-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Browse through our portfolio of completed roofing, siding, and gutter projects across Texas.
              Each project showcases our commitment to quality craftsmanship and customer satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">{projects.length}</span>
                <span className="text-sm ml-2">Featured Projects</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-sm ml-2">Real Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === type
                    ? 'bg-weather-teal text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
                {type === 'All' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({projects.length})
                  </span>
                )}
                {type !== 'All' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({projects.filter(p => p.type === type).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container with Before/After Toggle */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                      Before
                    </div>
                    <div className="absolute top-4 left-4 bg-weather-teal text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      After
                    </div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 right-4 bg-weather-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {project.location}
                      </span>
                      <span className="text-weather-teal font-medium">
                        {project.completionTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Track Record of Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Display */}
              <div className="relative h-96 md:h-[600px] bg-gray-100">
                <img
                  src={showBeforeImage ? selectedProject.beforeImage : selectedProject.afterImage}
                  alt={`${selectedProject.title} - ${showBeforeImage ? 'Before' : 'After'}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Before/After Toggle */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex overflow-hidden">
                  <button
                    onClick={() => setShowBeforeImage(true)}
                    className={`px-6 py-2 font-medium transition-colors ${
                      showBeforeImage 
                        ? 'bg-weather-teal text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowBeforeImage(false)}
                    className={`px-6 py-2 font-medium transition-colors ${
                      !showBeforeImage 
                        ? 'bg-weather-teal text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedProject.description}
                    </p>
                  </div>
                  <span className="bg-weather-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedProject.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div>
                    <span className="text-gray-500 text-sm">Location</span>
                    <p className="font-medium">{selectedProject.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Completion Time</span>
                    <p className="font-medium">{selectedProject.completionTime}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-gray-500 text-sm">Project Type</span>
                    <p className="font-medium">{selectedProject.type}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-4">
                  <button className="flex-1 bg-weather-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-weather-teal/90 transition-colors">
                    Request Similar Work
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    View More Projects
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingContact />
      <Footer />
    </div>
  );
}