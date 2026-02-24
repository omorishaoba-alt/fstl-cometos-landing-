let slotsRemaining = 10;

// Slot tracking and submission
const form = document.getElementById('investment-form');
const slotsDisplay = document.getElementById('slots-remaining');
const message = document.getElementById('submission-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const selectedCapital = document.getElementById('capital').value;
  if (!selectedCapital) return;

  if (slotsRemaining <= 0) {
    alert("All 10 Trustee slots are filled. Please contact fstlsite@gmail.com for future opportunities.");
    return;
  }

  console.log(`Submission received for capital range: ${selectedCapital}`);
  slotsRemaining--;
  slotsDisplay.textContent = slotsRemaining;

  message.style.display = "block";
  form.reset();
});

// Q&A expand/collapse
const qaSection = document.getElementById('qa');
const questions = qaSection.querySelectorAll('h4');
questions.forEach(q => {
  const answer = q.nextElementSibling;
  if(answer && (answer.tagName === 'P' || answer.tagName === 'UL')) answer.style.display = 'none';
  q.style.cursor = 'pointer';
  q.addEventListener('click', () => {
    answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
  });
});

// Financials section engagement tracking
const financialSection = document.getElementById('financials');
financialSection.addEventListener('click', () => {
  console.log("Investor engaged with Financials section");
  // Optional: integrate server-side logging/email capture
});
