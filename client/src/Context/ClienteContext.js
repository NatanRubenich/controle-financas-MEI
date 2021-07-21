import React, { createContext, useState, useContext } from 'react';

const ClienteContext = createContext();

// PROVIDER
export default function ClienteProvider({ children }) {
  const [usuario, setUsuario] = useState(false);

  return (
    <ClienteContext.Provider
      value={{
        usuario,
        setUsuario
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
}

// HOOK
export function useCliente() {
  const context = useContext(ClienteContext);
  if (!context) throw new Error("useCliente deve estar dentro de um ClienteProvider");
  const { usuario, setUsuario } = context;
  return { usuario, setUsuario };
}