// StripeProvider.js
"use client"
import { ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QdA3qD5GjALdetb59zRfoomZ25cbJQ7GvspuHKi9EKsAq3ySAIdhNIuqItzdhm0ON2n0lAfabvCYbiDpduGHEwZ00eShWCDGX"
);

const StripeProvider = ({ children }: { children: ReactNode }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
