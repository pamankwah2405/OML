class MyHomePage extends HTMLElement {
  connectedCallback() {
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = "https://pamankwah2405.github.io/OML/";
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.overflow = "hidden";
    iframe.style.height = "1px"; // Start with a minimal height to avoid a large initial empty space.

    // Adjust iframe height after content has loaded
    iframe.onload = () => {
      // Use documentElement.scrollHeight for a more reliable content height
      const contentHeight = iframe.contentWindow.document.documentElement.scrollHeight;
      iframe.style.height = contentHeight + "px";
    };

    // Add to the DOM
    this.appendChild(iframe);
  }
}

customElements.define('myhome-page', MyHomePage);
