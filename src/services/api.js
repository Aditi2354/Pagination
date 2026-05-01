




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  
baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    getPostsByPage: builder.query({
      query: (page = 1) => `/posts?_page=${page}&_limit=10`,
      
      keepUnusedDataFor: 60 * 5,
    }),
  }),
})

export const { useGetPostsByPageQuery } = api