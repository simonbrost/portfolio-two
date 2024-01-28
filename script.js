function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// Check if dark mode preference is stored in local storage
const darkMode = localStorage.getItem("darkMode");

// Function to enable dark mode
function enableDarkMode() {
    // Check if dark mode preference is stored in local storage
    const darkMode = localStorage.getItem("darkMode");
  
    // Check if the body element exists
    const body = document.body;
    if (!body) {
      console.error("Body element not found.");
      return;
    }
  
    // Add 'dark-mode' class to body if not already present
    if (darkMode === null || darkMode !== "enabled") {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
  }

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
}

// Toggle dark mode on button click
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Apply dark mode on page load if it's enabled in local storage
if (darkMode === "enabled") {
  enableDarkMode();
}