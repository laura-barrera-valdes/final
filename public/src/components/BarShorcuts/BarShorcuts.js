class BarShorcuts extends HTMLElement {

    constructor(){
        super(); 
        this.attachShadow({mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return ['inicioicon', 'exploraricon', 'mensajesicon', 'notificacionesicon', 'crearicon', 'myprofilephoto']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/BarShorcuts/styles.css">
        <section class="Shorcuts">
           
            <div class="div1">
            <image class="logo" src="./assets/icons/Instagram-logo.png"></image>
            </div>
            
            <div class="div2">
            <image class="homeicon" src="./assets/icons/Home-icon.png"></image>
            <h2 class="inicio">inicio</h2>
            </div>
            
            <div class="div3">
            <image class="searchicon" src="./assets/icons/Search-icon.png"></image>
            <h2 class="explorar">Explorar</h2>
            </div>
            
            <div class="div4">
            <image class="messageicon" src="./assets/icons/Messages-icon.png"></image>
            <h2 class="mensaje">Mensaje</h2>
            </div>
            
            <div class="div5">
            <image class="likeicon" src="./assets/icons/Like-icon-off.png"></image>
            <h2 class="notificaciones">Notificaciones</h2>
            </div>

            <div class="div6">
            <image class="createicon" src="./assets/icons/Create-icon.png"></image>
            <h2 class="crear">Crear</h2>
            </div>

            <div class="div7">
            <image class="profilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
            <h2 class="perfil">Perfil</h2>
            </div>

        </section>` 
    }
}

customElements.define('my-bar-shorcuts', BarShorcuts);
export default BarShorcuts;