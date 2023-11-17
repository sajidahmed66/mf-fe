import { ICreateTraineeFormValues } from "@/components/trainee/TraineeForm";
import apiSlice from "@/features/api/apiSlice";
import { ITraineeData } from "@/libs/types";

const traineeAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTraineeList: builder.query<ITraineeData[], void>({
      query: () => ({
        url: "/admin/trainees",
        method: "GET",
      }),
      providesTags: ["Trainee"],
      //   onQueryStarted,
    }),
    getTraineeById: builder.query<ITraineeData, string>({
      query: (id) => ({
        url: `/admin/trainees/${id}`,
        method: "GET",
      }),
      // transformResponse: (response: { data: ITraineeData }, meta, arg) => {
      //   const { _id, firstname, lastname, phone } = response.data;
      //   // return {}
      // },
      providesTags: ["Trainee"],
    }),
    createTrainee: builder.mutation({
      query: (data: Partial<ICreateTraineeFormValues>) => ({
        url: "/admin/trainees",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Trainee"],
    }),
    updateTrainee: builder.mutation<ITraineeData, { data: ITraineeData; id: string }>({
      query: ({ data, id }) => ({
        url: `/admin/trainees/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Trainee"],
    }),
    deleteTrainee: builder.mutation({
      query: (id) => ({
        url: `/admin/trainees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Trainee"],
    }),
  }),
});

export const {
  useGetTraineeListQuery,
  useCreateTraineeMutation,
  useGetTraineeByIdQuery,
  useUpdateTraineeMutation,
  useDeleteTraineeMutation,
} = traineeAPI;
