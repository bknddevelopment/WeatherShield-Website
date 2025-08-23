'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import { ChevronLeft, ChevronRight, Check, Upload, Home, Building2, Clock, AlertCircle } from 'lucide-react'

interface FormData {
  // Step 1
  serviceType: string
  urgencyLevel: string
  propertyType: string
  // Step 2
  address: string
  roofAge: string
  squareFootage: string
  currentMaterial: string
  knownIssues: string[]
  // Step 3
  name: string
  email: string
  phone: string
  preferredContact: string
  bestTime: string
  // Step 4
  photos: File[]
  additionalNotes: string
  insuranceClaim: string
  // Step 5
  agreedToTerms: boolean
}

const initialFormData: FormData = {
  serviceType: '',
  urgencyLevel: '',
  propertyType: '',
  address: '',
  roofAge: '',
  squareFootage: '',
  currentMaterial: '',
  knownIssues: [],
  name: '',
  email: '',
  phone: '',
  preferredContact: '',
  bestTime: '',
  photos: [],
  additionalNotes: '',
  insuranceClaim: '',
  agreedToTerms: false
}

const services = [
  'Roof Replacement',
  'Roof Repair',
  'Gutter Installation',
  'Gutter Repair',
  'Siding Installation',
  'Emergency Repairs',
  'Roof Inspection',
  'Storm Damage Assessment'
]

const urgencyLevels = [
  { value: 'emergency', label: 'Emergency (24-48 hours)', icon: AlertCircle },
  { value: 'urgent', label: 'Urgent (Within 1 week)', icon: Clock },
  { value: 'standard', label: 'Standard (Within 2-4 weeks)', icon: Home },
  { value: 'planning', label: 'Planning Ahead (1+ months)', icon: Building2 }
]

const roofingMaterials = [
  'Asphalt Shingles',
  'Metal Roofing',
  'Tile Roofing',
  'Slate Roofing',
  'Wood Shingles',
  'Flat/Rubber Roofing',
  'Other/Not Sure'
]

