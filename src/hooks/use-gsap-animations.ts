"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Reveal Animations (Fade & Slide Up)
    const revealElements = document.querySelectorAll("[data-gsap='reveal']");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
          visibility: "hidden",
        },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // 2. Parallax Animations
    const parallaxElements = document.querySelectorAll("[data-gsap='parallax']");
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "0.1");
      
      gsap.to(el, {
        y: -150 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // 3. Staggered List Reveal
    const staggerContainers = document.querySelectorAll("[data-gsap='stagger-container']");
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll("[data-gsap='stagger-item']");
      
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
