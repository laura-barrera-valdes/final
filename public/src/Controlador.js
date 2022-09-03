import * as components from "./components/index.js"
import data from '../data.js'
import "./components/Contador/Contador.js"

class PostContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open' })
    }

    connectedCallback(){/* recibe de Post */
        this.render();
    }

    render(){ /* likes= "${contar_likes} me gusta" */
        this.shadowRoot.innerHTML = `
        <my-post
        profph="./assets/id1/Profile-Image.png"
        nickname="mofi_bizcocha"
        post="./assets/id1/Post-Image.png"
        likes="2.000 Me gusta"
        views="11.000 Vistas"
        descr="Soy pefeta"
        comments="Ver los 10.992 comentarios"
        date="Hace 10 segundos" 
        ></my-post>
        `
    }
}

customElements.define('post-continer', PostContainer);