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
