import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v5.5A2.75 2.75 0 004.75 15H9v-1H4.75C3.78 14 3 13.22 3 12.25V8h14v1.5c.5.37.84.91.96 1.54l.04.01v-4.3A2.75 2.75 0 0015.25 4H4.75zM17 7H3v-.25C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V7zm-5 5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm3.5-1h-2a.5.5 0 00-.5.5v.5h3v-.5a.5.5 0 00-.5-.5zm1.5 5.5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const CreditCardToolbox20Regular = wrapIcon(rawSvg({}), 'CreditCardToolbox20Regular');
export default CreditCardToolbox20Regular;
      