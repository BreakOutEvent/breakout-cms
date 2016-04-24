const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(3001, function () {
  console.log('CMS on 3000!');
});