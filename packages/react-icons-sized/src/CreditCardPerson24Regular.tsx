import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25V10h-.26a3.74 3.74 0 00-1.24-2.55v-.2c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v.25h11.95c-.44.4-.78.92-.99 1.5H3.5v5.75c0 .97.78 1.75 1.75 1.75h6.78c.06.52.22 1.03.46 1.5H5.25A3.25 3.25 0 012 14.75v-7.5zm21 8.25c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5zm-2.25-5.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z" fill={primaryFill} /></svg>;
}

const CreditCardPerson24Regular = wrapIcon(rawSvg({}), 'CreditCardPerson24Regular');
export default CreditCardPerson24Regular;
      