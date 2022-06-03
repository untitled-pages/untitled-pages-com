import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { SqueezePage } from "./squeeze-page";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/morning-brew" />} />
          <Route path="/:slug" element={<SqueezePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
