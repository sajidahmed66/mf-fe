import apiSlice from "@/features/api/apiSlice";
import { ITrainerData } from "@/libs/types";

const trainerAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrainerList: builder.query<ITrainerData[], void>({
      query: () => ({
        url: "admin/trainers",
        method: "GET",
      }),
    }),
    getTrainerById: builder.query<ITrainerData, string>({
      query: (id) => ({
        url: `/admin/trainers${id}`,
        method: "GET",
      }),
    }),
    createTrainer: builder.mutation({
      query: (data) => ({
        url: `admin/trainers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Trainers"],
    }),
  }),
});

export const { useCreateTrainerMutation, useGetTrainerByIdQuery, useGetTrainerListQuery } = trainerAPI;
