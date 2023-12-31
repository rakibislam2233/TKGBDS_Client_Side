import Lottie from "lottie-react";
import ContactNow from "../../assets/Contact/contact.json";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
        <title>Contact | TKGBDS </title>
      </Helmet>
      <div className="max-w-6xl mx-auto mt-5 overflow-hidden bg-white w-full py-10 p-5 z-40">
        <div className="grid items-stretch md:grid-cols-2 gap-10">
          <div>
            <div className="p-10 border rounded-2xl">
              <h3 className="text-2xl pb-5 font-semibold text-black">
                Send us a message
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder=""
                    className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder=""
                    className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    className="block w-full py-2 px-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:border-[#024E92] focus:bg-white caret-[#024E92]"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <button className="w-full newBTN ">Send</button>
                </div>
              </div>
            </div>
          </div>
          <Lottie
            className="w-full h-full"
            animationData={ContactNow}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
