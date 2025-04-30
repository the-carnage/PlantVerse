"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaImage, FaFileAlt, FaBook, FaTags, FaMapMarkerAlt } from "react-icons/fa"

function CreatePost() {
  const navigate = useNavigate()
  const [postType, setPostType] = useState("photo")
  const [formData, setFormData] = useState({
    caption: "",
    image: null,
    imagePreview: null,
    title: "",
    content: "",
    tags: "",
    location: "",
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // For demo purposes, just navigate back to home
    navigate("/")
  }

  return (
    <div className="create__post">
      <div className="create__header">
        <h1>Create New Post</h1>
        <div className="post__types">
          <button
            className={`type__button ${postType === "photo" ? "active" : ""}`}
            onClick={() => setPostType("photo")}
          >
            <FaImage /> Photo
          </button>
          <button
            className={`type__button ${postType === "article" ? "active" : ""}`}
            onClick={() => setPostType("article")}
          >
            <FaFileAlt /> Article
          </button>
          <button
            className={`type__button ${postType === "guide" ? "active" : ""}`}
            onClick={() => setPostType("guide")}
          >
            <FaBook /> Plant Guide
          </button>
        </div>
      </div>

      <form className="create__form" onSubmit={handleSubmit}>
        {postType === "photo" && (
          <div className="form__group">
            <label className="form__label">Upload Photo</label>
            <div className="image__upload">
              {formData.imagePreview ? (
                <div className="image__preview">
                  <img src={formData.imagePreview || "/placeholder.svg"} alt="Preview" />
                </div>
              ) : (
                <div className="upload__placeholder">
                  <FaImage className="upload__icon" />
                  <p>Click to upload an image</p>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} className="file__input" />
            </div>
          </div>
        )}

        {(postType === "article" || postType === "guide") && (
          <>
            <div className="form__group">
              <label htmlFor="title" className="form__label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a descriptive title..."
                className="form__input"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="content" className="form__label">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Share your knowledge, tips, or experience..."
                className="form__textarea"
                rows="10"
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label">Featured Image (Optional)</label>
              <div className="image__upload">
                {formData.imagePreview ? (
                  <div className="image__preview">
                    <img src={formData.imagePreview || "/placeholder.svg"} alt="Preview" />
                  </div>
                ) : (
                  <div className="upload__placeholder">
                    <FaImage className="upload__icon" />
                    <p>Click to upload an image</p>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="file__input" />
              </div>
            </div>
          </>
        )}

        {postType === "photo" && (
          <div className="form__group">
            <label htmlFor="caption" className="form__label">
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Write a caption..."
              className="form__textarea"
              rows="4"
            />
          </div>
        )}

        <div className="form__group">
          <label htmlFor="tags" className="form__label">
            <FaTags className="form__icon" /> Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Add tags separated by commas (e.g., monstera, propagation, indoor)"
            className="form__input"
          />
        </div>

        <div className="form__group">
          <label htmlFor="location" className="form__label">
            <FaMapMarkerAlt className="form__icon" /> Location (Optional)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Add a location"
            className="form__input"
          />
        </div>

        <div className="form__actions">
          <button type="button" className="cancel__button" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="submit__button">
            Share
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
