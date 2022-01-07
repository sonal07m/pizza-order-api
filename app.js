var express = require('express');
var path = require('path');
var productRouter = require('./routes/product')
var historyRouter = require('./routes/history')
var app = express();
app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/public/ProductImages/'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/ProductImages/')));
var cors = require('cors');
app.use(cors());

app.use('/product',productRouter)
app.use('/history',historyRouter)

app.listen(process.env.PORT || 4000, (err, res) => {
    if(err){
        console.log("Error occurred "+err.toString());
    } else {
        console.log(`Server is listening on port ${process.env.PORT || 4000}`)
    }
});

module.exports = app;
