import React from 'react';
import LogoPrimary from '../assets/Logo Primary.png';

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda", active: true },
  { label: "Fitur", href: "#fitur" },
  { label: "Tentang Kami", href: "#tentang" },
];

const STYLES = `
  .navbar-custom {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8) !important;
    z-index: 1050;
    transition: all 0.3s ease;
  }

  .nav-link-custom {
    color: var(--neutral-medium);
    transition: color 0.2s ease, transform 0.2s ease;
    font-weight: 400;
  }

  .nav-link-custom:hover {
    color: var(--neutral-dark) !important; /* Warna berubah saat hover */
    transform: translateY(-1px);
    font-weight: 700;
  }

  .nav-link-custom.active {
    color: var(--neutral-dark) !important;
    font-weight: 700;
  }

  .btn-whatsapp-nav {
    color: var(--neutral-medium);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s easetransform 0.2s ease;
  }

  .btn-whatsapp-nav:hover {
    color: var(--neutral-dark) !important; /* Warna khas WA saat hover */
    transform: translateY(-1px);
    font-weight: 700;
  }

  .btn-demo-nav {
    background-color: var(--primary-color);
    color: var(--neutral-medium);
    font-weight: 600;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .btn-demo-nav:hover {
    background-color: var(--neutral-dark); /* Berubah gelap saat hover */
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

const NavItem = ({ href, label, active = false }) => (
  <li className="nav-item">
    <a 
      className={`nav-link px-lg-3 nav-link-custom ${active ? 'active' : ''}`} 
      href={href}
    >
      {label}
    </a>
  </li>
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom navbar-custom">
      <style>{STYLES}</style>
      <div className="container py-3">
        
        <a className="navbar-brand d-flex align-items-center px-1" href="#beranda">
          <img 
            src={LogoPrimary} 
            alt="Logo" 
            style={{ height: '56px', width: 'auto' }} 
          />
        </a>

        <button 
          className="navbar-toggler shadow-none border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse px-3" id="navbarNav">
          
          <ul className="navbar-nav ms-lg-4 mb-2 mb-lg-0">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 ms-auto mt-2 mt-lg-0">
            <a 
              href="https://wa.me/00000000000" 
              className="btn-whatsapp-nav px-0"
            >
              Whatsapp
            </a>
            <button className="btn btn-demo-nav px-4 py-2 border-0">
              Request Demo
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;