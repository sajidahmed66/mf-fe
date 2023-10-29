import apiSlice from "@/features/api/apiSlice";

const traineeAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTraineeList: builder.query({
      query: () => ({
        url: "/admin/trainees",
        method: "GET",
      }),
      //   onQueryStarted,
    }),
  }),
});

export const { useGetTraineeListQuery } = traineeAPI;
