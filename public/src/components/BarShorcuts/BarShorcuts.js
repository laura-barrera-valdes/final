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
        return ['inicioicon', 'inicio', 'exploraricon', 'explorar', 'mensajesicon', 'notificacionesicon', 'notificaciones', 'crearicon', 'crear', 'profph', 'perfil']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/BarShorcuts/styles.css">
        <section class="Shorcuts">
           
            <div class="div1">

            </div>

            <div class="div2">

            </div>
            
            <div class="div3">

            </div>
            
            <div class="div4">

            </div>
            
            <div class="div5">

            </div>

        </section>` 
    }
}

customElements.define('my-bar-shorcuts', BarShorcuts);
export default BarShorcuts;