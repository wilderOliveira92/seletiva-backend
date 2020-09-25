import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
import UsersTokenRepository from '@modules/users/infra/typeorm/repositories/UsersTokenRepository';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';
import ICategoryRepository from '@modules/selective/categories/repositories/ICategoryRepository';
import CategoryRepository from '@modules/selective/categories/infra/typeorm/repositories/CategoryRepository';

import IResponsibleRepository from '@modules/candidate/responsible/repositories/IResponsibleRepository';
import ResponsibleRepository from '@modules/candidate/responsible/infra/typeorm/repositories/ResponsibleRepository';
import IAddressRepository from '@modules/candidate/address/repositories/IAddressRespository';
import AddressRepository from '@modules/candidate/address/infra/typeorm/repositories/AddressRepository';
import IPlayerRepository from '@modules/candidate/player/repositories/IPlayerRepository';
import PlayerRepository from '@modules/candidate/player/infra/typeorm/repositories/PlayerRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokenRepository>(
  'UsersTokenRepository',
  UsersTokenRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<IResponsibleRepository>(
  'ResponsibleRepository',
  ResponsibleRepository,
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);

container.registerSingleton<IPlayerRepository>(
  'PlayerRepository',
  PlayerRepository,
);
