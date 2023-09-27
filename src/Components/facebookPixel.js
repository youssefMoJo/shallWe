// facebookPixel.js

export const initFacebookPixel = () => {
  if (typeof window !== "undefined") {
    // Define the fbq function
    window.fbq =
      window.fbq ||
      function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    // Initialize and track the PageView event
    window.fbq("init", "1395154434745885");
    window.fbq("track", "PageView");

    // Load the Facebook Pixel asynchronously
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.async = true;
    document.head.appendChild(script);
  }
};
