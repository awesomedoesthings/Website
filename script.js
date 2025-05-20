document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from being followed from the button

      const textToCopy = button.getAttribute('data-copy-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Change button text and add a 'copied' class for some cool feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');

        // Revert text and remove class after a short delay
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 1000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text. Please try again or copy manually.');
      });
    });
  });
});