import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/img/home-cyber/service/service-01.webp";
import serviceIcon_2 from "@/assets/img/home-cyber/service/service-02.webp";
import serviceIcon_3 from "@/assets/img/home-cyber/service/service-03.webp";
import serviceIcon_4 from "@/assets/img/home-cyber/service/service-04.webp";

import serviceHoverIcon_1 from "@/assets/img/main/4.jpg";
import serviceHoverIcon_2 from "@/assets/img/main/3.jpg";
import serviceHoverIcon_3 from "@/assets/img/main/2.jpg";
import serviceHoverIcon_4 from "@/assets/img/main/1.jpg";

interface DataType {
  id: number;
  page: string;
  icon?: string;
  title: string;
  desc: string;
  icon_img?: StaticImageData;
  hover_icon_img?: StaticImageData;
}

const service_data: DataType[] = [
  {
    id: 1,
    page: "home_2",
    title: "PCA (Personal Care Aide)",
    desc: "Assisting with essential activities of daily living to ensure personal comfort, hygiene, and independence at home.",
    icon_img: serviceIcon_1,
    hover_icon_img: serviceHoverIcon_1,
  },
  {
    id: 2,
    page: "home_2",
    title: "HHA (Home Health Aide)",
    desc: "Comprehensive health-related support and personal assistance monitored by licensed nursing professionals.",
    icon_img: serviceIcon_2,
    hover_icon_img: serviceHoverIcon_2,
  },
  {
    id: 3,
    page: "home_2",
    title: "OPWDD Services",
    desc: "Specialized, person-centered support programs designed to empower individuals with developmental disabilities.",
    icon_img: serviceIcon_3,
    hover_icon_img: serviceHoverIcon_3,
  },
  {
    id: 4,
    page: "home_2",
    title: "Pediatric Care",
    desc: "Compassionate, specialized nursing and therapeutic care tailored specifically for medically fragile children.",
    icon_img: serviceIcon_4,
    hover_icon_img: serviceHoverIcon_4,
  },
];

export default service_data;
