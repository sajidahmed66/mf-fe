import { FC } from "react";
import { Table } from "@mantine/core";
import { ITrainerData } from "@/libs/types";

interface ITrainerListProps {
  data: ITrainerData[];
}

const TrainerListData: FC<ITrainerListProps> = ({ data }) => {
  const rows = data.map((dt) => (
    <Table.Tr key={dt.firstname}>
      <Table.Td>{dt.firstname}</Table.Td>
      <Table.Td>{dt.lastname}</Table.Td>
      <Table.Td>{dt.phone}</Table.Td>
      <Table.Td>{dt.entryDate.toString()}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="overflow-x-scroll">
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

export default TrainerListData;
