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
                <style>
                    button {
                        color: blue;
                        background: coral;
                    }
                </style>
                <button>This is the special button</button>
            `;
        }

        constructor() {
            super();
        }

    }

    customElements.define('my-other-element', MyOtherElement);
})();