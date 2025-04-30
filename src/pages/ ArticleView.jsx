"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark, FaArrowLeft } from "react-icons/fa"

function ArticleView() {
  const { id } = useParams()
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [comment, setComment] = useState("")

  const [article, setArticle] = useState({
    id: Number.parseInt(id),
    type: "article",
    title: "5 Easy Ways to Propagate Your Pothos",
    username: "greenthumb",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=600&h=400&auto=format&fit=crop",
    content: `
      <p>Pothos (Epipremnum aureum) is one of the easiest houseplants to propagate. With its trailing vines and heart-shaped leaves, it's not only beautiful but also incredibly forgiving for beginners. Here are five simple methods to multiply your pothos collection:</p>
      
      <h2>1. Water Propagation</h2>
      <p>This is perhaps the most popular method because you can watch the roots develop:</p>
      <ul>
        <li>Cut a healthy vine just below a node (the bumpy part where leaves grow)</li>
        <li>Remove the leaf closest to the cut end</li>
        <li>Place the cutting in a jar of water, ensuring the node is submerged</li>
        <li>Change the water weekly to prevent bacteria growth</li>
        <li>After 2-3 weeks, roots should form and be ready for planting</li>
      </ul>
      
      <h2>2. Soil Propagation</h2>
      <p>For those who prefer to skip the water stage:</p>
      <ul>
        <li>Take a cutting with 2-3 nodes</li>
        <li>Remove the bottom leaf to expose the node</li>
        <li>Dip the cut end in rooting hormone (optional but helpful)</li>
        <li>Plant directly in moist potting soil</li>
        <li>Keep the soil consistently moist until new growth appears</li>
      </ul>
      
      <h2>3. Sphagnum Moss Method</h2>
      <p>This method provides excellent aeration for root development:</p>
      <ul>
        <li>Moisten sphagnum moss thoroughly</li>
        <li>Place cuttings with nodes in contact with the moss</li>
        <li>Cover with a clear plastic bag to create humidity</li>
        <li>Roots typically develop within 2-3 weeks</li>
      </ul>
      
      <h2>4. Air Layering</h2>
      <p>This technique allows you to propagate without cutting the vine first:</p>
      <ul>
        <li>Identify a node on an existing vine</li>
        <li>Wrap damp sphagnum moss around the node</li>
        <li>Cover with plastic wrap and secure with twine</li>
        <li>Once roots form through the moss, cut below the new roots</li>
        <li>Plant the newly rooted section</li>
      </ul>
      
      <h2>5. Division During Repotting</h2>
      <p>For established plants:</p>
      <ul>
        <li>Remove the plant from its pot</li>
        <li>Gently separate the root ball into sections</li>
        <li>Ensure each section has stems and roots</li>
        <li>Repot each division in fresh potting mix</li>
      </ul>
      
      <p>Whichever method you choose, pothos propagation is a rewarding way to expand your plant collection or share with friends. The best time to propagate is during the growing season (spring and summer) when the plant is actively growing.</p>
      
      <p>Have you tried propagating pothos before? Which method worked best for you? Share your experiences in the comments!</p>
    `,
    likes: 189,
    comments: [
      {
        id: 1,
        username: "plantlover123",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=32&h=32&auto=format&fit=crop",
        text: "Just tried water propagation and it worked perfectly! Thanks for the tips!",
        timestamp: new Date(Date.now() - 1800000),
      },
      {
        id: 2,
        username: "newplantparent",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=32&h=32&auto=format&fit=crop",
        text: "I've been wanting to propagate my pothos but wasn't sure how. This is so helpful!",
        timestamp: new Date(Date.now() - 86400000),
      },
    ],
    tags: ["propagation", "pothos", "plantips"],
    timestamp: new Date(Date.now() - 604800000),
  })

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      setArticle({
        ...article,
        comments: [
          ...article.comments,
          {
            id: Date.now(),
            username: "currentuser",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=32&h=32&auto=format&fit=crop",
            text: comment,
            timestamp: new Date(),
          },
        ],
      })
      setComment("")
    }
  }

  return (
    <div className="article__view">
      <div className="article__nav">
        <Link to="/" className="back__button">
          <FaArrowLeft /> Back
        </Link>
      </div>

      <div className="article__header">
        <h1>{article.title}</h1>
        <div className="article__meta">
          <Link to={`/profile/${article.username}`} className="article__author">
            <img src={article.userAvatar || "/placeholder.svg"} alt={article.username} />
            <span>{article.username}</span>
          </Link>
          <span className="article__date">
            {new Date(article.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="article__featured">
        <img src={article.image || "/placeholder.svg"} alt={article.title} />
      </div>

      <div className="article__content" dangerouslySetInnerHTML={{ __html: article.content }} />

      <div className="article__tags">
        {article.tags.map((tag) => (
          <Link key={tag} to={`/explore?tag=${tag}`} className="article__tag">
            #{tag}
          </Link>
        ))}
      </div>

      <div className="article__actions">
        <button className="action__button" onClick={handleLike}>
          {liked ? <FaHeart className="action__icon liked" /> : <FaRegHeart className="action__icon" />}
          <span>{liked ? article.likes + 1 : article.likes}</span>
        </button>
        <button className="action__button">
          <FaComment className="action__icon" />
          <span>{article.comments.length}</span>
        </button>
        <button className="action__button">
          <FaShare className="action__icon" />
          <span>Share</span>
        </button>
        <button className="action__button save__button" onClick={handleSave}>
          {saved ? <FaBookmark className="action__icon saved" /> : <FaRegBookmark className="action__icon" />}
          <span>{saved ? "Saved" : "Save"}</span>
        </button>
      </div>

      <div className="article__comments">
        <h3>Comments ({article.comments.length})</h3>

        <form className="comment__form" onSubmit={handleComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment__input"
          />
          <button type="submit" className="comment__submit" disabled={!comment.trim()}>
            Post
          </button>
        </form>

        <div className="comments__list">
          {article.comments.map((comment) => (
            <div key={comment.id} className="comment__item">
              <Link to={`/profile/${comment.username}`} className="comment__avatar">
                <img src={comment.avatar || "/placeholder.svg"} alt={comment.username} />
              </Link>
              <div className="comment__content">
                <div className="comment__header">
                  <Link to={`/profile/${comment.username}`} className="comment__username">
                    {comment.username}
                  </Link>
                  <span className="comment__time">
                    {new Date(comment.timestamp).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="comment__text">{comment.text}</p>
                <div className="comment__actions">
                  <button className="comment__like">Like</button>
                  <button className="comment__reply">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleView
