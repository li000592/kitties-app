import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const CATS_API_KEY = "eee5d280-26de-4472-998b-5ed78fbbca7c"

interface Breed {
  id: string
  name: string
  url: string
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/images/search",
    prepareHeaders(headers) {
      headers.set("x-api-key", CATS_API_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `?limit=${limit}`
        },
      }),
    }
  },
})

export const { useFetchBreedsQuery } = apiSlice
