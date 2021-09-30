import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.76 5.43l-.3-1.51A10.3 10.3 0 008 3.75a7.22 7.22 0 00-1.45.17l-.3 1.51a1.5 1.5 0 01-1.2 1.18l-.68.13a2 2 0 01-2.3-1.52L2 4.92c-.26-1.12.16-2.39 1.32-2.91a11.47 11.47 0 019.4 0c1.14.52 1.55 1.78 1.29 2.9l-.07.3a2 2 0 01-2.3 1.53l-.68-.13a1.5 1.5 0 01-1.2-1.18z" fill={primaryFill} /><path d="M4 11a4 4 0 118 0 4 4 0 01-8 0zm3.5-2a.5.5 0 00-.5.5v2c0 .28.23.5.5.5H9a.5.5 0 000-1H8V9.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const CallMissed16Filled = wrapIcon(rawSvg({}), 'CallMissed16Filled');
export default CallMissed16Filled;
      