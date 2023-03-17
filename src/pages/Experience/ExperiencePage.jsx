import "./ExperiencePage.styles.css";
import Experience from "./Experience/Experience";
import Separator from "../../components/Separator/Separator";

export default function ExperiencePage() {
  const workHistoryData = [
    {
      id: 1,
      role: "Temporary COVID-19 Tester & IT Support",
      company: "Xpress Covid Testing",
      startDate: "Oct 2022",
      endDate: "Dec 2022",
      location: "5444 South Kostner Ave Chicago, IL 60632",
      tasks: [
        "Advocated CDC COVID-19 isolation and precaution guidelines.",
        "Handled patient registration; this includes acknowledging and following HIPAA standards, as well as verifying/inputing medical insurance information.",
        "Administered both PCR and antigen tests.",
        "Exercised IT skills to fix hardware/software related problems.",
        "Provided feedback to address bugs and improvements to the software.",
      ],
    },
    {
      id: 2,
      role: "Seasonal Sales Associate",
      company: "The North Face",
      startDate: "Dec 2019",
      endDate: "Mar 2020",
      location: "875 N Michigan Ave Chicago, IL 60632",
      tasks: [
        "Exceeded established sales goals.",
        "Offered each customer top-notch, personal service and polite support to boost sales and customer satisfaction.",
        "Used consultative sales approach to understand customer needs and recommend relevant offerings.",
        "Answered questions about store policies and concerns to support positive customer experiences.",
        " Delivered high level of assistance by locating products and checking store system for merchandise at other sites.",
      ],
    },
    {
      id: 3,
      role: "Grocery & Produce Clerk",
      company: "Mariano's",
      startDate: "Jun 2017",
      endDate: "Nov 2019",
      location: "40 S Halsted Chicago, IL 60661",
      tasks: [
        "Stocked fruits and vegetables and removed old or poor quality products.",
        "Cleaned shelves and restocked merchandise when product was running low.",
        "Received and unloaded new items upon delivery and checked products for damage and order accuracy.",
        "Maintained safe, neat and clean working environment at all times.",
        "Stayed current on available products, store promotions and customer service policies to better assist with any need.",
        "Used pallet jacks and hand trucks to move merchandise to sales floor for stocking.",
        "Presented, rotated and date-checked products to maintain company freshness standards.",
      ],
    },
  ];

  return (
    <section>
      {workHistoryData.map((job) => {
        return (
          <>
            <Experience key={job.id} job={job} />
            {job.id !== 3 ? <Separator /> : null}
          </>
        );
      })}
    </section>
  );
}
