import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import StadiumList from './components/StadiumList'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/stadiums" element={<StadiumList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
