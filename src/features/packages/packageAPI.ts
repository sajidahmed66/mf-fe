import apiSlice from "@/features/api/apiSlice";
import { ICreatePackageRequestData, IPackageData, IUpdatePackageRequestData } from "@/libs/types";

const packageAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query<IPackageData[], void>({
      query: () => ({ url: "admin/packages", method: "GET" }),
    }),
    getPackageById: builder.query<IPackageData, string>({
      query: (id) => ({ url: `admin/packages/${id}` }),
    }),
    createPackages: builder.mutation<IPackageData, ICreatePackageRequestData>({
      query: (data) => ({ url: "admin/packages", method: "POST", body: data }),
    }),
    updatePackage: builder.mutation<IPackageData, IUpdatePackageRequestData>({
      query: ({ data, id }) => ({
        url: `admin/packages/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePackage: builder.mutation<void, string>({
      query: (id) => ({
        url: "",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useCreatePackagesMutation,
  useGetPackageByIdQuery,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packageAPI;
