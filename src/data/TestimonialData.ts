import { StaticImageData } from "next/image";

import testiThumb_1 from "@/assets/img/testimonial/1.webp";
import testiThumb_2 from "@/assets/img/testimonial/2.webp";
import testiThumb_3 from "@/assets/img/team/1.webp";
import testiThumb_4 from "@/assets/img/team/2.webp";
import testiThumb_5 from "@/assets/img/team/3.webp";
import testiThumb_6 from "@/assets/img/team/4.webp";
import testimonialIcon_1 from "@/assets/img/testimonial/4.webp";
import testimonialIcon_2 from "@/assets/img/about/h5-2.webp";
import testimonialIcon_3 from "@/assets/img/testimonial/02.webp";

interface DataType {
  id: number;
  page: string;
  img: StaticImageData;
  name: string;
  designation: string;
  desc: string;
}
[];

const testimonial_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    img: testiThumb_1,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "home_1",
    img: testiThumb_2,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },
  {
    id: 3,
    page: "home_1",
    img: testiThumb_1,
    name: "HHA Care Recipient",
    designation: "Client, Queens",
    desc: "The home health aide assigned to us is professional, punctual, and exceptionally compassionate with daily living activities[cite: 1].",
  },
  {
    id: 4,
    page: "home_1",
    img: testiThumb_2,
    name: "Therapy Patient Family",
    designation: "Client, Bronx",
    desc: "From physical therapy to nursing services, the entire licensed staff has shown true excellence and dedication[cite: 1].",
  },

  // home_2

  {
    id: 1,
    page: "home_2",
    img: testiThumb_3,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "home_2",
    img: testiThumb_4,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },
  {
    id: 3,
    page: "home_2",
    img: testiThumb_5,
    name: "HHA Care Recipient",
    designation: "Client, Queens",
    desc: "The home health aide assigned to us is professional, punctual, and exceptionally compassionate with daily living activities[cite: 1].",
  },
  {
    id: 4,
    page: "home_2",
    img: testiThumb_6,
    name: "Therapy Patient Family",
    designation: "Client, Bronx",
    desc: "From physical therapy to nursing services, the entire licensed staff has shown true excellence and dedication[cite: 1].",
  },
  {
    id: 5,
    page: "home_2",
    img: testiThumb_4,
    name: "Nassau Resident",
    designation: "Client, Nassau",
    desc: "Reliable home care coverage that extends seamlessly across our county with wonderful administrative communication[cite: 1].",
  },
  {
    id: 6,
    page: "home_2",
    img: testiThumb_5,
    name: "Richmond Family",
    designation: "Client, Richmond",
    desc: "We couldn't ask for a better LHCSA agency to handle our household support and personal care requirements[cite: 1].",
  },

  // home_3

  {
    id: 1,
    page: "home_3",
    img: testiThumb_1,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "home_3",
    img: testiThumb_2,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },
  {
    id: 3,
    page: "home_3",
    img: testiThumb_1,
    name: "HHA Care Recipient",
    designation: "Client, Queens",
    desc: "The home health aide assigned to us is professional, punctual, and exceptionally compassionate with daily living activities[cite: 1].",
  },
  {
    id: 4,
    page: "home_3",
    img: testiThumb_2,
    name: "Therapy Patient Family",
    designation: "Client, Bronx",
    desc: "From physical therapy to nursing services, the entire licensed staff has shown true excellence and dedication[cite: 1].",
  },

  // home_4

  {
    id: 1,
    page: "home_4",
    img: testimonialIcon_1,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "home_4",
    img: testimonialIcon_1,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },

  // home_5

  {
    id: 1,
    page: "home_5",
    img: testimonialIcon_2,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "home_5",
    img: testimonialIcon_2,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },

  // inner_page

  {
    id: 1,
    page: "inner_page",
    img: testimonialIcon_3,
    name: "Private-Pay Client",
    designation: "Client, New York",
    desc: "Hope & Cherish Home Care provided exceptional professional care, making sure all our private-pay service needs were fully met with utmost dignity and warmth[cite: 1].",
  },
  {
    id: 2,
    page: "inner_page",
    img: testimonialIcon_3,
    name: "Insurance Family Member",
    designation: "Client, Brooklyn",
    desc: "Their private insurance coordination and skilled nursing support have been an absolute blessing for our family in Kings County[cite: 1].",
  },
  {
    id: 3,
    page: "inner_page",
    img: testimonialIcon_3,
    name: "HHA Care Recipient",
    designation: "Client, Queens",
    desc: "The home health aide assigned to us is professional, punctual, and exceptionally compassionate with daily living activities[cite: 1].",
  },
  {
    id: 4,
    page: "inner_page",
    img: testimonialIcon_3,
    name: "Therapy Patient Family",
    designation: "Client, Bronx",
    desc: "From physical therapy to nursing services, the entire licensed staff has shown true excellence and dedication[cite: 1].",
  },
];

export default testimonial_data;
