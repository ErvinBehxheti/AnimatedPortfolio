import { useState } from "react";
import Globe from "react-globe.gl";
import "./about.scss";
import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ervin.behxheti.dev@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/grid1.webp`}
              alt="grid-1"
              className="w-full sm:h-[276px] object-contain"
              width={1028}
              height={1536}
            />{" "}
            <div>
              <p className="grid-headtext">Hi, I’m Ervin Behxheti</p>
              <p className="grid-subtext">
                I’m a front-end developer specializing in React.js, Next.js and
                Node.js, with a focus on building responsive, high-performance
                web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 relative max-[850px]:h-[500px]">
          <div className="grid-container">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <img
                    src="/assets/react.svg"
                    alt="react"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="face2">
                  <img
                    src="/assets/html.svg"
                    alt="html"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="face3">
                  <img
                    src="/assets/css.svg"
                    alt="css"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="face4">
                  <img
                    src="/assets/javascript.svg"
                    alt="javascript"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="face5">
                  <img
                    src="/assets/git.svg"
                    alt="github"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="face6">
                  <img
                    src="/assets/node.svg"
                    alt="nodejs"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-5">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={`${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/earth-night.webp`}
                labelsData={[
                  {
                    lat: 42.8914,
                    lng: 20.866,
                    text: "Kosovo, Mitrovica",
                    color: "white",
                    size: 50,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Mitrovica, Kosova and open to remote work
                worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/grid3.webp`}
              alt="grid-3"
              className="w-full sm:h-[266px] object-contain"
              width={1608}
              height={648}
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={`${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/grid4.webp`}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] object-cover sm:object-top"
              width={720}
              height={544}
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  className="w-10 h-10"
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  ervin.behxheti.dev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
