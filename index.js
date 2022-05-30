const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
const port = 3000;
const appointmentRouter = require('./Appointments/routes');
const hairStyleRouter = require('./HairStyles/routes');

app.use('/api/appointment', appointmentRouter);
app.use('/api/hair_style', hairStyleRouter);

app.get("/", function(req, res) {
    res.send("Hello Avi");
});


app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});