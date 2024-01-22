'use strict';
var configObject = new Object();
configObject.issuer = "The One",
    configObject.secret = 'SegredoSecreto123'; 
configObject.jwtExpiresOn = 86400; 
configObject.jwtExpiredAt = 1; 
configObject.Prefix = 'The';


configObject.redisDB = {
    DBHOST: '127.0.0.1',
    DBPORT: '6379'
};
module.exports = configObject;