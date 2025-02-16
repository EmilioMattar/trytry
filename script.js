// Select form elements
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Simple client-side validation
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if all fields are filled
  if (name === "" || phone === "" || email === "" || message === "") {
    alert("נא למלא את כל השדות");
    return;
  }

  // Disable button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.innerText = "שולח...";

  // Simulate form submission process
  setTimeout(() => {
    alert("הטופס נשלח בהצלחה! תודה על פנייתך.");
    form.reset(); // Reset the form fields
    submitButton.disabled = false; // Re-enable button after submission
    submitButton.innerText = "שלח";
  }, 2000); // Simulate delay for form submission
  let currentSlide = 0;
  const images = document.querySelectorAll(".carousel-image");
  const totalSlides = images.length;

  // Initially set opacity of all images to 0 and show the first one
  images.forEach((img, index) => {
    img.style.opacity = "0";
  });
  images[0].style.opacity = "1";

  function showNextSlide() {
    // Fade out the current image
    images[currentSlide].style.opacity = "0";

    // Move to the next image
    currentSlide = (currentSlide + 1) % totalSlides;

    // Fade in the next image
    images[currentSlide].style.opacity = "1";
  }

  // Set an interval to change the image every 4 seconds
  setInterval(showNextSlide, 4000);
});
