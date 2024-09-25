const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Admin } = require('../models/admin.model');

const createToken = (uuid) => {
  return jwt.sign({ uuid }, process.env.JWT_SECRET_KEY, {
    expiresIn: '3d'
  });
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

const sendHashedPassword = async (req, res) => {
  const { password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    res.status(200).json({ hashedPassword });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Error hashing password' });
  }
};


const checkToken = async (req, res) => {
  let token = req.headers['authorization'];
  console.log(token);
  if(token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
}
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.status(200).json({ valid: true });
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ valid: false, message: 'Token is invalid' });
  }
};          




const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Invalid username' });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = createToken(user.uuid);
    res.json({ token });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { AdminLogin, checkToken, sendHashedPassword };
