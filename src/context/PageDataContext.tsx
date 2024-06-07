import React, { createContext, useContext, useState, ReactNode } from "react";

interface PageDataContextType {
  data: any;
  setData: (data: any) => void;
}

const PageDataContext = createContext<PageDataContextType | undefined>(undefined);

export const PageDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null);

  return (
    <PageDataContext.Provider value={{ data, setData }}>
      {children}
    </PageDataContext.Provider>
  );
};

export const usePageData = () => {
  const context = useContext(PageDataContext);
  if (!context) {
    throw new Error("usePageData must be used within a PageDataProvider");
  }
  return context;
};
