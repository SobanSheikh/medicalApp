import React, { useEffect } from "react";
import yogaImage1 from "../assets/home_yoga_1.png";
import yogaImage2 from "../assets/home_yoga_2.png";
import yogaImage3 from "../assets/home_yoga_3.png";
import yogaImage4 from "../assets/home_yoga_4.png";
import yogaImage5 from "../assets/home_yoga_5.png";

import homeProfileImage from "../assets/home_pic_1.png";
import wellnessImage from "../assets/home_wellness.png";
import ReviewIcon from "../assets/review.svg";
import { Link, useLocation } from "react-router-dom";
import homeSection3Flower from "../assets/home_section_3_flower.png";
import homeSection2RightBranch from "../assets/home_section_2_right_branch.png";
import homeSection5BackGroundImage from "../assets/home_section_5_background.png"
import homeBackground1 from "../assets/home_section_1_backround.png";
import homeDecoration1 from "../assets/home_decoration_1.png";
import homeBookImage from "../assets/home_book.png";
import homeBackground2Left from "../assets/home_section_2_background_left.png";
import homeSection2Branch from "../assets/home_section_2_branch.png";

import homeSection4Branch from "../assets/home_section_4_branch.png";
import section1Branch from "../assets/home_section_1_branch.png";
import Contact from "./Contact";

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If no hash in URL, scroll to top
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    // If hash is #contact, scroll to contact section
    else if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex w-full relative gap-4 pt-20 flex-col">
      <div className="flex  absolute -top-[5%] overflow-hidden">
        <img
          src={homeBackground1}
          alt="book image"
          className="object-cover opacity-40 h-3/4  -mr-[10%]  w-[140%] "
        />
      </div>

      <div className="flex flex-col overflow-hidden absolute  z-10 right-[14%] -top-[3%]  rounded-b-full  w-[330px] h-[550px] bg-amber-900 ">
        <img
          src={section1Branch}
          alt="book image"
          className="object-cover opacity-40 h-3/4    w-[140%] "
        />
      </div>

      <div className=" flex p-4 absolute border-2 right-[24%] z-10 border-amber-800 rounded-[250px]">
        <div className="flex relative">
          <div className="flex  h-[450px]  overflow-hidden    rounded-[250px] ">
            <img
              src={homeProfileImage}
              alt="about image"
              className="object-cover w-full"
            />
          </div>

          <div className="flex absolute top-[10%]  overflow-hidden -right-[70%]  h-[400px]     ">
            <img
              src={homeDecoration1}
              alt="about image"
              className="object-cover w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full z-10 pb-10">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col justify-center text-justify p-16">
            <span className="font-serif font-bold mt-8 text-center text-7xl tracking-wide  text-amber-900">
              Dr. Masha Lekic
            </span>
            <hr className="mx-12" />
            <span className="text-center font-bold  text-2xl">
              Cosmetic Dermotology & Anti-Aging | Wellness Advocate
            </span>
            <span className="flex text-2xl mt-3 font-semibold text-justify">
              I’m Dr. Masha Lekic, a medical specialist in cosmetic der-
              matology & anti-aging medicine, a wellness advocate, and the
              author of She Is Me Now — a book born from truth, refined by time,
              and written with the hope of reach- ing others who are ready to
              live from a deeper place.
            </span>
            <button className=" w-1/4 text-center rounded-4xl mt-2 bg-amber-900 p-2 text-[#e2dbcc]">
              Know More!
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2"></div>
      </div>
      <div className="flex w-full z-10 ">
        <div className="flex w-1/3  relative p-8 pt-14 bg-[#d9d1c6]">
      
        <div className="flex  absolute ml-12 top-[10%] h-[550px] mt-12  overflow-hidden      ">
            <img
              src={homeBackground2Left}
              alt="about image"
              className="object-cover w-[300px] rounded-3xl"
            />
          </div>


          <div className="flex flex-col relative  p-10 ml-50 justify-center  -mr-[70%] z-10   border-8 border-white rounded-b-full h-full w-[500px] bg-[#d9bf9e] text-white">
            
          <div className="flex  absolute ml-4 -top-[32%] -left-[18%] h-[300px] mt-12  overflow-hidden      ">
            <img
              src={homeSection2Branch}
              alt="about image"
              className="object-cover w-[200px] rounded-3xl"
            />
          </div>
            <span className=" text-3xl ">She is Me Now!</span>

            <span className="text-xl mt-4">
              Reclaim Your Power, Rewrite Your Story & Live Fully.
            </span>
            <hr className="mt-2" />
            <span className="text-lg -mt-4 p-8 mb-10   ">
              She Is Me Now is about the journey back to yourself — after the
              world has tried to mold you, after life has demanded you to bend,
              break, and keep going without pause. It’s about reclaiming the
              pieces of yourself you lost along the way, choosing your truth
              over the sto- ries you were told to believe, and rising not
              because life was kind but because you found the cour- age to stand
              back up, again and again.
            </span>
          </div>
        </div>
        <div className="flex w-4/5 relative  bg-[#9e8474]">
        <div className="flex ml-[20%]  h-[500px] mt-20 rounded-4xl shadow-2xl z-10 overflow-hidden   ">
            <img
              src={homeBookImage}
              alt="about image"
              className="object-cover w-[800px] shadow-2xl rounded-4xl"
            />
          </div>
          <div className="flex   absolute top-[4%] left-[10%] h-[600px] mt-12  overflow-hidden      ">
            <img
              src={homeSection2RightBranch}
              alt="about image"
              className="object-cover w-full rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full space-x-10 py-20 px-40 ">
        <div className="flex relative w-1/5 h-[500px] rounded-3xl overflow-hidden">
          <span className="absolute top-3 left-4 font-semibold text-white">
            Hair Restoration Treatments
          </span>
          <img
            src={yogaImage1}
            alt="Yoga pose"
            className="object-cover w-full"
          />
        </div>
        <div className="flex relative w-1/5 h-[500px] rounded-3xl overflow-hidden">
          <span className="absolute top-3 left-4 font-semibold text-white">
            Pigmentation Control
          </span>

          <img
            src={yogaImage2}
            alt="Yoga pose"
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2 ">
          <div className="flex relative h-[250px] rounded-3xl overflow-hidden">
            <span className="absolute top-3 left-4 font-semibold text-white">
              Medical-Grade Chemical Peels
            </span>

            <img
              src={yogaImage3}
              alt="Yoga pose"
              className="object-cover w-full"
            />
          </div>
          <div className="flex w-full space-x-4  justify-between">
            <div className="flex relative w-full h-[250px] rounded-3xl overflow-hidden">
              <span className="absolute top-3 left-4 font-semibold text-white">
                Hand Rejuinvation
              </span>

              <img
                src={yogaImage4}
                alt="Yoga pose"
                className="object-cover w-full"
              />
            </div>
            <div className="flex w-full relative h-[250px] rounded-3xl overflow-hidden">
              <span className="absolute top-3 left-4 font-semibold text-white">
                Micro Needling
              </span>

              <img
                src={yogaImage5}
                alt="Yoga pose"
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  py-20 px-12 mx-10 rounded-3xl shadow-xl  bg-[#9e8474]">
        <div className="flex w-full justify-between">
          <div className="flex w-1/2 relative">
            <div className="flex  h-[500px] rounded-t-full overflow-hidden">
              {/* <span className="absolute top-3 left-4 font-semibold text-white">Yoga and Wellness</span> */}

              <img
                src={wellnessImage}
                alt="Yoga pose"
                className="object-cover w-full"
              />
            </div>

            <div className="flex ml-[20%] absolute -top-[10%] right-[2%] h-[200px] mt-12  overflow-hidden      ">
            <img
              src={homeSection3Flower}
              alt="about image"
              className="object-cover w-[200px] rounded-3xl"
            />
          </div>
          </div>
          <div className="flex relative flex-col py-6 px-8 gap-4 items-center   w-full">
          <div className="flex ml-[20%] absolute -top-[20%]  -right-[4%] h-[600px] mt-12  overflow-hidden      ">
            <img
              src={homeSection4Branch}
              alt="about image"
              className="object-cover w-[150%] rounded-3xl"
            />
          </div>
            <span className=" flex text-5xl font-hugolers pb-4 font-semibold">
              Wellness & Yoga
            </span>
            <span className="flex text-2xl  text-end">
              Beyond the clinical side of my work, is someone who understands
              that wellness is not a luxury — it’s a necessity.
            </span>
            <span className="flex text-2xl  text-end">
              I’m a certified RYT300 yoga teacher, though I don’t lead classes.
              Instead, I integrate the principles into how I live, heal, and
              support others.
            </span>
            <span className="flex text-2xl  text-end">
              My wellness approach is rooted in rhythm, simplicity, and daily
              choices that honor the body, mind, and soul.
            </span>
            <Link
              to={"/wellness"}
              className="rounded-2xl self-end p-4 text-amber-800 text-base cursor-pointer font-semibold bg-[#d9bf9e]"
            >
              More Services
            </Link>
          </div>
        </div>
      </div>
      <div className="flex relative py-20 pb-60 px-12 mx-10 rounded-3xl shadow-xl">
        <div className="flex absolute inset-0 w-full h-full overflow-hidden">
          <img
        src={homeSection5BackGroundImage}
        alt="about image"
        className="object-cover w-full opacity-50 h-full rounded-3xl"
          />
        </div>





        <div className="flex w-full gap-6">
          <div className="flex flex-col relative items-center  w-[300px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UAE </span>
            <span className=" flex tex-lg"> Al Mansoori</span>
            <span className="text-xs text-justify">
              Dr. Masha doesn’t just treat your skin — she sees you. After years
              of hiding behind makeup to cover acne scars, I finally found
              someone who looked past them and saw the real me. The results were
              beautiful, but what stayed with me was how she made me feel —
              valued, understood, and com- fortable in my own skin.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-white"
            />
          </div>

          <div className="flex flex-col relative items-center  w-[300px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UAE </span>
            <span className=" flex tex-lg"> Al Mansoori</span>
            <span className="text-xs text-justify">
              Dr. Masha doesn’t just treat your skin — she sees you. After years
              of hiding behind makeup to cover acne scars, I finally found
              someone who looked past them and saw the real me. The results were
              beautiful, but what stayed with me was how she made me feel —
              valued, understood, and com- fortable in my own skin.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center  w-[300px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UAE </span>
            <span className=" flex tex-lg"> Al Mansoori</span>
            <span className="text-xs text-justify">
              Dr. Masha doesn’t just treat your skin — she sees you. After years
              of hiding behind makeup to cover acne scars, I finally found
              someone who looked past them and saw the real me. The results were
              beautiful, but what stayed with me was how she made me feel —
              valued, understood, and com- fortable in my own skin.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center  w-[300px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UAE </span>
            <span className=" flex tex-lg"> Al Mansoori</span>
            <span className="text-xs text-justify">
              Dr. Masha doesn’t just treat your skin — she sees you. After years
              of hiding behind makeup to cover acne scars, I finally found
              someone who looked past them and saw the real me. The results were
              beautiful, but what stayed with me was how she made me feel —
              valued, understood, and com- fortable in my own skin.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center   w-[300px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UAE </span>
            <span className=" flex tex-lg"> Al Mansoori</span>
            <span className="text-xs text-justify">
              Dr. Masha doesn’t just treat your skin — she sees you. After years
              of hiding behind makeup to cover acne scars, I finally found
              someone who looked past them and saw the real me. The results were
              beautiful, but what stayed with me was how she made me feel —
              valued, understood, and com- fortable in my own skin.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
