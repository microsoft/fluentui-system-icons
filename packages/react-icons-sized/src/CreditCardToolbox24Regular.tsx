import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v7.5C2 16.55 3.46 18 5.25 18H11v-1.5H5.25c-.97 0-1.75-.78-1.75-1.75V9h17v2.55c.89.45 1.5 1.37 1.5 2.44V7.25C22 5.45 20.54 4 18.75 4H5.25zM20.5 7.5h-17v-.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v.25zM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const CreditCardToolbox24Regular = wrapIcon(rawSvg({}), 'CreditCardToolbox24Regular');
export default CreditCardToolbox24Regular;
      