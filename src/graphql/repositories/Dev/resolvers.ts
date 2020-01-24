import axios from 'axios';

import Dev from '../../../models/Dev';
import parseStringAsArray from '../../../utils/parseStringAsArray';

export default {
  Query: {
    devs: async (): Promise<object> => {
      const dev = await Dev.find();
      return dev;
    },
  },
  Mutation: {
    registrateDev: async (_, { input }): Promise<object> => {
      const {
        github_username, techs, latitude, longitude,
      } = input;

      const existedDev = await Dev.findOne({ github_username });

      if (!existedDev) {
        const gitResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name, avatar_url, bio } = gitResponse.data;


        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [latitude, longitude],
        };

        const dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location,
        });

        return dev;
      }
      return existedDev;
    },
    searchDev: async (_, { input }): Promise<object> => {
      const { latitude, longitude, techs } = input;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [latitude, longitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return devs;
    },
  },

};
