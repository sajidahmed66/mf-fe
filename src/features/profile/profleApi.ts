import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<any, void>({
      query: () => ({
        url: apiRoutes.profiledetails,
        method: "GET",
      }),

      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.updateProfile,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
