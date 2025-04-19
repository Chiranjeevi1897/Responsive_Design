import React from 'react';
import { LineChart, Zap, Shield, Layout, RefreshCw, Users } from 'lucide-react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Features.module.css';

const features = [
  {
    icon: <Zap size={28} />,
    title: 'Lightning Fast',
    description: 'Optimized for speed with efficient codebase and modern technology stack.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure By Design',
    description: 'Built with security in mind, protecting your data and privacy.'
  },
  {
    icon: <Layout size={28} />,
    title: 'Responsive Layouts',
    description: 'Perfectly adapts to any screen size from mobile devices to large desktops.'
  },
  {
    icon: <LineChart size={28} />,
    title: 'Analytics Integration',
    description: 'Track user behavior and make data-driven decisions with built-in analytics.'
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Regular Updates',
    description: 'Constantly improving with new features and security enhancements.'
  },
  {
    icon: <Users size={28} />,
    title: 'Collaboration Tools',
    description: 'Work together efficiently with powerful collaboration features.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Our platform provides everything you need to create stunning websites with a focus on performance and user experience.
          </p>
        </AnimatedSection>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;