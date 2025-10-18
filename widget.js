class MyHomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <iframe 
        src="https://pamankwah2405.github.io/OML/"
        style="
          width: 100%;
          height: 100vh;
          border: none;
          overflow: hidden;
        ">
      </iframe>
    `;
  }
}

customElements.define('myhome-page', MyHomePage);
