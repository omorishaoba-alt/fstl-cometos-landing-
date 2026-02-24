const MAX_SLOTS = 10;
let slotsRemaining = MAX_SLOTS;

function logClick(elementName){
    const timestamp = new Date().toISOString();
    console.log(`CLICK: ${elementName} | Time: ${timestamp}`);
}

const form = document.getElementById('investorForm');
form.addEventListener('submit', function(e){
    e.preventDefault(); // simulate review process
    const formData = {
        name: form.name.value,
        email: form._replyto.value,
        country: form.country.value,
        capital_range: form.capital_range.value,
        statement: form.statement.value,
        timestamp: new Date().toISOString()
    };
    console.log('FORM SUBMISSION:', formData);
    if(slotsRemaining > 0) slotsRemaining--;
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('slotsNotice').innerText = `⚜ Slots Remaining: ${slotsRemaining} ⚜`;
    if(slotsRemaining === 0){
        form.querySelector('button').disabled = true;
        form.querySelector('button').innerText = "All Slots Filled";
    }
});

document.querySelectorAll('button, select').forEach(el=>{
    el.addEventListener('click', ()=> logClick(el.innerText || el.name));
});
