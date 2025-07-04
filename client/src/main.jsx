<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
=======
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
