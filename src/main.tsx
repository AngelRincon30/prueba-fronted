import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css'

const queryClient = new QueryClient()
import App from './App';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
