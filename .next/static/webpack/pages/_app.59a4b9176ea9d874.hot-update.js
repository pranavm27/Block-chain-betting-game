"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/config/config.tsx":
/*!*******************************!*\
  !*** ./src/config/config.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DECIMAL\": function() { return /* binding */ DECIMAL; },\n/* harmony export */   \"GOAT_TOKEN_ADDRESS\": function() { return /* binding */ GOAT_TOKEN_ADDRESS; },\n/* harmony export */   \"MAX_APPROVAL_AMOUNT\": function() { return /* binding */ MAX_APPROVAL_AMOUNT; },\n/* harmony export */   \"MIN_ABI\": function() { return /* binding */ MIN_ABI; },\n/* harmony export */   \"NUMBER_BASE\": function() { return /* binding */ NUMBER_BASE; },\n/* harmony export */   \"WORLD_CUP_ABI\": function() { return /* binding */ WORLD_CUP_ABI; },\n/* harmony export */   \"WORLD_CUP_ADDRESS\": function() { return /* binding */ WORLD_CUP_ADDRESS; }\n/* harmony export */ });\n// address of the smart contract\nvar WORLD_CUP_ADDRESS = \"0xce35a8f0f815D197C856592BbD21E037E1CaBF83\";\n// base number \nvar NUMBER_BASE = 1000000000000000000;\n// address of the token\nvar GOAT_TOKEN_ADDRESS = \"0xfdD0B9c4C6a0De02A97627749dA4C66160761389\";\n// maximum value for approval amount \nvar MAX_APPROVAL_AMOUNT = \"115792089237316195423570985008687907853269984665640564039457584007913129639935\";\n// decimal valie \nvar DECIMAL = 18;\n// minimized abi for transaction/allowance and approve\nvar MIN_ABI = [\n    // transfer\n    {\n        constant: false,\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_teamId\",\n                type: \"uint256\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"_numTickets\",\n                type: \"uint256\"\n            }, \n        ],\n        name: \"buyTickets\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    //allowance\n    [\n        {\n            inputs: [\n                {\n                    internalType: \"address\",\n                    name: \"owner\",\n                    type: \"address\"\n                },\n                {\n                    internalType: \"address\",\n                    name: \"spender\",\n                    type: \"address\"\n                }, \n            ],\n            name: \"allowance\",\n            outputs: [\n                {\n                    internalType: \"uint256\",\n                    name: \"\",\n                    type: \"uint256\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        }, \n    ],\n    // approve\n    [\n        {\n            inputs: [\n                {\n                    internalType: \"address\",\n                    name: \"spender\",\n                    type: \"address\"\n                },\n                {\n                    internalType: \"uint256\",\n                    name: \"amount\",\n                    type: \"uint256\"\n                }, \n            ],\n            name: \"approve\",\n            outputs: [\n                {\n                    internalType: \"bool\",\n                    name: \"\",\n                    type: \"bool\"\n                }\n            ],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        }, \n    ]\n];\n// \nvar WORLD_CUP_ABI = [\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"previousOwner\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"newOwner\",\n                type: \"address\"\n            }, \n        ],\n        name: \"OwnershipTransferred\",\n        type: \"event\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"string\",\n                name: \"_teamName\",\n                type: \"string\"\n            }\n        ],\n        name: \"addTeam\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_teamId\",\n                type: \"uint256\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"_numTickets\",\n                type: \"uint256\"\n            }, \n        ],\n        name: \"buyTickets\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"collectWinnings\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getAllTeams\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_teamId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"getAllTicketsForTeam\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getBalance\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getFees\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getPurchaseToken\",\n        outputs: [\n            {\n                internalType: \"address\",\n                name: \"\",\n                type: \"address\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_walletAddress\",\n                type: \"address\"\n            }, \n        ],\n        name: \"getTeamForWallet\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_walletAddress\",\n                type: \"address\"\n            }, \n        ],\n        name: \"getTeamIdForWallet\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getTicketPrice\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_walletAddress\",\n                type: \"address\"\n            }, \n        ],\n        name: \"getTicketsForWallet\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"getTotalPool\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_walletAddress\",\n                type: \"address\"\n            }, \n        ],\n        name: \"getWinningsForWallet\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"hasBet\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"hasGameEnded\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"hasWalletWithdrawn\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"initialise\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"isFeesWithdrawn\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"isSleeping\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"owner\",\n        outputs: [\n            {\n                internalType: \"address\",\n                name: \"\",\n                type: \"address\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"renounceOwnership\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_protocolFees\",\n                type: \"uint256\"\n            }, \n        ],\n        name: \"setFees\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_purchaseToken\",\n                type: \"address\"\n            }, \n        ],\n        name: \"setPurchaseToken\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_ticketPrice\",\n                type: \"uint256\"\n            }, \n        ],\n        name: \"setTicketPrice\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"_winnerId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"setWinner\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"sleep\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"newOwner\",\n                type: \"address\"\n            }\n        ],\n        name: \"transferOwnership\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"_walletAddress\",\n                type: \"address\"\n            }, \n        ],\n        name: \"withdrawFees\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7WUFBQztnQkFBRUMsWUFBWSxFQUFFLFNBQVM7Z0JBQUVDLElBQUksRUFBRSxVQUFVO2dCQUFFQyxJQUFJLEVBQUUsU0FBUzthQUFFO1NBQUM7UUFDeEVELElBQUksRUFBRSxtQkFBbUI7UUFDekJFLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLGVBQWUsRUFBRSxZQUFZO1FBQzdCRixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0VILE1BQU0sRUFBRTtZQUNOO2dCQUFFQyxZQUFZLEVBQUUsU0FBUztnQkFBRUMsSUFBSSxFQUFFLGdCQUFnQjtnQkFBRUMsSUFBSSxFQUFFLFNBQVM7YUFBRTtTQUNyRTtRQUNERCxJQUFJLEVBQUUsY0FBYztRQUNwQkUsT0FBTyxFQUFFLEVBQUU7UUFDWEMsZUFBZSxFQUFFLFlBQVk7UUFDN0JGLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uZmlnL2NvbmZpZy50c3g/MWZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRyZXNzIG9mIHRoZSBzbWFydCBjb250cmFjdFxuZXhwb3J0IGNvbnN0IFdPUkxEX0NVUF9BRERSRVNTID0gXCIweGNlMzVhOGYwZjgxNUQxOTdDODU2NTkyQmJEMjFFMDM3RTFDYUJGODNcIjtcblxuLy8gYmFzZSBudW1iZXIgXG5leHBvcnQgY29uc3QgTlVNQkVSX0JBU0UgPSAxMDAwMDAwMDAwMDAwMDAwMDAwO1xuXG4vLyBhZGRyZXNzIG9mIHRoZSB0b2tlblxuZXhwb3J0IGNvbnN0IEdPQVRfVE9LRU5fQUREUkVTUyA9IFwiMHhmZEQwQjljNEM2YTBEZTAyQTk3NjI3NzQ5ZEE0QzY2MTYwNzYxMzg5XCI7XG5cbi8vIG1heGltdW0gdmFsdWUgZm9yIGFwcHJvdmFsIGFtb3VudCBcbmV4cG9ydCBjb25zdCBNQVhfQVBQUk9WQUxfQU1PVU5UID1cbiAgXCIxMTU3OTIwODkyMzczMTYxOTU0MjM1NzA5ODUwMDg2ODc5MDc4NTMyNjk5ODQ2NjU2NDA1NjQwMzk0NTc1ODQwMDc5MTMxMjk2Mzk5MzVcIjtcblxuICAvLyBkZWNpbWFsIHZhbGllIFxuZXhwb3J0IGNvbnN0IERFQ0lNQUwgPSAxODtcblxuLy8gbWluaW1pemVkIGFiaSBmb3IgdHJhbnNhY3Rpb24vYWxsb3dhbmNlIGFuZCBhcHByb3ZlXG5leHBvcnQgY29uc3QgTUlOX0FCSSA9IFtcbiAgICAvLyB0cmFuc2ZlclxuICAgIHtcbiAgICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiX3RlYW1JZFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgICAgICB7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiX251bVRpY2tldHNcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICAgIF0sXG4gICAgICBuYW1lOiBcImJ1eVRpY2tldHNcIixcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIC8vYWxsb3dhbmNlXG4gICAgW1xuICAgICAge1xuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICB7IGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwib3duZXJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICAgICAgICB7IGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwic3BlbmRlclwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImFsbG93YW5jZVwiLFxuICAgICAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIGFwcHJvdmVcbiAgICBbXG4gICAgICB7XG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJzcGVuZGVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgeyBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcImFtb3VudFwiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcImFwcHJvdmVcIixcbiAgICAgICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgIH0sXG4gICAgXVxuICBdO1xuXG4gIFxuICAvLyBcbmV4cG9ydCBjb25zdCBXT1JMRF9DVVBfQUJJID0gW1xuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJwcmV2aW91c093bmVyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJuZXdPd25lclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcIk93bmVyc2hpcFRyYW5zZmVycmVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiX3RlYW1OYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfV0sXG4gICAgbmFtZTogXCJhZGRUZWFtXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHsgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJfdGVhbUlkXCIsIHR5cGU6IFwidWludDI1NlwiIH0sXG4gICAgICB7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiX251bVRpY2tldHNcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwiYnV5VGlja2V0c1wiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImNvbGxlY3RXaW5uaW5nc1wiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImdldEFsbFRlYW1zXCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLCBuYW1lOiBcIlwiLCB0eXBlOiBcInN0cmluZ1wiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIl90ZWFtSWRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgbmFtZTogXCJnZXRBbGxUaWNrZXRzRm9yVGVhbVwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImdldEJhbGFuY2VcIixcbiAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCB0eXBlOiBcInVpbnQyNTZcIiB9XSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJnZXRGZWVzXCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZ2V0UHVyY2hhc2VUb2tlblwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7IGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiX3dhbGxldEFkZHJlc3NcIiwgdHlwZTogXCJhZGRyZXNzXCIgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwiZ2V0VGVhbUZvcldhbGxldFwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJzdHJpbmdcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJzdHJpbmdcIiB9XSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAgeyBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIl93YWxsZXRBZGRyZXNzXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcImdldFRlYW1JZEZvcldhbGxldFwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImdldFRpY2tldFByaWNlXCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHsgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJfd2FsbGV0QWRkcmVzc1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJnZXRUaWNrZXRzRm9yV2FsbGV0XCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZ2V0VG90YWxQb29sXCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHsgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJfd2FsbGV0QWRkcmVzc1wiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJnZXRXaW5uaW5nc0ZvcldhbGxldFwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImhhc0JldFwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImhhc0dhbWVFbmRlZFwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImhhc1dhbGxldFdpdGhkcmF3blwiLFxuICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwiYm9vbFwiIH1dLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImluaXRpYWxpc2VcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJpc0ZlZXNXaXRoZHJhd25cIixcbiAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJpc1NsZWVwaW5nXCIsXG4gICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwib3duZXJcIixcbiAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCB0eXBlOiBcImFkZHJlc3NcIiB9XSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJyZW5vdW5jZU93bmVyc2hpcFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7IGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiX3Byb3RvY29sRmVlc1wiLCB0eXBlOiBcInVpbnQyNTZcIiB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJzZXRGZWVzXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHsgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJfcHVyY2hhc2VUb2tlblwiLCB0eXBlOiBcImFkZHJlc3NcIiB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJzZXRQdXJjaGFzZVRva2VuXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHsgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJfdGlja2V0UHJpY2VcIiwgdHlwZTogXCJ1aW50MjU2XCIgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwic2V0VGlja2V0UHJpY2VcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJfd2lubmVySWRcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgbmFtZTogXCJzZXRXaW5uZXJcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJzbGVlcFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIm5ld093bmVyXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgIG5hbWU6IFwidHJhbnNmZXJPd25lcnNoaXBcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAgeyBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIl93YWxsZXRBZGRyZXNzXCIsIHR5cGU6IFwiYWRkcmVzc1wiIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcIndpdGhkcmF3RmVlc1wiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJXT1JMRF9DVVBfQUREUkVTUyIsIk5VTUJFUl9CQVNFIiwiR09BVF9UT0tFTl9BRERSRVNTIiwiTUFYX0FQUFJPVkFMX0FNT1VOVCIsIkRFQ0lNQUwiLCJNSU5fQUJJIiwiY29uc3RhbnQiLCJpbnB1dHMiLCJpbnRlcm5hbFR5cGUiLCJuYW1lIiwidHlwZSIsIm91dHB1dHMiLCJzdGF0ZU11dGFiaWxpdHkiLCJXT1JMRF9DVVBfQUJJIiwiYW5vbnltb3VzIiwiaW5kZXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/config.tsx\n");

/***/ })

});