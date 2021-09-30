import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.78 4.28a.75.75 0 00-1.06-1.06L17 9.94V3.75a.75.75 0 00-1.5 0v8c0 .41.34.75.75.75h8a.75.75 0 000-1.5h-6.19l6.72-6.72zM4.5 6.75V14h6.75A2.75 2.75 0 0114 16.75v6.75h7.25c1.24 0 2.25-1 2.25-2.25v-5a.75.75 0 011.5 0v5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25V6.75A3.75 3.75 0 016.75 3h5a.75.75 0 010 1.5h-5c-1.24 0-2.25 1-2.25 2.25zm0 8.75v5.75c0 1.24 1 2.25 2.25 2.25h5.75v-6.75c0-.7-.56-1.25-1.25-1.25H4.5z" fill={primaryFill} /></svg>;
}

const ContractDownLeft28Regular = wrapIcon(rawSvg({}), 'ContractDownLeft28Regular');
export default ContractDownLeft28Regular;
      