import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.75V6H2.75a.75.75 0 00-.75.75v11.5A2.75 2.75 0 004.75 21h14.5A2.75 2.75 0 0022 18.25V6.75a.75.75 0 00-.75-.75H16V3.75C16 2.78 15.22 2 14.25 2h-4.5C8.78 2 8 2.78 8 3.75zm1.75-.25h4.5c.14 0 .25.11.25.25V6h-5V3.75c0-.14.11-.25.25-.25zM8 13V9.5h3.5V13H8zm0 4.5V14h3.5v3.5H8zm8-4.5h-3.5V9.5H16V13zm-3.5 4.5V14H16v3.5h-3.5z" fill={primaryFill} /></svg>;
}

const StoreMicrosoft24Filled = wrapIcon(rawSvg({}), 'StoreMicrosoft24Filled');
export default StoreMicrosoft24Filled;
      