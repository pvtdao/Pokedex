import { createContext } from 'react';

type ContextObj = {
  [key: string]: any;
};

const defaulValues: ContextObj = {};
const appContext = createContext(defaulValues);

export default appContext;
