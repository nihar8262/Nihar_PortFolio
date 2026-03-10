
import React, { useState } from "react";
import image1 from "../Image/email.png"

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("idle");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getButtonLabel = () => {
    if (submitState === "sending") return "Sending";
    if (submitState === "sent") return "Sent";
    if (submitState === "submitted") return "Submitted";
    return "Send";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitState === "sending") return;

    try {
      setSubmitState("sending");

      const response = await fetch("https://formspree.io/f/xjvnvnyo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitState("sent");
      setTimeout(() => {
        setSubmitState("submitted");
      }, 1000);

      setTimeout(() => {
        setFormData({ user_email: "", user_name: "", subject: "", message: "" });
        setSubmitState("idle");
      }, 2200);
    } catch (error) {
      setSubmitState("idle");
    }
  };

  return (
    <div id="contact" >
      <div className="flex px-6 md:px-0 flex-col justify-center items-center  ">
        {/* contact header */}
        <div className="text-white text-center mt-10  w-[20rem] mb-10 md:w-[34rem] ">
          <h1 className="font-bold text-3xl mb-10 border-b-2 border-b-yellow-500 py-2">
            Contact
          </h1>
          <p className="">
            Feel free to reach out to me,I'd love if you reached out to me.Even if it's just to say 'Hey!'.
            Don't hesitate! Drop me a line and I'll get back to you ASAP!
          </p>
        </div>

        {/* email */}
        <div className=" flex flex-col lg:flex-row justify-center items-center">
            <div className=" ">
                <img src={image1} alt="" className="md:w-[50vw]"/>
            </div>
        <form
         onSubmit={handleSubmit}
         className="bg-[#171721] p-4 mt-10 w-[22rem] md:w-[30rem] rounded-lg shadow-lg shadow-blue-800/50 flex flex-col gap-5 mb-28">
          <div>
            <h1 className="text-white font-bold text-3xl">Email Me 🚀</h1>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="bg-[#171721]  rounded-[0.5rem] text-white border w-full p-[12px]"
            />
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="bg-[#171721]  rounded-[0.5rem] text-white border w-full p-[12px]"
            />
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-[#171721]  rounded-[0.5rem] text-white border w-full p-[12px]"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#171721]  rounded-[0.5rem] text-white border w-full p-[12px]"
            />
          </div>
          
          
          
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mb-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#854CE6] rounded-xl group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#5225a1] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#6c35cb] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              {getButtonLabel()}
            </span>
          </button>

          
          
        </form>
        </div>
        <h1 className=" md:text-6xl lg:text-7xl xl:text-[110px]  -mb-[0.55rem] md:font-extrabold text-4xl text-[#1C1C27] font-extrabold md:-mb-[0.8rem] lg:-mb-[1rem] xl:-mb-[1.2rem]">
          NIHAR CHANDRA
        </h1>
      </div>
    </div>
  );
};
