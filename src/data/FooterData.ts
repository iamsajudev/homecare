interface DataType {
  id: number;
  title: string;
  nav_links: {
    link: string;
    title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 1,
    title: "Services",
    nav_links: [
      { link: "/service", title: "Nursing Care" },
      { link: "/service", title: "PCA & HHA Care" },
      { link: "/service", title: "OPWDD Services" },
      { link: "/service", title: "Pediatric Care" },
    ],
  },
  {
    id: 2,
    title: "Useful Links",
    nav_links: [
      { link: "/about", title: "About Us" },
      { link: "/service", title: "Our Services" },
      { link: "/contact", title: "Contact Us" },
    ],
  },
];

export default footer_data;