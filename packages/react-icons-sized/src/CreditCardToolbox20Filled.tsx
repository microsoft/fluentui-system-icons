import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75V7H2v-.25zM2 8v4.25A2.75 2.75 0 004.75 15H9v-1.5a2.5 2.5 0 012.04-2.46A2.5 2.5 0 0113.5 9h2a2.5 2.5 0 012.46 2.04l.04.01V8H2zm10 4v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm3.5-1h-2a.5.5 0 00-.5.5v.5h3v-.5a.5.5 0 00-.5-.5zm1.5 5.5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const CreditCardToolbox20Filled = wrapIcon(rawSvg({}), 'CreditCardToolbox20Filled');
export default CreditCardToolbox20Filled;
      