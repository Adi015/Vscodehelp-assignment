const img = document.querySelectorAll('.img1');

// Function to reset the background color of all img
function resetimg1Colors() {
  img.forEach(img1 => {
    img1.style.backgroundColor = "";
  });
}

img.forEach((img1, index) => {
  img1.addEventListener('click', () => {
    resetimg1Colors(); // Reset the background color of all img
    
    // Set the background color of the clicked img1 to "green"
    img1.style.backgroundColor = "#64bc6e";
    
    // Reset the background color of the previous img1
    // if (index > 0) {
    //   img[index - 1].style.backgroundColor = "";
    //   img[index - 1].style.color = "";
    // }
  });
});
