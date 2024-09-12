import { IDietData } from "@/libs/types";

import { Table } from "@mantine/core";
import { FC } from "react";
import { convertedDate } from "@/libs/utils/date";

import routepaths from "@/libs/routepaths";
import EditDeleteBtnGrp from "@/components/common/buttons/table-action-btn-grp/EditDeleteBtnGrp";

interface IDietListProps {
  data: IDietData[];
  deleteDiet: (id: string) => void;
}

const DietListComponent: FC<IDietListProps> = ({ data, deleteDiet }) => {
  const handleDeleteDiet = (id: string) => {
    deleteDiet(id);
  };
  const rows = data.map((p) => (
    <Table.Tr key={p._id}>
      <Table.Td>{p.name}</Table.Td>
      <Table.Td>{p.quantity}</Table.Td>
      <Table.Td>{p.unit}</Table.Td>
      <Table.Td>{p.calorie}</Table.Td>
      <Table.Td>{convertedDate(p.date)}</Table.Td>
      <Table.Td>{p.entryBy.firstname + " " + p.entryBy.lastname}</Table.Td>
      <EditDeleteBtnGrp handleDelete={handleDeleteDiet} id={p._id} routepathFn={routepaths.diet_edit} />
    </Table.Tr>
  ));

  return (
    <div>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Unit</Table.Th>
            <Table.Th>Calorie</Table.Th>
            <Table.Th>Created At</Table.Th>
            <Table.Th>Entry By</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default DietListComponent;
