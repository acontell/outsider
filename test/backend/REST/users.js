'use strict';

var _ = require('lodash'),
    helper = require('../../helper'),
    server = require('../../../app'),
    UserModel = require('../../../db/models/user'),
    userValues = {name: 'bat', password: 'man', created: '2016-09-01T00:00:00.000Z'},
    otherValues = _.extend({}, userValues, {name: 'spider'}),
    newUser = null;

describe('REST sercice: users', function () {

    beforeEach(function (done) {
        newUser = new UserModel(userValues);
        helper.dropModel(UserModel, newUser.save.bind(newUser, done.bind(null)));
        _.extend(userValues, {"_id": newUser.id});
    });

    afterEach(function (done) {
        helper.dropModel(UserModel, done);
    });

    it('should list ALL users on /users GET', function (done) {
        helper.chai.request(server)
            .get('/users')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array');
                helper.testProperties(res.body[0], userValues, done);
            });
    });

    it('should list a SINGLE user on /user/<id> GET', function (done) {
        helper.chai.request(server)
            .get('/users/' + newUser.id)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('object');
                helper.testProperties(res.body, userValues, done);
            });
    });

    it('should add a SINGLE user on /users POST', function (done) {
        helper.chai.request(server)
            .post('/users')
            .send(otherValues)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('object');
                res.body.should.have.property('_id');
                helper.testProperties(res.body, otherValues, done);
            });
    });

    it('should update a SINGLE user on /user/<id> PUT', function (done) {
        var newData = {'name': 'super', '_id': newUser.id};

        helper.chai.request(server)
            .put('/users/' + newUser.id)
            .send(_.pick(newData, 'name'))
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('object');
                helper.testProperties(res.body, _.extend(userValues, newData), done);
            });
    });

    it('should delete a SINGLE user on /user/<id> DELETE');
});
