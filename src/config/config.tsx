const configJson = require("./config.json");
const abiJSON = require("./abi.json");

// address of the smart contract
export const WORLD_CUP_ADDRESS = configJson.contractAddress;

// base number
export const NUMBER_BASE = configJson.baseNumber;

export const TOKEN_NAME= configJson.tokenName;
// address of the token
export const GOAT_TOKEN_ADDRESS = configJson.tokenAddress;

// DOCS LINK 
export const DOCS="https://basedfinance.gitbook.io/based-finance-v2/";

// maximum value for approval amount
export const MAX_APPROVAL_AMOUNT = configJson.maxApprovalAmount;

// decimal valie
export const DECIMAL = configJson.decimal;

// minimized abi for transaction/allowance and approve
export const MIN_ABI = configJson.minAbi;

// abi of the smart contract
export const WORLD_CUP_ABI = abiJSON;
