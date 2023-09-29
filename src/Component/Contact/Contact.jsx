import Lottie from "lottie-react";
import PageTopBanner from "../Pages/Shared/PageTopBanner";
import ContactNow from "../../assets/Contact/contact.json";
const Contact = () => {
  return (
    <>
      <PageTopBanner title={"Contact"} secoundtitle={"Contact"} />
      <div className="max-w-6xl mx-auto mt-5 overflow-hidden bg-white w-full py-10 p-5 ">
        <div className="grid items-stretch md:grid-cols-2 gap-10">
          <Lottie
            className="w-full h-full"
            animationData={ContactNow}
            loop={true}
          />
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
        </div>
      </div>
    </>
  );
};

export default Contact;
