import { Router } from 'express';
import ResponsibleController from '../controllers/ResponsibleController';

const responsibleRouter = Router();

const responsibleController = new ResponsibleController();

responsibleRouter.get('/', responsibleController.index);
responsibleRouter.post('/', responsibleController.create);
responsibleRouter.patch('/', responsibleController.update);

export default responsibleRouter;
