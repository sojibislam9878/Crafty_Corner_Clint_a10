const Contact = () => {
  return (
    <div className="container mx-auto p-4 md:mb-28 mb-8 md:mt-32 mt-8">
        <div
        className="text-center "
      >
        <h3 className="text-4xl font-extrabold font-garamond">Contact Us</h3>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Have a question or need assistance? Our Contact Us section is your gateway to personalized support and expert guidance.Get in touch today and lets make your creative vision a reality together.
        </p>
      </div>
      <div className="p-4 bg-base-200 rounded-xl mt-10" >
        <div className="text-center pt-6 mb-6">
          <h1 className="text-3xl font-bold">Still Have A Question?</h1>
          <p className="font-semibold opacity-80">We are available 24/7/365</p>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className=" p-4 bg-base-100 rounded-lg mt-2  w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className=" p-4 bg-base-100 rounded-lg mt-2  w-full"
            placeholder="Last Name"
          />
        </div>
        <div className="lg:flex gap-4">
          <input
            type="text"
            className=" p-4 bg-base-100 rounded-lg mt-2 w-full"
            placeholder="Your Email"
          />
          <input
            type="text"
            className=" p-4 bg-base-100 rounded-lg mt-2 w-full"
            placeholder="Phone"
          />
        </div>
        <textarea
          className=" w-full bg-base-100 rounded-lg mt-3 h-28 p-2"
          placeholder="Your messages"
        ></textarea>
        <button className="btn bg-[#B18B5E] text-white"> Submit</button>
      </div>
    </div>
  );
};

export default Contact;
