import { Button, Table } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface EditDeleteBtnGrpProps {
  routepathFn: (id: string) => string;
  handleDelete: (id: string) => void;
  id: string;
}
const EditDeleteBtnGrp: FC<EditDeleteBtnGrpProps> = ({ handleDelete, id, routepathFn }) => {
  const navigate = useNavigate();
  return (
    <Table.Td>
      <Button.Group>
        <Button variant="default" onClick={() => navigate(routepathFn(id))}>
          <IconEdit size={18} />
        </Button>
        <Button
          variant="default"
          bg={"red"}
          onClick={() => {
            handleDelete(id);
          }}
        >
          <IconTrash size={18} />
        </Button>
      </Button.Group>
    </Table.Td>
  );
};

export default EditDeleteBtnGrp;
