const butInstall = document.getElementById("buttonInstall"); // Store the HTML element

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event; // Store the triggered events
  butInstall.classList.toggle("hidden", false); // Remove the hidden class from the button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt; // Get the deferred prompt from the window object

  // Check if the promptEvent is not defined (falsy)
  if (!promptEvent) {
    return; // If not defined, return and exit the function
  }

  promptEvent.prompt(); // If promptEvent is defined (truthy), prompt the user
  window.deferredPrompt = null; // Set the deferredPrompt to null (reset it)
  butInstall.classList.toggle("hidden", true); // Add the hidden class to the button
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
