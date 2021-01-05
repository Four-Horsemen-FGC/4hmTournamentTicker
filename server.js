const express = require('express');
const path = require('path');
const PORT = 8008;

const app = express();

app.use(express.static('public'));

app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));