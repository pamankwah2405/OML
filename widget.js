document.addEventListener('DOMContentLoaded', () => {
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

      const resizeIframe = () => {
        // Use documentElement.scrollHeight for a more reliable content height
        const contentHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        if (contentHeight > 1) {
          iframe.style.height = contentHeight + "px";
        }
      };

      // Adjust iframe height after content has loaded
      iframe.onload = () => {
        // Initial resize
        resizeIframe();

        // Use ResizeObserver to watch for content changes (e.g., from animations)
        const resizeObserver = new ResizeObserver(resizeIframe);
        
        // A short delay helps ensure the observer attaches after initial rendering
        setTimeout(() => {
          const targetNode = iframe.contentWindow.document.body;
          if (targetNode) resizeObserver.observe(targetNode);
        }, 300); // 300ms delay
      };

      // Add to the DOM
      this.appendChild(iframe);
    }
  }

  customElements.define('myhome-page', MyHomePage);
});
