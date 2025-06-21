import React, { useEffect } from "react";
import aboutImage from "../assets/about.png";
import aboutImage1 from "../assets/about_1.png";
import aboutDecoration1 from "../assets/about_decoration_1.png";
import aboutDecoration2 from "../assets/about_decoration_2.png";
import aboutDecoration3 from "../assets/about_decoration_3.png";
import aboutDecoration4 from "../assets/about_decoration_4.png";
import aboutDecoration5 from "../assets/about_decoration_5.png";
import aboutBackgroundSeciton1 from "../assets/about_section_1_background.png";
const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-20 px-20  p-20 ">
      <div className="flex w-full relative     justify-around pt-40 -mt-[14%] overflow-hidden rounded-[50px]  shadow-2xl"> 
      <div className="absolute z-10 inset-0 w-full h-full">
        <img
          src={aboutBackgroundSeciton1}
          alt="book image"
          className="object-fill w-full h-full rounded-3x scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-[#d2c2b3] opacity-90"></div>
      </div>
        <div className="flex   w-1/2 absolute right-[12%] -top-[20%] z-10   h-[700px] rounded-3xl ">
          <img
            src={aboutDecoration1}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>
        <div className="flex    absolute z-20 left-[20%] bottom-[2%]   h-[200px] rounded-3xl ">
          <img
            src={aboutDecoration2}
            alt="book image"
            className="object-cover w-[200px] rounded-3xl"
          />
        </div>
        <div className="flex    absolute z-10 left-[4%] -bottom-[2%]  rounded-3xl ">
          <img
            src={aboutDecoration3}
            alt="book image"
            className="object-cover h-[200px] w-[350px]  rounded-3xl"
          />
        </div>
        <div className="flex   absolute  z-10 right-[8%] top-[32%]   h-[400px] rounded-3xl ">
          <img
            src={aboutDecoration4}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>

        <div className="flex flex-col z-10  overflow-hidden p-10  justify-center  rounded-tr-3xl rounded-tl-3xl    border-8 border-[#d6b39c] rounded-b-full h-full w-[600px] bg-[#e0d3c2] text-[#e2dbcc]">
          <span className=" text-6xl font-serif text-[#9e8474] font-semibold ">
            About Dr.Masha
          </span>
          <hr className="mt-2 text-[#9e8474]" />

          <span className="text-lg  font-semibold text-[#b09a8a] mt-4 p-4 mb-10   ">
            With over 15 years of experience in cosmetic dermatol- ogy and
            anti-aging medicine, my academic and clini- cal journey spans the
            Middle East and Europe — with advanced education completed in UAE,
            Germany, UK, and USA. I hold a Master’s degree in Anti-Aging and
            Aesthetic Medicine, a second Master’s in Cosmetic Dermatology, and a
            Doctorate in Medical Science. These qualifications reflect a
            long-standing commitment to clinical excellence — and to
            continuously refining my approach with integrity and intention.
          </span>
        </div>

        <div className="flex z-10    h-[600px] rounded-3xl ">
          <img
            src={aboutImage}
            alt="about image"
            className="object-cover w-full"
          />
        </div>
      </div>

      <div className="flex w-full relative justify-around  pr-20  mt-10">
        <div className="flex    absolute   -right-[4.25%] -top-[8%]   h-[400px] rounded-3xl ">
          <img
            src={aboutDecoration5}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>
        <div className="flex w-1/3">
          <div className=" flex p-4  border-4 border-amber-800 rounded-[250px]">
            <div className="flex  h-[700px] overflow-hidden   rounded-[250px] ">
              <img
                src={aboutImage1}
                alt="about image"
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col  text-[#9e8474] w-1/2 items-center py-14">
          <span className="text-6xl font-bold font-serif">My Philosophy!</span>
          <hr className="w-1/2 mt-5" />

          <span className="text-xl mt-5">
            I am a doctor not by coincidence, but by choice — a choice rooted in
            discipline, depth, and a desire to bring something meaningful into
            the lives of others. My path has always been led by learning,
            healing, and serving - both in the clinical space and beyond it.
          </span>
          <span className="text-xl mt-5">
            My philosophy is to treat every patient from the inside out, with an
            understanding that each person requires a personal- ized, long-term
            approach. What sets my work apart is the focus on lifestyle
            integration — improving not only outward appearance, but supporting
            confidence, balance, and inner wellbeing. My approach allows for
            real, sustainable results — the kind that improve how a person
            looks, and more importantly, how they feel.
          </span>
          <span className="text-xl mt-5 ">
            Because no treatment, no practice, no external solution can ever
            replace the power of a person who feels whole inside. Outside of
            clinic, I am an avid yoga practitioner and wellness advocate —
            values that continue to shape how I live and work. My written work,
            including the book She Is Me Now, re- flects the personal growth
            behind the professional — not as a separate story, but as part of
            the same commitment to depth, healing, and truth
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
