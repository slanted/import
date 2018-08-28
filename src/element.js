import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {
    static get createProperties() {
        return {
            message: String
        }
    }

    static get template() {
        return html`
            <style>
                .myelement {
                    border:1px solid black;
                    margin: 10px;
                }
            </style>
            <div>
                This my-custom-element and <b>the </b>message [[message]]
            </div>
        `;
    }

    constructor() {
        super();
        this.message = "HELLO!";
    }

}

window.customElements.define('my-element', MyElement);
