
/*jslint browser: true, node: true */
/*global */

"use strict";

/*** Imports ***/
var papaya = papaya || {};
papaya.volume = papaya.volume || {};


/*** Constructor ***/
papaya.volume.ImageRange = papaya.volume.ImageRange || function (min, max) {
    this.displayMin = min;
    this.displayMax = max;
    this.imageMin = 0;
    this.imageMax = 0;
    this.dataScaleSlopes = [];
    this.dataScaleIntercepts = [];
};


/*** Static Pseudo-constants ***/

papaya.volume.ImageRange.DEFAULT_SCALE = 1.0;
papaya.volume.ImageRange.DEFAULT_INTERCEPT = 0.0;


/*** Prototype Methods ***/

papaya.volume.ImageRange.prototype.isValid = function () {
    return true;
};



papaya.volume.ImageRange.prototype.setGlobalDataScale = function (scale, intercept, numSlices) {
    var ctr;

    for (ctr = 0; ctr < numSlices; ctr += 1) {
        this.dataScaleSlopes[ctr] = scale;
        this.dataScaleIntercepts[ctr] = intercept;
    }
};
