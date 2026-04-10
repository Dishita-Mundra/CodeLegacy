# Getting Started - Code Legacy Authentication System

## ⚡ Quick Start (5 Minutes)

### Step 1: Install Node.js and MongoDB

1. **Node.js:**
   - Download: https://nodejs.org/ (Get LTS version)
   - Run installer, follow prompts
   - Verify: Open Command Prompt and type `node --version`

2. **MongoDB:**
   - Download: https://www.mongodb.com/try/download/community
   - Run installer, follow prompts
   - Make sure MongoDB service is running (Windows: should start automatically)

### Step 2: Install Dependencies

Open Command Prompt/PowerShell in project folder and run:

```bash
npm install
```

This installs all required packages (Express, MongoDB, JWT, bcrypt, etc.)

### Step 3: Start the Server

```bash
npm start
```

You should see:
```
MongoDB connected successfully
Server is running on http://localhost:5000
```

### Step 4: Access the App

Open your browser and go to:
- **Home:** http://localhost:5000
- **Login:** http://localhost:5000/login
- **Register:** http://localhost:5000/register

---

## 🔐 Test the Authentication

### Test Registration
1. Go to Registration page
2. Fill in:
   - Name: John Doe
   - Email: john@krmu.edu.in (Must be @krmu.edu.in)
   - Password: Test@123
   - Confirm: Test@123
3. Click "Register Now"
4. You'll be logged in and redirected to home page

### Test Login
1. Go to Login page
2. Email: john@krmu.edu.in
3. Password: Test@123
4. Click "Student Login"
5. You'll see your name in top right corner

### Test Logout
1. Click on your name in top right (or "Logout")
2. Confirm logout
3. You'll be logged out and redirected to login page

---

## 📁 File Structure

```
project/
├── backend/
│   ├── config/database.js        ← MongoDB connection
│   ├── models/User.js            ← User database schema
│   ├── routes/authRoutes.js      ← Login/Register endpoints
│   └── middleware/authenticate.js ← JWT protection
├── codelegacy/
│   ├── login.html                ← Login page (now with backend)
│   ├── register.html             ← Registration page (now with backend)
│   ├── dashboard.html            ← User dashboard
│   ├── index.html                ← Home page (updated)
│   ├── auth.js                   ← Frontend API helper
│   └── [other files]
├── server.js                     ← Main server
├── package.json                  ← Dependencies
├── .env                          ← Configuration
└── README.md                     ← Full documentation
```

---

## 🔧 Configuration

Edit `.env` file to change:

```
MONGODB_URI=mongodb://localhost:27017/codelegacy  ← Database URL
JWT_SECRET=your_secret_key                         ← Change this!
PORT=5000                                          ← Server port
```

For MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codelegacy
```

---

## 🐛 Troubleshooting

### "Cannot find module" error
```bash
npm install
```

### MongoDB connection error
- Make sure MongoDB is running
- Windows: Check Services (mongodb should be running)
- Or run MongoDB manually if not as service

### Port 5000 already in use
- Close other applications using port 5000
- Or change PORT in `.env`

### Tokens not working
- Clear browser cookies/cache (Ctrl+Shift+Delete)
- Open DevTools (F12) and check localStorage
- Check browser console for errors

---

## 📝 API Endpoints

All endpoints return JSON responses.

### Register
```bash
POST http://localhost:5000/api/auth/register
Body: {
  "fullname": "John Doe",
  "email": "john@krmu.edu.in",
  "password": "Test@123",
  "userType": "student"
}
```

### Login
```bash
POST http://localhost:5000/api/auth/login
Body: {
  "email": "john@krmu.edu.in",
  "password": "Test@123"
}
```

### Get Current User (requires token)
```bash
GET http://localhost:5000/api/auth/me
Header: Authorization: Bearer {token}
```

---

## 💡 Next Steps

1. **Protect other pages:** Add this to pages you want to protect:
   ```html
   <script src="auth.js"></script>
   <script>
     if (!authAPI.isAuthenticated()) {
       window.location.href = 'login.html';
     }
   </script>
   ```

2. **Add user profile page** to edit user info

3. **Email verification** before user can login

4. **Password reset** functionality

5. **Role-based access control** (Student vs Faculty pages)

---

## 📞 Help

- Check [README.md](./README.md) for detailed documentation
- Look at browser console (DevTools - F12) for error messages
- Check backend terminal for server errors
- Test endpoints with Postman: https://www.postman.com/

---

**Happy coding! 🚀**
