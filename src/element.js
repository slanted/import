(async ()=> {
var polymer = await import('@polymer/polymer');
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