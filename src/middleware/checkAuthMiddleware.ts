import asyncHandler from "express-async-handler";

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
interface ExtendedRequest extends Request {
  user?: any;
  roles?: string[];
}
const checkAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let jwtToken: string | undefined;
    try {
      const authHeader = req.headers.authorization || req.headers.Authorization;
      if (
        typeof authHeader !== "string" ||
        !authHeader?.startsWith("Bearer ")
      ) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      // if (typeof authHeader === "string") {

      // }
      jwtToken = authHeader.split(" ")[1];
      if (!jwtToken) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }
      const decoded = jwt.verify(jwtToken, process.env.JWT_ACCESS_SECRET_KEY!);
      if (decoded && typeof decoded === "object" && "id" in decoded) {
        const userId = decoded.id;
        next();
      }
      next();
    } catch (error) {
      res.status(501).json({ message: "Server mistake", error });
    }
  }
);
export default checkAuth;


