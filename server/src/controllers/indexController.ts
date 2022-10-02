import { Request, Response } from 'express';
import * as indexServices from '@/services/indexService';

function getIndexService(_req: Request, res: Response): void {
  res.send(indexServices.sendStatusOk());
}

export default {
  getIndexService,
};
