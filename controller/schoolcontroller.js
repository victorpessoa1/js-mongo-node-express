'use strict';
var jwt = require('../commonservice/jwtverify');

module.exports.CreateSchool = function (req, res, next) {
    var School = DBConnectionsList[jwt.jwtverify(req)].studentModel;
    School.create(req.body, function (err, success) {
        if (err) {
            return res.status(402).send(err);
        }
        if (success) {
            return res.status(200).send(success);
        } else {
            return res.status(404).send('School not created.');
        }
    });
};

module.exports.getAllSchool = function (req, res, next) {
    var School = DBConnectionsList[jwt.jwtverify(req)].studentModel;
    School.find({}, function (err, user) {
        if (err) {
            return res.status(402).send(err);
        }
        if (user) {
            return res.status(200).send(user);
        }
    });
}

module.exports.getRedisServerData = function (req, res, next) {
    let token = "token received from login with admin";
    redisClient.get(token, function (err, reply) {
        let data = JSON.parse(reply);
        console.log(typeof data);
        res.send(data.Permission);
    });
}