"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiAgent = void 0;
const functions = __importStar(require("firebase-functions"));
const openai_1 = __importDefault(require("openai"));
const resume_json_1 = __importDefault(require("./resume.json"));
const client = new openai_1.default({
    apiKey: functions.config().openai.key,
});
exports.openaiAgent = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }
    const { question } = req.body;
    if (!question) {
        res.status(400).json({ error: 'Missing question' });
        return;
    }
    try {
        const resumeContent = JSON.stringify(resume_json_1.default);
        const response = await client.responses.create({
            model: 'gpt-4.1-mini',
            input: [
                {
                    role: 'system',
                    content: resumeContent,
                },
                {
                    role: 'user',
                    content: `The user asked the following question: ${question}. Respond strictly using the content given to you. Do not answer any question not related to the contents of the resume.`,
                },
            ],
        });
        res.json(response);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
