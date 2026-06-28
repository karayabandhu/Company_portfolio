"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function RazorpayPayment({
  isOpen,
  amount,
  partnerName,
  partnerMobile,
  onSuccess,
  onCancel,
  onError
}) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    // Detect if Razorpay script is already loaded in window
    if (window.Razorpay) {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen || !scriptLoaded || isInitializing) return;

    const initiatePayment = async () => {
      setIsInitializing(true);
      try {
        // 1. Create order on the backend
        const res = await fetch("/api/razorpay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount })
        });

        if (!res.ok) {
          throw new Error("Failed to create order on server");
        }

        const order = await res.json();

        // If it's a simulated order, call success callback directly (frictionless local testing)
        if (order.simulated) {
          console.log("Simulating successful payment for order:", order.id);
          onSuccess({
            razorpay_payment_id: "pay_simulated_" + Date.now(),
            razorpay_order_id: order.id,
            razorpay_signature: "sig_simulated_dummy"
          });
          setIsInitializing(false);
          return;
        }

        // 2. Configure Razorpay Checkout options
        const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder_key_id";

        const options = {
          key: razorpayKeyId,
          amount: order.amount,
          currency: order.currency || "INR",
          name: "Karaya Bandhu Pvt. Ltd.",
          description: `Platform Verification Plan - ${amount === 99 ? "1-Year" : "3-Year"}`,
          order_id: order.id,
          handler: function (response) {
            // Payment success callback
            setIsInitializing(false);
            onSuccess(response);
          },
          prefill: {
            name: partnerName || "Verified Partner",
            contact: partnerMobile ? `+91${partnerMobile}` : ""
          },
          theme: {
            color: "#2563EB" // Premium blue theme matching KB branding
          },
          modal: {
            ondismiss: function () {
              setIsInitializing(false);
              if (onCancel) onCancel();
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Razorpay initiation error:", err);
        setIsInitializing(false);
        if (onError) onError(err.message);
      }
    };

    initiatePayment();
  }, [isOpen, scriptLoaded, amount, partnerName, partnerMobile, onSuccess, onCancel, onError]);

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      {isOpen && isInitializing && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin" />
            <p className="text-xs font-semibold tracking-wide">
              Initializing Secure Checkout...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
