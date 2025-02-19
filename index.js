const form = document.querySelector('form');
const userAmountDisplay = document.getElementById('user-amount-display');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    const amount = document.querySelector('input[name="amount"]').value;
    localStorage.setItem('userAmount', amount); // Store the amount in local storage
    userAmountDisplay.textContent = `Your amount: ${amount}`; // Display the amount
});

const storedAmount = localStorage.getItem('userAmount');
if (storedAmount) {
    userAmountDisplay.textContent = `Your amount: ${storedAmount}`; // Display the stored amount
}