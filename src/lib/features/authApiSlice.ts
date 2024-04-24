import { apiSlice } from "../api/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: payload => ({
                url: '/api/users/register',
                method: 'POST',
                body: { ...payload }
            })
        }),
        login: builder.mutation({
            query: credentials => ({
                url: '/api/users/login',
                method: 'POST',
                body: { ...credentials }
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApiSlice