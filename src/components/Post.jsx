"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark } from "react-icons/fa"
import TimeAgo from "react-timeago"

function Post({ post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState(post.comments || [])

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          username: "currentuser",
          text: comment,
          timestamp: new Date(),
        },
      ])
      setComment("")
    }
  }

  return (
    <div className="post">
      <div className="post__header">
        <Link to={`/profile/${post.username}`} className="post__user">
          <img src={post.userAvatar || "/placeholder.svg"} alt={post.username} className="post__avatar" />
          <div className="post__userInfo">
            <h3>{post.username}</h3>
            {post.location && <span className="post__location">{post.location}</span>}
          </div>
        </Link>
        <button className="post__more">•••</button>
      </div>

      <div className="post__content">
        {post.type === "article" ? (
          <div className="post__article">
            <h2>{post.title}</h2>
            <p className="post__excerpt">{post.excerpt}</p>
            <Link to={`/article/${post.id}`} className="read__more">
              Read more
            </Link>
          </div>
        ) : (
          <img src={post.image || "/placeholder.svg"} alt="Post content" className="post__image" />
        )}
      </div>

      <div className="post__footer">
        <div className="post__buttons">
          <button className="post__button" onClick={handleLike}>
            {liked ? <FaHeart className="post__icon liked" /> : <FaRegHeart className="post__icon" />}
            <span>{liked ? post.likes + 1 : post.likes}</span>
          </button>
          <button className="post__button" onClick={() => setShowComments(!showComments)}>
            <FaComment className="post__icon" />
            <span>{comments.length}</span>
          </button>
          <button className="post__button">
            <FaShare className="post__icon" />
          </button>
          <button className="post__button save__button" onClick={handleSave}>
            {saved ? <FaBookmark className="post__icon saved" /> : <FaRegBookmark className="post__icon" />}
          </button>
        </div>

        <div className="post__caption">
          <Link to={`/profile/${post.username}`} className="post__username">
            {post.username}
          </Link>{" "}
          {post.caption}
        </div>

        {post.tags && (
          <div className="post__tags">
            {post.tags.map((tag) => (
              <Link key={tag} to={`/explore?tag=${tag}`} className="post__tag">
                #{tag}
              </Link>
            ))}
          </div>
        )}

        <p className="post__timestamp">
          <TimeAgo date={post.timestamp} />
        </p>

        {showComments && (
          <div className="post__comments">
            {comments.map((comment) => (
              <div key={comment.id} className="post__comment">
                <Link to={`/profile/${comment.username}`} className="comment__username">
                  {comment.username}
                </Link>
                <span className="comment__text">{comment.text}</span>
                <span className="comment__timestamp">
                  <TimeAgo date={comment.timestamp} />
                </span>
              </div>
            ))}

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
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
