import { StaticImageData } from "next/image";

import projectThumb_1 from "@/assets/img/project/Bronx-County.jpg";
import projectThumb_2 from "@/assets/img/project/Kings-County.jpg";
import projectThumb_3 from "@/assets/img/project/Nassau-County.jpg";
import project2Thumb_4 from "@/assets/img/project/new-york.webp";
import project2Thumb_5 from "@/assets/img/project/Queens-County.jpg";
import project2Thumb_6 from "@/assets/img/project/Richmond-County.jpg";

interface DataType {
  id: number;
  page: string;
  img: StaticImageData;
  title: string;
  desc?: string;
}
[];

const project_data: DataType[] = [
  
  {
    id: 1,
    page: "home_2",
    img: projectThumb_1,
    title: "Bronx County",
    desc: "Providing professional home care services across the Bronx region.",
  },
  {
    id: 2,
    page: "home_2",
    img: projectThumb_2,
    title: "Kings County",
    desc: "Serving private-pay and private insurance clients throughout Kings County.",
  },
  {
    id: 3,
    page: "home_2",
    img: projectThumb_3,
    title: "Nassau County",
    desc: "Reliable licensed home care coverage extending across Nassau County.",
  },
  {
    id: 4,
    page: "home_2",
    img: project2Thumb_4,
    title: "New York County",
    desc: "Comprehensive clinical and support services delivered in New York County.",
  },
  {
    id: 5,
    page: "home_2",
    img: project2Thumb_5,
    title: "Queens County",
    desc: "Dedicated home health aides and care options available in Queens County.",
  },
  {
    id: 6,
    page: "home_2",
    img: project2Thumb_6,
    title: "Richmond County",
    desc: "Trusted home care support serving communities across Richmond County.",
  },
];

export default project_data;
