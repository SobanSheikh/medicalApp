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
import homeSection5BackGroundImage from "../assets/home_section_5_background.png";
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
          className="object-cover opacity-30 h-3/4  -mr-[10%]  w-[140%] "
        />
      </div>

      <div className="flex flex-col overflow-hidden absolute pl-28 pt-8 z-10 right-[16%] -top-[3%]  rounded-b-full  w-[330px] h-[550px] bg-[#9e8474] ">
        <img
          src={section1Branch}
          alt="book image"
          className="object-cover opacity-40     w-[100%] "
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
          <div className="flex flex-col justify-start ml-20 text-justify p-16">
            <span className="font-caltoria font-bold mt-8 text-start text-7xl  tracking-wide  text-[#9e8474]">
              Dr. Masha Lekic
            </span>
            <div className=" flex border w-3/4  border-[#9E8474] self-start" />
            <span className="text-start font-bold text-[#9E8474] text-2xl">
              Cosmetic Dermotology & Anti-Aging | Wellness Advocate
            </span>
            <span className="flex text-2xl mt-3 text-[#9E8474]  text-justify">
              I’m Dr. Masha Lekic, a medical specialist in cosmetic der-
              matology & anti-aging medicine, a wellness advocate, and the
              author of She Is Me Now — a book born from truth, refined by time,
              and written with the hope of reach- ing others who are ready to
              live from a deeper semiboldplace.
            </span>
            <Link className=" w-1/4 text-center rounded-4xl mt-2 bg-[#9E8474] p-2 text-[#e2dbcc]" to={"/about"}>
              Know More!
            </Link>
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
        <a
        href=" https://www.thenewyou.ae/hair-restoration "
        className="flex relative w-1/5 h-[500px] rounded-3xl overflow-hidden">
          <span className="absolute top-3 left-4 font-semibold text-white">
            Hair Restoration Treatments
          </span>
          <img
            src={yogaImage1}
            alt="Yoga pose"
            className="object-cover w-full"
          />
        </a>
        <a
        href="https://www.thenewyou.ae/procedures "
         className="flex relative w-1/5 h-[500px] rounded-3xl overflow-hidden">
          <span className="absolute top-3 left-4 font-semibold text-white">
            Pigmentation Control
          </span>

          <img
            src={yogaImage2}
            alt="Yoga pose"
            className="object-cover w-full"
          />
        </a>
        <div className="flex flex-col gap-2 w-1/2 ">
          <a
          href="https://www.thenewyou.ae/procedures "
          
          className="flex relative h-[250px] rounded-3xl overflow-hidden">
            <span className="absolute top-3 left-4 font-semibold text-white">
              Medical-Grade Chemical Peels
            </span>

            <img
              src={yogaImage3}
              alt="Yoga pose"
              className="object-cover w-full"
            />
          </a>
          <div className="flex w-full space-x-4  justify-between">
            <a
            href="https://www.thenewyou.ae/hand-rejuvenation "
            className="flex relative w-full h-[250px] rounded-3xl overflow-hidden">
              <span className="absolute top-3 left-4 font-semibold text-white">
                Hand Rejuinvation
              </span>

              <img
                src={yogaImage4}
                alt="Yoga pose"
                className="object-cover w-full"
              />
            </a>
            <a
            href="https://www.thenewyou.ae/micro-needling "
            className="flex w-full relative h-[250px] rounded-3xl overflow-hidden">
              <span className="absolute top-3 left-4 font-semibold text-white">
                Micro Needling
              </span>

              <img
                src={yogaImage5}
                alt="Yoga pose"
                className="object-cover w-full"
              />
            </a>
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
          <div className="flex relative font-serif   flex-col text-white py-6 px-8 gap-4 items-center   w-full">
            <div className="flex ml-[20%] absolute -top-[20%]  -right-[4%] h-[600px] mt-12  overflow-hidden      ">
              <img
                src={homeSection4Branch}
                alt="about image"
                className="object-cover w-[150%] rounded-3xl"
              />
            </div>
            <span className=" flex text-7xl font-serif  pb-4 font-semibold">
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
              className="rounded-2xl z-10 text-xl self-end p-4 text-[#9e8474]  cursor-pointer font-semibold bg-[#d9bf9e]"
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
          <div className="flex flex-col relative items-center font-serif  w-[350px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
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

          <div className="flex flex-col relative items-center  w-[350px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">UK </span>
            <span className=" flex tex-lg"> Amelia Bennett</span>
            <span className="text-xs text-justify">
              She Is Me Now isn’t just a book — it’s a lifeline. Dr. Masha
              writes with such raw, unfiltered honesty that you can feel her
              every word. This isn’t a story about getting your life together;
              it’s about finding yourself in the middle of the mess, embracing
              every imper- fect piece, and learning to live from that place.
              It’s the kind of book you keep coming back to when life gets heavy
              — because every time, it reminds you that you’re stronger than you
              think.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center  w-[350px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">India </span>
            <span className=" flex tex-lg">Priya Shirma</span>
            <span className="text-xs text-justify">
              because of the treatment itself, but because of the stories I’d
              heard about clinics pushing you into proce- dures you don’t need.
              But with Dr. Masha, it was different. She didn’t just look at my
              face; she listened to me. We talked about how I felt, what I
              wanted, what I feared. She didn’t rush or try to convince me of
              anything — she just made me feel good about myself. The treatment
              was subtle, the results natural, and for the first time, I felt
              like I could look in the mirror and be happy with myself again.
              That, to me, was worth more than any cosmetic change.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center   w-[350px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">Philippines </span>
            <span className=" flex tex-lg"> Sophia Reyes</span>
            <span className="text-xs text-justify">
              When I first considered Botox, I was hesitant — not because of the
              treatment itself, but because of the stories I’d heard about
              clinics pushing you into proce- dures you don’t need. But with Dr.
              Masha, it was different. She didn’t just look at my face; she
              listened to me. We talked about how I felt, what I wanted, what I
              feared. She didn’t rush or try to convince me of anything — she
              just made me feel good about myself. The treatment was subtle, the
              results natural, and for the first time, I felt like I could look
              in the mirror and be happy with myself again. That, to me, was
              worth more than any cosmetic change.
            </span>
            <img
              src={ReviewIcon}
              alt="review"
              className="object-cover w-16 fill-white h-16 border-8 border-[#d5aa96] rounded-full -bottom-8 absolute text-amber-500"
            />
          </div>
          <div className="flex flex-col relative items-center  w-[350px] p-10 rounded-t-full bg-[#d5aa96] text-white ">
            <span className="flex text-xl">USA </span>
            <span className=" flex tex-lg"> Lauren Carter</span>
            <span className="text-xs text-justify">
              Dr. Masha was so attentive during my treat- ment. She listened
              carefully to what I wanted and didn’t push for anything
              unnecessary. The results were perfect — natural, subtle, and
              exactly what I had hoped for. I felt genu- inely cared for
              throughout the entire experi- ence
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
