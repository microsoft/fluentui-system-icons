import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.56 10.2c.45.29.95.53 1.5.72.28.1.6.1.89 0 .37-.13.72-.29 1.05-.46V13a2 2 0 01-2 2H3a2 2 0 01-2-2V8.34l5.76 3.1a.5.5 0 00.48 0l2.32-1.25zM7 5v.39c.04 1.18.33 2.24.9 3.15.23.35.5.68.8.97l-1.7.92L1 7.2V7c0-1.1.9-2 2-2h4zm7-2.56a3.52 3.52 0 01-1-.35 4.72 4.72 0 01-1.25-.98.33.33 0 00-.5 0 3.89 3.89 0 01-2.9 1.39c-.2 0-.35.17-.35.38v2.48c.04 1.03.29 1.91.75 2.64.24.37.53.7.88 1 .48.4 1.07.73 1.76.98.07.03.15.03.22 0A4.75 4.75 0 0015 5.13V2.8a.36.36 0 00-.35-.3c-.22 0-.44-.02-.65-.06z" fill={primaryFill} /></svg>;
}

const MailShield16Filled = wrapIcon(rawSvg({}), 'MailShield16Filled');
export default MailShield16Filled;
      