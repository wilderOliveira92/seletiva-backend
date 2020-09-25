import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async create(request: Request, response: Response): Promise<Response> {
    const updateAvatarService = container.resolve(UpdateUserAvatarService);

    const user = await updateAvatarService.execute({
      user_id: request.user.id,
      fileName: request.file.filename,
    });
 
    return response.json(classToClass(user));

  }
}
