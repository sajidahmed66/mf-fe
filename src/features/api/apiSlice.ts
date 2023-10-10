import configs from "@/libs/utils/configs";
import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: configs.API_URL_LOCAL,
});

const apiSlice = createApi({
  reducerPath: "api",
  //   TODO implement baseQueryFn to handle token expiration and check to see how to manage token with our currenrt auth sytem
  baseQuery,
  tagTypes: [],

  endpoints: (builder) => ({}),
});

export default apiSlice;
