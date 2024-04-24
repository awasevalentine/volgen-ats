import { IcreateApplicationDto } from "../../interface/application.interface"
import { apiSlice } from "../api/apiSlice"

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchApplications: builder.query({
            query: () => `/api/applications`,
            keepUnusedDataFor: 0,
            providesTags: ["Applications"]
        }),
        fetchApplication: builder.query({
            query: (applicationId) => `/api/applications/${applicationId}`,
            keepUnusedDataFor: 0,
            providesTags: ["Applications"]
        }),
        postApplications: builder.mutation({
            query: payload => ({
                url: '/api/applications',
                method: 'POST',
                body: { ...payload }
            }),
            invalidatesTags: ["Applications"]
        }),
        updateApplications: builder.mutation<{applicationId: string, payload: IcreateApplicationDto}, any>({
            query: ({applicationId, payload}) => ({
                url: `/api/applications/${applicationId}`,
                method: 'PATCH',
                body: { ...payload }
            }),
            invalidatesTags: ["Applications"]
        }),
        deleteApplications: builder.mutation({
            query: applicationId => ({
                url: `/api/applications/${applicationId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Applications"]
        }),
    })
})


export const {
    useFetchApplicationsQuery,
    useFetchApplicationQuery,
    usePostApplicationsMutation,
    useDeleteApplicationsMutation,
    useUpdateApplicationsMutation
} = adminApiSlice