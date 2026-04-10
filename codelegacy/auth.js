// API Configuration
const API_BASE = 'http://localhost:5000/api';

async function parseApiResponse(response) {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Unexpected response from server: ${text}`);
  }
}

// Authentication API calls
const authAPI = {
  register: async (fullname, email, password, confirmPassword, userType = 'student') => {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
        userType,
      }),
    });

    const data = await parseApiResponse(response);
    if (!response.ok) {
      throw new Error(data.message || `Registration failed (${response.status})`);
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  },

  login: async (email, password) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await parseApiResponse(response);
    if (!response.ok) {
      throw new Error(data.message || `Login failed (${response.status})`);
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getUser: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return null;
      }

      const response = await fetch(`${API_BASE}/auth/me`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await parseApiResponse(response);
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch user');
      }

      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  getStoredUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};
