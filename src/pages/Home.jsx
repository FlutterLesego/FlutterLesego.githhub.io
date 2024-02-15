import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// components
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

// sections
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { How } from "../sections/How";
import { ContactUs } from "../sections/ContactUs";

const StyledHome = styled.div``;

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(heroRef.current);
  }, []);

  return (
    <StyledHome>
      <NavBar isScrolled={isScrolled} />
      <Hero heroRef={heroRef} />
      <Features />
      <How />
      <ContactUs />
      <Footer />
    </StyledHome>
  );
}
