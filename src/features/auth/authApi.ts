import apiSlice from "@/features/api/apiSlice";
import { userLoggedIn } from "@/features/auth/authSlice";
import { authenticate } from "@/libs/utils/auth/auth";
export const authApi = apiSlice.injectEndpoints({
  // endpoints here
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "admin/auth",
        body: data,
        method: "POST",
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          console.log({ result });
          //   result.data.token
          authenticate(result.data.token, () => {
            dispatch(userLoggedIn({ accessToken: result.data.token }));
          });
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
