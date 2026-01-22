import { useState, useEffect } from "react";
import "./DontClick.css";

function DontClick() {
  const [isShaking, setIsShaking] = useState(false);

  // Array of random alert messages
  const alertMessages = [
    "???????????",
    "Why'd you do that",
    "Can you stop?",
    "Alright enough.",
    "STOP!!!!!!",
    "Do some research:",
  ];

  useEffect(() => {
    // Add or remove 'blur' class on the body based on isShaking state
    if (isShaking) {
      document.body.classList.add("shake");
    } else {
      document.body.classList.remove("shake");
    }

    // Cleanup to remove classes on component unmount
    return () => {
      document.body.classList.remove("shake", "blur");
    };
  }, [isShaking]);

  function handleClick() {
    // Trigger screen shake and blur
    setIsShaking(!isShaking);

    if (isShaking != true) {
      const randomMessage =
        alertMessages[Math.floor(Math.random() * alertMessages.length)];
      if (randomMessage == "Do some research:") {
        alert(randomMessage);

        window.open(
          "https://www.google.com/search?q=How+to+follow+basic+rules&sca_esv=da0068da29b6c6ff&sxsrf=ADLYWIJurtX5PWp9wpHgAhgVCodhuoHi8g%3A1730491440127&ei=MDQlZ-e9B8evptQP2pmzoAM&ved=0ahUKEwjnlc389ruJAxXHl4kEHdrMDDQQ4dUDCBA&oq=How+to+follow+basic+rules&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUhvdyB0byBmb2xsb3cgYmFzaWMgcnVsZXMyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwVIhixQxgdYxgdwAngBkAEAmAF2oAHdAaoBAzAuMrgBDMgBAPgBAZgCBKAC8wHCAgoQABiwAxjWBBhHwgIIECEYoAEYwwSYAwCIBgGQBgiSBwMyLjKgB74I&sclient=gws-wiz-serp"
        );
      }
    }

    // Log a funny warning in the console
    console.warn("You clicked the forbidden button........");
  }

  return (
    <div className="dont-click-container">
      <button onClick={handleClick} className="dont-click-button">
        Don't Click Me
      </button>
    </div>
  );
}

export default DontClick;
