"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FaMapMarkerAlt, FaCalendarAlt, FaUserPlus, FaEnvelope, FaHeart, FaComment } from "react-icons/fa"

function Profile() {
  const { username } = useParams()
  const [activeTab, setActiveTab] = useState("posts")

  const [profile, setProfile] = useState({
    username: username,
    name: "Plant Enthusiast",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
    bio: "Passionate about all things green 🌱 | Plant collector | Sharing tips on sustainable gardening",
    location: "Portland, OR",
    joinDate: "January 2022",
    followers: 1245,
    following: 328,
    posts: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=400&h=400&auto=format&fit=crop",
        likes: 245,
        comments: 32,
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=400&h=400&auto=format&fit=crop",
        likes: 189,
        comments: 15,
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=400&h=400&auto=format&fit=crop",
        likes: 312,
        comments: 24,
      },
    ],
    articles: [
      {
        id: 1,
        title: "How to Care for Monstera Deliciosa",
        excerpt: "A complete guide to caring for your Swiss Cheese Plant...",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
        likes: 178,
        comments: 23,
      },
      {
        id: 2,
        title: "Propagation Techniques for Beginners",
        excerpt: "Learn how to multiply your plant collection without spending a dime...",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
        likes: 145,
        comments: 19,
      },
    ],
    guides: [
      {
        id: 1,
        title: "Succulent Care 101",
        excerpt: "Everything you need to know about caring for succulents...",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=300&h=200&auto=format&fit=crop",
        likes: 201,
        comments: 27,
      },
    ],
  })

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__avatar">
          <img src={profile.avatar || "/placeholder.svg"} alt={profile.username} />
        </div>
        <div className="profile__info">
          <div className="profile__nameRow">
            <h1>{profile.username}</h1>
            <div className="profile__actions">
              <button className="primary__button">
                <FaUserPlus className="button__icon" /> Follow
              </button>
              <button className="secondary__button">
                <FaEnvelope className="button__icon" /> Message
              </button>
            </div>
          </div>

          <div className="profile__stats">
            <div className="stat">
              <span className="stat__number">
                {profile.posts.length + profile.articles.length + profile.guides.length}
              </span>{" "}
              posts
            </div>
            <div className="stat">
              <span className="stat__number">{profile.followers}</span> followers
            </div>
            <div className="stat">
              <span className="stat__number">{profile.following}</span> following
            </div>
          </div>

          <div className="profile__bio">
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
            <div className="profile__meta">
              <span className="profile__location">
                <FaMapMarkerAlt /> {profile.location}
              </span>
              <span className="profile__joinDate">
                <FaCalendarAlt /> Joined {profile.joinDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile__tabs">
        <button
          className={`profile__tab ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`profile__tab ${activeTab === "articles" ? "active" : ""}`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
        <button
          className={`profile__tab ${activeTab === "guides" ? "active" : ""}`}
          onClick={() => setActiveTab("guides")}
        >
          Plant Guides
        </button>
        <button
          className={`profile__tab ${activeTab === "saved" ? "active" : ""}`}
          onClick={() => setActiveTab("saved")}
        >
          Saved
        </button>
      </div>

      <div className="profile__content">
        {activeTab === "posts" && (
          <div className="profile__grid">
            {profile.posts.map((post) => (
              <div key={post.id} className="profile__post">
                <img src={post.image || "/placeholder.svg"} alt="Post" />
                <div className="post__overlay">
                  <div className="post__stats">
                    <span>
                      <FaHeart /> {post.likes}
                    </span>
                    <span>
                      <FaComment /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "articles" && (
          <div className="profile__articles">
            {profile.articles.map((article) => (
              <div key={article.id} className="profile__article">
                <div className="article__image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                </div>
                <div className="article__content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article__stats">
                    <span>
                      <FaHeart /> {article.likes}
                    </span>
                    <span>
                      <FaComment /> {article.comments}
                    </span>
                  </div>
                  <Link to={`/article/${article.id}`} className="read__more">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "guides" && (
          <div className="profile__guides">
            {profile.guides.map((guide) => (
              <div key={guide.id} className="profile__guide">
                <div className="guide__image">
                  <img src={guide.image || "/placeholder.svg"} alt={guide.title} />
                </div>
                <div className="guide__content">
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <div className="guide__stats">
                    <span>
                      <FaHeart /> {guide.likes}
                    </span>
                    <span>
                      <FaComment /> {guide.comments}
                    </span>
                  </div>
                  <Link to={`/article/${guide.id}`} className="read__more">
                    Read guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="profile__saved">
            <p className="empty__state">No saved posts yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
