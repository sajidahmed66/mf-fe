import { Table } from "@mantine/core";
import { ITraineeData } from "@/libs/types";
import { FC } from "react";

interface ITraineeListDataProps {
  trainees: ITraineeData[];
}

const TraineeListData: FC<ITraineeListDataProps> = ({ trainees }) => {
  const rows = trainees.map((dt) => (
    <Table.Tr key={dt.firstname}>
      <Table.Td>{dt.firstname}</Table.Td>
      <Table.Td>{dt.lastname}</Table.Td>
      <Table.Td>{dt.phone}</Table.Td>
      <Table.Td>{dt.entryDate.toString()}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Phone Number</Table.Th>
            <Table.Th>Member Since</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default TraineeListData;
