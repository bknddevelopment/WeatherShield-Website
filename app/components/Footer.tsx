import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  CreditCard,
  Award,
  Star,
  Clock,
  ChevronRight
} from 'lucide-react';

const quickLinks = [
  { title: 'Emergency Service', href: '/emergency' },
  { title: 'Free Quote', href: '/quote' },
  { title: 'Warranty Info', href: '/warranty' },
  { title: 'Financing Options', href: '/financing' },
  { title: 'Careers', href: '/careers' },
  { title: 'Privacy Policy', href: '/privacy' },
];

const services = [
  { title: 'Roof Replacement', href: '/services/roof-replacement' },
  { title: 'Roof Repair', href: '/services/roof-repair' },
  { title: 'Storm Damage', href: '/services/storm-damage' },
  { title: 'Roof Inspections', href: '/services/roof-inspections' },
  { title: 'Gutter Services', href: '/services/gutter-services' },
  { title: 'Commercial Roofing', href: '/services/commercial' },
];

const serviceAreas = [
  'Myrtle Beach',
  'Conway',
  'North Myrtle Beach',
  'Surfside Beach',
  'Garden City',
  'Pawleys Island',
];

export default function Footer() {
  return (
    <footer className="bg-weather-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo/weather_shield_roofing_transparent.png"
                alt="Weather Shield Roofing"
                width={180}
                height={60}
                className="h-14 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Protecting Myrtle Beach homes with superior roofing solutions since 2010. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="space-y-2">
              <a href="tel:843-877-5539" className="flex items-center gap-2 text-gray-400 hover:text-weather-teal transition-colors">
                <Phone className="w-4 h-4" />
                <span>(843) 877-5539</span>
              </a>
              <a href="mailto:roofing@weathershieldroofers.com" className="flex items-center gap-2 text-gray-400 hover:text-weather-teal transition-colors">
                <Mail className="w-4 h-4" />
                <span>roofing@weathershieldroofers.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>215 Ronnie Ct. Unit F, Myrtle Beach, SC 29579</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="flex items-center gap-1 text-gray-400 hover:text-weather-teal transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link 
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-1 text-gray-400 hover:text-weather-teal transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link 
                href="/locations"
                className="text-weather-teal hover:text-weather-purple transition-colors font-semibold"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1 text-gray-400 hover:text-weather-teal transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges & Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">Angi Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">5.0 Google Reviews</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex gap-3">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <CreditCard className="w-6 h-4 text-gray-400" />
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  MC
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Weather Shield Roofing. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <Link href="/terms" className="hover:text-weather-teal transition-colors">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-weather-teal transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-weather-teal transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-weather-teal to-weather-teal-dark py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            24/7 Emergency Service Available - Call Now: (843) 877-5539
          </p>
        </div>
      </div>
    </footer>
  );
}