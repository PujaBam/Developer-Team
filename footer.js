class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <section class="top-footer">
        <div class="container">
          <div class="row pt-4">
            <div class="col-12 col-lg-4">
              <img height="90" width="90" src="img/logo2.png" />
              <div class="input-group d-flex">
                <form class="d-flex gap-3 mt-3">
                  <input
                    class="form-control"
                    placeholder="Your email address"
                    aria-label="Recipient's username"
                  />
                  <button class="btn" type="button" name="btn">Send</button>
                </form>
              </div>
            </div>

            <div class="col-12 col-lg-2">
              <h4>Our Links</h4>

              <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="service.html">Project</a></li>
                <li><a href="blog.html">Blogs</a></li>
                <li><a href="career.html">Career</a></li>
                <li><a href="gallaery.html">Gallery</a></li>
              </ul>
            </div>

            <div class="col-12 col-lg-3">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i>Web Design</li>
                <li><i class="bi bi-chevron-right"></i>App Development</li>
                <li><i class="bi bi-chevron-right"></i>Content Writer</li>
                <li><i class="bi bi-chevron-right"></i>SEO</li>
              </ul>
            </div>

            <div class="col-12 col-lg-3">
              <h4>Recent Blog</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i>content marketing</li>
                <li>
                  <i class="bi bi-chevron-right"></i>account based marketing
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>marketing colabration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="footer p-0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12 d-flex justify-content-around">
              <p>© 2020 Copyright: Webdevelopment.com</p>

              <ul class="mt-3">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
      `
    ;
    }
  }
  customElements.define("my-footer", MyFooter);