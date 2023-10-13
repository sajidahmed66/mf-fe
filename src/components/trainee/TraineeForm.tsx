import React from "react";
import { useForm } from "@mantine/form";

interface ICreateTraineeForm {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  registrationFee: number;
  subscriptionType: string;
  monthlyFee: number;
  totalAmount: number;
  paidAmount: number;
}

const TraineeForm: React.FC = () => {
  const createTraineeForm = useForm({
    initialValues: {},
  });
  return <div>TraineeForm</div>;
};

export default TraineeForm;
