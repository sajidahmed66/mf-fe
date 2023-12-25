import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";
// TODO finish expense
const expenseAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => ({
        url: apiRoutes.expenses,
        method: "GET",
      }),
      providesTags: ["Expense"],
    }),
    getExpensesById: builder.query({
      query: (id: string) => ({
        url: apiRoutes.expenseById(id),
        method: "GET",
      }),
      providesTags: ["Expense"],
    }),
    createExpense: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.expenses,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expense"],
    }),
    updateExpense: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.expenseById(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Expense"],
    }),
    deleteExpense: builder.mutation({
      query: (id: string) => ({
        url: apiRoutes.expenseById(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Expense"],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetExpensesByIdQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseAPI;
