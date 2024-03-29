"use client"
import "../app/styles/signup.css"
import axios from "axios"
import React, { useState } from "react"

export default function Signup({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.target.reset()

    try {
      await onSubmit(formData)
    } catch (error) {
      console.error("Erro ao enviar dados:", error)
    }
  }

  return (
    <main>
      <div id="image">
        <img src="../logo.svg" alt="logo" />
      </div>

      <form onSubmit={handleSubmit} method="post">
        <img src="../logo-dark.svg" alt="secret-logo" id="secret-logo" />

        <h2>Sign up</h2>

        <h3>
          Welcome to Share<span>ly</span>
        </h3>

        <p>
          Here is the place where you can share your experiences and even make
          new friends
        </p>

        <div id="inputs">
          <label htmlFor="username-input">
            Create a username (could be your real name)
            <input
              type="text"
              id="username-input"
              name="username"
              about="Enter your username here"
              placeholder="Write your username here"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email-input">
            Email
            <input
              type="email"
              id="email-input"
              name="email"
              about="Enter your email here"
              placeholder="Write your email here"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="password-input">
            Create a password (minimum 8 characters)
            <input
              type="password"
              id="password-input"
              name="password"
              about="Enter your password here"
              placeholder="Enter your password here"
              min={8}
              minLength={8}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Login</button>

        <a href="#">Already have an account? Then log in.</a>
      </form>
    </main>
  )
}
