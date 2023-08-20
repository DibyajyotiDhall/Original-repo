t users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
];

// Function to check if a user exists in the database
function findUser(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

// Function to handle the login process
function login(username, password) {
  const user = findUser(username, password);
  if (user) {
    return { success: true, message: 'Login success', user: user.username };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}

// Example usage
const username = 'user1';
const password = 'password1';

const loginResult = login(username, password);

if (loginResult.success) {
  console.log(loginResult.message);
  console.log(`Welcome, ${loginResult.user}!`);
} else {
  console.log(loginResult.message);
}

