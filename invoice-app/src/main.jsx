import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InvoiceApp } from './components/invoiceApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp/>
  </StrictMode>,
)
