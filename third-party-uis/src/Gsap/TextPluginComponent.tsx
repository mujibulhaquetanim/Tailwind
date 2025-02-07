import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useState } from "react";

gsap.registerPlugin(TextPlugin);

function TextPluginComponent() {
  const text = useRef(null);
  const basicText = useRef(null);
  const countDiv = useRef(null);
  const similarRef = useRef(null);
  const [count, setCount] = useState(0);

  useGSAP(() => {
    gsap.to(text.current, {
      text: "TextPlugin is here",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.in",
      backgroundColor: "red",
    });

    gsap.to(basicText.current, {
      text: "Sample Text",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "bounce.inOut",
      delay: 1,
      backgroundColor: "green",
    });
  });

  useGSAP(
    () => {
      gsap.to(countDiv.current, {
        x: 100,
        y: 70 + count,
        ease: "bounce",
        duration: 3,
        delay: 2,
        color: "black",
      });

      gsap.to(".similarClass", {
        x: 100,
        y: 70 + count,
        ease: "bounce",
        duration: 3,
        delay: 2,
        color: "black",
      });
    },
    { dependencies: [count], scope: similarRef, revertOnUpdate: true }
  );

  return (
    <div>
      <h1 ref={countDiv}>{count}</h1>
      <h1 className="basicText mt-3" ref={text}>
        TextPlugin
      </h1>
      <div ref={similarRef}>
        <div className="similarClass"></div>
      </div>
      <div className="similarClass"></div>

      <h1 className="basicText mt-3" ref={basicText}>
        Basic Text
      </h1>

      <button onClick={() => setCount((prev) => prev + 50)} className="mt-3 animate-pulse">Press Me to See the gsap magic</button>
    </div>
  );
}

export default TextPluginComponent;
