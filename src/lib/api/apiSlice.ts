import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://volgen.azurewebsites.net',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.access_token
        if (token) {
            headers.set("authorization", `Token ${token}`)
        }
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["Applications"],
    endpoints: builder => ({})
})