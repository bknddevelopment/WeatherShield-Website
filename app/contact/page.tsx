"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "normal",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        urgency: "normal",
        message: ""
      });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all roofing projects. Our experienced team will assess your needs and provide a detailed quote."
    },
    {
      question: "How quickly can you respond to emergency repairs?",
      answer: "We offer 24/7 emergency roofing services and typically respond within 2-4 hours for urgent situations. Call our emergency hotline for immediate assistance."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve Myrtle Beach and surrounding areas within a 50-mile radius, including Conway, North Myrtle Beach, Surfside Beach, and Garden City."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Absolutely! We have extensive experience working with insurance companies and can help guide you through the claims process from start to finish."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements are completed within 1-3 days, depending on the size and complexity of the project. We'll provide a timeline during your estimate."
    },
    {
      question: "What types of roofing materials do you work with?",
      answer: "We work with all major roofing materials including asphalt shingles, metal roofing, tile, slate, and flat roofing systems. We'll help you choose the best option for your needs and budget."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-weather-teal text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch with WeatherShield
            </h1>
            <p className="text-xl">
              Ready to protect your home? Contact our expert team for a free estimate or emergency service.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <AlertCircle className="w-6 h-6" />
            <span className="font-semibold">24/7 Emergency Service Available</span>
            <span className="hidden md:inline">•</span>
            <a href="tel:8438775539" className="font-bold hover:underline hidden md:inline">
              Call Now: (843) 877-5539
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-weather-blue">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="roof-replacement">Roof Replacement</option>
                      <option value="roof-repair">Roof Repair</option>
                      <option value="emergency-repair">Emergency Repair</option>
                      <option value="inspection">Roof Inspection</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-weather-teal text-white font-semibold py-3 px-6 rounded-lg hover:bg-weather-blue transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Business Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-weather-blue">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-weather-teal mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:8438775539" className="text-weather-teal hover:underline">
                      (843) 877-5539
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-weather-teal mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:roofing@weathershieldroofers.com" className="text-weather-teal hover:underline">
                      roofing@weathershieldroofers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-weather-teal mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p>215 Ronnie Ct. Unit F</p>
                    <p>Myrtle Beach, SC 29579</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-weather-teal mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                    <p className="text-sm text-gray-600 mt-1">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a href="tel:8438775539" className="block w-full text-center bg-weather-teal text-white py-3 px-4 rounded-lg hover:bg-weather-blue transition-colors">
                    Call Now
                  </a>
                  <button className="block w-full text-center bg-white text-weather-teal border-2 border-weather-teal py-3 px-4 rounded-lg hover:bg-weather-teal hover:text-white transition-colors">
                    Schedule Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-weather-blue">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8!2d-78.8764!3d33.6891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s215%20Ronnie%20Ct%20Unit%20F%2C%20Myrtle%20Beach%2C%20SC%2029579!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WeatherShield Roofers Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-weather-blue">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-weather-blue">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a href="tel:8438775539" className="inline-block bg-weather-teal text-white font-semibold py-3 px-8 rounded-lg hover:bg-weather-blue transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </>
  );
}