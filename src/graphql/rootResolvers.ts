import { mergeResolvers } from 'merge-graphql-schemas';
import devResolver from './repositories/Dev/resolvers';

const resolvers = [devResolver];

export default mergeResolvers(resolvers);
