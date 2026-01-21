"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiAgent = void 0;
// import { onRequest } from 'firebase-functions/v2/https'
// import * as logger from 'firebase-functions/logger'
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
var openaiAgent_1 = require("./openaiAgent");
Object.defineProperty(exports, "openaiAgent", { enumerable: true, get: function () { return openaiAgent_1.openaiAgent; } });
