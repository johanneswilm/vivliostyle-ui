/*
 * Copyright 2015 Vivliostyle Inc.
 *
 * This file is part of Vivliostyle UI.
 *
 * Vivliostyle UI is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Vivliostyle UI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Vivliostyle UI.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = function(config) {
    var commonConfig = (require("./karma-common.conf"))(config);
    var customLaunchers = {
        sl_chrome: {
            base: "SauceLabs",
            browserName: "chrome",
            platform: "Windows 8.1"
        },
        //sl_firefox: {
        //    base: "SauceLabs",
        //    browserName: "firefox",
        //    platform: "Windows 8.1"
        //},
        sl_safari: {
            base: "SauceLabs",
            browserName: "safari",
            platform: "OS X 10.10"
        },
        sl_ie_11: {
            base: "SauceLabs",
            browserName: "internet explorer",
            platform: "Windows 8.1"
        }
    };

    var options = {
        reporters: ["verbose", "saucelabs"],
        sauceLabs: {
            build: process.env.TRAVIS_BUILD_NUMBER,
            testName: "vivliostyle-js-viewer",
            recordScreenshots: false,
            startConnect: false, // Sauce Connect is started by Travis CI
            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
        },
        captureTimeout: 120000,
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        singleRun: true
    };
    for (var key in commonConfig) {
        if (commonConfig.hasOwnProperty(key)) {
            options[key] = commonConfig[key];
        }
    }

    config.set(options);
};
