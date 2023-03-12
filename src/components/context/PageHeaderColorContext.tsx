import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const pageHeaderColorContext = createContext(null);

export default function PageHeaderColorContextProvider({ children }: ContextType) {
  return <pageHeaderColorContext.Provider value={null}>{children}</pageHeaderColorContext.Provider>;
}

const propTypes = {
  children: PropTypes.any
};

type ContextType = PropTypes.InferProps<typeof propTypes>;

PageHeaderColorContextProvider.propTypes = propTypes;
