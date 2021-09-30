import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6a4 4 0 118 0h-2a1 1 0 00-1 1v3a1 1 0 001 1h1a2 2 0 002-2V6A5 5 0 003 6v5a3 3 0 003 3h.59a1.5 1.5 0 100-1H6a2 2 0 01-2-2h2a1 1 0 001-1V7a1 1 0 00-1-1H4zm8 1v2a1 1 0 01-1 1h-1V7h2zm-6 3H4V7h2v3zm1.5 3.5a.5.5 0 111 0 .5.5 0 01-1 0z" fill={primaryFill} /></svg>;
}

const Headset16Regular = wrapIcon(rawSvg({}), 'Headset16Regular');
export default Headset16Regular;
      