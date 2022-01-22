import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_SPACE_API_BASE_URL;

export const spaceApi = createApi({
  reducerPath: "spaceApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSpaceById: builder.query({
      query: (id) => `/asset/all-processed-data/?asset_pnu=${id}`,
    }),
  }),
});

export const { useGetSpaceByIdQuery } = spaceApi;
