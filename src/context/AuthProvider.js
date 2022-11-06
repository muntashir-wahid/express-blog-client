const { createContext } = require("react");

const defaultContext = {
  user: {},
};

export const AuthContext = createContext(defaultContext);

const AuthProvider = ({ children }) => {
  const user = { displayName: "Muntashir wahid" };

  const userContext = { user };

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
