"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Team/TeamEight.js":
/*!**************************************!*\
  !*** ./components/Team/TeamEight.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var _data_elements_team_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/elements/team.json */ \"./data/elements/team.json\");\n\n\n\n\n\n\nconst TeamEight = (param)=>{\n    let { head, data } = param;\n    console.log(\"data: \", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row row--15 mt--20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-12 pr--50 pl--50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"relative\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                                    className: \"swiper team-slide-activation pl--50 pr--50\",\n                                    modules: [\n                                        swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation\n                                    ],\n                                    loop: true,\n                                    spaceBetween: 0,\n                                    slidesPerView: 1,\n                                    pagination: {\n                                        el: \".rbt-swiper-pagination\",\n                                        clickable: true\n                                    },\n                                    navigation: {\n                                        nextEl: \".rbt-arrow-right\",\n                                        prevEl: \".rbt-arrow-left\"\n                                    },\n                                    breakpoints: {\n                                        575: {\n                                            slidesPerView: 1\n                                        },\n                                        768: {\n                                            slidesPerView: 2\n                                        },\n                                        992: {\n                                            slidesPerView: 4\n                                        }\n                                    },\n                                    children: data && data.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                            children: data.details.map((item, innerIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"swiper-slide\",\n                                                    style: {\n                                                        border: \"1px solid #ddd\",\n                                                        display: \"flex\",\n                                                        flexDirection: \"column\",\n                                                        alignItems: \"center\",\n                                                        padding: \"10px\",\n                                                        boxSizing: \"border-box\"\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"team team-style--bottom variation-2\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"thumbnail\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                href: \"#\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                    src: item,\n                                                                    width: 415,\n                                                                    height: 555,\n                                                                    priority: true,\n                                                                    alt: \"Team Image\",\n                                                                    style: {\n                                                                        width: \"100px\",\n                                                                        height: \"auto\"\n                                                                    }\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                                                    lineNumber: 62,\n                                                                    columnNumber: 33\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 31\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, innerIndex, false, {\n                                                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 25\n                                                }, undefined))\n                                        }, index, false, {\n                                            fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rbt-swiper-arrow rbt-arrow-left\",\n                                    style: {\n                                        position: \"absolute\",\n                                        left: \"-50px\",\n                                        top: \"50%\",\n                                        transform: \"translateY(-50%)\",\n                                        zIndex: 10,\n                                        width: \"40px\",\n                                        height: \"40px\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        background: \"red\",\n                                        borderRadius: \"50%\",\n                                        color: \"white\",\n                                        border: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"rbt-icon feather-arrow-left\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rbt-swiper-arrow rbt-arrow-right\",\n                                    style: {\n                                        position: \"absolute\",\n                                        right: \"-50px\",\n                                        top: \"50%\",\n                                        transform: \"translateY(-50%)\",\n                                        zIndex: 10,\n                                        width: \"40px\",\n                                        height: \"40px\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        background: \"red\",\n                                        borderRadius: \"50%\",\n                                        color: \"white\",\n                                        border: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"rbt-icon feather-arrow-right\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rbt-swiper-pagination\",\n                            style: {\n                                bottom: \"0\",\n                                position: \"relative\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sanorac/Downloads/Six Phrase/themeforest-LYOIGqvE-histudy-online-courses-education-nextjs-template/histudy-nextjs-page-route/components/Team/TeamEight.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = TeamEight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamEight);\nvar _c;\n$RefreshReg$(_c, \"TeamEight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcclxuXHJcbmltcG9ydCBUZWFtRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9lbGVtZW50cy90ZWFtLmpzb25cIjtcclxuXHJcbmNvbnN0IFRlYW1FaWdodCA9ICh7IGhlYWQgLGRhdGF9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS0xNSBtdC0tMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHByLS01MCBwbC0tNTBcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlciB0ZWFtLXNsaWRlLWFjdGl2YXRpb24gcGwtLTUwIHByLS01MFwiXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XHJcbiAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgZWw6IFwiLnJidC1zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnJidC1hcnJvdy1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnJidC1hcnJvdy1sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgICAgNTc1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGV0YWlscy5tYXAoKGl0ZW0sIGlubmVySW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbm5lckluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbSB0ZWFtLXN0eWxlLS1ib3R0b20gdmFyaWF0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1NTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGVhbSBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLCAvLyBTbWFsbGVyIHNpemUgZm9yIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj57aXRlbS5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2lnbmF0aW9uXCI+e2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmVhdGhlci1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICAgICAgICB7LyogTGVmdCBBcnJvdyAqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYnQtc3dpcGVyLWFycm93IHJidC1hcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiLTUwcHhcIiwgLy8gSW5jcmVhc2VkIHNwYWNlIGZyb20gdGhlIGJveFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIiwgLy8gV2lkdGggb2YgdGhlIHJvdW5kIGFycm93IGJveFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLCAvLyBIZWlnaHQgb2YgdGhlIHJvdW5kIGFycm93IGJveFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsIC8vIFJlZCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIiwgLy8gUm91bmQgc2hhcGVcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIiwgLy8gV2hpdGUgaWNvbiBjb2xvclxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLCAvLyBSZW1vdmUgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJidC1pY29uIGZlYXRoZXItYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIFJpZ2h0IEFycm93ICovfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJidC1zd2lwZXItYXJyb3cgcmJ0LWFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi01MHB4XCIsIC8vIEluY3JlYXNlZCBzcGFjZSBmcm9tIHRoZSBib3hcclxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxyXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsIC8vIFdpZHRoIG9mIHRoZSByb3VuZCBhcnJvdyBib3hcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIiwgLy8gSGVpZ2h0IG9mIHRoZSByb3VuZCBhcnJvdyBib3hcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLCAvLyBSZWQgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIC8vIFJvdW5kIHNoYXBlXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsIC8vIFdoaXRlIGljb24gY29sb3JcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIiwgLy8gUmVtb3ZlIGJvcmRlclxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyYnQtaWNvbiBmZWF0aGVyLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYnQtc3dpcGVyLXBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvdHRvbTogXCIwXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1FaWdodDtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJUZWFtRGF0YSIsIlRlYW1FaWdodCIsImhlYWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9zaXRpb24iLCJtb2R1bGVzIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJtYXAiLCJpbmRleCIsImRldGFpbHMiLCJpdGVtIiwiaW5uZXJJbmRleCIsImJvcmRlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJib3hTaXppbmciLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImFsdCIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImkiLCJyaWdodCIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Team/TeamEight.js\n"));

/***/ })

});