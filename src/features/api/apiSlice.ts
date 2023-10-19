import { RootState } from "@/app/store";
import { userLoggedOut } from "@/features/auth/authSlice";
import configs from "@/libs/utils/configs";
import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: configs.API_URL_LOCAL,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState)?.auth.accessToken;
    if (token) {
      headers.set("x-auth-token", `${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  //   TODO implement baseQueryFn to handle token expiration and check to see how to manage token with our currenrt auth sytem
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error && result.error.status === 401) {
      api.dispatch(userLoggedOut);
      localStorage.clear();
    }
    return result;
  },
  tagTypes: [],

  endpoints: (builder) => ({}),
});

export default apiSlice;
