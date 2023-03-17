const express = require('express');

const app = express();
const port = 3000;

// set public folder as root
app.use(express.static('public'));

// provide access to node_modules from the client
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all requests to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`app listening on port ${port}!`));