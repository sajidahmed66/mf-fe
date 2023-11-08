import apiSlice from "@/features/api/apiSlice";
import { IPackageData } from "@/libs/types";

const packageAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query<IPackageData[], void>({
      query: () => ({
        url: "admin/packages",
        method: "GET",
      }),
    }),
    getPackageById: builder.query<IPackageData, string>({
      query: (id) => ({
        url: `admin/packages/${id}`,
        method: "GET",
      }),
    }),
    createPackages: builder.mutation({
      query: (data) => ({
        url: "admin/packages",
        method: "POST",
        body: data,
      }),
    }),
    updatePackage: builder.mutation<
      IPackageData,
      { id: string; data: Pick<IPackageData, "name" | "amount" | "time_duration"> }
    >({
      query: ({ id, data }) => ({
        url: `admin/packages/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePackage: builder.mutation<void, string>({
      query: (id) => ({
        url: `admin/package/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetPackageByIdQuery,
  useCreatePackagesMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packageAPI;
