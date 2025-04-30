"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaFilter, FaLeaf, FaSun, FaTint } from "react-icons/fa"

function PlantGuide() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "indoor",
      difficulty: "easy",
      light: "medium",
      water: "weekly",
      description:
        "The Swiss Cheese Plant is famous for its natural leaf holes and is a popular houseplant that can grow to impressive sizes.",
    },
    {
      id: 2,
      name: "Snake Plant",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "indoor",
      difficulty: "beginner",
      light: "low to bright",
      water: "biweekly",
      description:
        "One of the most tolerant houseplants that thrives on neglect. Perfect for beginners or busy plant parents.",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "indoor",
      difficulty: "moderate",
      light: "bright indirect",
      water: "weekly",
      description:
        "Known for its large, violin-shaped leaves, this trendy plant makes a stunning statement in any room.",
    },
    {
      id: 4,
      name: "Tomato Plant",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "garden",
      difficulty: "moderate",
      light: "full sun",
      water: "frequent",
      description: "A rewarding plant to grow with delicious fruits. Perfect for gardens and containers alike.",
    },
    {
      id: 5,
      name: "Lavender",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "garden",
      difficulty: "moderate",
      light: "full sun",
      water: "moderate",
      description:
        "Fragrant purple flowers that attract pollinators and can be used for culinary and aromatic purposes.",
    },
    {
      id: 6,
      name: "Aloe Vera",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
      category: "succulent",
      difficulty: "beginner",
      light: "bright",
      water: "infrequent",
      description: "A medicinal plant with thick, gel-filled leaves that's easy to care for and propagate.",
    },
  ])

  const handleSearch = (e) => {
    e.preventDefault()
    // Here you would typically fetch search results
    console.log("Searching for:", searchQuery)
  }

  const filteredPlants = plants.filter((plant) => {
    // Filter by search query
    if (
      searchQuery &&
      !plant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !plant.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by category
    if (filterCategory !== "all" && plant.category !== filterCategory) {
      return false
    }

    return true
  })

  return (
    <div className="plant__guide">
      <div className="guide__header">
        <h1>Plant Care Guide</h1>
        <p>Find detailed information about how to care for your plants</p>

        <div className="guide__search">
          <form onSubmit={handleSearch}>
            <div className="search__container">
              <FaSearch className="search__icon" />
              <input
                type="text"
                placeholder="Search for plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search__input"
              />
            </div>
          </form>

          <div className="filter__container">
            <FaFilter className="filter__icon" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter__select"
            >
              <option value="all">All Plants</option>
              <option value="indoor">Indoor Plants</option>
              <option value="garden">Garden Plants</option>
              <option value="succulent">Succulents</option>
            </select>
          </div>
        </div>
      </div>

      <div className="plants__grid">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="plant__card">
            <div className="plant__image">
              <img src={plant.image || "/placeholder.svg"} alt={plant.name} />
              <div className="plant__category">{plant.category}</div>
            </div>
            <div className="plant__info">
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>

              <div className="plant__care">
                <div className="care__item">
                  <FaLeaf className="care__icon" />
                  <span>Difficulty: {plant.difficulty}</span>
                </div>
                <div className="care__item">
                  <FaSun className="care__icon" />
                  <span>Light: {plant.light}</span>
                </div>
                <div className="care__item">
                  <FaTint className="care__icon" />
                  <span>Water: {plant.water}</span>
                </div>
              </div>

              <Link to={`/plant/${plant.id}`} className="view__details">
                View Full Care Guide
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlantGuide
