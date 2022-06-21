const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')


const PORT = process.env.PORT || 3000;

mongoose.promise = global.Promise;

//ejs
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));
app.set("views", __dirname + "/views");

// mongoose
try {
    const conn = mongoose.connect('mongodb+srv://me:XtppMihsyl9T45BD@vcard.bc3jo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
        console.log('connected to db')
    });
} catch (e) {
    console.log(e)
}

//routes
app.use('/', require('./routes/index'));

app.listen(PORT, () => { console.log('Server started on port 3000') });
module.exports = app;