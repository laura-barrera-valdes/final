import * as components from "./components/index.js"

class PostContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open' })
    }

    connectedCallback(){/* recibe de Post */
        this.render();
    }

    render(){ /*  */
        this.shadowRoot.innerHTML = `
        <my-post></my-post>
        `
    } 
}

customElements.define('post-continer', PostContainer);