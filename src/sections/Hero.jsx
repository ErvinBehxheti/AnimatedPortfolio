import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ervin <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">I write code.</p>
        <Button
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full sm:min-w-96"
        />
      </div>
    </section>
  );
};

export default Hero;
