// Select all boxes
const boxes = document.querySelectorAll('[data-box]');

// Loop through each box
boxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');

  box.addEventListener('click', () => {
    // Remove 'active' from all boxes
    boxes.forEach(b => b.classList.remove('active'));

    // Add 'active' to the clicked one
    box.classList.add('active');

    // Also check the radio button
    radio.checked = true;
  });
});
