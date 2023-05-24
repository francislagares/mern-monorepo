import { Request, Response } from 'express';

class HealthController {
  public getHealth = async (_req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send({ health: 'OK!' });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };
}

export default HealthController;
