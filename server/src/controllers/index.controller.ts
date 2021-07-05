import { Request, Response } from 'express';

function get(req: Request, res: Response): void {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
    });
  }

  res.status(200).json({
    success: true,
    messsage: 'Welcome to the home page!',
  });
}

export default {
  get,
};
