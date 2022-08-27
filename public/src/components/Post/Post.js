class Post extends HTMLElement {

    static get observedAtributes(){
        return ['name', 'prof-ph', 'post', 'views', 'descr', 'date', 'comments']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/Post/styles.css"
        <section class="cuadro">
            
        </section>` 
    }
}

customElements.define('my-post', Post);
export default Post;