class Post extends HTMLElement {

    constructor(){
        super(); 
        this.attachShadow({mode: 'open' })
    }

    connectedCallback() {
        console.log(this.nickname);
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return ['profph', 'nickname', 'post', 'views', 'descr', 'comments', 'date']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/Post/styles.css"
        <section class="cuadro">
        <image class="mypost" src="${this.post}"></image>
        <image class="profph" src="${this.profph}"></image>
        <image class="likeicon" src="./assets/Like-icon-off.png"></image>
        <image class="commenticon" src="./assets/Comment-icon.png"></image>
        <image class="shareicon" src="./assets/Share-icon.png"></image>
        <image class="saveicon" src="./assets/Save-icon.png"></image>
        <image class="settingsicon" src="./assets/Settings-icon.png"></image>
        <h1 class="nickname">"${this.nickname}"</h1>
        <h1 class="views">${this.views}</h1>
        <h1 class="descr">${this.descr}</h1>
        <h1 class="comments">${this.comments}</h1>
        <h1 class="date">${this.date}</h1>
        </section>` 
    }
}

customElements.define('my-post', Post);
export default Post;