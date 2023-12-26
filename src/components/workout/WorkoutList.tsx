import { IWorkoutData } from "@/libs/types";

import { Table } from "@mantine/core";
import { FC } from "react";
import { convertedDate } from "@/libs/utils/date";

import routepaths from "@/libs/routepaths";
import EditDeleteBtnGrp from "@/components/common/buttons/table-action-btn-grp/EditDeleteBtnGrp";

interface IWorkoutListProps {
  data: IWorkoutData[];
  deleteWorkout: (id: string) => void;
}

const WorkoutList: FC<IWorkoutListProps> = ({ data, deleteWorkout }) => {
  const handleDeleteWorkout = (id: string) => {
    deleteWorkout(id);
  };
  const rows = data.map((p) => (
    <Table.Tr key={p._id}>
      <Table.Td>{p.name}</Table.Td>
      <Table.Td>{p.description}</Table.Td>
      <Table.Td>{convertedDate(p.date)}</Table.Td>
      <Table.Td>{p.entryBy.firstname + " " + p.entryBy.lastname}</Table.Td>
      <EditDeleteBtnGrp handleDelete={handleDeleteWorkout} id={p._id} routepathFn={routepaths.edit_workout} />
    </Table.Tr>
  ));

  return (
    <div>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
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

export default WorkoutList;
