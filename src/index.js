import checkCache from './handler';

export default {
  fetch: async (request) => await checkCache(request)
};
