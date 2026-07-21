const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Cab Booking Backend Running Successfully");
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API Working Successfully"
    });
});

// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});