// function that handles a request from a user

import express, { NextFunction, Request, Response } from "express";
import prisma from "../prisma.js";

const getMany = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
      },
    });
    res.status(201).json({ user });
  } catch (err) {
    next(err); // checks if custom error middleware
  }
};
const get = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      posts: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  res.json({ user });
};

export default { getMany, get, create };
