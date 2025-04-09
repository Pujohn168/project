const autoWriteElement = document.getElementById("autoWrite");
const phrases = ["Digital Design", "Front-end Developer", "Sale Showroom"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function autoWrite() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--; // Remove characters
  } else {
    charIndex++; // Add characters
  }

  autoWriteElement.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at the end of the phrase
    isDeleting = true;
    setTimeout(autoWrite, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Move to the next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
    setTimeout(autoWrite, 500); // Pause before typing the next phrase
  } else {
    setTimeout(autoWrite, isDeleting ? 50 : 100); // Typing and deleting speed
  }
}

// Start the auto-write effect
autoWrite();
