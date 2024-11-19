import { init } from "ityped";
import { useEffect, useRef } from "react";
import { BiSolidMessageRounded } from "react-icons/bi";
import "../style/introductionMessage.css";
const IntroductionMessage = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Company", "Recruiter", "Parents"],
    });
  }, []);
  return (
    <>
      <header id="Accueil" className="header flex flex-col md:flex-row justify-around items-center h-full font-Lora overflow-hidden -translate-y-4">
        <div className="left justify-center items-center md:text-left">
          <div className="first-message text-5xl md:text-7xl">Develop for</div>
          <div className="seconde-message mt-4 md:mt-8 text-4xl md:text-7xl">
            <span>{">"}</span> <span ref={textRef} className=""></span>
          </div>
          <div className="third-message pt-20 md:mt-18 text-stone-400 text-4xl md:text-3xl z-50">
            <span className="text">Simple, </span>
            <span className="text">High-performance, </span>
            <span className="text">Facilitates recruitment</span>
          </div>
        </div>

        <div className="right mt-2 md:mt-0">
          <video
            className="max-w-full md:max-w-[450px] max-h-[500px]"
            playsinline autoPlay muted loop
          >
            <source
              src="https://sf16-va.tiktokcdn.com/obj/eden-va2/lapz_k4_rvarpa/ljhwZthlaukjlkulzlp/landing_page/hero_ascii_v2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </header>
    {/*   <div className="icon-container fixed bottom-10 left-8 md:left-4 lg:left-12">
        <span className="text-blue-500 text-5xl md:text-6xl cursor-pointer">
          <BiSolidMessageRounded />
        </span>
      </div> */}
    </>
  );
};

export default IntroductionMessage;