const commonIssues = [
  'Leaks or water damage',
  'Missing or damaged shingles',
  'Storm damage',
  'Age-related wear',
  'Sagging roof',
  'Damaged gutters',
  'Poor ventilation',
  'Ice dams'
]

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const toggleIssue = (issue: string) => {
    setFormData(prev => ({
      ...prev,
      knownIssues: prev.knownIssues.includes(issue)
        ? prev.knownIssues.filter(i => i !== issue)
        : [...prev.knownIssues, issue]
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service type'
        if (!formData.urgencyLevel) newErrors.urgencyLevel = 'Please select urgency level'
        if (!formData.propertyType) newErrors.propertyType = 'Please select property type'
        break
      case 2:
        if (!formData.address) newErrors.address = 'Address is required'
        if (!formData.roofAge) newErrors.roofAge = 'Please select roof age'
        if (!formData.squareFootage) newErrors.squareFootage = 'Square footage is required'
        if (!formData.currentMaterial) newErrors.currentMaterial = 'Please select current material'
        break
      case 3:
        if (!formData.name) newErrors.name = 'Name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address'
        if (!formData.phone) newErrors.phone = 'Phone number is required'
        else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number'
        if (!formData.preferredContact) newErrors.preferredContact = 'Please select preferred contact method'
        if (!formData.bestTime) newErrors.bestTime = 'Please select best time to contact'
        break
      case 4:
        if (!formData.insuranceClaim) newErrors.insuranceClaim = 'Please indicate if this is an insurance claim'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!formData.agreedToTerms) {
      setErrors({ agreedToTerms: 'Please agree to the terms' })
      return
    }

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    updateFormData('photos', files)
  }

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Select Your Service</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What service do you need?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => updateFormData('serviceType', service)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      formData.serviceType === service
                        ? 'border-weather-teal bg-weather-teal/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How urgent is this?
              </label>
              <div className="space-y-3">
                {urgencyLevels.map(level => {
                  const Icon = level.icon
                  return (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => updateFormData('urgencyLevel', level.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left flex items-center gap-3 transition-all ${
                        formData.urgencyLevel === level.value
                          ? 'border-weather-teal bg-weather-teal/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{level.label}</span>
                    </button>
                  )
                })}
              </div>
              {errors.urgencyLevel && (
                <p className="text-red-500 text-sm mt-1">{errors.urgencyLevel}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Residential', 'Commercial'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateFormData('propertyType', type)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.propertyType === type
                        ? 'border-weather-teal bg-weather-teal/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
              )}
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Property Details</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="123 Main St, City, State ZIP"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roof Age
              </label>
              <select
                value={formData.roofAge}
                onChange={(e) => updateFormData('roofAge', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
              >
                <option value="">Select age</option>
                <option value="0-5">0-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10-15">10-15 years</option>
                <option value="15-20">15-20 years</option>
                <option value="20+">20+ years</option>
                <option value="unknown">Unknown</option>
              </select>
              {errors.roofAge && (
                <p className="text-red-500 text-sm mt-1">{errors.roofAge}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Approximate Square Footage
              </label>
              <input
                type="text"
                value={formData.squareFootage}
                onChange={(e) => updateFormData('squareFootage', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="e.g., 2000"
              />
              {errors.squareFootage && (
                <p className="text-red-500 text-sm mt-1">{errors.squareFootage}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Roofing Material
              </label>
              <select
                value={formData.currentMaterial}
                onChange={(e) => updateFormData('currentMaterial', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
              >
                <option value="">Select material</option>
                {roofingMaterials.map(material => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>
              {errors.currentMaterial && (
                <p className="text-red-500 text-sm mt-1">{errors.currentMaterial}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Known Issues (check all that apply)
              </label>
              <div className="space-y-2">
                {commonIssues.map(issue => (
                  <label key={issue} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.knownIssues.includes(issue)}
                      onChange={() => toggleIssue(issue)}
                      className="w-4 h-4 text-weather-teal rounded focus:ring-2 focus:ring-weather-teal"
                    />
                    <span className="text-gray-700">{issue}</span>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Phone', 'Email', 'Text'].map(method => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => updateFormData('preferredContact', method)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.preferredContact === method
                        ? 'border-weather-teal bg-weather-teal/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              {errors.preferredContact && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredContact}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Best Time to Contact
              </label>
              <select
                value={formData.bestTime}
                onChange={(e) => updateFormData('bestTime', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
                <option value="anytime">Anytime</option>
              </select>
              {errors.bestTime && (
                <p className="text-red-500 text-sm mt-1">{errors.bestTime}</p>
              )}
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Additional Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <label className="cursor-pointer">
                  <span className="text-weather-teal hover:text-weather-blue">Click to upload</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB each</p>
                {formData.photos.length > 0 && (
                  <p className="text-sm text-weather-teal mt-3">
                    {formData.photos.length} file(s) selected
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent"
                placeholder="Tell us anything else about your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Is this for an insurance claim?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Yes', 'No', 'Maybe'].map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateFormData('insuranceClaim', option)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.insuranceClaim === option
                        ? 'border-weather-teal bg-weather-teal/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.insuranceClaim && (
                <p className="text-red-500 text-sm mt-1">{errors.insuranceClaim}</p>
              )}
            </div>
          </motion.div>
        )

      case 5:
        if (isSubmitted) {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Your quote request has been submitted successfully.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold text-gray-800 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-weather-teal mt-1">✓</span>
                    <span>Our team will review your request within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-weather-teal mt-1">✓</span>
                    <span>We'll contact you via your preferred method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-weather-teal mt-1">✓</span>
                    <span>Schedule a free on-site inspection if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-weather-teal mt-1">✓</span>
                    <span>Receive your detailed estimate</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="mt-8 px-6 py-3 bg-weather-teal text-white rounded-lg hover:bg-weather-blue transition-colors"
              >
                Return to Home
              </button>
            </motion.div>
          )
        }

        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Review Your Information</h2>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Service Details</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Service: {formData.serviceType}</p>
                  <p>Urgency: {urgencyLevels.find(u => u.value === formData.urgencyLevel)?.label}</p>
                  <p>Property Type: {formData.propertyType}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Property Information</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Address: {formData.address}</p>
                  <p>Roof Age: {formData.roofAge} years</p>
                  <p>Square Footage: {formData.squareFootage} sq ft</p>
                  <p>Current Material: {formData.currentMaterial}</p>
                  {formData.knownIssues.length > 0 && (
                    <div>
                      <p>Known Issues:</p>
                      <ul className="ml-4 text-sm">
                        {formData.knownIssues.map(issue => (
                          <li key={issue}>• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Name: {formData.name}</p>
                  <p>Email: {formData.email}</p>
                  <p>Phone: {formData.phone}</p>
                  <p>Preferred Contact: {formData.preferredContact}</p>
                  <p>Best Time: {formData.bestTime}</p>
                </div>
              </div>

              {(formData.additionalNotes || formData.insuranceClaim) && (
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Additional Information</h3>
                  <div className="space-y-1 text-gray-600">
                    {formData.insuranceClaim && <p>Insurance Claim: {formData.insuranceClaim}</p>}
                    {formData.additionalNotes && <p>Notes: {formData.additionalNotes}</p>}
                    {formData.photos.length > 0 && <p>Photos: {formData.photos.length} file(s) attached</p>}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                By submitting this form, you agree to be contacted by WeatherShield Roofing 
                regarding your quote request. We respect your privacy and will not share your 
                information with third parties.
              </p>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) => updateFormData('agreedToTerms', e.target.checked)}
                className="w-4 h-4 text-weather-teal rounded focus:ring-2 focus:ring-weather-teal"
              />
              <span className="text-gray-700">
                I agree to the terms and conditions and consent to be contacted
              </span>
            </label>
            {errors.agreedToTerms && (
              <p className="text-red-500 text-sm">{errors.agreedToTerms}</p>
            )}
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-weather-light to-white pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl font-bold text-gray-800">Get Your Free Quote</h1>
                <span className="text-sm text-gray-600">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-weather-teal to-weather-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {['Service', 'Property', 'Contact', 'Additional', 'Review'].map((label, index) => (
                  <span
                    key={label}
                    className={`text-xs ${
                      index + 1 <= currentStep ? 'text-weather-teal font-semibold' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {!isSubmitted && (
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-3 bg-weather-teal text-white rounded-lg hover:bg-weather-blue transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          Submit Quote Request
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Trust Badges */}
            {!isSubmitted && (
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>No Obligation</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}