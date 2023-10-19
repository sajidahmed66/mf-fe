import apiSlice from "@/features/api/apiSlice";

const traineeAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTraineeList: builder.query({
      query: (arg) => ({
        url: "/admin/trainees",
        method: "GET",
      }),
      //   onQueryStarted,
    }),
  }),
});
