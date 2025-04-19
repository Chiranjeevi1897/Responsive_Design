import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (direction) {
      case 'up':
        return styles.animateUp;
      case 'down':
        return styles.animateDown;
      case 'left':
        return styles.animateLeft;
      case 'right':
        return styles.animateRight;
      default:
        return styles.animateUp;
    }
  };
  
  return (
    <div
      ref={ref}
      className={`${styles.animatedSection} ${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;