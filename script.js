// Phase 5: Click Logging & Slot Counter Automation

// Maximum trustee slots
const MAX_SLOTS = 10;

// Initialize slots remaining
let slotsRemaining = MAX_SLOTS;

// Function to log clicks
function logClick(elementName) {
    const timestamp = new Date().toISOString();
    console.log(`CLICK: ${elementName} | Time: ${timestamp}`);
    // Optional: send log to fstlsite@gmail.com via Formspree endpoint or webhook if desired
}

// Track form submission
const form = document.getElementById('investorForm');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default to simulate review process

    const formData = {
        name: form.name.value,
        email: form._replyto.value,
        country: form.country.value,
        capital_range: form.capital_range.value,
        statement: form.statement.value,
        timestamp: new Date().toISOString()
    };

    console.log('FORM SUBMISSION:', formData);

    // Decrement trustee slots
    if (slotsRemaining > 0) slotsRemaining--;

    // Show confirmation message
    document.getElementById('confirmation').style.display = 'block';

    // Update remaining slots visually (optional)
    const slotsNotice = document.getElementById('slotsNotice');
    if(slotsNotice) slotsNotice.innerText = `⚜ Slots Remaining: ${slotsRemaining} ⚜`;

    // Optional: disable form when full
    if(slotsRemaining === 0){
        form.querySelector('button').disabled = true;
        form.querySelector('button').innerText = "All Slots Filled";
    }

    // Here, optionally send form data to fstlsite@gmail.com via Formspree or other secure method
});

// Example: Track clicks on all buttons and select
document.querySelectorAll('button, select').forEach(el => {
    el.addEventListener('click', () => logClick(el.innerText || el.name));
});
