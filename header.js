class Myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

<header class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html"
            ><img
              src="img/logo2.png"
              class="img fluid"
              height="60px"
              width="60px"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto gap-4 nav-fill">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">About Us</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Our vision</a></li>
                  <li>
                    <a class="dropdown-item" href="#"> Our Mission</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="project.html">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Teams</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Career</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html">Contact</a>
              </li>
              <button class="btn" type="button" name="btn">Contact</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `
    ;
    }
  }
  customElements.define("my-header", Myheader);