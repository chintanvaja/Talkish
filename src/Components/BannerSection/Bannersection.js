import React, { useState, useEffect } from 'react'


const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text || index >= text.length) return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  // Reset text after full display
  useEffect(() => {
    if (index === text.length) {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000); // 2s pause before restarting
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text.length]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text">{displayedText}</p>
    </div>
  );
};

function Bannersection() {
  return (
    <section className="banner" >
      <div className="banner_main">
        <div className="banner_image">
          <div className="banner_inner">
            <div
              className="inner_top d-flex justify-content-between align-items-center"
            >
              <span>9:41</span>
              <div className="bannericon">
                <img src="./Icons/Cellular Connection.png" alt="icon" />
                <img src="./Icons/Wifi.png" alt="icon" />
                <img src="./Icons/Battery.png" alt="icon" />
              </div>
            </div>
            <div className="inner_mid">
              <div
                className="inner_mid_top d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <span className="squarebox"> </span>
                  <p className="ai">AI</p>
                </div>
                <div>
                  <p className="ai">09:00 pm</p>
                </div>
              </div>
              <div className="inner_mid_bottom">
                <TypewriterEffect text="Hello! I’m Talkish, your AI-powered assistant for both voice
                  and chat! I can handle countless interactions around the
                  clock, in any style you prefer. Reach out to me, and I’ll
                  respond just like a real person—let’s see if you agree!" className="mid_text" speed={50} />
        
              </div>
            </div>
            <div className="inner_bottom">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your number"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button className="btn" type="button" id="button-addon2">
                  <li>Call me</li>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bannersection
