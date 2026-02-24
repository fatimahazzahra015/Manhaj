import React from 'react';

const CONTENT = {
  title: "Tingkatkan Efisiensi Lembaga KBIHU Anda Sekarang!",
  description: "Dapatkan demo gratis dan lihat bagaimana Manhaj dapat membantu Anda mengelola data jamaah dengan lebih baik.",
  ctaText: "Request Demo"
};

const STYLES = {
  banner: {
    backgroundColor: 'var(--primary-color)',
    borderRadius: '40px',
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    backgroundImage: `
      repeating-radial-gradient(circle at 50% 50%, transparent, transparent 120px, rgba(0, 0, 0, 0.04) 121px, rgba(0, 0, 0, 0.04) 122px)
    `,
    backgroundSize: 'cover',
  },
  title: {
    color: 'var(--neutral-dark)',
    fontWeight: '800',
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em'
  },
  description: {
    color: 'var(--neutral-dark)',
    opacity: 0.8,
    maxWidth: '550px',
    fontSize: '1.15rem',
    lineHeight: '1.6'
  },
  button: {
    backgroundColor: 'var(--neutral-dark)',
    color: 'var(--white)',
    padding: '16px 48px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '1rem',
    border: 'none',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '300px'
  }
};

const CtaBanner = () => {
  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? 'translateY(-3px)' : 'translateY(0)';
    e.currentTarget.style.filter = isHover ? 'brightness(1.2)' : 'brightness(1)';
  };

  return (
    <section className="py-5">
      <div className="container px-4">
        <div className="py-5 px-4 text-center shadow-lg" style={STYLES.banner}>
          <div className="position-relative" style={{ zIndex: 1 }}>
            
            <h2 className="mb-3 mx-auto" style={STYLES.title}>
              Tingkatkan Efisiensi Lembaga <br className="d-none d-md-block" /> KBIHU Anda Sekarang!
            </h2>

            <p className="mb-5 mx-auto" style={STYLES.description}>
              {CONTENT.description}
            </p>

            <button 
              style={STYLES.button}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              {CONTENT.ctaText}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;