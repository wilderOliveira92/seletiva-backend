import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const playerRouter = Router();

const playerController = new PlayerController();

playerRouter.get('/', playerController.index);
playerRouter.post('/', playerController.create);
playerRouter.patch('/', playerController.update);

export default playerRouter;
