import React, { useEffect } from "react";

const PayPalButton = ({ hostedButtonId, planPrice, onPaymentSuccess }) => {
  useEffect(() => {
    const existingScript = document.getElementById("paypal-sdk");

    // Only load the script if it hasn't been loaded yet
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "paypal-sdk"; // Set an ID for easier reference
      script.src = "https://www.paypal.com/sdk/js?client-id=BAA-Zq9hFWQFsoc4Fz3gcPIAHcCggMq6iec38jWluMq4w8PfnSHWlCs-IQ49A2Eq5uUiQPlAo6PEEJj0DM&components=hosted-buttons&enable-funding=venmo&currency=USD";
      script.async = true;

      script.onload = () => {
        if (window.paypal) {
          try {
            window.paypal.HostedButtons({
              hostedButtonId,
              onApprove: (data, actions) => {
                // Call the onPaymentSuccess function passed as a prop
                onPaymentSuccess(); // Notify the parent component of payment success
              },
            }).render(`#paypal-container-${hostedButtonId}`);
          } catch (error) {
            console.error("Error rendering PayPal button:", error);
          }
        } else {
          console.error("PayPal SDK did not load correctly.");
        }
      };

      script.onerror = () => {
        console.error("Failed to load the PayPal SDK script.");
      };

      document.body.appendChild(script);
    } else {
      // If the script is already loaded, just render the button
      if (window.paypal) {
        try {
          window.paypal.HostedButtons({
            hostedButtonId,
            onApprove: (data, actions) => {
              onPaymentSuccess(); // Notify the parent component of payment success
            },
          }).render(`#paypal-container-${hostedButtonId}`);
        } catch (error) {
          console.error("Error rendering PayPal button:", error);
        }
      }
    }

    // Cleanup function to remove the script if needed
    return () => {
      // Optionally: you could remove the script here if you want to clean up completely
      const scriptToRemove = document.getElementById("paypal-sdk");
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, [hostedButtonId, onPaymentSuccess]); // Add onPaymentSuccess to the dependency array

  return (
    <div style={{ backgroundColor: '#003366' }}>
      {planPrice && (
        <h2 className="text-lg font-semibold text-blue-500 mb-2">
          Pay with PayPal - ${planPrice}/month
        </h2>
      )}
      <div id={`paypal-container-${hostedButtonId}`}></div>
    </div>
  );
};

export default PayPalButton;
