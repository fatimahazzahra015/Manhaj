import React from 'react';
import DataImg from '../assets/Data.png'; 
import MonitoringImg from '../assets/Monitoring.png';
import SistemImg from '../assets/Sistem.png'; 
import DataIcon from '../assets/Icon data.png';
import MonitoringIcon from '../assets/Icon monitoring.png';
import SistemIcon from '../assets/Icon sistem.png';

const FEATURES = [
  {
    id: 'data',
    title: "Koleksi Data Jamaah yang Komprehensif & Terpusat.",
    description: "Dapatkan informasi lengkap tentang jamaah Anda, mulai dari data pribadi hingga kelengkapan dokumen seperti paspor, vaksin, dan lainnya.",
    image: DataImg,
    icon: DataIcon,
    isReversed: false,
  },
  {
    id: 'monitoring',
    title: "Monitoring Pembayaran yang Transparan & Real-time.",
    description: "Pantau status pembayaran dan sisa cicilan jamaah dengan mudah. Informasi pembayaran selalu up-to-date dan terorganisir.",
    image: MonitoringImg,
    icon: MonitoringIcon,
    isReversed: true, 
  },
  {
    id: 'sistem',
    title: "Akses Sistem Aman & Terkontrol.",
    description: "Atur hak akses pengguna (admin, operator, bendahara) untuk meningkatkan keamanan dan efisiensi kerja.",
    image: SistemImg,
    icon: SistemIcon,
    isReversed: false,
  }
];

const Features = () => {
  return (
    <section className="py-5 bg-white" id="fitur">
      <div className="container px-4 px-md-5">
        
        <header className="text-center mb-5 pb-lg-5">
          <h2 className="fw-bold mb-3" style={{ color: 'var(--neutral-dark)' }}>
            Solusi kami untuk Anda
          </h2>
          <p className="mx-auto text-secondary" style={{ maxWidth: '600px' }}>
            Fitur inovatif yang memudahkan setiap langkah perjalanan anda.
          </p>
        </header>

        {FEATURES.map((feature, index) => (
          <FeatureRow 
            key={feature.id} 
            {...feature} 
            isLast={index === FEATURES.length - 1} 
          />
        ))}

      </div>
    </section>
  );
};

const FeatureRow = ({ title, description, image, icon, isReversed, isLast }) => {
  const rowPadding = !isLast ? 'mb-5 pb-lg-5' : '';
  
  return (
    <div className={`row align-items-center justify-content-between ${rowPadding}`}>
      <div className={`col-lg-5 ${isReversed ? 'order-lg-2 ps-lg-5' : 'order-lg-1'}`}>
        <div 
          className="d-flex align-items-center justify-content-center mb-4" 
          style={{ 
            backgroundColor: 'var(--primary-light)', 
            width: '48px', height: '48px', borderRadius: '50%' 
          }}
        >
          <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />
        </div>
        <h3 className="fw-bold mb-3" style={{ color: 'var(--neutral-dark)', fontSize: '1.75rem', lineHeight: '1.2' }}>
          {title}
        </h3>
        <p className="lh-lg mb-4 mb-lg-0 text-secondary" style={{ opacity: 0.8 }}>
          {description}
        </p>
      </div>

      <div className={`col-lg-6 ${isReversed ? 'order-lg-1' : 'order-lg-2'}`}>
        <img 
          src={image} 
          alt={title} 
          className="img-fluid rounded-4 shadow-lg" 
          loading="lazy" 
        />
      </div>

    </div>
  );
};

export default Features;