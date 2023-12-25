import { RootState } from "@/app/store";
import { userLoggedOut } from "@/features/auth/authSlice";
import configs from "@/libs/utils/configs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: configs.API_URL_LOCAL,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.accessToken;
    console.log({ token });
    if (token) {
      headers.set("x-auth-token", token);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  //   TODO implement baseQueryFn to handle token expiration and check to see how to manage token with our currenrt auth sytem
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error && result.error.status === 401) {
      console.log("Unauthorized");
      api.dispatch(userLoggedOut);
      localStorage.clear();
    }
    return result;
  },
  tagTypes: [
    "Packages",
    "Trainee",
    "Diet",
    "DietReqLimit",
    "TraineeDietReq",
    "Exercise",
    "ExerciseReqLimit",
    "TraineeExerciseReq",
    "Expense",
    "Installment",
    "Message",
    "Payment",
    "Payment-Trainee",
    "Products",
    "ProductSells",
  ],

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});

export default apiSlice;
