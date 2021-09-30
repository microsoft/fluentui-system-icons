import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v5.5A2.75 2.75 0 004.75 15h5.5c-.11-.31-.19-.65-.22-1H4.75C3.78 14 3 13.22 3 12.25V8h9.17a3 3 0 01.6-1H3v-.25C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v.01A3 3 0 0118 9V6.75A2.75 2.75 0 0015.25 4H4.75zM13 9a2 2 0 114 0 2 2 0 01-4 0zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 0111 13.5c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const CreditCardPerson20Regular = wrapIcon(rawSvg({}), 'CreditCardPerson20Regular');
export default CreditCardPerson20Regular;
      