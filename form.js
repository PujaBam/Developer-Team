class Myform extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div data-aos="fade-up">
        <form class="d-flex mt-4 gap-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Enter Your Full Name"
          />
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your email"
          />
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Number"
          />
        </form>
        <label for="text-area">Message</label>
        <textarea
          name=""
          class="form-control"
          id=""
          rows="5"
          placeholder="Additional Comments..."
        ></textarea>
        <div class="mt-4 text-center">
          <button type="button" class="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    
    `
    ;
    }
  }
  customElements.define("my-form", Myform);