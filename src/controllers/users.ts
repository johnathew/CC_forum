import { RequestHandler } from "express";

export const getUsers: RequestHandler = async (req, res) => {
  res.json({ message: "getUsers" });
};

export const createUser: RequestHandler = async (req, res) => {
  res.json({ message: "createUser" });
};

export const getUser: RequestHandler = async (req, res) => {
  res.json({ message: "getUser" });
};

export const updateUser: RequestHandler = async (req, res) => {
  res.json({ message: "updateUser" });
};

export const deleteUser: RequestHandler = async (req, res) => {
  res.json({ message: "deleteUser" });
};

export const getUserPosts: RequestHandler = async (req, res) => {
  res.json({ message: "getUserPosts" });
};

export const getUserLikedPosts: RequestHandler = async (req, res) => {
  res.json({ message: "getUserLikedPosts" });
};

export const getUserFollowedPosts: RequestHandler = async (req, res) => {
  res.json({ message: "getUserFollowedPosts" });
};
