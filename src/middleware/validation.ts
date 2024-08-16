import { Request, Response, NextFunction } from "express";

const validate = (req: Request, res: Response, next: NextFunction) => {
  next();
};

const validateUsername = [validate];

export default { validateUsername };
