import { Link } from "react-router-dom"
import { FaSeedling, FaLeaf, FaTree, FaBookOpen } from "react-icons/fa"

function Sidebar({ user, suggestions }) {
  return (
    <div className="app__sidebar">
      {user && (
        <div className="sidebar__profile">
          <Link to="/profile/me">
            <img src={user.avatar || "/placeholder.svg"} alt="Profile" className="sidebar__avatar" />
          </Link>
          <div className="sidebar__userInfo">
            <h3>{user.username}</h3>
            <p>{user.bio}</p>
          </div>
        </div>
      )}

      <div className="sidebar__categories">
        <h3>Explore Categories</h3>
        <Link to="/explore?category=indoor" className="sidebar__category">
          <FaLeaf className="category__icon" />
          <span>Indoor Plants</span>
        </Link>
        <Link to="/explore?category=garden" className="sidebar__category">
          <FaSeedling className="category__icon" />
          <span>Garden & Outdoor</span>
        </Link>
        <Link to="/explore?category=sustainable" className="sidebar__category">
          <FaTree className="category__icon" />
          <span>Sustainable Practices</span>
        </Link>
        <Link to="/plant-guide" className="sidebar__category">
          <FaBookOpen className="category__icon" />
          <span>Plant Care Guides</span>
        </Link>
      </div>

      <div className="sidebar__suggestions">
        <div className="suggestions__header">
          <h3>Plant Enthusiasts to Follow</h3>
          <Link to="/explore?type=people" className="see__all">
            See All
          </Link>
        </div>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion">
            <Link to={`/profile/${suggestion.username}`} className="suggestion__avatar">
              <img src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.username} />
            </Link>
            <div className="suggestion__info">
              <Link to={`/profile/${suggestion.username}`} className="suggestion__username">
                {suggestion.username}
              </Link>
              <span className="suggestion__bio">{suggestion.bio}</span>
            </div>
            <button className="follow__button">Follow</button>
          </div>
        ))}
      </div>

      <div className="sidebar__trending">
        <h3>Trending Topics</h3>
        <Link to="/explore?tag=monstera" className="trending__tag">
          #monstera
        </Link>
        <Link to="/explore?tag=succulents" className="trending__tag">
          #succulents
        </Link>
        <Link to="/explore?tag=urbanjungle" className="trending__tag">
          #urbanjungle
        </Link>
        <Link to="/explore?tag=plantparenthood" className="trending__tag">
          #plantparenthood
        </Link>
      </div>

      <div className="sidebar__footer">
        <div className="footer__links">
          <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Privacy</a> • <a href="#">Terms</a>
        </div>
        <p className="copyright">© 2023 PlantVerse</p>
      </div>
    </div>
  )
}

export default Sidebar
