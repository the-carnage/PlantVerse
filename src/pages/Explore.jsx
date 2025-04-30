"use client"

import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { FaSearch, FaLeaf, FaSeedling, FaTree, FaBookOpen, FaUsers } from "react-icons/fa"

function Explore() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const tag = searchParams.get("tag") || ""
  const category = searchParams.get("category") || ""
  const type = searchParams.get("type") || ""

  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState(query)

  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "photo",
      username: "plantlover123",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=40&h=40&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1614594576037-551a8ff1a6a5?q=80&w=400&h=400&auto=format&fit=crop",
      caption: "My new monstera deliciosa is thriving! 🌿 #plantsofinstagram #monstera #plantcare",
      likes: 245,
      comments: 32,
      tags: ["monstera", "plantsofinstagram", "plantcare"],
      category: "indoor",
    },
    {
      id: 2,
      type: "article",
      username: "greenthumb",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop",
      title: "5 Easy Ways to Propagate Your Pothos",
      excerpt:
        "Learn how to multiply your pothos plants with these simple propagation techniques that anyone can do at home...",
      image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=500&h=300&auto=format&fit=crop",
      likes: 189,
      comments: 15,
      tags: ["propagation", "pothos", "plantips"],
      category: "indoor",
    },
    {
      id: 3,
      type: "photo",
      username: "urbanjungler",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=40&h=40&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=400&h=400&auto=format&fit=crop",
      caption:
        "My living room jungle is complete! Spent the weekend rearranging all my plant babies to maximize light exposure. What do you think? #urbanjungle #plantdecor #indoorplants",
      likes: 312,
      comments: 24,
      tags: ["urbanjungle", "plantdecor", "indoorplants"],
      category: "indoor",
    },
    {
      id: 4,
      type: "guide",
      username: "botanicalgardener",
      userAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=40&h=40&auto=format&fit=crop",
      title: "Complete Guide to Growing Tomatoes",
      excerpt: "Everything you need to know about growing delicious tomatoes in your garden or balcony...",
      image: "https://images.unsplash.com/photo-1592841200221-a6c64a754bc0?q=80&w=500&h=300&auto=format&fit=crop",
      likes: 201,
      comments: 27,
      tags: ["vegetables", "gardening", "tomatoes"],
      category: "garden",
    },
    {
      id: 5,
      type: "photo",
      username: "succulentlover",
      userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=40&h=40&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=400&h=400&auto=format&fit=crop",
      caption:
        "My succulent collection is growing! Added these beauties to my windowsill garden today. #succulents #plantcollection #drought-resistant",
      likes: 178,
      comments: 19,
      tags: ["succulents", "plantcollection", "drought-resistant"],
      category: "indoor",
    },
    {
      id: 6,
      type: "article",
      username: "plantparent",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=40&h=40&auto=format&fit=crop",
      title: "How to Create a Sustainable Garden",
      excerpt: "Learn eco-friendly gardening practices that help the environment while growing beautiful plants...",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=500&h=300&auto=format&fit=crop",
      likes: 156,
      comments: 21,
      tags: ["sustainable", "eco-friendly", "gardening"],
      category: "sustainable",
    },
  ])

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "plantlover123",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Plant enthusiast | Urban gardener | Sustainability advocate",
      followers: 1245,
    },
    {
      id: 2,
      username: "greenthumb",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Houseplant addict | DIY plant projects | Botanical illustrations",
      followers: 987,
    },
    {
      id: 3,
      username: "urbanjungler",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Turning apartments into jungles | Plant stylist | Workshop host",
      followers: 1532,
    },
    {
      id: 4,
      username: "botanicalgardener",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Professional horticulturist | Garden designer | Plant science educator",
      followers: 2156,
    },
  ])

  useEffect(() => {
    if (tag) {
      setActiveTab("all")
    } else if (category) {
      setActiveTab(category)
    } else if (type === "people") {
      setActiveTab("people")
    }
  }, [tag, category, type])

  const handleSearch = (e) => {
    e.preventDefault()
    // Here you would typically fetch search results
    console.log("Searching for:", searchQuery)
  }

  const filteredPosts = posts.filter((post) => {
    // Filter by search query
    if (
      query &&
      !post.caption?.toLowerCase().includes(query.toLowerCase()) &&
      !post.title?.toLowerCase().includes(query.toLowerCase()) &&
      !post.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    ) {
      return false
    }

    // Filter by tag
    if (tag && !post.tags?.includes(tag)) {
      return false
    }

    // Filter by category
    if (activeTab !== "all" && activeTab !== "people" && post.category !== activeTab) {
      return false
    }

    // Filter by post type
    if (activeTab === "articles" && post.type !== "article") {
      return false
    }

    if (activeTab === "guides" && post.type !== "guide") {
      return false
    }

    return true
  })

  return (
    <div className="explore">
      <div className="explore__header">
        <h1>Explore</h1>
        <form className="explore__search" onSubmit={handleSearch}>
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
          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </div>

      <div className="explore__tabs">
        <button className={`explore__tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
          All
        </button>
        <button
          className={`explore__tab ${activeTab === "indoor" ? "active" : ""}`}
          onClick={() => setActiveTab("indoor")}
        >
          <FaLeaf className="tab__icon" /> Indoor Plants
        </button>
        <button
          className={`explore__tab ${activeTab === "garden" ? "active" : ""}`}
          onClick={() => setActiveTab("garden")}
        >
          <FaSeedling className="tab__icon" /> Garden & Outdoor
        </button>
        <button
          className={`explore__tab ${activeTab === "sustainable" ? "active" : ""}`}
          onClick={() => setActiveTab("sustainable")}
        >
          <FaTree className="tab__icon" /> Sustainable Practices
        </button>
        <button
          className={`explore__tab ${activeTab === "articles" ? "active" : ""}`}
          onClick={() => setActiveTab("articles")}
        >
          <FaBookOpen className="tab__icon" /> Articles
        </button>
        <button
          className={`explore__tab ${activeTab === "people" ? "active" : ""}`}
          onClick={() => setActiveTab("people")}
        >
          <FaUsers className="tab__icon" /> People
        </button>
      </div>

      {tag && (
        <div className="explore__tagHeader">
          <h2>#{tag}</h2>
          <p>{filteredPosts.length} posts</p>
        </div>
      )}

      {activeTab !== "people" ? (
        <div className="explore__grid">
          {filteredPosts.map((post) => (
            <div key={post.id} className={`explore__item ${post.type}`}>
              {post.type === "photo" ? (
                <Link to={`/post/${post.id}`} className="grid__item">
                  <img src={post.image || "/placeholder.svg"} alt={post.caption} />
                  <div className="item__overlay">
                    <div className="item__user">
                      <img src={post.userAvatar || "/placeholder.svg"} alt={post.username} />
                      <span>{post.username}</span>
                    </div>
                    <div className="item__stats">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to={`/article/${post.id}`} className="grid__item article">
                  <div className="article__preview">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} />
                    <div className="article__type">{post.type === "guide" ? "Guide" : "Article"}</div>
                  </div>
                  <div className="article__info">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="article__meta">
                      <div className="article__user">
                        <img src={post.userAvatar || "/placeholder.svg"} alt={post.username} />
                        <span>{post.username}</span>
                      </div>
                      <div className="article__stats">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="explore__users">
          {users.map((user) => (
            <div key={user.id} className="user__card">
              <Link to={`/profile/${user.username}`} className="user__avatar">
                <img src={user.avatar || "/placeholder.svg"} alt={user.username} />
              </Link>
              <div className="user__info">
                <Link to={`/profile/${user.username}`} className="user__name">
                  {user.username}
                </Link>
                <p className="user__bio">{user.bio}</p>
                <p className="user__followers">{user.followers} followers</p>
              </div>
              <button className="follow__button">Follow</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Explore
