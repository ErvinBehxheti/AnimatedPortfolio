const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <a
          className="social-icon"
          href="https://github.com/ErvinBehxheti"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/ervinbehxheti/"
          target="_blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="Linkedin"
            className="h-1/2 w-1/2"
          />
        </a>
      </div>

      <p className="text-white-500 text-center">
        If you don't like the contact form, here's my email{" "}
        <em>
          <a href="mailto:ervin.behxheti.dev@gmail.com">
            ervin.behxheti.dev@gmail.com
          </a>
        </em>
      </p>
    </footer>
  );
};

export default Footer;
