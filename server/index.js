const cors = require('cors');
const express = require('express');
const application = express();
const port = 3100;
const path = require('path');
application.use(cors());
application.use(express.static(path.join(__dirname, 'public')));
application.get('/templates', (req, res) => { const templates = require('./data/templates.json'); res.json(templates); });
application.listen(port, () => { console.log(`Server running at http://localhost:${port}`); });
