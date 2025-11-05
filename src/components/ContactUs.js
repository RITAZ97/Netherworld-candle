"use client";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const [buttonState, setButtonState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (buttonState !== 'idle') return;
    setButtonState('sending');
    setTimeout(() => {
      setButtonState('sent');
    }, 3000);
  };

  const handleInputChange = (setter) => (e) => {
    if (buttonState !== 'idle') {
      setButtonState('idle');
    }
    setter(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    if (buttonState !== 'idle') {
      setButtonState('idle');
    }
    setFirstName(e.target.value);
  };

  return (
    <div id="contact" className="w-[85%] mx-auto aspect-video mt-[60px] md:mt-[150px]">
      <h2 className="text-primary mt-[10px] md:mt-[10px] mb-[20px] md:mb-[50px] font-semibold text-center text-[22px] md:text-[40px]">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-between gap-[50px] md:gap-[100px]">
        <div className="">
          <h5 className="text-secondary text-[12px] md:text-[18px] mb-[20px]">We are here for you, how can we help?</h5>
          <form onSubmit={handleSubmit} className="max-w-[550px]">

            <div className="w-full flex justify-between gap-4">
              <div className="w-1/2">
                <label className="block text-secondary font-light mb-[5px] text-[12px] md:text-[16px]">
                  First Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="border-solid text-base border-secondary border-1 rounded-[4px] w-[full] h-[45px] md:h-[55px]">
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full h-full px-3 py-1 text-secondary"
                    required
                    maxLength={50}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{1,50}"
                    onChange={handleFirstNameChange}
                    value={firstName} />
                </div>
              </div>

              <div className="w-1/2">
                <label className="block text-secondary font-light mb-[5px] text-[12px] md:text-[16px]">Second Name</label>
                <div className="border-solid text-base border-secondary border-1 rounded-[4px] w-[full] h-[45px] md:h-[55px]">
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full h-full px-3 py-1 text-secondary"
                    maxLength={50}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{1,50}"
                    onChange={handleInputChange(setSecondName)}
                    value={secondName} />
                </div>
              </div>
            </div>

            <div className="w-full mt-[30px]">
              <label className="block text-secondary font-light mb-[5px] text-[12px] md:text-[16px]">
                Email
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="border-solid text-base border-secondary border-1 rounded-[4px] w-[full] h-[45px] md:h-[55px]">
                <input
                  type="email"
                  name="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  maxLength={50}
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                  className="peer bg-transparent outline-none w-full h-full px-[10px] py-[10px] md:px-3 md:py-1 text-secondary text-[12px] md:text-[16px]"
                  placeholder="name@example.com"
                  onChange={handleInputChange(setEmail)}
                  value={email}
                />
              </div>
            </div>

            <div className="w-full mt-[30px]">
              <p className="text-secondary font-light mb-[5px] text-[12px] md:text-[16px]">Subject</p>
              <div className="border-solid text-base border-secondary border-1 rounded-[4px] w-[full] h-[45px] md:h-[55px]">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full h-full px-3 py-1 text-secondary"
                  onChange={handleInputChange(setSubject)}
                  value={subject} />
              </div>
            </div>

            <div className="relative w-full mt-[30px]">
              <label className="block text-secondary font-light mb-[5px] text-[12px] md:text-[16px]">
                Message
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="border-solid text-base border-secondary border-1 rounded-[4px] w-[full] h-[200px]">
                <textarea
                  type="text"
                  className="bg-transparent outline-none w-full h-full px-3 pt-1 text-secondary align-text-top text-[12px] md:text-[16px]"
                  onChange={handleInputChange(setMessage)}
                  maxLength={maxChars}
                  placeholder="Leave your message..."
                  value={message} />
                <p className="absolute bottom-2 right-3 text-xs text-secondary/70">
                  {message.length}/{maxChars}
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={buttonState !== 'idle'}
              className={`flex items-center justify-center w-[250px] h-[55px] border-3
             border-primary rounded-[10px] text-secondary text-[20px] text-bold
              px-[20px] mx-auto mt-[30px] transition-opacity
              ${buttonState !== 'idle' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer opacity-100'}`}
            >
              {buttonState === 'sending' ? 'Sending...' : buttonState === 'sent' ? 'Sent!' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="w-full md:w-[680px] mx-auto">
          <h4 className="text-secondary text-center md:text-left font-bold text-[18px] md:text-[22px]">Frequently Asked Questions</h4>
          <div className="">
            <div className="w-full border-2 border-primary rounded-[15px] mt-[20px] p-[20px]">
              <p className="text-left text-primary font-bold text-[12px] md:text-[16px]">Q1. What is Netherworld Candle? Give me the short pitch.</p>
              <sm className="text-left text-secondary font-light text-[10px] md:text-[14px]">Netherworld Candle is a 1-4 player cooperative campaign blending branching
                narrative and tactical card-based combat. Set in a haunting world of Eastern
                mythology and tomb mysteries, every choice shapes your fate as the candle's
                light fades and ancient terrors awaken.</sm>
              <p className="text-left text-primary font-bold mt-[20px] text-[12px] md:text-[16px]">Q2. I heard Netherworld Candle was released in China.
                Is this just a translation? Why back this version?</p>
              <sm className="text-left text-secondary font-light text-[10px] md:text-[14px]">This is the Definitive International Edition, not a direct translation.
                We're rebuilding the entire experience with native English writers and original designers. It's a proven,
                refined game—now enhanced with polished rules, premium components, and exclusive content for a truly global
                release.</sm>
              <p className="text-left text-primary font-bold mt-[20px] text-[12px] md:text-[16px]">Q3. This game feels like other great campaign games.
                What inspired Netherworld Candle?</p>
              <sm className="text-left text-secondary font-light text-[10px] md:text-[14px]">We drew inspiration from Arkham Horror: The Card Game and Oathsworn:
                Into the Deepwood—story-driven tension and tactical depth. Yet Netherworld Candle stands apart with its Candle
                Track timer, Yin-Yang encounters, and seamless story-combat integration for a truly unique experience.</sm>
            </div>
            <h4 className="text-secondary font-bold mt-[15px] text-[18px] md:text-[22px] text-center md:text-left">Direct Contact</h4>
            <div className="w-full border-2 border-primary rounded-[15px] mt-[10px] p-[20px]">
              <p className="text-secondary font-light text-[12px] md:text-[16px]">For urgent inquiries or specific support needs, you can reach us
                directly at:</p>
              <a
                href="mailto:support@netherworldcandle.com"
                className="text-primary hover:text-green-300 transition-colors font-bold underline text-[12px] md:text-[18px]"
              >
                support@netherworldcandle.com
              </a>
              <p className="text-secondary font-light pt-[5px] text-[12px] md:text-[16px]"> We aim to respond to all emails within <span className="font-bold">2 business days</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;