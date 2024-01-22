var mongoose = require('mongoose');
var dataBaseSchema = require('../models/school.js');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

global.DBConnectionsList = {};

var authorizeDB = function (req, res, next) {
    console.log("User Db Connection Process.....")
    var header = req.get('Authorization');
    if (!header) {
        return next();
    }

    if (header) {
        console.log("Authorization header verified.");
        var tokenType = header.split(' ')[0];
        var token = header.split(' ')[1];
        if (tokenType !== undefined && token !== undefined && tokenType !== '' && token !== '') {
            if (tokenType === 'Bearer') {
                jwt.verify(token, config.secret, { issuer: config.issuer }, function (err, decodedToken) {
                    if (err) {
                        return res.status(401).send('You are not an Authorized user.');
                    }
                    if (decodedToken.CName) {
                        var dbName = `${config.Prefix}${decodedToken.CName}`;
                        if (DBConnectionsList[dbName]) {
                            console.log("DB in Connection List.....");
                            return next();
                        } else {
                            DBConnectionsList[dbName] = mongoose.createConnection('mongodb://localhost:27017/' + dbName);
                            DBConnectionsList[dbName]['studentModel'] = dataBaseSchema.createSchema(DBConnectionsList[dbName]);
                            console.log("New DB added in Connection List.....");
                            return next();
                        }
                    } else {
                        return res.status(401).send('You are not an Authorized user.');
                    }
                })
            } else {
                return res.status(401).send('You are not an Authorized user.');
            }
        } else {
            return res.status(401).send('You are not an Authorized user.');
        }
    } else {
        return next();
    }
};

module.exports = { authorizeDB };