import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;

// export const { useGetKpisQuery } = api;

// ChatGPT

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
//   reducerPath: "main",
//   tagTypes: ["Kpis"],
//   endpoints: (build) => ({
//     getKpis: build.query<void, void>({
//       query: () => "kpi/kpis",
//       providesTags: ["Kpis"],
//       transformResponse: (response) => {
//         console.log(response);
//         return response;
//       },
//     }),
//   }),
// });

// console.log("baseUrl:", import.meta.env.VITE_BASE_URL);

// export const { useGetKpisQuery } = api;
