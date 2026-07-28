import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/main/news-1.jpg";
import blogThumb_2 from "@/assets/img/main/news-2.jpg";
import blogThumb_3 from "@/assets/img/main/news-3.jpg";
import blogThumb_4 from "@/assets/img/blog/10.webp";
import blogThumb_5 from "@/assets/img/blog/11.webp";
import blogThumb_6 from "@/assets/img/blog/12.webp";
import blogThumb_7 from "@/assets/img/blog/8.webp";
import blogThumb_8 from "@/assets/img/blog/9.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   date: string;
   comment?: number;
   title: string;
   desc?: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: blogThumb_1,
      date: "15 June 2026",
      title: "Understanding Private-Pay vs. Private Insurance Home Care",
      desc: "Learn how LHCSA private coverage works and what options are available.",
   },
   {
      id: 2,
      page: "home_1",
      img: blogThumb_2,
      date: "18 June 2026",
      title: "The Benefits of Home Health Aides for Daily Support",
      desc: "Discover how professional home health aides enhance comfort, safety.",
   },
   {
      id: 3,
      page: "home_1",
      img: blogThumb_3,
      date: "22 June 2026",
      title: "Navigating Home Care Services Across New York Counties",
      desc: "An overview of our licensed coverage extending through the Bronx.",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: blogThumb_7,
      date: "25",
      comment: 55,
      title: "Understanding Private-Pay vs. Private Insurance Home Care",
      desc: "Learn how LHCSA private coverage works and what options are available.",
   },
   {
      id: 2,
      page: "home_3",
      img: blogThumb_8,
      date: "25",
      comment: 55,
      title: "The Benefits of Home Health Aides for Daily Support",
      desc: "Discover how professional home health aides enhance comfort, safety.",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: blogThumb_1,
      date: "02 January",
      title: "Understanding Private-Pay vs. Private Insurance Home Care",
   },
   {
      id: 2,
      page: "home_4",
      img: blogThumb_2,
      date: "02 January",
      title: "The Benefits of Home Health Aides for Daily Support",
   },
   {
      id: 3,
      page: "home_4",
      img: blogThumb_3,
      date: "02 January",
      title: "Navigating Home Care Services Across New York Counties",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: blogThumb_4,
      date: "25 May 2026",
      title: "Understanding Private-Pay vs. Private Insurance Home Care",
      desc: "Learn how LHCSA private coverage works and what options are available for families seeking personalized care[cite: 1].",
   },
   {
      id: 2,
      page: "home_5",
      img: blogThumb_5,
      date: "25 May 2026",
      title: "The Benefits of Home Health Aides for Daily Support",
      desc: "Discover how professional home health aides enhance comfort, safety, and independence for seniors at home[cite: 1].",
   },
   {
      id: 3,
      page: "home_5",
      img: blogThumb_6,
      date: "25 May 2026",
      title: "Navigating Home Care Services Across New York Counties",
      desc: "An overview of our licensed coverage extending through the Bronx, Kings, Nassau, New York, Queens, and Richmond[cite: 1].",
   },
]

export default blog_data;