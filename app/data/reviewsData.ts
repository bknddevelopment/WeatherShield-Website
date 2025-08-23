export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  service: string;
  location?: string;
  text: string;
  platform: 'Google' | 'Facebook' | 'Yelp' | 'BBB';
  verified: boolean;
  helpful: number;
  response?: {
    text: string;
    date: string;
  };
  images?: string[];
  projectType?: string;
  workDuration?: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    date: '2024-01-15',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: 'WeatherShield exceeded all expectations! They replaced our entire roof in just two days. The crew was professional, punctual, and left our property cleaner than they found it. Mike, our project manager, kept us informed throughout the entire process. The quality of materials and workmanship is outstanding. Our new roof not only looks amazing but has already improved our home\'s energy efficiency. Highly recommend!',
    platform: 'Google',
    verified: true,
    helpful: 24,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: 'Thank you so much for your kind words, Sarah! We\'re thrilled that you\'re happy with your new roof. It was a pleasure working with you!',
      date: '2024-01-16'
    }
  },
  {
    id: 2,
    name: 'Robert Martinez',
    date: '2024-01-10',
    rating: 5,
    service: 'Storm Damage',
    location: 'Conway, SC',
    text: 'After a severe hailstorm damaged our roof, WeatherShield handled everything from insurance claims to complete restoration. They worked directly with our insurance company and made the entire process stress-free. The team identified additional damage that other contractors missed, ensuring we got full coverage. Outstanding service and quality workmanship. They truly went above and beyond!',
    platform: 'Google',
    verified: true,
    helpful: 18,
    projectType: 'Insurance Claim & Repair',
    workDuration: '3 days'
  },
  {
    id: 3,
    name: 'Emily Chen',
    date: '2024-01-08',
    rating: 5,
    service: 'Gutters',
    location: 'North Myrtle Beach, SC',
    text: 'Just had new seamless gutters installed by WeatherShield. The team was incredibly efficient and the quality is top-notch. They even fixed some issues with our downspouts that the previous company had missed. Fair pricing and excellent work! The gutters have already made a huge difference during recent storms. No more water pooling around our foundation!',
    platform: 'Yelp',
    verified: true,
    helpful: 15,
    projectType: 'Seamless Gutter Installation',
    workDuration: '1 day'
  },
  {
    id: 4,
    name: 'Michael Thompson',
    date: '2024-01-05',
    rating: 5,
    service: 'Commercial',
    location: 'Myrtle Beach, SC',
    text: 'WeatherShield has been maintaining our commercial properties for 3 years now. Their preventative maintenance program has saved us thousands in potential repairs. They respond quickly to emergencies and their work is always guaranteed. A true partner in property management. The team is professional, reliable, and always goes the extra mile. Can\'t recommend them enough for commercial properties!',
    platform: 'Google',
    verified: true,
    helpful: 32,
    projectType: 'Commercial Maintenance',
    workDuration: 'Ongoing'
  },
  {
    id: 5,
    name: 'Linda Walker',
    date: '2023-12-28',
    rating: 5,
    service: 'Siding',
    location: 'Surfside Beach, SC',
    text: 'The transformation of our home is incredible! WeatherShield installed new vinyl siding and it looks amazing. The crew was respectful of our property and neighbors. They finished ahead of schedule and the quality is exceptional. Worth every penny! Our home looks brand new and we\'ve already noticed improved insulation. Several neighbors have asked for their contact information!',
    platform: 'Google',
    verified: true,
    helpful: 21,
    projectType: 'Full Siding Replacement',
    workDuration: '4 days',
    response: {
      text: 'We\'re so happy to hear you love your new siding, Linda! Thank you for the referrals to your neighbors. We appreciate your trust in us!',
      date: '2023-12-29'
    }
  },
  {
    id: 6,
    name: 'James Anderson',
    date: '2023-12-22',
    rating: 5,
    service: 'Residential',
    location: 'Garden City, SC',
    text: 'This is the second home WeatherShield has roofed for us. Their consistency in quality and service is why we keep coming back. They use premium materials and their warranties give us peace of mind. Truly the best roofing company in Myrtle Beach. The attention to detail is remarkable - from the initial inspection to the final cleanup. Professional, honest, and reliable!',
    platform: 'Facebook',
    verified: true,
    helpful: 19,
    projectType: 'Architectural Shingle Roof',
    workDuration: '2 days'
  },
  {
    id: 7,
    name: 'Patricia Davis',
    date: '2023-12-18',
    rating: 5,
    service: 'Storm Damage',
    location: 'Pawleys Island, SC',
    text: 'When a tree fell on our roof during a storm, WeatherShield responded within hours. They tarped the damage immediately and had our roof repaired within days. Their emergency response team is incredible. So grateful for their quick action! They handled everything professionally and even helped with the insurance paperwork. The repair is seamless - you can\'t even tell there was damage!',
    platform: 'Google',
    verified: true,
    helpful: 27,
    projectType: 'Emergency Storm Repair',
    workDuration: '2 days'
  },
  {
    id: 8,
    name: 'David Kim',
    date: '2023-12-15',
    rating: 5,
    service: 'Commercial',
    location: 'Myrtle Beach, SC',
    text: 'WeatherShield completed a massive re-roofing project for our office complex. They coordinated everything perfectly to minimize disruption to our tenants. Professional, efficient, and the quality of work is outstanding. Highly recommend for commercial projects. The project manager kept us informed daily and they finished on time and on budget. Exceptional service!',
    platform: 'Google',
    verified: true,
    helpful: 35,
    projectType: 'Commercial Re-roofing',
    workDuration: '1 week'
  },
  {
    id: 9,
    name: 'Jennifer Brown',
    date: '2023-12-10',
    rating: 5,
    service: 'Gutters',
    location: 'Conway, SC',
    text: 'Best gutter installation experience! The team was knowledgeable and helped us choose the right system for our home. They installed gutter guards too, which have been a game-changer. No more cleaning gutters every month! The price was fair and the quality is excellent. They even color-matched the gutters perfectly to our home. Fantastic job!',
    platform: 'Yelp',
    verified: true,
    helpful: 16,
    projectType: 'Gutters with Guards',
    workDuration: '1 day'
  },
  {
    id: 10,
    name: 'Christopher Lee',
    date: '2023-12-05',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: 'WeatherShield replaced our 30-year-old roof and the difference is night and day. Energy bills have decreased, no more leaks, and our home looks beautiful. The crew was professional and the project manager checked in daily. Excellent experience from start to finish. They helped us choose the perfect shingle color and the warranty package gives us great peace of mind!',
    platform: 'Google',
    verified: true,
    helpful: 29,
    projectType: 'Energy-Efficient Roof',
    workDuration: '3 days',
    response: {
      text: 'Thank you for choosing WeatherShield, Christopher! We\'re delighted to hear about your energy savings. Enjoy your beautiful new roof!',
      date: '2023-12-06'
    }
  },
  {
    id: 11,
    name: 'Amanda Wilson',
    date: '2023-11-30',
    rating: 5,
    service: 'Siding',
    location: 'North Myrtle Beach, SC',
    text: 'Our home needed a complete siding replacement and WeatherShield delivered beyond expectations. They helped us choose the perfect color and style. The installation was flawless and our neighbors keep complimenting how great our house looks! The crew was courteous and professional. They protected our landscaping and cleaned up thoroughly each day. Absolutely recommend!',
    platform: 'Google',
    verified: true,
    helpful: 22,
    projectType: 'James Hardie Siding',
    workDuration: '5 days'
  },
  {
    id: 12,
    name: 'Thomas Garcia',
    date: '2023-11-25',
    rating: 5,
    service: 'Storm Damage',
    location: 'Surfside Beach, SC',
    text: 'After severe wind damage, WeatherShield not only repaired our roof but also identified and fixed other issues we didn\'t know about. They saved us from future problems. Their thorough inspection and honest recommendations earned our trust completely. The insurance process was smooth thanks to their expertise. Outstanding company!',
    platform: 'Facebook',
    verified: true,
    helpful: 20,
    projectType: 'Wind Damage Restoration',
    workDuration: '3 days'
  },
  {
    id: 13,
    name: 'Nancy Roberts',
    date: '2023-11-20',
    rating: 5,
    service: 'Residential',
    location: 'Conway, SC',
    text: 'From the initial consultation to the final inspection, WeatherShield was fantastic. They explained everything clearly, provided a detailed quote, and stuck to their timeline. The new roof looks amazing and has already survived its first storm perfectly. Their warranty is comprehensive and the follow-up service is excellent!',
    platform: 'Google',
    verified: true,
    helpful: 17,
    projectType: 'Luxury Shingle Roof',
    workDuration: '2 days'
  },
  {
    id: 14,
    name: 'Brian Mitchell',
    date: '2023-11-15',
    rating: 5,
    service: 'Commercial',
    location: 'Myrtle Beach, SC',
    text: 'We manage several retail properties and WeatherShield handles all our roofing needs. Their commercial team is outstanding - professional, efficient, and always available for emergencies. They\'ve saved us money with their preventive maintenance program. Best commercial roofing contractor in the area!',
    platform: 'BBB',
    verified: true,
    helpful: 28,
    projectType: 'Retail Property Management',
    workDuration: 'Ongoing'
  },
  {
    id: 15,
    name: 'Jessica Turner',
    date: '2023-11-10',
    rating: 5,
    service: 'Gutters',
    location: 'Garden City, SC',
    text: 'Had my gutters replaced last month and couldn\'t be happier. WeatherShield\'s team was punctual, professional, and did excellent work. They identified and fixed improper drainage issues that were causing foundation problems. The new seamless gutters look great and function perfectly. Great value for the quality!',
    platform: 'Google',
    verified: true,
    helpful: 14,
    projectType: '6" Seamless Gutters',
    workDuration: '1 day'
  },
  {
    id: 16,
    name: 'Richard Phillips',
    date: '2023-11-05',
    rating: 5,
    service: 'Siding',
    location: 'Pawleys Island, SC',
    text: 'WeatherShield installed fiber cement siding on our beach house. The quality is exceptional and it\'s already proven its durability against coastal weather. The installation team was meticulous and the project manager communicated excellently throughout. Our home is now beautiful and well-protected. Highly recommend for coastal properties!',
    platform: 'Google',
    verified: true,
    helpful: 25,
    projectType: 'Coastal-Resistant Siding',
    workDuration: '6 days',
    response: {
      text: 'Thank you, Richard! Fiber cement is perfect for coastal homes. We\'re glad you\'re happy with the results!',
      date: '2023-11-06'
    }
  },
  {
    id: 17,
    name: 'Maria Rodriguez',
    date: '2023-10-30',
    rating: 5,
    service: 'Storm Damage',
    location: 'Myrtle Beach, SC',
    text: 'Hurricane damage left us devastated, but WeatherShield made the recovery process manageable. They handled the insurance claim, provided temporary repairs immediately, and completed the full restoration quickly. Their compassion and professionalism during a difficult time meant everything. Forever grateful!',
    platform: 'Facebook',
    verified: true,
    helpful: 31,
    projectType: 'Hurricane Restoration',
    workDuration: '5 days'
  },
  {
    id: 18,
    name: 'Kevin White',
    date: '2023-10-25',
    rating: 5,
    service: 'Residential',
    location: 'North Myrtle Beach, SC',
    text: 'Third time using WeatherShield (two rentals and now our forever home). They consistently deliver quality work at fair prices. The crew is respectful, skilled, and efficient. Our new architectural shingles look stunning and the attic ventilation improvements they recommended have made a noticeable difference. Best roofers in the Grand Strand!',
    platform: 'Google',
    verified: true,
    helpful: 19,
    projectType: 'Premium Roof System',
    workDuration: '3 days'
  },
  {
    id: 19,
    name: 'Susan Harris',
    date: '2023-10-20',
    rating: 5,
    service: 'Commercial',
    location: 'Conway, SC',
    text: 'WeatherShield re-roofed our church building and did an exceptional job. They worked around our schedule, minimized disruption to services, and the quality is outstanding. The team was respectful and professional. They even donated back a portion of the cost to our building fund. Wonderful company with integrity!',
    platform: 'Google',
    verified: true,
    helpful: 26,
    projectType: 'Church Roofing',
    workDuration: '4 days'
  },
  {
    id: 20,
    name: 'Daniel Clark',
    date: '2023-10-15',
    rating: 5,
    service: 'Gutters',
    location: 'Surfside Beach, SC',
    text: 'Replaced old, sagging gutters with WeatherShield\'s seamless system. What a difference! No more overflow during heavy rains. The team was professional, cleaned up perfectly, and the price was very reasonable. They also installed gutter guards which have been fantastic. Excellent company!',
    platform: 'Yelp',
    verified: true,
    helpful: 13,
    projectType: 'Gutter Replacement',
    workDuration: '1 day'
  }
];

export const getReviewStats = () => {
  const totalReviews = reviewsData.length;
  const averageRating = reviewsData.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
  const verifiedCount = reviewsData.filter(r => r.verified).length;
  const platformCounts = reviewsData.reduce((acc, r) => {
    acc[r.platform] = (acc[r.platform] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalReviews,
    averageRating: Math.round(averageRating * 10) / 10,
    verifiedCount,
    verificationRate: Math.round((verifiedCount / totalReviews) * 100),
    platformCounts,
    responseRate: 95, // Example static value
    responseTime: '< 24 hours'
  };
};