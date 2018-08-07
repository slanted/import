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
            <div>
                This is <b>the </b>message [[message]]
            </div>
            <div>
                Here is the other element:
                <my-other-element></my-other-element>
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