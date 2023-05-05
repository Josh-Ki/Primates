// Get all the sections
const sections = document.querySelectorAll(".section");

// Define a function to check if a section is in the viewport
function isInViewport(element) {
  // Get the bounding rectangle of the element
  const rect = element.getBoundingClientRect();
  // Return true if the element is at least partially visible
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Define a function to add a class to a section if it is in the viewport
function checkVisibility() {
  // Loop through each section
  for (let section of sections) {
    // If the section is in the viewport, add a class of visible
    if (isInViewport(section)) {
      section.classList.add("visible");
    }
  }
}

// Add an event listener to the window to check the visibility of sections when scrolling
window.addEventListener("scroll", checkVisibility);