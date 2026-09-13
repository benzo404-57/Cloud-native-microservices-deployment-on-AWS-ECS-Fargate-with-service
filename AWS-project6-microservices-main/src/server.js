const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Health Check
app.get('/api/auth/health', (req, res) => {
  res.status(200).json({ status: 'Auth Service is healthy on ECS! and pipeline is working ' });
});

// Mock Login Endpoint
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password123') {
    res.status(200).json({ message: 'Authentication successful!', token: 'mock-jwt-token-abc' });
  } else {
    res.status(401).json({ message: 'Access Denied: Invalid credentials' });
  }
});

app.listen(port, () => console.log(`Auth service listening on port ${port}`));
