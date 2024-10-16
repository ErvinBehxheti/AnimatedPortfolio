import Button from "../components/Button.jsx";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Ervin_Behxheti.pdf";
    link.download = "Ervin_Behxheti_CV.pdf";
    link.click();
  };
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ervin <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">I write code.</p>
        <Button
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full sm:min-w-96"
        />
        <button
          onClick={handleDownload}
          className="btn sm:w-fit w-full sm:min-w-96 py-3 px-6 text-white rounded-lg bg-blue-600 transition-all duration-[1000ms] ease-in-out hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-blue-600 focus:outline-none"
        >
          <img
            width={20}
            height={20}
            alt="download"
            src="/assets/download.svg"
            className="text-white"
          />
          Download my CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
