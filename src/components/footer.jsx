import React from 'react';

const MENU_LINKS = [
  { label: "Beranda", href: "#" },
  { label: "Fitur", href: "#" },
  { label: "Tentang kami", href: "#" },
  { label: "Request Demo", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Term of Use", href: "#" },
  { label: "Privacy Policy", href: "#" }
];

const SOCIALS = ["bi-instagram", "bi-facebook", "bi-youtube"];

const WHATSAPP_URL = "https://wa.me/00000000000"; 


const STYLES = `
  .footer-wrapper { font-family: var(--font-main, sans-serif); }
  .cta-container { background-color: #F4F8FC; padding-left: 1rem !important; padding-right: 1rem !important; }
  .cta-title {
    font-size: calc(1.8rem + 1.5vw);
    color: var(--neutral-dark);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .btn-whatsapp {
    background-color: var(--primary-color);
    color: var(--neutral-dark) !important;
    width: 260px;
    height: 54px;
    border-radius: 50px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .btn-whatsapp:hover { 
    transform: translateY(-3px); 
    filter: brightness(0.95); 
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .wa-icon-box {
    background-color: #212529;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wa-icon-box i { color: var(--primary-color); font-size: 1.2rem; line-height: 0; }

  .footer-nav-item {
    color: var(--neutral-medium);
    font-weight: 700;
    cursor: pointer;
    transition: color 0.2s;
  }
  .footer-nav-item:hover { color: var(--primary-color); }

  .bottom-bar { background-color: var(--neutral-dark); padding-left: 1rem !important; padding-right: 1rem !important; }
  .copyright-text { color: var(--neutral-light); opacity: 0.8; }
  .legal-link {
    text-decoration: none;
    color: white;
    opacity: 0.75;
    transition: opacity 0.2s;
  }
  .legal-link:hover { opacity: 1; }

  .social-icon {
    width: 40px; height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--neutral-dark);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .social-icon i { font-size: 1.2rem; display: flex; line-height: 1; }
  .social-icon:hover { 
    transform: scale(1.1); 
    background-color: var(--primary-color) !important; 
  }
`;

const SocialCircleIcon = ({ iconClass }) => (
  <div className="social-icon">
    <i className={`bi ${iconClass}`}></i>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <style>{STYLES}</style>
      
      <div className="cta-container py-5">
        <div className="container py-3">
          <h1 className="cta-title fw-bold mb-4">
            Mulai Transformasi <br /> KBIHU Sekarang!
          </h1>
          
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp shadow-sm border-0"
          >
            <span className="ms-3">Contact Us</span>
            <div className="wa-icon-box">
              <i className="bi bi-whatsapp"></i>
            </div>
          </a>

          <div className="row mt-5 pt-4 gx-0 border-top border-light">
            {MENU_LINKS.map((link, idx) => (
              <div 
                key={link.label} 
                className={`col-6 col-md-3 mb-3 footer-nav-item ${idx === MENU_LINKS.length - 1 ? 'text-md-end' : ''}`}
              >
                {link.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-bar py-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            
            <div className="col-12 col-md-4 d-flex gap-3 justify-content-center justify-content-md-start mb-4 mb-md-0">
              {SOCIALS.map(icon => (
                <SocialCircleIcon key={icon} iconClass={icon} />
              ))}
            </div>

            <div className="col-12 col-md-4 text-center small mb-4 mb-md-0 copyright-text">
              ©2025 Copyrights Inagata
            </div>
            
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-4 small">
              {LEGAL_LINKS.map(link => (
                <a key={link.label} href={link.href} className="legal-link">
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
