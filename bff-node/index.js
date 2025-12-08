const express = require('express');
const app = express();
const supplementsRouter = require('./routes/supplements');

app.use(express.json());
app.use('/api/supplements', supplementsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`BFF Node listening on ${port}`));

module.exports = app;
