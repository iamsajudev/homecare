"use client"
import Link from "next/link"
import { motion, } from 'framer-motion';
import { useParallax } from "@/hooks/TweenMax";
import { useRef } from "react";

const Banner = () => {

   const containerRef = useRef<HTMLDivElement>(null);
   const { parallaxX, parallaxY } = useParallax(containerRef, 20);

   return (
      <div className="banner-area banner-area-2 bg-relative" style={{ backgroundImage: `url(/assets/img/banner/3.webp)` }} ref={containerRef}>
         <div className="bg-overlay-gradient"></div>
         <motion.div animate={{ x: parallaxX * 2, y: parallaxY * 0.5 }} className="banner-bg-img" style={{ backgroundImage: `url(/assets/img/banner/4.webp)` }}></motion.div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-9">
                  <div className="banner-inner">
                     <h4 className="sub-title">Licensed Home Care Services Agency</h4>
                     <h2 className="title">Compassionate <span>Home Care</span> You Can Trust</h2>
                     <p className="content">Providing professional private-pay and private insurance home care services across the Bronx, Kings, Nassau, New York, Queens, and Richmond counties.</p>
                     <div className="btn-wrap banner-2-btn">
                        <Link className="it-btn btn-base" href="/contact">Book Consultation</Link>
                        <Link className="it-btn btn-black" href="/services">Our Services</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner