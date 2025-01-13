import bcrypt from 'bcrypt';

const password = 'pp';

(async () => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);
  } catch (error) {
    console.error('Hashing error:', error);
  }
})();
