const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const publicPath = path.join('C:/Users/hamid/dev-website/public');

app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 


app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
    console.log(publicPath)
 });