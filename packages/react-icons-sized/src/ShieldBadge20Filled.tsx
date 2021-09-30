import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a2 2 0 00-2 2v4c0 1.1.9 2 2 2h6V9c3.23 0 3.75-.83 4.11-1.43.2-.32.36-.57.89-.57s.69.25.89.57c.2.32.43.7 1.11 1V7a2 2 0 00-2-2H4zm10.53 3.83v.02a1.63 1.63 0 01-.45.5c-.4.3-1.17.65-2.58.65a.5.5 0 00-.5.5v2c0 1.03.13 2.14.7 3.12.56 1 1.55 1.82 3.14 2.35.1.04.22.04.32 0a5.35 5.35 0 003.15-2.35c.56-.98.69-2.09.69-3.12v-2a.5.5 0 00-.5-.5c-1.41 0-2.18-.35-2.57-.65a1.63 1.63 0 01-.46-.52.5.5 0 00-.94 0zm.94 0v.01zm-.94 0v.01z" fill={primaryFill} /></svg>;
}

const ShieldBadge20Filled = wrapIcon(rawSvg({}), 'ShieldBadge20Filled');
export default ShieldBadge20Filled;
      