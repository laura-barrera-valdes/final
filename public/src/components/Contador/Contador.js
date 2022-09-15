class MyCounter extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {// si quiero recibir
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {// si quiero recibir
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {//--va en todos los componentes
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
    }
  
    constructor() {//--va en todos los componentes
      super();
      this.attachShadow({ mode: "open" }); //--va en todos los componentes
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }
  
    render() {//--va en todos los componentes
      console.log("render");
      // adding external styles to the component
      this.shadowRoot.innerHTML = `
          <section>
            <h1>Counter</h1>
            ${this.count || 0}
            <button> Increment </button>
          </section>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }
  
  customElements.define("my-counter", MyCounter);
  export default MyCounter;