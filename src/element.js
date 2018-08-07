(async ()=> {
var polymer = await import(/* webpackChunkName: "polymer" */ '@polymer/polymer');
var otherElement = await import('./element2.js');

class MyElement extends polymer.PolymerElement {
    static get createProperties() {
        return {
            message: String
        }
    }

    static get template() {
        return polymer.html`
            <style>
                .myelement {
                    border:1px solid black;
                    margin: 10px;
                }
            </style>
            <div class="myelement">
            <div>
                This my-custom-element and <b>the </b>message [[message]]
            </div>
            <div>
                Here is my-other-element included in this element:
                <my-other-element></my-other-element>
            </div>
            </div>
        `;
    }

    constructor() {
        super();
        this.message = "HELLO!";
    }

}

customElements.define('my-element', MyElement);
})();