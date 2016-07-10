'use strict';

var helper = require('../../helper'),
    server = require('../../../app'),
    UserModel = require('../../../db/models/user'),
    userValues = {name: 'bat', password: 'man', created: '2016-09-01T00:00:00.000Z'},
    newUser = new UserModel(userValues);

describe('REST sercice: users', function () {

    beforeEach(function (done) {
        helper.setEnvAndDropModel('test', UserModel, newUser.save.bind(newUser, done.bind(null)));
    });

    afterEach(function (done) {
        helper.setEnvAndDropModel('development', UserModel, done);
    });

    it('should list ALL users on /users GET', function (done) {
        helper.chai.request(server)
            .get('/users')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array');
                res.body[0].should.have.property('_id');
                helper.testProperties(res.body[0], userValues);
                done();
            });
    });

    it('should list a SINGLE user on /user/<id> GET');
    it('should add a SINGLE user on /users POST');
    it('should update a SINGLE user on /user/<id> PUT');
    it('should delete a SINGLE user on /user/<id> DELETE');
});
