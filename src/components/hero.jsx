import React from 'react';
import HeroImage from '../assets/Laptop.png';
import Icon from '../assets/Icon.png';

const STYLES = {
  section: { backgroundColor: '#F4F8FC' },
  badge: { 
    color: 'var(--primary-color)', 
    fontSize: '0.85rem', 
    letterSpacing: '0.5px' 
  },
  heading: { 
    color: 'var(--neutral-dark)', 
    fontSize: 'calc(1.8rem + 1.8vw)', 
    lineHeight: '1.2' 
  },
  description: { 
    color: 'var(--neutral-medium)', 
    fontSize: '1.1rem', 
    lineHeight: '1.8',
    maxWidth: '540px'
  },
  button: { 
    backgroundColor: 'var(--primary-color)', 
    color: 'var(--neutral-dark)', 
    borderRadius: '12px', 
    border: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
};

const CONTENT = {
  badge: {
    prefix: "THE BEST",
    suffix: "KBIHU MANAGEMENT TOOL"
  },
  heading: "Solusi Terintegrasi untuk Manajemen Data Jamaah KBIHU Anda!",
  description: "Dukung efisiensi lembaga KBIHU Anda dengan solusi manajemen data jamaah yang cepat, akurat, dan mudah digunakan.",
  cta: "Request Demo",
  imageAlt: "KBIHU Dashboard Preview"
};

const Hero = () => {
  return (
    <section className="py-5 d-flex align-items-center" style={{ ...STYLES.section}}>
      <div className="container px-4">
        <div className="row align-items-center justify-content-between">
          
          <div className="col-lg-6 mb-5 mb-lg-0 text-start">
            <HeroBadge content={CONTENT.badge} />
            <h1 className="fw-bold mb-4" style={STYLES.heading}>
              {CONTENT.heading}
            </h1>
            <p className="mb-5" style={STYLES.description}>
              {CONTENT.description}
            </p>
            <button 
              className="btn btn-lg px-5 py-3 fw-bold shadow-sm" 
              style={STYLES.button}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {CONTENT.cta}
            </button>
          </div>

          <div className="col-lg-5">
            <HeroVisual src={HeroImage} alt={CONTENT.imageAlt} />
          </div>

        </div>
      </div>
    </section>
  );
};

const HeroBadge = ({ content }) => (
  <div className="mb-4 d-flex align-items-center" style={STYLES.badge}>
    <img src={Icon} alt="Icon" className="me-2" style={{ width: '18px' }} />
    <span className="fw-normal me-1 opacity-75">{content.prefix}</span>
    <span className="fw-bold">{content.suffix}</span>
  </div>
);

const HeroVisual = ({ src, alt }) => {
  const visualContainerStyle = {
    borderRadius: '40px',
    aspectRatio: '5 / 6',
    backgroundColor: '#f8fafc',
    maxWidth: '450px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  };

  const glowStyle = {
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(78, 202, 144, 0.15) 0%, transparent 70%)',
    filter: 'blur(40px)',
    zIndex: 0
  };

  return (
    <div className="position-relative overflow-hidden ms-lg-auto" style={visualContainerStyle}>
      <div className="position-absolute top-50 start-50 translate-middle" style={glowStyle} />
      <img 
        src={src} 
        alt={alt} 
        className="w-100 h-100 position-relative object-fit-cover"
        style={{ zIndex: 1 }}
        loading="lazy"
      />
    </div>
  );
};

export default Hero;