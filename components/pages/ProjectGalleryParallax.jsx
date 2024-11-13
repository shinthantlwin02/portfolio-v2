"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
    "/images/pj1.png",
    "/images/pj2.png",
    "/images/pj3.png",
    "/images/pj4.png",
    "/images/pj5.png",
    "/images/pj6.png",
    "/images/pj7.png",
    "/images/pj8.png",
    "/images/pj9.jpg",
    "/images/pj10.jpg",
    "/images/pj11.jpg",
    "/images/pj12.png"
  ];

export function ProjectGalleryParallax() {
  return <ParallaxScroll images={images} />;
}


