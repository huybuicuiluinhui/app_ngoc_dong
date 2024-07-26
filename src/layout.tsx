import React, { useEffect, useState } from "react";
import { App, ZMPRouter, SnackbarProvider, Modal } from "zmp-ui";
import { RecoilRoot } from "recoil";
import AppNavigation from "./navigation";
import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Layout = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <AppNavigation />
              </AuthProvider>
            </QueryClientProvider>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default Layout;
