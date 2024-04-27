const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/CrudProject", (err) => {
    if (!err)
        console.log('Mongoose connection succesfull');
    else
        console.log('Error Mongoose connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

