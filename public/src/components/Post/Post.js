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
        return ['profph', 'nickname', 'post', 'likes', 'views', 'descr', 'comments', 'date']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/Post/styles.css">
        <section class="cuadro">
        <image class="thepost" src="${this.post}"></image>
        <image class="profph" src="${this.profph}"></image>
        <image class="likeicon" src="./assets/icons/Like-icon-off.png"></image>
        <image class="commenticon" src="./assets/icons/Comment-icon.png"></image>
        <image class="shareicon" src="./assets/icons/Share-icon.png"></image>
        <image class="saveicon" src="./assets/icons/Save-icon.png"></image>
        <image class="settingsicon" src="./assets/icons/Settings-icon.png"></image>
        <h1 class="nickname">${this.nickname}</h1>
        <h2 class="nicknamedescr">${this.nickname}</h2>
        <h2 class="likes">${this.likes}</h2>
        <h2 class="views">${this.views}</h2>
        <h2 class="descr">${this.descr}</h2>
        <h3 class="comments">${this.comments}</h3>
        <h4 class="date">${this.date}</h4>
        </section>` 
    }
}

customElements.define('my-post', Post);
export default Post;