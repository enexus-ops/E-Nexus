import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function EnexusLanding() {
  const [showMain, setShowMain] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mainContentRef = useRef(null);

  const Shuffle = ({
    text,
    duration = 0.7,           
    shuffleTimes = 50,         
    ease = "power3.out",
    stagger = 0.03, 
    scrambleCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    finalHold = 0.8,
    onComplete,
  }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (!ref.current || !text) return;
      const el = ref.current;
      el.innerHTML = "";

      const chars = text.split("");
      const spans = chars.map((ch) => {
        const span = document.createElement("span");
        span.textContent = ch;
        el.appendChild(span);
        return span;
      });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.delayedCall(finalHold, () => onComplete?.());
        },
      });

      spans.forEach((span, i) => {
        const singleRollDuration = duration / shuffleTimes;

        for (let j = 0; j < shuffleTimes; j++) {
          tl.to(
            span,
            {
              duration: singleRollDuration,
              textContent:
                scrambleCharset[
                  Math.floor(Math.random() * scrambleCharset.length)
                ],
              ease,
            },
            i * stagger + j * singleRollDuration
          );
        }

        tl.to(
          span,
          {
            duration: singleRollDuration,
            textContent: chars[i],
            ease,
          },
          i * stagger + duration
        );
      });

      return () => tl.kill();
    }, [text]);

    return (
      <p
        ref={ref}
        className="uppercase text-[4rem] text-center"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        {text}
      </p>
    );
  };

  const handleShuffleComplete = () => {
    gsap.to("#intro-text", {
      opacity: 0,
      duration: 1,
      onComplete: () => setShowMain(true),
    });
  };

  const handleMainAnimationComplete = () => {
    // Animate the welcome text to the very top
    gsap.to(mainContentRef.current, {
      y: -280, // Move up but not as far to accommodate larger text
      scale: 0.85, // Larger scale to keep text more prominent
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        setShowContent(true);
        // Animate other content in
        gsap.fromTo(".content-section", 
          { 
            opacity: 0, 
            y: 50 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          }
        );
      }
    });
  };

  useEffect(() => {
    if (showMain && mainContentRef.current) {
      // Initial fade in
      gsap.fromTo(mainContentRef.current, 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1.5,
          onComplete: () => {
            // Wait a bit then start moving to top
            gsap.delayedCall(1.5, handleMainAnimationComplete);
          }
        }
      );
    }
  }, [showMain]);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      {!showMain && (
        <div 
          id="intro-text"
          className="h-full flex items-center justify-center"
        >
          <Shuffle
            text="E-NEXUS"
            shuffleTimes={50}
            duration={1}
            stagger={0.05}
            finalHold={1}
            onComplete={handleShuffleComplete}
          />
        </div>
      )}

      {showMain && (
        <div className="h-full relative">
          {/* Main title that will move to top */}
          <div 
            ref={mainContentRef}
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            <div>
              <h1 className="text-5xl font-bold mb-3">Welcome to E-Nexus 🚀</h1>
              <p className="text-2xl">Your Tech Club Website</p>
            </div>
          </div>

          {/* Content that appears after title moves to top */}
          {showContent && (
            <div className="pt-28 px-8 h-full">
              {/* Header space for moved title */}
              <div className="h-24"></div>
              
              {/* Main content sections */}
              <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="content-section text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Innovate. Create. Connect.
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Join the premier technology community where passionate minds come together 
                    to build the future through code, creativity, and collaboration.
                  </p>
                </section>

                {/* Features Grid */}
                <div className="content-section grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
                    <div className="text-3xl mb-4">💻</div>
                    <h3 className="text-xl font-bold mb-3">Code & Build</h3>
                    <p className="text-gray-400">
                      Collaborate on cutting-edge projects and build applications that solve real-world problems.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-3">Launch Ideas</h3>
                    <p className="text-gray-400">
                      Transform your innovative concepts into reality with support from our tech community.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
                    <div className="text-3xl mb-4">🤝</div>
                    <h3 className="text-xl font-bold mb-3">Network & Grow</h3>
                    <p className="text-gray-400">
                      Connect with like-minded developers, designers, and tech enthusiasts.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <section className="content-section text-center">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Join E-Nexus Today
                  </button>
                  <p className="text-gray-400 mt-4">
                    Ready to be part of something extraordinary?
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}