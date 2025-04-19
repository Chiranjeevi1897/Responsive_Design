import React, { useState } from 'react';
import { Check, ArrowRight, X } from 'lucide-react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 24 },
    description: 'Perfect for small websites and personal projects',
    features: [
      'Responsive design templates',
      'Basic customization options',
      'Standard support (24-48h)',
      '1 website',
      '10GB storage',
      'Free SSL certificate'
    ],
    notIncluded: [
      'Advanced analytics',
      'Custom domain',
      'Premium support'
    ],
    popular: false,
    color: '#3b82f6'
  },
  {
    name: 'Professional',
    price: { monthly: 79, yearly: 69 },
    description: 'Ideal for businesses and growing projects',
    features: [
      'All Starter features',
      'Advanced customization options',
      'Priority support (12-24h)',
      'Up to 5 websites',
      '50GB storage',
      'Free domain for 1 year',
      'Advanced analytics',
      'SEO optimization tools'
    ],
    notIncluded: [
      'White-labeling',
      '24/7 phone support'
    ],
    popular: true,
    color: '#7c3aed'
  },
  {
    name: 'Enterprise',
    price: { monthly: 149, yearly: 129 },
    description: 'Complete solution for large organizations',
    features: [
      'All Professional features',
      'Unlimited customization',
      'Premium support (4-8h)',
      'Unlimited websites',
      '200GB storage',
      'Free domain forever',
      'Advanced security features',
      'White-labeling',
      'Dedicated account manager',
      'Custom integrations'
    ],
    notIncluded: [],
    popular: false,
    color: '#0ea5e9'
  }
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Select the perfect plan for your needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className={styles.toggle}>
            <span className={!isYearly ? styles.active : ''}>Monthly</span>
            <div 
              className={`${styles.toggleSwitch} ${isYearly ? styles.yearly : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className={styles.toggleKnob}></div>
            </div>
            <span className={isYearly ? styles.active : ''}>
              Yearly <span className={styles.discount}>Save 15%</span>
            </span>
          </div>
        </AnimatedSection>
        
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <AnimatedSection 
              key={index} 
              delay={300 + index * 150} 
              className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularTag}>Most Popular</div>
              )}
              
              <div className={styles.planHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={styles.period}>/ month</span>
                </div>
                <p className={styles.description}>{plan.description}</p>
              </div>
              
              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {plan.notIncluded.map((feature, i) => (
                  <li key={`not-${i}`} className={styles.notIncluded}>
                    <X size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`${styles.planButton} ${plan.popular ? styles.popularButton : ''}`}
                style={{
                  '--plan-color': plan.color,
                } as React.CSSProperties}
              >
                Get Started
                <ArrowRight size={18} />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;