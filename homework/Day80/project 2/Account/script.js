document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser');

if (currentUser) {
    currentUser = JSON.parse(currentUser);
    document.getElementById('user-name').textContent = currentUser.username;
    document.getElementById('balance').textContent = users[currentUser.username].balance;
    updateTransactionHistory();
    showDashboard();
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (username && password && confirmPassword) {
        if (password === confirmPassword) {
            if (!users[username]) {
                users[username] = { password, balance: 0, transactions: [] };
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful!');
                loginAfterRegister(username, password);
            } else {
                alert('Username already exists.');
            }
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function loginAfterRegister(username, password) {
    if (users[username] && users[username].password === password) {
        currentUser = { username, password };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('user-name').textContent = username;
        document.getElementById('balance').textContent = users[username].balance;
        updateTransactionHistory();
        showDashboard();
    } else {
        alert('Invalid username or password.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username].password === password) {
        currentUser = { username, password };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('user-name').textContent = username;
        document.getElementById('balance').textContent = users[username].balance;
        updateTransactionHistory();
        showDashboard();
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        users[currentUser.username].balance += amount;
        users[currentUser.username].transactions.push({ type: 'Deposit', amount });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('balance').textContent = users[currentUser.username].balance;
        updateTransactionHistory();
    } else {
        alert('Enter a valid amount.');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && users[currentUser.username].balance >= amount) {
        users[currentUser.username].balance -= amount;
        users[currentUser.username].transactions.push({ type: 'Withdrawal', amount });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('balance').textContent = users[currentUser.username].balance;
        updateTransactionHistory();
    } else {
        alert('Enter a valid amount or insufficient balance.');
    }
}

function transfer() {
    const recipient = document.getElementById('recipient-username').value;
    const amount = parseFloat(document.getElementById('transfer-amount').value);
    if (users[recipient] && amount > 0 && users[currentUser.username].balance >= amount) {
        users[currentUser.username].balance -= amount;
        users[recipient].balance += amount;
        users[currentUser.username].transactions.push({ type: 'Transfer', amount, recipient });
        users[recipient].transactions.push({ type: 'Received', amount, from: currentUser.username });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('balance').textContent = users[currentUser.username].balance;
        updateTransactionHistory();
        alert('Transfer successful!');
    } else {
        alert('Invalid recipient or amount, or insufficient balance.');
    }
}

function updateTransactionHistory() {
    const history = document.getElementById('transaction-history');
    history.innerHTML = '';
    users[currentUser.username].transactions.forEach(transaction => {
        const li = document.createElement('li');
        if (transaction.type === 'Transfer') {
            li.textContent = `${transaction.type} to ${transaction.recipient}: $${transaction.amount}`;
        } else if (transaction.type === 'Received') {
            li.textContent = `${transaction.type} from ${transaction.from}: $${transaction.amount}`;
        } else {
            li.textContent = `${transaction.type}: $${transaction.amount}`;
        }
        history.appendChild(li);
    });
}

function clearTransactionHistory() {
    users[currentUser.username].transactions = [];
    localStorage.setItem('users', JSON.stringify(users));
    updateTransactionHistory();
    alert('Transaction history cleared!');
}

function showDashboard() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}
