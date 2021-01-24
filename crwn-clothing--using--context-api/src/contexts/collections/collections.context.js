import { createContext } from 'react';
import SHOP_DATA from './shop.data';

const CollectionsContent = createContext(SHOP_DATA);

export default CollectionsContent;