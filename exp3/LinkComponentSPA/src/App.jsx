import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Profile(){
  return(
    <div>
      <marquee loops='S'>
        <h1>Welcome to my Profile</h1>
      </marquee>
      <h1>Gitansh Gupta</h1>
      <h2>Full Stack Dev</h2>
    </div>
  )
}

function Dashboard(){
  return(
    <div>
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
    </div>
  )
}


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Link to="/profile"><button>Go To Profile</button></Link>
      <Link to="/dashboard"><button>Go To Dashboard</button></Link>
    </BrowserRouter>

    </>
  )
}

export default App
