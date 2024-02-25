import { createContext, useContext } from 'react';
const dropdownContext = createContext({});

export const DropdownProvider = dropdownContext.Provider;

export default () => useContext(dropdownContext);
