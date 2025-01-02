import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx'
import TaskContext from './Context/TaskContext.jsx'


localStorage.clear() // here we clear local storage 


createRoot(document.getElementById('root')).render(
 
  <StrictMode>

    {/* Here we wraping a App in AuthContext and TaskContext  */}
    <AuthContext>
      <TaskContext> 
      <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)
