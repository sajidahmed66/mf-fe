import apiSlice from "@/features/api/apiSlice";

const dietAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDietList: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDietListQuery } = dietAPI;
