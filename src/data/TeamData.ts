import { StaticImageData } from "next/image";

import teamThumb_1 from "@/assets/img/team/1.webp";
import teamThumb_2 from "@/assets/img/team/2.webp";
import teamThumb_3 from "@/assets/img/team/3.webp";
import teamThumb_4 from "@/assets/img/team/4.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: teamThumb_1,
      title: "Hope & Cherish Team",
      designation: "Licensed Agency Management[cite: 1]",
   },
   {
      id: 2,
      page: "home_1",
      img: teamThumb_2,
      title: "Care Coordination",
      designation: "Private-Pay & Insurance Specialist[cite: 1]",
   },
   {
      id: 3,
      page: "home_1",
      img: teamThumb_3,
      title: "Clinical Nursing Lead",
      designation: "Skilled Nursing & Therapy[cite: 1]",
   },
   {
      id: 4,
      page: "home_1",
      img: teamThumb_4,
      title: "Field Support Supervisor",
      designation: "Home Health Aide Operations[cite: 1]",
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      img: teamThumb_1,
      title: "Hope & Cherish Team",
      designation: "Licensed Agency Management[cite: 1]",
   },
   {
      id: 2,
      page: "inner_page",
      img: teamThumb_2,
      title: "Care Coordination",
      designation: "Private-Pay & Insurance Specialist[cite: 1]",
   },
   {
      id: 3,
      page: "inner_page",
      img: teamThumb_3,
      title: "Clinical Nursing Lead",
      designation: "Skilled Nursing & Therapy[cite: 1]",
   },
   {
      id: 4,
      page: "inner_page",
      img: teamThumb_4,
      title: "Field Support Supervisor",
      designation: "Home Health Aide Operations[cite: 1]",
   },
   {
      id: 5,
      page: "inner_page",
      img: teamThumb_1,
      title: "Compliance Coordinator",
      designation: "DOH Regulations[cite: 1]",
   },
   {
      id: 6,
      page: "inner_page",
      img: teamThumb_2,
      title: "Client Relations",
      designation: "NYC Metro Office[cite: 1]",
   },
   {
      id: 7,
      page: "inner_page",
      img: teamThumb_3,
      title: "Therapy Services Lead",
      designation: "Rehabilitation Support[cite: 1]",
   },
   {
      id: 8,
      page: "inner_page",
      img: teamThumb_4,
      title: "Administrative Staff",
      designation: "Operations Manager[cite: 1]",
   },
]

export default team_data;