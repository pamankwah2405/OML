class MyHomePage extends HTMLElement {
  connectedCallback() {
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = "https://pamankwah2405.github.io/OML/";
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.overflow = "hidden";
    iframe.style.height = "100vh"; // initial height

    // Prevent infinite growth
    iframe.onload = () => {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
    };

    // Add to the DOM
    this.appendChild(iframe);
  }
}

customElements.define('myhome-page', MyHomePage);
