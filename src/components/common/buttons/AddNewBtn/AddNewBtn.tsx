import { Button } from "@mantine/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IAddNewBtnProps {
  routepath: string;
}

const AddNewBtn: FC<IAddNewBtnProps> = ({ routepath }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-end w-full h-22">
      <Button variant="filled" onClick={() => navigate(routepath)}>
        Add New
      </Button>
    </div>
  );
};

export default AddNewBtn;
