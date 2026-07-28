import { StaticImageData } from "next/image"

import introIcon_1 from "@/assets/img/icon/1.webp";
import introIcon_2 from "@/assets/img/icon/2.webp";
import introIcon_3 from "@/assets/img/icon/3.webp";
import introIcon_4 from "@/assets/img/home-cyber/service/1.webp";
import introIcon_5 from "@/assets/img/home-cyber/service/2.webp";
import introIcon_6 from "@/assets/img/home-cyber/service/3.webp";
import introHoverIcon_1 from "@/assets/img/home-cyber/service/01.webp";
import introHoverIcon_2 from "@/assets/img/home-cyber/service/02.webp";
import introHoverIcon_3 from "@/assets/img/home-cyber/service/03.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   icon_img?: StaticImageData;
   hover_icon_img?: StaticImageData;
   title: string;
   desc: string;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Private-Pay & Insurance",
      desc: "Flexible home care coverage tailored for clients paying privately or using private insurance plans .",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-time",
      title: "24/7 Support Care",
      desc: "Reliable home health aide and nursing services available when you and your loved ones need it most .",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-money",
      title: "Licensed Excellence",
      desc: "DOH certified and licensed home care services agency (License No: 2681L001) operating in NYC .",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      icon_img: introIcon_1,
      title: "Skilled Nursing",
      desc: "Professional clinical nursing and medical support delivered directly to your home .",
   },
   {
      id: 2,
      page: "home_4",
      icon_img: introIcon_2,
      title: "Personal Care & HHA",
      desc: "Dedicated home health aides and personal care assistants for daily living support .",
   },
   {
      id: 3,
      page: "home_4",
      icon_img: introIcon_3,
      title: "Therapy Services",
      desc: "Comprehensive physical, occupational, respiratory, and speech-language pathology therapy .",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      icon_img: introIcon_4,
      hover_icon_img: introHoverIcon_1,
      title: "Homemaker & Housekeeper",
      desc: "Household management and cleaning assistance to ensure a safe, comfortable living environment .",
   },
   {
      id: 2,
      page: "home_5",
      icon_img: introIcon_5,
      hover_icon_img: introHoverIcon_2,
      title: "Medical Social & Nutritional",
      desc: "Expert guidance from medical social services and professional nutritional counseling .",
   },
   {
      id: 3,
      page: "home_5",
      icon_img: introIcon_6,
      hover_icon_img: introHoverIcon_3,
      title: "Multi-County Coverage",
      desc: "Proudly serving clients across the Bronx, Kings, Nassau, New York, Queens, and Richmond counties .",
   },
]

export default intro_data;