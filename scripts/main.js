// Login and Registration Forms (Mock Functionality)
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`Welcome back, ${username}!`);
  window.location.href = 'index.html'; // Redirect to landing page
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('new-username').value;
  alert(`Welcome, ${username}! You are now registered.`);
  window.location.href = 'index.html'; // Redirect to landing page
});

document.getElementById('google-login').addEventListener('click', function () {
  alert('Google Sign-In will be implemented later!');
});

// Budgeting Tool
document.getElementById('budget-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  const budget = income - expenses;
  document.getElementById('budget-result').textContent = `Remaining Budget: $${budget.toFixed(2)}`;
});

// Currency Converter
document.getElementById('currency-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  // Mock conversion rates (replace with real API later)
  const rates = { USD: 1, EUR: 0.85, INR: 75 };
  const convertedAmount = (amount / rates[from]) * rates[to];
  document.getElementById('conversion-result').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${to}`;
});

// Quiz Button
document.getElementById('start-quiz')?.addEventListener('click', function () {
  alert('Quiz functionality will be added later!');
});