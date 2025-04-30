"use client"

import { useState } from "react"
import Post from "../components/Post"
import Sidebar from "../components/SideBar"
import { FaSeedling } from "react-icons/fa"

function Home() {
  // Use real avatar images
  const defaultAvatar = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=60&h=60&auto=format&fit=crop"

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "plantlover123",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=60&h=60&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1585533337541-1549f1274711?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "My new monstera deliciosa is thriving! 🌿 #plantsofinstagram #monstera #plantcare",
      likes: 245,
      comments: [
        {
          id: 1,
          username: "greenthumb",
          text: "Looks amazing! How old is it?",
          timestamp: new Date(Date.now() - 3600000),
        },
        {
          id: 2,
          username: "plantparent",
          text: "Beautiful fenestration on those leaves!",
          timestamp: new Date(Date.now() - 7200000),
        },
      ],
      timestamp: new Date(Date.now() - 7200000),
      tags: ["monstera", "plantsofinstagram", "plantcare"],
      location: "Urban Jungle, NYC",
    },
    {
      id: 2,
      username: "greenthumb",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&h=60&auto=format&fit=crop",
      type: "article",
      title: "5 Easy Ways to Propagate Your Pothos",
      excerpt:
        "Learn how to multiply your pothos plants with these simple propagation techniques that anyone can do at home...",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&h=600&auto=format&fit=crop",
      likes: 189,
      comments: [
        {
          id: 3,
          username: "plantlover123",
          text: "Just tried water propagation and it worked perfectly!",
          timestamp: new Date(Date.now() - 1800000),
        },
      ],
      timestamp: new Date(Date.now() - 14400000),
      tags: ["propagation", "pothos", "plantips"],
    },
    {
      id: 3,
      username: "urbanjungler",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&h=600&auto=format&fit=crop",
      caption:
        "My living room jungle is complete! Spent the weekend rearranging all my plant babies to maximize light exposure. What do you think? #urbanjungle #plantdecor #indoorplants",
      likes: 312,
      comments: [
        {
          id: 4,
          username: "plantparent",
          text: "Absolutely gorgeous setup! What's that tall one in the corner?",
          timestamp: new Date(Date.now() - 5400000),
        },
      ],
      timestamp: new Date(Date.now() - 28800000),
      tags: ["urbanjungle", "plantdecor", "indoorplants"],
      location: "Home Sweet Home",
    },
  ])

  const user = {
    username: "currentuser",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=60&h=60&auto=format&fit=crop",
    bio: "Plant enthusiast | Urban gardener | Sustainability advocate",
  }

  const suggestions = [
    {
      id: 1,
      username: "plantparent",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Rare plant collector",
    },
    {
      id: 2,
      username: "succulentlover",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Desert plants specialist",
    },
    {
      id: 3,
      username: "botanicalgardener",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=60&h=60&auto=format&fit=crop",
      bio: "Professional horticulturist",
    },
  ]

  return (
    <div className="home">
      <div className="home__feed">
        <div className="stories">
          <div className="story story__create">
            <div className="story__avatar">
              <FaSeedling className="story__plus" />
            </div>
            <span>New Post</span>
          </div>
          {[
            {
              username: "plantlover123",
              avatar:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=60&h=60&auto=format&fit=crop",
            },
            {
              username: "greenthumb",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&h=60&auto=format&fit=crop",
            },
            {
              username: "urbanjungler",
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&h=60&auto=format&fit=crop",
            },
            {
              username: "succulentlover",
              avatar:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=60&h=60&auto=format&fit=crop",
            },
            {
              username: "botanicalgardener",
              avatar:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=60&h=60&auto=format&fit=crop",
            },
          ].map((user, index) => (
            <div key={index} className="story">
              <div className="story__avatar">
                <img src={user.avatar || "/placeholder.svg"} alt={user.username} className="story__avatar-img" />
              </div>
              <span>{user.username.length > 10 ? user.username.substring(0, 10) + "..." : user.username}</span>
            </div>
          ))}
        </div>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Sidebar user={user} suggestions={suggestions} />
    </div>
  )
}

export default Home
