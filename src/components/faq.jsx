import React from 'react';
const FAQ_DATA = [
  { 
    id: 'manhaj-info',
    question: "Apa itu Manhaj by Inagata?", 
    answer: "Dapatkan informasi lengkap tentang jamaah Anda, mulai dari data pribadi hingga kelengkapan dokumen seperti paspor, vaksin, dan lainnya." 
  },
  { 
    id: 'features',
    question: "Apa saja fitur utama Manhaj?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  { 
    id: 'suitability',
    question: "Apakah Manhaj cocok untuk lembaga KBIHU kecil?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  { 
    id: 'security',
    question: "Apakah data kami aman dengan Manhaj?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  }
];

const STYLES = `
  .faq-title {
    color: var(--neutral-dark);
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-family: var(--font-main);
  }
  .faq-subtitle {
    font-size: 0.9rem;
    max-width: 500px;
  }
  .faq-item .accordion-button {
    color: var(--neutral-dark);
    font-weight: 700;
    font-size: 1.25rem;
    font-family: var(--font-main);
    display: flex;
    justify-content: space-between;
  }
  .faq-answer {
    color: var(--neutral-medium);
    line-height: 1.6;
    font-size: 1rem;
  }
  .accordion-button::after {
    content: "+";
    background-image: none !important;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--primary-dark);
    transition: all 0.2s ease;
  }
  .accordion-button:not(.collapsed)::after {
    content: "−"; 
    color: var(--neutral-dark);
    transform: none;
  }
  .accordion-button:not(.collapsed) {
    background-color: transparent !important;
    box-shadow: none !important;
    color: var(--neutral-dark) !important;
  }
`;

const FaqItem = ({ id, question, answer }) => (
  <div className="accordion-item border-0 border-bottom py-3 faq-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed px-0 bg-transparent shadow-none" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#collapse-${id}`}
        aria-expanded="false"
        aria-controls={`collapse-${id}`}
      >
        {question}
      </button>
    </h2>
    <div 
      id={`collapse-${id}`} 
      className="accordion-collapse collapse" 
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body px-0 pt-2 pb-4 faq-answer">
        {answer}
      </div>
    </div>
  </div>
);


const Faq = () => {
  return (
    <section className="faq-section py-5 bg-white">
      <style>{STYLES}</style>
      
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="faq-title fw-bolder mb-2">FAQ</h2>
          <p className="faq-subtitle mb-4 mx-auto text-muted">
            Pertanyaan umum yang sering ditanyakan
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="accordion accordion-flush" id="faqAccordion">
              {FAQ_DATA.map((item) => (
                <FaqItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;