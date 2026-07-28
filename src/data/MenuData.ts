interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
   },
   {
      id: 2,
      has_dropdown: false,
      title: "About Us",
      link: "/about",
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Services",
      link: "#",
      sub_menus: [
         { link: "/services", title: "All Services" },
         { link: "/services/audiology", title: "Audiology" },
         { link: "/services/home-health-aide", title: "Home Health Aide" },
         { link: "/services/homemaker", title: "Homemaker" },
         { link: "/services/housekeeper", title: "Housekeeper" },
         { link: "/services/medical-social-services", title: "Medical Social Services" },
         { link: "/services/nursing", title: "Nursing" },
         { link: "/services/nutritional", title: "Nutritional" },
         { link: "/services/personal-care", title: "Personal Care" },
         { link: "/services/occupational-therapy", title: "Therapy - Occupational" },
         { link: "/services/physical-therapy", title: "Therapy - Physical" },
         { link: "/services/respiratory-therapy", title: "Therapy - Respiratory" },
         { link: "/services/speech-language-pathology", title: "Therapy - Speech Language Pathology" },
      ],
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Service Areas",
      link: "/service-areas",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
];
export default menu_data;