const bcrypt = require('bcryptjs');

// Replace 'your_password' with the actual password you want to hash
const password = 'your_password';
const hashedPassword = bcrypt.hashSync(password, 10);

console.log('Hashed Password:', hashedPassword);