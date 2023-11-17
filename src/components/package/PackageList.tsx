import { IPackageData } from "@/libs/types";

import { Table } from "@mantine/core";
import { FC } from "react";
import { convertedDate } from "@/libs/utils/date";

import routepaths from "@/libs/routepaths";
import EditDeleteBtnGrp from "@/components/common/buttons/table-action-btn-grp/EditDeleteBtnGrp";

interface IPackageListProps {
  data: IPackageData[];
  deletePackage: (id: string) => void;
}

const PackageList: FC<IPackageListProps> = ({ data, deletePackage }) => {
  const handleDeletePackage = (id: string) => {
    deletePackage(id);
  };
  const rows = data.map((p) => (
    <Table.Tr key={p._id}>
      <Table.Td>{p.name}</Table.Td>
      <Table.Td>{p.amount}</Table.Td>
      <Table.Td>{p.time_duration}</Table.Td>
      <Table.Td>{convertedDate(p.date)}</Table.Td>
      <Table.Td>{p.entryBy.firstname + " " + p.entryBy.lastname}</Table.Td>
      <EditDeleteBtnGrp handleDelete={handleDeletePackage} id={p._id} routepathFn={routepaths.edit_package} />
    </Table.Tr>
  ));

  return (
    <div>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Duration</Table.Th>
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

export default PackageList;
