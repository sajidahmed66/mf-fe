import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";
import { ITrainerData } from "@/libs/types";

const trainerAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrainerList: builder.query<ITrainerData[], void>({
      query: () => ({
        url: apiRoutes.trainers,
        method: "GET",
      }),
      providesTags: ["Trainers"],
    }),
    getTrainerById: builder.query<ITrainerData, string>({
      query: (id: string) => ({
        url: apiRoutes.trainersById(id),
        method: "GET",
      }),
      providesTags: ["Trainers"],
    }),
    createTrainer: builder.mutation({
      query: (data) => ({
        url: apiRoutes.trainers,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Trainers"],
    }),
  }),
});

export const { useCreateTrainerMutation, useGetTrainerByIdQuery, useGetTrainerListQuery } = trainerAPI;
