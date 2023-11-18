import apiSlice from "@/features/api/apiSlice";

const expenseAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => ({
        url: "/expenses",
      }),
    }),
  }),
});
