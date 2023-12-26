import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";
import { IWorkoutData, IWorkoutReqData } from "@/libs/types";

const exercisesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExercisesLis: builder.query<IWorkoutData[], void>({
      query: () => ({
        url: apiRoutes.exercises,
        method: "GET",
      }),
      providesTags: ["Exercise"],
    }),
    getExerciesById: builder.query<IWorkoutData, string>({
      query: (id) => ({
        url: apiRoutes.exercisesByID(id),
      }),
      providesTags: ["Exercise"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createExercise: builder.mutation<any, IWorkoutReqData>({
      query: (data) => ({
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
    // exercise req limits of days
    getExerciseLimit: builder.query({
      query: () => ({
        url: apiRoutes.exerciseReqLimits,
        method: "GET",
      }),
      providesTags: ["ExerciseReqLimit"],
    }),
    createExerciseLimit: builder.mutation({
      query: (data: any) => ({
        url: apiRoutes.exerciseReqLimits,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ExerciseReqLimit"],
    }),
    updateExerciseLimit: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.exerciseReqLimitsByID(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["ExerciseReqLimit"],
    }),
    deleteExerciseLimit: builder.mutation({
      query: (id: string) => ({
        url: apiRoutes.exerciseReqLimitsByID(id),
        method: "DELETE",
      }),
      invalidatesTags: ["ExerciseReqLimit"],
    }),
    // trainee exercise requests these are bacially workoutPlan we need to update
    getTraineeExercises: builder.query({
      query: () => ({
        url: apiRoutes.traineeExercises,
        method: "GET",
      }),
      providesTags: ["TraineeExerciseReq"],
    }),
    getTraineeExerciseById: builder.query({
      query: (id: string) => ({
        url: apiRoutes.traineeExerciseById(id),
        method: "GET",
      }),
      providesTags: ["TraineeExerciseReq"],
    }),
    createTraineeExercise: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.traineeExercises,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TraineeExerciseReq"],
    }),
    updateTraineeExercise: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.traineeExerciseById(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["TraineeExerciseReq"],
    }),
    deleteTraineeExercise: builder.mutation<any, string>({
      query: (id) => ({
        url: apiRoutes.traineeExerciseById(id),
        method: "DELETE",
      }),
      invalidatesTags: ["TraineeExerciseReq"],
    }),
  }),
});

export const {
  useGetExercisesLisQuery,
  useGetExerciesByIdQuery,
  useDeleteExerciseMutation,
  useCreateExerciseMutation,
  useUpdateExerciseMutation,
} = exercisesAPI;
