import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75V12h4.75A2.75 2.75 0 0112 14.75v4.75h5.75c.97 0 1.75-.78 1.75-1.75v-4a.75.75 0 011.5 0v4c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h4a.75.75 0 010 1.5h-4zm9.31 5h4.69a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v4.69l5.22-5.22a.75.75 0 111.06 1.06L15.56 9.5z" fill={primaryFill} /></svg>;
}

const ContractDownLeft24Filled = wrapIcon(rawSvg({}), 'ContractDownLeft24Filled');
export default ContractDownLeft24Filled;
      