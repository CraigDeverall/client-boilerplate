export const inMemoryCacheOptions = {
  typePolicies: {
    Query: {
      fields: {
        profiles: {
          merge(_: any, incoming: any[]) {
            return [...incoming];
          },
        },
      },
    },
  },
};
