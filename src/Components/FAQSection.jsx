const FAQSection = () => {
  return (
    <div className="container mx-auto p-4 md:mt-32 mt-8">
      <div className="text-center">
        <h3 className="text-4xl font-extrabold font-garamond">FAQ</h3>
        <p className="opacity-80 leading-7 mt-6">
          Explore our FAQs to discover everything you need to know to enhance
          your artistic journey with ease
        </p>
      </div>
      <div className="lg:flex flex-row-reverse gap-6 mt-16">
        {/* image */}
        <div className="flex-1 w-full">
          <img
            src="Frame.png"
            alt=""
            className="md:h-full h-96 w-full object-center md:object-cover"
          />
        </div>
        {/* questions */}
        <div className="flex-1 flex justify-center items-center">
          <div>
            <div className="collapse collapse-plus bg-base-200 md:mt-16 mt-8">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What types of sculptures do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  We offer figurative, abstract, contemporary, and traditional
                  sculptures crafted from materials such as clay, wood, metal,
                  and resin.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Do you provide custom sculpting services?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer personalized sculpting services for portraits,
                  decor pieces, and commemorative statues.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What modeling materials and tools do you sell?
              </div>
              <div className="collapse-content">
                <p>
                  Our inventory includes clay, wax, plaster, polymer clay,
                  sculpting tools, armatures, brushes, and accessories.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How do I care for and maintain sculptures?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Keep sculptures away from sunlight, moisture, and extreme
                  temperatures; dust regularly with a soft, dry cloth and clean
                  with mild detergent as needed.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What shipping options do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  We provide standard, expedited, and international shipping
                  with reliable carriers, along with tracking information for
                  order monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
