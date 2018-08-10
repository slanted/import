(async () => {
    var polymer = await import('@polymer/polymer');
    await import('./element3');

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
                <button>Element 2</button>
                <my-third></my-third>
            `;
        }

        constructor() {
            super();
        }

    }

    customElements.define('my-other-element', MyOtherElement);
})();