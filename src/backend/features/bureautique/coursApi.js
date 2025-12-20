import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { BUREAUTIQUE_API } from "../../enpoints";

export const coursApi = createApi({
  reducerPath: "coursApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Cours", "Etapes"],
  endpoints: (builder) => ({
    // 🔹 Récupérer tous les cours
    getAllCours: builder.query({
      query: () => `${BUREAUTIQUE_API}cours/`,
      transformResponse: (response) => response.results,
      providesTags: ["Cours"],
    }),

    // 🔹 Récupérer un cours spécifique avec toutes ses étapes
    getCoursById: builder.query({
      query: (id) => `${BUREAUTIQUE_API}cours/${id}/`,
      providesTags: (result, error, id) => [{ type: "Cours", id }],
    }),

    // 🔹 Récupérer toutes les étapes
    getEtapes: builder.query({
      query: () => `${BUREAUTIQUE_API}etapes/`,
      providesTags: ["Etapes"],
    }),

    // 🔹 Récupérer une étape spécifique
    getEtapeById: builder.query({
      query: (id) => `${BUREAUTIQUE_API}etapes/${id}/`,
      providesTags: (result, error, id) => [{ type: "Etapes", id }],
    }),

    // 🔹 Créer une nouvelle étape (optionnel)
    createEtape: builder.mutation({
      query: (body) => ({
        url: `${BUREAUTIQUE_API}etapes/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Etapes", "Cours"],
    }),

    // 🔹 Mettre à jour une étape
    updateEtape: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${BUREAUTIQUE_API}etapes/${id}/`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Etapes", id }, "Cours"],
    }),

    // 🔹 Supprimer une étape
    deleteEtape: builder.mutation({
      query: (id) => ({
        url: `${BUREAUTIQUE_API}etapes/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Etapes", "Cours"],
    }),

    // 🔹 Commencer un étape
    startCours: builder.mutation({
      query: (coursId) => ({
        url: `${BUREAUTIQUE_API}cours/${coursId}/start/`,
        method: "POST",
      }),
      invalidatesTags: ["Progression"],
    }),

    // 🔹 like Cours
    likeCours: builder.mutation({
      query: (coursId) => ({
        url: `${BUREAUTIQUE_API}cours/${coursId}/like/`,
        method: "POST",
      }),
      invalidatesTags: ["Cours"],
    }),

  }),
});

// 🔹 Export des hooks auto-générés
export const {
  useGetAllCoursQuery,
  useGetCoursByIdQuery,
  useGetEtapesQuery,
  useGetEtapeByIdQuery,
  useCreateEtapeMutation,
  useUpdateEtapeMutation,
  useDeleteEtapeMutation,
  useStartCoursMutation,
  useLikeCoursMutation,
} = coursApi;
