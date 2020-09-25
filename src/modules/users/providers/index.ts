import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHshProvider from './HashProvider/implementations/BCryptHshProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHshProvider);
