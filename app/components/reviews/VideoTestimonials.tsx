'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  User,
  Calendar,
  MapPin,
  Star,
  Home,
  Building,
  Cloud
} from 'lucide-react';
import { useState } from 'react';

interface VideoTestimonial {
  id: number;
  name: string;
  location: string;
  date: string;
  service: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  rating: number;
  quote: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Robert & Linda Martinez',
    location: 'Myrtle Beach, SC',
    date: '2024-01-10',
    service: 'Complete Roof Replacement',
    thumbnailUrl: '/api/placeholder/640/360',
    videoUrl: '#',
    duration: '2:34',
    rating: 5,
    quote: 'Weather Shield transformed our home with a beautiful new roof. The team was professional from start to finish!'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Conway, SC',
    date: '2023-12-15',
    service: 'Storm Damage Repair',
    thumbnailUrl: '/api/placeholder/640/360',
    videoUrl: '#',
    duration: '1:58',
    rating: 5,
    quote: 'After hurricane damage, they handled everything - insurance, repairs, and cleanup. Incredible service!'
  },
  {
    id: 3,
    name: 'The Thompson Family',
    location: 'North Myrtle Beach, SC',
    date: '2023-11-20',
    service: 'Siding & Gutters',
    thumbnailUrl: '/api/placeholder/640/360',
    videoUrl: '#',
    duration: '3:12',
    rating: 5,
    quote: 'Our home looks brand new! The quality of work and attention to detail exceeded our expectations.'
  }
];

const serviceIcons: Record<string, JSX.Element> = {
  'Complete Roof Replacement': <Home className="w-4 h-4" />,
  'Storm Damage Repair': <Cloud className="w-4 h-4" />,
  'Siding & Gutters': <Building className="w-4 h-4" />,
};

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 text-weather-teal px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4" />
            <span className="font-semibold text-sm">VIDEO TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real stories from real customers about their experience with Weather Shield Roofing
          </p>
        </motion.div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Player Placeholder */}
              <div className="relative aspect-video bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-white/80">Video Player Placeholder</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-weather-teal transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <span className="text-sm">{selectedVideo.duration}</span>
                    </div>
                    <button className="hover:text-weather-teal transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="bg-white p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedVideo.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedVideo.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(selectedVideo.date)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-weather-teal/10 rounded-full">
                    {serviceIcons[selectedVideo.service]}
                    <span className="text-sm font-semibold text-weather-teal">
                      {selectedVideo.service}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{selectedVideo.quote}"
                </p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Thumbnails Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-8 h-8 text-weather-teal ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="bg-white p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-weather-teal transition-colors">
                    {video.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{video.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {serviceIcons[video.service]}
                      <span>{video.service}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic line-clamp-2">
                    "{video.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to share your Weather Shield experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-weather-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-weather-teal-dark transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="https://g.page/r/YOUR_GOOGLE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-weather-teal text-weather-teal px-8 py-4 rounded-lg font-semibold hover:bg-weather-teal hover:text-white transition-all duration-300"
            >
              Share Your Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}