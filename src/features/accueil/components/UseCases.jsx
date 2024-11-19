import { useState } from "react";
import "../style/useCases.css";
import { steps } from "../constant";

const UseCases = () => {
  return (
    <div   className="bg-zinc-200 w-screen use-case-container px-8">
      {/* I used this default image just to see what the program look like, once everything is done i will replace it */}
      <img
        src="./image_background.PNG"
        alt="small-description"
        className="w-[400px] mt-4 md:w-[1300px] mx-auto -z-20 -translate-y-10 md:-translate-y-16  custom-shadow "
      />
      <div className="mt-3 z-6 pt-44  pb-40">
       <div>
       <h2 className="text-5xl text-black text-center font-bold app-name-container" id="Use_Case">
          How to start using <span className="text-blue-500 app-name">Rimcov</span>
        </h2>
       </div>
        {
          <section className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-[1200px] mt-24 mx-auto pb-5">
            {steps.map((step, index) => (
              <article className="border  w-auto rounded-2xl p-7  text-gray-700 shadow-md  mx-8">
                <span className="border rounded-full p-1 border-neutral-950">{step.id}</span>
                <h2 className="mt-6 text-gray-950 font-bold text-xl">{step.title}</h2>
                <p className="mt-2  text-xl">{step.description}</p>
              </article>
            ))}
          </section>
        }
      </div>
    </div>
  );
};

export default UseCases;
