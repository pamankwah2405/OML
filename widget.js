class MyHomePage extends HTMLElement {
  connectedCallback() {
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = "https://pamankwah2405.github.io/OML/";

    // Apply styles
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.overflow = "hidden";
    iframe.style.height = "800px"; // Set a reasonable initial height to avoid content flash

    // Listen for height messages from the iframe
    window.addEventListener("message", (event) => {
      // It's good practice to check the origin for security, but for now we'll check the message type.
      // In production, you might want to add: if (event.origin !== "https://pamankwah2405.github.io") return;

      if (event.data && event.data.type === "OML_HEIGHT") {
        const newHeight = event.data.height;
        iframe.style.height = newHeight + "px";
      }
    });

    // Add the configured iframe to the custom element
    this.appendChild(iframe);
  }
}

customElements.define('myhome-page', MyHomePage);
