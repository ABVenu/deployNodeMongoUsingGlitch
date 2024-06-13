// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
// Use post routes
app.use('/posts', postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
