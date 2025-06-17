import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const EmailConfirm = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const confirmEmail = async () => {
      const token_hash = searchParams.get("token_hash");
      const type = searchParams.get("type");

      if (!token_hash || type !== "email") {
        setStatus("error");
        toast({
          title: "Invalid confirmation link",
          description: "The email confirmation link is invalid or expired.",
          variant: "destructive",
        });
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: "email",
        });

        if (error) {
          console.error("Email confirmation error:", error);
          setStatus("error");
          toast({
            title: "Confirmation failed",
            description: error.message || "Failed to confirm email address.",
            variant: "destructive",
          });
        } else {
          setStatus("success");
          toast({
            title: "Email confirmed!",
            description:
              "Your email has been successfully confirmed. You can now log in.",
          });

          // Redirect to dashboard after a short delay
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      } catch (error) {
        console.error("Email confirmation error:", error);
        setStatus("error");
        toast({
          title: "Confirmation failed",
          description:
            "An unexpected error occurred during email confirmation.",
          variant: "destructive",
        });
      }
    };

    confirmEmail();
  }, [searchParams, navigate, toast]);

  const getStatusContent = () => {
    switch (status) {
      case "loading":
        return {
          icon: <Loader2 className="animate-spin" size={48} />,
          title: "Confirming your email...",
          description: "Please wait while we verify your email address.",
          color: "text-blue-400",
        };
      case "success":
        return {
          icon: <CheckCircle size={48} />,
          title: "Email confirmed successfully!",
          description:
            "Your email has been verified. Redirecting to dashboard...",
          color: "text-green-400",
        };
      case "error":
        return {
          icon: <XCircle size={48} />,
          title: "Confirmation failed",
          description:
            "There was an issue confirming your email. Please try signing up again.",
          color: "text-red-400",
        };
    }
  };

  const statusContent = getStatusContent();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-gray-700/50 text-center">
        <div className={`${statusContent.color} mb-6 flex justify-center`}>
          {statusContent.icon}
        </div>

        <h1 className="text-2xl font-semibold mb-4 text-white">
          {statusContent.title}
        </h1>

        <p className="text-gray-400 mb-6">{statusContent.description}</p>

        {status === "error" && (
          <div className="space-y-3">
            <button
              onClick={() => navigate("/auth")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold h-12 rounded-lg transition-colors"
            >
              Back to Sign Up
            </button>
          </div>
        )}

        {status === "success" && (
          <div className="text-sm text-gray-400">
            If you're not redirected automatically,
            <button
              onClick={() => navigate("/dashboard")}
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              click here
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailConfirm;
