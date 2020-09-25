import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';

const fileDirectory = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';
  tmpFolder: string;
  uploadsFolder: string;
  multer: {
    storage: StorageEngine;
  };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder: fileDirectory,
  uploadsFolder: path.resolve(fileDirectory, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: fileDirectory,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'nome-do-bucket',
    },
  },
} as IUploadConfig;
