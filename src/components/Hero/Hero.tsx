import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <AnimatedSection>
            <h1 className={styles.title}>
              Beautiful design that <span>makes an impact</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className={styles.subtitle}>
              Create stunning, responsive websites with our premium tools and templates.
              Designed to make your web presence extraordinary.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className={styles.cta}>
              <button className={styles.primaryButton}>
                Get Started
                <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryButton}>
                View Demos
              </button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={600}>
            <div className={styles.features}>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Fully Responsive</span>
              </div>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Modern Design</span>
              </div>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Regular Updates</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection direction="left" delay={300} className={styles.imageWrapper}>
          <div className={styles.heroImage}>
            <img 
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Modern workspace with laptop" 
            />
          </div>
        </AnimatedSection>
      </div>
      
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
    </section>
  );
};

export default Hero;