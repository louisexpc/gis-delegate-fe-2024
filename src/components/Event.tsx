import { Accordion, Table } from "react-bootstrap";
interface IEvent {
  time: string;
  name: string;
  location: string;
  content?: object;
}

interface EventProps {
  event: IEvent;
}

const Event = ({ event }: EventProps) => {
  return (
    <>
      <Accordion flush className="tw-py-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {event.time} {event.name}
          </Accordion.Header>
          <Accordion.Body className="tw-text-white tw-bg-gis-blue">
            <p className="last:tw-mb-0">{event.location}</p>
            {event.content ? (
              <Table striped className="table tw-bg-[#e7f1ff]">
                <tbody>
                  {Object.entries(event.content).map(([key, value], index) => {
                    return (
                      <tr key={index}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <></>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Event;
export { type IEvent };
