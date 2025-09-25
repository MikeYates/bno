'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { Montserrat, Birthstone } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const birthstone = Birthstone({
  weight: '400',
  subsets: ['latin'],
});

type Testimonial = {
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { name: 'Sarah Johnson', text: 'Dr. Smith transformed my confidence with exceptional rhinoplasty. The results exceeded my expectations, and the care was outstanding.' },
  { name: 'Michael Chen', text: 'After years of insecurity, the breast augmentation procedure was life-changing. Professional team and natural-looking results.' },
  { name: 'Emily Rodriguez', text: 'The facelift procedure took years off my appearance. The clinic\'s expertise and personalized approach made all the difference.' },
  { name: 'David Thompson', text: 'Outstanding liposuction results. The staff was supportive throughout, and I couldn\'t be happier with the outcome.' },
  { name: 'Lisa Park', text: 'Botox treatments here are precise and natural. The doctor\'s attention to detail ensures beautiful, subtle enhancements.' },
  { name: 'James Wilson', text: 'Eyelid surgery was seamless. Professional care and results that look completely natural. Highly recommend.' },
  { name: 'Anna Kowalski', text: 'The tummy tuck procedure was transformative. The team\'s expertise and post-care support were exceptional.' },
  { name: 'Robert Garcia', text: 'Dermal fillers gave me the youthful glow I wanted. Skilled injections and long-lasting results.' },
  { name: 'Maria Santos', text: 'Hair transplant surgery restored my confidence. The clinic\'s advanced techniques delivered impressive results.' },
  { name: 'Kevin Brown', text: 'Chin implant procedure was perfect. The surgeon\'s precision and the natural outcome exceeded my expectations.' },
];

const TestimonialsCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#BCA77B]/70 hover:text-[#BCA77B] transition-colors">
        <CaretLeft size={32} />
      </button>
      <div className="text-center px-12">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} weight="fill" className="text-[#BCA77B]" />
          ))}
        </div>
        <blockquote className={`text-xl md:text-2xl text-white mb-4 italic ${montserrat.className}`}>
          <span className="text-[#801950]">&ldquo;</span>{testimonial.text}<span className="text-[#801950]">&rdquo;</span>
        </blockquote>
        <p className={`text-[#BCA77B] font-semibold ${montserrat.className}`}>- {testimonial.name}</p>
      </div>
      <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#BCA77B]/70 hover:text-[#BCA77B] transition-colors">
        <CaretRight size={32} />
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white ${montserrat.className}`}>OVER 1000<span className={`text-5xl md:text-6xl lg:text-7xl text-[#BCA77B] ${birthstone.className}`}> Happy Patients</span></h3>
            <h4 className={`text-xl md:text-2xl font-light text-white ${montserrat.className}`} style={{ letterSpacing: '0.3em' }}>OPERATING SINCE 2017</h4>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
      <section className="py-16" style={{ background: 'linear-gradient(to bottom, #000000 0%, #641942 100%)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")', opacity: 0.1 }}></div>
        <BentoGrid />
      </section>
    </div>
  );
}
