const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // ✅ Load .env variables before using them

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));


// Define a simple route for testing
const productRouter = require('./routes/product.js'); // ✅ Ensure this path is correct
app.use('/api/product', productRouter); // ✅ Ensure this path is correct





app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
