"use client";
import { useState,useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/msalConfig";

export default function Home() {
const router = useRouter();

  useEffect(() => {
      router.push("/login")
  }, [])

  return ""
}
