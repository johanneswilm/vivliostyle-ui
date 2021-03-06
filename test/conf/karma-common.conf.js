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
    return {
        basePath: "../..",
        frameworks: ["browserify", "jasmine"],
        preprocessors: {
            "test/spec/**/*.js": ["browserify"]
        },
        files: ["test/spec/**/*.js"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browserify: {
            transform: ["babelify"]
        }
    };
};
