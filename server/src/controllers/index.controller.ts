import { Request, Response } from 'express';

function get(req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    messsage: 'Welcome to the home page!',
  });
}

export default {
  get,
};
