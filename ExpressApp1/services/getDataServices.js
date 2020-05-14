var getDataDao = require("../daos/machineTestDao");

function getQueryData(query, callback) {
    getDataDao.getDataResult(query, function (err, result) {
        callback(null, result);
    });
}

module.exports.getQueryData = getQueryData;