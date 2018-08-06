import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {
    static get createProperties() {
        return {
            message: String
        }
    }

    static get template {
        return html`
            This is the message {{message}}
        `;
    }
}

customElements.define('my-element', MyElement);