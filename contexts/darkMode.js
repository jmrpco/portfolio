import { createContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const context = { dark, setDark };

  return (
    <DarkModeContext.Provider value={context}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
