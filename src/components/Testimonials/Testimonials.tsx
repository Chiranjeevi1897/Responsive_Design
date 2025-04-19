import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    content: "The attention to detail and design quality is unmatched. This platform has completely transformed our website and significantly improved our conversion rates.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 5
  },
  {
    id: 2,
    content: "As a developer, I appreciate the clean code and thoughtful architecture. It's made our team much more productive and the final result is always impressive.",
    author: "Michael Chen",
    position: "Lead Developer, CodeCraft",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 5
  },
  {
    id: 3,
    content: "The customer support team is incredible. They've helped us through every step and made sure our website looks exactly how we envisioned it.",
    author: "Emily Rodriguez",
    position: "Marketing Director, Brandify",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 4
  },
  {
    id: 4,
    content: "We've tried several platforms before, but none have offered the combination of ease-of-use and professional results that we've found here.",
    author: "David Wilson",
    position: "Founder, CreativeSpace",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = 3;
  
  const nextSlide = () => {
    setActiveIndex((prev) => 
      prev === testimonials.length - visibleTestimonials ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - visibleTestimonials : prev - 1
    );
  };
  
  // Calculate which testimonials to show based on active index and visible count
  const shownTestimonials = testimonials.slice(activeIndex, activeIndex + visibleTestimonials);
  
  // If we don't have enough testimonials from the slice, add from the beginning
  if (shownTestimonials.length < visibleTestimonials) {
    const remaining = visibleTestimonials - shownTestimonials.length;
    shownTestimonials.push(...testimonials.slice(0, remaining));
  }
  
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear what our satisfied customers have to say about their experience.
          </p>
        </AnimatedSection>
        
        <div className={styles.carouselContainer}>
          <div className={styles.testimonialGrid}>
            {shownTestimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={testimonial.id} 
                delay={index * 100}
                className={styles.testimonialCard}
              >
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonial.rating ? '#FFC107' : 'none'} 
                      color={i < testimonial.rating ? '#FFC107' : '#CBD5E1'} 
                    />
                  ))}
                </div>
                
                <p className={styles.content}>"{testimonial.content}"</p>
                
                <div className={styles.author}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className={styles.avatar} 
                  />
                  <div className={styles.info}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className={styles.controls}>
            <button 
              className={styles.control} 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.control} 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;