import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a Social Media company.",
};

const About = async () => {
  return (
    <main>
      <h1>About</h1>
      <p>We are a Social Media company that wants to bring people together.</p>
    </main>
  );
};

export default About;
