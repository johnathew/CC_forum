import { RequestHandler } from "express";

export const getReply: RequestHandler = async (req, res) => {
  res.json({ message: "getReply" });
};

export const updateReply: RequestHandler = async (req, res) => {
  res.json({ message: "updateReply" });
};

export const deleteReply: RequestHandler = async (req, res) => {
  res.json({ message: "deleteReply" });
};
