const FAQSection = () => {
  return (
    <div className="container mx-auto p-4 mb-28">
      <div
        className="text-center pb-6 md:mt-32 mt-6"
      >
        <h3 className="text-4xl font-extrabold font-garamond">FAQ</h3>
        <p className="opacity-80 leading-7 mt-6">
          Find quick answers to common questions about Luxury Estates services
          and properties.
        </p>
      </div>
      <div className="lg:flex flex-row-reverse gap-6 mt-16">
        {/* image */}
        <div className="flex-1 h-[560px] w-full ">
          <img src="Frame.png" alt=""  className="h-full w-full object-cover"/>
        </div>
        {/* questions */}
        <div className="flex-1 flex justify-center items-center">
          <div>
            <div className="collapse collapse-plus bg-base-200 md:mt-16 mt-8">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How do I schedule a viewing?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Simply fill out our online form or call our concierge service.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Are the properties furnished?
              </div>
              <div className="collapse-content">
                <p>
                  Our properties can be furnished upon request for an additional
                  fee.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Do you offer financing options?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we work with trusted financial partners to offer flexible
                  financing solutions.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I list my property with Luxury Estates?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Absolutely, contact us to discuss listing your property with
                  our exclusive network.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Are there property management services available?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we provide comprehensive property management services to
                  ensure peace of mind.
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
