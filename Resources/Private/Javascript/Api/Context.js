import React, { createContext, useContext } from "react";
import propTypes from "prop-types";

const ApiContext = createContext(null);

export const ApiProvider = ({ client, children }) => (
  <ApiContext.Provider value={client}>{children}</ApiContext.Provider>
);

ApiProvider.propTypes = {
  client: propTypes.any,
  children: propTypes.element,
};

export const useApiClient = () => {
  const client = useContext(ApiContext);

  if (!client) {
    throw new Error(
      'Could not find "client" in the context or passed in as a prop. ' +
        "Wrap the root component in an <ApiProvider>."
    );
  }

  return client;
};
