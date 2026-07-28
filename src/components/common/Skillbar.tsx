import Progress from "@/components/common/Progress";

interface DataType {
   title: string;
   percentage: number;
}[];

const skill_data: DataType[] = [
   {
      title: "Skilled Nursing Care",
      percentage: 95,
   },
   {
      title: "Personal Care & HHA",
      percentage: 90,
   },
   {
      title: "Therapy Services",
      percentage: 85,
   },
   {
      title: "Private-Pay & Insurance Support",
      percentage: 100,
   },
]

const Skillbar = () => {
   return (
      <>
         {skill_data.map((item, i) => (
            <div key={i} className="single-progressbar">
               <h6>{item.title}</h6>
               <div className="progress-item" id="progress-running">
                  <Progress finish={item.percentage} />
               </div>
            </div>
         ))}
      </>
   )
}

export default Skillbar;