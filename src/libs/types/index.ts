interface UserObj {
  _id?: string;
  firstname: string;
  lastname: string;
}
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
export interface IPackageFormProps {
  initialvalues?: Pick<IPackageData, "name" | "amount" | "time_duration">;
  edit: boolean;
  id?: string;
}

// Package Api Data transfer object model //
export interface ICreatePackageRequestData {
  data: Omit<IPackageData, "_id" | "date" | "entryBy">;
}
export interface IUpdatePackageRequestData extends ICreatePackageRequestData {
  id: string;
}
// trainee or member types //
export interface ITraineeData {
  _id: string;
  firstname: string;
  lastname: string;
  phone: number;
  subscriptionType: number;
  userRole: number;
  entryDate: Date;
  currentPaymentDate: Date;
  // packageType: string;
  // totalAmount: number;
  // registrationAmount: number;
  // subscriptionAmount: number;
  // paidAmount: number;
}
// export interface ITraineeRes

//  TRAINER //
export interface ITrianerData {
  firstname: string;
  lastname: string;
  phone: number;
}
export interface ICreateTrainerRequestData extends ITrianerData {}

export interface ITrainerResponsetData extends ITrianerData {
  _id: string;
}

/// WORKOUTS
export interface IWorkoutData extends IWorkoutReqData {
  _id: string;
  date: Date;
  entryBy: UserObj;
}
export interface IWorkoutReqData {
  name: string;
  description: string;
}
export interface IWorkoutFormProps {
  initialvalues?: Pick<IWorkoutData, "name" | "description">;
  edit: boolean;
  id?: string;
}

///DIET
export interface IDietData {
  _id: string;
  name: string;
  quantity: number;
  unit: string;
  calorie: number;
}
