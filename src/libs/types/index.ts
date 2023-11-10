// package types
export interface IPackageData {
  _id: string;
  name: string;
  amount: number;
  time_duration: number;
  date: Date;
  entryBy: {
    firstname: string;
    lastname: string;
  };
}

// package Form
export interface IPackageForm {
  name: string;
  amount: number;
  time_duration: number;
}
// from component props type
export interface IPackageFromProps {
  initialvalues?: Pick<IPackageData, "name" | "amount" | "time_duration">;
  edit: boolean;
  id?: string;
}

// Package Api Data transfer object model
export interface ICreatePackageRequestData {
  data: Omit<IPackageData, "_id" | "date" | "entryBy">;
}
export interface IUpdatePackageRequestData extends ICreatePackageRequestData {
  id: string;
}
// trainee or member types
export interface ITraineeData {
  firstname: string;
  lastname: string;
  phone: number;
  subscriptionType: number;
  packageType: string;
  totalAmount: number;
  registrationAmount: number;
  subscriptionAmount: number;
  paidAmount: number;
}

export interface ITrainerData {}

export interface IWorkoutData {}

export interface IDietData {}
