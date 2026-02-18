
import './App.css'
import{ lazy, Suspense } from 'react'


function App() {
  const Dashboard = lazy(() => import('./components/dashboard.jsx'),500)
  return  (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard/>
    </Suspense>
  )
}

export default App