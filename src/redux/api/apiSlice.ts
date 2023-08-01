import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://assignment5-two.vercel.app" }),
  tagTypes: ["Book"],
  endpoints: () => ({}),
});
