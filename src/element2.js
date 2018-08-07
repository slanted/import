(async () => {
    var polymer = await import('@polymer/polymer');

    class MyOtherElement extends polymer.PolymerElement {
        static get createProperties() {
            return {
                message: String
            }
        }

        static get template() {
            return polymer.html`
               This is the OTHER ELEMENT! 
            `;
        }

        constructor() {
            super();
        }

    }

    customElements.define('my-other-element', MyOtherElement);
})();