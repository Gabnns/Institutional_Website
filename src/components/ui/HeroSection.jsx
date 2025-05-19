
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink = '/',
  backgroundImage,
}) => {
  return (
    <div 
      className="relative py-32 md:py-48 lg:py-56 overflow-hidden"
      style={
        backgroundImage 
          ? { 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } 
          : {}
      }
    >
      <div className={`container mx-auto text-center ${backgroundImage ? 'text-white' : ''}`}>
        <h1 className="animate-fade-up max-w-4xl mx-auto">{title}</h1>
        <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl mx-auto text-xl md:text-2xl">
          {subtitle}
        </p>
        
        {(ctaText || secondaryCtaText) && (
          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {ctaText && (
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            )}
            
            {secondaryCtaText && (
              <Link 
                to={secondaryCtaLink} 
                className={`btn-secondary ${backgroundImage ? 'bg-transparent border-white text-white hover:bg-white/10' : ''}`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
