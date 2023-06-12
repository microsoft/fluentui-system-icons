import * as React from 'react';

const IconDirectionContext = React.createContext<IconDirectionContextValue | undefined>(undefined);

export interface IconDirectionContextValue {
  textDirection?: 'ltr' | 'rtl'
}

const IconDirectionContextDefaultValue: IconDirectionContextValue = {};

export const IconDirectionContextProvider = IconDirectionContext.Provider;

export const useIconContext = () => React.useContext(IconDirectionContext) ?? IconDirectionContextDefaultValue;