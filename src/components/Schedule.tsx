import { useEffect, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import { fetchSchedule, IScheduleData } from "../axios";
import InfoCard from "./InfoCard";
import Day from "./Day";
import Loader from "./Loader";
import gala_f from "../images/schedule/gala_first_half.png";
import gala_s from "../images/schedule/gala_second_half.png";

interface ScheduleProps {
  giscode: string;
}

const Schedule = ({ giscode }: ScheduleProps) => {
  const [info, setInfo]: [
    IScheduleData | undefined,
    (info: IScheduleData | undefined) => void
  ] = useState();

  const [error, setError] = useState<boolean>(false);

  const [rand] = useState<number>(Math.floor(Math.random() * 6));

  const [show, setShow] = useState<boolean>(true);

  const fetchInfo = async () => {
    try {
      const data = await fetchSchedule(giscode);
      setInfo(data);
      setError(false);
    } catch (error) {
      if (error instanceof Error) setError(true);
    }
  };

  useEffect(() => {
    fetchInfo();
  });

  return info === undefined ? (
    <Loader error={error} />
  ) : (
    <Container className="tw-font-gis tw-pt-[2%] tw-w-[90%]">
      <Row>
        <h2 className="tw-font-bold tw-px-2 tw-py-2">
          Hello {info.full_name}
        </h2>
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <InfoCard
          giscode={giscode}
          full_name={info.full_name}
          dietary_requirement={info.dietary_requirement}
          grouping={info.grouping}
        />
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <Day
          day={1}
          events={[
            {
              time: "9:00 - 11:00",
              name: "Opening Ceremony",
              location:
                "NTU Shih-Liang Chien Lecture Hall, Multi-Purpose Classroom Building",
            },
            {
              time: "11:20 - 12:10",
              name: "Lunch Break",
              location: info.day1_lunch,
            },
            {
              time: "12:10 - 15:00",
              name: "Keynote Speech & Panel Discussion - Smart City",
              location: "International Conference Hall (R100), The Institute of Applied Mechanics",
            },
            {
              time: "15:00 - 17:15",
              name: "Keynote Speech & Panel Discussion - Sustainable Finance",
              location: "International Conference Hall (R100), The Institute of Applied Mechanics",
            },
            {
              time: "17:40 - 21:00",
              name: "Night Tour - Dadaocheng",
              location: "Main Gate of National Taiwan University",
            },
          ]}
        />
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <Day
          day={2}
          events={[
            {
              time: "9:00 - 11:30",
              name: "Keynote Speech & Panel Discussion - Artificial Intelligence",
              location: "International Conference Hall (R100), The Institute of Applied Mechanics",
            },
            {
              time: "11:45 - 12:40",
              name: "Lunch Break",
              location: info.day2_lunch,
            },
            {
              time: "13:00 - 15:00",
              name: "Mentor Discussion",
              location: info.day2_mentor,
            },
            {
              time: "15:30 - 18:00",
              name: "Cultural Festival",
              location: "National Taiwan University Sports Center 1F",
            },
          ]}
        />
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <Day
          day={3}
          events={[
            {
              time: "9:00 - 11:30",
              name: "Critical Sprout",
              location: info.day3_critical,
            },
            {
              time: "11:45 - 13:00",
              name: "Lunch Break",
              location: info.day3_lunch,
            },
            {
              time: "13:00 - 14:10",
              name: "Group Discussion",
              location: info.day3_lunch,
            },
            {
              time: "14:30 - 18:00",
              name: "Carnival",
              location: "National Taiwan University Sports Center 1F",
            },
          ]}
        />
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <Day
          day={4}
          events={[
            {
              time: "9:00 - 11:30",
              name: "Mentor Discussion",
              location: info.day2_mentor,
            },
            {
              time: "11:30 - 12:30",
              name: "Lunch Break",
              location: info.day4_lunch,
            },
            {
              time: "12:30 - 16:20",
              name: "Leaders Dialogue",
              location: "W Hotel 8F Mega Room",
              content: {
                "Round 1": info.round1,
                "Round 2": info.round2,
                "Round 3": info.round3,
              },
            },
            {
              time: "16:20 - 17:00",
              name: "GALA - First Half",
              location: "W Hotel 8F Mega Room",
              imageUrl: gala_f,
            },
            {
              time: "17:20 - 18:00",
              name: "GALA - Second Half",
              location: "W Hotel 8F Mega Room",
              imageUrl: gala_s,
            },
            {
              time: "18:00 - 21:20",
              name: "Banquet",
              location: `W Hotel 8F Mega Room, Table ${info.banquet}`,
            },
          ]}
        />
      </Row>
      <Row className="tw-px-2 tw-py-2">
        <Day
          day={5}
          events={[
            {
              time: "9:00 - 11:00",
              name: "IP Presentation",
              location: info.day5_presentation,
            },
            {
              time: "11:00 - 12:10",
              name: "IP Exhibition",
              location: info.day5_exhibition,
            },
            {
              time: "12:30 - 13:15",
              name: "Lunch Break",
              location: info.day5_lunch,
            },
            {
              time: "13:30 - 14:30",
              name: "IP Awarding",
              location:
                "NTU Shih-Liang Chien Lecture Hall, Multi-Purpose Classroom Building",
            },
            {
              time: "14:45 - 16:00",
              name: "Closing Ceremony",
              location:
                "NTU Shih-Liang Chien Lecture Hall, Multi-Purpose Classroom Building",
            },
            {
              time: "18:00 - 21:00",
              name: "After Party",
              location: "Babylon Taipei",
            },
          ]}
        />
      </Row>
      
    </Container>
  );
};

export default Schedule;
