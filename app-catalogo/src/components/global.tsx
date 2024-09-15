import { createContext, useState, ReactNode, useContext } from 'react';

// Tipo para o contexto
interface SelecionadoContextProps {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

// Criação do contexto
const SelecionadoContext = createContext<SelecionadoContextProps | undefined>(undefined);

// Provedor do contexto
export const SelecionadoProvider = ({ children }: { children: ReactNode }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <SelecionadoContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelecionadoContext.Provider>
  );
};

// Hook para usar o contexto
export const useSelecionado = () => {
  const context = useContext(SelecionadoContext);
  if (!context) {
    throw new Error('useSelecionado deve ser usado dentro de um SelecionadoProvider');
  }
  return context;
};
