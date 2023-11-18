import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

const exercisesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExercisesLis: builder.query({
      query: () => ({
        url: apiRoutes.exercises,
        method: "GET",
      }),
      providesTags: ["Exercise"],
    }),
    getExerciesById: builder.query({
      query: (id: string) => ({
        url: apiRoutes.exercisesByID(id),
      }),
      providesTags: ["Exercise"],
    }),
    createExercise: builder.mutation({
      query: (data: any) => ({
        url: apiRoutes.exercises,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Exercise"],
    }),
    updateExercise: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.exercisesByID(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Exercise"],
    }),
    deleteExercise: builder.mutation({
      query: (id: string) => ({
        url: apiRoutes.exercisesByID(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Exercise"],
    }),
    // exercise req limits
  }),
});

export const { useGetExercisesLisQuery } = exercisesAPI;
