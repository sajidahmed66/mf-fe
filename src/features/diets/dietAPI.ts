import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";
import { IDietData } from "@/libs/types";

const dietAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDietList: builder.query<IDietData[], void>({
      query: () => ({
        url: apiRoutes.diets,
        method: "GET",
      }),
      providesTags: ["Diet"],
    }),
    getDietByid: builder.query({
      query: (id: string) => ({
        url: apiRoutes.dietByID(id),
        method: "GET",
      }),
      providesTags: ["Diet"],
    }),
    createDiet: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (data: any) => ({
        url: apiRoutes.diets,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Diet"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateDiet: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.dietByID(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Diet"],
    }),
    deleteDiet: builder.mutation({
      query: (id: string) => ({
        url: apiRoutes.dietByID(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Diet"],
    }),

    // diet request limit end points
    getDietRequestLimit: builder.query({
      query: () => ({
        url: apiRoutes.dietReqLimits,
        method: "GET",
      }),
      providesTags: ["DietReqLimit"],
    }),
    getDietReqByID: builder.query({
      query: (id: string) => ({
        url: apiRoutes.dietReqLimitsByID(id),
        method: "GET",
      }),
      providesTags: ["DietReqLimit"],
    }),
    createDietRequestLimit: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (data: any) => ({
        url: apiRoutes.dietReqLimits,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["DietReqLimit"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateDietRequestLimit: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.dietReqLimitsByID(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["DietReqLimit"],
    }),
  }),
});

export const {
  // diet
  useGetDietListQuery,
  useGetDietByidQuery,
  useCreateDietMutation,
  useDeleteDietMutation,
  useUpdateDietMutation,
  // diet request limit
  useGetDietRequestLimitQuery,
  useGetDietReqByIDQuery,
  useCreateDietRequestLimitMutation,
} = dietAPI;
