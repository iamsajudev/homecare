import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/img/home-cyber/service/service-01.webp";
import serviceIcon_2 from "@/assets/img/home-cyber/service/service-02.webp";
import serviceIcon_3 from "@/assets/img/home-cyber/service/service-03.webp";
import serviceIcon_4 from "@/assets/img/home-cyber/service/service-04.webp";
import serviceIcon_5 from "@/assets/img/home-cyber/service/service-05.webp";
import serviceIcon_6 from "@/assets/img/home-cyber/service/service-06.webp";

import serviceHoverIcon_1 from "@/assets/img/home-cyber/service/service-001.webp";
import serviceHoverIcon_2 from "@/assets/img/home-cyber/service/service-002.webp";
import serviceHoverIcon_3 from "@/assets/img/home-cyber/service/service-003.webp";
import serviceHoverIcon_4 from "@/assets/img/home-cyber/service/service-004.webp";
import serviceHoverIcon_5 from "@/assets/img/home-cyber/service/service-005.webp";
import serviceHoverIcon_6 from "@/assets/img/home-cyber/service/service-006.webp";

interface DataType {
  id: number;
  page: string;
  icon?: string;
  title: string;
  desc: string;
  icon_img?: StaticImageData;
  hover_icon_img?: StaticImageData;
}
[];

const service_data: DataType[] = [
  // home_2 (Updated with Hope & Cherish Home Care Services)[cite: 1]
  {
    id: 1,
    page: "home_2",
    icon: "icomoon-layer",
    title: "Nursing Care",
    desc: "Professional clinical nursing support delivered directly to your home for private and insurance clients[cite: 1].",
  },
  {
    id: 2,
    page: "home_2",
    icon: "icomoon-application",
    title: "Home Health Aide",
    desc: "Dedicated assistance with daily living activities provided by trained home health aides[cite: 1].",
  },
  {
    id: 3,
    page: "home_2",
    icon: "icomoon-cloud-data",
    title: "Personal Care",
    desc: "Reliable personal care services tailored to maintain comfort and safety at home[cite: 1].",
  },
  {
    id: 4,
    page: "home_2",
    icon: "icomoon-megaphone",
    title: "Homemaker & Housekeeper",
    desc: "Household management and cleaning assistance ensuring a clean, welcoming environment[cite: 1].",
  },
  {
    id: 5,
    page: "home_2",
    icon: "icomoon-lock",
    title: "Therapy Services",
    desc: "Professional occupational, physical, respiratory, and speech-language pathology therapy[cite: 1].",
  },
  {
    id: 6,
    page: "home_2",
    icon: "icomoon-magnifiying-glass",
    title: "Medical Social & Audiology",
    desc: "Specialized audiology, medical social services, and nutritional counseling support[cite: 1].",
  },

  // inner_page (Updated with full official DOH service list)[cite: 1]
  {
    id: 1,
    page: "inner_page",
    icon: "icomoon-profile",
    title: "Audiology",
    desc: "Professional audiology care tailored for private and insurance-covered clients at home[cite: 1].",
  },
  {
    id: 2,
    page: "inner_page",
    icon: "icomoon-layer",
    title: "Home Health Aide",
    desc: "Compassionate home health aide assistance for everyday care and support[cite: 1].",
  },
  {
    id: 3,
    page: "inner_page",
    icon: "icomoon-application",
    title: "Homemaker",
    desc: "Reliable homemaking services to help maintain a well-ordered and comfortable home[cite: 1].",
  },
  {
    id: 4,
    page: "inner_page",
    icon: "icomoon-cloud-data",
    title: "Housekeeper",
    desc: "Housekeeping support designed to keep living spaces safe and clean[cite: 1].",
  },
  {
    id: 5,
    page: "inner_page",
    icon: "icomoon-megaphone",
    title: "Medical Social Services",
    desc: "Expert guidance and counseling through professional medical social services[cite: 1].",
  },
  {
    id: 6,
    page: "inner_page",
    icon: "icomoon-lock",
    title: "Nursing",
    desc: "Skilled nursing care customized to individual health and medical requirements[cite: 1].",
  },
  {
    id: 7,
    page: "inner_page",
    icon: "icomoon-magnifiying-glass",
    title: "Nutritional",
    desc: "Nutritional counseling and dietary guidance to support optimal health and wellness[cite: 1].",
  },
  {
    id: 8,
    page: "inner_page",
    icon: "icomoon-computer",
    title: "Personal Care",
    desc: "Individualized personal care assistance focused on dignity and routine support[cite: 1].",
  },
  {
    id: 9,
    page: "inner_page",
    icon: "icomoon-deep-learning",
    title: "Therapies (Occupational, Physical, Respiratory, Speech)",
    desc: "Comprehensive occupational, physical, respiratory, and speech-language pathology therapy[cite: 1].",
  },
];

export default service_data;
