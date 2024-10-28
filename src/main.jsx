import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './theme/theme.js'
import { ProductsProvider } from "../src/context/ProductsContext.jsx"
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ProductsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ProductsProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
