// filepath: /my-medical-app/my-medical-app/src/pages/Book.tsx
import React, { useEffect } from "react";
import bookImage1 from "../assets/book_1.png";
import bookImage3 from "../assets/book_3.png";
import bookTopLeft from "../assets/book_top_left.png";
import bookBottomLeft from "../assets/book_bottom_left.png";
import bookBackgroundFlower from "../assets/book_background_1.png";
import { Link } from "react-router-dom";

const Book: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    // <div className="flex relative py-20 pb-60 px-12 mx-10 rounded-3xl shadow-xl">

    <div className="flex flex-col w-full mt-20 px-20 gap-10 p-20 ">
      <div className="flex w-full relative bg-[#d6ad96]  justify-around pt-40 -mt-[14%] overflow-hidden rounded-[80px]  shadow-2xl">
        <div className="flex    absolute right-0 -top-[4%]  h-[800px] rounded-3xl ">
          <img
            src={bookBackgroundFlower}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>
        <div className="flex   w-1/2 absolute left-0 top-[4%]   h-[180px] rounded-3xl ">
          <img
            src={bookTopLeft}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>
        <div className="flex   w-1/2 absolute left-[2%] bottom-[0%]  h-[250px] rounded-3xl ">
          <img
            src={bookBottomLeft}
            alt="book image"
            className="object-cover  rounded-3xl"
          />
        </div>
        <div className="flex w-1/3 flex-col items-start   mt-20">
          <span className="text-7xl whitespace-nowrap text-white font-serif font-semibold">
            She is Me Now!
          </span>
          <hr className="" />
          <span className="text-2xl mt-4 text-white  text-justify mb-10">
            I’m Dr. Masha Lekic, a medical specialist in cosmetic derma- tology
            & anti-aging medicine, a wellness advocate, and the author of She Is
            Me Now — a book born from truth, refined by time, and written with
            the hope of reaching others who are ready to live from a deeper
            place.
          </span>
          <Link
            to={"/"}
            className="rounded-2xl  p-4 text-amber-800 text-base cursor-pointer font-semibold bg-[#d9bf9e]"
          >
            Get Your Book Now!
          </Link>
        </div>

        <div className="flex  z-10  w-1/2 -mt-20  h-[800px] rounded-3xl ">
          <img
            src={bookImage1}
            alt="book image"
            className="object-cover w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="flex w-full justify-between items-center   ">
        <div className="flex   w-[120%] bg-[#DAA06D]  h-[800px]  rounded-3xl ">
          <img
            src={bookImage3}
            alt="book 2"
            className="object-cover rounded-3xl w-full"
          />
        </div>
        <div className="flex flex-col w-full  bg-[#eecdbb] p-8 gap-8 items-center border-[8px] border-white rounded-[80px]">
          <div className="flex flex-col w-1/2 gap-[8px] bg-[#cb9992] text-white p-5 rounded-[80px]">
            <span className="text-5xl font-serif font-semibold whitespace-nowrap">She is me Now!</span>
            <hr className="font-bold" />
            <span className="text-xl">A Journey Back to Yourself</span>
          </div>

          <span className="text-xl font-semibold text-[#9e8474]">
            She Is Me Now is about the journey back to yourself — after the
            world has tried to mold you, after life has demanded you to bend,
            break, and keep going without pause.
          </span>
          <span className="text-xl font-semibold text-[#9e8474]">
            It’s about reclaiming the pieces of yourself you lost along the way,
            choosing your truth over the stories you were told to believe, and
            rising not because life was kind but be- cause you found the courage
            to stand back up, again and again.
          </span>
          <span className="text-xl font-semibold text-[#9e8474]">
            It’s a story of what happens when a woman chooses to step out of her
            survival mode and into her own life — not to prove herself but to
            finally live in alignment with who she truly is. Within these pages,
            I share my most honest reflec- tions — not as advice but as
            reminders. Reminders to slow down. To feel deeply. To honor the
            strength that comes from pain and the grace that rises from the
            ashes
          </span>
          <span className="text-xl font-semibold text-[#9e8474]">
            To rewrite your life — not in a perfect way, but in the raw,
            unfiltered truth of who you are.
          </span>

          <span className="text-xl font-semibold text-[#9e8474]">
            Because living fully isn’t about having it all together — it’s about
            choosing what truly matters and giving yourself per- mission to
            finally be free.
          </span>

          <button className="flex p-3 bg-[#cb9992] border-2 text-lg font-semibold border-white rounded-4xl  text-white"> Order for Pre Booing Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
