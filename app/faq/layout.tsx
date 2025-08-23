import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | WeatherShield Roofing Myrtle Beach',
  description: 'Get answers to common roofing questions from Myrtle Beach\'s trusted experts. Learn about roof replacement, repairs, costs, warranties, and emergency services.',
  keywords: 'roofing FAQ, Myrtle Beach roofing questions, roof replacement cost, roof repair, storm damage, GAF warranty, roofing contractor questions, emergency roof repair',
  openGraph: {
    title: 'Frequently Asked Questions - WeatherShield Roofing',
    description: 'Find answers to all your roofing questions. From costs and warranties to emergency services and maintenance.',
    type: 'website',
    url: 'https://weathershieldroofing.com/faq',
    images: [
      {
        url: '/images/logo/weather_shield_roofing_transparent.png',
        width: 1200,
        height: 630,
        alt: 'WeatherShield Roofing FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - WeatherShield Roofing Myrtle Beach',
    description: 'Get expert answers to your roofing questions. 24/7 emergency service available.',
    images: ['/images/logo/weather_shield_roofing_transparent.png'],
  },
  alternates: {
    canonical: 'https://weathershieldroofing.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}