import { mergeTypes } from 'merge-graphql-schemas';

import devTypess from './repositories/Dev/types';

const types = [devTypess];

export default mergeTypes(types, { all: true });
