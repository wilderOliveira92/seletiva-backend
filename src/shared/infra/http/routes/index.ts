import { Router } from 'express';

// import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import categoryRouter from '@modules/selective/categories/infra/http/routes/categories.routes';
import responsibleRouter from '@modules/candidate/responsible/infra/http/routes/responsible.routes';
import addressRouter from '@modules/candidate/address/infra/http/routes/address.routes';
import playerRouter from '@modules/candidate/player/infra/http/routes/player.routes';

const routes = Router();

// routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/categories', categoryRouter);
routes.use('/responsible', responsibleRouter);
routes.use('/address', addressRouter);
routes.use('/player', playerRouter);

export default routes;
