"use client";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "fa8c89b7-ebcb-4025-8386-3d8ef25345e1",
    authority: "https://login.microsoftonline.com/45138c60-7951-461a-a9d1-7c6603de4d7e",
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri : "http://localhost:3000/login"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);
await msalInstance.initialize();

export {msalInstance};

export const loginRequest = {
    scopes: ["User.Read"],
  };