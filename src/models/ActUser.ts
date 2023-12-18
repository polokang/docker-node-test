import { connMongoDB } from "../helpers/db";
import mongoose, { Document } from "mongoose";

export interface IActUserDoc extends Document {
  [key: string]: any;
}

const actUserSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
  },
  {
    collection: "Act_User",
    versionKey: false,
    strict: false,
  }
);

export const AuditLogsModel = connMongoDB.model("Act_User", actUserSchema);
