"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst bucketName = \"vt-ecommerce-store\";\nasync function handle(req, res) {\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    console.log(\"length\", files.file.length);\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"us-west-2\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFileName = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFileName,\n            Body: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_3___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFileName}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDeUI7QUFDekM7QUFDVTtBQUU5QixNQUFNSyxhQUFhO0FBRUosZUFBZUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU1DLE9BQU8sSUFBSVQsd0RBQWVVO0lBQ2hDLE1BQU0sRUFBQ0MsT0FBTSxFQUFFQyxNQUFLLEVBQUMsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDaEROLEtBQUtPLE1BQU1ULEtBQUssQ0FBQ1UsS0FBS04sUUFBUUM7WUFDMUIsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUNIO2dCQUFRQztZQUFLO1FBQzFCO0lBQ0o7SUFDQU0sUUFBUUMsSUFBSSxVQUFVUCxNQUFNUSxLQUFLQztJQUVqQyxNQUFNQyxTQUFTLElBQUlyQix3REFBUUEsQ0FBQztRQUN4QnNCLFFBQVE7UUFDUkMsYUFBYTtZQUNUQyxhQUFhQyxRQUFRQyxJQUFJQztZQUN6QkMsaUJBQWlCSCxRQUFRQyxJQUFJRztRQUNqQztJQUNKO0lBRUEsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssTUFBTVgsUUFBUVIsTUFBTVEsS0FBTTtRQUMzQixNQUFNWSxNQUFNWixLQUFLYSxpQkFBaUJDLE1BQU0sS0FBS0M7UUFDN0MsTUFBTUMsY0FBY0MsS0FBS0MsUUFBUSxNQUFNTjtRQUN2QyxNQUFNVixPQUFPaUIsS0FBSyxJQUFJckMsZ0VBQWdCQSxDQUFDO1lBQ25Dc0MsUUFBUW5DO1lBQ1JvQyxLQUFLTDtZQUNMTSxNQUFNdkMsc0RBQWV3QyxDQUFDdkIsS0FBS3dCO1lBQzNCQyxLQUFLO1lBQ0xDLGFBQWExQyx3REFBVzJDLENBQUMzQixLQUFLd0I7UUFDbEM7UUFDQSxNQUFNSSxPQUFPLENBQUMsUUFBUSxFQUFFM0MsV0FBVyxrQkFBa0IsRUFBRStCLFlBQVksQ0FBQztRQUNwRUwsTUFBTWtCLEtBQUtEO0lBQ2Y7SUFDQSxPQUFPeEMsSUFBSTBDLEtBQUs7UUFBQ25CO0lBQUs7QUFDMUI7QUFFTyxNQUFNb0IsU0FBUztJQUNsQkMsS0FBSztRQUFDQyxZQUFZO0lBQUs7QUFDM0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS91cGxvYWQuanM/NTU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGlwYXJ0eSBmcm9tICdtdWx0aXBhcnR5JztcclxuaW1wb3J0IHtTM0NsaWVudCwgUHV0T2JqZWN0Q29tbWFuZH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgbWltZSBmcm9tICdtaW1lLXR5cGVzJztcclxuXHJcbmNvbnN0IGJ1Y2tldE5hbWUgPSAndnQtZWNvbW1lcmNlLXN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBtdWx0aXBhcnR5LkZvcm0oKTtcclxuICAgIGNvbnN0IHtmaWVsZHMsIGZpbGVzfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7ZmllbGRzLCBmaWxlc30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnbGVuZ3RoJywgZmlsZXMuZmlsZS5sZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTM0NsaWVudCh7XHJcbiAgICAgICAgcmVnaW9uOiAndXMtd2VzdC0yJyxcclxuICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuUzNfQUNDRVNTX0tFWSxcclxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5TM19TRUNSRVRfQUNDRVNTX0tFWSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBbXTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcy5maWxlKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZmlsZS5vcmlnaW5hbEZpbGVuYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsZU5hbWUgPSBEYXRlLm5vdygpICsgJy4nICsgZXh0O1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kKG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgICAgICAgQnVja2V0OiBidWNrZXROYW1lLFxyXG4gICAgICAgICAgICBLZXk6IG5ld0ZpbGVOYW1lLFxyXG4gICAgICAgICAgICBCb2R5OiBmcy5yZWFkRmlsZVN5bmMoZmlsZS5wYXRoKSxcclxuICAgICAgICAgICAgQUNMOiAncHVibGljLXJlYWQnLFxyXG4gICAgICAgICAgICBDb250ZW50VHlwZTogbWltZS5sb29rdXAoZmlsZS5wYXRoKSxcclxuICAgICAgICB9KSk7ICAgXHJcbiAgICAgICAgY29uc3QgbGluayA9IGBodHRwczovLyR7YnVja2V0TmFtZX0uczMuYW1hem9uYXdzLmNvbS8ke25ld0ZpbGVOYW1lfWA7XHJcbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuanNvbih7bGlua3N9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge2JvZHlQYXJzZXI6IGZhbHNlfSxcclxufTsiXSwibmFtZXMiOlsibXVsdGlwYXJ0eSIsIlMzQ2xpZW50IiwiUHV0T2JqZWN0Q29tbWFuZCIsImZzIiwibWltZSIsImJ1Y2tldE5hbWUiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJmb3JtIiwiRm9ybSIsImZpZWxkcyIsImZpbGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwibGVuZ3RoIiwiY2xpZW50IiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInByb2Nlc3MiLCJlbnYiLCJTM19BQ0NFU1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiUzNfU0VDUkVUX0FDQ0VTU19LRVkiLCJsaW5rcyIsImV4dCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsIm5ld0ZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsInNlbmQiLCJCdWNrZXQiLCJLZXkiLCJCb2R5IiwicmVhZEZpbGVTeW5jIiwicGF0aCIsIkFDTCIsIkNvbnRlbnRUeXBlIiwibG9va3VwIiwibGluayIsInB1c2giLCJqc29uIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();