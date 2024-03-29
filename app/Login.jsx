import "./styles/login.css"

export default function Login() {
  return (
    <>
      <main>
        <div id="image">
          <img src="../logo.svg" alt="logo" />
        </div>

        <form>
          <img src="../logo-dark.svg" alt="secret-logo" id="secret-logo" />
          <h2>Login</h2>
          <h3>Welcome back</h3>
          <p>Welcome back! Please enter your details.</p>

          <div id="inputs">
            <label htmlFor="email-input">
              Email
              <input
                type="email"
                id="email-input"
                about="Enter your email here"
                placeholder="Write your email here"
              />
            </label>

            <label htmlFor="password-input">
              Password
              <input
                type="password"
                id="password-input"
                about="Enter your password here"
                placeholder="Enter your password here"
                min={8}
                minLength={8}
              />
            </label>
          </div>

          <div id="login-options">
            <label id="remember-me">
              <input type="checkbox" />
              Remember-me
            </label>

            <a href="#">Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <a href="#">Don't have an account? Create one now.</a>
        </form>
      </main>
    </>
  )
}
