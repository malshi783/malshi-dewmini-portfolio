export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Malshi Dewmini. All rights reserved.
        </p>

        <a href="#home" aria-label="Back to the top of the page">
          Back to top <span aria-hidden="true">↑</span>
        </a>

        <strong>
          Thank you for taking the time to explore my work!
        </strong>
      </div>
    </footer>
  )
}