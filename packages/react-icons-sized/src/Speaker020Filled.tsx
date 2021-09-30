import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 00-1.68-.73l-3.87 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l3.87 3.6a1 1 0 001.68-.74V3.01z" fill={primaryFill} /></svg>;
}

const Speaker020Filled = wrapIcon(rawSvg({}), 'Speaker020Filled');
export default Speaker020Filled;
      