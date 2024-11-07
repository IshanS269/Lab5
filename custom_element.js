alert("Ishan is here!");

class Centre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align: center;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", Centre);

class Color extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="color: blue;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-blue", Color);




