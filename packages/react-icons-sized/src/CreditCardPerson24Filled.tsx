import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v.25h13.45a3.74 3.74 0 015.1 0H22v-.25C22 5.45 20.54 4 18.75 4H5.25zM2 14.75V9h12.46a3.74 3.74 0 00.99 4h-.95a2.5 2.5 0 00-2.5 2.5v.5c0 .7.17 1.38.49 2H5.25A3.25 3.25 0 012 14.75zm21 .75c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5zm-2.25-5.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z" fill={primaryFill} /></svg>;
}

const CreditCardPerson24Filled = wrapIcon(rawSvg({}), 'CreditCardPerson24Filled');
export default CreditCardPerson24Filled;
      