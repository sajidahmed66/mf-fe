import apiSlice from "@/features/api/apiSlice";
import apiRoutes from "@/libs/routepaths/apiroutes";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // product crud
    getProducts: builder.query({
      query: () => ({
        url: apiRoutes.products,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getProductById: builder.query<any, string>({
      query: (id) => ({
        url: apiRoutes.productById(id),
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    createProducts: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.products,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProducts: builder.mutation<any, { data: any; id: string }>({
      query: ({ data, id }) => ({
        url: apiRoutes.productById(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProducts: builder.mutation<any, string>({
      query: (id) => ({
        url: apiRoutes.productById(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    // product sell crud
    getProductSells: builder.query({
      query: () => ({
        url: apiRoutes.productSells,
        method: "GET",
      }),
      providesTags: ["ProductSells"],
    }),
    getProductSellById: builder.query<any, string>({
      query: (sellId) => ({
        url: apiRoutes.productSellById(sellId),
        method: "GET",
      }),
      providesTags: ["ProductSells"],
    }),
    //NOTE -  there a big Ghapla in the sell logic we might need to look into this later
    createProductSells: builder.mutation<any, any>({
      query: (data) => ({
        url: apiRoutes.productSells,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ProductSells"],
    }),
    updateProductSells: builder.mutation<any, { data: any; sellId: string }>({
      query: ({ data, sellId }) => ({
        url: apiRoutes.productSellById(sellId),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["ProductSells"],
    }),
    deleteProductSells: builder.mutation<any, string>({
      query: (sellId) => ({
        url: apiRoutes.productSellById(sellId),
        method: "DELETE",
      }),
      invalidatesTags: ["ProductSells"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
  //
  useGetProductSellsQuery,
  useGetProductSellByIdQuery,
  useCreateProductSellsMutation,
  useUpdateProductSellsMutation,
  useDeleteProductSellsMutation,
} = productsApi;
