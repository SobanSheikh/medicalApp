import { useEffect } from "react";
import wellnessImage1 from "../assets/wellness_1.png";
import wellnessImage2 from "../assets/wellness_2.png";
import wellnessImage3 from "../assets/home_yoga_1.png";
import wellnessGalleryImage1 from "../assets/wellness_gallery_1.png";
import wellnessGalleryImage2 from "../assets/wellness_gallery_2.png";
import wellnessGalleryImage3 from "../assets/wellness_gallery_3.png";
import wellnessGalleryImage4 from "../assets/wellness_gallery_4.png";
import wellnessSection2Image1 from "../assets/wellness_section2-1.png";
import wellnessSection2Image2 from "../assets/wellness_section2-2.png";
import wellnessSection2Image3 from "../assets/wellness_section2-3.png";
import wellnessSection2Image4 from "../assets/wellness_section2-4.png";
import wellnessBackgroundImage from "../assets/wellness_background.png";
import wellnessSection3BackgroundImage from "../assets/wellness_section3_background.png";
import wellnessSection4BackgroundImaage from "../assets/wellness_section4_background.png"

const Wellness = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full mt-20    px-20 pt-20  relative">
      <div className="flex w-full gap-14   justify-center">
        <div className="flex flex-col text-[#9e8474] font-serif  relative mt-20 w-1/2">
          <div className="flex rounded-full left-[30%]  -top-[40%] absolute h-[600px] w-[600px]  ">
            <img
              src={wellnessImage2}
              alt="book image"
              className="object-cover    rounded-3xl"
            />
          </div>
          <div className="flex rounded-full left-[32%]  -top-[4%] absolute h-[300px] w-[300px] bg-[#d9bf9e] "></div>
          <span className="text-6xl ml-16 font-semibold z-10">Have the </span>
          <span className="text-9xl font-semibold z-10 mr-2"> Beauty</span>
          <span className="text-5xl font-semibold z-10 mr-4">
            of your dreams
          </span>
        </div>
        <div className="flex  relative    h-[600px] rounded-3xl ">
          <div className="flex rounded-full left-[12%]  top-[10%] absolute h-[450px] w-[450px] bg-[#d9bf9e] "></div>
          <img
            src={wellnessImage1}
            alt="book image"
            className="object-cover z-10 -mt-10  rounded-3xl"
          />
        </div>
      </div>

      <div className="flex w-full relative z-30 rounded-xl p-20 -mt-32  justify-between gap-40  ">
        {/*background decoration*/}
        <div className="flex absolute h-full w-full -ml-15 rounded-3xl -z-10 -top-[3%] overflow-hidden">
          <img
            src={wellnessBackgroundImage}
            alt="book image"
            className="object-fill w-full rounded-3xl h-full overflow-hidden"
          />
        </div>

        {/* components */}

        <div className="flex flex-col justify-around items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessSection2Image1}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex text-white flex-col gap-1">
            <span className="text-2xl whitespace-nowrap">BOTOX</span>
            <hr />
            <span className="text-base text-center">
              Botox® injections improve appearance by relaxing muscles that
              cause wrinkles. These injections also treat medical conditions,
              including migraines, hyperhidrosis, overactive bladder and eye
              problems.
            </span>
          </div>

          <button
            onClick={() => {}}
            className="flex p-2 mt-2 px-3 bg-[#e2dbcc] font-semibold  border text-[#9e8474] border-white rounded-4xl"
          >
            Read More!
          </button>
        </div>

        <div className="flex flex-col justify-around items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessSection2Image2}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex text-white flex-col gap-1">
            <span className="text-2xl whitespace-nowrap">DERMAL FILERS</span>
            <hr />

            <span className="text-base">
              Dermal fillers are injections that plump up wrinkles and smooth
              lines on your face. There are several types of dermal fillers.
              Healthcare providers usually inject dermal fillers in the areas
              around your eyes, mouth nose, face and hands.
            </span>
          </div>
          <button
            onClick={() => {}}
            className="flex p-2 mt-2 px-3 bg-[#e2dbcc] font-semibold  border text-[#9e8474] border-white rounded-4xl"
          >
            Read More!
          </button>
        </div>

        <div className="flex flex-col justify-around items-center ">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessSection2Image3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex text-white flex-col gap-1">
            <span className="text-2xl whitespace-nowrap">SKIN BOOSTERS</span>
            <hr />
            <span className="text-base">
              Profhilo has a less dense, runnier consistency than dermal fillers
              and is injected only into the upper layers of the skin, and
              contains one of the highest concentrations of stabilized
              hyaluronic acid on the market
            </span>
          </div>
          <button
            onClick={() => {}}
            className="flex p-2 mt-2 px-3 bg-[#e2dbcc] font-semibold  border text-[#9e8474] border-white rounded-4xl"
          >
            Read More!
          </button>
        </div>

        <div className="flex flex-col justify-around items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessSection2Image4}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex text-white flex-col gap-1">
            <span className="text-2xl whitespace-nowrap">PLATELET RICH PLASMA</span>
            <hr />
            <span className="text-base">
              PRP (Platelet Rich Plasma) treatment is a revolutionary skincare
              solution that uses the body’s healing powers to stimulate tissue
              growth and give your skin a rejuvenated and healthy appearance.
            </span>
          </div>
          <button
            onClick={() => {}}
            className="flex p-2 mt-2 px-3 bg-[#e2dbcc] font-semibold  border text-[#9e8474] border-white rounded-4xl"
          >
            Read More!
          </button>
        </div>
      </div>
      <div className="flex relative flex-col bg-[#c8b7a6] pt-6 -mt-[4%] -mx-[4.5%]">
      <div className="flex  absolute ">
              <img
                src={wellnessSection3BackgroundImage}
                alt="book image"
                className="object-cover w-2/3 "
              />
            </div>

      <div className="flex w-full  z-10 p-10 items-center  flex-col gap-10  ">
        <div className=" flex p-4 font-serif font-semibold bg-[#cb9992] text-4xl border-2 border-white text-white  rounded-4xl self-center">
          More Services
        </div>
        <div className="flex w-3/4 flex-col gap-3 px-20">
          {/* repeated components */}

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">1</div>
              <span className="text-xl text-[#9e8474] font-semibold">Skin Rejuvenation & Anti-Aging</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">5</div>
              <span className="text-xl text-[#9e8474] font-semibold">Medical-Grade Chemical Peels</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">2</div>
              <span className="text-xl text-[#9e8474] font-semibold">Measotherapy</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">6</div>
              <span className="text-xl text-[#9e8474] font-semibold">Pigmentation Control</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">3</div>
              <span className="text-xl text-[#9e8474] font-semibold">Hair Restoration Treatments</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">7</div>
              <span className="text-xl text-[#9e8474] font-semibold">Holistic Skin Health Optimization</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">4</div>
              <span className="text-xl text-[#9e8474] font-semibold">Collagen Induction</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-[#d6ad96] ">
              <div className=" p-2 bg-[#cb9992] w-10 rounded-full">8</div>
              <span className="text-xl text-[#9e8474] font-semibold">Regenerative Aesthetic CareAging</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full  p-10 items-center z-10  relative flex-col gap-10  ">
      <div className="flex  absolute w-full inset-0 -z-10 top-[10%] h-[600px]   ">
              <img
                src={wellnessSection4BackgroundImaage}
                alt="book image"
                className="object-fill w-full opacity-35"
              />
            </div>
        <div className=" flex p-4 text-4xl text-white font-semibold font-serif border border-white rounded-4xl self-center">
          Yoga and Wellness
        </div>

        <div className="flex flex-col text-white text-lg font-semibold w-3/4">
          <span>
            Beyond the clinical side of my work is someone who understands that
            wellness is not a luxury — it’s a necessity. The way we move,
            breathe, eat, and restore ourselves matters. My path into yoga and
            holistic wellbeing didn’t replace medicine — it deepened it. It
            offered what protocols alone could not: a more personal, lived
            connection with the body and its needs
          </span>
          <span>
            ’m a certified RYT300 yoga teacher, though I don’t lead classes.
            Instead, I integrate the principles into how I live, heal, and
            support others.
          </span>
          <span>
            My wellness approach is rooted in rhythm, simplicity, and daily
            choices that honor the body, mind, and soul. I’ve seen firsthand how
            yoga, stretching, and plant-based living affect not only the skin
            and hormones, but also our energy, sleep, and emotional wellbeing
          </span>

          <span>
            This way of living is the foundation of my second book — a deeper,
            personal exploration of Wellness & Yoga as daily tools for balance,
            healing, and sustainable self-care.
          </span>
        </div>
      </div>
      <div className="flex w-full z-10 p-10 items-center flex-col   gap-10  ">
        <div className="flex w-full gap-10  justify-center items-center">
          
          <div className="flex rounded-2xl h-[550px] w-[350px] overflow-hidden">
            <img
              src={wellnessGalleryImage1}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex rounded-2xl h-[270px] w-[600px] overflow-hidden">
              <img
                src={wellnessGalleryImage2}
                alt="book image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex justify-between gap-4">
              <div className="flex rounded-2xl h-[260px] w-[290px] overflow-hidden">
                <img
                  src={wellnessGalleryImage3}
                  alt="book image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex rounded-2xl h-[260px] w-[290px] overflow-hidden">
                <img
                  src={wellnessGalleryImage4}
                  alt="book image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Wellness;
