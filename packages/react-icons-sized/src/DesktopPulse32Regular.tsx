import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v7.25h2V6.25C4 5.56 4.56 5 5.25 5h21.5c.69 0 1.25.56 1.25 1.25v7.25h2V6.25C30 4.45 28.54 3 26.75 3H5.25zM2 21.75V18.5h2v3.25c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25V18.5h2v3.25c0 1.8-1.46 3.25-3.25 3.25h-6.74v2h3a1 1 0 110 2H9a1 1 0 110-2h3v-2H5.25A3.25 3.25 0 012 21.75zM18 25h-3.99v2h4v-2zM13.96 7.68a1 1 0 00-1.89-.03L9.31 15H3a1 1 0 100 2h7a1 1 0 00.94-.65l2-5.35 3.11 9.32a1 1 0 001.87.08l2.7-6.16 1.26 2.25a1 1 0 00.87.51H29a1 1 0 100-2h-5.67l-1.96-3.49a1 1 0 00-1.79.09l-2.45 5.62-3.18-9.54z" fill={primaryFill} /></svg>;
}

const DesktopPulse32Regular = wrapIcon(rawSvg({}), 'DesktopPulse32Regular');
export default DesktopPulse32Regular;
      