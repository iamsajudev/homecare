import { StaticImageData } from "next/image";

import counter_bg from "@/assets/img/home-cyber/service/fact-bg.webp";

interface DataType {
   id: number;
   page: string;
   title: string;
   count: number;
   counter_text: string;
   count_bg?: StaticImageData;
   desc?: string;
}[];

const counter_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      title: "Counties Served",
      count: 6,
      counter_text: "",
   },
   {
      id: 2,
      page: "home_2",
      title: "DOH License",
      count: 2681,
      counter_text: "L001",
   },
   {
      id: 3,
      page: "home_2",
      title: "Care Services",
      count: 12,
      counter_text: "+",
   },
   {
      id: 4,
      page: "home_2",
      title: "Client Support",
      count: 24,
      counter_text: "/7",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      title: "Counties Served",
      desc: "Bronx, Kings, Nassau, New York, Queens, Richmond[cite: 1]",
      count: 6,
      counter_text: "",
      count_bg: counter_bg,
   },
   {
      id: 2,
      page: "home_5",
      title: "Licensed Services",
      desc: "Comprehensive clinical and personal care options[cite: 1]",
      count: 12,
      counter_text: "+",
      count_bg: counter_bg,
   },
   {
      id: 3,
      page: "home_5",
      title: "Operating Certificate",
      desc: "DOH license for facility management[cite: 1]",
      count: 2681,
      counter_text: "L001",
      count_bg: counter_bg,
   },
]

export default counter_data;