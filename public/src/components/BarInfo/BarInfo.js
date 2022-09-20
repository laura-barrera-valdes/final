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
        return ['profph', 'nickname', 'name', 'cambiar', 'myprofilephoto']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/BarShorcuts/styles.css">
        <section class="Info">
           
            <div class="myinfo">
                <div class="myinfo_1"
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="myinfo_2"
                <h2 class="mynickname">lau_bv_99</h2>
                <h2 class="myname">Laura Barrera Valdes</h2>
                </div>

                <div class="myinfo_3"
                <h2 class="cambiar">Cambiar</h2>
                </div>
            </div>

            <div class="divsugerencias">
            <h2 class="sugerencias">Sugerencias para ti</h2>
            <h2 class="vertodo">Ver todo</h2>
            </div>
            
            <div class="div1">
                <div class="div1_1">
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="div1_2">
                <h2 class="name1">miguel_bt</h2>
                <h2 class="tesigue1">Te sigue</h2>
                </div>

                <div class="div1_3">
                <h2 class="seguir">Seguir</h2>
                </div>
            </div>

            <div class="div2">
                <div class="div2_1">
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="div2_2">
                <h2 class="name2">miguel_bt</h2>
                <h2 class="tesigue1">Te sigue</h2>
                </div>

                <div class="div2_3">
                <h2 class="seguir">Seguir</h2>
                </div>
            </div>

            <div class="div3">
                <div class="div3_1">
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="div3_2">
                <h2 class="name3">miguel_bt</h2>
                <h2 class="tesigue1">Te sigue</h2>
                </div>

                <div class="div3_3">
                <h2 class="seguir">Seguir</h2>
                </div>
            </div>

            <div class="div4">
                <div class="div4_1">
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="div4_2">
                <h2 class="name4">miguel_bt</h2>
                <h2 class="tesigue1">Te sigue</h2>
                </div>

                <div class="div4_3">
                <h2 class="seguir">Seguir</h2>
                </div>
            </div>

            <div class="div5">
                <div class="div5_1">
                <image class="myprofilephoto" src="./assets/myprof/Myprofph.jpeg"></image>
                </div>

                <div class="div5_2">
                <h2 class="name5">miguel_bt</h2>
                <h2 class="tesigue1">Te sigue</h2>
                </div>

                <div class="div5_3">
                <h2 class="seguir">Seguir</h2>
                </div>
            </div>

            <div class="footer">
            <h2 class="infofooter">Información - Ayuda - Prensa - API - Empleo - Privacidad - Condiciones - Ubicaciones - Idioma</h2>
            <h2 class="creditos">© 2022 INSTAGRAM FROM META</h2>

        </section>` 
    }
}

customElements.define('my-bar-info', BarInfo);
export default BarInfo;