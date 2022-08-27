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
        <my-post
        profph="./assets/Profile-Photo.png"
        nickname="mofi_bizcocha"
        post="./assets/Mofi.png"
        views="2m views"
        descr="Soy pefeta"
        comments="View all 10k comments"
        date="now" 
        ></my-post>
        `
    } 
}

customElements.define('post-continer', PostContainer);