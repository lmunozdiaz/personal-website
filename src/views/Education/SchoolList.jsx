import School from "./School/School";

export default function SchoolList() {
  const data = [
    {
      id: 1,
      degree: "B.S. Computer Science",
      school: "Roosevelt University",
      startDate: "Aug 2017",
      endDate: "May 2021",
      location: "430 S Michigan Ave Chicago, IL 60605",
      coursework: [],
    },
    {
      id: 2,
      degree: "No Degree",
      school: "DePaul University",
      startDate: "Jan 2020",
      endDate: "Jun 2020",
      location: "1 E Jackson Blvd Chicago, IL 60604",
      coursework: [],
    },
    {
      id: 3,
      degree: "A.A. Psychology",
      school: "Harold Washington College",
      startDate: "Sep 2015",
      endDate: "May 2017",
      location: "30 E Lake St Chicago, IL 60601",
      coursework: [],
    },
  ];

  return (
    <section>
      {data.map((data) => {
        return (
          <>
            <School educationData={data} />
            {data.id !== 3 ? <br></br> : null}
          </>
        );
      })}
    </section>
  );
}
