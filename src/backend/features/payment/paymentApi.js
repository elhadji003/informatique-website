// services/paymentApi.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { PAYMENT_API } from "../../enpoints";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Payment"],
  endpoints: (builder) => ({
    // On envoie maintenant un objet complet (amount + plan_type)
    initPayment: builder.mutation({
      query: (data) => ({
        url: `${PAYMENT_API}init/`,
        method: "POST",
        body: data, // data sera { amount: 5000, plan_type: 'monthly' }
      }),
      invalidatesTags: ["Payment"],
    }),

    // Cette mutation servira à ton composant "SuccessPage" 
    // pour confirmer à l'utilisateur que son compte est activé
    verifyPayment: builder.query({
      query: (token) => ({
        url: `${PAYMENT_API}callback/?token=${token}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useInitPaymentMutation, useVerifyPaymentQuery } = paymentApi;