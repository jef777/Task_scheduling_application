const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/test', (req, res) => res.send({ testApiRes: ` Express Listening on port ${process.env.PORT || 8080}!` }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));