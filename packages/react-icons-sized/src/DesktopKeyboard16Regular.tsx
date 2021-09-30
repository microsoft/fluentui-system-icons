import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v6c0 1.1.9 2 2 2h1v1h-.5a.5.5 0 000 1H5v-3H3a1 1 0 01-1-1V3a1 1 0 011-1h8a1 1 0 011 1v4h1V3a2 2 0 00-2-2H3zm3 8.5C6 8.67 6.67 8 7.5 8h6c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 016 13.5v-4zm2 4c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zm.5-3.5a.5.5 0 100-1 .5.5 0 000 1zm1.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm.5-1.5a.5.5 0 100-1 .5.5 0 000 1zm1.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm.5-1.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const DesktopKeyboard16Regular = wrapIcon(rawSvg({}), 'DesktopKeyboard16Regular');
export default DesktopKeyboard16Regular;
      