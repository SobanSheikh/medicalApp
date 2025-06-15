import { useEffect } from "react";
import wellnessImage1 from "../assets/wellness_1.png";
import wellnessImage2 from "../assets/wellness_2.png";
import wellnessImage3 from "../assets/home_yoga_1.png";
import wellnessGalleryImage1 from "../assets/wellness_gallery_1.png";
import wellnessGalleryImage2 from "../assets/wellness_gallery_2.png";
import wellnessGalleryImage3 from "../assets/wellness_gallery_3.png";
import wellnessGalleryImage4 from "../assets/wellness_gallery_4.png";
import wellnessBackgroundImage from "../assets/wellness_background.png";

const Wellness = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full mt-20   gap-20 p-20 relative">
      <div className="flex w-full gap-14   justify-center">
        <div className="flex flex-col  relative mt-20 w-1/2">
          <div className="flex rounded-full left-[30%]  -top-[40%] absolute h-[600px] w-[600px]  ">
            <img
              src={wellnessImage2}
              alt="book image"
              className="object-cover    rounded-3xl"
            />
          </div>
          <div className="flex rounded-full left-[32%]  -top-[4%] absolute h-[300px] w-[300px] bg-[#d9bf9e] "></div>
          <span className="text-6xl ml-16 font-semibold z-10">Have the </span>
          <span className="text-8xl font-semibold z-10 mr-2"> Beauty</span>
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

        <div className="flex flex-col   items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessImage3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-3xl">djasdgs</span>
          <hr />
          <span className="text-base text-center">
            Botox® injections improve appearance by relaxing muscles that cause
            wrinkles. These injections also treat medical conditions, including
            migraines, hyperhidrosis, overactive bladder and eye problems.
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessImage3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-3xl">djasdgs</span>
          <hr />
          <span className="text-base">
            Botox® injections improve appearance by relaxing muscles that cause
            wrinkles. These injections also treat medical conditions, including
            migraines, hyperhidrosis, overactive bladder and eye problems.
          </span>
        </div>

        <div className="flex flex-col items-center ">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessImage3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-3xl">djasdgs</span>
          <hr />
          <span className="text-base">
            Botox® injections improve appearance by relaxing muscles that cause
            wrinkles. These injections also treat medical conditions, including
            migraines, hyperhidrosis, overactive bladder and eye problems.
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex rounded-t-[40%] rounded-b-[40%] h-[300px] w-[200px] overflow-hidden">
            <img
              src={wellnessImage3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-3xl">djasdgs</span>
          <hr />
          <span className="text-base">
            Botox® injections improve appearance by relaxing muscles that cause
            wrinkles. These injections also treat medical conditions, including
            migraines, hyperhidrosis, overactive bladder and eye problems.
          </span>
        </div>
      </div>

      <div className="flex w-full rounded-xl p-10 items-center shadow-xl flex-col gap-10  bg-[#a99384]">
        <div className=" flex p-4 text-3xl bg-pink-300 rounded-4xl self-center">
          More Services
        </div>
        <div className="flex w-3/4 flex-col gap-3 px-20">
          {/* repeated components */}

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
          </div>

          <div className="flex justify-between gap-20  ">
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
            <div className="flex w-full rounded-3xl p-2 px-4 items-center gap-6 bg-green-200 ">
              <div className=" p-2 bg-red-200 w-10 rounded-full">1</div>
              <span className="text-base">Skin Rejuvenation & Anti-Aging</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full rounded-xl p-10 items-center shadow-xl flex-col gap-10  bg-[#a99384]">
        <div className=" flex p-4 text-3xl bg-pink-300 rounded-4xl self-center">
          Yoga and Wellness
        </div>

        <div className="flex flex-col w-3/4">
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
      <div className="flex w-full rounded-xl p-10 items-center flex-col shadow-xl  gap-10  bg-[#a99384]">
<div className="flex w-1/2 gap-4">

<div className="flex rounded-2xl h-[500px] w-[300px] overflow-hidden">
            <img
              src={wellnessGalleryImage1}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
          <div className="flex rounded-2xl h-[240px] w-[500px] overflow-hidden">
            <img
              src={wellnessGalleryImage2}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex justify-between gap-4">
          <div className="flex rounded-2xl h-[240px] w-[240px] overflow-hidden">
            <img
              src={wellnessGalleryImage3}
              alt="book image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex rounded-2xl h-[240px] w-[240px] overflow-hidden">
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
  );
};

export default Wellness;
