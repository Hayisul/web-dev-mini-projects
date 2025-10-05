const triggers = document.querySelectorAll(".acc-trigger"); // returns NodeList of DOM elements

// Attach listeners to all triggers
function initAccordion() {
  triggers.forEach(addClickListener);
}

// Add click event listerner to a single trigger
function addClickListener(btn) {
  function onClick() {
    handleClick(btn);
  }

  btn.addEventListener("click", onClick);
}

// Handle click event
function handleClick(btn) {
  const isOpen = btn.getAttribute("aria-expanded") === "true";

  // close all panel first
  closeAllPanels();

  // open the clicked panel if not already open
  if (!isOpen) {
    openPanel(btn);
  }
}

// Utility functions
function closeAllPanels() {
  triggers.forEach(closePanel);
}

function closePanel(btn) {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  btn.setAttribute("aria-expanded", "false");
  panel.hidden = true;
}

function openPanel(btn) {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  btn.setAttribute("aria-expanded", "true");
  panel.hidden = false;
}

// Run
initAccordion();
