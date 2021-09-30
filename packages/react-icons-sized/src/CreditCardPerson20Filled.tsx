import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75V7h10.76a3 3 0 014.48 0H18v-.25A2.75 2.75 0 0015.25 4H4.75zm7.42 4H2v4.25A2.75 2.75 0 004.75 15h5.5a4.56 4.56 0 01-.25-1.5 2.5 2.5 0 012.5-2.5h.26a2.99 2.99 0 01-.59-3zM13 9a2 2 0 114 0 2 2 0 01-4 0zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 0111 13.5c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const CreditCardPerson20Filled = wrapIcon(rawSvg({}), 'CreditCardPerson20Filled');
export default CreditCardPerson20Filled;
      