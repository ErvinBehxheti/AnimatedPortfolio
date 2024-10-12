const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

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
        All the web’s a stage, And all the users merely players; They have their
        clicks and scrolls, And one man in his time serves many views, His
        code’s but a simple act of elegance.
      </p>
    </footer>
  );
};

export default Footer;
