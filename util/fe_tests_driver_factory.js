'use strict';

var webDriver = require('selenium-webdriver'),
    _ = require('./functional');

function getPhantomJsWebDriver(webDriver) {
    var capabilities = new webDriver.Capabilities()
            .set('phantomjs.cli.args', ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=true']);

    return new webDriver.Builder()
            .withCapabilities(capabilities)
            .forBrowser('phantomjs')
            .build();
}

function ExtendedDriver(driver, webDriver) {
    /* jshint maxstatements: false */
    var timeout = 6000,
        By = webDriver.By,
        getLocatorFromString = function (loc) {
            return loc.indexOf('\\\\') === 0 ? By.xpath(loc) : By.css(loc);
        };

    this.get = _.bind(driver.get, driver);

    this.findElement = _.bind(driver.findElement, driver);

    this.findElements = _.bind(driver.findElements, driver);

    this.isElementDisplayed = function (locator) {
        return this
                .findElement(locator)
                .isDisplayed()
                .then(_.identity, _.constant(false));
    };

    this.isElementNotDisplayed = function (locator) {
        return this
                .isElementDisplayed(locator)
                .then(_.not);
    };

    this.isElementPresent = function (locator) {
        return this
                .findElements(locator)
                .then(_.size)
                .then(Boolean);
    };

    this.isElementNotPresent = function (locator) {
        return this
                .isElementPresent(locator)
                .then(_.not);
    };

    // Decorator to add a wait object that will define methods based on those already defined and adding to them a wait.
    this.wait = _.reduce(_.omit(this, ['get', 'findElement', 'findElements']), _.bind(function (memo, method, key) {
        var that = this;
        memo[key] = function () {
            var args = arguments;
            return driver.wait(function () {
                return method.apply(that, args);
            }, timeout);
        };
        return memo;
    }, this), {});

    // Decorator to transform a first parameter (must be a string) into a locator (useful in some methods).
    (function (context) {
        _.each(_.pick(context, 'findElement', 'findElements'), function (method, key) {
            context[key] = function () {
                var first = _.head(arguments),
                    locator = getLocatorFromString(first);
                return _.isString(first) ? method.apply(context, [locator].concat(_.tail(arguments))) : method.apply(context, arguments);
            };
        });
    })(this);
}

module.exports = new ExtendedDriver(getPhantomJsWebDriver(webDriver), webDriver);
