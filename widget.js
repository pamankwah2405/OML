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
    iframe.style.height = "800px"; // Set initial height

    // Listen for height messages from the iframe
    window.addEventListener("message", (event) => {
      // Security check (optional, but good practice)
      if (event.origin !== "https://pamankwah2405.github.io") return;

      if (event.data && event.data.type === "OML_HEIGHT") {
        const newHeight = event.data.height;
        iframe.style.height = newHeight + "px";

        // 🧩 Adjust the Wix container height to match the iframe
        const container = this.parentElement;
        if (container) {
          container.style.height = newHeight + "px";
          container.style.minHeight = "0";
        }

        // Debug log (optional, remove later)
        console.log(`Resized OML iframe to ${newHeight}px`);
      }
    });

    // Add the configured iframe to the custom element
    this.appendChild(iframe);
  }
}

customElements.define('myhome-page', MyHomePage);
