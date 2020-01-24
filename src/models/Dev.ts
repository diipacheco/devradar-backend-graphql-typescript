import {
  Schema, model, Document, MongooseDocument,
} from 'mongoose';

import { PointSchema } from './utils/Point';

export interface DevInterface extends Document{
  name: string;
  github_username: string;
  bio: string;
  avatar_url: string;
  techs: Array<string>;
   location: {
       type: MongooseDocument;
       index: string;
   };
}

const DevSchema = new Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },

});

export default model<DevInterface>('Dev', DevSchema);
