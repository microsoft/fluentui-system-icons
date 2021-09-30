import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 00-1.68-.73l-3.87 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l3.87 3.6a1 1 0 001.68-.74V3.01z" fill={primaryFill} /><path d="M15.25 4.63a.5.5 0 01.71.04 8 8 0 010 10.66.5.5 0 11-.75-.66 7 7 0 000-9.34.5.5 0 01.04-.7z" fill={primaryFill} /><path d="M14.08 12.93a.5.5 0 01-.19-.68 4.5 4.5 0 000-4.5.5.5 0 11.87-.5 5.5 5.5 0 010 5.5.5.5 0 01-.68.18z" fill={primaryFill} /></svg>;
}

const Speaker220Filled = wrapIcon(rawSvg({}), 'Speaker220Filled');
export default Speaker220Filled;
      