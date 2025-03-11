const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Vinícius Nunes</p>
        <p>|</p>
        <p>Brasil</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/viniciusnunesdito">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        </a>
        <a href="https://www.linkedin.com/in/vinícius-nunes-benedito-28459a2b2">
        <div className="social-icon">
          <img src="/assets/linkedin.png" alt="linkedin" className="w-1/1 h-1/1" />
        </div>
        </a>
        <a href="https://wa.me/5516993225524">
        <div className="social-icon">
          <img src="/assets/whatsapp.png" alt="instagram" className="w-1/2 h-1/2"/>
        </div>
        </a>
      </div>

      <p className="text-white-500">© 2025 Vinícius Nunes</p>
    </footer>
  );
};

export default Footer;
