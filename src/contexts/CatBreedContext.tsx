import React, { createContext, useContext, useState, ReactNode } from 'react';

type BreedOption = { 
  value: string; 
  label: string; 
};

type CatBreedContextType = {
  selectedBreed: BreedOption | null;
  setSelectedBreed: (breed: BreedOption | null) => void;
};

const CatBreedContext = createContext<CatBreedContextType | undefined>(undefined);

export const useCatBreedContext = () => {
  const context = useContext(CatBreedContext);
  if (!context) {
    throw new Error('useCatBreedContext must be used within a CatBreedContextProvider');
  }
  return context;
};

type CatBreedProviderProps = {
  children: ReactNode;
};

export const CatBreedProvider = ({ children }: CatBreedProviderProps) => {
  const [selectedBreed, setSelectedBreed] = useState<BreedOption | null>(null);

  return (
    <CatBreedContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      {children}
    </CatBreedContext.Provider>
  );
};
