import "./components/index.js"
import data from '../data.js'

class PostContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open' })
    }

    connectedCallback(){/* recibe de Post */
        this.render();
    }

    render(){ /* likes= "${contar_likes} me gusta" */
        const compts = data.map (({profph, nickname, post, likes, views, descr, comments, date}) =>
        `<my-bar-shorcuts>

        </my-bar-shorcuts>
        
        <my-bar-status>

        </my-bar-status>

        <my-bar-info>

        </my-bar-info>
        
        <my-post
        profph="${profph}"
        nickname="${nickname}"
        post="${post}"
        likes="${likes}"
        views="${views}"
        descr="${descr}"
        comments="${comments}"
        date="${date}"
        ></my-post>`)//recibe las variables que le meti en post
        this.shadowRoot.innerHTML = compts.join("")//añade los elementos de mi data en este caso
    }
}

customElements.define('post-container', PostContainer);