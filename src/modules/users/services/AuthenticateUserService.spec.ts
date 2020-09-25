import AppError from '@shared/errors/appError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'wilder',
      email: 'wilder@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'wilder@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able authenticate', async () => {
    await expect(
      authenticateUser.execute({
        email: 'wilder@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'wilder',
      email: 'wilder@gmail.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'wilder@gmail.com',
        password: 'deu-ruim',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
