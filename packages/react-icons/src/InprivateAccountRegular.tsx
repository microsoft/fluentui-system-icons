import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a4 4 0 017.12-2.5H10V3a3 3 0 000 6v-.5h3.12A4 4 0 016 6z" fill={primaryFill} /><path d="M13.7 7.5H10v-1h3.97c-.04.35-.13.68-.26 1z" fill={primaryFill} /><path d="M13.97 5.5a3.97 3.97 0 00-.26-1H10v1h3.97z" fill={primaryFill} /><path d="M3 13a2 2 0 012-2h10a2 2 0 011.73 1H5a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17h4.52c-1.24.68-2.83 1-4.52 1a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13z" fill={primaryFill} /><path d="M10 14v-1h7c0 .35-.04.68-.1 1H10z" fill={primaryFill} /><path d="M16.54 15c-.18.36-.42.7-.7 1h-1.59.01H10v-1h6.54z" fill={primaryFill} /></svg>;
}

const InprivateAccountRegular = wrapIcon(rawSvg({}), 'InprivateAccountRegular');
export default InprivateAccountRegular;
      