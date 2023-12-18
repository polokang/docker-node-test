"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsModel = void 0;
const db_1 = require("../helpers/db");
const mongoose_1 = __importDefault(require("mongoose"));
const actUserSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
}, {
    collection: "Act_User",
    versionKey: false,
    strict: false,
});
exports.AuditLogsModel = db_1.connMongoDB.model("Act_User", actUserSchema);
//# sourceMappingURL=ActUser.js.map