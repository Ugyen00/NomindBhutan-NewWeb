"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "@/components/main/Hero";
import Services from "@/components/main/Services";
import Pricing from "@/components/main/Pricing";
import AboutUs from "@/components/main/AboutUs";
import FeaturedBot from "@/components/main/FeaturedBot";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Pricing />
        <AboutUs />
        <FeaturedBot />
      </div>
      <Router>
        <Routes>
          <Route path="/contact" />
        </Routes>
      </Router>
    </main>
  );
}
