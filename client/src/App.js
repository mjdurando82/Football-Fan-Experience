import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import StadiumList from './components/StadiumList'
import AddReview from './components/AddReview'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stadiums" element={<StadiumList />} />
          <Route path="/add-review" element={<AddReview />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
