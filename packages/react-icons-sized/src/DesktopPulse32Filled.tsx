import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 4.45 3.46 3 5.25 3h21.5C28.55 3 30 4.46 30 6.25v7.25h-5.79l-1.53-2.73a2.5 2.5 0 00-4.47.23l-.9 2.04-1.94-5.83a2.5 2.5 0 00-4.71-.09l-2.4 6.38H2V6.25zM22.75 18.5H30v3.25c0 1.8-1.46 3.25-3.25 3.25h-6.74v2h3a1 1 0 110 2H9a1 1 0 110-2h3v-2H5.25A3.25 3.25 0 012 21.75V18.5h8a2.5 2.5 0 002.34-1.62l.52-1.39 1.77 5.3a2.5 2.5 0 004.66.21l1.5-3.44a2.5 2.5 0 001.96.94zM14.01 25v2h4v-2h-4zm-.06-17.32a1 1 0 00-1.89-.03L9.31 15H3a1 1 0 100 2h7a1 1 0 00.94-.65l2-5.35 3.11 9.32a1 1 0 001.87.08l2.7-6.16 1.26 2.25a1 1 0 00.87.51H29a1 1 0 100-2h-5.67l-1.96-3.49a1 1 0 00-1.79.09l-2.45 5.62-3.18-9.54z" fill={primaryFill} /></svg>;
}

const DesktopPulse32Filled = wrapIcon(rawSvg({}), 'DesktopPulse32Filled');
export default DesktopPulse32Filled;
      