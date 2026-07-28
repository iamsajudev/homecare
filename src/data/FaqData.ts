interface DataType {
   id: number;
   page: string;
   question: string;
   answer: string;
   showAnswer: boolean;
}[];

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      question: "Who is Hope & Cherish Home Care L.L.C.?",
      answer: "We are a licensed home care services agency (LHCSA) offering specialized home care services to clients who pay privately or have private insurance coverage[cite: 1].",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_1",
      question: "What services do you provide?",
      answer: "We provide comprehensive care including nursing, home health aides, homemakers, housekeepers, medical social services, nutritional counseling, audiology, personal care, and therapies (occupational, physical, respiratory, and speech-language pathology)[cite: 1].",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_1",
      question: "What counties do you serve?",
      answer: "We serve clients across the Bronx, Kings, Nassau, New York, Queens, and Richmond counties[cite: 1].",
      showAnswer: false,
   },
];

export default faq_data;