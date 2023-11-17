import { Table } from "@mantine/core";
import { ITraineeData } from "@/libs/types";
import { FC } from "react";
// import EditDeleteBtnGrp from "@/components/common/buttons/table-action-btn-grp/EditDeleteBtnGrp";
// import routepaths from "@/libs/routepaths";
import { convertedDate } from "@/libs/utils/date";

interface ITraineeListDataProps {
  trainees: ITraineeData[];
}

const TraineeListData: FC<ITraineeListDataProps> = ({ trainees }) => {
  const rows = trainees.map((dt) => (
    <Table.Tr key={dt._id}>
      <Table.Td>{dt.firstname}</Table.Td>
      <Table.Td>{dt.lastname}</Table.Td>
      <Table.Td>{dt.phone}</Table.Td>
      <Table.Td>{convertedDate(dt.entryDate)}</Table.Td>
      {/* <EditDeleteBtnGrp handleDelete={() => {}} routepathFn={routepaths.edit_trainee} id={dt._id} /> */}
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
