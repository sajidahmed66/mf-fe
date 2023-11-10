import apiSlice from "@/features/api/apiSlice";
import { ITraineeData } from "@/libs/types";

const traineeAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTraineeList: builder.query({
      query: () => ({
        url: "/admin/trainees",
        method: "GET",
      }),
      //   onQueryStarted,
    }),
    createTrainee: builder.mutation({
      query: (data: ITraineeData) => ({
        url: "/admin/trainees",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetTraineeListQuery, useCreateTraineeMutation } = traineeAPI;
