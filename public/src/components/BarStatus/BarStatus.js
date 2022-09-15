class BarStatus extends HTMLElement {

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
        return ['profph1', 'prfph2', 'profph3', 'prfph4', 'profph5', 'prfph6']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/BarShorcuts/styles.css">
        <section class="Status">
           
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

customElements.define('my-bar-status', BarStatus);
export default BarStatus;