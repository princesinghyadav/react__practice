 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemecontextProvider from './contextt/lightcontex.tsx'
import AuthcontextProvider from './contextt/Authcontext.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
     <AuthcontextProvider>
 <ThemecontextProvider >
 <App />
 </ThemecontextProvider>
    </AuthcontextProvider> 
    </BrowserRouter>
   

   
   
)
