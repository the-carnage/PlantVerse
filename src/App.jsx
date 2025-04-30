import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Explore from "./pages/Explore"
import CreatePost from "./pages/CreatePost"
import ArticleView from "./pages/ ArticleView.jsx"
import PlantGuide from "./pages/PlantGuide"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/article/:id" element={<ArticleView />} />
            <Route path="/plant-guide" element={<PlantGuide />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
