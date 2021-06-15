import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useMemo,
} from "react";

const AuthContext = createContext();
export function AuthStateProvider({ initialState = false, children }) {
  const [state, setState] = useState(initialState);
  const value = useMemo(() => [state, setState], [state]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuthStateValue() {
  const [state] = useContext(AuthContext);
  if (typeof state == undefined) {
    throw new Error(
      "Using App State value is only possible inside AppStateProvider"
    );
  }
  return state;
}
export function useAuthStateUpdater() {
  const [,setAppState] = useContext(AuthContext);
  if (typeof setAppState == "undefined") {
    throw new Error(
      "Using App State updater is only possible inside AppStateProvider"
    );
  }
  const toggleAuthentication = useCallback(() => {
    setAppState((state) => !state);
  }, [setAppState]);
  return toggleAuthentication;
}

export function useAuthState() {
  return [useAuthStateValue(), useAuthStateUpdater()];
}
