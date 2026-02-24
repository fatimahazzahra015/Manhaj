import React from 'react';

const VALUE_CARDS = [
  {
    category: "Introduction",
    title: "One Stop Solution Manajemen KBIHU",
    desc: "Kami Membantu Anda Mengelola Data Jamaah dengan Lebih Efisien dan Akurat",
    type: "tall",
    colSize: "col-lg-4 col-md-12"
  },
  {
    category: "Technology",
    title: "Akses Berbasis Cloud",
    desc: "Kami Membantu Anda Mengelola Data Jamaah dengan Lebih Efisien dan Akurat",
    type: "small",
    colSize: "col-md-6"
  },
  {
    category: "User-Friendly",
    title: "Antarmuka yang Ramah",
    desc: "Kami Membantu Anda Mengelola Data Jamaah dengan Lebih Efisien dan Akurat",
    type: "small",
    colSize: "col-md-6"
  },
  {
    category: "Aggregation",
    title: "Real Time, Transparant",
    desc: "Kami Membantu Anda Mengelola Data Jamaah dengan Lebih Efisien dan Akurat",
    type: "wide",
    colSize: "col-12"
  }
];

const Value = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--neutral-dark)', color: 'white' }}>
      <div className="container py-5 px-4 px-md-5">
        
        <header className="text-center mb-5">
          <h2 className="fw-bold display-5" style={{ lineHeight: '1.2' }}>
            Cara kami bekerja untuk<br />Membantu Anda Berkembang
          </h2>
        </header>

        <div className="row g-4">
          <div className={VALUE_CARDS[0].colSize}>
            <ValueCard {...VALUE_CARDS[0]} />
          </div>

          <div className="col-lg-8">
            <div className="row g-4">
              {VALUE_CARDS.slice(1).map((card, idx) => (
                <div key={idx} className={card.colSize}>
                  <ValueCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ValueCard = ({ category, title, desc, type }) => {
  const isWide = type === 'wide';
  const isSmall = type === 'small';
  const isTall = type === 'tall';
  
  return (
    <div className="card h-100 border-0 shadow-sm p-4 p-md-5 rounded-5">
      <div className={`row h-100 ${isWide ? 'align-items-center' : ''}`}>
        
        <div className={isWide ? 'col-md-7' : 'col-12'}>
          <span className="fw-bold d-block mb-2" style={{ color: 'var(--primary-dark)', letterSpacing: '1px' }}>
            {category}
          </span>
          <h3 className={`fw-bold mb-3 text-dark ${isTall ? 'fs-2' : 'fs-4'}`}>
            {title}
          </h3>
          
          <div className="d-none d-md-block">
            {!isSmall && <p className="text-muted small mb-4">{desc}</p>}
          </div>
        </div>

        <div className={isWide ? 'col-md-5' : 'col-12 mt-auto'}>
          <div 
            className="rounded-4 w-100 mb-3" 
            style={{ 
              backgroundColor: '#F3F4F6', 
              height: isTall ? '260px' : (isWide ? '140px' : '100px'),
              maxHeight: isTall ? '300px' : 'none'
            }} 
          />
        </div>

        <div className={`col-12 ${!isSmall ? 'd-md-none' : ''}`}>
          <p className="text-muted small mb-0">{desc}</p>
        </div>

      </div>
    </div>
  );
};

export default Value;