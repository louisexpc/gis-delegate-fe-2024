import { Accordion, Table ,Image} from "react-bootstrap";
interface IEvent {
  time: string;
  name: string;
  location: string;
  content?: object;
  imageUrl?: string;
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
            {event.imageUrl && (
              <div className="tw-mb-4 tw-flex tw-justify-center">
                <img
                  src={event.imageUrl}
                  alt="Event Image"
                  style={{ maxWidth: '100%', maxHeight: '300px', display: 'block', margin: '0 auto' }}
                />
              </div>
            )}
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
