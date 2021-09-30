import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2.75 2.75 0 00-.75 5.4v3.85a.75.75 0 001.5 0V7.4A2.75 2.75 0 0012 2zm-1.25 2.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM3 6.5a2.5 2.5 0 015 0V10h2.25v1.5H6.5v-5a1 1 0 00-2 0v12a1 1 0 102 0v-5H11v5a1 1 0 102 0v-5h6a.5.5 0 00.5-.5V6.5a1 1 0 10-2 0v5h-3.75V10H16V6.5a2.5 2.5 0 015 0V13a2 2 0 01-2 2h-4.5v3.5a2.5 2.5 0 01-5 0V15H8v3.5a2.5 2.5 0 01-5 0v-12z" fill={primaryFill} /></svg>;
}

const Transmission24Regular = wrapIcon(rawSvg({}), 'Transmission24Regular');
export default Transmission24Regular;
      