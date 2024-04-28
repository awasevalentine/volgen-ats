import { apiSlice } from "../api/apiSlice";
import { IcreateApplicationDto } from "../../interface/application.interface";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchApplications: builder.query({
      query: () => `/api/applications`,
      keepUnusedDataFor: 0,
      providesTags: ["Applications"],
    }),
    fetchApplication: builder.query({
      query: (applicationId) => `/api/applications/${applicationId}`,
      keepUnusedDataFor: 0,
      providesTags: ["Applications"],
    }),
    postApplications: builder.mutation({
      query: (payload) => ({
        url: "/api/applications",
        method: "POST",
        body: { ...payload },
      }),
      invalidatesTags: ["Applications"],
    }),
    updateApplications: builder.mutation({
      query: ({ applicationId, payload }) => ({
        url: `/api/applications/${applicationId}`,
        method: "PATCH",
        body: { ...payload },
      }),
      invalidatesTags: ["Applications"],
    }),
    deleteApplications: builder.mutation({
      query: (applicationId) => ({
        url: `/api/applications/${applicationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Applications"],
    }),
    candidateApplications: builder.mutation({
      query: ({ applicationId, payload }) => ({
        url: `/api/applications/${applicationId}/submissions`,
        method: "POST",
        prepareHeaders: (headers: any) => {
          headers.set("Content-Type", "multipart/form-data");
          headers.set("Custom-Header", "Value")
          return headers;
        },
        body: payload
      }),
      invalidatesTags: ["Applications"],
    }),
  }),
});

export const {
  useFetchApplicationsQuery,
  useFetchApplicationQuery,
  usePostApplicationsMutation,
  useDeleteApplicationsMutation,
  useUpdateApplicationsMutation,
  useCandidateApplicationsMutation,
} = adminApiSlice;
