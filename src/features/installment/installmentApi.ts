import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

const installmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getInstallment: builder.query({
    //   query: () => ({
    //     url: apiRoutes.installments,
    //     method: "GET",
    //   }),
    //   providesTags: ["Installment"],
    // }),
    createInstallment: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.installments,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Installment"],
    }),
  }),
});

export const { useCreateInstallmentMutation } = installmentApi;
