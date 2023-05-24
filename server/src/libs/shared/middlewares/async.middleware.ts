import { NextFunction, Request, Response } from 'express';

type RouteHandler<T> = (req: Request, res: Response) => Promise<T>;

export const asyncMiddleware = <T>(routeHandler: RouteHandler<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routeHandler(req, res);
    } catch (err) {
      // Pass the error thrown to the Express error handling middleware
      next(err);
    }
  };
};
