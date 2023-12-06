let slotItems = document.querySelectorAll('.slotitem');
let continue1 = document.querySelector('.continue1');

// Function to reset the background color of all elements
function resetColors() {
  slotItems.forEach(item => {
    item.style.backgroundColor = "";
    item.style.color = "";
  });
  continue1.style.backgroundColor = ""; // Reset continue1 button color
}

// Add click event listener to each element
slotItems.forEach(slotitem => {
  slotitem.addEventListener('click', () => {
    // Reset the background color of all elements including continue1 button
    resetColors();
    
    // Set the background color of the clicked element to "lightblue"
    slotitem.style.backgroundColor = "#64bc6e";
    slotitem.style.color = "#fff";
    
    // Change the background color of continue1 button when a slotitem is clicked
    continue1.style.backgroundColor = "#0176c4";
    continue1.style.color = "#fff";
  });
});
