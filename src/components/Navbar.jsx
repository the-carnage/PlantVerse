"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaLeaf, FaSearch, FaPlus, FaCompass, FaUser } from "react-icons/fa"

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/explore?q=${searchQuery}`)
    }
  }

  return (
    <header className="app__header">
      <div className="app__headerWrapper">
        <Link to="/" className="app__headerLogo">
          <FaLeaf className="logo__icon" />
          <span className="logo__text">PlantVerse</span>
        </Link>

        <form className="search__form" onSubmit={handleSearch}>
          <div className="search__container">
            <FaSearch className="search__icon" />
            <input
              type="text"
              placeholder="Search plants, users, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search__input"
            />
          </div>
        </form>

        <div className="app__headerButtons">
          {isLoggedIn ? (
            <>
              <Link to="/create" className="nav__icon">
                <FaPlus />
              </Link>
              <Link to="/explore" className="nav__icon">
                <FaCompass />
              </Link>
              <Link to="/profile/me" className="nav__icon">
                <FaUser />
              </Link>
            </>
          ) : (
            <>
              <button className="primary__button" onClick={() => setIsLoggedIn(true)}>
                Log In
              </button>
              <button className="secondary__button">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
