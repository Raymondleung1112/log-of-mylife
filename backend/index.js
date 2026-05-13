const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Log of Mylife API is Running'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
