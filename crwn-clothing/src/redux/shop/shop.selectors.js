import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [] // Verifying if there is no value
);

export const selectCollection = collectioUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectioUrlParam] : null) // Verifying if there is no value
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFecthing
)