import express from 'express';
import indexController from '@/controllers/indexController';

const indexRouter = express.Router();

indexRouter.get('/', indexController.getIndexService);

export default indexRouter;
