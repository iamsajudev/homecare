"use client"
import Image from "next/image"
import { useState } from "react"

import aboutThumb from "@/assets/img/about/3.webp";

const tab_title: string[] = ["Our Mission", "Our Vision"];

const tab_content: JSX.Element[] = [
   (<>To deliver compassionate, professional, and reliable licensed home care services to private-pay and private insurance clients, ensuring comfort, safety, and dignity within their own homes .</>),
   (<>To be the most trusted Licensed Home Care Services Agency (LHCSA) across our service counties, setting the standard for clinical excellence and personal client support .</>),
]

const About = () => {

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="about-area pd-top-90 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="mask-bg-wrap mask-bg-img-3">
                     <div className="thumb">
                        <Image src={aboutThumb} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title left-border">About Us</h5>
                     <h2 className="title">Hope & Cherish Home Care L.L.C.</h2>
                     <p className="content-strong mt-2">Licensed Home Care Services Agencies (LHCSAs) offer home care services to clients who pay privately or have private insurance coverage .</p>
                     <ul className="nav nav-tabs tab-button-style mt-4" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item">
                              <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                 {tab}
                              </button>
                           </li>
                        ))}
                     </ul>

                     <div className="tab-content" id="myTabContent">
                        {tab_content.map((content, index) => (
                           <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="home">
                              <p className="content mt-4">{content}</p>
                              <div className="list-wrap mt-4">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <ul className="single-list-inner">
                                          <li>Private-pay & insurance clients </li>
                                          <li>DOH License No: 2681L001 </li>
                                       </ul>
                                    </div>
                                    <div className="col-lg-6">
                                       <ul className="single-list-inner">
                                          <li>Comprehensive clinical & care support </li>
                                          <li>Serving 6 New York Counties </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About