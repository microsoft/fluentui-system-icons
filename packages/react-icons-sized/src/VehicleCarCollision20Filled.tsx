import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.74 5a1.5 1.5 0 00-1.35.83L14.31 8h3.19c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-1.55a2.5 2.5 0 01-4.9 0h-.25c-1 0-1.8-.8-1.8-1.8v-1.14a2.5 2.5 0 011.9-2.42l2.26-.57 1.34-2.69A2.5 2.5 0 0116.74 4h.76a.5.5 0 110 1h-.76zM12 13.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.5 8a.5.5 0 00-.5.5v5a2.5 2.5 0 004.98.33A1.8 1.8 0 008 12.2v-1.7a2.5 2.5 0 00-2.1-2.47L5.36 5.9A2.5 2.5 0 002.94 4H2.5a.5.5 0 000 1h.44c.69 0 1.29.47 1.45 1.14L4.86 8H2.5zm2 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 6.5v-1a.5.5 0 011 0v1a.5.5 0 01-1 0zm2.85 1.35l1-1a.5.5 0 00-.7-.7l-1 1a.5.5 0 10.7.7z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision20Filled = wrapIcon(rawSvg({}), 'VehicleCarCollision20Filled');
export default VehicleCarCollision20Filled;
      