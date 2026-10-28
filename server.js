const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; padding:50px; font-family:Arial, sans-serif; background-color: #f4f4f9; height: 100vh;">
            <h1 style="color: #2c3e50;">🚀 End-to-End DevOps Pipeline Demo</h1>
            <p style="font-size: 18px;">Status: <span style="color: green; font-weight: bold;">Running inside Docker Container</span></p>
            <p style="font-size: 18px;">Automation: <span style="color: blue; font-weight: bold;">CI/CD Pipeline via GitHub Actions</span></p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});