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

import ko from "knockout";
import urlParameters from "../stores/url-parameters";
import PageSize from "./page-size";

function getDocumentOptionsFromURL() {
    return {
        epubUrl: urlParameters.getParameter("b"),
        url: urlParameters.getParameter("x"),
        fragment: urlParameters.getParameter("f")
    };
}

function DocumentOptions() {
    var urlOptions = getDocumentOptionsFromURL();
    this.epubUrl = ko.observable(urlOptions.epubUrl || "");
    this.url = ko.observable(urlOptions.url || "");
    this.fragment = ko.observable(urlOptions.fragment || "");
    this.pageSize = new PageSize();

    // write fragment back to URL when updated
    this.fragment.subscribe(function(fragment) {
        var encoded = fragment.replace(/[\s+&?=#\u007F-\uFFFF]+/g, encodeURIComponent);
        urlParameters.setParameter("f", encoded);
    });
}

DocumentOptions.prototype.toObject = function() {
    // Do not include url
    // (url is a required argument to Viewer.loadDocument, separated from other options)
    return {
        fragment: this.fragment(),
        userStyleSheet: [{
            text: "@page {" + this.pageSize.toCSSDeclarationString() + "}"
        }]
    };
};

export default DocumentOptions;
