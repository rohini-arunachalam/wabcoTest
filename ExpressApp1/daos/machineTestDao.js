var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conn1 = mongoose.createConnection('mongodb://SFADMIN:DBadmin4sf@170.205.227.173:28080/APP_TEST?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, reconnectInterval: 500, });
conn1.then(() => {
    console.log('DB connected Successfully!');
}).catch(async (err) => {
    console.log(err)
});

function getDataResult(query, callback) {
    var MyModel = conn1.model('machine_test', new Schema(query));
    callback(null, MyModel);
}

module.exports.getDataResult = getDataResult;