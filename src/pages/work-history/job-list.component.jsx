import Job from "./job/job.component";
import SeparatorComponent from "../../components/ui/separator.component";

export default function JobListComponent() {
  const data = [
    {
      id: 1,
      role: "Temporary COVID-19 Tester & IT Support",
      company: "Xpress Covid Testing",
      startDate: "Oct 2022",
      endDate: "Dec 2022",
      location: "5444 South Kostner Ave Chicago, IL 60632",
      tasks: [
        {
          id: 1,
          task: "Advocated CDC COVID-19 isolation and precaution guidelines.",
        },
        {
          id: 2,
          task: "Handled patient registration; this includes acknowledging and following HIPAA standards, as well as verifying/inputing medical insurance information.",
        },
        {
          id: 3,
          task: "Administered both PCR and antigen tests.",
        },
        {
          id: 4,
          task: "Exercised IT skills to fix hardware/software related problems.",
        },
        {
          id: 5,
          task: "Provided feedback to address bugs and improvements to the software.",
        },
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
        {
          id: 1,
          task: "Exceeded established sales goals.",
        },
        {
          id: 2,
          task: "Offered each customer top-notch, personal service and polite support to boost sales and customer satisfaction.",
        },
        {
          id: 3,
          task: "Used consultative sales approach to understand customer needs and recommend relevant offerings.",
        },
        {
          id: 4,
          task: "Answered questions about store policies and concerns to support positive customer experiences.",
        },
        {
          id: 5,
          task: " Delivered high level of assistance by locating products and checking store system for merchandise at other sites.",
        },
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
        {
          id: 1,
          task: "Stocked fruits and vegetables and removed old or poor quality products.",
        },
        {
          id: 2,
          task: "Cleaned shelves and restocked merchandise when product was running low.",
        },
        {
          id: 3,
          task: "Received and unloaded new items upon delivery and checked products for damage and order accuracy.",
        },
        {
          id: 4,
          task: "Maintained safe, neat and clean working environment at all times.",
        },
        {
          id: 5,
          task: "Stayed current on available products, store promotions and customer service policies to better assist with any need.",
        },
        {
          id: 6,
          task: "Used pallet jacks and hand trucks to move merchandise to sales floor for stocking.",
        },
        {
          id: 7,
          task: "Presented, rotated and date-checked products to maintain company freshness standards.",
        },
      ],
    },
  ];

  return (
    <section>
      {data.map((job) => {
        return (
          <>
            <Job key={job.id} job={job} />
            {job.id !== 3 ? <SeparatorComponent /> : null}
          </>
        );
      })}
    </section>
  );
}
