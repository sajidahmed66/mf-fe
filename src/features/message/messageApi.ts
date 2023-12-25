import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

// this is probably a notice api , creates genaral notice for all user accross the board i need to check all code on the backend to know for sure

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => ({
        url: apiRoutes.messages,
        method: "GET",
      }),
      providesTags: ["Message"],
    }),
    createMessage: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.messages,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const { useGetMessagesQuery, useCreateMessageMutation } = messageApi;
