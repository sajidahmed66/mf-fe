import apiSlice from "@/features/api/apiSlice";
import { IPackageData } from "@/libs/types";

const packageAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query<IPackageData[], void>({
      query: () => ({ url: "admin/packages", method: "GET" }),
    }),

    createPackages: builder.mutation({
      query: (data) => ({ url: "admin/packages", method: "POST", body: data }),
    }),
  }),
});

export const { useGetPackagesQuery, useCreatePackagesMutation } = packageAPI;
