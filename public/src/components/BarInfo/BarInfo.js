class BarInfo extends HTMLElement {

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

    static get observedAttributes(){//va lo que puede llegar a cambiar de valor/estado/color...
        return ['profph', 'nickname', 'name', 'cambiar']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/BarShorcuts/styles.css">
        <section class="Info">
           
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

customElements.define('my-bar-info', BarInfo);
export default BarInfo;