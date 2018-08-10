(async () => {
    var polymer = await import('@polymer/polymer');

    class ThirdElement extends polymer.PolymerElement {
        static get createProperties() {
            return {
                message: String
            }
        }

        static get template() {
            return polymer.html`
                <style>
                    button {
                        color: white;
                        background: green;
                    }
                </style>
                <button>Third Element</button> change
            `;
        }

        constructor() {
            super();
        }

    }

    customElements.define('my-third', ThirdElement);
})();