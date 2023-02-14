import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Reviews from './components/Reviews'
import AddReview from './components/AddReview'
import { Routes, Route } from 'react-router-dom'
import StadiumList from './components/StadiumList'
import EditReview from './components/EditReview'

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
          <Route path="/stadium/:id/reviews" element={<Reviews />} />
          <Route path="/stadium/:id/reviews/:id" />
          <Route path="/review/:id/edit" element={<EditReview />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
