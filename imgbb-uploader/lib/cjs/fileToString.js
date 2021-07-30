"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToString = void 0;
var fs_1 = require("fs");
/**
 * Promise to turn an image path into a base64 string
 *
 * @param {string} imagePath - Absolute path to your file
 * @returns {string}
 * A string (base64) representation of your image.
 */
exports.fileToString = function (imagePath) {
    return new Promise(function (resolve, reject) {
        return fs_1.readFile(imagePath, "base64", function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
