'use strict';

function PageObject(driver) {
    this.pageLoadedElement = null;
    this.timeout = 6000;

    this.waitForPageToBeLoaded = function () {
        return driver.wait(function () {
            return driver
                    .findElement(this.pageLoadedElement)
                    .isDisplayed();
        }, this.timeout);
    };
}

module.exports = PageObject;
