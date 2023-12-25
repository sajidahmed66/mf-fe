import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

// NOTE this is only trainee/user payment module only i have not yet found any code for emplyment payment system

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // genaral payment
    getPayments: builder.query<any, void>({
      query: () => ({
        url: apiRoutes.payments,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    getPaymentById: builder.query<any, string>({
      query: (id) => ({
        url: apiRoutes.paymentById(id),
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    createPayment: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.payments,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Payment", "Payment-Trainee"],
    }),
    //
    getTraineePayments: builder.query<any, string>({
      query: (traineeId) => ({
        url: apiRoutes.paymentTraineeById(traineeId),
        method: "GET",
      }),
      providesTags: ["Payment-Trainee"],
    }),
    getTraineeLastPayment: builder.query<any, string>({
      query: (traineeId) => ({
        url: apiRoutes.getLastTraineePayment(traineeId),
        method: "GET",
      }),
      providesTags: ["Payment-Trainee"],
    }),
  }),
});

export const { useGetPaymentsQuery, useCreatePaymentMutation } = paymentApi;
