import { RequestHandler } from "express";

export const getPosts: RequestHandler = async (req, res) => {
  res.json({ message: "getPosts" });
};

export const createPost: RequestHandler = async (req, res) => {
  res.json({ message: "createPost" });
};

export const getPost: RequestHandler = async (req, res) => {
  res.json({ message: "getPost" });
};

export const updatePost: RequestHandler = async (req, res) => {
  res.json({ message: "updatePost" });
};

export const deletePost: RequestHandler = async (req, res) => {
  res.json({ message: "deletePost" });
};

export const createLike: RequestHandler = async (req, res) => {
  res.json({ message: "createLike" });
};

export const deleteLike: RequestHandler = async (req, res) => {
  res.json({ message: "deleteLike" });
};

export const createFollow: RequestHandler = async (req, res) => {
  res.json({ message: "createFollow" });
};

export const deleteFollow: RequestHandler = async (req, res) => {
  res.json({ message: "deleteFollow" });
};

export const getReplies: RequestHandler = async (req, res) => {
  res.json({ message: "getReplies" });
};

export const createReply: RequestHandler = async (req, res) => {
  res.json({ message: "createReply" });
};
