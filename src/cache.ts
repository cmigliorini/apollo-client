import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn() {
          return isLoggedInVar();
        },
        cartItems() {
          return cartItemsVar();
        },
        languages: {
          keyArgs: false,
          merge(existing, incoming) {
            let languages: Reference[] = [];
            if (existing && existing.languages) {
              languages = languages.concat(existing.languages);
            }
            if (incoming && incoming.languages) {
              languages = languages.concat(incoming.languages);
            }
            return {
              ...incoming,
              languages,
            };
          }
        }
      }
    }
  }
});

export const isLoggedInVar =
  cache.makeVar<boolean>(!!localStorage.getItem('token'));
export const cartItemsVar = cache.makeVar<string[]>([]);
