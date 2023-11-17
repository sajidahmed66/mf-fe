import apiSlice from "@/features/api/apiSlice";
import { ICreatePackageRequestData, ITrainerResponsetData } from "@/libs/types";

const trainerAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrainerList: builder.query<ITrainerResponsetData[], void>({
      query: () => ({
        url: "/admin/trainers",
        method: "GET",
      }),
    }),
    getTrainerById: builder.query<ITrainerResponsetData, string>({
      query: (id) => ({
        url: `/admin/trainers${id}`,
        method: "GET",
      }),
    }),
    createTrainer: builder.mutation({
      query: (data: ICreatePackageRequestData) => ({
        url: `/admin/trainers`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateTrainerMutation, useGetTrainerByIdQuery, useGetTrainerListQuery } = trainerAPI;
