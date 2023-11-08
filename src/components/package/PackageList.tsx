import { IPackageData } from "@/libs/types";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Button, Table } from "@mantine/core";
import { FC } from "react";
import { convertedDate } from "@/libs/utils/date";
import { useNavigate } from "react-router-dom";
import routepaths from "@/libs/routepaths";

interface IPackageListProps {
  data: IPackageData[];
  deletePackage: (id: string) => void;
}

const PackageList: FC<IPackageListProps> = ({ data, deletePackage }) => {
  const navigate = useNavigate();

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

      <Table.Td>
        <Button.Group>
          <Button variant="default" onClick={() => navigate(routepaths.edit_package(p._id))}>
            <IconEdit size={18} />
          </Button>
          <Button
            variant="default"
            bg={"red"}
            onClick={() => {
              handleDeletePackage(p._id);
            }}
          >
            <IconTrash size={18} />
          </Button>
        </Button.Group>
      </Table.Td>
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
