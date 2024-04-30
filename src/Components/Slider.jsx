import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
// import { Cursor, useTypewriter } from 'react-simple-typewriter'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  // const {text}= useTypewriter({
  //   words:['developer','designer', "Photogrpher"],
  //   loop:{}
  // })

  return (
    <div className="-mt-3">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg1.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-[510px] lg:h-full"
          >
            <div className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]"
              >
                <Typewriter
                  words={[" The Enigmatic World of Stone Sculpture"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                {/* <Cursor></Cursor> */}
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="700"
                data-aos-duration="1400"
                className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4"
              >
                Stone sculpture, a timeless tradition that spans continents and
                epochs, embodies the essence of endurance and beauty. From the
                rough-hewn quarry to the meticulous chisel strokes of the
                sculptors hand, each piece tells a story of transformation and
                transcendence.
              </p>
              <button
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="btn border-none text-white bg-[#B18B5E]  mt-14 lg:mb-80 mb-10 hover:bg-[#997851]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg2.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-[510px] lg:h-full"
          >
            <div className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]">
                <Typewriter
                  words={["The Art of Clay Sculpture"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4">
                Clay sculpture, an ancient and revered art form, holds within it
                the power to captivate, inspire, and evoke profound emotions.
                From the moment the artists hands touch the malleable clay, a
                journey of creation begins. With each deliberate movement, the
                sculptor breathes life into the formless mass.
              </p>
              <button
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="btn border-none text-white bg-[#B18B5E] mt-14 lg:mb-80 mb-10 hover:bg-[#997851]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg3.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-[510px] lg:h-full"
          >
            <div className="container mx-auto md:p-4 text-white text-center mt-3">
              <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-7 pt-4 md:pt-12 font-garamond lg:pt-40 md:leading-10 lg:leading-[60px]">
                <Typewriter
                  words={["The Artistry of Wood Carving"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="opacity-80 md:leading-7 lg:mt-12 mt-6 lg:leading-8 px-4">
                Wood carving is a time-honored craft that transforms a simple
                piece of wood into a work of art through the skillful
                manipulation of knives, chisels, and gouges. This ancient
                technique has been practiced across cultures and civilizations,
                yielding intricate sculptures, ornate furniture, and decorative
                objects that showcase the beauty and versatility of wood.
              </p>
              <button
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="btn border-none text-white bg-[#B18B5E] mt-14 lg:mb-80 mb-10 hover:bg-[#997851]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
