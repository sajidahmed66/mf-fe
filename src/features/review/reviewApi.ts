import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrainerReviews: builder.query<any, void>({
      query: () => ({
        url: apiRoutes.review,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
  }),
});

export const { useGetTrainerReviewsQuery } = reviewApi;
