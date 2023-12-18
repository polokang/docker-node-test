"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8081;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", users_1.default);
app.get("/get", (req, res) => res.send(`Get REST API  on ${port}.`));
app.listen(port, () => {
    console.log(`My REST API running on ${port}`);
});
//# sourceMappingURL=app.js.map