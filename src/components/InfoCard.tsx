import { Card, Table } from "react-bootstrap";

interface InfoCardProps {
  giscode: string;
  full_name: string;
  grouping: string;
  dietary_requirement: string;
}

const InfoCard = ({
  giscode,
  full_name,
  dietary_requirement,
  grouping,
}: InfoCardProps) => {
  return (
    <Card body className="tw-w-full">
      <Table striped bordered hover>
        <thead className="tw-font-bold">
          <tr>
            <td>GIS Code</td>
            <td>{giscode}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{full_name}</td>
          </tr>
          <tr>
            <td>Team</td>
            <td>{grouping}</td>
          </tr>
          <tr>
            <td>Dietary Restrictions</td>
            <td>{dietary_requirement}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default InfoCard;
