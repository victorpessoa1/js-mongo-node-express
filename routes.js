var authServer = require('./commonservice/jwtverify');

module.exports = function (router) {
    //Routing for User Creation
    var userinfo = require('./controller/usercontroller')
    router.post('/createClient', userinfo.createClient);
    router.post('/createUser', userinfo.createUser);
    router.post('/login', userinfo.userLogin);

    //Routing for School Creation
    var school = require('./controller/schoolcontroller')
    router.post('/create/school', school.CreateSchool);
    router.get('/getAllSchool', permission('get all school record'), school.getAllSchool);

    router.get('/getRedisData', school.getRedisServerData);
}

var permission = function (permissions) {
    return function (req, res, next) {
        authServer.permission(req, res, next, permissions);
    };
};